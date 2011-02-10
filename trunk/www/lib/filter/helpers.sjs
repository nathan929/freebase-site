/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var h = acre.require("helper/helpers.sjs");
var i18n = acre.require("i18n/i18n");

/**
 * remove a filter from filters.
 * filters is untouched and a copy is returned.
 */
function remove_filter(filters, name) {
  var f = h.extend(true, {}, filters);
  f[name] = null;
  for (var k in f) {
    if (f[k] == null) {
      delete f[k];
    }
  }
  return f;
};

/**
 * add a filter to filters
 * filters is untouched and a copy is returned.
 */
function add_filter(filters, name, value) {
  var f = h.extend(true, {}, filters);
  f[name] = value;
  for (var k in f) {
    if (f[k] == null) {
      delete f[k];
    }
  }
  return f;
};

function format_number(n) {
  if (n < 10) {
    return "<10";
  }
  var i;
  for (i=20; i<100; i+=10) {
    if (n < i) {
      return h.sprintf("%s+", (i-10));
    }
  }
  for (i=200; i<1000; i+=100) {
    if (n < i) {
      return h.sprintf("%s+", (i-100));
    }
  }
  if (n < 10000) {
    return h.sprintf("%sk", Math.round(n/100)/10);
  }
  return h.sprintf("%sk", i18n.format_number(Math.round(n/1000)));
};

/**
 * Given the domain|type|property filter option, lookup the count data in prop_counts (bdb json format) and return
 * the data suitable for a chart graph.
 *
 * If domain, the data is prop_counts[domain],
 * If type, the data is prop_counts[domain][type],
 * If property, the data is prop_counts[domain][type][property]
 */
function get_bar_graph_data(filters, prop_counts) {
  var domain = filters.domain;
  var type = filters.type;
  var property = filters.property;

  var data;
  // keep track of the id_prefix since the prop_counts bdb splits the type/property id's to be as minimal as possible
  var id_prefix = "";
  if (domain) {
    data = prop_counts[domain];
    id_prefix = domain;
  }
  else if (type) {
    domain = acre.freebase.mqlread({id:type, type:"/type/type", domain:null}).result.domain;
    data = prop_counts[domain];
    if (data) {
      data = data["/"+type.split("/").pop()];
      id_prefix = type;
    }
  }
  else if (property) {
    type = acre.freebase.mqlread({id:property, type:"/type/property", schema: {id:null, domain:null}}).result.schema;
    domain = type.domain;
    type = type.id;
    data = prop_counts[domain];
    if (data) {
      data =  data["/"+type.split("/").pop()];
      if (data) {
        data = data["/"+property.split("/").pop()];
        if (data != null) {
          return [{id:"total", total:100, t:data}];
        }
      }
    }
    return null;
  }
  else {
    data = prop_counts;
  }
  if (data == null) {
    return null;
  }
  var list = [];
  for (k in data) {
    if (k === 'ti' || k == 'to') continue;
    var counts = data[k];
    if (typeof counts === "number") {
      counts = {t:counts};
    }
    else {
      counts.t = counts.ti + counts.to;
    }
    list.push([k, counts]);
  }
  if (!list.length) {
    return null;
  }
  list.sort(function(a,b) {
    return b[1].t - a[1].t;
  });
  var first = list[0];
  var first_total = first[1].t;
  if (first_total < 1) {
    return null;
  }
  var new_filters = h.extend(true, {}, filters);
  delete new_filters.domain;
  delete new_filters.type;
  delete new_filters.property;
  var filter_key;
  if (filters.domain) {
    filter_key = "type";
  }
  else if (filters.type) {
    filter_key = "property";
  }
  else {
    filter_key = "domain";
  }
  var chart_data = [];
  list.forEach(function(item) {
    var count = item[1];
    data = {
      id: id_prefix + item[0],
      t: count.t,
      total: Math.round((100*count.t)/first_total)
    };
    if ("ti" in count && "to" in count) {
      data.ti = count.ti;
      data.to = count.to;
      data.incoming =  Math.round((100*count.ti)/first_total);
      data.outgoing = Math.round((100*count.to)/first_total);
    }
    data.params = add_filter(new_filters, filter_key, data.id);
    chart_data.push(data);
  });
  return chart_data;
};
