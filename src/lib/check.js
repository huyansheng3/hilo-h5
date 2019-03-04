(function() {
  "use strict";
  function e() {
    t(), i(), n();
  }
  function t() {
    (r = $("#common-landscape")),
      (o = $("#common-pc")),
      (p = $("#common-share")),
      (s = $(".common-container"));
  }
  function i() {
    var e = function() {
      switch (window.orientation) {
        case 0:
        case 180:
          r.hide();
          break;
        case -90:
        case 90:
          r.show();
      }
    };
    e(),
      window.addEventListener(
        "onorientationchange" in window ? "orientationchange" : "resize",
        e,
        !1
      );
  }
  function n() {
    $.os.phone ||
      $.os.tablet ||
      (new QRCode(o.children()[0]).makeCode(location.href),
      $("body")
        .children()
        .hide(),
      o.show());
  }
  var r, o, p, s;
  $(e);
})();
