var METADATA = {
  "mounts": {
    "site": "//10g.site.www.tags.svn.freebase-site.googlecode.dev"
  }, 
  "app_version": "12", 
  "app_tag": "12a", 
  "app_key": "sample"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");