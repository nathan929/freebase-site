var MF = {
  "apps": {
    "core": "//core.site.freebase.dev"
  },
  "javascript": {
    "jquery.ui.core.mf.js": ["jquery.ui.core.js", "jquery.ui.widget.js", "jquery.ui.mouse.js", "jquery.ui.position.js"]
  }
};

acre.require(MF.apps.core + "/MANIFEST").init(MF, this);
