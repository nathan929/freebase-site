var mf = acre.require("MANIFEST").mf;
var deferred = mf.require("promise", "deferred");
var freebase = mf.require("promise", "apis").freebase;
var h = mf.require("core", "helpers");
var create_article = mf.require("queries", "create_article");
var validators = mf.require("validator", "validators");

/**
 * Create a new type using the permission of the specified domain.
 *
 * @param o:Object (required) - options specifying the new type.
 */
function create_type(options) {
  var o;
  try {
    o = {
      domain: validators.MqlId(options, "domain", {required:true}),
      name: validators.String(options, "name", {required:true}),
      key: validators.String(options, "key", {required:true}),
      description: validators.String(options, "description", {if_empty:""}),
      role: validators.OneOf(options, "role", {oneof:["mediator", "enumeration"], if_empty:""}),
      terminal: validators.StringBool(options, "terminal", {if_empty:false}),
      lang: validators.MqlId(options, "lang", {if_empty:"/lang/en"})

    };
  }
  catch(e if e instanceof validators.Invalid) {
    return deferred.rejected(e);
  }

  var q = {
    id: null,
    guid: null,
    key: {
      value: o.key,
      namespace: o.domain
    },
    type: {
      id: "/type/type"
    },
    "/type/type/domain": {
      id: o.domain
    },
    create: "unless_exists"
  };
  return freebase.mqlwrite(q, {use_permission_of: o.domain})
    .then(function(env) {
      return env.result;
    })
    .then(function(created) {
      if (created.create === "existed") {
        return deferred.rejected("key already exists: " + o.key);
      }
      // cleanup result
      created.domain = created["/type/type/domain"];

      q = {
        id: created.id,
        name: {
          value: o.name,
          lang: o.lang,
          connect: "update"
        }
      };
      if (o.role === "mediator") {
        // need to update /freebase/type_hints/mediator
        q["/freebase/type_hints/mediator"] = {
          value: true,
          connect: "update"
        };
        if (o.terminal) {
          q["/freebase/type_hints/terminal"] = {
            value: true,
            connect: "update"
          };
        }
      }
      else {
        if (o.role === "enumeration") {
          // need to update /freebase/type_hints/enumeration
          q["/freebase/type_hints/enumeration"] = {
            value: true,
            connect: "update"
          };
        }
        q["/freebase/type_hints/included_types"] = {
          id: "/common/topic",
          connect: "insert"
        };
      }
      return freebase.mqlwrite(q)
        .then(function(env) {
          return env.result;
        })
        .then(function(result) {
          if (o.description !== "") {
            return create_article.create_article(o.description, "text/html",
                                                 {use_permission_of: o.domain, topic: created.id, lang:o.lang})
              .then(function(article) {
                return created;
              });
          }
          return created;
        });
    });
};

