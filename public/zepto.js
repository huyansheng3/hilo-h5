var Zepto = (function() {
  function e(e) {
    return null == e ? String(e) : q[Z.call(e)] || "object";
  }
  function t(t) {
    return "function" == e(t);
  }
  function i(e) {
    return null != e && e == e.window;
  }
  function n(e) {
    return null != e && e.nodeType == e.DOCUMENT_NODE;
  }
  function a(t) {
    return "object" == e(t);
  }
  function r(e) {
    return a(e) && !i(e) && Object.getPrototypeOf(e) == Object.prototype;
  }
  function o(e) {
    return "number" == typeof e.length;
  }
  function p(e) {
    return L.call(e, function(e) {
      return null != e;
    });
  }
  function s(e) {
    return e.length > 0 ? E.fn.concat.apply([], e) : e;
  }
  function l(e) {
    return e
      .replace(/::/g, "/")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
      .replace(/([a-z\d])([A-Z])/g, "$1_$2")
      .replace(/_/g, "-")
      .toLowerCase();
  }
  function c(e) {
    return e in R ? R[e] : (R[e] = new RegExp("(^|\\s)" + e + "(\\s|$)"));
  }
  function h(e, t) {
    return "number" != typeof t || I[l(e)] ? t : t + "px";
  }
  function u(e) {
    var t, i;
    return (
      P[e] ||
        ((t = M.createElement(e)),
        M.body.appendChild(t),
        (i = getComputedStyle(t, "").getPropertyValue("display")),
        t.parentNode.removeChild(t),
        "none" == i && (i = "block"),
        (P[e] = i)),
      P[e]
    );
  }
  function d(e) {
    return "children" in e
      ? k.call(e.children)
      : E.map(e.childNodes, function(e) {
          if (1 == e.nodeType) return e;
        });
  }
  function m(e, t) {
    var i,
      n = e ? e.length : 0;
    for (i = 0; i < n; i++) this[i] = e[i];
    (this.length = n), (this.selector = t || "");
  }
  function f(e, t, i) {
    for (T in t)
      i && (r(t[T]) || K(t[T]))
        ? (r(t[T]) && !r(e[T]) && (e[T] = {}),
          K(t[T]) && !K(e[T]) && (e[T] = []),
          f(e[T], t[T], i))
        : t[T] !== b && (e[T] = t[T]);
  }
  function _(e, t) {
    return null == t ? E(e) : E(e).filter(t);
  }
  function g(e, i, n, a) {
    return t(i) ? i.call(e, n, a) : i;
  }
  function y(e, t, i) {
    null == i ? e.removeAttribute(t) : e.setAttribute(t, i);
  }
  function v(e, t) {
    var i = e.className || "",
      n = i && i.baseVal !== b;
    return t === b
      ? n
        ? i.baseVal
        : i
      : void (n ? (i.baseVal = t) : (e.className = t));
  }
  function x(e) {
    try {
      return e
        ? "true" == e ||
            ("false" != e &&
              ("null" == e
                ? null
                : +e + "" == e
                ? +e
                : /^[\[\{]/.test(e)
                ? E.parseJSON(e)
                : e))
        : e;
    } catch (t) {
      return e;
    }
  }
  function w(e, t) {
    t(e);
    for (var i = 0, n = e.childNodes.length; i < n; i++) w(e.childNodes[i], t);
  }
  var b,
    T,
    E,
    S,
    C,
    A,
    B = [],
    D = B.concat,
    L = B.filter,
    k = B.slice,
    M = window.document,
    P = {},
    R = {},
    I = {
      "column-count": 1,
      columns: 1,
      "font-weight": 1,
      "line-height": 1,
      opacity: 1,
      "z-index": 1,
      zoom: 1
    },
    z = /^\s*<(\w+|!)[^>]*>/,
    N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    X = /^(?:body|html)$/i,
    Y = /([A-Z])/g,
    F = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    j = ["after", "prepend", "before", "append"],
    H = M.createElement("table"),
    U = M.createElement("tr"),
    V = {
      tr: M.createElement("tbody"),
      tbody: H,
      thead: H,
      tfoot: H,
      td: U,
      th: U,
      "*": M.createElement("div")
    },
    W = /complete|loaded|interactive/,
    G = /^[\w-]*$/,
    q = {},
    Z = q.toString,
    $ = {},
    J = M.createElement("div"),
    Q = {
      tabindex: "tabIndex",
      readonly: "readOnly",
      for: "htmlFor",
      class: "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    K =
      Array.isArray ||
      function(e) {
        return e instanceof Array;
      };
  return (
    ($.matches = function(e, t) {
      if (!t || !e || 1 !== e.nodeType) return !1;
      var i =
        e.webkitMatchesSelector ||
        e.mozMatchesSelector ||
        e.oMatchesSelector ||
        e.matchesSelector;
      if (i) return i.call(e, t);
      var n,
        a = e.parentNode,
        r = !a;
      return (
        r && (a = J).appendChild(e),
        (n = ~$.qsa(a, t).indexOf(e)),
        r && J.removeChild(e),
        n
      );
    }),
    (C = function(e) {
      return e.replace(/-+(.)?/g, function(e, t) {
        return t ? t.toUpperCase() : "";
      });
    }),
    (A = function(e) {
      return L.call(e, function(t, i) {
        return e.indexOf(t) == i;
      });
    }),
    ($.fragment = function(e, t, i) {
      var n, a, o;
      return (
        N.test(e) && (n = E(M.createElement(RegExp.$1))),
        n ||
          (e.replace && (e = e.replace(O, "<$1></$2>")),
          t === b && (t = z.test(e) && RegExp.$1),
          t in V || (t = "*"),
          (o = V[t]),
          (o.innerHTML = "" + e),
          (n = E.each(k.call(o.childNodes), function() {
            o.removeChild(this);
          }))),
        r(i) &&
          ((a = E(n)),
          E.each(i, function(e, t) {
            F.indexOf(e) > -1 ? a[e](t) : a.attr(e, t);
          })),
        n
      );
    }),
    ($.Z = function(e, t) {
      return new m(e, t);
    }),
    ($.isZ = function(e) {
      return e instanceof $.Z;
    }),
    ($.init = function(e, i) {
      var n;
      if (!e) return $.Z();
      if ("string" == typeof e)
        if (((e = e.trim()), "<" == e[0] && z.test(e)))
          (n = $.fragment(e, RegExp.$1, i)), (e = null);
        else {
          if (i !== b) return E(i).find(e);
          n = $.qsa(M, e);
        }
      else {
        if (t(e)) return E(M).ready(e);
        if ($.isZ(e)) return e;
        if (K(e)) n = p(e);
        else if (a(e)) (n = [e]), (e = null);
        else if (z.test(e))
          (n = $.fragment(e.trim(), RegExp.$1, i)), (e = null);
        else {
          if (i !== b) return E(i).find(e);
          n = $.qsa(M, e);
        }
      }
      return $.Z(n, e);
    }),
    (E = function(e, t) {
      return $.init(e, t);
    }),
    (E.extend = function(e) {
      var t,
        i = k.call(arguments, 1);
      return (
        "boolean" == typeof e && ((t = e), (e = i.shift())),
        i.forEach(function(i) {
          f(e, i, t);
        }),
        e
      );
    }),
    ($.qsa = function(e, t) {
      var i,
        n = "#" == t[0],
        a = !n && "." == t[0],
        r = n || a ? t.slice(1) : t,
        o = G.test(r);
      return e.getElementById && o && n
        ? (i = e.getElementById(r))
          ? [i]
          : []
        : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType
        ? []
        : k.call(
            o && !n && e.getElementsByClassName
              ? a
                ? e.getElementsByClassName(r)
                : e.getElementsByTagName(t)
              : e.querySelectorAll(t)
          );
    }),
    (E.contains = M.documentElement.contains
      ? function(e, t) {
          return e !== t && e.contains(t);
        }
      : function(e, t) {
          for (; t && (t = t.parentNode); ) if (t === e) return !0;
          return !1;
        }),
    (E.type = e),
    (E.isFunction = t),
    (E.isWindow = i),
    (E.isArray = K),
    (E.isPlainObject = r),
    (E.isEmptyObject = function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    }),
    (E.inArray = function(e, t, i) {
      return B.indexOf.call(t, e, i);
    }),
    (E.camelCase = C),
    (E.trim = function(e) {
      return null == e ? "" : String.prototype.trim.call(e);
    }),
    (E.uuid = 0),
    (E.support = {}),
    (E.expr = {}),
    (E.noop = function() {}),
    (E.map = function(e, t) {
      var i,
        n,
        a,
        r = [];
      if (o(e))
        for (n = 0; n < e.length; n++) (i = t(e[n], n)), null != i && r.push(i);
      else for (a in e) (i = t(e[a], a)), null != i && r.push(i);
      return s(r);
    }),
    (E.each = function(e, t) {
      var i, n;
      if (o(e)) {
        for (i = 0; i < e.length; i++)
          if (t.call(e[i], i, e[i]) === !1) return e;
      } else for (n in e) if (t.call(e[n], n, e[n]) === !1) return e;
      return e;
    }),
    (E.grep = function(e, t) {
      return L.call(e, t);
    }),
    window.JSON && (E.parseJSON = JSON.parse),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function(e, t) {
        q["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (E.fn = {
      constructor: $.Z,
      length: 0,
      forEach: B.forEach,
      reduce: B.reduce,
      push: B.push,
      sort: B.sort,
      splice: B.splice,
      indexOf: B.indexOf,
      concat: function() {
        var e,
          t,
          i = [];
        for (e = 0; e < arguments.length; e++)
          (t = arguments[e]), (i[e] = $.isZ(t) ? t.toArray() : t);
        return D.apply($.isZ(this) ? this.toArray() : this, i);
      },
      map: function(e) {
        return E(
          E.map(this, function(t, i) {
            return e.call(t, i, t);
          })
        );
      },
      slice: function() {
        return E(k.apply(this, arguments));
      },
      ready: function(e) {
        return (
          W.test(M.readyState) && M.body
            ? e(E)
            : M.addEventListener(
                "DOMContentLoaded",
                function() {
                  e(E);
                },
                !1
              ),
          this
        );
      },
      get: function(e) {
        return e === b ? k.call(this) : this[e >= 0 ? e : e + this.length];
      },
      toArray: function() {
        return this.get();
      },
      size: function() {
        return this.length;
      },
      remove: function() {
        return this.each(function() {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function(e) {
        return (
          B.every.call(this, function(t, i) {
            return e.call(t, i, t) !== !1;
          }),
          this
        );
      },
      filter: function(e) {
        return t(e)
          ? this.not(this.not(e))
          : E(
              L.call(this, function(t) {
                return $.matches(t, e);
              })
            );
      },
      add: function(e, t) {
        return E(A(this.concat(E(e, t))));
      },
      is: function(e) {
        return this.length > 0 && $.matches(this[0], e);
      },
      not: function(e) {
        var i = [];
        if (t(e) && e.call !== b)
          this.each(function(t) {
            e.call(this, t) || i.push(this);
          });
        else {
          var n =
            "string" == typeof e
              ? this.filter(e)
              : o(e) && t(e.item)
              ? k.call(e)
              : E(e);
          this.forEach(function(e) {
            n.indexOf(e) < 0 && i.push(e);
          });
        }
        return E(i);
      },
      has: function(e) {
        return this.filter(function() {
          return a(e)
            ? E.contains(this, e)
            : E(this)
                .find(e)
                .size();
        });
      },
      eq: function(e) {
        return e === -1 ? this.slice(e) : this.slice(e, +e + 1);
      },
      first: function() {
        var e = this[0];
        return e && !a(e) ? e : E(e);
      },
      last: function() {
        var e = this[this.length - 1];
        return e && !a(e) ? e : E(e);
      },
      find: function(e) {
        var t,
          i = this;
        return (t = e
          ? "object" == typeof e
            ? E(e).filter(function() {
                var e = this;
                return B.some.call(i, function(t) {
                  return E.contains(t, e);
                });
              })
            : 1 == this.length
            ? E($.qsa(this[0], e))
            : this.map(function() {
                return $.qsa(this, e);
              })
          : E());
      },
      closest: function(e, t) {
        var i = this[0],
          a = !1;
        for (
          "object" == typeof e && (a = E(e));
          i && !(a ? a.indexOf(i) >= 0 : $.matches(i, e));

        )
          i = i !== t && !n(i) && i.parentNode;
        return E(i);
      },
      parents: function(e) {
        for (var t = [], i = this; i.length > 0; )
          i = E.map(i, function(e) {
            if ((e = e.parentNode) && !n(e) && t.indexOf(e) < 0)
              return t.push(e), e;
          });
        return _(t, e);
      },
      parent: function(e) {
        return _(A(this.pluck("parentNode")), e);
      },
      children: function(e) {
        return _(
          this.map(function() {
            return d(this);
          }),
          e
        );
      },
      contents: function() {
        return this.map(function() {
          return this.contentDocument || k.call(this.childNodes);
        });
      },
      siblings: function(e) {
        return _(
          this.map(function(e, t) {
            return L.call(d(t.parentNode), function(e) {
              return e !== t;
            });
          }),
          e
        );
      },
      empty: function() {
        return this.each(function() {
          this.innerHTML = "";
        });
      },
      pluck: function(e) {
        return E.map(this, function(t) {
          return t[e];
        });
      },
      show: function() {
        return this.each(function() {
          "none" == this.style.display && (this.style.display = ""),
            "none" == getComputedStyle(this, "").getPropertyValue("display") &&
              (this.style.display = u(this.nodeName));
        });
      },
      replaceWith: function(e) {
        return this.before(e).remove();
      },
      wrap: function(e) {
        var i = t(e);
        if (this[0] && !i)
          var n = E(e).get(0),
            a = n.parentNode || this.length > 1;
        return this.each(function(t) {
          E(this).wrapAll(i ? e.call(this, t) : a ? n.cloneNode(!0) : n);
        });
      },
      wrapAll: function(e) {
        if (this[0]) {
          E(this[0]).before((e = E(e)));
          for (var t; (t = e.children()).length; ) e = t.first();
          E(e).append(this);
        }
        return this;
      },
      wrapInner: function(e) {
        var i = t(e);
        return this.each(function(t) {
          var n = E(this),
            a = n.contents(),
            r = i ? e.call(this, t) : e;
          a.length ? a.wrapAll(r) : n.append(r);
        });
      },
      unwrap: function() {
        return (
          this.parent().each(function() {
            E(this).replaceWith(E(this).children());
          }),
          this
        );
      },
      clone: function() {
        return this.map(function() {
          return this.cloneNode(!0);
        });
      },
      hide: function() {
        return this.css("display", "none");
      },
      toggle: function(e) {
        return this.each(function() {
          var t = E(this);
          (e === b ? "none" == t.css("display") : e) ? t.show() : t.hide();
        });
      },
      prev: function(e) {
        return E(this.pluck("previousElementSibling")).filter(e || "*");
      },
      next: function(e) {
        return E(this.pluck("nextElementSibling")).filter(e || "*");
      },
      html: function(e) {
        return 0 in arguments
          ? this.each(function(t) {
              var i = this.innerHTML;
              E(this)
                .empty()
                .append(g(this, e, t, i));
            })
          : 0 in this
          ? this[0].innerHTML
          : null;
      },
      text: function(e) {
        return 0 in arguments
          ? this.each(function(t) {
              var i = g(this, e, t, this.textContent);
              this.textContent = null == i ? "" : "" + i;
            })
          : 0 in this
          ? this[0].textContent
          : null;
      },
      attr: function(e, t) {
        var i;
        return "string" != typeof e || 1 in arguments
          ? this.each(function(i) {
              if (1 === this.nodeType)
                if (a(e)) for (T in e) y(this, T, e[T]);
                else y(this, e, g(this, t, i, this.getAttribute(e)));
            })
          : this.length && 1 === this[0].nodeType
          ? !(i = this[0].getAttribute(e)) && e in this[0]
            ? this[0][e]
            : i
          : b;
      },
      removeAttr: function(e) {
        return this.each(function() {
          1 === this.nodeType &&
            e.split(" ").forEach(function(e) {
              y(this, e);
            }, this);
        });
      },
      prop: function(e, t) {
        return (
          (e = Q[e] || e),
          1 in arguments
            ? this.each(function(i) {
                this[e] = g(this, t, i, this[e]);
              })
            : this[0] && this[0][e]
        );
      },
      data: function(e, t) {
        var i = "data-" + e.replace(Y, "-$1").toLowerCase(),
          n = 1 in arguments ? this.attr(i, t) : this.attr(i);
        return null !== n ? x(n) : b;
      },
      val: function(e) {
        return 0 in arguments
          ? this.each(function(t) {
              this.value = g(this, e, t, this.value);
            })
          : this[0] &&
              (this[0].multiple
                ? E(this[0])
                    .find("option")
                    .filter(function() {
                      return this.selected;
                    })
                    .pluck("value")
                : this[0].value);
      },
      offset: function(e) {
        if (e)
          return this.each(function(t) {
            var i = E(this),
              n = g(this, e, t, i.offset()),
              a = i.offsetParent().offset(),
              r = { top: n.top - a.top, left: n.left - a.left };
            "static" == i.css("position") && (r.position = "relative"),
              i.css(r);
          });
        if (!this.length) return null;
        if (!E.contains(M.documentElement, this[0])) return { top: 0, left: 0 };
        var t = this[0].getBoundingClientRect();
        return {
          left: t.left + window.pageXOffset,
          top: t.top + window.pageYOffset,
          width: Math.round(t.width),
          height: Math.round(t.height)
        };
      },
      css: function(t, i) {
        if (arguments.length < 2) {
          var n,
            a = this[0];
          if (!a) return;
          if (((n = getComputedStyle(a, "")), "string" == typeof t))
            return a.style[C(t)] || n.getPropertyValue(t);
          if (K(t)) {
            var r = {};
            return (
              E.each(t, function(e, t) {
                r[t] = a.style[C(t)] || n.getPropertyValue(t);
              }),
              r
            );
          }
        }
        var o = "";
        if ("string" == e(t))
          i || 0 === i
            ? (o = l(t) + ":" + h(t, i))
            : this.each(function() {
                this.style.removeProperty(l(t));
              });
        else
          for (T in t)
            t[T] || 0 === t[T]
              ? (o += l(T) + ":" + h(T, t[T]) + ";")
              : this.each(function() {
                  this.style.removeProperty(l(T));
                });
        return this.each(function() {
          this.style.cssText += ";" + o;
        });
      },
      index: function(e) {
        return e
          ? this.indexOf(E(e)[0])
          : this.parent()
              .children()
              .indexOf(this[0]);
      },
      hasClass: function(e) {
        return (
          !!e &&
          B.some.call(
            this,
            function(e) {
              return this.test(v(e));
            },
            c(e)
          )
        );
      },
      addClass: function(e) {
        return e
          ? this.each(function(t) {
              if ("className" in this) {
                S = [];
                var i = v(this),
                  n = g(this, e, t, i);
                n.split(/\s+/g).forEach(function(e) {
                  E(this).hasClass(e) || S.push(e);
                }, this),
                  S.length && v(this, i + (i ? " " : "") + S.join(" "));
              }
            })
          : this;
      },
      removeClass: function(e) {
        return this.each(function(t) {
          if ("className" in this) {
            if (e === b) return v(this, "");
            (S = v(this)),
              g(this, e, t, S)
                .split(/\s+/g)
                .forEach(function(e) {
                  S = S.replace(c(e), " ");
                }),
              v(this, S.trim());
          }
        });
      },
      toggleClass: function(e, t) {
        return e
          ? this.each(function(i) {
              var n = E(this),
                a = g(this, e, i, v(this));
              a.split(/\s+/g).forEach(function(e) {
                (t === b
                ? !n.hasClass(e)
                : t)
                  ? n.addClass(e)
                  : n.removeClass(e);
              });
            })
          : this;
      },
      scrollTop: function(e) {
        if (this.length) {
          var t = "scrollTop" in this[0];
          return e === b
            ? t
              ? this[0].scrollTop
              : this[0].pageYOffset
            : this.each(
                t
                  ? function() {
                      this.scrollTop = e;
                    }
                  : function() {
                      this.scrollTo(this.scrollX, e);
                    }
              );
        }
      },
      scrollLeft: function(e) {
        if (this.length) {
          var t = "scrollLeft" in this[0];
          return e === b
            ? t
              ? this[0].scrollLeft
              : this[0].pageXOffset
            : this.each(
                t
                  ? function() {
                      this.scrollLeft = e;
                    }
                  : function() {
                      this.scrollTo(e, this.scrollY);
                    }
              );
        }
      },
      position: function() {
        if (this.length) {
          var e = this[0],
            t = this.offsetParent(),
            i = this.offset(),
            n = X.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
          return (
            (i.top -= parseFloat(E(e).css("margin-top")) || 0),
            (i.left -= parseFloat(E(e).css("margin-left")) || 0),
            (n.top += parseFloat(E(t[0]).css("border-top-width")) || 0),
            (n.left += parseFloat(E(t[0]).css("border-left-width")) || 0),
            { top: i.top - n.top, left: i.left - n.left }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent || M.body;
            e && !X.test(e.nodeName) && "static" == E(e).css("position");

          )
            e = e.offsetParent;
          return e;
        });
      }
    }),
    (E.fn.detach = E.fn.remove),
    ["width", "height"].forEach(function(e) {
      var t = e.replace(/./, function(e) {
        return e[0].toUpperCase();
      });
      E.fn[e] = function(a) {
        var r,
          o = this[0];
        return a === b
          ? i(o)
            ? o["inner" + t]
            : n(o)
            ? o.documentElement["scroll" + t]
            : (r = this.offset()) && r[e]
          : this.each(function(t) {
              (o = E(this)), o.css(e, g(this, a, t, o[e]()));
            });
      };
    }),
    j.forEach(function(t, i) {
      var n = i % 2;
      (E.fn[t] = function() {
        var t,
          a,
          r = E.map(arguments, function(i) {
            return (
              (t = e(i)),
              "object" == t || "array" == t || null == i ? i : $.fragment(i)
            );
          }),
          o = this.length > 1;
        return r.length < 1
          ? this
          : this.each(function(e, t) {
              (a = n ? t : t.parentNode),
                (t =
                  0 == i
                    ? t.nextSibling
                    : 1 == i
                    ? t.firstChild
                    : 2 == i
                    ? t
                    : null);
              var p = E.contains(M.documentElement, a);
              r.forEach(function(e) {
                if (o) e = e.cloneNode(!0);
                else if (!a) return E(e).remove();
                a.insertBefore(e, t),
                  p &&
                    w(e, function(e) {
                      null == e.nodeName ||
                        "SCRIPT" !== e.nodeName.toUpperCase() ||
                        (e.type && "text/javascript" !== e.type) ||
                        e.src ||
                        window.eval.call(window, e.innerHTML);
                    });
              });
            });
      }),
        (E.fn[n ? t + "To" : "insert" + (i ? "Before" : "After")] = function(
          e
        ) {
          return E(e)[t](this), this;
        });
    }),
    ($.Z.prototype = m.prototype = E.fn),
    ($.uniq = A),
    ($.deserializeValue = x),
    (E.zepto = $),
    E
  );
})();
(window.Zepto = Zepto),
  void 0 === window.$ && (window.$ = Zepto),
  (function(e) {
    function t(t, i, n) {
      var a = e.Event(i);
      return e(t).trigger(a, n), !a.isDefaultPrevented();
    }
    function i(e, i, n, a) {
      if (e.global) return t(i || y, n, a);
    }
    function n(t) {
      t.global && 0 === e.active++ && i(t, null, "ajaxStart");
    }
    function a(t) {
      t.global && !--e.active && i(t, null, "ajaxStop");
    }
    function r(e, t) {
      var n = t.context;
      return (
        t.beforeSend.call(n, e, t) !== !1 &&
        i(t, n, "ajaxBeforeSend", [e, t]) !== !1 &&
        void i(t, n, "ajaxSend", [e, t])
      );
    }
    function o(e, t, n, a) {
      var r = n.context,
        o = "success";
      n.success.call(r, e, o, t),
        a && a.resolveWith(r, [e, o, t]),
        i(n, r, "ajaxSuccess", [t, n, e]),
        s(o, t, n);
    }
    function p(e, t, n, a, r) {
      var o = a.context;
      a.error.call(o, n, t, e),
        r && r.rejectWith(o, [n, t, e]),
        i(a, o, "ajaxError", [n, a, e || t]),
        s(t, n, a);
    }
    function s(e, t, n) {
      var r = n.context;
      n.complete.call(r, t, e), i(n, r, "ajaxComplete", [t, n]), a(n);
    }
    function l() {}
    function c(e) {
      return (
        e && (e = e.split(";", 2)[0]),
        (e &&
          (e == T
            ? "html"
            : e == b
            ? "json"
            : x.test(e)
            ? "script"
            : w.test(e) && "xml")) ||
          "text"
      );
    }
    function h(e, t) {
      return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?");
    }
    function u(t) {
      t.processData &&
        t.data &&
        "string" != e.type(t.data) &&
        (t.data = e.param(t.data, t.traditional)),
        !t.data ||
          (t.type && "GET" != t.type.toUpperCase()) ||
          ((t.url = h(t.url, t.data)), (t.data = void 0));
    }
    function d(t, i, n, a) {
      return (
        e.isFunction(i) && ((a = n), (n = i), (i = void 0)),
        e.isFunction(n) || ((a = n), (n = void 0)),
        { url: t, data: i, success: n, dataType: a }
      );
    }
    function m(t, i, n, a) {
      var r,
        o = e.isArray(i),
        p = e.isPlainObject(i);
      e.each(i, function(i, s) {
        (r = e.type(s)),
          a &&
            (i = n
              ? a
              : a + "[" + (p || "object" == r || "array" == r ? i : "") + "]"),
          !a && o
            ? t.add(s.name, s.value)
            : "array" == r || (!n && "object" == r)
            ? m(t, s, n, i)
            : t.add(i, s);
      });
    }
    var f,
      _,
      g = 0,
      y = window.document,
      v = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      x = /^(?:text|application)\/javascript/i,
      w = /^(?:text|application)\/xml/i,
      b = "application/json",
      T = "text/html",
      E = /^\s*$/,
      S = y.createElement("a");
    (S.href = window.location.href),
      (e.active = 0),
      (e.ajaxJSONP = function(t, i) {
        if (!("type" in t)) return e.ajax(t);
        var n,
          a,
          s = t.jsonpCallback,
          l = (e.isFunction(s) ? s() : s) || "jsonp" + ++g,
          c = y.createElement("script"),
          h = window[l],
          u = function(t) {
            e(c).triggerHandler("error", t || "abort");
          },
          d = { abort: u };
        return (
          i && i.promise(d),
          e(c).on("load error", function(r, s) {
            clearTimeout(a),
              e(c)
                .off()
                .remove(),
              "error" != r.type && n
                ? o(n[0], d, t, i)
                : p(null, s || "error", d, t, i),
              (window[l] = h),
              n && e.isFunction(h) && h(n[0]),
              (h = n = void 0);
          }),
          r(d, t) === !1
            ? (u("abort"), d)
            : ((window[l] = function() {
                n = arguments;
              }),
              (c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l)),
              y.head.appendChild(c),
              t.timeout > 0 &&
                (a = setTimeout(function() {
                  u("timeout");
                }, t.timeout)),
              d)
        );
      }),
      (e.ajaxSettings = {
        type: "GET",
        beforeSend: l,
        success: l,
        error: l,
        complete: l,
        context: null,
        global: !0,
        xhr: function() {
          return new window.XMLHttpRequest();
        },
        accepts: {
          script:
            "text/javascript, application/javascript, application/x-javascript",
          json: b,
          xml: "application/xml, text/xml",
          html: T,
          text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
      }),
      (e.ajax = function(t) {
        var i,
          a,
          s = e.extend({}, t || {}),
          d = e.Deferred && e.Deferred();
        for (f in e.ajaxSettings) void 0 === s[f] && (s[f] = e.ajaxSettings[f]);
        n(s),
          s.crossDomain ||
            ((i = y.createElement("a")),
            (i.href = s.url),
            (i.href = i.href),
            (s.crossDomain =
              S.protocol + "//" + S.host != i.protocol + "//" + i.host)),
          s.url || (s.url = window.location.toString()),
          (a = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, a)),
          u(s);
        var m = s.dataType,
          g = /\?.+=\?/.test(s.url);
        if (
          (g && (m = "jsonp"),
          (s.cache !== !1 &&
            ((t && t.cache === !0) || ("script" != m && "jsonp" != m))) ||
            (s.url = h(s.url, "_=" + Date.now())),
          "jsonp" == m)
        )
          return (
            g ||
              (s.url = h(
                s.url,
                s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?"
              )),
            e.ajaxJSONP(s, d)
          );
        var v,
          x = s.accepts[m],
          w = {},
          b = function(e, t) {
            w[e.toLowerCase()] = [e, t];
          },
          T = /^([\w-]+:)\/\//.test(s.url)
            ? RegExp.$1
            : window.location.protocol,
          C = s.xhr(),
          A = C.setRequestHeader;
        if (
          (d && d.promise(C),
          s.crossDomain || b("X-Requested-With", "XMLHttpRequest"),
          b("Accept", x || "*/*"),
          (x = s.mimeType || x) &&
            (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]),
            C.overrideMimeType && C.overrideMimeType(x)),
          (s.contentType ||
            (s.contentType !== !1 &&
              s.data &&
              "GET" != s.type.toUpperCase())) &&
            b(
              "Content-Type",
              s.contentType || "application/x-www-form-urlencoded"
            ),
          s.headers)
        )
          for (_ in s.headers) b(_, s.headers[_]);
        if (
          ((C.setRequestHeader = b),
          (C.onreadystatechange = function() {
            if (4 == C.readyState) {
              (C.onreadystatechange = l), clearTimeout(v);
              var t,
                i = !1;
              if (
                (C.status >= 200 && C.status < 300) ||
                304 == C.status ||
                (0 == C.status && "file:" == T)
              ) {
                (m = m || c(s.mimeType || C.getResponseHeader("content-type"))),
                  (t = C.responseText);
                try {
                  "script" == m
                    ? (0, eval)(t)
                    : "xml" == m
                    ? (t = C.responseXML)
                    : "json" == m && (t = E.test(t) ? null : e.parseJSON(t));
                } catch (n) {
                  i = n;
                }
                i ? p(i, "parsererror", C, s, d) : o(t, C, s, d);
              } else
                p(C.statusText || null, C.status ? "error" : "abort", C, s, d);
            }
          }),
          r(C, s) === !1)
        )
          return C.abort(), p(null, "abort", C, s, d), C;
        if (s.xhrFields) for (_ in s.xhrFields) C[_] = s.xhrFields[_];
        var B = !("async" in s) || s.async;
        C.open(s.type, s.url, B, s.username, s.password);
        for (_ in w) A.apply(C, w[_]);
        return (
          s.timeout > 0 &&
            (v = setTimeout(function() {
              (C.onreadystatechange = l),
                C.abort(),
                p(null, "timeout", C, s, d);
            }, s.timeout)),
          C.send(s.data ? s.data : null),
          C
        );
      }),
      (e.get = function() {
        return e.ajax(d.apply(null, arguments));
      }),
      (e.post = function() {
        var t = d.apply(null, arguments);
        return (t.type = "POST"), e.ajax(t);
      }),
      (e.getJSON = function() {
        var t = d.apply(null, arguments);
        return (t.dataType = "json"), e.ajax(t);
      }),
      (e.fn.load = function(t, i, n) {
        if (!this.length) return this;
        var a,
          r = this,
          o = t.split(/\s/),
          p = d(t, i, n),
          s = p.success;
        return (
          o.length > 1 && ((p.url = o[0]), (a = o[1])),
          (p.success = function(t) {
            r.html(
              a
                ? e("<div>")
                    .html(t.replace(v, ""))
                    .find(a)
                : t
            ),
              s && s.apply(r, arguments);
          }),
          e.ajax(p),
          this
        );
      });
    var C = encodeURIComponent;
    e.param = function(t, i) {
      var n = [];
      return (
        (n.add = function(t, i) {
          e.isFunction(i) && (i = i()),
            null == i && (i = ""),
            this.push(C(t) + "=" + C(i));
        }),
        m(n, t, i),
        n.join("&").replace(/%20/g, "+")
      );
    };
  })(Zepto),
  (function(e) {
    function t(e, t) {
      var i = (this.os = {}),
        n = (this.browser = {}),
        a = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        o = !!e.match(/\(Macintosh\; Intel /),
        p = e.match(/(iPad).*OS\s([\d_]+)/),
        s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !p && e.match(/(iPhone\sOS)\s([\d_]+)/),
        c = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        h = /Win\d{2}|Windows/.test(t),
        u = e.match(/Windows Phone ([\d.]+)/),
        d = c && e.match(/TouchPad/),
        m = e.match(/Kindle\/([\d.]+)/),
        f = e.match(/Silk\/([\d._]+)/),
        _ = e.match(/(BlackBerry).*Version\/([\d.]+)/),
        g = e.match(/(BB10).*Version\/([\d.]+)/),
        y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        v = e.match(/PlayBook/),
        x = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
        w = e.match(/Firefox\/([\d.]+)/),
        b = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
        T =
          e.match(/MSIE\s([\d.]+)/) ||
          e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        E = !x && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        S =
          E ||
          e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
      (n.webkit = !!a) && (n.version = a[1]),
        r && ((i.android = !0), (i.version = r[2])),
        l &&
          !s &&
          ((i.ios = i.iphone = !0), (i.version = l[2].replace(/_/g, "."))),
        p && ((i.ios = i.ipad = !0), (i.version = p[2].replace(/_/g, "."))),
        s &&
          ((i.ios = i.ipod = !0),
          (i.version = s[3] ? s[3].replace(/_/g, ".") : null)),
        u && ((i.wp = !0), (i.version = u[1])),
        c && ((i.webos = !0), (i.version = c[2])),
        d && (i.touchpad = !0),
        _ && ((i.blackberry = !0), (i.version = _[2])),
        g && ((i.bb10 = !0), (i.version = g[2])),
        y && ((i.rimtabletos = !0), (i.version = y[2])),
        v && (n.playbook = !0),
        m && ((i.kindle = !0), (i.version = m[1])),
        f && ((n.silk = !0), (n.version = f[1])),
        !f && i.android && e.match(/Kindle Fire/) && (n.silk = !0),
        x && ((n.chrome = !0), (n.version = x[1])),
        w && ((n.firefox = !0), (n.version = w[1])),
        b && ((i.firefoxos = !0), (i.version = b[1])),
        T && ((n.ie = !0), (n.version = T[1])),
        S &&
          (o || i.ios || h) &&
          ((n.safari = !0), i.ios || (n.version = S[1])),
        E && (n.webview = !0),
        (i.tablet = !!(
          p ||
          v ||
          (r && !e.match(/Mobile/)) ||
          (w && e.match(/Tablet/)) ||
          (T && !e.match(/Phone/) && e.match(/Touch/))
        )),
        (i.phone = !(
          i.tablet ||
          i.ipod ||
          !(
            r ||
            l ||
            c ||
            _ ||
            g ||
            (x && e.match(/Android/)) ||
            (x && e.match(/CriOS\/([\d.]+)/)) ||
            (w && e.match(/Mobile/)) ||
            (T && e.match(/Touch/))
          )
        ));
    }
    t.call(e, navigator.userAgent, navigator.platform), (e.__detect = t);
  })(Zepto),
  (function(e) {
    function t(e) {
      return e._zid || (e._zid = u++);
    }
    function i(e, i, r, o) {
      if (((i = n(i)), i.ns)) var p = a(i.ns);
      return (_[t(e)] || []).filter(function(e) {
        return (
          e &&
          (!i.e || e.e == i.e) &&
          (!i.ns || p.test(e.ns)) &&
          (!r || t(e.fn) === t(r)) &&
          (!o || e.sel == o)
        );
      });
    }
    function n(e) {
      var t = ("" + e).split(".");
      return {
        e: t[0],
        ns: t
          .slice(1)
          .sort()
          .join(" ")
      };
    }
    function a(e) {
      return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)");
    }
    function r(e, t) {
      return (e.del && !y && e.e in v) || !!t;
    }
    function o(e) {
      return x[e] || (y && v[e]) || e;
    }
    function p(i, a, p, s, c, u, d) {
      var m = t(i),
        f = _[m] || (_[m] = []);
      a.split(/\s/).forEach(function(t) {
        if ("ready" == t) return e(document).ready(p);
        var a = n(t);
        (a.fn = p),
          (a.sel = c),
          a.e in x &&
            (p = function(t) {
              var i = t.relatedTarget;
              if (!i || (i !== this && !e.contains(this, i)))
                return a.fn.apply(this, arguments);
            }),
          (a.del = u);
        var m = u || p;
        (a.proxy = function(e) {
          if (((e = l(e)), !e.isImmediatePropagationStopped())) {
            e.data = s;
            var t = m.apply(i, e._args == h ? [e] : [e].concat(e._args));
            return t === !1 && (e.preventDefault(), e.stopPropagation()), t;
          }
        }),
          (a.i = f.length),
          f.push(a),
          "addEventListener" in i &&
            i.addEventListener(o(a.e), a.proxy, r(a, d));
      });
    }
    function s(e, n, a, p, s) {
      var l = t(e);
      (n || "").split(/\s/).forEach(function(t) {
        i(e, t, a, p).forEach(function(t) {
          delete _[l][t.i],
            "removeEventListener" in e &&
              e.removeEventListener(o(t.e), t.proxy, r(t, s));
        });
      });
    }
    function l(t, i) {
      return (
        (!i && t.isDefaultPrevented) ||
          (i || (i = t),
          e.each(E, function(e, n) {
            var a = i[e];
            (t[e] = function() {
              return (this[n] = w), a && a.apply(i, arguments);
            }),
              (t[n] = b);
          }),
          (i.defaultPrevented !== h
            ? i.defaultPrevented
            : "returnValue" in i
            ? i.returnValue === !1
            : i.getPreventDefault && i.getPreventDefault()) &&
            (t.isDefaultPrevented = w)),
        t
      );
    }
    function c(e) {
      var t,
        i = { originalEvent: e };
      for (t in e) T.test(t) || e[t] === h || (i[t] = e[t]);
      return l(i, e);
    }
    var h,
      u = 1,
      d = Array.prototype.slice,
      m = e.isFunction,
      f = function(e) {
        return "string" == typeof e;
      },
      _ = {},
      g = {},
      y = "onfocusin" in window,
      v = { focus: "focusin", blur: "focusout" },
      x = { mouseenter: "mouseover", mouseleave: "mouseout" };
    (g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents"),
      (e.event = { add: p, remove: s }),
      (e.proxy = function(i, n) {
        var a = 2 in arguments && d.call(arguments, 2);
        if (m(i)) {
          var r = function() {
            return i.apply(n, a ? a.concat(d.call(arguments)) : arguments);
          };
          return (r._zid = t(i)), r;
        }
        if (f(n))
          return a
            ? (a.unshift(i[n], i), e.proxy.apply(null, a))
            : e.proxy(i[n], i);
        throw new TypeError("expected function");
      }),
      (e.fn.bind = function(e, t, i) {
        return this.on(e, t, i);
      }),
      (e.fn.unbind = function(e, t) {
        return this.off(e, t);
      }),
      (e.fn.one = function(e, t, i, n) {
        return this.on(e, t, i, n, 1);
      });
    var w = function() {
        return !0;
      },
      b = function() {
        return !1;
      },
      T = /^([A-Z]|returnValue$|layer[XY]$)/,
      E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
      };
    (e.fn.delegate = function(e, t, i) {
      return this.on(t, e, i);
    }),
      (e.fn.undelegate = function(e, t, i) {
        return this.off(t, e, i);
      }),
      (e.fn.live = function(t, i) {
        return e(document.body).delegate(this.selector, t, i), this;
      }),
      (e.fn.die = function(t, i) {
        return e(document.body).undelegate(this.selector, t, i), this;
      }),
      (e.fn.on = function(t, i, n, a, r) {
        var o,
          l,
          u = this;
        return t && !f(t)
          ? (e.each(t, function(e, t) {
              u.on(e, i, n, t, r);
            }),
            u)
          : (f(i) || m(a) || a === !1 || ((a = n), (n = i), (i = h)),
            (a !== h && n !== !1) || ((a = n), (n = h)),
            a === !1 && (a = b),
            u.each(function(h, u) {
              r &&
                (o = function(e) {
                  return s(u, e.type, a), a.apply(this, arguments);
                }),
                i &&
                  (l = function(t) {
                    var n,
                      r = e(t.target)
                        .closest(i, u)
                        .get(0);
                    if (r && r !== u)
                      return (
                        (n = e.extend(c(t), {
                          currentTarget: r,
                          liveFired: u
                        })),
                        (o || a).apply(r, [n].concat(d.call(arguments, 1)))
                      );
                  }),
                p(u, t, a, n, i, l || o);
            }));
      }),
      (e.fn.off = function(t, i, n) {
        var a = this;
        return t && !f(t)
          ? (e.each(t, function(e, t) {
              a.off(e, i, t);
            }),
            a)
          : (f(i) || m(n) || n === !1 || ((n = i), (i = h)),
            n === !1 && (n = b),
            a.each(function() {
              s(this, t, n, i);
            }));
      }),
      (e.fn.trigger = function(t, i) {
        return (
          (t = f(t) || e.isPlainObject(t) ? e.Event(t) : l(t)),
          (t._args = i),
          this.each(function() {
            t.type in v && "function" == typeof this[t.type]
              ? this[t.type]()
              : "dispatchEvent" in this
              ? this.dispatchEvent(t)
              : e(this).triggerHandler(t, i);
          })
        );
      }),
      (e.fn.triggerHandler = function(t, n) {
        var a, r;
        return (
          this.each(function(o, p) {
            (a = c(f(t) ? e.Event(t) : t)),
              (a._args = n),
              (a.target = p),
              e.each(i(p, t.type || t), function(e, t) {
                if (((r = t.proxy(a)), a.isImmediatePropagationStopped()))
                  return !1;
              });
          }),
          r
        );
      }),
      "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
        .split(" ")
        .forEach(function(t) {
          e.fn[t] = function(e) {
            return 0 in arguments ? this.bind(t, e) : this.trigger(t);
          };
        }),
      (e.Event = function(e, t) {
        f(e) || ((t = e), (e = t.type));
        var i = document.createEvent(g[e] || "Events"),
          n = !0;
        if (t) for (var a in t) "bubbles" == a ? (n = !!t[a]) : (i[a] = t[a]);
        return i.initEvent(e, n, !0), l(i);
      });
  })(Zepto),
  (function(e) {
    (e.fn.serializeArray = function() {
      var t,
        i,
        n = [],
        a = function(e) {
          return e.forEach ? e.forEach(a) : void n.push({ name: t, value: e });
        };
      return (
        this[0] &&
          e.each(this[0].elements, function(n, r) {
            (i = r.type),
              (t = r.name),
              t &&
                "fieldset" != r.nodeName.toLowerCase() &&
                !r.disabled &&
                "submit" != i &&
                "reset" != i &&
                "button" != i &&
                "file" != i &&
                (("radio" != i && "checkbox" != i) || r.checked) &&
                a(e(r).val());
          }),
        n
      );
    }),
      (e.fn.serialize = function() {
        var e = [];
        return (
          this.serializeArray().forEach(function(t) {
            e.push(
              encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)
            );
          }),
          e.join("&")
        );
      }),
      (e.fn.submit = function(t) {
        if (0 in arguments) this.bind("submit", t);
        else if (this.length) {
          var i = e.Event("submit");
          this.eq(0).trigger(i), i.isDefaultPrevented() || this.get(0).submit();
        }
        return this;
      });
  })(Zepto),
  (function(e, t) {
    function i(e) {
      return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
    }
    function n(e) {
      return a ? a + e : e.toLowerCase();
    }
    var a,
      r,
      o,
      p,
      s,
      l,
      c,
      h,
      u,
      d,
      m = "",
      f = { Webkit: "webkit", Moz: "", O: "o" },
      _ = document.createElement("div"),
      g = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
      y = {};
    e.each(f, function(e, i) {
      if (_.style[e + "TransitionProperty"] !== t)
        return (m = "-" + e.toLowerCase() + "-"), (a = i), !1;
    }),
      (r = m + "transform"),
      (y[(o = m + "transition-property")] = y[
        (p = m + "transition-duration")
      ] = y[(l = m + "transition-delay")] = y[
        (s = m + "transition-timing-function")
      ] = y[(c = m + "animation-name")] = y[(h = m + "animation-duration")] = y[
        (d = m + "animation-delay")
      ] = y[(u = m + "animation-timing-function")] = ""),
      (e.fx = {
        off: a === t && _.style.transitionProperty === t,
        speeds: { _default: 400, fast: 200, slow: 600 },
        cssPrefix: m,
        transitionEnd: n("TransitionEnd"),
        animationEnd: n("AnimationEnd")
      }),
      (e.fn.animate = function(i, n, a, r, o) {
        return (
          e.isFunction(n) && ((r = n), (a = t), (n = t)),
          e.isFunction(a) && ((r = a), (a = t)),
          e.isPlainObject(n) &&
            ((a = n.easing), (r = n.complete), (o = n.delay), (n = n.duration)),
          n &&
            (n =
              ("number" == typeof n
                ? n
                : e.fx.speeds[n] || e.fx.speeds._default) / 1e3),
          o && (o = parseFloat(o) / 1e3),
          this.anim(i, n, a, r, o)
        );
      }),
      (e.fn.anim = function(n, a, m, f, _) {
        var v,
          x,
          w,
          b = {},
          T = "",
          E = this,
          S = e.fx.transitionEnd,
          C = !1;
        if (
          (a === t && (a = e.fx.speeds._default / 1e3),
          _ === t && (_ = 0),
          e.fx.off && (a = 0),
          "string" == typeof n)
        )
          (b[c] = n),
            (b[h] = a + "s"),
            (b[d] = _ + "s"),
            (b[u] = m || "linear"),
            (S = e.fx.animationEnd);
        else {
          x = [];
          for (v in n)
            g.test(v)
              ? (T += v + "(" + n[v] + ") ")
              : ((b[v] = n[v]), x.push(i(v)));
          T && ((b[r] = T), x.push(r)),
            a > 0 &&
              "object" == typeof n &&
              ((b[o] = x.join(", ")),
              (b[p] = a + "s"),
              (b[l] = _ + "s"),
              (b[s] = m || "linear"));
        }
        return (
          (w = function(t) {
            if ("undefined" != typeof t) {
              if (t.target !== t.currentTarget) return;
              e(t.target).unbind(S, w);
            } else e(this).unbind(S, w);
            (C = !0), e(this).css(y), f && f.call(this);
          }),
          a > 0 &&
            (this.bind(S, w),
            setTimeout(function() {
              C || w.call(E);
            }, 1e3 * (a + _) + 25)),
          this.size() && this.get(0).clientLeft,
          this.css(b),
          a <= 0 &&
            setTimeout(function() {
              E.each(function() {
                w.call(this);
              });
            }, 0),
          this
        );
      }),
      (_ = null);
  })(Zepto),
  (function(e, t) {
    function i(i, n, a, r, o) {
      "function" != typeof n || o || ((o = n), (n = t));
      var p = { opacity: a };
      return (
        r && ((p.scale = r), i.css(e.fx.cssPrefix + "transform-origin", "0 0")),
        i.animate(p, n, null, o)
      );
    }
    function n(t, n, a, r) {
      return i(t, n, 0, a, function() {
        o.call(e(this)), r && r.call(this);
      });
    }
    var a = window.document,
      r = (a.documentElement, e.fn.show),
      o = e.fn.hide,
      p = e.fn.toggle;
    (e.fn.show = function(e, n) {
      return (
        r.call(this),
        e === t ? (e = 0) : this.css("opacity", 0),
        i(this, e, 1, "1,1", n)
      );
    }),
      (e.fn.hide = function(e, i) {
        return e === t ? o.call(this) : n(this, e, "0,0", i);
      }),
      (e.fn.toggle = function(i, n) {
        return i === t || "boolean" == typeof i
          ? p.call(this, i)
          : this.each(function() {
              var t = e(this);
              t["none" == t.css("display") ? "show" : "hide"](i, n);
            });
      }),
      (e.fn.fadeTo = function(e, t, n) {
        return i(this, e, t, null, n);
      }),
      (e.fn.fadeIn = function(e, t) {
        var i = this.css("opacity");
        return (
          i > 0 ? this.css("opacity", 0) : (i = 1), r.call(this).fadeTo(e, i, t)
        );
      }),
      (e.fn.fadeOut = function(e, t) {
        return n(this, e, null, t);
      }),
      (e.fn.fadeToggle = function(t, i) {
        return this.each(function() {
          var n = e(this);
          n[
            0 == n.css("opacity") || "none" == n.css("display")
              ? "fadeIn"
              : "fadeOut"
          ](t, i);
        });
      });
  })(Zepto),
  (function(e) {
    function t(e) {
      return "tagName" in e ? e : e.parentNode;
    }
    if (e.os.ios) {
      var i,
        n = {};
      e(document)
        .bind("gesturestart", function(e) {
          var a = Date.now();
          a - (n.last || a);
          (n.target = t(e.target)),
            i && clearTimeout(i),
            (n.e1 = e.scale),
            (n.last = a);
        })
        .bind("gesturechange", function(e) {
          n.e2 = e.scale;
        })
        .bind("gestureend", function(t) {
          n.e2 > 0
            ? (0 != Math.abs(n.e1 - n.e2) &&
                e(n.target).trigger("pinch") &&
                e(n.target).trigger("pinch" + (n.e1 - n.e2 > 0 ? "In" : "Out")),
              (n.e1 = n.e2 = n.last = 0))
            : "last" in n && (n = {});
        }),
        ["pinch", "pinchIn", "pinchOut"].forEach(function(t) {
          e.fn[t] = function(e) {
            return this.bind(t, e);
          };
        });
    }
  })(Zepto),
  (function(e) {
    function t(t) {
      return (
        (t = e(t)), !(!t.width() && !t.height()) && "none" !== t.css("display")
      );
    }
    function i(e, t) {
      e = e.replace(/=#\]/g, '="#"]');
      var i,
        n,
        a = p.exec(e);
      if (a && a[2] in o && ((i = o[a[2]]), (n = a[3]), (e = a[1]), n)) {
        var r = Number(n);
        n = isNaN(r) ? n.replace(/^["']|["']$/g, "") : r;
      }
      return t(e, i, n);
    }
    var n = e.zepto,
      a = n.qsa,
      r = n.matches,
      o = (e.expr[":"] = {
        visible: function() {
          if (t(this)) return this;
        },
        hidden: function() {
          if (!t(this)) return this;
        },
        selected: function() {
          if (this.selected) return this;
        },
        checked: function() {
          if (this.checked) return this;
        },
        parent: function() {
          return this.parentNode;
        },
        first: function(e) {
          if (0 === e) return this;
        },
        last: function(e, t) {
          if (e === t.length - 1) return this;
        },
        eq: function(e, t, i) {
          if (e === i) return this;
        },
        contains: function(t, i, n) {
          if (
            e(this)
              .text()
              .indexOf(n) > -1
          )
            return this;
        },
        has: function(e, t, i) {
          if (n.qsa(this, i).length) return this;
        }
      }),
      p = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
      s = /^\s*>/,
      l = "Zepto" + +new Date();
    (n.qsa = function(t, r) {
      return i(r, function(i, o, p) {
        try {
          var c;
          !i && o
            ? (i = "*")
            : s.test(i) && ((c = e(t).addClass(l)), (i = "." + l + " " + i));
          var h = a(t, i);
        } catch (u) {
          throw (console.error("error performing selector: %o", r), u);
        } finally {
          c && c.removeClass(l);
        }
        return o
          ? n.uniq(
              e.map(h, function(e, t) {
                return o.call(e, t, h, p);
              })
            )
          : h;
      });
    }),
      (n.matches = function(e, t) {
        return i(t, function(t, i, n) {
          return (!t || r(e, t)) && (!i || i.call(e, null, n) === e);
        });
      });
  })(Zepto),
  (function(e) {
    (e.fn.end = function() {
      return this.prevObject || e();
    }),
      (e.fn.andSelf = function() {
        return this.add(this.prevObject || e());
      }),
      "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings"
        .split(",")
        .forEach(function(t) {
          var i = e.fn[t];
          e.fn[t] = function() {
            var e = i.apply(this, arguments);
            return (e.prevObject = this), e;
          };
        });
  })(Zepto),
  (function(e) {
    function t(e, t, i, n) {
      return Math.abs(e - t) >= Math.abs(i - n)
        ? e - t > 0
          ? "Left"
          : "Right"
        : i - n > 0
        ? "Up"
        : "Down";
    }
    function i() {
      (c = null), u.last && (u.el.trigger("longTap"), (u = {}));
    }
    function n() {
      c && clearTimeout(c), (c = null);
    }
    function a() {
      p && clearTimeout(p),
        s && clearTimeout(s),
        l && clearTimeout(l),
        c && clearTimeout(c),
        (p = s = l = c = null),
        (u = {});
    }
    function r(e) {
      return (
        ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) &&
        e.isPrimary
      );
    }
    function o(e, t) {
      return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t;
    }
    var p,
      s,
      l,
      c,
      h,
      u = {},
      d = 750;
    e(document).ready(function() {
      var m,
        f,
        _,
        g,
        y = 0,
        v = 0;
      "MSGesture" in window &&
        ((h = new MSGesture()), (h.target = document.body)),
        e(document)
          .bind("MSGestureEnd", function(e) {
            var t =
              e.velocityX > 1
                ? "Right"
                : e.velocityX < -1
                ? "Left"
                : e.velocityY > 1
                ? "Down"
                : e.velocityY < -1
                ? "Up"
                : null;
            t &&
              (u.el && u.el.trigger("swipe"),
              u.el && u.el.trigger("swipe" + t));
          })
          .on("touchstart MSPointerDown pointerdown", function(t) {
            ((g = o(t, "down")) && !r(t)) ||
              ((_ = g ? t : t.touches[0]),
              t.touches &&
                1 === t.touches.length &&
                u.x2 &&
                ((u.x2 = void 0), (u.y2 = void 0)),
              (m = Date.now()),
              (f = m - (u.last || m)),
              (u.el = e(
                "tagName" in _.target ? _.target : _.target.parentNode
              )),
              p && clearTimeout(p),
              (u.x1 = _.pageX),
              (u.y1 = _.pageY),
              f > 0 && f <= 250 && (u.isDoubleTap = !0),
              (u.last = m),
              (c = setTimeout(i, d)),
              h && g && h.addPointer(t.pointerId));
          })
          .on("touchmove MSPointerMove pointermove", function(e) {
            ((g = o(e, "move")) && !r(e)) ||
              ((_ = g ? e : e.touches[0]),
              n(),
              (u.x2 = _.pageX),
              (u.y2 = _.pageY),
              (y += Math.abs(u.x1 - u.x2)),
              (v += Math.abs(u.y1 - u.y2)));
          })
          .on("touchend MSPointerUp pointerup", function(i) {
            ((g = o(i, "up")) && !r(i)) ||
              (n(),
              (u.x2 && Math.abs(u.x1 - u.x2) > 30) ||
              (u.y2 && Math.abs(u.y1 - u.y2) > 30)
                ? (l = setTimeout(function() {
                    u.el && u.el.trigger("swipe"),
                      u.el && u.el.trigger("swipe" + t(u.x1, u.x2, u.y1, u.y2)),
                      (u = {});
                  }, 0))
                : "last" in u &&
                  (y < 30 && v < 30
                    ? (s = setTimeout(function() {
                        var t = e.Event("tap");
                        (t.cancelTouch = a),
                          u.el && u.el.length && u.el[0].trigger
                            ? u.el[0].trigger(t)
                            : "",
                          u.isDoubleTap
                            ? (u.el && u.el.trigger("doubleTap"), (u = {}))
                            : (p = setTimeout(function() {
                                (p = null),
                                  u.el && u.el.trigger("singleTap"),
                                  (u = {});
                              }, 250));
                      }, 0))
                    : (u = {})),
              (y = v = 0));
          })
          .on("touchcancel MSPointerCancel pointercancel", a),
        e(window).on("scroll", a);
    }),
      [
        "swipe",
        "swipeLeft",
        "swipeRight",
        "swipeUp",
        "swipeDown",
        "doubleTap",
        "tap",
        "singleTap",
        "longTap"
      ].forEach(function(t) {
        e.fn[t] = function(e) {
          return this.on(t, e);
        };
      });
  })(Zepto);
