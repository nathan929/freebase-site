

var MF = {
  "apps" : {
    "core" : "//core.site.freebase.dev",
    "template" : "//core.site.freebase.dev",
    "sample" : "//sample.site.freebase.dev",
    "domain" : "//domain.site.freebase.dev",
    "schema" : "//schema.site.freebase.dev",
    "toolbox": "//toolbox.site.freebase.dev",
    "appadmin" : "//appadmin.site.freebase.dev",
    "error" : "//error.site.freebase.dev",
    "homepage" : "//homepage.site.freebase.dev",
    "routing": "//routing.site.freebase.dev"
  }
};

function is_release_pod() {
  return /^https?:\/\/(www\.)?(freebase|sandbox\-freebase|branch\.qa\.metaweb)\.com(\:\d+)?/.test(acre.request.app_url);
};

if (is_release_pod()) {
  for (var app in MF.apps) {
    MF.apps[app] = "//release." + MF.apps[app].slice(2);
  }
}

// map[path] = app label
var _app_paths = {};
for (var app in MF.apps) {
  var path = MF.apps[app];
  _app_paths[path] = app;
}
function get_app(path) {
  return _app_paths[path];
};


acre.require("/freebase/site/core/MANIFEST").init(MF, this);
