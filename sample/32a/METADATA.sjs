var METADATA = {
  "mounts": {
    "site": "//29.site.www.branches.svn.freebase-site.googlecode.dev"
  }, 
  "app_tag": null, 
  "app_version": 32, 
  "app_key": "sample"
};

acre.require(METADATA.mounts.site + "/lib/helper/helpers.sjs").extend_metadata(METADATA, "site");
