/*! modernizr 3.9.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses ! */
!(function(n, e, A) {
  function o(n, e) {
    return typeof n === e;
  }
  function t(n) {
    let e = f.className;
    const A = Modernizr._config.classPrefix || '';
    if ((u && (e = e.baseVal), Modernizr._config.enableJSClass)) {
      const o = new RegExp(`(^|\\s)${A}no-js(\\s|$)`);
      e = e.replace(o, `$1${A}js$2`);
    }
    Modernizr._config.enableClasses &&
      (n.length > 0 && (e += ` ${A}${n.join(` ${A}`)}`),
      u ? (f.className.baseVal = e) : (f.className = e));
  }
  function a(n, e) {
    if (typeof n === 'object') for (const A in n) r(n, A) && a(A, n[A]);
    else {
      n = n.toLowerCase();
      const o = n.split('.');
      let i = Modernizr[o[0]];
      if ((o.length === 2 && (i = i[o[1]]), void 0 !== i)) return Modernizr;
      (e = typeof e === 'function' ? e() : e),
      o.length === 1
        ? (Modernizr[o[0]] = e)
        : (!Modernizr[o[0]] ||
              Modernizr[o[0]] instanceof Boolean ||
              (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
        (Modernizr[o[0]][o[1]] = e)),
      t([(e && !1 !== e ? '' : 'no-') + o.join('-')]),
      Modernizr._trigger(n, e);
    }
    return Modernizr;
  }
  const i = [];
  const s = {
    _version: '3.9.1',
    _config: {
      classPrefix: '',
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0,
    },
    _q: [],
    on(n, e) {
      const A = this;
      setTimeout(function() {
        e(A[n]);
      }, 0);
    },
    addTest(n, e, A) {
      i.push({ name: n, fn: e, options: A });
    },
    addAsyncTest(n) {
      i.push({ name: null, fn: n });
    },
  };
  var Modernizr = function() {};
  (Modernizr.prototype = s), (Modernizr = new Modernizr());
  let r;
  const l = [];
  var f = e.documentElement;
  var u = f.nodeName.toLowerCase() === 'svg';
  !(function() {
    const n = {}.hasOwnProperty;
    r =
      o(n, 'undefined') || o(n.call, 'undefined')
        ? function(n, e) {
          return e in n && o(n.constructor.prototype[e], 'undefined');
        }
        : function(e, A) {
          return n.call(e, A);
        };
  })(),
  (s._l = {}),
  (s.on = function(n, e) {
    this._l[n] || (this._l[n] = []),
    this._l[n].push(e),
    Modernizr.hasOwnProperty(n) &&
          setTimeout(function() {
            Modernizr._trigger(n, Modernizr[n]);
          }, 0);
  }),
  (s._trigger = function(n, e) {
    if (this._l[n]) {
      const A = this._l[n];
      setTimeout(function() {
        var n;
        for (n = 0; n < A.length; n++) (0, A[n])(e);
      }, 0),
      delete this._l[n];
    }
  }),
  Modernizr._q.push(function() {
    s.addTest = a;
  }),
  Modernizr.addAsyncTest(function() {
    function n(n, e, A) {
      function o(e) {
        var o = !(!e || e.type !== 'load') && t.width === 1;
        a(n, n === 'webp' && o ? new Boolean(o) : o), A && A(e);
      }
      var t = new Image();
      (t.onerror = o), (t.onload = o), (t.src = e);
    }
    const e = [
        {
          uri:
            'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
          name: 'webp',
        },
        {
          uri:
            'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
          name: 'webp.alpha',
        },
        {
          uri:
            'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
          name: 'webp.animation',
        },
        {
          uri:
            'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
          name: 'webp.lossless',
        },
      ];
      const A = e.shift();
    n(A.name, A.uri, function(A) {
      if (A && A.type === 'load')
        for (let o = 0; o < e.length; o++) n(e[o].name, e[o].uri);
    });
  }),
  (function() {
      let n;
      let e;
      let A;
      let t;
      let a;
      let s;
      let r;
    for (const f in i)
      if (i.hasOwnProperty(f)) {
        if (
          ((n = []),
          (e = i[f]),
          e.name &&
              (n.push(e.name.toLowerCase()),
              e.options && e.options.aliases && e.options.aliases.length))
        )
          for (A = 0; A < e.options.aliases.length; A++)
            n.push(e.options.aliases[A].toLowerCase());
        for (
          t = o(e.fn, 'function') ? e.fn() : e.fn, a = 0;
          a < n.length;
          a++
        )
          (s = n[a]),
          (r = s.split('.')),
          1 === r.length
            ? (Modernizr[r[0]] = t)
            : ((Modernizr[r[0]] &&
                    (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean)) ||
                    (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = t)),
          l.push((t ? '' : 'no-') + r.join('-'));
      }
  })(),
  t(l),
  delete s.addTest,
  delete s.addAsyncTest;
  for (let c = 0; c < Modernizr._q.length; c++) Modernizr._q[c]();
  n.Modernizr = Modernizr;
})(window, document);
