var app_labels = {  
  "admin"             : "//admin.site.trunk.svn.freebase-site.googlecode.dev",
  "appeditor"         : "//appeditor.site.trunk.svn.freebase-site.googlecode.dev",
  "appeditor-services": "//appeditor-services.site.trunk.svn.freebase-site.googlecode.dev",
  "apps"              : "//apps.site.trunk.svn.freebase-site.googlecode.dev",
  "cubed"             : "//cubed.dfhuynh.user.dev",
  "cuecard"           : "//cuecard.site.trunk.svn.freebase-site.googlecode.dev",
  "codemirror"        : "//codemirror.site.trunk.svn.freebase-site.googlecode.dev",
  "devdocs"           : "//devdocs.site.trunk.svn.freebase-site.googlecode.dev",
  "domain"            : "//domain.site.trunk.svn.freebase-site.googlecode.dev",
  "error"             : "//error.site.trunk.svn.freebase-site.googlecode.dev",
  "homepage"          : "//homepage.site.trunk.svn.freebase-site.googlecode.dev",
  "labs"              : "//labs-site.dfhuynh.user.dev",
  "parallax"          : "//parallax.dfhuynh.user.dev",
  "permission"        : "//permission.site.trunk.svn.freebase-site.googlecode.dev",
  "policies"          : "//policies.site.trunk.svn.freebase-site.googlecode.dev",
  "queryeditor"       : "//cuecard.dfhuynh.user.dev",
  "sample"            : "//sample.site.trunk.svn.freebase-site.googlecode.dev",
  "app_template_barebones"  : "//app_template_barebones.site.trunk.svn.freebase-site.googlecode.dev",
  "app_template_freebase"   : "//app_template_freebase.site.trunk.svn.freebase-site.googlecode.dev",
  "schema"            : "//schema.site.trunk.svn.freebase-site.googlecode.dev",
  "tasks"             : "//tasks.site.trunk.svn.freebase-site.googlecode.dev",
  "tmt"               : "//tmt.zenkat.user.dev",
  "toolbox"           : "//toolbox.site.trunk.svn.freebase-site.googlecode.dev",
  "topicblocks"       : "//topicbox.daepark.user.dev",
  "triples"           : "//triples.site.trunk.svn.freebase-site.googlecode.dev",
  "template"          : "//template.site.trunk.svn.freebase-site.googlecode.dev",
  "routing"           : "//routing.site.trunk.svn.freebase-site.googlecode.dev"
};

var routing = acre.require(app_labels["routing"] + "/routes");
routing.host_based_redirects(acre.request);
routing.path_based_routing(acre.request, app_labels);