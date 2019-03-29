!(function() {
  function e(e, t, i) {
    var n,
      a,
      r = document.querySelector('meta[name="viewport"]'),
      o = document.documentElement.clientWidth;
    switch (e) {
      case "fixed":
        (n = t), (a = o / t);
        break;
      case "rem":
        var p = window.devicePixelRatio || 1;
        (n = o * p),
          (a = 1 / p),
          (document.documentElement.style.fontSize =
            100 * ((o * p) / t) + "px");
    }
    r.setAttribute(
      "content",
      "width=" +
        n +
        ",initial-scale=" +
        a +
        ",maximum-scale=" +
        a +
        ",minimum-scale=" +
        a
    ),
      i &&
        window.addEventListener("DOMContentLoaded", function() {
          document.body.style.fontSize = 50 / a + "px";
        });
  }
  e("fixed", 750);
})();
