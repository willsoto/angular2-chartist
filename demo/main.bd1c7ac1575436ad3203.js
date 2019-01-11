(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    BeBh: function(e, t, n) {
      var r, o;
      (o = this),
        void 0 ===
          (r = function() {
            return (o.Chartist = ((e = { version: '0.11.0' }),
            (function(e, t, n) {
              'use strict';
              (n.namespaces = {
                svg: 'http://www.w3.org/2000/svg',
                xmlns: 'http://www.w3.org/2000/xmlns/',
                xhtml: 'http://www.w3.org/1999/xhtml',
                xlink: 'http://www.w3.org/1999/xlink',
                ct: 'http://gionkunz.github.com/chartist-js/ct'
              }),
                (n.noop = function(e) {
                  return e;
                }),
                (n.alphaNumerate = function(e) {
                  return String.fromCharCode(97 + (e % 26));
                }),
                (n.extend = function(e) {
                  var t, r, o;
                  for (e = e || {}, t = 1; t < arguments.length; t++)
                    for (var i in (r = arguments[t]))
                      e[i] =
                        'object' != typeof (o = r[i]) ||
                        null === o ||
                        o instanceof Array
                          ? o
                          : n.extend(e[i], o);
                  return e;
                }),
                (n.replaceAll = function(e, t, n) {
                  return e.replace(new RegExp(t, 'g'), n);
                }),
                (n.ensureUnit = function(e, t) {
                  return 'number' == typeof e && (e += t), e;
                }),
                (n.quantity = function(e) {
                  if ('string' == typeof e) {
                    var t = /^(\d+)\s*(.*)$/g.exec(e);
                    return { value: +t[1], unit: t[2] || void 0 };
                  }
                  return { value: e };
                }),
                (n.querySelector = function(e) {
                  return e instanceof Node ? e : t.querySelector(e);
                }),
                (n.times = function(e) {
                  return Array.apply(null, new Array(e));
                }),
                (n.sum = function(e, t) {
                  return e + (t || 0);
                }),
                (n.mapMultiply = function(e) {
                  return function(t) {
                    return t * e;
                  };
                }),
                (n.mapAdd = function(e) {
                  return function(t) {
                    return t + e;
                  };
                }),
                (n.serialMap = function(e, t) {
                  var r = [],
                    o = Math.max.apply(
                      null,
                      e.map(function(e) {
                        return e.length;
                      })
                    );
                  return (
                    n.times(o).forEach(function(n, o) {
                      var i = e.map(function(e) {
                        return e[o];
                      });
                      r[o] = t.apply(null, i);
                    }),
                    r
                  );
                }),
                (n.roundWithPrecision = function(e, t) {
                  var r = Math.pow(10, t || n.precision);
                  return Math.round(e * r) / r;
                }),
                (n.precision = 8),
                (n.escapingMap = {
                  '&': '&amp;',
                  '<': '&lt;',
                  '>': '&gt;',
                  '"': '&quot;',
                  "'": '&#039;'
                }),
                (n.serialize = function(e) {
                  return null == e
                    ? e
                    : ('number' == typeof e
                        ? (e = '' + e)
                        : 'object' == typeof e &&
                          (e = JSON.stringify({ data: e })),
                      Object.keys(n.escapingMap).reduce(function(e, t) {
                        return n.replaceAll(e, t, n.escapingMap[t]);
                      }, e));
                }),
                (n.deserialize = function(e) {
                  if ('string' != typeof e) return e;
                  e = Object.keys(n.escapingMap).reduce(function(e, t) {
                    return n.replaceAll(e, n.escapingMap[t], t);
                  }, e);
                  try {
                    e = void 0 !== (e = JSON.parse(e)).data ? e.data : e;
                  } catch (t) {}
                  return e;
                }),
                (n.createSvg = function(e, t, r, o) {
                  var i;
                  return (
                    (t = t || '100%'),
                    (r = r || '100%'),
                    Array.prototype.slice
                      .call(e.querySelectorAll('svg'))
                      .filter(function(e) {
                        return e.getAttributeNS(n.namespaces.xmlns, 'ct');
                      })
                      .forEach(function(t) {
                        e.removeChild(t);
                      }),
                    ((i = new n.Svg('svg')
                      .attr({ width: t, height: r })
                      .addClass(o))._node.style.width = t),
                    (i._node.style.height = r),
                    e.appendChild(i._node),
                    i
                  );
                }),
                (n.normalizeData = function(e, t, r) {
                  var o,
                    i = { raw: e, normalized: {} };
                  return (
                    (i.normalized.series = n.getDataArray(
                      { series: e.series || [] },
                      t,
                      r
                    )),
                    (o = i.normalized.series.every(function(e) {
                      return e instanceof Array;
                    })
                      ? Math.max.apply(
                          null,
                          i.normalized.series.map(function(e) {
                            return e.length;
                          })
                        )
                      : i.normalized.series.length),
                    (i.normalized.labels = (e.labels || []).slice()),
                    Array.prototype.push.apply(
                      i.normalized.labels,
                      n
                        .times(Math.max(0, o - i.normalized.labels.length))
                        .map(function() {
                          return '';
                        })
                    ),
                    t && n.reverseData(i.normalized),
                    i
                  );
                }),
                (n.safeHasProperty = function(e, t) {
                  return (
                    null !== e && 'object' == typeof e && e.hasOwnProperty(t)
                  );
                }),
                (n.isDataHoleValue = function(e) {
                  return null == e || ('number' == typeof e && isNaN(e));
                }),
                (n.reverseData = function(e) {
                  e.labels.reverse(), e.series.reverse();
                  for (var t = 0; t < e.series.length; t++)
                    'object' == typeof e.series[t] &&
                    void 0 !== e.series[t].data
                      ? e.series[t].data.reverse()
                      : e.series[t] instanceof Array && e.series[t].reverse();
                }),
                (n.getDataArray = function(e, t, r) {
                  return e.series.map(function e(t) {
                    if (n.safeHasProperty(t, 'value')) return e(t.value);
                    if (n.safeHasProperty(t, 'data')) return e(t.data);
                    if (t instanceof Array) return t.map(e);
                    if (!n.isDataHoleValue(t)) {
                      if (r) {
                        var o = {};
                        return (
                          'string' == typeof r
                            ? (o[r] = n.getNumberOrUndefined(t))
                            : (o.y = n.getNumberOrUndefined(t)),
                          (o.x = t.hasOwnProperty('x')
                            ? n.getNumberOrUndefined(t.x)
                            : o.x),
                          (o.y = t.hasOwnProperty('y')
                            ? n.getNumberOrUndefined(t.y)
                            : o.y),
                          o
                        );
                      }
                      return n.getNumberOrUndefined(t);
                    }
                  });
                }),
                (n.normalizePadding = function(e, t) {
                  return (
                    (t = t || 0),
                    'number' == typeof e
                      ? { top: e, right: e, bottom: e, left: e }
                      : {
                          top: 'number' == typeof e.top ? e.top : t,
                          right: 'number' == typeof e.right ? e.right : t,
                          bottom: 'number' == typeof e.bottom ? e.bottom : t,
                          left: 'number' == typeof e.left ? e.left : t
                        }
                  );
                }),
                (n.getMetaData = function(e, t) {
                  var n = e.data ? e.data[t] : e[t];
                  return n ? n.meta : void 0;
                }),
                (n.orderOfMagnitude = function(e) {
                  return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
                }),
                (n.projectLength = function(e, t, n) {
                  return (t / n.range) * e;
                }),
                (n.getAvailableHeight = function(e, t) {
                  return Math.max(
                    (n.quantity(t.height).value || e.height()) -
                      (t.chartPadding.top + t.chartPadding.bottom) -
                      t.axisX.offset,
                    0
                  );
                }),
                (n.getHighLow = function(e, t, r) {
                  var o = {
                      high:
                        void 0 ===
                        (t = n.extend(
                          {},
                          t,
                          r ? t['axis' + r.toUpperCase()] : {}
                        )).high
                          ? -Number.MAX_VALUE
                          : +t.high,
                      low: void 0 === t.low ? Number.MAX_VALUE : +t.low
                    },
                    i = void 0 === t.high,
                    s = void 0 === t.low;
                  return (
                    (i || s) &&
                      (function e(t) {
                        if (void 0 !== t)
                          if (t instanceof Array)
                            for (var n = 0; n < t.length; n++) e(t[n]);
                          else {
                            var a = r ? +t[r] : +t;
                            i && a > o.high && (o.high = a),
                              s && a < o.low && (o.low = a);
                          }
                      })(e),
                    (t.referenceValue || 0 === t.referenceValue) &&
                      ((o.high = Math.max(t.referenceValue, o.high)),
                      (o.low = Math.min(t.referenceValue, o.low))),
                    o.high <= o.low &&
                      (0 === o.low
                        ? (o.high = 1)
                        : o.low < 0
                        ? (o.high = 0)
                        : o.high > 0
                        ? (o.low = 0)
                        : ((o.high = 1), (o.low = 0))),
                    o
                  );
                }),
                (n.isNumeric = function(e) {
                  return null !== e && isFinite(e);
                }),
                (n.isFalseyButZero = function(e) {
                  return !e && 0 !== e;
                }),
                (n.getNumberOrUndefined = function(e) {
                  return n.isNumeric(e) ? +e : void 0;
                }),
                (n.isMultiValue = function(e) {
                  return 'object' == typeof e && ('x' in e || 'y' in e);
                }),
                (n.getMultiValue = function(e, t) {
                  return n.isMultiValue(e)
                    ? n.getNumberOrUndefined(e[t || 'y'])
                    : n.getNumberOrUndefined(e);
                }),
                (n.rho = function(e) {
                  if (1 === e) return e;
                  function t(e, n) {
                    return e % n == 0 ? n : t(n, e % n);
                  }
                  function n(e) {
                    return e * e + 1;
                  }
                  var r,
                    o = 2,
                    i = 2;
                  if (e % 2 == 0) return 2;
                  do {
                    (o = n(o) % e),
                      (i = n(n(i)) % e),
                      (r = t(Math.abs(o - i), e));
                  } while (1 === r);
                  return r;
                }),
                (n.getBounds = function(e, t, r, o) {
                  var i,
                    s,
                    a,
                    u = 0,
                    l = { high: t.high, low: t.low };
                  (l.valueRange = l.high - l.low),
                    (l.oom = n.orderOfMagnitude(l.valueRange)),
                    (l.step = Math.pow(10, l.oom)),
                    (l.min = Math.floor(l.low / l.step) * l.step),
                    (l.max = Math.ceil(l.high / l.step) * l.step),
                    (l.range = l.max - l.min),
                    (l.numberOfSteps = Math.round(l.range / l.step));
                  var c = n.projectLength(e, l.step, l) < r,
                    d = o ? n.rho(l.range) : 0;
                  if (o && n.projectLength(e, 1, l) >= r) l.step = 1;
                  else if (o && d < l.step && n.projectLength(e, d, l) >= r)
                    l.step = d;
                  else
                    for (;;) {
                      if (c && n.projectLength(e, l.step, l) <= r) l.step *= 2;
                      else {
                        if (c || !(n.projectLength(e, l.step / 2, l) >= r))
                          break;
                        if (((l.step /= 2), o && l.step % 1 != 0)) {
                          l.step *= 2;
                          break;
                        }
                      }
                      if (u++ > 1e3)
                        throw new Error(
                          'Exceeded maximum number of iterations while optimizing scale step!'
                        );
                    }
                  var p = 2.221e-16;
                  function f(e, t) {
                    return e === (e += t) && (e *= 1 + (t > 0 ? p : -p)), e;
                  }
                  for (
                    l.step = Math.max(l.step, p), s = l.min, a = l.max;
                    s + l.step <= l.low;

                  )
                    s = f(s, l.step);
                  for (; a - l.step >= l.high; ) a = f(a, -l.step);
                  (l.min = s), (l.max = a), (l.range = l.max - l.min);
                  var h = [];
                  for (i = l.min; i <= l.max; i = f(i, l.step)) {
                    var v = n.roundWithPrecision(i);
                    v !== h[h.length - 1] && h.push(v);
                  }
                  return (l.values = h), l;
                }),
                (n.polarToCartesian = function(e, t, n, r) {
                  var o = ((r - 90) * Math.PI) / 180;
                  return { x: e + n * Math.cos(o), y: t + n * Math.sin(o) };
                }),
                (n.createChartRect = function(e, t, r) {
                  var o = !(!t.axisX && !t.axisY),
                    i = o ? t.axisY.offset : 0,
                    s = o ? t.axisX.offset : 0,
                    a = e.width() || n.quantity(t.width).value || 0,
                    u = e.height() || n.quantity(t.height).value || 0,
                    l = n.normalizePadding(t.chartPadding, r);
                  (a = Math.max(a, i + l.left + l.right)),
                    (u = Math.max(u, s + l.top + l.bottom));
                  var c = {
                    padding: l,
                    width: function() {
                      return this.x2 - this.x1;
                    },
                    height: function() {
                      return this.y1 - this.y2;
                    }
                  };
                  return (
                    o
                      ? ('start' === t.axisX.position
                          ? ((c.y2 = l.top + s),
                            (c.y1 = Math.max(u - l.bottom, c.y2 + 1)))
                          : ((c.y2 = l.top),
                            (c.y1 = Math.max(u - l.bottom - s, c.y2 + 1))),
                        'start' === t.axisY.position
                          ? ((c.x1 = l.left + i),
                            (c.x2 = Math.max(a - l.right, c.x1 + 1)))
                          : ((c.x1 = l.left),
                            (c.x2 = Math.max(a - l.right - i, c.x1 + 1))))
                      : ((c.x1 = l.left),
                        (c.x2 = Math.max(a - l.right, c.x1 + 1)),
                        (c.y2 = l.top),
                        (c.y1 = Math.max(u - l.bottom, c.y2 + 1))),
                    c
                  );
                }),
                (n.createGrid = function(e, t, r, o, i, s, a, u) {
                  var l = {};
                  (l[r.units.pos + '1'] = e),
                    (l[r.units.pos + '2'] = e),
                    (l[r.counterUnits.pos + '1'] = o),
                    (l[r.counterUnits.pos + '2'] = o + i);
                  var c = s.elem('line', l, a.join(' '));
                  u.emit(
                    'draw',
                    n.extend(
                      { type: 'grid', axis: r, index: t, group: s, element: c },
                      l
                    )
                  );
                }),
                (n.createGridBackground = function(e, t, n, r) {
                  var o = e.elem(
                    'rect',
                    { x: t.x1, y: t.y2, width: t.width(), height: t.height() },
                    n,
                    !0
                  );
                  r.emit('draw', {
                    type: 'gridBackground',
                    group: e,
                    element: o
                  });
                }),
                (n.createLabel = function(e, r, o, i, s, a, u, l, c, d, p) {
                  var f,
                    h = {};
                  if (
                    ((h[s.units.pos] = e + u[s.units.pos]),
                    (h[s.counterUnits.pos] = u[s.counterUnits.pos]),
                    (h[s.units.len] = r),
                    (h[s.counterUnits.len] = Math.max(0, a - 10)),
                    d)
                  ) {
                    var v = t.createElement('span');
                    (v.className = c.join(' ')),
                      v.setAttribute('xmlns', n.namespaces.xhtml),
                      (v.innerText = i[o]),
                      (v.style[s.units.len] =
                        Math.round(h[s.units.len]) + 'px'),
                      (v.style[s.counterUnits.len] =
                        Math.round(h[s.counterUnits.len]) + 'px'),
                      (f = l.foreignObject(
                        v,
                        n.extend({ style: 'overflow: visible;' }, h)
                      ));
                  } else f = l.elem('text', h, c.join(' ')).text(i[o]);
                  p.emit(
                    'draw',
                    n.extend(
                      {
                        type: 'label',
                        axis: s,
                        index: o,
                        group: l,
                        element: f,
                        text: i[o]
                      },
                      h
                    )
                  );
                }),
                (n.getSeriesOption = function(e, t, n) {
                  if (e.name && t.series && t.series[e.name]) {
                    var r = t.series[e.name];
                    return r.hasOwnProperty(n) ? r[n] : t[n];
                  }
                  return t[n];
                }),
                (n.optionsProvider = function(t, r, o) {
                  var i,
                    s,
                    a = n.extend({}, t),
                    u = [];
                  function l(t) {
                    var u = i;
                    if (((i = n.extend({}, a)), r))
                      for (s = 0; s < r.length; s++)
                        e.matchMedia(r[s][0]).matches &&
                          (i = n.extend(i, r[s][1]));
                    o &&
                      t &&
                      o.emit('optionsChanged', {
                        previousOptions: u,
                        currentOptions: i
                      });
                  }
                  if (!e.matchMedia)
                    throw "window.matchMedia not found! Make sure you're using a polyfill.";
                  if (r)
                    for (s = 0; s < r.length; s++) {
                      var c = e.matchMedia(r[s][0]);
                      c.addListener(l), u.push(c);
                    }
                  return (
                    l(),
                    {
                      removeMediaQueryListeners: function() {
                        u.forEach(function(e) {
                          e.removeListener(l);
                        });
                      },
                      getCurrentOptions: function() {
                        return n.extend({}, i);
                      }
                    }
                  );
                }),
                (n.splitIntoSegments = function(e, t, r) {
                  r = n.extend({}, { increasingX: !1, fillHoles: !1 }, r);
                  for (var o = [], i = !0, s = 0; s < e.length; s += 2)
                    void 0 === n.getMultiValue(t[s / 2].value)
                      ? r.fillHoles || (i = !0)
                      : (r.increasingX &&
                          s >= 2 &&
                          e[s] <= e[s - 2] &&
                          (i = !0),
                        i &&
                          (o.push({ pathCoordinates: [], valueData: [] }),
                          (i = !1)),
                        o[o.length - 1].pathCoordinates.push(e[s], e[s + 1]),
                        o[o.length - 1].valueData.push(t[s / 2]));
                  return o;
                });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              (n.Interpolation = {}),
                (n.Interpolation.none = function(e) {
                  return (
                    (e = n.extend({}, { fillHoles: !1 }, e)),
                    function(t, r) {
                      for (
                        var o = new n.Svg.Path(), i = !0, s = 0;
                        s < t.length;
                        s += 2
                      ) {
                        var a = t[s],
                          u = t[s + 1],
                          l = r[s / 2];
                        void 0 !== n.getMultiValue(l.value)
                          ? (i ? o.move(a, u, !1, l) : o.line(a, u, !1, l),
                            (i = !1))
                          : e.fillHoles || (i = !0);
                      }
                      return o;
                    }
                  );
                }),
                (n.Interpolation.simple = function(e) {
                  e = n.extend({}, { divisor: 2, fillHoles: !1 }, e);
                  var t = 1 / Math.max(1, e.divisor);
                  return function(r, o) {
                    for (
                      var i, s, a, u = new n.Svg.Path(), l = 0;
                      l < r.length;
                      l += 2
                    ) {
                      var c = r[l],
                        d = r[l + 1],
                        p = (c - i) * t,
                        f = o[l / 2];
                      void 0 !== f.value
                        ? (void 0 === a
                            ? u.move(c, d, !1, f)
                            : u.curve(i + p, s, c - p, d, c, d, !1, f),
                          (i = c),
                          (s = d),
                          (a = f))
                        : e.fillHoles || (i = c = a = void 0);
                    }
                    return u;
                  };
                }),
                (n.Interpolation.cardinal = function(e) {
                  e = n.extend({}, { tension: 1, fillHoles: !1 }, e);
                  var t = Math.min(1, Math.max(0, e.tension)),
                    r = 1 - t;
                  return function o(i, s) {
                    var a = n.splitIntoSegments(i, s, {
                      fillHoles: e.fillHoles
                    });
                    if (a.length) {
                      if (a.length > 1) {
                        var u = [];
                        return (
                          a.forEach(function(e) {
                            u.push(o(e.pathCoordinates, e.valueData));
                          }),
                          n.Svg.Path.join(u)
                        );
                      }
                      if (
                        ((s = a[0].valueData),
                        (i = a[0].pathCoordinates).length <= 4)
                      )
                        return n.Interpolation.none()(i, s);
                      for (
                        var l = new n.Svg.Path().move(i[0], i[1], !1, s[0]),
                          c = 0,
                          d = i.length;
                        d - 2 > c;
                        c += 2
                      ) {
                        var p = [
                          { x: +i[c - 2], y: +i[c - 1] },
                          { x: +i[c], y: +i[c + 1] },
                          { x: +i[c + 2], y: +i[c + 3] },
                          { x: +i[c + 4], y: +i[c + 5] }
                        ];
                        d - 4 === c
                          ? (p[3] = p[2])
                          : c || (p[0] = { x: +i[c], y: +i[c + 1] }),
                          l.curve(
                            (t * (6 * p[1].x - p[0].x + p[2].x)) / 6 +
                              r * p[2].x,
                            (t * (6 * p[1].y - p[0].y + p[2].y)) / 6 +
                              r * p[2].y,
                            (t * (p[1].x + 6 * p[2].x - p[3].x)) / 6 +
                              r * p[2].x,
                            (t * (p[1].y + 6 * p[2].y - p[3].y)) / 6 +
                              r * p[2].y,
                            p[2].x,
                            p[2].y,
                            !1,
                            s[(c + 2) / 2]
                          );
                      }
                      return l;
                    }
                    return n.Interpolation.none()([]);
                  };
                }),
                (n.Interpolation.monotoneCubic = function(e) {
                  return (
                    (e = n.extend({}, { fillHoles: !1 }, e)),
                    function t(r, o) {
                      var i = n.splitIntoSegments(r, o, {
                        fillHoles: e.fillHoles,
                        increasingX: !0
                      });
                      if (i.length) {
                        if (i.length > 1) {
                          var s = [];
                          return (
                            i.forEach(function(e) {
                              s.push(t(e.pathCoordinates, e.valueData));
                            }),
                            n.Svg.Path.join(s)
                          );
                        }
                        if (
                          ((o = i[0].valueData),
                          (r = i[0].pathCoordinates).length <= 4)
                        )
                          return n.Interpolation.none()(r, o);
                        var a,
                          u,
                          l = [],
                          c = [],
                          d = r.length / 2,
                          p = [],
                          f = [],
                          h = [],
                          v = [];
                        for (a = 0; a < d; a++)
                          (l[a] = r[2 * a]), (c[a] = r[2 * a + 1]);
                        for (a = 0; a < d - 1; a++)
                          (h[a] = c[a + 1] - c[a]),
                            (v[a] = l[a + 1] - l[a]),
                            (f[a] = h[a] / v[a]);
                        for (
                          p[0] = f[0], p[d - 1] = f[d - 2], a = 1;
                          a < d - 1;
                          a++
                        )
                          0 === f[a] ||
                          0 === f[a - 1] ||
                          f[a - 1] > 0 != f[a] > 0
                            ? (p[a] = 0)
                            : ((p[a] =
                                (3 * (v[a - 1] + v[a])) /
                                ((2 * v[a] + v[a - 1]) / f[a - 1] +
                                  (v[a] + 2 * v[a - 1]) / f[a])),
                              isFinite(p[a]) || (p[a] = 0));
                        for (
                          u = new n.Svg.Path().move(l[0], c[0], !1, o[0]),
                            a = 0;
                          a < d - 1;
                          a++
                        )
                          u.curve(
                            l[a] + v[a] / 3,
                            c[a] + (p[a] * v[a]) / 3,
                            l[a + 1] - v[a] / 3,
                            c[a + 1] - (p[a + 1] * v[a]) / 3,
                            l[a + 1],
                            c[a + 1],
                            !1,
                            o[a + 1]
                          );
                        return u;
                      }
                      return n.Interpolation.none()([]);
                    }
                  );
                }),
                (n.Interpolation.step = function(e) {
                  return (
                    (e = n.extend({}, { postpone: !0, fillHoles: !1 }, e)),
                    function(t, r) {
                      for (
                        var o, i, s, a = new n.Svg.Path(), u = 0;
                        u < t.length;
                        u += 2
                      ) {
                        var l = t[u],
                          c = t[u + 1],
                          d = r[u / 2];
                        void 0 !== d.value
                          ? (void 0 === s
                              ? a.move(l, c, !1, d)
                              : (e.postpone
                                  ? a.line(l, i, !1, s)
                                  : a.line(o, c, !1, d),
                                a.line(l, c, !1, d)),
                            (o = l),
                            (i = c),
                            (s = d))
                          : e.fillHoles || (o = i = s = void 0);
                      }
                      return a;
                    }
                  );
                });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.EventEmitter = function() {
                var e = [];
                return {
                  addEventHandler: function(t, n) {
                    (e[t] = e[t] || []), e[t].push(n);
                  },
                  removeEventHandler: function(t, n) {
                    e[t] &&
                      (n
                        ? (e[t].splice(e[t].indexOf(n), 1),
                          0 === e[t].length && delete e[t])
                        : delete e[t]);
                  },
                  emit: function(t, n) {
                    e[t] &&
                      e[t].forEach(function(e) {
                        e(n);
                      }),
                      e['*'] &&
                        e['*'].forEach(function(e) {
                          e(t, n);
                        });
                  }
                };
              };
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.Class = {
                extend: function(e, t) {
                  var r = t || this.prototype || n.Class,
                    o = Object.create(r);
                  n.Class.cloneDefinitions(o, e);
                  var i = function() {
                    var e,
                      t = o.constructor || function() {};
                    return (
                      (e = this === n ? Object.create(o) : this),
                      t.apply(e, Array.prototype.slice.call(arguments, 0)),
                      e
                    );
                  };
                  return (
                    (i.prototype = o),
                    (i.super = r),
                    (i.extend = this.extend),
                    i
                  );
                },
                cloneDefinitions: function() {
                  var e = (function(e) {
                      var t = [];
                      if (e.length)
                        for (var n = 0; n < e.length; n++) t.push(e[n]);
                      return t;
                    })(arguments),
                    t = e[0];
                  return (
                    e.splice(1, e.length - 1).forEach(function(e) {
                      Object.getOwnPropertyNames(e).forEach(function(n) {
                        delete t[n],
                          Object.defineProperty(
                            t,
                            n,
                            Object.getOwnPropertyDescriptor(e, n)
                          );
                      });
                    }),
                    t
                  );
                }
              };
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.Base = n.Class.extend({
                constructor: function(t, r, o, i, s) {
                  (this.container = n.querySelector(t)),
                    (this.data = r || {}),
                    (this.data.labels = this.data.labels || []),
                    (this.data.series = this.data.series || []),
                    (this.defaultOptions = o),
                    (this.options = i),
                    (this.responsiveOptions = s),
                    (this.eventEmitter = n.EventEmitter()),
                    (this.supportsForeignObject = n.Svg.isSupported(
                      'Extensibility'
                    )),
                    (this.supportsAnimations = n.Svg.isSupported(
                      'AnimationEventsAttribute'
                    )),
                    (this.resizeListener = function() {
                      this.update();
                    }.bind(this)),
                    this.container &&
                      (this.container.__chartist__ &&
                        this.container.__chartist__.detach(),
                      (this.container.__chartist__ = this)),
                    (this.initializeTimeoutId = setTimeout(
                      function() {
                        e.addEventListener('resize', this.resizeListener),
                          (this.optionsProvider = n.optionsProvider(
                            this.options,
                            this.responsiveOptions,
                            this.eventEmitter
                          )),
                          this.eventEmitter.addEventHandler(
                            'optionsChanged',
                            function() {
                              this.update();
                            }.bind(this)
                          ),
                          this.options.plugins &&
                            this.options.plugins.forEach(
                              function(e) {
                                e instanceof Array ? e[0](this, e[1]) : e(this);
                              }.bind(this)
                            ),
                          this.eventEmitter.emit('data', {
                            type: 'initial',
                            data: this.data
                          }),
                          this.createChart(
                            this.optionsProvider.getCurrentOptions()
                          ),
                          (this.initializeTimeoutId = void 0);
                      }.bind(this),
                      0
                    ));
                },
                optionsProvider: void 0,
                container: void 0,
                svg: void 0,
                eventEmitter: void 0,
                createChart: function() {
                  throw new Error("Base chart type can't be instantiated!");
                },
                update: function(e, t, r) {
                  return (
                    e &&
                      ((this.data = e || {}),
                      (this.data.labels = this.data.labels || []),
                      (this.data.series = this.data.series || []),
                      this.eventEmitter.emit('data', {
                        type: 'update',
                        data: this.data
                      })),
                    t &&
                      ((this.options = n.extend(
                        {},
                        r ? this.options : this.defaultOptions,
                        t
                      )),
                      this.initializeTimeoutId ||
                        (this.optionsProvider.removeMediaQueryListeners(),
                        (this.optionsProvider = n.optionsProvider(
                          this.options,
                          this.responsiveOptions,
                          this.eventEmitter
                        )))),
                    this.initializeTimeoutId ||
                      this.createChart(
                        this.optionsProvider.getCurrentOptions()
                      ),
                    this
                  );
                },
                detach: function() {
                  return (
                    this.initializeTimeoutId
                      ? e.clearTimeout(this.initializeTimeoutId)
                      : (e.removeEventListener('resize', this.resizeListener),
                        this.optionsProvider.removeMediaQueryListeners()),
                    this
                  );
                },
                on: function(e, t) {
                  return this.eventEmitter.addEventHandler(e, t), this;
                },
                off: function(e, t) {
                  return this.eventEmitter.removeEventHandler(e, t), this;
                },
                version: n.version,
                supportsForeignObject: !1
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              (n.Svg = n.Class.extend({
                constructor: function(e, r, o, i, s) {
                  e instanceof Element
                    ? (this._node = e)
                    : ((this._node = t.createElementNS(n.namespaces.svg, e)),
                      'svg' === e &&
                        this.attr({ 'xmlns:ct': n.namespaces.ct })),
                    r && this.attr(r),
                    o && this.addClass(o),
                    i &&
                      (s && i._node.firstChild
                        ? i._node.insertBefore(this._node, i._node.firstChild)
                        : i._node.appendChild(this._node));
                },
                attr: function(e, t) {
                  return 'string' == typeof e
                    ? t
                      ? this._node.getAttributeNS(t, e)
                      : this._node.getAttribute(e)
                    : (Object.keys(e).forEach(
                        function(t) {
                          if (void 0 !== e[t])
                            if (-1 !== t.indexOf(':')) {
                              var r = t.split(':');
                              this._node.setAttributeNS(
                                n.namespaces[r[0]],
                                t,
                                e[t]
                              );
                            } else this._node.setAttribute(t, e[t]);
                        }.bind(this)
                      ),
                      this);
                },
                elem: function(e, t, r, o) {
                  return new n.Svg(e, t, r, this, o);
                },
                parent: function() {
                  return this._node.parentNode instanceof SVGElement
                    ? new n.Svg(this._node.parentNode)
                    : null;
                },
                root: function() {
                  for (var e = this._node; 'svg' !== e.nodeName; )
                    e = e.parentNode;
                  return new n.Svg(e);
                },
                querySelector: function(e) {
                  var t = this._node.querySelector(e);
                  return t ? new n.Svg(t) : null;
                },
                querySelectorAll: function(e) {
                  var t = this._node.querySelectorAll(e);
                  return t.length ? new n.Svg.List(t) : null;
                },
                getNode: function() {
                  return this._node;
                },
                foreignObject: function(e, r, o, i) {
                  if ('string' == typeof e) {
                    var s = t.createElement('div');
                    (s.innerHTML = e), (e = s.firstChild);
                  }
                  e.setAttribute('xmlns', n.namespaces.xmlns);
                  var a = this.elem('foreignObject', r, o, i);
                  return a._node.appendChild(e), a;
                },
                text: function(e) {
                  return this._node.appendChild(t.createTextNode(e)), this;
                },
                empty: function() {
                  for (; this._node.firstChild; )
                    this._node.removeChild(this._node.firstChild);
                  return this;
                },
                remove: function() {
                  return (
                    this._node.parentNode.removeChild(this._node), this.parent()
                  );
                },
                replace: function(e) {
                  return (
                    this._node.parentNode.replaceChild(e._node, this._node), e
                  );
                },
                append: function(e, t) {
                  return (
                    t && this._node.firstChild
                      ? this._node.insertBefore(e._node, this._node.firstChild)
                      : this._node.appendChild(e._node),
                    this
                  );
                },
                classes: function() {
                  return this._node.getAttribute('class')
                    ? this._node
                        .getAttribute('class')
                        .trim()
                        .split(/\s+/)
                    : [];
                },
                addClass: function(e) {
                  return (
                    this._node.setAttribute(
                      'class',
                      this.classes(this._node)
                        .concat(e.trim().split(/\s+/))
                        .filter(function(e, t, n) {
                          return n.indexOf(e) === t;
                        })
                        .join(' ')
                    ),
                    this
                  );
                },
                removeClass: function(e) {
                  var t = e.trim().split(/\s+/);
                  return (
                    this._node.setAttribute(
                      'class',
                      this.classes(this._node)
                        .filter(function(e) {
                          return -1 === t.indexOf(e);
                        })
                        .join(' ')
                    ),
                    this
                  );
                },
                removeAllClasses: function() {
                  return this._node.setAttribute('class', ''), this;
                },
                height: function() {
                  return this._node.getBoundingClientRect().height;
                },
                width: function() {
                  return this._node.getBoundingClientRect().width;
                },
                animate: function(e, t, r) {
                  return (
                    void 0 === t && (t = !0),
                    Object.keys(e).forEach(
                      function(o) {
                        function i(e, t) {
                          var i,
                            s,
                            a,
                            u = {};
                          e.easing &&
                            ((a =
                              e.easing instanceof Array
                                ? e.easing
                                : n.Svg.Easing[e.easing]),
                            delete e.easing),
                            (e.begin = n.ensureUnit(e.begin, 'ms')),
                            (e.dur = n.ensureUnit(e.dur, 'ms')),
                            a &&
                              ((e.calcMode = 'spline'),
                              (e.keySplines = a.join(' ')),
                              (e.keyTimes = '0;1')),
                            t &&
                              ((e.fill = 'freeze'),
                              (u[o] = e.from),
                              this.attr(u),
                              (s = n.quantity(e.begin || 0).value),
                              (e.begin = 'indefinite')),
                            (i = this.elem(
                              'animate',
                              n.extend({ attributeName: o }, e)
                            )),
                            t &&
                              setTimeout(
                                function() {
                                  try {
                                    i._node.beginElement();
                                  } catch (t) {
                                    (u[o] = e.to), this.attr(u), i.remove();
                                  }
                                }.bind(this),
                                s
                              ),
                            r &&
                              i._node.addEventListener(
                                'beginEvent',
                                function() {
                                  r.emit('animationBegin', {
                                    element: this,
                                    animate: i._node,
                                    params: e
                                  });
                                }.bind(this)
                              ),
                            i._node.addEventListener(
                              'endEvent',
                              function() {
                                r &&
                                  r.emit('animationEnd', {
                                    element: this,
                                    animate: i._node,
                                    params: e
                                  }),
                                  t &&
                                    ((u[o] = e.to), this.attr(u), i.remove());
                              }.bind(this)
                            );
                        }
                        e[o] instanceof Array
                          ? e[o].forEach(
                              function(e) {
                                i.bind(this)(e, !1);
                              }.bind(this)
                            )
                          : i.bind(this)(e[o], t);
                      }.bind(this)
                    ),
                    this
                  );
                }
              })),
                (n.Svg.isSupported = function(e) {
                  return t.implementation.hasFeature(
                    'http://www.w3.org/TR/SVG11/feature#' + e,
                    '1.1'
                  );
                }),
                (n.Svg.Easing = {
                  easeInSine: [0.47, 0, 0.745, 0.715],
                  easeOutSine: [0.39, 0.575, 0.565, 1],
                  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
                  easeInQuad: [0.55, 0.085, 0.68, 0.53],
                  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
                  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
                  easeInCubic: [0.55, 0.055, 0.675, 0.19],
                  easeOutCubic: [0.215, 0.61, 0.355, 1],
                  easeInOutCubic: [0.645, 0.045, 0.355, 1],
                  easeInQuart: [0.895, 0.03, 0.685, 0.22],
                  easeOutQuart: [0.165, 0.84, 0.44, 1],
                  easeInOutQuart: [0.77, 0, 0.175, 1],
                  easeInQuint: [0.755, 0.05, 0.855, 0.06],
                  easeOutQuint: [0.23, 1, 0.32, 1],
                  easeInOutQuint: [0.86, 0, 0.07, 1],
                  easeInExpo: [0.95, 0.05, 0.795, 0.035],
                  easeOutExpo: [0.19, 1, 0.22, 1],
                  easeInOutExpo: [1, 0, 0, 1],
                  easeInCirc: [0.6, 0.04, 0.98, 0.335],
                  easeOutCirc: [0.075, 0.82, 0.165, 1],
                  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
                  easeInBack: [0.6, -0.28, 0.735, 0.045],
                  easeOutBack: [0.175, 0.885, 0.32, 1.275],
                  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
                }),
                (n.Svg.List = n.Class.extend({
                  constructor: function(e) {
                    var t = this;
                    this.svgElements = [];
                    for (var r = 0; r < e.length; r++)
                      this.svgElements.push(new n.Svg(e[r]));
                    Object.keys(n.Svg.prototype)
                      .filter(function(e) {
                        return (
                          -1 ===
                          [
                            'constructor',
                            'parent',
                            'querySelector',
                            'querySelectorAll',
                            'replace',
                            'append',
                            'classes',
                            'height',
                            'width'
                          ].indexOf(e)
                        );
                      })
                      .forEach(function(e) {
                        t[e] = function() {
                          var r = Array.prototype.slice.call(arguments, 0);
                          return (
                            t.svgElements.forEach(function(t) {
                              n.Svg.prototype[e].apply(t, r);
                            }),
                            t
                          );
                        };
                      });
                  }
                }));
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              var r = {
                  m: ['x', 'y'],
                  l: ['x', 'y'],
                  c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
                  a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
                },
                o = { accuracy: 3 };
              function i(e, t, r, o, i, s) {
                var a = n.extend(
                  { command: i ? e.toLowerCase() : e.toUpperCase() },
                  t,
                  s ? { data: s } : {}
                );
                r.splice(o, 0, a);
              }
              function s(e, t) {
                e.forEach(function(n, o) {
                  r[n.command.toLowerCase()].forEach(function(r, i) {
                    t(n, r, o, i, e);
                  });
                });
              }
              (n.Svg.Path = n.Class.extend({
                constructor: function(e, t) {
                  (this.pathElements = []),
                    (this.pos = 0),
                    (this.close = e),
                    (this.options = n.extend({}, o, t));
                },
                position: function(e) {
                  return void 0 !== e
                    ? ((this.pos = Math.max(
                        0,
                        Math.min(this.pathElements.length, e)
                      )),
                      this)
                    : this.pos;
                },
                remove: function(e) {
                  return this.pathElements.splice(this.pos, e), this;
                },
                move: function(e, t, n, r) {
                  return (
                    i(
                      'M',
                      { x: +e, y: +t },
                      this.pathElements,
                      this.pos++,
                      n,
                      r
                    ),
                    this
                  );
                },
                line: function(e, t, n, r) {
                  return (
                    i(
                      'L',
                      { x: +e, y: +t },
                      this.pathElements,
                      this.pos++,
                      n,
                      r
                    ),
                    this
                  );
                },
                curve: function(e, t, n, r, o, s, a, u) {
                  return (
                    i(
                      'C',
                      { x1: +e, y1: +t, x2: +n, y2: +r, x: +o, y: +s },
                      this.pathElements,
                      this.pos++,
                      a,
                      u
                    ),
                    this
                  );
                },
                arc: function(e, t, n, r, o, s, a, u, l) {
                  return (
                    i(
                      'A',
                      {
                        rx: +e,
                        ry: +t,
                        xAr: +n,
                        lAf: +r,
                        sf: +o,
                        x: +s,
                        y: +a
                      },
                      this.pathElements,
                      this.pos++,
                      u,
                      l
                    ),
                    this
                  );
                },
                scale: function(e, t) {
                  return (
                    s(this.pathElements, function(n, r) {
                      n[r] *= 'x' === r[0] ? e : t;
                    }),
                    this
                  );
                },
                translate: function(e, t) {
                  return (
                    s(this.pathElements, function(n, r) {
                      n[r] += 'x' === r[0] ? e : t;
                    }),
                    this
                  );
                },
                transform: function(e) {
                  return (
                    s(this.pathElements, function(t, n, r, o, i) {
                      var s = e(t, n, r, o, i);
                      (s || 0 === s) && (t[n] = s);
                    }),
                    this
                  );
                },
                parse: function(e) {
                  var t = e
                    .replace(/([A-Za-z])([0-9])/g, '$1 $2')
                    .replace(/([0-9])([A-Za-z])/g, '$1 $2')
                    .split(/[\s,]+/)
                    .reduce(function(e, t) {
                      return (
                        t.match(/[A-Za-z]/) && e.push([]),
                        e[e.length - 1].push(t),
                        e
                      );
                    }, []);
                  'Z' === t[t.length - 1][0].toUpperCase() && t.pop();
                  var o = t.map(function(e) {
                      var t = e.shift(),
                        o = r[t.toLowerCase()];
                      return n.extend(
                        { command: t },
                        o.reduce(function(t, n, r) {
                          return (t[n] = +e[r]), t;
                        }, {})
                      );
                    }),
                    i = [this.pos, 0];
                  return (
                    Array.prototype.push.apply(i, o),
                    Array.prototype.splice.apply(this.pathElements, i),
                    (this.pos += o.length),
                    this
                  );
                },
                stringify: function() {
                  var e = Math.pow(10, this.options.accuracy);
                  return (
                    this.pathElements.reduce(
                      function(t, n) {
                        var o = r[n.command.toLowerCase()].map(
                          function(t) {
                            return this.options.accuracy
                              ? Math.round(n[t] * e) / e
                              : n[t];
                          }.bind(this)
                        );
                        return t + n.command + o.join(',');
                      }.bind(this),
                      ''
                    ) + (this.close ? 'Z' : '')
                  );
                },
                clone: function(e) {
                  var t = new n.Svg.Path(e || this.close);
                  return (
                    (t.pos = this.pos),
                    (t.pathElements = this.pathElements
                      .slice()
                      .map(function(e) {
                        return n.extend({}, e);
                      })),
                    (t.options = n.extend({}, this.options)),
                    t
                  );
                },
                splitByCommand: function(e) {
                  var t = [new n.Svg.Path()];
                  return (
                    this.pathElements.forEach(function(r) {
                      r.command === e.toUpperCase() &&
                        0 !== t[t.length - 1].pathElements.length &&
                        t.push(new n.Svg.Path()),
                        t[t.length - 1].pathElements.push(r);
                    }),
                    t
                  );
                }
              })),
                (n.Svg.Path.elementDescriptions = r),
                (n.Svg.Path.join = function(e, t, r) {
                  for (var o = new n.Svg.Path(t, r), i = 0; i < e.length; i++)
                    for (var s = e[i], a = 0; a < s.pathElements.length; a++)
                      o.pathElements.push(s.pathElements[a]);
                  return o;
                });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              var r = {
                x: {
                  pos: 'x',
                  len: 'width',
                  dir: 'horizontal',
                  rectStart: 'x1',
                  rectEnd: 'x2',
                  rectOffset: 'y2'
                },
                y: {
                  pos: 'y',
                  len: 'height',
                  dir: 'vertical',
                  rectStart: 'y2',
                  rectEnd: 'y1',
                  rectOffset: 'x1'
                }
              };
              (n.Axis = n.Class.extend({
                constructor: function(e, t, n, o) {
                  (this.units = e),
                    (this.counterUnits = e === r.x ? r.y : r.x),
                    (this.chartRect = t),
                    (this.axisLength = t[e.rectEnd] - t[e.rectStart]),
                    (this.gridOffset = t[e.rectOffset]),
                    (this.ticks = n),
                    (this.options = o);
                },
                createGridAndLabels: function(e, t, r, o, i) {
                  var s = o['axis' + this.units.pos.toUpperCase()],
                    a = this.ticks.map(this.projectValue.bind(this)),
                    u = this.ticks.map(s.labelInterpolationFnc);
                  a.forEach(
                    function(l, c) {
                      var d,
                        p = { x: 0, y: 0 };
                      (d = a[c + 1]
                        ? a[c + 1] - l
                        : Math.max(this.axisLength - l, 30)),
                        (n.isFalseyButZero(u[c]) && '' !== u[c]) ||
                          ('x' === this.units.pos
                            ? ((l = this.chartRect.x1 + l),
                              (p.x = o.axisX.labelOffset.x),
                              (p.y =
                                'start' === o.axisX.position
                                  ? this.chartRect.padding.top +
                                    o.axisX.labelOffset.y +
                                    (r ? 5 : 20)
                                  : this.chartRect.y1 +
                                    o.axisX.labelOffset.y +
                                    (r ? 5 : 20)))
                            : ((l = this.chartRect.y1 - l),
                              (p.y = o.axisY.labelOffset.y - (r ? d : 0)),
                              (p.x =
                                'start' === o.axisY.position
                                  ? r
                                    ? this.chartRect.padding.left +
                                      o.axisY.labelOffset.x
                                    : this.chartRect.x1 - 10
                                  : this.chartRect.x2 +
                                    o.axisY.labelOffset.x +
                                    10)),
                          s.showGrid &&
                            n.createGrid(
                              l,
                              c,
                              this,
                              this.gridOffset,
                              this.chartRect[this.counterUnits.len](),
                              e,
                              [o.classNames.grid, o.classNames[this.units.dir]],
                              i
                            ),
                          s.showLabel &&
                            n.createLabel(
                              l,
                              d,
                              c,
                              u,
                              this,
                              s.offset,
                              p,
                              t,
                              [
                                o.classNames.label,
                                o.classNames[this.units.dir],
                                'start' === s.position
                                  ? o.classNames[s.position]
                                  : o.classNames.end
                              ],
                              r,
                              i
                            ));
                    }.bind(this)
                  );
                },
                projectValue: function(e, t, n) {
                  throw new Error("Base axis can't be instantiated!");
                }
              })),
                (n.Axis.units = r);
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.AutoScaleAxis = n.Axis.extend({
                constructor: function(e, t, r, o) {
                  var i = o.highLow || n.getHighLow(t, o, e.pos);
                  (this.bounds = n.getBounds(
                    r[e.rectEnd] - r[e.rectStart],
                    i,
                    o.scaleMinSpace || 20,
                    o.onlyInteger
                  )),
                    (this.range = {
                      min: this.bounds.min,
                      max: this.bounds.max
                    }),
                    n.AutoScaleAxis.super.constructor.call(
                      this,
                      e,
                      r,
                      this.bounds.values,
                      o
                    );
                },
                projectValue: function(e) {
                  return (
                    (this.axisLength *
                      (+n.getMultiValue(e, this.units.pos) - this.bounds.min)) /
                    this.bounds.range
                  );
                }
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.FixedScaleAxis = n.Axis.extend({
                constructor: function(e, t, r, o) {
                  var i = o.highLow || n.getHighLow(t, o, e.pos);
                  (this.divisor = o.divisor || 1),
                    (this.ticks =
                      o.ticks ||
                      n.times(this.divisor).map(
                        function(e, t) {
                          return i.low + ((i.high - i.low) / this.divisor) * t;
                        }.bind(this)
                      )),
                    this.ticks.sort(function(e, t) {
                      return e - t;
                    }),
                    (this.range = { min: i.low, max: i.high }),
                    n.FixedScaleAxis.super.constructor.call(
                      this,
                      e,
                      r,
                      this.ticks,
                      o
                    ),
                    (this.stepLength = this.axisLength / this.divisor);
                },
                projectValue: function(e) {
                  return (
                    (this.axisLength *
                      (+n.getMultiValue(e, this.units.pos) - this.range.min)) /
                    (this.range.max - this.range.min)
                  );
                }
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              n.StepAxis = n.Axis.extend({
                constructor: function(e, t, r, o) {
                  n.StepAxis.super.constructor.call(this, e, r, o.ticks, o);
                  var i = Math.max(1, o.ticks.length - (o.stretch ? 1 : 0));
                  this.stepLength = this.axisLength / i;
                },
                projectValue: function(e, t) {
                  return this.stepLength * t;
                }
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              var r = {
                axisX: {
                  offset: 30,
                  position: 'end',
                  labelOffset: { x: 0, y: 0 },
                  showLabel: !0,
                  showGrid: !0,
                  labelInterpolationFnc: n.noop,
                  type: void 0
                },
                axisY: {
                  offset: 40,
                  position: 'start',
                  labelOffset: { x: 0, y: 0 },
                  showLabel: !0,
                  showGrid: !0,
                  labelInterpolationFnc: n.noop,
                  type: void 0,
                  scaleMinSpace: 20,
                  onlyInteger: !1
                },
                width: void 0,
                height: void 0,
                showLine: !0,
                showPoint: !0,
                showArea: !1,
                areaBase: 0,
                lineSmooth: !0,
                showGridBackground: !1,
                low: void 0,
                high: void 0,
                chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                fullWidth: !1,
                reverseData: !1,
                classNames: {
                  chart: 'ct-chart-line',
                  label: 'ct-label',
                  labelGroup: 'ct-labels',
                  series: 'ct-series',
                  line: 'ct-line',
                  point: 'ct-point',
                  area: 'ct-area',
                  grid: 'ct-grid',
                  gridGroup: 'ct-grids',
                  gridBackground: 'ct-grid-background',
                  vertical: 'ct-vertical',
                  horizontal: 'ct-horizontal',
                  start: 'ct-start',
                  end: 'ct-end'
                }
              };
              n.Line = n.Base.extend({
                constructor: function(e, t, o, i) {
                  n.Line.super.constructor.call(
                    this,
                    e,
                    t,
                    r,
                    n.extend({}, r, o),
                    i
                  );
                },
                createChart: function(e) {
                  var t = n.normalizeData(this.data, e.reverseData, !0);
                  this.svg = n.createSvg(
                    this.container,
                    e.width,
                    e.height,
                    e.classNames.chart
                  );
                  var o,
                    i,
                    s = this.svg.elem('g').addClass(e.classNames.gridGroup),
                    a = this.svg.elem('g'),
                    u = this.svg.elem('g').addClass(e.classNames.labelGroup),
                    l = n.createChartRect(this.svg, e, r.padding);
                  (o =
                    void 0 === e.axisX.type
                      ? new n.StepAxis(
                          n.Axis.units.x,
                          t.normalized.series,
                          l,
                          n.extend({}, e.axisX, {
                            ticks: t.normalized.labels,
                            stretch: e.fullWidth
                          })
                        )
                      : e.axisX.type.call(
                          n,
                          n.Axis.units.x,
                          t.normalized.series,
                          l,
                          e.axisX
                        )),
                    (i =
                      void 0 === e.axisY.type
                        ? new n.AutoScaleAxis(
                            n.Axis.units.y,
                            t.normalized.series,
                            l,
                            n.extend({}, e.axisY, {
                              high: n.isNumeric(e.high) ? e.high : e.axisY.high,
                              low: n.isNumeric(e.low) ? e.low : e.axisY.low
                            })
                          )
                        : e.axisY.type.call(
                            n,
                            n.Axis.units.y,
                            t.normalized.series,
                            l,
                            e.axisY
                          )),
                    o.createGridAndLabels(
                      s,
                      u,
                      this.supportsForeignObject,
                      e,
                      this.eventEmitter
                    ),
                    i.createGridAndLabels(
                      s,
                      u,
                      this.supportsForeignObject,
                      e,
                      this.eventEmitter
                    ),
                    e.showGridBackground &&
                      n.createGridBackground(
                        s,
                        l,
                        e.classNames.gridBackground,
                        this.eventEmitter
                      ),
                    t.raw.series.forEach(
                      function(r, s) {
                        var u = a.elem('g');
                        u.attr({
                          'ct:series-name': r.name,
                          'ct:meta': n.serialize(r.meta)
                        }),
                          u.addClass(
                            [
                              e.classNames.series,
                              r.className ||
                                e.classNames.series + '-' + n.alphaNumerate(s)
                            ].join(' ')
                          );
                        var c = [],
                          d = [];
                        t.normalized.series[s].forEach(
                          function(e, a) {
                            var u = {
                              x:
                                l.x1 +
                                o.projectValue(e, a, t.normalized.series[s]),
                              y:
                                l.y1 -
                                i.projectValue(e, a, t.normalized.series[s])
                            };
                            c.push(u.x, u.y),
                              d.push({
                                value: e,
                                valueIndex: a,
                                meta: n.getMetaData(r, a)
                              });
                          }.bind(this)
                        );
                        var p = {
                            lineSmooth: n.getSeriesOption(r, e, 'lineSmooth'),
                            showPoint: n.getSeriesOption(r, e, 'showPoint'),
                            showLine: n.getSeriesOption(r, e, 'showLine'),
                            showArea: n.getSeriesOption(r, e, 'showArea'),
                            areaBase: n.getSeriesOption(r, e, 'areaBase')
                          },
                          f = ('function' == typeof p.lineSmooth
                            ? p.lineSmooth
                            : p.lineSmooth
                            ? n.Interpolation.monotoneCubic()
                            : n.Interpolation.none())(c, d);
                        if (
                          (p.showPoint &&
                            f.pathElements.forEach(
                              function(t) {
                                var a = u
                                  .elem(
                                    'line',
                                    {
                                      x1: t.x,
                                      y1: t.y,
                                      x2: t.x + 0.01,
                                      y2: t.y
                                    },
                                    e.classNames.point
                                  )
                                  .attr({
                                    'ct:value': [t.data.value.x, t.data.value.y]
                                      .filter(n.isNumeric)
                                      .join(','),
                                    'ct:meta': n.serialize(t.data.meta)
                                  });
                                this.eventEmitter.emit('draw', {
                                  type: 'point',
                                  value: t.data.value,
                                  index: t.data.valueIndex,
                                  meta: t.data.meta,
                                  series: r,
                                  seriesIndex: s,
                                  axisX: o,
                                  axisY: i,
                                  group: u,
                                  element: a,
                                  x: t.x,
                                  y: t.y
                                });
                              }.bind(this)
                            ),
                          p.showLine)
                        ) {
                          var h = u.elem(
                            'path',
                            { d: f.stringify() },
                            e.classNames.line,
                            !0
                          );
                          this.eventEmitter.emit('draw', {
                            type: 'line',
                            values: t.normalized.series[s],
                            path: f.clone(),
                            chartRect: l,
                            index: s,
                            series: r,
                            seriesIndex: s,
                            seriesMeta: r.meta,
                            axisX: o,
                            axisY: i,
                            group: u,
                            element: h
                          });
                        }
                        if (p.showArea && i.range) {
                          var v = Math.max(
                              Math.min(p.areaBase, i.range.max),
                              i.range.min
                            ),
                            y = l.y1 - i.projectValue(v);
                          f.splitByCommand('M')
                            .filter(function(e) {
                              return e.pathElements.length > 1;
                            })
                            .map(function(e) {
                              var t = e.pathElements[0],
                                n = e.pathElements[e.pathElements.length - 1];
                              return e
                                .clone(!0)
                                .position(0)
                                .remove(1)
                                .move(t.x, y)
                                .line(t.x, t.y)
                                .position(e.pathElements.length + 1)
                                .line(n.x, y);
                            })
                            .forEach(
                              function(n) {
                                var a = u.elem(
                                  'path',
                                  { d: n.stringify() },
                                  e.classNames.area,
                                  !0
                                );
                                this.eventEmitter.emit('draw', {
                                  type: 'area',
                                  values: t.normalized.series[s],
                                  path: n.clone(),
                                  series: r,
                                  seriesIndex: s,
                                  axisX: o,
                                  axisY: i,
                                  chartRect: l,
                                  index: s,
                                  group: u,
                                  element: a
                                });
                              }.bind(this)
                            );
                        }
                      }.bind(this)
                    ),
                    this.eventEmitter.emit('created', {
                      bounds: i.bounds,
                      chartRect: l,
                      axisX: o,
                      axisY: i,
                      svg: this.svg,
                      options: e
                    });
                }
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              var r = {
                axisX: {
                  offset: 30,
                  position: 'end',
                  labelOffset: { x: 0, y: 0 },
                  showLabel: !0,
                  showGrid: !0,
                  labelInterpolationFnc: n.noop,
                  scaleMinSpace: 30,
                  onlyInteger: !1
                },
                axisY: {
                  offset: 40,
                  position: 'start',
                  labelOffset: { x: 0, y: 0 },
                  showLabel: !0,
                  showGrid: !0,
                  labelInterpolationFnc: n.noop,
                  scaleMinSpace: 20,
                  onlyInteger: !1
                },
                width: void 0,
                height: void 0,
                high: void 0,
                low: void 0,
                referenceValue: 0,
                chartPadding: { top: 15, right: 15, bottom: 5, left: 10 },
                seriesBarDistance: 15,
                stackBars: !1,
                stackMode: 'accumulate',
                horizontalBars: !1,
                distributeSeries: !1,
                reverseData: !1,
                showGridBackground: !1,
                classNames: {
                  chart: 'ct-chart-bar',
                  horizontalBars: 'ct-horizontal-bars',
                  label: 'ct-label',
                  labelGroup: 'ct-labels',
                  series: 'ct-series',
                  bar: 'ct-bar',
                  grid: 'ct-grid',
                  gridGroup: 'ct-grids',
                  gridBackground: 'ct-grid-background',
                  vertical: 'ct-vertical',
                  horizontal: 'ct-horizontal',
                  start: 'ct-start',
                  end: 'ct-end'
                }
              };
              n.Bar = n.Base.extend({
                constructor: function(e, t, o, i) {
                  n.Bar.super.constructor.call(
                    this,
                    e,
                    t,
                    r,
                    n.extend({}, r, o),
                    i
                  );
                },
                createChart: function(e) {
                  var t, o;
                  e.distributeSeries
                    ? ((t = n.normalizeData(
                        this.data,
                        e.reverseData,
                        e.horizontalBars ? 'x' : 'y'
                      )).normalized.series = t.normalized.series.map(function(
                        e
                      ) {
                        return [e];
                      }))
                    : (t = n.normalizeData(
                        this.data,
                        e.reverseData,
                        e.horizontalBars ? 'x' : 'y'
                      )),
                    (this.svg = n.createSvg(
                      this.container,
                      e.width,
                      e.height,
                      e.classNames.chart +
                        (e.horizontalBars
                          ? ' ' + e.classNames.horizontalBars
                          : '')
                    ));
                  var i = this.svg.elem('g').addClass(e.classNames.gridGroup),
                    s = this.svg.elem('g'),
                    a = this.svg.elem('g').addClass(e.classNames.labelGroup);
                  if (e.stackBars && 0 !== t.normalized.series.length) {
                    var u = n.serialMap(t.normalized.series, function() {
                      return Array.prototype.slice
                        .call(arguments)
                        .map(function(e) {
                          return e;
                        })
                        .reduce(
                          function(e, t) {
                            return {
                              x: e.x + (t && t.x) || 0,
                              y: e.y + (t && t.y) || 0
                            };
                          },
                          { x: 0, y: 0 }
                        );
                    });
                    o = n.getHighLow([u], e, e.horizontalBars ? 'x' : 'y');
                  } else
                    o = n.getHighLow(
                      t.normalized.series,
                      e,
                      e.horizontalBars ? 'x' : 'y'
                    );
                  (o.high = +e.high || (0 === e.high ? 0 : o.high)),
                    (o.low = +e.low || (0 === e.low ? 0 : o.low));
                  var l,
                    c,
                    d,
                    p,
                    f,
                    h = n.createChartRect(this.svg, e, r.padding);
                  (c =
                    e.distributeSeries && e.stackBars
                      ? t.normalized.labels.slice(0, 1)
                      : t.normalized.labels),
                    e.horizontalBars
                      ? ((l = p =
                          void 0 === e.axisX.type
                            ? new n.AutoScaleAxis(
                                n.Axis.units.x,
                                t.normalized.series,
                                h,
                                n.extend({}, e.axisX, {
                                  highLow: o,
                                  referenceValue: 0
                                })
                              )
                            : e.axisX.type.call(
                                n,
                                n.Axis.units.x,
                                t.normalized.series,
                                h,
                                n.extend({}, e.axisX, {
                                  highLow: o,
                                  referenceValue: 0
                                })
                              )),
                        (d = f =
                          void 0 === e.axisY.type
                            ? new n.StepAxis(
                                n.Axis.units.y,
                                t.normalized.series,
                                h,
                                { ticks: c }
                              )
                            : e.axisY.type.call(
                                n,
                                n.Axis.units.y,
                                t.normalized.series,
                                h,
                                e.axisY
                              )))
                      : ((d = p =
                          void 0 === e.axisX.type
                            ? new n.StepAxis(
                                n.Axis.units.x,
                                t.normalized.series,
                                h,
                                { ticks: c }
                              )
                            : e.axisX.type.call(
                                n,
                                n.Axis.units.x,
                                t.normalized.series,
                                h,
                                e.axisX
                              )),
                        (l = f =
                          void 0 === e.axisY.type
                            ? new n.AutoScaleAxis(
                                n.Axis.units.y,
                                t.normalized.series,
                                h,
                                n.extend({}, e.axisY, {
                                  highLow: o,
                                  referenceValue: 0
                                })
                              )
                            : e.axisY.type.call(
                                n,
                                n.Axis.units.y,
                                t.normalized.series,
                                h,
                                n.extend({}, e.axisY, {
                                  highLow: o,
                                  referenceValue: 0
                                })
                              )));
                  var v = e.horizontalBars
                      ? h.x1 + l.projectValue(0)
                      : h.y1 - l.projectValue(0),
                    y = [];
                  d.createGridAndLabels(
                    i,
                    a,
                    this.supportsForeignObject,
                    e,
                    this.eventEmitter
                  ),
                    l.createGridAndLabels(
                      i,
                      a,
                      this.supportsForeignObject,
                      e,
                      this.eventEmitter
                    ),
                    e.showGridBackground &&
                      n.createGridBackground(
                        i,
                        h,
                        e.classNames.gridBackground,
                        this.eventEmitter
                      ),
                    t.raw.series.forEach(
                      function(r, o) {
                        var i,
                          a,
                          u = o - (t.raw.series.length - 1) / 2;
                        (i =
                          e.distributeSeries && !e.stackBars
                            ? d.axisLength / t.normalized.series.length / 2
                            : e.distributeSeries && e.stackBars
                            ? d.axisLength / 2
                            : d.axisLength / t.normalized.series[o].length / 2),
                          (a = s.elem('g')).attr({
                            'ct:series-name': r.name,
                            'ct:meta': n.serialize(r.meta)
                          }),
                          a.addClass(
                            [
                              e.classNames.series,
                              r.className ||
                                e.classNames.series + '-' + n.alphaNumerate(o)
                            ].join(' ')
                          ),
                          t.normalized.series[o].forEach(
                            function(s, c) {
                              var g, m, b, _;
                              if (
                                ((_ =
                                  e.distributeSeries && !e.stackBars
                                    ? o
                                    : e.distributeSeries && e.stackBars
                                    ? 0
                                    : c),
                                (g = e.horizontalBars
                                  ? {
                                      x:
                                        h.x1 +
                                        l.projectValue(
                                          s && s.x ? s.x : 0,
                                          c,
                                          t.normalized.series[o]
                                        ),
                                      y:
                                        h.y1 -
                                        d.projectValue(
                                          s && s.y ? s.y : 0,
                                          _,
                                          t.normalized.series[o]
                                        )
                                    }
                                  : {
                                      x:
                                        h.x1 +
                                        d.projectValue(
                                          s && s.x ? s.x : 0,
                                          _,
                                          t.normalized.series[o]
                                        ),
                                      y:
                                        h.y1 -
                                        l.projectValue(
                                          s && s.y ? s.y : 0,
                                          c,
                                          t.normalized.series[o]
                                        )
                                    }),
                                d instanceof n.StepAxis &&
                                  (d.options.stretch ||
                                    (g[d.units.pos] +=
                                      i * (e.horizontalBars ? -1 : 1)),
                                  (g[d.units.pos] +=
                                    e.stackBars || e.distributeSeries
                                      ? 0
                                      : u *
                                        e.seriesBarDistance *
                                        (e.horizontalBars ? -1 : 1))),
                                (y[c] =
                                  (b = y[c] || v) -
                                  (v - g[d.counterUnits.pos])),
                                void 0 !== s)
                              ) {
                                var w = {};
                                (w[d.units.pos + '1'] = g[d.units.pos]),
                                  (w[d.units.pos + '2'] = g[d.units.pos]),
                                  !e.stackBars ||
                                  ('accumulate' !== e.stackMode && e.stackMode)
                                    ? ((w[d.counterUnits.pos + '1'] = v),
                                      (w[d.counterUnits.pos + '2'] =
                                        g[d.counterUnits.pos]))
                                    : ((w[d.counterUnits.pos + '1'] = b),
                                      (w[d.counterUnits.pos + '2'] = y[c])),
                                  (w.x1 = Math.min(Math.max(w.x1, h.x1), h.x2)),
                                  (w.x2 = Math.min(Math.max(w.x2, h.x1), h.x2)),
                                  (w.y1 = Math.min(Math.max(w.y1, h.y2), h.y1)),
                                  (w.y2 = Math.min(Math.max(w.y2, h.y2), h.y1));
                                var x = n.getMetaData(r, c);
                                (m = a.elem('line', w, e.classNames.bar).attr({
                                  'ct:value': [s.x, s.y]
                                    .filter(n.isNumeric)
                                    .join(','),
                                  'ct:meta': n.serialize(x)
                                })),
                                  this.eventEmitter.emit(
                                    'draw',
                                    n.extend(
                                      {
                                        type: 'bar',
                                        value: s,
                                        index: c,
                                        meta: x,
                                        series: r,
                                        seriesIndex: o,
                                        axisX: p,
                                        axisY: f,
                                        chartRect: h,
                                        group: a,
                                        element: m
                                      },
                                      w
                                    )
                                  );
                              }
                            }.bind(this)
                          );
                      }.bind(this)
                    ),
                    this.eventEmitter.emit('created', {
                      bounds: l.bounds,
                      chartRect: h,
                      axisX: p,
                      axisY: f,
                      svg: this.svg,
                      options: e
                    });
                }
              });
            })(window, document, e),
            (function(e, t, n) {
              'use strict';
              var r = {
                width: void 0,
                height: void 0,
                chartPadding: 5,
                classNames: {
                  chartPie: 'ct-chart-pie',
                  chartDonut: 'ct-chart-donut',
                  series: 'ct-series',
                  slicePie: 'ct-slice-pie',
                  sliceDonut: 'ct-slice-donut',
                  sliceDonutSolid: 'ct-slice-donut-solid',
                  label: 'ct-label'
                },
                startAngle: 0,
                total: void 0,
                donut: !1,
                donutSolid: !1,
                donutWidth: 60,
                showLabel: !0,
                labelOffset: 0,
                labelPosition: 'inside',
                labelInterpolationFnc: n.noop,
                labelDirection: 'neutral',
                reverseData: !1,
                ignoreEmptyValues: !1
              };
              function o(e, t, n) {
                var r = t.x > e.x;
                return (r && 'explode' === n) || (!r && 'implode' === n)
                  ? 'start'
                  : (r && 'implode' === n) || (!r && 'explode' === n)
                  ? 'end'
                  : 'middle';
              }
              n.Pie = n.Base.extend({
                constructor: function(e, t, o, i) {
                  n.Pie.super.constructor.call(
                    this,
                    e,
                    t,
                    r,
                    n.extend({}, r, o),
                    i
                  );
                },
                createChart: function(e) {
                  var t,
                    i,
                    s,
                    a,
                    u,
                    l = n.normalizeData(this.data),
                    c = [],
                    d = e.startAngle;
                  (this.svg = n.createSvg(
                    this.container,
                    e.width,
                    e.height,
                    e.donut ? e.classNames.chartDonut : e.classNames.chartPie
                  )),
                    (i = n.createChartRect(this.svg, e, r.padding)),
                    (s = Math.min(i.width() / 2, i.height() / 2)),
                    (u =
                      e.total ||
                      l.normalized.series.reduce(function(e, t) {
                        return e + t;
                      }, 0));
                  var p = n.quantity(e.donutWidth);
                  '%' === p.unit && (p.value *= s / 100),
                    (s -= e.donut && !e.donutSolid ? p.value / 2 : 0),
                    (a =
                      'outside' === e.labelPosition ||
                      (e.donut && !e.donutSolid)
                        ? s
                        : 'center' === e.labelPosition
                        ? 0
                        : e.donutSolid
                        ? s - p.value / 2
                        : s / 2),
                    (a += e.labelOffset);
                  var f = { x: i.x1 + i.width() / 2, y: i.y2 + i.height() / 2 },
                    h =
                      1 ===
                      l.raw.series.filter(function(e) {
                        return e.hasOwnProperty('value')
                          ? 0 !== e.value
                          : 0 !== e;
                      }).length;
                  l.raw.series.forEach(
                    function(e, t) {
                      c[t] = this.svg.elem('g', null, null);
                    }.bind(this)
                  ),
                    e.showLabel && (t = this.svg.elem('g', null, null)),
                    l.raw.series.forEach(
                      function(r, i) {
                        if (
                          0 !== l.normalized.series[i] ||
                          !e.ignoreEmptyValues
                        ) {
                          c[i].attr({ 'ct:series-name': r.name }),
                            c[i].addClass(
                              [
                                e.classNames.series,
                                r.className ||
                                  e.classNames.series + '-' + n.alphaNumerate(i)
                              ].join(' ')
                            );
                          var v =
                              u > 0
                                ? d + (l.normalized.series[i] / u) * 360
                                : 0,
                            y = Math.max(0, d - (0 === i || h ? 0 : 0.2));
                          v - y >= 359.99 && (v = y + 359.99);
                          var g,
                            m,
                            b,
                            _ = n.polarToCartesian(f.x, f.y, s, y),
                            w = n.polarToCartesian(f.x, f.y, s, v),
                            x = new n.Svg.Path(!e.donut || e.donutSolid)
                              .move(w.x, w.y)
                              .arc(s, s, 0, v - d > 180, 0, _.x, _.y);
                          e.donut
                            ? e.donutSolid &&
                              ((g = n.polarToCartesian(
                                f.x,
                                f.y,
                                (b = s - p.value),
                                d - (0 === i || h ? 0 : 0.2)
                              )),
                              (m = n.polarToCartesian(f.x, f.y, b, v)),
                              x.line(g.x, g.y),
                              x.arc(b, b, 0, v - d > 180, 1, m.x, m.y))
                            : x.line(f.x, f.y);
                          var C = e.classNames.slicePie;
                          e.donut &&
                            ((C = e.classNames.sliceDonut),
                            e.donutSolid && (C = e.classNames.sliceDonutSolid));
                          var E = c[i].elem('path', { d: x.stringify() }, C);
                          if (
                            (E.attr({
                              'ct:value': l.normalized.series[i],
                              'ct:meta': n.serialize(r.meta)
                            }),
                            e.donut &&
                              !e.donutSolid &&
                              (E._node.style.strokeWidth = p.value + 'px'),
                            this.eventEmitter.emit('draw', {
                              type: 'slice',
                              value: l.normalized.series[i],
                              totalDataSum: u,
                              index: i,
                              meta: r.meta,
                              series: r,
                              group: c[i],
                              element: E,
                              path: x.clone(),
                              center: f,
                              radius: s,
                              startAngle: d,
                              endAngle: v
                            }),
                            e.showLabel)
                          ) {
                            var S, O;
                            (S =
                              1 === l.raw.series.length
                                ? { x: f.x, y: f.y }
                                : n.polarToCartesian(
                                    f.x,
                                    f.y,
                                    a,
                                    d + (v - d) / 2
                                  )),
                              (O =
                                l.normalized.labels &&
                                !n.isFalseyButZero(l.normalized.labels[i])
                                  ? l.normalized.labels[i]
                                  : l.normalized.series[i]);
                            var A = e.labelInterpolationFnc(O, i);
                            if (A || 0 === A) {
                              var k = t
                                .elem(
                                  'text',
                                  {
                                    dx: S.x,
                                    dy: S.y,
                                    'text-anchor': o(f, S, e.labelDirection)
                                  },
                                  e.classNames.label
                                )
                                .text('' + A);
                              this.eventEmitter.emit('draw', {
                                type: 'label',
                                index: i,
                                group: t,
                                element: k,
                                text: '' + A,
                                x: S.x,
                                y: S.y
                              });
                            }
                          }
                          d = v;
                        }
                      }.bind(this)
                    ),
                    this.eventEmitter.emit('created', {
                      chartRect: i,
                      svg: this.svg,
                      options: e
                    });
                },
                determineAnchorPosition: o
              });
            })(window, document, e),
            e));
            var e;
          }.apply(t, [])) || (e.exports = r);
    },
    Gz50: function(e) {
      e.exports = {
        Bar: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
          ]
        },
        Line: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
        },
        Line2: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          series: [
            [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
            [
              10,
              15,
              null,
              12,
              null,
              10,
              12,
              15,
              null,
              null,
              12,
              null,
              14,
              null,
              null,
              null
            ],
            [
              null,
              null,
              null,
              null,
              3,
              4,
              1,
              3,
              4,
              6,
              7,
              9,
              5,
              null,
              null,
              null
            ]
          ]
        },
        Scatter: {
          labels: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52
          ],
          series: [
            [
              53.761530227932376,
              55.06077543488965,
              90.15619763154757,
              37.945743703232026,
              90.15064659594809,
              72.37213982905773,
              29.242023161826005,
              10.613377393892765,
              41.13272180459888,
              66.89170357483623,
              85.47173517613665,
              80.61313435041848,
              33.86466777842112,
              6.993834151672074,
              58.93321826442517,
              84.4944785171936,
              66.47863439014286,
              26.61792342884319,
              64.7715312645164,
              66.7721238997995,
              24.81459377695263,
              82.09485043326285,
              94.28939258245515,
              81.16315118589196,
              26.285515136087987,
              94.25034710171474,
              82.86738500874603,
              42.275860431799764,
              7.252221593822195,
              12.509815755028853,
              57.592396396889086,
              16.98227807583916,
              82.13296667627357,
              20.7798608815297,
              1.4886093931434141,
              27.717128889831557,
              83.02006467579533,
              46.825802760236044,
              4.449951322677559,
              63.949111152579285,
              76.2705142938321,
              92.84217568625859,
              33.34033701723147,
              83.32421059421287,
              30.95015406095809,
              99.26555827017742,
              64.73104862164556,
              58.3205528852039,
              98.07205383638176,
              34.217237701943006,
              76.84029415694194,
              77.51086205882534
            ],
            [
              68.01743447487219,
              33.569040390627556,
              55.83518094287856,
              6.424873491809824,
              40.24108430485855,
              12.867529962712322,
              33.9171424717146,
              66.13486382709537,
              75.36042883674916,
              37.18758127466557,
              46.080488500245266,
              40.98286341759507,
              25.372664387026923,
              40.063178151024424,
              73.6495194240123,
              48.56310577188692,
              22.903651846539972,
              91.5635618730181,
              84.08459591966795,
              49.153284675642595,
              34.82239557500657,
              38.7753190443602,
              77.57931404198679,
              78.24594487949813,
              42.96149738863182,
              68.87344162290039,
              73.35891706187205,
              79.20638493178991,
              39.862955442611494,
              67.72254472880542,
              32.5667298714178,
              67.8951691474951,
              68.22845079029227,
              24.013142038835245,
              84.77387385278308,
              81.96540495436318,
              21.938120212431865,
              20.591735159801374,
              44.392082366517926,
              99.42917256114683,
              75.80197000496361,
              44.95928290576234,
              56.30251437622547,
              81.39575345403685,
              46.6480941362678,
              60.30444929651577,
              63.904344644822956,
              96.31525902388087,
              80.79036620032171,
              67.94970208668927,
              81.84914397158013,
              64.34930133297705
            ],
            [
              94.83796449464408,
              0.05012881656139001,
              78.03842883107683,
              86.85066315022306,
              63.09834842166116,
              23.82558487142836,
              95.04013234951407,
              91.84355248378253,
              12.28927042529946,
              91.59027939302398,
              44.15426456286402,
              38.40309269293461,
              3.0323072732378,
              51.442756807992104,
              51.067878308530304,
              68.87925798432126,
              9.786004373688861,
              93.42472024399827,
              7.196590706996409,
              90.61672585107475,
              82.64800742042794,
              29.33983554466535,
              27.575295787547738,
              63.76900610636933,
              44.31691167371892,
              35.02049600051234,
              77.91406665575869,
              9.594366007019817,
              33.17507518940415,
              45.94854823450043,
              6.028395302814493,
              97.36303808493578,
              20.735238575670635,
              11.577295085428618,
              49.377810037702986,
              7.984978938697163,
              81.52380171386066,
              86.62152122764415,
              46.81516933597669,
              72.70055546352265,
              39.482785893198404,
              2.1729768023229346,
              32.730007414228865,
              11.8384494034782,
              97.04367174876609,
              37.87839695714026,
              96.1605067491887,
              24.340714355822968,
              90.92986653306863,
              1.9182109464024322,
              36.43773292877359,
              51.562138311337314
            ],
            [
              90.93023971442824,
              91.24607758668748,
              83.11135627737995,
              38.89630350329263,
              47.48702934796674,
              83.10718371512166,
              93.40725921590878,
              62.65211828434698,
              76.93458061916239,
              94.13663459332706,
              15.47636651231441,
              93.70144628274673,
              80.7911280644665,
              32.06886936152644,
              6.458421962605865,
              14.668285135928372,
              10.700783089925082,
              46.997088144127886,
              53.02589740808132,
              15.662154340561152,
              94.70275097718405,
              59.27632659816442,
              53.88591373783527,
              21.602789791233846,
              29.326094253488066,
              8.159091366607441,
              52.57892041859127,
              71.68439221439431,
              61.773032787481455,
              43.02319475997418,
              97.7745443722398,
              41.77024219267196,
              32.79576671635134,
              26.614574588124352,
              96.60428591791621,
              68.90454201273897,
              33.39711159158707,
              94.56531035270376,
              83.77269890317353,
              72.91107164394433,
              50.31188574983041,
              54.67801129631369,
              69.65510719649639,
              59.96153020907791,
              50.66882388014429,
              97.73196339743835,
              12.936677564924759,
              30.197501751145396,
              7.071721221094629,
              60.85688790258899,
              51.276925828485446,
              30.951614223635193
            ]
          ]
        },
        LineWithArea: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [[5, 9, 7, 8, 5, 3, 5, 4]]
        },
        'Bi-PolarBar': {
          labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
          series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
        },
        DistributedSeries: {
          labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          series: [20, 60, 120, 200, 180, 20, 10]
        },
        Pie: { series: [20, 10, 30, 40] }
      };
    },
    zUnb: function(e, t, n) {
      'use strict';
      n.r(t);
      var r = function(e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t;
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function() {
        return (i =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t, n, r) {
        var o,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (o = e[a]) &&
              (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function a(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function u(e) {
        var t = 'function' == typeof Symbol && e[Symbol.iterator],
          n = 0;
        return t
          ? t.call(e)
          : {
              next: function() {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              }
            };
      }
      function l(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            s.push(r.value);
        } catch (a) {
          o = { error: a };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return s;
      }
      function c() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(l(arguments[t]));
        return e;
      }
      var d =
        Array.isArray ||
        function(e) {
          return e && 'number' == typeof e.length;
        };
      function p(e) {
        return null != e && 'object' == typeof e;
      }
      function f(e) {
        return 'function' == typeof e;
      }
      var h,
        v = { e: {} };
      function y() {
        try {
          return h.apply(this, arguments);
        } catch (e) {
          return (v.e = e), v;
        }
      }
      function g(e) {
        return (h = e), y;
      }
      function m(e) {
        return (
          Error.call(this),
          (this.message = e
            ? e.length +
              ' errors occurred during unsubscription:\n' +
              e
                .map(function(e, t) {
                  return t + 1 + ') ' + e.toString();
                })
                .join('\n  ')
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      m.prototype = Object.create(Error.prototype);
      var b = m,
        _ = (function() {
          function e(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          var t;
          return (
            (e.prototype.unsubscribe = function() {
              var e,
                t = !1;
              if (!this.closed) {
                var n = this._parent,
                  r = this._parents,
                  o = this._unsubscribe,
                  i = this._subscriptions;
                (this.closed = !0),
                  (this._parent = null),
                  (this._parents = null),
                  (this._subscriptions = null);
                for (var s = -1, a = r ? r.length : 0; n; )
                  n.remove(this), (n = (++s < a && r[s]) || null);
                if (
                  (f(o) &&
                    g(o).call(this) === v &&
                    ((t = !0),
                    (e = e || (v.e instanceof b ? w(v.e.errors) : [v.e]))),
                  d(i))
                )
                  for (s = -1, a = i.length; ++s < a; ) {
                    var u = i[s];
                    if (p(u) && g(u.unsubscribe).call(u) === v) {
                      (t = !0), (e = e || []);
                      var l = v.e;
                      l instanceof b ? (e = e.concat(w(l.errors))) : e.push(l);
                    }
                  }
                if (t) throw new b(e);
              }
            }),
            (e.prototype.add = function(t) {
              if (!t || t === e.EMPTY) return e.EMPTY;
              if (t === this) return this;
              var n = t;
              switch (typeof t) {
                case 'function':
                  n = new e(t);
                case 'object':
                  if (n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if ('function' != typeof n._addParent) {
                    var r = n;
                    (n = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    'unrecognized teardown ' + t + ' added to Subscription.'
                  );
              }
              return (
                (this._subscriptions || (this._subscriptions = [])).push(n),
                n._addParent(this),
                n
              );
            }),
            (e.prototype.remove = function(e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }),
            (e.prototype._addParent = function(e) {
              var t = this._parent,
                n = this._parents;
              t && t !== e
                ? n
                  ? -1 === n.indexOf(e) && n.push(e)
                  : (this._parents = [e])
                : (this._parent = e);
            }),
            (e.EMPTY = (((t = new e()).closed = !0), t)),
            e
          );
        })();
      function w(e) {
        return e.reduce(function(e, t) {
          return e.concat(t instanceof b ? t.errors : t);
        }, []);
      }
      var x = !1,
        C = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            x = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return x;
          }
        };
      function E(e) {
        setTimeout(function() {
          throw e;
        });
      }
      var S = {
          closed: !0,
          next: function(e) {},
          error: function(e) {
            if (C.useDeprecatedSynchronousErrorHandling) throw e;
            E(e);
          },
          complete: function() {}
        },
        O =
          'function' == typeof Symbol
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random(),
        A = (function(e) {
          function t(n, r, o) {
            var i = e.call(this) || this;
            switch (
              ((i.syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              (i._parentSubscription = null),
              arguments.length)
            ) {
              case 0:
                i.destination = S;
                break;
              case 1:
                if (!n) {
                  i.destination = S;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof t
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable),
                      (i.destination = n),
                      n.add(i))
                    : ((i.syncErrorThrowable = !0),
                      (i.destination = new k(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new k(i, n, r, o));
            }
            return i;
          }
          return (
            o(t, e),
            (t.prototype[O] = function() {
              return this;
            }),
            (t.create = function(e, n, r) {
              var o = new t(e, n, r);
              return (o.syncErrorThrowable = !1), o;
            }),
            (t.prototype.next = function(e) {
              this.isStopped || this._next(e);
            }),
            (t.prototype.error = function(e) {
              this.isStopped || ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function() {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function() {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function(e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function(e) {
              this.destination.error(e), this.unsubscribe();
            }),
            (t.prototype._complete = function() {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function() {
              var e = this._parent,
                t = this._parents;
              return (
                (this._parent = null),
                (this._parents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parent = e),
                (this._parents = t),
                (this._parentSubscription = null),
                this
              );
            }),
            t
          );
        })(_),
        k = (function(e) {
          function t(t, n, r, o) {
            var i,
              s = e.call(this) || this;
            s._parentSubscriber = t;
            var a = s;
            return (
              f(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== S &&
                    (f((a = Object.create(n)).unsubscribe) &&
                      s.add(a.unsubscribe.bind(a)),
                    (a.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = a),
              (s._next = i),
              (s._error = r),
              (s._complete = o),
              s
            );
          }
          return (
            o(t, e),
            (t.prototype.next = function(e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                C.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (t.prototype.error = function(e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  n = C.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable)
                  n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : E(e),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw e;
                  E(e);
                }
              }
            }),
            (t.prototype.complete = function() {
              var e = this;
              if (!this.isStopped) {
                var t = this._parentSubscriber;
                if (this._complete) {
                  var n = function() {
                    return e._complete.call(e._context);
                  };
                  C.useDeprecatedSynchronousErrorHandling &&
                  t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (t.prototype.__tryOrUnsub = function(e, t) {
              try {
                e.call(this._context, t);
              } catch (n) {
                if (
                  (this.unsubscribe(), C.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                E(n);
              }
            }),
            (t.prototype.__tryOrSetError = function(e, t, n) {
              if (!C.useDeprecatedSynchronousErrorHandling)
                throw new Error('bad call');
              try {
                t.call(this._context, n);
              } catch (r) {
                return C.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                  : (E(r), !0);
              }
              return !1;
            }),
            (t.prototype._unsubscribe = function() {
              var e = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                e.unsubscribe();
            }),
            t
          );
        })(A),
        I =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      var T = (function() {
        function e(e) {
          (this._isScalar = !1), e && (this._subscribe = e);
        }
        return (
          (e.prototype.lift = function(t) {
            var n = new e();
            return (n.source = this), (n.operator = t), n;
          }),
          (e.prototype.subscribe = function(e, t, n) {
            var r = this.operator,
              o = (function(e, t, n) {
                if (e) {
                  if (e instanceof A) return e;
                  if (e[O]) return e[O]();
                }
                return e || t || n ? new A(e, t, n) : new A(S);
              })(e, t, n);
            if (
              (r
                ? r.call(o, this.source)
                : o.add(
                    this.source ||
                      (C.useDeprecatedSynchronousErrorHandling &&
                        !o.syncErrorThrowable)
                      ? this._subscribe(o)
                      : this._trySubscribe(o)
                  ),
              C.useDeprecatedSynchronousErrorHandling &&
                o.syncErrorThrowable &&
                ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (e.prototype._trySubscribe = function(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              C.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function(e) {
                  for (; e; ) {
                    var t = e.destination;
                    if (e.closed || e.isStopped) return !1;
                    e = t && t instanceof A ? t : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }),
          (e.prototype.forEach = function(e, t) {
            var n = this;
            return new (t = N(t))(function(t, r) {
              var o;
              o = n.subscribe(
                function(t) {
                  try {
                    e(t);
                  } catch (n) {
                    r(n), o && o.unsubscribe();
                  }
                },
                r,
                t
              );
            });
          }),
          (e.prototype._subscribe = function(e) {
            var t = this.source;
            return t && t.subscribe(e);
          }),
          (e.prototype[I] = function() {
            return this;
          }),
          (e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return 0 === e.length
              ? this
              : ((n = e)
                  ? 1 === n.length
                    ? n[0]
                    : function(e) {
                        return n.reduce(function(e, t) {
                          return t(e);
                        }, e);
                      }
                  : function() {})(this);
            var n;
          }),
          (e.prototype.toPromise = function(e) {
            var t = this;
            return new (e = N(e))(function(e, n) {
              var r;
              t.subscribe(
                function(e) {
                  return (r = e);
                },
                function(e) {
                  return n(e);
                },
                function() {
                  return e(r);
                }
              );
            });
          }),
          (e.create = function(t) {
            return new e(t);
          }),
          e
        );
      })();
      function N(e) {
        if ((e || (e = C.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      function P() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      P.prototype = Object.create(Error.prototype);
      var V = P,
        D = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.subject = t), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            o(t, e),
            (t.prototype.unsubscribe = function() {
              if (!this.closed) {
                this.closed = !0;
                var e = this.subject,
                  t = e.observers;
                if (
                  ((this.subject = null),
                  t && 0 !== t.length && !e.isStopped && !e.closed)
                ) {
                  var n = t.indexOf(this.subscriber);
                  -1 !== n && t.splice(n, 1);
                }
              }
            }),
            t
          );
        })(_),
        M = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.destination = t), n;
          }
          return o(t, e), t;
        })(A),
        j = (function(e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.observers = []),
              (t.closed = !1),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            o(t, e),
            (t.prototype[O] = function() {
              return new M(this);
            }),
            (t.prototype.lift = function(e) {
              var t = new R(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype.next = function(e) {
              if (this.closed) throw new V();
              if (!this.isStopped)
                for (
                  var t = this.observers, n = t.length, r = t.slice(), o = 0;
                  o < n;
                  o++
                )
                  r[o].next(e);
            }),
            (t.prototype.error = function(e) {
              if (this.closed) throw new V();
              (this.hasError = !0),
                (this.thrownError = e),
                (this.isStopped = !0);
              for (
                var t = this.observers, n = t.length, r = t.slice(), o = 0;
                o < n;
                o++
              )
                r[o].error(e);
              this.observers.length = 0;
            }),
            (t.prototype.complete = function() {
              if (this.closed) throw new V();
              this.isStopped = !0;
              for (
                var e = this.observers, t = e.length, n = e.slice(), r = 0;
                r < t;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (t.prototype.unsubscribe = function() {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (t.prototype._trySubscribe = function(t) {
              if (this.closed) throw new V();
              return e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function(e) {
              if (this.closed) throw new V();
              return this.hasError
                ? (e.error(this.thrownError), _.EMPTY)
                : this.isStopped
                ? (e.complete(), _.EMPTY)
                : (this.observers.push(e), new D(this, e));
            }),
            (t.prototype.asObservable = function() {
              var e = new T();
              return (e.source = this), e;
            }),
            (t.create = function(e, t) {
              return new R(e, t);
            }),
            t
          );
        })(T),
        R = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.destination = t), (r.source = n), r;
          }
          return (
            o(t, e),
            (t.prototype.next = function(e) {
              var t = this.destination;
              t && t.next && t.next(e);
            }),
            (t.prototype.error = function(e) {
              var t = this.destination;
              t && t.error && this.destination.error(e);
            }),
            (t.prototype.complete = function() {
              var e = this.destination;
              e && e.complete && this.destination.complete();
            }),
            (t.prototype._subscribe = function(e) {
              return this.source ? this.source.subscribe(e) : _.EMPTY;
            }),
            t
          );
        })(j),
        L = (function(e) {
          function t(t, n, r) {
            var o = e.call(this) || this;
            return (
              (o.parent = t),
              (o.outerValue = n),
              (o.outerIndex = r),
              (o.index = 0),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype._next = function(e) {
              this.parent.notifyNext(
                this.outerValue,
                e,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (t.prototype._error = function(e) {
              this.parent.notifyError(e, this), this.unsubscribe();
            }),
            (t.prototype._complete = function() {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            t
          );
        })(A),
        H = function(e) {
          return function(t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.closed || t.complete();
          };
        },
        F = function(e) {
          return function(t) {
            return (
              e
                .then(
                  function(e) {
                    t.closed || (t.next(e), t.complete());
                  },
                  function(e) {
                    return t.error(e);
                  }
                )
                .then(null, E),
              t
            );
          };
        };
      function z() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      var B = z(),
        U = function(e) {
          return function(t) {
            for (var n = e[B](); ; ) {
              var r = n.next();
              if (r.done) {
                t.complete();
                break;
              }
              if ((t.next(r.value), t.closed)) break;
            }
            return (
              'function' == typeof n.return &&
                t.add(function() {
                  n.return && n.return();
                }),
              t
            );
          };
        },
        G = function(e) {
          return function(t) {
            var n = e[I]();
            if ('function' != typeof n.subscribe)
              throw new TypeError(
                'Provided object does not correctly implement Symbol.observable'
              );
            return n.subscribe(t);
          };
        },
        Z = function(e) {
          return e && 'number' == typeof e.length && 'function' != typeof e;
        };
      function Q(e) {
        return (
          e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      var W = function(e) {
        if (e instanceof T)
          return function(t) {
            return e._isScalar
              ? (t.next(e.value), void t.complete())
              : e.subscribe(t);
          };
        if (e && 'function' == typeof e[I]) return G(e);
        if (Z(e)) return H(e);
        if (Q(e)) return F(e);
        if (e && 'function' == typeof e[B]) return U(e);
        var t = p(e) ? 'an invalid object' : "'" + e + "'";
        throw new TypeError(
          'You provided ' +
            t +
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function q(e, t, n, r, o) {
        if ((void 0 === o && (o = new L(e, n, r)), !o.closed)) return W(t)(o);
      }
      var X = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.notifyNext = function(e, t, n, r, o) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function(e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function(e) {
            this.destination.complete();
          }),
          t
        );
      })(A);
      function Y(e, t) {
        return function(n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new K(e, t));
        };
      }
      var K = (function() {
          function e(e, t) {
            (this.project = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function(e, t) {
              return t.subscribe(new $(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        $ = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = r || o), o;
          }
          return (
            o(t, e),
            (t.prototype._next = function(e) {
              var t;
              try {
                t = this.project.call(this.thisArg, e, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(t);
            }),
            t
          );
        })(A);
      function J(e, t) {
        return new T(
          t
            ? function(n) {
                var r = new _(),
                  o = 0;
                return (
                  r.add(
                    t.schedule(function() {
                      o !== e.length
                        ? (n.next(e[o++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : H(e)
        );
      }
      function ee(e, t) {
        if (!t) return e instanceof T ? e : new T(W(e));
        if (null != e) {
          if (
            (function(e) {
              return e && 'function' == typeof e[I];
            })(e)
          )
            return (function(e, t) {
              return new T(
                t
                  ? function(n) {
                      var r = new _();
                      return (
                        r.add(
                          t.schedule(function() {
                            var o = e[I]();
                            r.add(
                              o.subscribe({
                                next: function(e) {
                                  r.add(
                                    t.schedule(function() {
                                      return n.next(e);
                                    })
                                  );
                                },
                                error: function(e) {
                                  r.add(
                                    t.schedule(function() {
                                      return n.error(e);
                                    })
                                  );
                                },
                                complete: function() {
                                  r.add(
                                    t.schedule(function() {
                                      return n.complete();
                                    })
                                  );
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : G(e)
              );
            })(e, t);
          if (Q(e))
            return (function(e, t) {
              return new T(
                t
                  ? function(n) {
                      var r = new _();
                      return (
                        r.add(
                          t.schedule(function() {
                            return e.then(
                              function(e) {
                                r.add(
                                  t.schedule(function() {
                                    n.next(e),
                                      r.add(
                                        t.schedule(function() {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function(e) {
                                r.add(
                                  t.schedule(function() {
                                    return n.error(e);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    }
                  : F(e)
              );
            })(e, t);
          if (Z(e)) return J(e, t);
          if (
            (function(e) {
              return e && 'function' == typeof e[B];
            })(e) ||
            'string' == typeof e
          )
            return (function(e, t) {
              if (!e) throw new Error('Iterable cannot be null');
              return new T(
                t
                  ? function(n) {
                      var r,
                        o = new _();
                      return (
                        o.add(function() {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        o.add(
                          t.schedule(function() {
                            (r = e[B]()),
                              o.add(
                                t.schedule(function() {
                                  if (!n.closed) {
                                    var e, t;
                                    try {
                                      var o = r.next();
                                      (e = o.value), (t = o.done);
                                    } catch (i) {
                                      return void n.error(i);
                                    }
                                    t
                                      ? n.complete()
                                      : (n.next(e), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        o
                      );
                    }
                  : U(e)
              );
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + ' is not observable'
        );
      }
      var te = (function() {
          function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = t);
          }
          return (
            (e.prototype.call = function(e, t) {
              return t.subscribe(new ne(e, this.project, this.concurrent));
            }),
            e
          );
        })(),
        ne = (function(e) {
          function t(t, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var o = e.call(this, t) || this;
            return (
              (o.project = n),
              (o.concurrent = r),
              (o.hasCompleted = !1),
              (o.buffer = []),
              (o.active = 0),
              (o.index = 0),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype._next = function(e) {
              this.active < this.concurrent
                ? this._tryNext(e)
                : this.buffer.push(e);
            }),
            (t.prototype._tryNext = function(e) {
              var t,
                n = this.index++;
              try {
                t = this.project(e, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(t, e, n);
            }),
            (t.prototype._innerSub = function(e, t, n) {
              var r = new L(this, void 0, void 0);
              this.destination.add(r), q(this, e, t, n, r);
            }),
            (t.prototype._complete = function() {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (t.prototype.notifyNext = function(e, t, n, r, o) {
              this.destination.next(t);
            }),
            (t.prototype.notifyComplete = function(e) {
              var t = this.buffer;
              this.remove(e),
                this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            t
          );
        })(X);
      function re(e) {
        return e;
      }
      function oe() {
        return function(e) {
          return e.lift(new ie(e));
        };
      }
      var ie = (function() {
          function e(e) {
            this.connectable = e;
          }
          return (
            (e.prototype.call = function(e, t) {
              var n = this.connectable;
              n._refCount++;
              var r = new se(e, n),
                o = t.subscribe(r);
              return r.closed || (r.connection = n.connect()), o;
            }),
            e
          );
        })(),
        se = (function(e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.connectable = n), r;
          }
          return (
            o(t, e),
            (t.prototype._unsubscribe = function() {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._refCount;
                if (t <= 0) this.connection = null;
                else if (((e._refCount = t - 1), t > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = e._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            t
          );
        })(A),
        ae = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.source = t),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            o(t, e),
            (t.prototype._subscribe = function(e) {
              return this.getSubject().subscribe(e);
            }),
            (t.prototype.getSubject = function() {
              var e = this._subject;
              return (
                (e && !e.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (t.prototype.connect = function() {
              var e = this._connection;
              return (
                e ||
                  ((this._isComplete = !1),
                  (e = this._connection = new _()).add(
                    this.source.subscribe(new le(this.getSubject(), this))
                  ),
                  e.closed
                    ? ((this._connection = null), (e = _.EMPTY))
                    : (this._connection = e)),
                e
              );
            }),
            (t.prototype.refCount = function() {
              return oe()(this);
            }),
            t
          );
        })(T).prototype,
        ue = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ae._subscribe },
          _isComplete: { value: ae._isComplete, writable: !0 },
          getSubject: { value: ae.getSubject },
          connect: { value: ae.connect },
          refCount: { value: ae.refCount }
        },
        le = (function(e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.connectable = n), r;
          }
          return (
            o(t, e),
            (t.prototype._error = function(t) {
              this._unsubscribe(), e.prototype._error.call(this, t);
            }),
            (t.prototype._complete = function() {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                e.prototype._complete.call(this);
            }),
            (t.prototype._unsubscribe = function() {
              var e = this.connectable;
              if (e) {
                this.connectable = null;
                var t = e._connection;
                (e._refCount = 0),
                  (e._subject = null),
                  (e._connection = null),
                  t && t.unsubscribe();
              }
            }),
            t
          );
        })(M);
      function ce() {
        return new j();
      }
      function de(e) {
        for (var t in e) if (e[t] === de) return t;
        throw Error('Could not find renamed property on target object.');
      }
      var pe = de({ ngComponentDef: de }),
        fe = de({ ngInjectableDef: de }),
        he = de({ ngInjectorDef: de }),
        ve = de({ ngModuleDef: de }),
        ye = de({ __NG_ELEMENT_ID__: de });
      function ge(e) {
        return {
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function me(e) {
        return e && e.hasOwnProperty(fe) ? e[fe] : null;
      }
      function be(e) {
        return e && e.hasOwnProperty(he) ? e[he] : null;
      }
      var _e = (function() {
          function e(e, t) {
            (this._desc = e),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ngInjectableDef =
                void 0 !== t
                  ? ge({
                      providedIn: t.providedIn || 'root',
                      factory: t.factory
                    })
                  : void 0);
          }
          return (
            (e.prototype.toString = function() {
              return 'InjectionToken ' + this._desc;
            }),
            e
          );
        })(),
        we = '__parameters__';
      function xe(e, t, n) {
        var r = (function(e) {
          return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            if (e) {
              var r = e.apply(void 0, c(t));
              for (var o in r) this[o] = r[o];
            }
          };
        })(t);
        function o() {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          if (this instanceof o) return r.apply(this, t), this;
          var i = new ((e = o).bind.apply(e, c([void 0], t)))();
          return (s.annotation = i), s;
          function s(e, t, n) {
            for (
              var r = e.hasOwnProperty(we)
                ? e[we]
                : Object.defineProperty(e, we, { value: [] })[we];
              r.length <= n;

            )
              r.push(null);
            return (r[n] = r[n] || []).push(i), e;
          }
        }
        return (
          n && (o.prototype = Object.create(n.prototype)),
          (o.prototype.ngMetadataName = e),
          (o.annotationCls = o),
          o
        );
      }
      var Ce = 'undefined' != typeof window && window,
        Ee =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Se = ('undefined' != typeof global && global) || Ce || Ee,
        Oe = Promise.resolve(0),
        Ae = null;
      function ke() {
        if (!Ae) {
          var e = Se.Symbol;
          if (e && e.iterator) Ae = e.iterator;
          else
            for (
              var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
              n < t.length;
              ++n
            ) {
              var r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (Ae = r);
            }
        }
        return Ae;
      }
      function Ie(e) {
        'undefined' == typeof Zone
          ? Oe.then(function() {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      function Te(e, t) {
        return (
          e === t ||
          ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function Ne(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(Ne).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        var t = e.toString();
        if (null == t) return '' + t;
        var n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      var Pe = de({ __forward_ref__: de });
      function Ve(e) {
        return (
          (e.__forward_ref__ = Ve),
          (e.toString = function() {
            return Ne(this());
          }),
          e
        );
      }
      function De(e) {
        var t = e;
        return 'function' == typeof t &&
          t.hasOwnProperty(Pe) &&
          t.__forward_ref__ === Ve
          ? t()
          : e;
      }
      var Me = (function(e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.Native = 1)] = 'Native'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })({}),
        je = 0,
        Re = 1,
        Le = 2,
        He = 3,
        Fe = 5,
        ze = 6,
        Be = 7,
        Ue = 8,
        Ge = 9,
        Ze = 10,
        Qe = 11,
        We = 12,
        qe = 13,
        Xe = 15,
        Ye = 17,
        Ke = 18,
        $e = 0,
        Je = 1,
        et = 6,
        tt = 8,
        nt = '__ngContext__',
        rt = 8,
        ot = 8,
        it = 9,
        st = -1,
        at = (function() {
          return function(e, t, n) {
            (this.factory = e),
              (this.resolving = !1),
              (this.canSeeViewProviders = t),
              (this.injectImpl = n);
          };
        })(),
        ut = at.prototype;
      function lt(e) {
        return 'function' == typeof e
          ? e.name || e
          : 'string' == typeof e
          ? e
          : null == e
          ? ''
          : 'object' == typeof e && 'function' == typeof e.type
          ? e.type.name || e.type
          : '' + e;
      }
      function ct(e) {
        for (; Array.isArray(e); ) e = e[Fe];
        return e;
      }
      function dt(e, t) {
        return ct(t[e.index]);
      }
      function pt(e, t) {
        var n = t[e];
        return n.length >= Ke ? n : n[Fe];
      }
      function ft(e) {
        return null !== e.template;
      }
      function ht(e) {
        return e[nt];
      }
      function vt(e) {
        var t = ht(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function yt(e) {
        return 32767 & e;
      }
      function gt(e, t) {
        for (var n = e >> 16, r = t; n > 0; ) (r = r[Ye]), n--;
        return r;
      }
      var mt = (
        ('undefined' != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(Se);
      function bt(e) {
        for (var t = e[ze]; t && 2 === t.type; ) t = (e = e[Ye])[ze];
        return e;
      }
      var _t,
        wt,
        xt,
        Ct,
        Et = xe('Inject', function(e) {
          return { token: e };
        }),
        St = xe('Optional'),
        Ot = xe('Self'),
        At = xe('SkipSelf'),
        kt = (function(e) {
          return (
            (e[(e.Default = 0)] = 'Default'),
            (e[(e.Host = 1)] = 'Host'),
            (e[(e.Self = 2)] = 'Self'),
            (e[(e.SkipSelf = 4)] = 'SkipSelf'),
            (e[(e.Optional = 8)] = 'Optional'),
            e
          );
        })({}),
        It = void 0;
      function Tt(e) {
        var t = It;
        return (It = e), t;
      }
      function Nt(e) {
        var t = _t;
        return (_t = e), t;
      }
      function Pt(e, t) {
        return (
          void 0 === t && (t = kt.Default),
          (_t ||
            function(e, t) {
              if ((void 0 === t && (t = kt.Default), void 0 === It))
                throw new Error(
                  'inject() must be called from an injection context'
                );
              return null === It
                ? Vt(e, void 0, t)
                : It.get(e, t & kt.Optional ? null : void 0, t);
            })(e, t)
        );
      }
      function Vt(e, t, n) {
        var r = me(e);
        if (r && 'root' == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & kt.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error('Injector: NOT_FOUND [' + Ne(e) + ']');
      }
      function Dt(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.');
            for (var o = void 0, i = kt.Default, s = 0; s < r.length; s++) {
              var a = r[s];
              a instanceof St || 'Optional' === a.ngMetadataName
                ? (i |= kt.Optional)
                : a instanceof At || 'SkipSelf' === a.ngMetadataName
                ? (i |= kt.SkipSelf)
                : a instanceof Ot || 'Self' === a.ngMetadataName
                ? (i |= kt.Self)
                : (o = a instanceof Et ? a.token : a);
            }
            t.push(Pt(o, i));
          } else t.push(Pt(r));
        }
        return t;
      }
      function Mt(e, t, n) {
        e.afterContentInit &&
          (t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentInit),
          e.afterContentChecked &&
            ((t.contentHooks || (t.contentHooks = [])).push(
              n,
              e.afterContentChecked
            ),
            (t.contentCheckHooks || (t.contentCheckHooks = [])).push(
              n,
              e.afterContentChecked
            ));
      }
      function jt(e, t, n) {
        e.afterViewInit &&
          (t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewInit),
          e.afterViewChecked &&
            ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked),
            (t.viewCheckHooks || (t.viewCheckHooks = [])).push(
              n,
              e.afterViewChecked
            ));
      }
      function Rt(e, t, n) {
        null != e.onDestroy &&
          (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy);
      }
      function Lt(e, t, n, r) {
        if (!r) {
          var o = 2 & e[Re] ? t : n;
          o && Ht(e, o);
        }
      }
      function Ht(e, t) {
        for (var n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]]);
      }
      function Ft() {
        return Ct;
      }
      function zt() {
        return wt;
      }
      function Bt(e) {
        wt = e;
      }
      function Ut(e, t) {
        (wt = e), (Ct = t);
      }
      function Gt() {
        return xt;
      }
      function Zt(e) {
        xt = e;
      }
      function Qt(e) {
        return void 0 === e && (e = Ct), 1 == (1 & e[Re]);
      }
      var Wt = !1;
      function qt() {
        return Wt;
      }
      function Xt(e) {
        Wt = e;
      }
      var Yt = !0;
      function Kt() {
        return Yt;
      }
      function $t(e) {
        Yt = e;
      }
      function Jt(e, t) {
        var n = Ct;
        e && (Yt = e[je].firstTemplatePass);
        return (wt = t), (xt = !0), (Ct = e), n;
      }
      function en(e) {
        var t = Ct[je];
        Qt(Ct)
          ? (Ct[Re] &= -2)
          : (Lt(Ct, t.viewHooks, t.viewCheckHooks, Wt),
            (Ct[Re] &= -11),
            (Ct[Re] |= 32),
            (Ct[Be] = t.bindingStartIndex)),
          Jt(e, null);
      }
      var tn = !0;
      function nn(e) {
        var t = tn;
        return (tn = e), t;
      }
      var rn = 255,
        on = 0;
      function sn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function an(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null == t[e.injectorIndex + ot]
          ? -1
          : e.injectorIndex;
      }
      function un(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        for (var n = t[ze], r = 1; n && -1 === n.injectorIndex; )
          (n = (t = t[Ye]) ? t[ze] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      var ln = {};
      function cn(e, t, n, r, o, i) {
        var s = t[je],
          a = s.data[e + rt],
          u = (function(e, t, n, r, o) {
            for (
              var i = e.providerIndexes,
                s = t[je].data,
                a = 65535 & i,
                u = e.directiveStart,
                l = i >> 16,
                c = o ? a + l : e.directiveEnd,
                d = r ? a : a + l;
              d < c;
              d++
            ) {
              var p = s[d];
              if ((d < u && n === p) || (d >= u && p.type === n)) return d;
            }
            if (o) {
              var f = s[u];
              if (f && ft(f) && f.type === n) return u;
            }
            return null;
          })(
            a,
            t,
            n,
            null == r
              ? (function(e) {
                  return 1 == (1 & e.flags);
                })(a) && tn
              : r != s && 3 === a.type,
            o & kt.Host && i === a
          );
        return null !== u ? dn(s.data, t, u, a) : ln;
      }
      function dn(e, t, n, r) {
        var o,
          i = t[n];
        if (
          null != (o = i) &&
          'object' == typeof o &&
          Object.getPrototypeOf(o) == ut
        ) {
          var s = i;
          if (s.resolving) throw new Error('Circular dep for ' + lt(e[n]));
          var a = nn(s.canSeeViewProviders);
          s.resolving = !0;
          var u = void 0;
          s.injectImpl && (u = Nt(s.injectImpl));
          var l = zt(),
            c = Ft();
          Ut(r, t);
          try {
            i = t[n] = s.factory(null, e, t, r);
          } finally {
            s.injectImpl && Nt(u), nn(a), (s.resolving = !1), Ut(l, c);
          }
        }
        return i;
      }
      function pn(e, t, n) {
        var r = 64 & e,
          o = 32 & e;
        return !!(
          (128 & e
            ? r
              ? o
                ? n[t + 7]
                : n[t + 6]
              : o
              ? n[t + 5]
              : n[t + 4]
            : r
            ? o
              ? n[t + 3]
              : n[t + 2]
            : o
            ? n[t + 1]
            : n[t]) &
          (1 << e)
        );
      }
      function fn(e, t) {
        return !(e & kt.Self || (e & kt.Host && t));
      }
      var hn = (function() {
        function e(e, t) {
          (this._tNode = e), (this._lView = t);
        }
        return (
          (e.prototype.get = function(e, t) {
            return (function(e, t, n, r, o) {
              if ((void 0 === r && (r = kt.Default), e)) {
                var i = (function(e) {
                  if ('string' == typeof e) return e.charCodeAt(0) || 0;
                  var t = e[ye];
                  return 'number' == typeof t ? t & rn : t;
                })(n);
                if ('function' == typeof i) {
                  var s = zt(),
                    a = Ft();
                  Ut(e, t);
                  try {
                    var u = i();
                    if (null != u || r & kt.Optional) return u;
                    throw new Error('No provider for ' + lt(n) + '!');
                  } finally {
                    Ut(s, a);
                  }
                } else if ('number' == typeof i) {
                  var l = null,
                    c = an(e, t),
                    d = st,
                    p = r & kt.Host ? bt(t)[ze] : null;
                  for (
                    (-1 === c || r & kt.SkipSelf) &&
                    ((d = -1 === c ? un(e, t) : t[c + ot]),
                    fn(r, !1)
                      ? ((l = t[je]), (c = yt(d)), (t = gt(d, t)))
                      : (c = -1));
                    -1 !== c;

                  ) {
                    d = t[c + ot];
                    var f = t[je];
                    if (pn(i, c, f.data)) {
                      var h = cn(c, t, n, l, r, p);
                      if (h !== ln) return h;
                    }
                    fn(r, t[je].data[c + rt] === p) && pn(i, c, t)
                      ? ((l = f), (c = yt(d)), (t = gt(d, t)))
                      : (c = -1);
                  }
                }
              }
              if (
                (r & kt.Optional && void 0 === o && (o = null),
                0 == (r & (kt.Self | kt.Host)))
              ) {
                var v = t[Ze];
                return v
                  ? v.get(n, o, r & kt.Optional)
                  : Vt(n, o, r & kt.Optional);
              }
              if (r & kt.Optional) return o;
              throw new Error('NodeInjector: NOT_FOUND [' + lt(n) + ']');
            })(this._tNode, this._lView, e, void 0, t);
          }),
          e
        );
      })();
      function vn(e, t) {
        e[nt] = t;
      }
      var yn = /([A-Z])/g;
      function gn(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      function mn(e, t) {
        var n = wn(e),
          r = wn(t);
        return n && r
          ? (function(e, t, n) {
              for (var r = e[ke()](), o = t[ke()](); ; ) {
                var i = r.next(),
                  s = o.next();
                if (i.done && s.done) return !0;
                if (i.done || s.done) return !1;
                if (!n(i.value, s.value)) return !1;
              }
            })(e, t, mn)
          : !(
              n ||
              !e ||
              ('object' != typeof e && 'function' != typeof e) ||
              r ||
              !t ||
              ('object' != typeof t && 'function' != typeof t)
            ) || Te(e, t);
      }
      var bn = (function() {
          function e(e) {
            this.wrapped = e;
          }
          return (
            (e.wrap = function(t) {
              return new e(t);
            }),
            (e.unwrap = function(t) {
              return e.isWrapped(t) ? t.wrapped : t;
            }),
            (e.isWrapped = function(t) {
              return t instanceof e;
            }),
            e
          );
        })(),
        _n = (function() {
          function e(e, t, n) {
            (this.previousValue = e),
              (this.currentValue = t),
              (this.firstChange = n);
          }
          return (
            (e.prototype.isFirstChange = function() {
              return this.firstChange;
            }),
            e
          );
        })();
      function wn(e) {
        return (
          !!xn(e) && (Array.isArray(e) || (!(e instanceof Map) && ke() in e))
        );
      }
      function xn(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      var Cn = {},
        En = 'ngProjectAs';
      function Sn(e) {
        return !!e.listen;
      }
      var On = {
          createRenderer: function(e, t) {
            return document;
          }
        },
        An = [];
      function kn(e, t, n, r, o) {
        0 === e
          ? Sn(t)
            ? t.insertBefore(n, r, o)
            : n.insertBefore(r, o, !0)
          : 1 === e
          ? Sn(t)
            ? t.removeChild(n, r)
            : n.removeChild(r)
          : 2 === e && t.destroyNode(r);
      }
      function In(e) {
        var t = e[je].childIndex;
        return -1 === t ? null : e[t];
      }
      function Tn(e, t) {
        var n;
        return e.length >= Ke && (n = e[ze]) && 2 === n.type
          ? (function(t, n) {
              if (-1 === t.index) {
                var r = e[Xe];
                return r > -1 ? e[Le][r] : null;
              }
              return e[Le][t.parent.index];
            })(n)
          : e[Le] === t
          ? null
          : e[Le];
      }
      function Nn(e) {
        if (e.length >= Ke) {
          var t = e;
          !(function(e) {
            var t,
              n = e[je];
            null != n && null != (t = n.destroyHooks) && Ht(e, t);
          })(t),
            (o = (r = t)[je] && r[je].pipeDestroyHooks) && Ht(r, o),
            (function(e) {
              var t = e[je].cleanup;
              if (null != t) {
                for (var n = e[Ue], r = 0; r < t.length - 1; r += 2)
                  if ('string' == typeof t[r]) {
                    var o = n[t[r + 2]],
                      i = ct(e[t[r + 1]]),
                      s = t[r + 3];
                    'boolean' == typeof s
                      ? i.removeEventListener(t[r], o, s)
                      : s >= 0
                      ? n[s]()
                      : n[-s].unsubscribe(),
                      (r += 2);
                  } else
                    'number' == typeof t[r]
                      ? (0, n[t[r]])()
                      : t[r].call(n[t[r + 1]]);
                e[Ue] = null;
              }
            })(t);
          var n = t[ze];
          n && 3 === n.type && Sn(t[We]) && t[We].destroy();
        }
        var r, o;
      }
      var Pn = '@',
        Vn = Promise.resolve(null);
      function Dn(e) {
        var t = e[je];
        if (((t.firstTemplatePass = !1), $t(!1), !Qt(e))) {
          var n = qt();
          (function(e, t, n) {
            !n &&
              32 & e[Re] &&
              (Lt(e, t.initHooks, t.checkHooks, n), (e[Re] &= -33));
          })(e, t, n),
            (function(e) {
              for (var t = In(e); null !== t; t = t[He])
                if (t.length < Ke && -1 === t[$e])
                  for (var n = t, r = 0; r < n[Je].length; r++) {
                    var o = n[Je][r];
                    Rn(o, o[je], o[Ge]);
                  }
            })(e),
            (function(e) {
              if (null != e.contentQueries)
                for (var t = 0; t < e.contentQueries.length; t += 2) {
                  var n = e.contentQueries[t];
                  e.data[n].contentQueriesRefresh(
                    n - Ke,
                    e.contentQueries[t + 1]
                  );
                }
            })(t),
            Lt(e, t.contentHooks, t.contentCheckHooks, n),
            (function(e, t) {
              if (e.expandoInstructions)
                for (
                  var n = (t[Be] = e.expandoStartIndex), r = -1, o = -1, i = 0;
                  i < e.expandoInstructions.length;
                  i++
                ) {
                  var s = e.expandoInstructions[i];
                  if ('number' == typeof s)
                    if (s <= 0) {
                      o = -s;
                      var a = e.expandoInstructions[++i];
                      r = n += it + a;
                    } else n += s;
                  else null !== s && ((t[Be] = n), s(2, ct(t[r]), o)), r++;
                }
            })(t, e);
        }
        !(function(e) {
          if (null != e)
            for (var t = 0; t < e.length; t++)
              void 0,
                void 0,
                16 == (16 & (n = pt(e[t], Ft()))[Re]) &&
                  12 & n[Re] &&
                  ((function(e) {
                    for (
                      var t = e[je], n = e.length;
                      n < t.blueprint.length;
                      n++
                    )
                      e[n] = t.blueprint[n];
                  })(n),
                  Wn(n, n[Ge]));
          var n;
        })(t.components);
      }
      function Mn(e, t, n, r, o, i, s, a) {
        var u = t.blueprint.slice();
        return (
          (u[Re] = 51 | r),
          (u[Le] = u[Ye] = e),
          (u[Ge] = n),
          (u[Qe] = o || (e && e[Qe])),
          (u[We] = i || (e && e[We])),
          (u[qe] = s || (e && e[qe]) || null),
          (u[Ze] = a || (e && e[Ze]) || null),
          u
        );
      }
      function jn(e, t, n, r, o) {
        var i = Ft(),
          s = i[je],
          a = e + Ke;
        i[a] = n;
        var u = s.data[a];
        null == u && (u = s.data[a] = Un(i, t, a, r, o, null));
        var l = zt(),
          c = Gt();
        return (
          l &&
            (!c || null != l.child || (null === u.parent && 2 !== l.type)
              ? c || (l.next = u)
              : (l.child = u)),
          null == s.firstChild && (s.firstChild = u),
          Bt(u),
          Zt(!0),
          u
        );
      }
      function Rn(e, t, n) {
        var r,
          o = Gt(),
          i = zt();
        if ((Zt(!0), Bt(null), 128 & e[Re]))
          Gn(
            (function(e) {
              for (var t = Array.isArray(e) ? e : vt(e); t && !(128 & t[Re]); )
                t = t[Le];
              return t;
            })(e)[Ge]
          );
        else
          try {
            Zt(!0),
              Bt(null),
              (r = Jt(e, e[ze])),
              zn(),
              t.template(Hn(e), n),
              (e[je].firstTemplatePass = !1),
              $t(!1),
              Dn(e);
          } finally {
            en(r), Zt(o), Bt(i);
          }
      }
      function Ln(e, t, n) {
        var r = e[Qe],
          o = Jt(e, e[ze]),
          i = !qt();
        try {
          i && r.begin && r.begin(),
            Qt(e) && (n && (zn(), n(1, t)), Dn(e), (e[Re] &= -2)),
            n && n(2, t),
            Dn(e);
        } finally {
          i && r.end && r.end(), en(o);
        }
      }
      function Hn(e) {
        return Qt(e) ? 1 : 2;
      }
      var Fn = null;
      function zn() {
        Fn = null;
      }
      function Bn(e, t, n, r, o, i, s) {
        var a = Ke + n,
          u = a + r,
          l = (function(e, t) {
            var n = new Array(t).fill(null, 0, e).fill(Cn, e);
            return (n[Xe] = -1), (n[Be] = e), n;
          })(a, u);
        return (l[je] = {
          id: e,
          blueprint: l,
          template: t,
          viewQuery: s,
          node: null,
          data: l.slice(),
          childIndex: -1,
          bindingStartIndex: a,
          expandoStartIndex: u,
          expandoInstructions: null,
          firstTemplatePass: !0,
          initHooks: null,
          checkHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          pipeDestroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof i ? i() : i,
          firstChild: null
        });
      }
      function Un(e, t, n, r, o, i) {
        var s = zt(),
          a = Gt() ? s : s && s.parent,
          u = a && e && a !== e[ze] ? a : null;
        return {
          type: t,
          index: n,
          injectorIndex: u ? u.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          flags: 0,
          providerIndexes: 0,
          tagName: r,
          attrs: o,
          localNames: null,
          initialInputs: void 0,
          inputs: void 0,
          outputs: void 0,
          tViews: i,
          next: null,
          child: null,
          parent: u,
          detached: null,
          stylingTemplate: null,
          projection: null
        };
      }
      function Gn(e) {
        for (var t = 0; t < e.components.length; t++) {
          var n = e.components[t];
          Ln(vt(n), n);
        }
      }
      function Zn(e, t) {
        var n = e[Qe];
        n.begin && n.begin(), Qt(e) && Wn(e, t), Wn(e, t), n.end && n.end();
      }
      function Qn(e) {
        Gn(e[Ge]);
      }
      function Wn(e, t) {
        var n = e[je],
          r = Jt(e, e[ze]),
          o = n.template,
          i = n.viewQuery;
        try {
          zn(),
            (function(t, n, r) {
              t && Qt(e) && t(1, r);
            })(i, 0, t),
            o(Hn(e), t),
            Dn(e),
            (function(t, n, r) {
              t && !Qt(e) && t(2, r);
            })(i, 0, t);
        } finally {
          en(r);
        }
      }
      var qn = Vn;
      function Xn(e, t, n, r, o, i) {
        (xt = !1), (wt = null);
        var s,
          a = n[je],
          u = Mn(
            n,
            (s = t.template).ngPrivateData ||
              (s.ngPrivateData = Bn(
                -1,
                s,
                t.consts,
                t.vars,
                t.directiveDefs,
                t.pipeDefs,
                t.viewQuery
              )),
            null,
            t.onPush ? 8 : 4,
            r,
            o,
            i
          ),
          l = jn(0, 3, e, null, null);
        return (
          a.firstTemplatePass &&
            ((function(e, t, n) {
              var r = 'string' != typeof n ? n[ye] : n.charCodeAt(0) || 0;
              null == r && (r = n[ye] = on++);
              var o = r & rn,
                i = 1 << o,
                s = 64 & o,
                a = 32 & o,
                u = t.data;
              128 & o
                ? s
                  ? a
                    ? (u[e + 7] |= i)
                    : (u[e + 6] |= i)
                  : a
                  ? (u[e + 5] |= i)
                  : (u[e + 4] |= i)
                : s
                ? a
                  ? (u[e + 3] |= i)
                  : (u[e + 2] |= i)
                : a
                ? (u[e + 1] |= i)
                : (u[e] |= i);
            })(
              (function(e, t) {
                var n = an(e, t);
                if (-1 !== n) return n;
                var r = t[je];
                r.firstTemplatePass &&
                  ((e.injectorIndex = t.length),
                  sn(r.data, e),
                  sn(t, null),
                  sn(r.blueprint, null));
                var o = un(e, t),
                  i = yt(o),
                  s = gt(o, t),
                  a = e.injectorIndex;
                if (o !== st)
                  for (var u = s[je].data, l = 0; l < 8; l++)
                    t[a + l] = s[i + l] | u[i + l];
                return (t[a + ot] = o), a;
              })(l, n),
              n[je],
              t.type
            ),
            (l.flags = 1),
            (function(e, t, n) {
              (e.flags = 1 & e.flags),
                (e.directiveStart = t),
                (e.directiveEnd = t + 1),
                (e.providerIndexes = t);
            })(l, n.length),
            (function(e) {
              var t = Ft()[je];
              (t.components || (t.components = [])).push(e.index);
            })(l)),
          (u[Fe] = n[Ke]),
          (u[ze] = l),
          (n[Ke] = u)
        );
      }
      function Yn(e, t, n, r, o) {
        var i = n[je],
          s = (function(e, t, n) {
            var r = zt();
            e.firstTemplatePass &&
              (n.providersResolver && n.providersResolver(n),
              (function(e, t, n) {
                var o = -(r.index - Ke),
                  i = e.data.length - (65535 & r.providerIndexes);
                (e.expandoInstructions || (e.expandoInstructions = [])).push(
                  o,
                  i,
                  1
                );
              })(e),
              (function(e, t, n, r) {
                e.data.push(n);
                var o = new at(r, ft(n), null);
                e.blueprint.push(o), t.push(o);
              })(e, t, n, n.factory));
            var o = dn(e.data, t, t.length - 1, r);
            return (
              (function(e, t, n, r) {
                var o = dt(t, e);
                vn(n, e),
                  o && vn(o, e),
                  null != r.attributes &&
                    3 == t.type &&
                    (function(e, t) {
                      for (var n = Ft()[We], r = Sn(n), o = 0; o < t.length; ) {
                        var i = t[o++];
                        if ('number' == typeof i) {
                          if (0 !== i) break;
                          var s = t[o++],
                            a = t[o++],
                            u = t[o++];
                          r
                            ? n.setAttribute(e, a, u, s)
                            : e.setAttributeNS(s, a, u);
                        } else
                          (u = t[o++]),
                            i !== En &&
                              (i[0] === Pn
                                ? r && n.setProperty(e, i, u)
                                : r
                                ? n.setAttribute(e, i, u)
                                : e.setAttribute(i, u));
                      }
                    })(o, r.attributes);
              })(t, r, o, n),
              o
            );
          })(i, n, t);
        if (
          (r.components.push(s),
          (e[Ge] = s),
          o &&
            o.forEach(function(e) {
              return e(s, t);
            }),
          i.firstTemplatePass && t.hostBindings)
        ) {
          var a = zt();
          t.hostBindings(1, s, a.index - Ke);
        }
        return s;
      }
      function Kn(e, t) {
        return {
          components: [],
          scheduler: e || mt,
          clean: qn,
          playerHandler: t || null,
          flags: 0
        };
      }
      function $n(e, t) {
        var n,
          r,
          o,
          i,
          s = vt(e)[je],
          a = s.data.length - 1;
        (n = a),
          (o = t.doCheck),
          (i = s),
          (r = t.onInit) && (i.initHooks || (i.initHooks = [])).push(n, r),
          o &&
            ((i.initHooks || (i.initHooks = [])).push(n, o),
            (i.checkHooks || (i.checkHooks = [])).push(n, o)),
          (function(e, t) {
            if (e.firstTemplatePass)
              for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                var o = e.data[n];
                Mt(o, e, n), jt(o, e, n), Rt(o, e, n);
              }
          })(s, { directiveStart: a, directiveEnd: a + 1 });
      }
      function Jn() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      }
      var er = '__source',
        tr = new Object(),
        nr = tr,
        rr = new _e('INJECTOR'),
        or = (function() {
          function e() {}
          return (
            (e.prototype.get = function(e, t) {
              if ((void 0 === t && (t = tr), t === tr))
                throw new Error(
                  'NullInjectorError: No provider for ' + Ne(e) + '!'
                );
              return t;
            }),
            e
          );
        })(),
        ir = (function() {
          function e() {}
          return (
            (e.create = function(e, t) {
              return Array.isArray(e)
                ? new vr(e, t)
                : new vr(e.providers, e.parent, e.name || null);
            }),
            (e.THROW_IF_NOT_FOUND = tr),
            (e.NULL = new or()),
            (e.ngInjectableDef = ge({
              providedIn: 'any',
              factory: function() {
                return Pt(rr);
              }
            })),
            (e.__NG_ELEMENT_ID__ = function() {
              return sr();
            }),
            e
          );
        })(),
        sr = Jn,
        ar = function(e) {
          return e;
        },
        ur = [],
        lr = ar,
        cr = function() {
          return Array.prototype.slice.call(arguments);
        },
        dr = de({ provide: String, useValue: de }),
        pr = ir.NULL,
        fr = /\n/gm,
        hr = '\u0275',
        vr = (function() {
          function e(e, t, n) {
            void 0 === t && (t = pr),
              void 0 === n && (n = null),
              (this.parent = t),
              (this.source = n);
            var r = (this._records = new Map());
            r.set(ir, { token: ir, fn: ar, deps: ur, value: this, useNew: !1 }),
              r.set(rr, {
                token: rr,
                fn: ar,
                deps: ur,
                value: this,
                useNew: !1
              }),
              (function e(t, n) {
                if (n)
                  if ((n = De(n)) instanceof Array)
                    for (var r = 0; r < n.length; r++) e(t, n[r]);
                  else {
                    if ('function' == typeof n)
                      throw mr('Function/Class not supported', n);
                    if (!n || 'object' != typeof n || !n.provide)
                      throw mr('Unexpected provider', n);
                    var o = De(n.provide),
                      i = (function(e) {
                        var t = (function(e) {
                            var t = ur,
                              n = e.deps;
                            if (n && n.length) {
                              t = [];
                              for (var r = 0; r < n.length; r++) {
                                var o = 6;
                                if ((u = De(n[r])) instanceof Array)
                                  for (var i = 0, s = u; i < s.length; i++) {
                                    var a = s[i];
                                    a instanceof St || a == St
                                      ? (o |= 1)
                                      : a instanceof At || a == At
                                      ? (o &= -3)
                                      : a instanceof Ot || a == Ot
                                      ? (o &= -5)
                                      : (u = a instanceof Et ? a.token : De(a));
                                  }
                                t.push({ token: u, options: o });
                              }
                            } else if (e.useExisting) {
                              var u;
                              t = [
                                { token: (u = De(e.useExisting)), options: 6 }
                              ];
                            } else if (!(n || dr in e))
                              throw mr("'deps' required", e);
                            return t;
                          })(e),
                          n = ar,
                          r = ur,
                          o = !1,
                          i = De(e.provide);
                        if (dr in e) r = e.useValue;
                        else if (e.useFactory) n = e.useFactory;
                        else if (e.useExisting);
                        else if (e.useClass) (o = !0), (n = De(e.useClass));
                        else {
                          if ('function' != typeof i)
                            throw mr(
                              'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                              e
                            );
                          (o = !0), (n = i);
                        }
                        return { deps: t, fn: n, useNew: o, value: r };
                      })(n);
                    if (!0 === n.multi) {
                      var s = t.get(o);
                      if (s) {
                        if (s.fn !== cr) throw yr(o);
                      } else
                        t.set(
                          o,
                          (s = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: cr,
                            value: ur
                          })
                        );
                      s.deps.push({ token: (o = n), options: 6 });
                    }
                    var a = t.get(o);
                    if (a && a.fn == cr) throw yr(o);
                    t.set(o, i);
                  }
              })(r, e);
          }
          return (
            (e.prototype.get = function(e, t, n) {
              void 0 === n && (n = kt.Default);
              var r = this._records.get(e);
              try {
                return (function e(t, n, r, o, i, s) {
                  try {
                    return (function(t, n, r, o, i, s) {
                      var a, u;
                      if (!n || s & kt.SkipSelf)
                        s & kt.Self || (u = o.get(t, i, kt.Default));
                      else {
                        if ((u = n.value) == lr)
                          throw Error(hr + 'Circular dependency');
                        if (u === ur) {
                          n.value = lr;
                          var l = n.useNew,
                            d = n.fn,
                            p = n.deps,
                            f = ur;
                          if (p.length) {
                            f = [];
                            for (var h = 0; h < p.length; h++) {
                              var v = p[h],
                                y = v.options,
                                g = 2 & y ? r.get(v.token) : void 0;
                              f.push(
                                e(
                                  v.token,
                                  g,
                                  r,
                                  g || 4 & y ? o : pr,
                                  1 & y ? null : ir.THROW_IF_NOT_FOUND,
                                  kt.Default
                                )
                              );
                            }
                          }
                          n.value = u = l
                            ? new ((a = d).bind.apply(a, c([void 0], f)))()
                            : d.apply(void 0, f);
                        }
                      }
                      return u;
                    })(t, n, r, o, i, s);
                  } catch (a) {
                    throw (a instanceof Error || (a = new Error(a)),
                    (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(t),
                    n && n.value == lr && (n.value = ur),
                    a);
                  }
                })(e, r, this._records, this.parent, t, n);
              } catch (i) {
                var o = i.ngTempTokenPath;
                throw (e[er] && o.unshift(e[er]),
                (i.message = gr('\n' + i.message, o, this.source)),
                (i.ngTokenPath = o),
                (i.ngTempTokenPath = null),
                i);
              }
            }),
            (e.prototype.toString = function() {
              var e = [];
              return (
                this._records.forEach(function(t, n) {
                  return e.push(Ne(n));
                }),
                'StaticInjector[' + e.join(', ') + ']'
              );
            }),
            e
          );
        })();
      function yr(e) {
        return mr('Cannot mix multi providers and regular providers', e);
      }
      function gr(e, t, n) {
        void 0 === n && (n = null),
          (e =
            e && '\n' === e.charAt(0) && e.charAt(1) == hr ? e.substr(2) : e);
        var r = Ne(t);
        if (t instanceof Array) r = t.map(Ne).join(' -> ');
        else if ('object' == typeof t) {
          var o = [];
          for (var i in t)
            if (t.hasOwnProperty(i)) {
              var s = t[i];
              o.push(
                i + ':' + ('string' == typeof s ? JSON.stringify(s) : Ne(s))
              );
            }
          r = '{' + o.join(', ') + '}';
        }
        return (
          'StaticInjectorError' +
          (n ? '(' + n + ')' : '') +
          '[' +
          r +
          ']: ' +
          e.replace(fr, '\n  ')
        );
      }
      function mr(e, t) {
        return new Error(gr(e, t));
      }
      var br = new _e(
          'The presence of this token marks an injector as being the root injector.'
        ),
        _r = {},
        wr = {},
        xr = [],
        Cr = void 0;
      function Er() {
        return void 0 === Cr && (Cr = new or()), Cr;
      }
      var Sr = (function() {
        function e(e, t, n) {
          var r = this;
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this.destroyed = !1);
          var o = [];
          kr([e], function(e) {
            return r.processInjectorType(e, [], o);
          }),
            t &&
              kr(t, function(n) {
                return r.processProvider(n, e, t);
              }),
            this.records.set(rr, Ar(void 0, this)),
            (this.isRootInjector = this.records.has(br)),
            this.injectorDefTypes.forEach(function(e) {
              return r.get(e);
            });
        }
        return (
          (e.prototype.destroy = function() {
            this.assertNotDestroyed(), (this.destroyed = !0);
            try {
              this.onDestroy.forEach(function(e) {
                return e.ngOnDestroy();
              });
            } finally {
              this.records.clear(),
                this.onDestroy.clear(),
                this.injectorDefTypes.clear();
            }
          }),
          (e.prototype.get = function(e, t, n) {
            void 0 === t && (t = nr),
              void 0 === n && (n = kt.Default),
              this.assertNotDestroyed();
            var r,
              o = Tt(this);
            try {
              if (!(n & kt.SkipSelf)) {
                var i = this.records.get(e);
                if (void 0 === i) {
                  var s =
                    ('function' == typeof (r = e) ||
                      ('object' == typeof r && r instanceof _e)) &&
                    me(e);
                  s &&
                    this.injectableDefInScope(s) &&
                    ((i = Ar(Or(e), _r)), this.records.set(e, i));
                }
                if (void 0 !== i) return this.hydrate(e, i);
              }
              return (n & kt.Self ? Er() : this.parent).get(e, t);
            } finally {
              Tt(o);
            }
          }),
          (e.prototype.assertNotDestroyed = function() {
            if (this.destroyed)
              throw new Error('Injector has already been destroyed.');
          }),
          (e.prototype.processInjectorType = function(e, t, n) {
            var r = this;
            if ((e = De(e))) {
              var o = be(e),
                i = (null == o && e.ngModule) || void 0,
                s = void 0 === i ? e : i,
                a = -1 !== n.indexOf(s),
                u = (void 0 !== i && e.providers) || xr;
              if ((void 0 !== i && (o = be(i)), null != o)) {
                if (
                  (this.injectorDefTypes.add(s),
                  this.records.set(s, Ar(o.factory, _r)),
                  null != o.imports && !a)
                ) {
                  n.push(s);
                  try {
                    kr(o.imports, function(e) {
                      return r.processInjectorType(e, t, n);
                    });
                  } finally {
                  }
                }
                var l = o.providers;
                if (null != l && !a) {
                  var c = e;
                  kr(l, function(e) {
                    return r.processProvider(e, c, l);
                  });
                }
                var d = e.ngModule;
                kr(u, function(e) {
                  return r.processProvider(e, d, u);
                });
              }
            }
          }),
          (e.prototype.processProvider = function(e, t, n) {
            var r = Tr((e = De(e))) ? e : De(e && e.provide),
              o = (function(e, t, n) {
                var r = (function(e, t, n) {
                  var r,
                    o = void 0;
                  if (Tr(e)) return Or(De(e));
                  if (Ir(e))
                    o = function() {
                      return De(e.useValue);
                    };
                  else if ((r = e) && r.useExisting)
                    o = function() {
                      return Pt(De(e.useExisting));
                    };
                  else if (e && e.useFactory)
                    o = function() {
                      return e.useFactory.apply(e, c(Dt(e.deps || [])));
                    };
                  else {
                    var i = De(e && (e.useClass || e.provide));
                    if (!i) {
                      var s = '';
                      throw (t &&
                        n &&
                        (s =
                          ' - only instances of Provider and Type are allowed, got: [' +
                          n
                            .map(function(t) {
                              return t == e ? '?' + e + '?' : '...';
                            })
                            .join(', ') +
                          ']'),
                      new Error(
                        "Invalid provider for the NgModule '" + Ne(t) + "'" + s
                      ));
                    }
                    if (!e.deps) return Or(i);
                    o = function() {
                      return new (i.bind.apply(i, c([void 0], Dt(e.deps))))();
                    };
                  }
                  return o;
                })(e, t, n);
                return Ir(e) ? Ar(void 0, e.useValue) : Ar(r, _r);
              })(e, t, n);
            if (Tr(e) || !0 !== e.multi) {
              var i = this.records.get(r);
              if (i && void 0 !== i.multi)
                throw new Error('Mixed multi-provider for ' + Ne(r));
            } else {
              var s = this.records.get(r);
              if (s) {
                if (void 0 === s.multi)
                  throw new Error('Mixed multi-provider for ' + r + '.');
              } else
                ((s = Ar(void 0, _r, !0)).factory = function() {
                  return Dt(s.multi);
                }),
                  this.records.set(r, s);
              (r = e), s.multi.push(e);
            }
            this.records.set(r, o);
          }),
          (e.prototype.hydrate = function(e, t) {
            if (t.value === wr)
              throw new Error('Cannot instantiate cyclic dependency! ' + Ne(e));
            var n;
            return (
              t.value === _r && ((t.value = wr), (t.value = t.factory())),
              'object' == typeof t.value &&
                t.value &&
                'object' == typeof (n = t.value) &&
                null != n &&
                n.ngOnDestroy &&
                'function' == typeof n.ngOnDestroy &&
                this.onDestroy.add(t.value),
              t.value
            );
          }),
          (e.prototype.injectableDefInScope = function(e) {
            return (
              !!e.providedIn &&
              ('string' == typeof e.providedIn
                ? 'any' === e.providedIn ||
                  ('root' === e.providedIn && this.isRootInjector)
                : this.injectorDefTypes.has(e.providedIn))
            );
          }),
          e
        );
      })();
      function Or(e) {
        var t = me(e);
        if (null === t) {
          var n = be(e);
          if (null !== n) return n.factory;
          if (e instanceof _e)
            throw new Error(
              'Token ' + Ne(e) + ' is missing an ngInjectableDef definition.'
            );
          if (e instanceof Function) {
            var r = e.length;
            if (r > 0) {
              var o = new Array(r).fill('?');
              throw new Error(
                "Can't resolve all parameters for " +
                  Ne(e) +
                  ': (' +
                  o.join(', ') +
                  ').'
              );
            }
            return function() {
              return new e();
            };
          }
          throw new Error('unreachable');
        }
        return t.factory;
      }
      function Ar(e, t, n) {
        return (
          void 0 === n && (n = !1),
          { factory: e, value: t, multi: n ? [] : void 0 }
        );
      }
      function kr(e, t) {
        e.forEach(function(e) {
          return Array.isArray(e) ? kr(e, t) : t(e);
        });
      }
      function Ir(e) {
        return e && 'object' == typeof e && dr in e;
      }
      function Tr(e) {
        return 'function' == typeof e;
      }
      var Nr = (function() {
          return function() {};
        })(),
        Pr = (function() {
          return function() {};
        })();
      function Vr(e) {
        var t = Error(
          'No component factory found for ' +
            Ne(e) +
            '. Did you add it to @NgModule.entryComponents?'
        );
        return (t[Mr] = e), t;
      }
      var Dr,
        Mr = 'ngComponent',
        jr = (function() {
          function e() {}
          return (
            (e.prototype.resolveComponentFactory = function(e) {
              throw Vr(e);
            }),
            e
          );
        })(),
        Rr = (function() {
          function e() {}
          return (e.NULL = new jr()), e;
        })(),
        Lr = (function() {
          function e(e, t, n) {
            (this._parent = t),
              (this._ngModule = n),
              (this._factories = new Map());
            for (var r = 0; r < e.length; r++) {
              var o = e[r];
              this._factories.set(o.componentType, o);
            }
          }
          return (
            (e.prototype.resolveComponentFactory = function(e) {
              var t = this._factories.get(e);
              if (
                (!t &&
                  this._parent &&
                  (t = this._parent.resolveComponentFactory(e)),
                !t)
              )
                throw Vr(e);
              return new Hr(t, this._ngModule);
            }),
            e
          );
        })(),
        Hr = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.factory = t),
              (r.ngModule = n),
              (r.selector = t.selector),
              (r.componentType = t.componentType),
              (r.ngContentSelectors = t.ngContentSelectors),
              (r.inputs = t.inputs),
              (r.outputs = t.outputs),
              r
            );
          }
          return (
            o(t, e),
            (t.prototype.create = function(e, t, n, r) {
              return this.factory.create(e, t, n, r || this.ngModule);
            }),
            t
          );
        })(Pr),
        Fr = (function() {
          return function() {};
        })(),
        zr = (function() {
          return function() {};
        })(),
        Br = (function(e) {
          function t(t) {
            var n = e.call(this, t, null, -1) || this;
            return (n._view = t), n;
          }
          return (
            o(t, e),
            (t.prototype.detectChanges = function() {
              Qn(this._view);
            }),
            (t.prototype.checkNoChanges = function() {
              !(function(e) {
                Xt(!0);
                try {
                  Qn(e);
                } finally {
                  Xt(!1);
                }
              })(this._view);
            }),
            Object.defineProperty(t.prototype, 'context', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          );
        })(
          (function() {
            function e(e, t, n) {
              (this._context = t),
                (this._componentIndex = n),
                (this._appRef = null),
                (this._viewContainerRef = null),
                (this._tViewNode = null),
                (this._lView = e);
            }
            return (
              Object.defineProperty(e.prototype, 'rootNodes', {
                get: function() {
                  return null == this._lView[Fe]
                    ? (function e(t, n, r) {
                        for (var o = n.child; o; )
                          r.push(dt(o, t)),
                            4 === o.type && e(t, o, r),
                            (o = o.next);
                        return r;
                      })(this._lView, this._lView[ze], [])
                    : [];
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'context', {
                get: function() {
                  return this._context ? this._context : this._lookUpContext();
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'destroyed', {
                get: function() {
                  return 64 == (64 & this._lView[Re]);
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype.destroy = function() {
                if (this._appRef) this._appRef.detachView(this);
                else if (this._viewContainerRef) {
                  var e = this._viewContainerRef.indexOf(this);
                  e > -1 && this._viewContainerRef.detach(e),
                    (this._viewContainerRef = null);
                }
                var t, n;
                Sn((n = (t = this._lView)[We])) &&
                  n.destroyNode &&
                  (function(e, n, r, o, i) {
                    for (var s = t[je].node, a = -1, u = t, l = s.child; l; ) {
                      var c = null;
                      if (3 === l.type) {
                        kn(2, r, null, dt(l, u), i);
                        var d = u[l.index];
                        (v = d),
                          Array.isArray(v) &&
                            v.length === tt &&
                            kn(2, r, null, d[et], i);
                      } else if (0 === l.type) {
                        var p = u[l.index];
                        kn(2, r, null, p[et], i),
                          p[Je].length &&
                            ((c = (u = p[Je][0])[je].node), (i = p[et]));
                      } else if (1 === l.type) {
                        var f = bt(u),
                          h = f[ze].projection[l.projection];
                        (An[++a] = l),
                          (An[++a] = u),
                          h && (c = (u = f[Le])[je].data[h.index]);
                      } else c = l.child;
                      if (null === c)
                        for (
                          null === l.next &&
                            2 & l.flags &&
                            ((u = An[a--]), (l = An[a--])),
                            c = l.next;
                          !c;

                        ) {
                          if (null === (l = l.parent || u[je].node) || l === s)
                            return null;
                          0 === l.type && (i = (u = u[Le])[l.index][et]),
                            (c =
                              2 === l.type && u[He]
                                ? (u = u[He])[je].node
                                : l.next);
                        }
                      l = c;
                    }
                    var v;
                  })(0, 0, n),
                  (function(e) {
                    if (-1 === e[je].childIndex) return Nn(e);
                    for (var t = In(e); t; ) {
                      var n = null;
                      if (
                        (t.length >= Ke
                          ? t[je].childIndex > -1 && (n = In(t))
                          : t[Je].length && (n = t[Je][0]),
                        null == n)
                      ) {
                        for (; t && !t[He] && t !== e; ) Nn(t), (t = Tn(t, e));
                        Nn(t || e), (n = t && t[He]);
                      }
                      t = n;
                    }
                  })(t),
                  (t[Re] |= 64);
              }),
              (e.prototype.onDestroy = function(e) {
                var t, n;
                (n = e),
                  (function(e) {
                    return e[Ue] || (e[Ue] = []);
                  })((t = this._lView)).push(n),
                  t[je].firstTemplatePass &&
                    (function(e) {
                      return e[je].cleanup || (e[je].cleanup = []);
                    })(t).push(t[Ue].length - 1, null);
              }),
              (e.prototype.markForCheck = function() {
                !(function(e) {
                  for (; e && !(128 & e[Re]); ) (e[Re] |= 8), (e = e[Le]);
                  var t, n, r;
                  (e[Re] |= 8),
                    (r = 0 === (t = e[Ge]).flags),
                    (t.flags |= 1),
                    r &&
                      t.clean == Vn &&
                      ((t.clean = new Promise(function(e) {
                        return (n = e);
                      })),
                      t.scheduler(function() {
                        if (
                          (1 & t.flags && ((t.flags &= -2), Gn(t)), 2 & t.flags)
                        ) {
                          t.flags &= -3;
                          var e = t.playerHandler;
                          e && e.flushPlayers();
                        }
                        (t.clean = Vn), n(null);
                      }));
                })(this._lView);
              }),
              (e.prototype.detach = function() {
                this._lView[Re] &= -17;
              }),
              (e.prototype.reattach = function() {
                this._lView[Re] |= 16;
              }),
              (e.prototype.detectChanges = function() {
                Zn(this._lView, this.context);
              }),
              (e.prototype.checkNoChanges = function() {
                !(function(e) {
                  Xt(!0);
                  try {
                    !(function(e) {
                      Zn(
                        (function(e) {
                          var t,
                            n = ht(e);
                          if (Array.isArray(n)) {
                            var r = (function(e, t) {
                              var n = e[je].components;
                              if (n)
                                for (var r = 0; r < n.length; r++) {
                                  var o = n[r];
                                  if (pt(o, e)[Ge] === t) return o;
                                }
                              else if (pt(Ke, e)[Ge] === t) return Ke;
                              return -1;
                            })(n, e);
                            ((o = (function(e, t, n) {
                              return {
                                lView: e,
                                nodeIndex: t,
                                native: n,
                                component: void 0,
                                directives: void 0,
                                localRefs: void 0
                              };
                            })(n, r, (t = pt(r, n))[Fe])).component = e),
                              vn(e, o),
                              vn(o.native, o);
                          } else {
                            var o;
                            t = pt((o = n).nodeIndex, o.lView);
                          }
                          return t;
                        })(e),
                        e
                      );
                    })(e);
                  } finally {
                    Xt(!1);
                  }
                })(this.context);
              }),
              (e.prototype.attachToViewContainerRef = function(e) {
                if (this._appRef)
                  throw new Error(
                    'This view is already attached directly to the ApplicationRef!'
                  );
                this._viewContainerRef = e;
              }),
              (e.prototype.detachFromAppRef = function() {
                this._appRef = null;
              }),
              (e.prototype.attachToAppRef = function(e) {
                if (this._viewContainerRef)
                  throw new Error(
                    'This view is already attached to a ViewContainer!'
                  );
                this._appRef = e;
              }),
              (e.prototype._lookUpContext = function() {
                return (this._context = this._lView[Le][this._componentIndex]);
              }),
              e
            );
          })()
        ),
        Ur = (function() {
          function e(e) {
            this.nativeElement = e;
          }
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Gr(e);
            }),
            e
          );
        })(),
        Gr = Jn,
        Zr = (function() {
          return function() {};
        })(),
        Qr = (function() {
          return function() {};
        })(),
        Wr = (function(e) {
          return (
            (e[(e.Important = 1)] = 'Important'),
            (e[(e.DashCase = 2)] = 'DashCase'),
            e
          );
        })({}),
        qr = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Xr();
            }),
            e
          );
        })(),
        Xr = Jn,
        Yr = (function(e) {
          return (
            (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.HTML = 1)] = 'HTML'),
            (e[(e.STYLE = 2)] = 'STYLE'),
            (e[(e.SCRIPT = 3)] = 'SCRIPT'),
            (e[(e.URL = 4)] = 'URL'),
            (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
            e
          );
        })({}),
        Kr = (function() {
          return function() {};
        })(),
        $r = new ((function() {
          return function(e) {
            (this.full = e),
              (this.major = e.split('.')[0]),
              (this.minor = e.split('.')[1]),
              (this.patch = e
                .split('.')
                .slice(2)
                .join('.'));
          };
        })())('7.2.0'),
        Jr = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n.ngModule = t), n;
          }
          return (
            o(t, e),
            (t.prototype.resolveComponentFactory = function(e) {
              return new oo(e[pe] || null, this.ngModule);
            }),
            t
          );
        })(Rr);
      function eo(e) {
        var t = [];
        for (var n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      var to = new _e('ROOT_CONTEXT_TOKEN', {
          providedIn: 'root',
          factory: function() {
            return Kn(Pt(no));
          }
        }),
        no = new _e('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function() {
            return mt;
          }
        }),
        ro = {},
        oo = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.componentDef = t),
              (r.ngModule = n),
              (r.componentType = t.type),
              (r.selector = t.selectors[0][0]),
              (r.ngContentSelectors = []),
              r
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'inputs', {
              get: function() {
                return eo(this.componentDef.inputs);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'outputs', {
              get: function() {
                return eo(this.componentDef.outputs);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.create = function(e, t, n, r) {
              var i,
                s,
                a,
                u,
                l = void 0 === n,
                c = (r = r || this.ngModule)
                  ? (function(e, t) {
                      return {
                        get: function(n, r) {
                          var o = e.get(n, ro);
                          return o !== ro || r === ro ? o : t.get(n, r);
                        }
                      };
                    })(e, r.injector)
                  : e,
                d = c.get(Qr, On),
                p = c.get(Kr, null),
                f = l
                  ? ((a = this.selector),
                    Sn(
                      (u =
                        d.createRenderer(null, this.componentDef) || Ft()[We])
                    )
                      ? u.createElement(a, Fn)
                      : null === Fn
                      ? u.createElement(a)
                      : u.createElementNS(Fn, a))
                  : ((i = n),
                    (s = d.createRenderer(null, null)),
                    'string' == typeof i
                      ? Sn(s)
                        ? s.selectRootElement(i)
                        : s.querySelector(i)
                      : i),
                h = this.componentDef.onPush ? 136 : 132,
                v = l ? Kn() : c.get(to),
                y = d.createRenderer(f, this.componentDef);
              n &&
                f &&
                (Sn(y)
                  ? y.setAttribute(f, 'ng-version', $r.full)
                  : f.setAttribute('ng-version', $r.full));
              var g,
                m,
                b = Mn(
                  null,
                  Bn(-1, null, 1, 0, null, null, null),
                  v,
                  h,
                  d,
                  y,
                  p,
                  c
                ),
                _ = Jt(b, null);
              try {
                d.begin && d.begin();
                var w = Xn(f, this.componentDef, b, d, y);
                if (((m = b[je].data[0 + Ke]), t))
                  for (
                    var x = 0, C = b[je], E = (m.projection = []), S = 0;
                    S < t.length;
                    S++
                  ) {
                    for (
                      var O = t[S], A = null, k = null, I = 0;
                      I < O.length;
                      I++
                    ) {
                      C.firstTemplatePass &&
                        (C.expandoStartIndex++,
                        C.blueprint.splice(++x + Ke, 0, null),
                        C.data.splice(x + Ke, 0, null),
                        b.splice(x + Ke, 0, null));
                      var T = jn(x, 3, O[I], null, null);
                      k ? (k.next = T) : (A = T), (k = T);
                    }
                    E.push(A);
                  }
                (g = Yn(w, this.componentDef, b, v, [$n])),
                  (function(e, t, n) {
                    var r = e[je],
                      o = Kt();
                    e[14] ? (e[14][He] = n) : o && (r.childIndex = t),
                      (e[14] = n);
                  })(b, Ke, w),
                  Dn(b);
              } finally {
                en(_), d.end && d.end();
              }
              var N = new io(
                this.componentType,
                g,
                (function(e, t, n) {
                  return (
                    Dr ||
                      (Dr = (function(e) {
                        function t() {
                          return (
                            (null !== e && e.apply(this, arguments)) || this
                          );
                        }
                        return o(t, e), t;
                      })(Ur)),
                    new Dr(dt(t, n))
                  );
                })(0, m, b),
                b,
                m
              );
              return l && (N.hostView._tViewNode.child = m), N;
            }),
            t
          );
        })(Pr),
        io = (function(e) {
          function t(t, n, r, o, i) {
            var s,
              a = e.call(this) || this;
            return (
              (a.location = r),
              (a._rootLView = o),
              (a._tNode = i),
              (a.destroyCbs = []),
              (a.instance = n),
              (a.hostView = a.changeDetectorRef = new Br(o)),
              (a.hostView._tViewNode = (-1,
              null == (s = o)[je].node &&
                (s[je].node = Un(s, 2, -1, null, null, null)),
              (s[ze] = s[je].node))),
              (a.componentType = t),
              a
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'injector', {
              get: function() {
                return new hn(this._tNode, this._rootLView);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.destroy = function() {
              this.destroyCbs.forEach(function(e) {
                return e();
              }),
                (this.destroyCbs = null),
                this.hostView.destroy();
            }),
            (t.prototype.onDestroy = function(e) {
              this.destroyCbs.push(e);
            }),
            t
          );
        })(Nr),
        so = !0,
        ao = !1;
      function uo() {
        return (ao = !0), so;
      }
      var lo = (function() {
          function e(e) {
            if (
              ((this.defaultDoc = e),
              (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
                'sanitization-inert'
              )),
              (this.inertBodyElement = this.inertDocument.body),
              null == this.inertBodyElement)
            ) {
              var t = this.inertDocument.createElement('html');
              this.inertDocument.appendChild(t),
                (this.inertBodyElement = this.inertDocument.createElement(
                  'body'
                )),
                t.appendChild(this.inertBodyElement);
            }
            (this.inertBodyElement.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
              !this.inertBodyElement.querySelector ||
              this.inertBodyElement.querySelector('svg')
                ? ((this.inertBodyElement.innerHTML =
                    '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                  (this.getInertBodyElement =
                    this.inertBodyElement.querySelector &&
                    this.inertBodyElement.querySelector('svg img') &&
                    (function() {
                      try {
                        return !!window.DOMParser;
                      } catch (e) {
                        return !1;
                      }
                    })()
                      ? this.getInertBodyElement_DOMParser
                      : this.getInertBodyElement_InertDocument))
                : (this.getInertBodyElement = this.getInertBodyElement_XHR);
          }
          return (
            (e.prototype.getInertBodyElement_XHR = function(e) {
              e = '<body><remove></remove>' + e + '</body>';
              try {
                e = encodeURI(e);
              } catch (r) {
                return null;
              }
              var t = new XMLHttpRequest();
              (t.responseType = 'document'),
                t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
                t.send(void 0);
              var n = t.response.body;
              return n.removeChild(n.firstChild), n;
            }),
            (e.prototype.getInertBodyElement_DOMParser = function(e) {
              e = '<body><remove></remove>' + e + '</body>';
              try {
                var t = new window.DOMParser().parseFromString(e, 'text/html')
                  .body;
                return t.removeChild(t.firstChild), t;
              } catch (n) {
                return null;
              }
            }),
            (e.prototype.getInertBodyElement_InertDocument = function(e) {
              var t = this.inertDocument.createElement('template');
              return 'content' in t
                ? ((t.innerHTML = e), t)
                : ((this.inertBodyElement.innerHTML = e),
                  this.defaultDoc.documentMode &&
                    this.stripCustomNsAttrs(this.inertBodyElement),
                  this.inertBodyElement);
            }),
            (e.prototype.stripCustomNsAttrs = function(e) {
              for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
                var r = t.item(n).name;
                ('xmlns:ns1' !== r && 0 !== r.indexOf('ns1:')) ||
                  e.removeAttribute(r);
              }
              for (var o = e.firstChild; o; )
                o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o),
                  (o = o.nextSibling);
            }),
            e
          );
        })(),
        co = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        po = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function fo(e) {
        return (e = String(e)).match(co) || e.match(po)
          ? e
          : (uo() &&
              console.warn(
                'WARNING: sanitizing unsafe URL value ' +
                  e +
                  ' (see http://g.co/ng/security#xss)'
              ),
            'unsafe:' + e);
      }
      function ho(e) {
        var t,
          n,
          r = {};
        try {
          for (var o = u(e.split(',')), i = o.next(); !i.done; i = o.next())
            r[i.value] = !0;
        } catch (s) {
          t = { error: s };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }
      function vo() {
        for (var e, t, n = [], r = 0; r < arguments.length; r++)
          n[r] = arguments[r];
        var o = {};
        try {
          for (var i = u(n), s = i.next(); !s.done; s = i.next()) {
            var a = s.value;
            for (var l in a) a.hasOwnProperty(l) && (o[l] = !0);
          }
        } catch (c) {
          e = { error: c };
        } finally {
          try {
            s && !s.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }
      var yo,
        go = ho('area,br,col,hr,img,wbr'),
        mo = ho('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        bo = ho('rp,rt'),
        _o = vo(bo, mo),
        wo = vo(
          go,
          vo(
            mo,
            ho(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          vo(
            bo,
            ho(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          _o
        ),
        xo = ho('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Co = ho('srcset'),
        Eo = vo(
          xo,
          Co,
          ho(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          )
        ),
        So = (function() {
          function e() {
            (this.sanitizedSomething = !1), (this.buf = []);
          }
          return (
            (e.prototype.sanitizeChildren = function(e) {
              for (var t = e.firstChild, n = !0; t; )
                if (
                  (t.nodeType === Node.ELEMENT_NODE
                    ? (n = this.startElement(t))
                    : t.nodeType === Node.TEXT_NODE
                    ? this.chars(t.nodeValue)
                    : (this.sanitizedSomething = !0),
                  n && t.firstChild)
                )
                  t = t.firstChild;
                else
                  for (; t; ) {
                    t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                    var r = this.checkClobberedElement(t, t.nextSibling);
                    if (r) {
                      t = r;
                      break;
                    }
                    t = this.checkClobberedElement(t, t.parentNode);
                  }
              return this.buf.join('');
            }),
            (e.prototype.startElement = function(e) {
              var t,
                n = e.nodeName.toLowerCase();
              if (!wo.hasOwnProperty(n))
                return (this.sanitizedSomething = !0), !1;
              this.buf.push('<'), this.buf.push(n);
              for (var r = e.attributes, o = 0; o < r.length; o++) {
                var i = r.item(o),
                  s = i.name,
                  a = s.toLowerCase();
                if (Eo.hasOwnProperty(a)) {
                  var u = i.value;
                  xo[a] && (u = fo(u)),
                    Co[a] &&
                      ((t = u),
                      (u = (t = String(t))
                        .split(',')
                        .map(function(e) {
                          return fo(e.trim());
                        })
                        .join(', '))),
                    this.buf.push(' ', s, '="', ko(u), '"');
                } else this.sanitizedSomething = !0;
              }
              return this.buf.push('>'), !0;
            }),
            (e.prototype.endElement = function(e) {
              var t = e.nodeName.toLowerCase();
              wo.hasOwnProperty(t) &&
                !go.hasOwnProperty(t) &&
                (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
            }),
            (e.prototype.chars = function(e) {
              this.buf.push(ko(e));
            }),
            (e.prototype.checkClobberedElement = function(e, t) {
              if (
                t &&
                (e.compareDocumentPosition(t) &
                  Node.DOCUMENT_POSITION_CONTAINED_BY) ===
                  Node.DOCUMENT_POSITION_CONTAINED_BY
              )
                throw new Error(
                  'Failed to sanitize html because the element is clobbered: ' +
                    e.outerHTML
                );
              return t;
            }),
            e
          );
        })(),
        Oo = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Ao = /([^\#-~ |!])/g;
      function ko(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Oo, function(e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(Ao, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function Io(e) {
        return 'content' in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var To = { provide: Rr, useClass: Jr, deps: [Fr] },
        No = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            (r._parent = n),
              (r._bootstrapComponents = []),
              (r.injector = r),
              (r.destroyCbs = []);
            var o = (function(e, n) {
              var r = t[ve] || null;
              return r;
            })();
            return (
              (r._bootstrapComponents = o.bootstrap),
              (r._r3Injector = (function(e, t, n) {
                return (
                  void 0 === t && (t = null),
                  void 0 === n && (n = null),
                  (t = t || Er()),
                  new Sr(e, n, t)
                );
              })(t, n, [{ provide: Fr, useValue: r }, To])),
              (r.instance = r.get(t)),
              r
            );
          }
          return (
            o(t, e),
            (t.prototype.get = function(e, t, n) {
              return (
                void 0 === t && (t = ir.THROW_IF_NOT_FOUND),
                void 0 === n && (n = kt.Default),
                e === ir || e === Fr || e === rr
                  ? this
                  : this._r3Injector.get(e, t, n)
              );
            }),
            Object.defineProperty(t.prototype, 'componentFactoryResolver', {
              get: function() {
                return this.get(Rr);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.destroy = function() {
              this.destroyCbs.forEach(function(e) {
                return e();
              }),
                (this.destroyCbs = null);
            }),
            (t.prototype.onDestroy = function(e) {
              this.destroyCbs.push(e);
            }),
            t
          );
        })(Fr);
      !(function(e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.moduleType = t), n;
        }
        o(t, e),
          (t.prototype.create = function(e) {
            return new No(this.moduleType, e);
          });
      })(zr);
      var Po = (function(e) {
          function t(t) {
            void 0 === t && (t = !1);
            var n = e.call(this) || this;
            return (n.__isAsync = t), n;
          }
          return (
            o(t, e),
            (t.prototype.emit = function(t) {
              e.prototype.next.call(this, t);
            }),
            (t.prototype.subscribe = function(t, n, r) {
              var o,
                i = function(e) {
                  return null;
                },
                s = function() {
                  return null;
                };
              t && 'object' == typeof t
                ? ((o = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return t.next(e);
                        });
                      }
                    : function(e) {
                        t.next(e);
                      }),
                  t.error &&
                    (i = this.__isAsync
                      ? function(e) {
                          setTimeout(function() {
                            return t.error(e);
                          });
                        }
                      : function(e) {
                          t.error(e);
                        }),
                  t.complete &&
                    (s = this.__isAsync
                      ? function() {
                          setTimeout(function() {
                            return t.complete();
                          });
                        }
                      : function() {
                          t.complete();
                        }))
                : ((o = this.__isAsync
                    ? function(e) {
                        setTimeout(function() {
                          return t(e);
                        });
                      }
                    : function(e) {
                        t(e);
                      }),
                  n &&
                    (i = this.__isAsync
                      ? function(e) {
                          setTimeout(function() {
                            return n(e);
                          });
                        }
                      : function(e) {
                          n(e);
                        }),
                  r &&
                    (s = this.__isAsync
                      ? function() {
                          setTimeout(function() {
                            return r();
                          });
                        }
                      : function() {
                          r();
                        }));
              var a = e.prototype.subscribe.call(this, o, i, s);
              return t instanceof _ && t.add(a), a;
            }),
            t
          );
        })(j),
        Vo = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Do(e, Ur);
            }),
            e
          );
        })(),
        Do = Jn,
        Mo = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        jo = /^url\(([^)]+)\)$/;
      Function, String, String;
      var Ro = 'ngDebugContext',
        Lo = 'ngOriginalError',
        Ho = 'ngErrorLogger';
      function Fo(e) {
        return e[Ro];
      }
      function zo(e) {
        return e[Lo];
      }
      function Bo(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        e.error.apply(e, c(t));
      }
      var Uo = (function() {
        function e() {
          this._console = console;
        }
        return (
          (e.prototype.handleError = function(e) {
            var t = this._findOriginalError(e),
              n = this._findContext(e),
              r = (function(e) {
                return e[Ho] || Bo;
              })(e);
            r(this._console, 'ERROR', e),
              t && r(this._console, 'ORIGINAL ERROR', t),
              n && r(this._console, 'ERROR CONTEXT', n);
          }),
          (e.prototype._findContext = function(e) {
            return e ? (Fo(e) ? Fo(e) : this._findContext(zo(e))) : null;
          }),
          (e.prototype._findOriginalError = function(e) {
            for (var t = zo(e); t && zo(t); ) t = zo(t);
            return t;
          }),
          e
        );
      })();
      function Go(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Zo(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      var Qo = new _e('Application Initializer'),
        Wo = (function() {
          function e(e) {
            var t = this;
            (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function(e, n) {
                (t.resolve = e), (t.reject = n);
              }));
          }
          return (
            (e.prototype.runInitializers = function() {
              var e = this;
              if (!this.initialized) {
                var t = [],
                  n = function() {
                    (e.done = !0), e.resolve();
                  };
                if (this.appInits)
                  for (var r = 0; r < this.appInits.length; r++) {
                    var o = this.appInits[r]();
                    Go(o) && t.push(o);
                  }
                Promise.all(t)
                  .then(function() {
                    n();
                  })
                  .catch(function(t) {
                    e.reject(t);
                  }),
                  0 === t.length && n(),
                  (this.initialized = !0);
              }
            }),
            e
          );
        })(),
        qo = new _e('AppId');
      function Xo() {
        return '' + Yo() + Yo() + Yo();
      }
      function Yo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var Ko = new _e('Platform Initializer'),
        $o = new _e('Platform ID'),
        Jo = new _e('appBootstrapListener'),
        ei = (function() {
          function e() {}
          return (
            (e.prototype.log = function(e) {
              console.log(e);
            }),
            (e.prototype.warn = function(e) {
              console.warn(e);
            }),
            e
          );
        })();
      function ti() {
        throw new Error('Runtime compiler is not loaded');
      }
      var ni,
        ri,
        oi = ti,
        ii = ti,
        si = ti,
        ai = ti,
        ui = (function() {
          function e() {
            (this.compileModuleSync = oi),
              (this.compileModuleAsync = ii),
              (this.compileModuleAndAllComponentsSync = si),
              (this.compileModuleAndAllComponentsAsync = ai);
          }
          return (
            (e.prototype.clearCache = function() {}),
            (e.prototype.clearCacheFor = function(e) {}),
            (e.prototype.getModuleId = function(e) {}),
            e
          );
        })(),
        li = (function() {
          return function() {};
        })();
      function ci() {
        var e = Se.wtf;
        return !(!e || !(ni = e.trace) || ((ri = ni.events), 0));
      }
      var di = ci();
      function pi(e, t) {
        return null;
      }
      var fi = di
          ? function(e, t) {
              return void 0 === t && (t = null), ri.createScope(e, t);
            }
          : function(e, t) {
              return pi;
            },
        hi = di
          ? function(e, t) {
              return ni.leaveScope(e, t), t;
            }
          : function(e, t) {
              return t;
            },
        vi = (function() {
          function e(e) {
            var t,
              n = e.enableLongStackTrace,
              r = void 0 !== n && n;
            if (
              ((this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Po(!1)),
              (this.onMicrotaskEmpty = new Po(!1)),
              (this.onStable = new Po(!1)),
              (this.onError = new Po(!1)),
              'undefined' == typeof Zone)
            )
              throw new Error('In this configuration Angular requires Zone.js');
            Zone.assertZonePatched(),
              (this._nesting = 0),
              (this._outer = this._inner = Zone.current),
              Zone.wtfZoneSpec &&
                (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
              Zone.TaskTrackingZoneSpec &&
                (this._inner = this._inner.fork(
                  new Zone.TaskTrackingZoneSpec()
                )),
              r &&
                Zone.longStackTraceZoneSpec &&
                (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
              ((t = this)._inner = t._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: function(e, n, r, o, i, s) {
                  try {
                    return bi(t), e.invokeTask(r, o, i, s);
                  } finally {
                    _i(t);
                  }
                },
                onInvoke: function(e, n, r, o, i, s, a) {
                  try {
                    return bi(t), e.invoke(r, o, i, s, a);
                  } finally {
                    _i(t);
                  }
                },
                onHasTask: function(e, n, r, o) {
                  e.hasTask(r, o),
                    n === r &&
                      ('microTask' == o.change
                        ? ((t.hasPendingMicrotasks = o.microTask), mi(t))
                        : 'macroTask' == o.change &&
                          (t.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: function(e, n, r, o) {
                  return (
                    e.handleError(r, o),
                    t.runOutsideAngular(function() {
                      return t.onError.emit(o);
                    }),
                    !1
                  );
                }
              }));
          }
          return (
            (e.isInAngularZone = function() {
              return !0 === Zone.current.get('isAngularZone');
            }),
            (e.assertInAngularZone = function() {
              if (!e.isInAngularZone())
                throw new Error(
                  'Expected to be in Angular Zone, but it is not!'
                );
            }),
            (e.assertNotInAngularZone = function() {
              if (e.isInAngularZone())
                throw new Error(
                  'Expected to not be in Angular Zone, but it is!'
                );
            }),
            (e.prototype.run = function(e, t, n) {
              return this._inner.run(e, t, n);
            }),
            (e.prototype.runTask = function(e, t, n, r) {
              var o = this._inner,
                i = o.scheduleEventTask('NgZoneEvent: ' + r, e, gi, yi, yi);
              try {
                return o.runTask(i, t, n);
              } finally {
                o.cancelTask(i);
              }
            }),
            (e.prototype.runGuarded = function(e, t, n) {
              return this._inner.runGuarded(e, t, n);
            }),
            (e.prototype.runOutsideAngular = function(e) {
              return this._outer.run(e);
            }),
            e
          );
        })();
      function yi() {}
      var gi = {};
      function mi(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(function() {
                  return e.onStable.emit(null);
                });
              } finally {
                e.isStable = !0;
              }
          }
      }
      function bi(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function _i(e) {
        e._nesting--, mi(e);
      }
      var wi,
        xi = (function() {
          function e() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Po()),
              (this.onMicrotaskEmpty = new Po()),
              (this.onStable = new Po()),
              (this.onError = new Po());
          }
          return (
            (e.prototype.run = function(e) {
              return e();
            }),
            (e.prototype.runGuarded = function(e) {
              return e();
            }),
            (e.prototype.runOutsideAngular = function(e) {
              return e();
            }),
            (e.prototype.runTask = function(e) {
              return e();
            }),
            e
          );
        })(),
        Ci = (function() {
          function e(e) {
            var t = this;
            (this._ngZone = e),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              e.run(function() {
                t.taskTrackingZone =
                  'undefined' == typeof Zone
                    ? null
                    : Zone.current.get('TaskTrackingZone');
              });
          }
          return (
            (e.prototype._watchAngularEvents = function() {
              var e = this;
              this._ngZone.onUnstable.subscribe({
                next: function() {
                  (e._didWork = !0), (e._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(function() {
                  e._ngZone.onStable.subscribe({
                    next: function() {
                      vi.assertNotInAngularZone(),
                        Ie(function() {
                          (e._isZoneStable = !0), e._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }),
            (e.prototype.increasePendingRequestCount = function() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }),
            (e.prototype.decreasePendingRequestCount = function() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }),
            (e.prototype.isStable = function() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }),
            (e.prototype._runCallbacksIfReady = function() {
              var e = this;
              if (this.isStable())
                Ie(function() {
                  for (; 0 !== e._callbacks.length; ) {
                    var t = e._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                  }
                  e._didWork = !1;
                });
              else {
                var t = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(function(e) {
                  return (
                    !e.updateCb ||
                    !e.updateCb(t) ||
                    (clearTimeout(e.timeoutId), !1)
                  );
                })),
                  (this._didWork = !0);
              }
            }),
            (e.prototype.getPendingTasks = function() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(function(e) {
                    return {
                      source: e.source,
                      creationLocation: e.creationLocation,
                      data: e.data
                    };
                  })
                : [];
            }),
            (e.prototype.addCallback = function(e, t, n) {
              var r = this,
                o = -1;
              t &&
                t > 0 &&
                (o = setTimeout(function() {
                  (r._callbacks = r._callbacks.filter(function(e) {
                    return e.timeoutId !== o;
                  })),
                    e(r._didWork, r.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: o, updateCb: n });
            }),
            (e.prototype.whenStable = function(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }),
            (e.prototype.getPendingRequestCount = function() {
              return this._pendingCount;
            }),
            (e.prototype.findProviders = function(e, t, n) {
              return [];
            }),
            e
          );
        })(),
        Ei = (function() {
          function e() {
            (this._applications = new Map()), Si.addToWindow(this);
          }
          return (
            (e.prototype.registerApplication = function(e, t) {
              this._applications.set(e, t);
            }),
            (e.prototype.unregisterApplication = function(e) {
              this._applications.delete(e);
            }),
            (e.prototype.unregisterAllApplications = function() {
              this._applications.clear();
            }),
            (e.prototype.getTestability = function(e) {
              return this._applications.get(e) || null;
            }),
            (e.prototype.getAllTestabilities = function() {
              return Array.from(this._applications.values());
            }),
            (e.prototype.getAllRootElements = function() {
              return Array.from(this._applications.keys());
            }),
            (e.prototype.findTestabilityInTree = function(e, t) {
              return (
                void 0 === t && (t = !0), Si.findTestabilityInTree(this, e, t)
              );
            }),
            s([a('design:paramtypes', [])], e)
          );
        })(),
        Si = new ((function() {
          function e() {}
          return (
            (e.prototype.addToWindow = function(e) {}),
            (e.prototype.findTestabilityInTree = function(e, t, n) {
              return null;
            }),
            e
          );
        })())(),
        Oi = new _e('AllowMultipleToken'),
        Ai = (function() {
          return function(e, t) {
            (this.name = e), (this.token = t);
          };
        })();
      function ki(e, t, n) {
        void 0 === n && (n = []);
        var r = 'Platform: ' + t,
          o = new _e(r);
        return function(t) {
          void 0 === t && (t = []);
          var i = Ii();
          if (!i || i.injector.get(Oi, !1))
            if (e) e(n.concat(t).concat({ provide: o, useValue: !0 }));
            else {
              var s = n.concat(t).concat({ provide: o, useValue: !0 });
              !(function(e) {
                if (wi && !wi.destroyed && !wi.injector.get(Oi, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                wi = e.get(Ti);
                var t = e.get(Ko, null);
                t &&
                  t.forEach(function(e) {
                    return e();
                  });
              })(ir.create({ providers: s, name: r }));
            }
          return (function(e) {
            var t = Ii();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(o);
        };
      }
      function Ii() {
        return wi && !wi.destroyed ? wi : null;
      }
      var Ti = (function() {
        function e(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          (e.prototype.bootstrapModuleFactory = function(e, t) {
            var n,
              r = this,
              o =
                'noop' === (n = t ? t.ngZone : void 0)
                  ? new xi()
                  : ('zone.js' === n ? void 0 : n) ||
                    new vi({ enableLongStackTrace: uo() }),
              i = [{ provide: vi, useValue: o }];
            return o.run(function() {
              var t = ir.create({
                  providers: i,
                  parent: r.injector,
                  name: e.moduleType.name
                }),
                n = e.create(t),
                s = n.injector.get(Uo, null);
              if (!s)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                n.onDestroy(function() {
                  return Vi(r._modules, n);
                }),
                o.runOutsideAngular(function() {
                  return o.onError.subscribe({
                    next: function(e) {
                      s.handleError(e);
                    }
                  });
                }),
                (function(e, t, o) {
                  try {
                    var i = ((s = n.injector.get(Wo)).runInitializers(),
                    s.donePromise.then(function() {
                      return r._moduleDoBootstrap(n), n;
                    }));
                    return Go(i)
                      ? i.catch(function(n) {
                          throw (t.runOutsideAngular(function() {
                            return e.handleError(n);
                          }),
                          n);
                        })
                      : i;
                  } catch (a) {
                    throw (t.runOutsideAngular(function() {
                      return e.handleError(a);
                    }),
                    a);
                  }
                  var s;
                })(s, o)
              );
            });
          }),
          (e.prototype.bootstrapModule = function(e, t) {
            var n = this;
            void 0 === t && (t = []);
            var r = Ni({}, t);
            return (function(e, t, n) {
              return e
                .get(li)
                .createCompiler([t])
                .compileModuleAsync(n);
            })(this.injector, r, e).then(function(e) {
              return n.bootstrapModuleFactory(e, r);
            });
          }),
          (e.prototype._moduleDoBootstrap = function(e) {
            var t = e.injector.get(Pi);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach(function(e) {
                return t.bootstrap(e);
              });
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  'The module ' +
                    Ne(e.instance.constructor) +
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }),
          (e.prototype.onDestroy = function(e) {
            this._destroyListeners.push(e);
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return this._injector;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.destroy = function() {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(function(e) {
              return e.destroy();
            }),
              this._destroyListeners.forEach(function(e) {
                return e();
              }),
              (this._destroyed = !0);
          }),
          Object.defineProperty(e.prototype, 'destroyed', {
            get: function() {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })();
      function Ni(e, t) {
        return Array.isArray(t) ? t.reduce(Ni, e) : i({}, e, t);
      }
      var Pi = (function() {
        function e(e, t, n, r, o, i) {
          var s = this;
          (this._zone = e),
            (this._console = t),
            (this._injector = n),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = o),
            (this._initStatus = i),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = uo()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: function() {
                s._zone.run(function() {
                  s.tick();
                });
              }
            });
          var a = new T(function(e) {
              (s._stable =
                s._zone.isStable &&
                !s._zone.hasPendingMacrotasks &&
                !s._zone.hasPendingMicrotasks),
                s._zone.runOutsideAngular(function() {
                  e.next(s._stable), e.complete();
                });
            }),
            u = new T(function(e) {
              var t;
              s._zone.runOutsideAngular(function() {
                t = s._zone.onStable.subscribe(function() {
                  vi.assertNotInAngularZone(),
                    Ie(function() {
                      s._stable ||
                        s._zone.hasPendingMacrotasks ||
                        s._zone.hasPendingMicrotasks ||
                        ((s._stable = !0), e.next(!0));
                    });
                });
              });
              var n = s._zone.onUnstable.subscribe(function() {
                vi.assertInAngularZone(),
                  s._stable &&
                    ((s._stable = !1),
                    s._zone.runOutsideAngular(function() {
                      e.next(!1);
                    }));
              });
              return function() {
                t.unsubscribe(), n.unsubscribe();
              };
            });
          this.isStable = (function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n,
              r = Number.POSITIVE_INFINITY,
              o = null,
              i = e[e.length - 1];
            return (
              (n = i) && 'function' == typeof n.schedule
                ? ((o = e.pop()),
                  e.length > 1 &&
                    'number' == typeof e[e.length - 1] &&
                    (r = e.pop()))
                : 'number' == typeof i && (r = e.pop()),
              null === o && 1 === e.length && e[0] instanceof T
                ? e[0]
                : (function(e) {
                    return (
                      void 0 === e && (e = Number.POSITIVE_INFINITY),
                      (function e(t, n, r) {
                        return (
                          void 0 === r && (r = Number.POSITIVE_INFINITY),
                          'function' == typeof n
                            ? function(o) {
                                return o.pipe(
                                  e(function(e, r) {
                                    return ee(t(e, r)).pipe(
                                      Y(function(t, o) {
                                        return n(e, t, r, o);
                                      })
                                    );
                                  }, r)
                                );
                              }
                            : ('number' == typeof n && (r = n),
                              function(e) {
                                return e.lift(new te(t, r));
                              })
                        );
                      })(re, e)
                    );
                  })(r)(J(e, o))
            );
          })(
            a,
            u.pipe(function(e) {
              return oe()(
                ((t = ce),
                function(e) {
                  var n;
                  n =
                    'function' == typeof t
                      ? t
                      : function() {
                          return t;
                        };
                  var r = Object.create(e, ue);
                  return (r.source = e), (r.subjectFactory = n), r;
                })(e)
              );
              var t;
            })
          );
        }
        var t;
        return (
          (t = e),
          (e.prototype.bootstrap = function(e, t) {
            var n,
              r = this;
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            (n =
              e instanceof Pr
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            var o = n instanceof Hr ? null : this._injector.get(Fr),
              i = n.create(ir.NULL, [], t || n.selector, o);
            i.onDestroy(function() {
              r._unloadComponent(i);
            });
            var s = i.injector.get(Ci, null);
            return (
              s &&
                i.injector
                  .get(Ei)
                  .registerApplication(i.location.nativeElement, s),
              this._loadComponent(i),
              uo() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }),
          (e.prototype.tick = function() {
            var e = this;
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            var n = t._tickScope();
            try {
              (this._runningTick = !0),
                this._views.forEach(function(e) {
                  return e.detectChanges();
                }),
                this._enforceNoNewChanges &&
                  this._views.forEach(function(e) {
                    return e.checkNoChanges();
                  });
            } catch (r) {
              this._zone.runOutsideAngular(function() {
                return e._exceptionHandler.handleError(r);
              });
            } finally {
              (this._runningTick = !1), hi(n);
            }
          }),
          (e.prototype.attachView = function(e) {
            var t = e;
            this._views.push(t), t.attachToAppRef(this);
          }),
          (e.prototype.detachView = function(e) {
            var t = e;
            Vi(this._views, t), t.detachFromAppRef();
          }),
          (e.prototype._loadComponent = function(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Jo, [])
                .concat(this._bootstrapListeners)
                .forEach(function(t) {
                  return t(e);
                });
          }),
          (e.prototype._unloadComponent = function(e) {
            this.detachView(e.hostView), Vi(this.components, e);
          }),
          (e.prototype.ngOnDestroy = function() {
            this._views.slice().forEach(function(e) {
              return e.destroy();
            });
          }),
          Object.defineProperty(e.prototype, 'viewCount', {
            get: function() {
              return this._views.length;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e._tickScope = fi('ApplicationRef#tick()')),
          e
        );
      })();
      function Vi(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Di,
        Mi = (function() {
          function e() {
            (this.dirty = !0),
              (this._results = []),
              (this.changes = new Po()),
              (this.length = 0);
          }
          return (
            (e.prototype.map = function(e) {
              return this._results.map(e);
            }),
            (e.prototype.filter = function(e) {
              return this._results.filter(e);
            }),
            (e.prototype.find = function(e) {
              return this._results.find(e);
            }),
            (e.prototype.reduce = function(e, t) {
              return this._results.reduce(e, t);
            }),
            (e.prototype.forEach = function(e) {
              this._results.forEach(e);
            }),
            (e.prototype.some = function(e) {
              return this._results.some(e);
            }),
            (e.prototype.toArray = function() {
              return this._results.slice();
            }),
            (e.prototype[ke()] = function() {
              return this._results[ke()]();
            }),
            (e.prototype.toString = function() {
              return this._results.toString();
            }),
            (e.prototype.reset = function(e) {
              (this._results = (function e(t) {
                return t.reduce(function(t, n) {
                  var r = Array.isArray(n) ? e(n) : n;
                  return t.concat(r);
                }, []);
              })(e)),
                (this.dirty = !1),
                (this.length = this._results.length),
                (this.last = this._results[this.length - 1]),
                (this.first = this._results[0]);
            }),
            (e.prototype.notifyOnChanges = function() {
              this.changes.emit(this);
            }),
            (e.prototype.setDirty = function() {
              this.dirty = !0;
            }),
            (e.prototype.destroy = function() {
              this.changes.complete(), this.changes.unsubscribe();
            }),
            e
          );
        })(),
        ji = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Ri(e, Ur);
            }),
            e
          );
        })(),
        Ri = Jn,
        Li = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Hi();
            }),
            e
          );
        })(),
        Hi = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        },
        Fi = (o(function() {
          return (null !== Di && Di.apply(this, arguments)) || this;
        }, (Di = Li)),
        (function() {
          return function(e, t) {
            (this.name = e), (this.callback = t);
          };
        })()),
        zi = (function() {
          function e(e, t, n) {
            (this.listeners = []),
              (this.parent = null),
              (this._debugContext = n),
              (this.nativeNode = e),
              t && t instanceof Bi && t.addChild(this);
          }
          return (
            Object.defineProperty(e.prototype, 'injector', {
              get: function() {
                return this._debugContext.injector;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'componentInstance', {
              get: function() {
                return this._debugContext.component;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'context', {
              get: function() {
                return this._debugContext.context;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'references', {
              get: function() {
                return this._debugContext.references;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'providerTokens', {
              get: function() {
                return this._debugContext.providerTokens;
              },
              enumerable: !0,
              configurable: !0
            }),
            e
          );
        })(),
        Bi = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t, n, r) || this;
            return (
              (o.properties = {}),
              (o.attributes = {}),
              (o.classes = {}),
              (o.styles = {}),
              (o.childNodes = []),
              (o.nativeElement = t),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.addChild = function(e) {
              e && (this.childNodes.push(e), (e.parent = this));
            }),
            (t.prototype.removeChild = function(e) {
              var t = this.childNodes.indexOf(e);
              -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
            }),
            (t.prototype.insertChildrenAfter = function(e, t) {
              var n,
                r = this,
                o = this.childNodes.indexOf(e);
              -1 !== o &&
                ((n = this.childNodes).splice.apply(n, c([o + 1, 0], t)),
                t.forEach(function(t) {
                  t.parent && t.parent.removeChild(t), (e.parent = r);
                }));
            }),
            (t.prototype.insertBefore = function(e, t) {
              var n = this.childNodes.indexOf(e);
              -1 === n
                ? this.addChild(t)
                : (t.parent && t.parent.removeChild(t),
                  (t.parent = this),
                  this.childNodes.splice(n, 0, t));
            }),
            (t.prototype.query = function(e) {
              return this.queryAll(e)[0] || null;
            }),
            (t.prototype.queryAll = function(e) {
              var t = [];
              return (
                (function e(t, n, r) {
                  t.childNodes.forEach(function(t) {
                    t instanceof Bi && (n(t) && r.push(t), e(t, n, r));
                  });
                })(this, e, t),
                t
              );
            }),
            (t.prototype.queryAllNodes = function(e) {
              var t = [];
              return (
                (function e(t, n, r) {
                  t instanceof Bi &&
                    t.childNodes.forEach(function(t) {
                      n(t) && r.push(t), t instanceof Bi && e(t, n, r);
                    });
                })(this, e, t),
                t
              );
            }),
            Object.defineProperty(t.prototype, 'children', {
              get: function() {
                return this.childNodes.filter(function(e) {
                  return e instanceof t;
                });
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.triggerEventHandler = function(e, t) {
              this.listeners.forEach(function(n) {
                n.name == e && n.callback(t);
              });
            }),
            t
          );
        })(zi),
        Ui = new Map(),
        Gi = function(e) {
          return Ui.get(e) || null;
        };
      function Zi(e) {
        Ui.set(e.nativeNode, e);
      }
      var Qi = (function() {
          function e() {}
          return (
            (e.prototype.supports = function(e) {
              return wn(e);
            }),
            (e.prototype.create = function(e) {
              return new qi(e);
            }),
            e
          );
        })(),
        Wi = function(e, t) {
          return t;
        },
        qi = (function() {
          function e(e) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = e || Wi);
          }
          return (
            (e.prototype.forEachItem = function(e) {
              var t;
              for (t = this._itHead; null !== t; t = t._next) e(t);
            }),
            (e.prototype.forEachOperation = function(e) {
              for (
                var t = this._itHead, n = this._removalsHead, r = 0, o = null;
                t || n;

              ) {
                var i = !n || (t && t.currentIndex < $i(n, r, o)) ? t : n,
                  s = $i(i, r, o),
                  a = i.currentIndex;
                if (i === n) r--, (n = n._nextRemoved);
                else if (((t = t._next), null == i.previousIndex)) r++;
                else {
                  o || (o = []);
                  var u = s - r,
                    l = a - r;
                  if (u != l) {
                    for (var c = 0; c < u; c++) {
                      var d = c < o.length ? o[c] : (o[c] = 0),
                        p = d + c;
                      l <= p && p < u && (o[c] = d + 1);
                    }
                    o[i.previousIndex] = l - u;
                  }
                }
                s !== a && e(i, s, a);
              }
            }),
            (e.prototype.forEachPreviousItem = function(e) {
              var t;
              for (t = this._previousItHead; null !== t; t = t._nextPrevious)
                e(t);
            }),
            (e.prototype.forEachAddedItem = function(e) {
              var t;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
            }),
            (e.prototype.forEachMovedItem = function(e) {
              var t;
              for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
            }),
            (e.prototype.forEachRemovedItem = function(e) {
              var t;
              for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
            }),
            (e.prototype.forEachIdentityChange = function(e) {
              var t;
              for (
                t = this._identityChangesHead;
                null !== t;
                t = t._nextIdentityChange
              )
                e(t);
            }),
            (e.prototype.diff = function(e) {
              if ((null == e && (e = []), !wn(e)))
                throw new Error(
                  "Error trying to diff '" +
                    Ne(e) +
                    "'. Only arrays and iterables are allowed"
                );
              return this.check(e) ? this : null;
            }),
            (e.prototype.onDestroy = function() {}),
            (e.prototype.check = function(e) {
              var t = this;
              this._reset();
              var n,
                r,
                o,
                i = this._itHead,
                s = !1;
              if (Array.isArray(e)) {
                this.length = e.length;
                for (var a = 0; a < this.length; a++)
                  (o = this._trackByFn(a, (r = e[a]))),
                    null !== i && Te(i.trackById, o)
                      ? (s && (i = this._verifyReinsertion(i, r, o, a)),
                        Te(i.item, r) || this._addIdentityChange(i, r))
                      : ((i = this._mismatch(i, r, o, a)), (s = !0)),
                    (i = i._next);
              } else
                (n = 0),
                  (function(e, t) {
                    if (Array.isArray(e))
                      for (var n = 0; n < e.length; n++) t(e[n]);
                    else
                      for (
                        var r = e[ke()](), o = void 0;
                        !(o = r.next()).done;

                      )
                        t(o.value);
                  })(e, function(e) {
                    (o = t._trackByFn(n, e)),
                      null !== i && Te(i.trackById, o)
                        ? (s && (i = t._verifyReinsertion(i, e, o, n)),
                          Te(i.item, e) || t._addIdentityChange(i, e))
                        : ((i = t._mismatch(i, e, o, n)), (s = !0)),
                      (i = i._next),
                      n++;
                  }),
                  (this.length = n);
              return this._truncate(i), (this.collection = e), this.isDirty;
            }),
            Object.defineProperty(e.prototype, 'isDirty', {
              get: function() {
                return (
                  null !== this._additionsHead ||
                  null !== this._movesHead ||
                  null !== this._removalsHead ||
                  null !== this._identityChangesHead
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype._reset = function() {
              if (this.isDirty) {
                var e = void 0,
                  t = void 0;
                for (
                  e = this._previousItHead = this._itHead;
                  null !== e;
                  e = e._next
                )
                  e._nextPrevious = e._next;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                  e.previousIndex = e.currentIndex;
                for (
                  this._additionsHead = this._additionsTail = null,
                    e = this._movesHead;
                  null !== e;
                  e = t
                )
                  (e.previousIndex = e.currentIndex), (t = e._nextMoved);
                (this._movesHead = this._movesTail = null),
                  (this._removalsHead = this._removalsTail = null),
                  (this._identityChangesHead = this._identityChangesTail = null);
              }
            }),
            (e.prototype._mismatch = function(e, t, n, r) {
              var o;
              return (
                null === e
                  ? (o = this._itTail)
                  : ((o = e._prev), this._remove(e)),
                null !==
                (e =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
                  ? (Te(e.item, t) || this._addIdentityChange(e, t),
                    this._moveAfter(e, o, r))
                  : null !==
                    (e =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null))
                  ? (Te(e.item, t) || this._addIdentityChange(e, t),
                    this._reinsertAfter(e, o, r))
                  : (e = this._addAfter(new Xi(t, n), o, r)),
                e
              );
            }),
            (e.prototype._verifyReinsertion = function(e, t, n, r) {
              var o =
                null === this._unlinkedRecords
                  ? null
                  : this._unlinkedRecords.get(n, null);
              return (
                null !== o
                  ? (e = this._reinsertAfter(o, e._prev, r))
                  : e.currentIndex != r &&
                    ((e.currentIndex = r), this._addToMoves(e, r)),
                e
              );
            }),
            (e.prototype._truncate = function(e) {
              for (; null !== e; ) {
                var t = e._next;
                this._addToRemovals(this._unlink(e)), (e = t);
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail &&
                  (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail &&
                  (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail &&
                  (this._identityChangesTail._nextIdentityChange = null);
            }),
            (e.prototype._reinsertAfter = function(e, t, n) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
              var r = e._prevRemoved,
                o = e._nextRemoved;
              return (
                null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
                null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
                this._insertAfter(e, t, n),
                this._addToMoves(e, n),
                e
              );
            }),
            (e.prototype._moveAfter = function(e, t, n) {
              return (
                this._unlink(e),
                this._insertAfter(e, t, n),
                this._addToMoves(e, n),
                e
              );
            }),
            (e.prototype._addAfter = function(e, t, n) {
              return (
                this._insertAfter(e, t, n),
                (this._additionsTail =
                  null === this._additionsTail
                    ? (this._additionsHead = e)
                    : (this._additionsTail._nextAdded = e)),
                e
              );
            }),
            (e.prototype._insertAfter = function(e, t, n) {
              var r = null === t ? this._itHead : t._next;
              return (
                (e._next = r),
                (e._prev = t),
                null === r ? (this._itTail = e) : (r._prev = e),
                null === t ? (this._itHead = e) : (t._next = e),
                null === this._linkedRecords &&
                  (this._linkedRecords = new Ki()),
                this._linkedRecords.put(e),
                (e.currentIndex = n),
                e
              );
            }),
            (e.prototype._remove = function(e) {
              return this._addToRemovals(this._unlink(e));
            }),
            (e.prototype._unlink = function(e) {
              null !== this._linkedRecords && this._linkedRecords.remove(e);
              var t = e._prev,
                n = e._next;
              return (
                null === t ? (this._itHead = n) : (t._next = n),
                null === n ? (this._itTail = t) : (n._prev = t),
                e
              );
            }),
            (e.prototype._addToMoves = function(e, t) {
              return e.previousIndex === t
                ? e
                : ((this._movesTail =
                    null === this._movesTail
                      ? (this._movesHead = e)
                      : (this._movesTail._nextMoved = e)),
                  e);
            }),
            (e.prototype._addToRemovals = function(e) {
              return (
                null === this._unlinkedRecords &&
                  (this._unlinkedRecords = new Ki()),
                this._unlinkedRecords.put(e),
                (e.currentIndex = null),
                (e._nextRemoved = null),
                null === this._removalsTail
                  ? ((this._removalsTail = this._removalsHead = e),
                    (e._prevRemoved = null))
                  : ((e._prevRemoved = this._removalsTail),
                    (this._removalsTail = this._removalsTail._nextRemoved = e)),
                e
              );
            }),
            (e.prototype._addIdentityChange = function(e, t) {
              return (
                (e.item = t),
                (this._identityChangesTail =
                  null === this._identityChangesTail
                    ? (this._identityChangesHead = e)
                    : (this._identityChangesTail._nextIdentityChange = e)),
                e
              );
            }),
            e
          );
        })(),
        Xi = (function() {
          return function(e, t) {
            (this.item = e),
              (this.trackById = t),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          };
        })(),
        Yi = (function() {
          function e() {
            (this._head = null), (this._tail = null);
          }
          return (
            (e.prototype.add = function(e) {
              null === this._head
                ? ((this._head = this._tail = e),
                  (e._nextDup = null),
                  (e._prevDup = null))
                : ((this._tail._nextDup = e),
                  (e._prevDup = this._tail),
                  (e._nextDup = null),
                  (this._tail = e));
            }),
            (e.prototype.get = function(e, t) {
              var n;
              for (n = this._head; null !== n; n = n._nextDup)
                if ((null === t || t <= n.currentIndex) && Te(n.trackById, e))
                  return n;
              return null;
            }),
            (e.prototype.remove = function(e) {
              var t = e._prevDup,
                n = e._nextDup;
              return (
                null === t ? (this._head = n) : (t._nextDup = n),
                null === n ? (this._tail = t) : (n._prevDup = t),
                null === this._head
              );
            }),
            e
          );
        })(),
        Ki = (function() {
          function e() {
            this.map = new Map();
          }
          return (
            (e.prototype.put = function(e) {
              var t = e.trackById,
                n = this.map.get(t);
              n || ((n = new Yi()), this.map.set(t, n)), n.add(e);
            }),
            (e.prototype.get = function(e, t) {
              var n = this.map.get(e);
              return n ? n.get(e, t) : null;
            }),
            (e.prototype.remove = function(e) {
              var t = e.trackById;
              return this.map.get(t).remove(e) && this.map.delete(t), e;
            }),
            Object.defineProperty(e.prototype, 'isEmpty', {
              get: function() {
                return 0 === this.map.size;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.clear = function() {
              this.map.clear();
            }),
            e
          );
        })();
      function $i(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      var Ji = (function() {
          function e() {}
          return (
            (e.prototype.supports = function(e) {
              return e instanceof Map || xn(e);
            }),
            (e.prototype.create = function() {
              return new es();
            }),
            e
          );
        })(),
        es = (function() {
          function e() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            Object.defineProperty(e.prototype, 'isDirty', {
              get: function() {
                return (
                  null !== this._additionsHead ||
                  null !== this._changesHead ||
                  null !== this._removalsHead
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.forEachItem = function(e) {
              var t;
              for (t = this._mapHead; null !== t; t = t._next) e(t);
            }),
            (e.prototype.forEachPreviousItem = function(e) {
              var t;
              for (t = this._previousMapHead; null !== t; t = t._nextPrevious)
                e(t);
            }),
            (e.prototype.forEachChangedItem = function(e) {
              var t;
              for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
            }),
            (e.prototype.forEachAddedItem = function(e) {
              var t;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
            }),
            (e.prototype.forEachRemovedItem = function(e) {
              var t;
              for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
            }),
            (e.prototype.diff = function(e) {
              if (e) {
                if (!(e instanceof Map || xn(e)))
                  throw new Error(
                    "Error trying to diff '" +
                      Ne(e) +
                      "'. Only maps and objects are allowed"
                  );
              } else e = new Map();
              return this.check(e) ? this : null;
            }),
            (e.prototype.onDestroy = function() {}),
            (e.prototype.check = function(e) {
              var t = this;
              this._reset();
              var n = this._mapHead;
              if (
                ((this._appendAfter = null),
                this._forEach(e, function(e, r) {
                  if (n && n.key === r)
                    t._maybeAddToChanges(n, e),
                      (t._appendAfter = n),
                      (n = n._next);
                  else {
                    var o = t._getOrCreateRecordForKey(r, e);
                    n = t._insertBeforeOrAppend(n, o);
                  }
                }),
                n)
              ) {
                n._prev && (n._prev._next = null), (this._removalsHead = n);
                for (var r = n; null !== r; r = r._nextRemoved)
                  r === this._mapHead && (this._mapHead = null),
                    this._records.delete(r.key),
                    (r._nextRemoved = r._next),
                    (r.previousValue = r.currentValue),
                    (r.currentValue = null),
                    (r._prev = null),
                    (r._next = null);
              }
              return (
                this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
              );
            }),
            (e.prototype._insertBeforeOrAppend = function(e, t) {
              if (e) {
                var n = e._prev;
                return (
                  (t._next = e),
                  (t._prev = n),
                  (e._prev = t),
                  n && (n._next = t),
                  e === this._mapHead && (this._mapHead = t),
                  (this._appendAfter = e),
                  e
                );
              }
              return (
                this._appendAfter
                  ? ((this._appendAfter._next = t),
                    (t._prev = this._appendAfter))
                  : (this._mapHead = t),
                (this._appendAfter = t),
                null
              );
            }),
            (e.prototype._getOrCreateRecordForKey = function(e, t) {
              if (this._records.has(e)) {
                var n = this._records.get(e);
                this._maybeAddToChanges(n, t);
                var r = n._prev,
                  o = n._next;
                return (
                  r && (r._next = o),
                  o && (o._prev = r),
                  (n._next = null),
                  (n._prev = null),
                  n
                );
              }
              var i = new ts(e);
              return (
                this._records.set(e, i),
                (i.currentValue = t),
                this._addToAdditions(i),
                i
              );
            }),
            (e.prototype._reset = function() {
              if (this.isDirty) {
                var e = void 0;
                for (
                  this._previousMapHead = this._mapHead,
                    e = this._previousMapHead;
                  null !== e;
                  e = e._next
                )
                  e._nextPrevious = e._next;
                for (e = this._changesHead; null !== e; e = e._nextChanged)
                  e.previousValue = e.currentValue;
                for (e = this._additionsHead; null != e; e = e._nextAdded)
                  e.previousValue = e.currentValue;
                (this._changesHead = this._changesTail = null),
                  (this._additionsHead = this._additionsTail = null),
                  (this._removalsHead = null);
              }
            }),
            (e.prototype._maybeAddToChanges = function(e, t) {
              Te(t, e.currentValue) ||
                ((e.previousValue = e.currentValue),
                (e.currentValue = t),
                this._addToChanges(e));
            }),
            (e.prototype._addToAdditions = function(e) {
              null === this._additionsHead
                ? (this._additionsHead = this._additionsTail = e)
                : ((this._additionsTail._nextAdded = e),
                  (this._additionsTail = e));
            }),
            (e.prototype._addToChanges = function(e) {
              null === this._changesHead
                ? (this._changesHead = this._changesTail = e)
                : ((this._changesTail._nextChanged = e),
                  (this._changesTail = e));
            }),
            (e.prototype._forEach = function(e, t) {
              e instanceof Map
                ? e.forEach(t)
                : Object.keys(e).forEach(function(n) {
                    return t(e[n], n);
                  });
            }),
            e
          );
        })(),
        ts = (function() {
          return function(e) {
            (this.key = e),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          };
        })(),
        ns = (function() {
          function e(e) {
            this.factories = e;
          }
          return (
            (e.create = function(t, n) {
              if (null != n) {
                var r = n.factories.slice();
                t = t.concat(r);
              }
              return new e(t);
            }),
            (e.extend = function(t) {
              return {
                provide: e,
                useFactory: function(n) {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new At(), new St()]]
              };
            }),
            (e.prototype.find = function(e) {
              var t,
                n = this.factories.find(function(t) {
                  return t.supports(e);
                });
              if (null != n) return n;
              throw new Error(
                "Cannot find a differ supporting object '" +
                  e +
                  "' of type '" +
                  ((t = e).name || typeof t) +
                  "'"
              );
            }),
            (e.ngInjectableDef = ge({
              providedIn: 'root',
              factory: function() {
                return new e([new Qi()]);
              }
            })),
            e
          );
        })(),
        rs = (function() {
          function e(e) {
            this.factories = e;
          }
          return (
            (e.create = function(t, n) {
              if (n) {
                var r = n.factories.slice();
                t = t.concat(r);
              }
              return new e(t);
            }),
            (e.extend = function(t) {
              return {
                provide: e,
                useFactory: function(n) {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new At(), new St()]]
              };
            }),
            (e.prototype.find = function(e) {
              var t = this.factories.find(function(t) {
                return t.supports(e);
              });
              if (t) return t;
              throw new Error(
                "Cannot find a differ supporting object '" + e + "'"
              );
            }),
            (e.ngInjectableDef = ge({
              providedIn: 'root',
              factory: function() {
                return new e([new Ji()]);
              }
            })),
            e
          );
        })(),
        os = [new Ji()],
        is = new ns([new Qi()]),
        ss = new rs(os),
        as = ki(null, 'core', [
          { provide: $o, useValue: 'unknown' },
          { provide: Ti, deps: [ir] },
          { provide: Ei, deps: [] },
          { provide: ei, deps: [] }
        ]),
        us = new _e('LocaleId');
      function ls() {
        return is;
      }
      function cs() {
        return ss;
      }
      function ds(e) {
        return e || 'en-US';
      }
      var ps = (function() {
        return function(e) {};
      })();
      function fs(e, t, n) {
        var r = e.state,
          o = 1792 & r;
        return o === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : o === n;
      }
      function hs(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function vs(e, t) {
        return e.nodes[t];
      }
      function ys(e, t) {
        return e.nodes[t];
      }
      function gs(e, t) {
        return e.nodes[t];
      }
      function ms(e, t) {
        return e.nodes[t];
      }
      function bs(e, t) {
        return e.nodes[t];
      }
      var _s = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0
      };
      function ws(e, t, n, r) {
        var o =
          "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" +
          t +
          "'. Current value: '" +
          n +
          "'.";
        return (
          r &&
            (o +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(e, t) {
            var n = new Error(e);
            return xs(n, t), n;
          })(o, e)
        );
      }
      function xs(e, t) {
        (e[Ro] = t), (e[Ho] = t.logError.bind(t));
      }
      function Cs(e) {
        return new Error(
          'ViewDestroyedError: Attempt to use a destroyed view: ' + e
        );
      }
      var Es = function() {},
        Ss = new Map();
      function Os(e) {
        var t = Ss.get(e);
        return t || ((t = Ne(e) + '_' + Ss.size), Ss.set(e, t)), t;
      }
      var As = '$$undefined',
        ks = '$$empty';
      function Is(e) {
        return {
          id: As,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data
        };
      }
      var Ts = 0;
      function Ns(e, t, n, r) {
        return !(!(2 & e.state) && Te(e.oldValues[t.bindingIndex + n], r));
      }
      function Ps(e, t, n, r) {
        return !!Ns(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function Vs(e, t, n, r) {
        var o = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !mn(o, r)) {
          var i = t.bindings[n].name;
          throw ws(
            _s.createDebugContext(e, t.nodeIndex),
            i + ': ' + o,
            i + ': ' + r,
            0 != (1 & e.state)
          );
        }
      }
      function Ds(e) {
        for (var t = e; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function Ms(e, t) {
        for (var n = e; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function js(e, t, n, r) {
        try {
          return (
            Ds(33554432 & e.def.nodes[t].flags ? ys(e, t).componentView : e),
            _s.handleEvent(e, t, n, r)
          );
        } catch (o) {
          e.root.errorHandler.handleError(o);
        }
      }
      function Rs(e) {
        return e.parent ? ys(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function Ls(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function Hs(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return ys(e, t.nodeIndex).renderElement;
          case 2:
            return vs(e, t.nodeIndex).renderText;
        }
      }
      function Fs(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function zs(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function Bs(e) {
        var t = {},
          n = 0,
          r = {};
        return (
          e &&
            e.forEach(function(e) {
              var o = l(e, 2),
                i = o[0],
                s = o[1];
              'number' == typeof i
                ? ((t[i] = s),
                  (n |= (function(e) {
                    return 1 << e % 32;
                  })(i)))
                : (r[i] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function Us(e, t) {
        return e.map(function(e) {
          var n, r, o;
          return (
            Array.isArray(e)
              ? ((o = (n = l(e, 2))[0]), (r = n[1]))
              : ((o = 0), (r = e)),
            r &&
              ('function' == typeof r || 'object' == typeof r) &&
              t &&
              Object.defineProperty(r, er, { value: t, configurable: !0 }),
            { flags: o, token: r, tokenKey: Os(r) }
          );
        });
      }
      function Gs(e, t, n) {
        var r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Me.Native)
            ? ys(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      var Zs = new WeakMap();
      function Qs(e) {
        var t = Zs.get(e);
        return (
          t ||
            (((t = e(function() {
              return Es;
            })).factory = e),
            Zs.set(e, t)),
          t
        );
      }
      function Ws(e, t, n, r, o) {
        3 === t && (n = e.renderer.parentNode(Hs(e, e.def.lastRenderRootNode))),
          qs(e, t, 0, e.def.nodes.length - 1, n, r, o);
      }
      function qs(e, t, n, r, o, i, s) {
        for (var a = n; a <= r; a++) {
          var u = e.def.nodes[a];
          11 & u.flags && Ys(e, u, t, o, i, s), (a += u.childCount);
        }
      }
      function Xs(e, t, n, r, o, i) {
        for (var s = e; s && !Fs(s); ) s = s.parent;
        for (
          var a = s.parent,
            u = Ls(s),
            l = u.nodeIndex + u.childCount,
            c = u.nodeIndex + 1;
          c <= l;
          c++
        ) {
          var d = a.def.nodes[c];
          d.ngContentIndex === t && Ys(a, d, n, r, o, i), (c += d.childCount);
        }
        if (!a.parent) {
          var p = e.root.projectableNodes[t];
          if (p) for (c = 0; c < p.length; c++) Ks(e, p[c], n, r, o, i);
        }
      }
      function Ys(e, t, n, r, o, i) {
        if (8 & t.flags) Xs(e, t.ngContent.index, n, r, o, i);
        else {
          var s = Hs(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && Ks(e, s, n, r, o, i),
                32 & t.bindingFlags &&
                  Ks(ys(e, t.nodeIndex).componentView, s, n, r, o, i))
              : Ks(e, s, n, r, o, i),
            16777216 & t.flags)
          )
            for (
              var a = ys(e, t.nodeIndex).viewContainer._embeddedViews, u = 0;
              u < a.length;
              u++
            )
              Ws(a[u], n, r, o, i);
          1 & t.flags &&
            !t.element.name &&
            qs(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
        }
      }
      function Ks(e, t, n, r, o, i) {
        var s = e.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, t);
            break;
          case 2:
            s.insertBefore(r, t, o);
            break;
          case 3:
            s.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      var $s = /^:([^:]+):(.+)$/;
      function Js(e) {
        if (':' === e[0]) {
          var t = e.match($s);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function ea(e) {
        for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      function ta(e, t, n, r, o, i) {
        e |= 1;
        var s = Bs(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: s.matchedQueries,
          matchedQueryIds: s.matchedQueryIds,
          references: s.references,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? Qs(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || Es
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function na(e, t, n, r, o, i, s, a, u, c, d, p) {
        var f;
        void 0 === s && (s = []), c || (c = Es);
        var h = Bs(n),
          v = h.matchedQueries,
          y = h.references,
          g = h.matchedQueryIds,
          m = null,
          b = null;
        i && ((m = (f = l(Js(i), 2))[0]), (b = f[1])), (a = a || []);
        for (var _ = new Array(a.length), w = 0; w < a.length; w++) {
          var x = l(a[w], 3),
            C = x[0],
            E = x[2],
            S = l(Js(x[1]), 2),
            O = S[0],
            A = S[1],
            k = void 0,
            I = void 0;
          switch (15 & C) {
            case 4:
              I = E;
              break;
            case 1:
            case 8:
              k = E;
          }
          _[w] = {
            flags: C,
            ns: O,
            name: A,
            nonMinifiedName: A,
            securityContext: k,
            suffix: I
          };
        }
        u = u || [];
        var T = new Array(u.length);
        for (w = 0; w < u.length; w++) {
          var N = l(u[w], 2);
          T[w] = { type: 0, target: N[0], eventName: N[1], propName: null };
        }
        var P = (s = s || []).map(function(e) {
          var t = l(e, 2),
            n = t[1],
            r = l(Js(t[0]), 2);
          return [r[0], r[1], n];
        });
        return (
          (p = (function(e) {
            if (e && e.id === As) {
              var t =
                (null != e.encapsulation && e.encapsulation !== Me.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? 'c' + Ts++ : ks;
            }
            return e && e.id === ks && (e = null), e || null;
          })(p)),
          d && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: v,
            matchedQueryIds: g,
            references: y,
            ngContentIndex: r,
            childCount: o,
            bindings: _,
            bindingFlags: ea(_),
            outputs: T,
            element: {
              ns: m,
              name: b,
              attrs: P,
              template: null,
              componentProvider: null,
              componentView: d || null,
              componentRendererType: p,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Es
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function ra(e, t, n) {
        var r,
          o = n.element,
          i = e.root.selectorOrNode,
          s = e.renderer;
        if (e.parent || !i) {
          r = o.name ? s.createElement(o.name, o.ns) : s.createComment('');
          var a = Gs(e, t, n);
          a && s.appendChild(a, r);
        } else
          r = s.selectRootElement(
            i,
            !!o.componentRendererType &&
              o.componentRendererType.encapsulation === Me.ShadowDom
          );
        if (o.attrs)
          for (var u = 0; u < o.attrs.length; u++) {
            var c = l(o.attrs[u], 3);
            s.setAttribute(r, c[1], c[2], c[0]);
          }
        return r;
      }
      function oa(e, t, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o],
            s = ia(
              e,
              n.nodeIndex,
              ((d = i.eventName), (c = i.target) ? c + ':' + d : d)
            ),
            a = i.target,
            u = e;
          'component' === i.target && ((a = null), (u = t));
          var l = u.renderer.listen(a || r, i.eventName, s);
          e.disposables[n.outputIndex + o] = l;
        }
        var c, d;
      }
      function ia(e, t, n) {
        return function(r) {
          return js(e, t, n, r);
        };
      }
      function sa(e, t, n, r) {
        if (!Ps(e, t, n, r)) return !1;
        var o = t.bindings[n],
          i = ys(e, t.nodeIndex),
          s = i.renderElement,
          a = o.name;
        switch (15 & o.flags) {
          case 1:
            !(function(e, t, n, r, o, i) {
              var s = t.securityContext,
                a = s ? e.root.sanitizer.sanitize(s, i) : i;
              a = null != a ? a.toString() : null;
              var u = e.renderer;
              null != i
                ? u.setAttribute(n, o, a, r)
                : u.removeAttribute(n, o, r);
            })(e, o, s, o.ns, a, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              var o = e.renderer;
              r ? o.addClass(t, n) : o.removeClass(t, n);
            })(e, s, a, r);
            break;
          case 4:
            !(function(e, t, n, r, o) {
              var i = e.root.sanitizer.sanitize(Yr.STYLE, o);
              if (null != i) {
                i = i.toString();
                var s = t.suffix;
                null != s && (i += s);
              } else i = null;
              var a = e.renderer;
              null != i ? a.setStyle(n, r, i) : a.removeStyle(n, r);
            })(e, o, s, a, r);
            break;
          case 8:
            !(function(e, t, n, r, o) {
              var i = t.securityContext,
                s = i ? e.root.sanitizer.sanitize(i, o) : o;
              e.renderer.setProperty(n, r, s);
            })(
              33554432 & t.flags && 32 & o.flags ? i.componentView : e,
              o,
              s,
              a,
              r
            );
        }
        return !0;
      }
      var aa = new Object(),
        ua = Os(ir),
        la = Os(rr),
        ca = Os(Fr);
      function da(e, t, n, r) {
        return (
          (n = De(n)),
          { index: -1, deps: Us(r, Ne(t)), flags: e, token: t, value: n }
        );
      }
      function pa(e, t, n) {
        void 0 === n && (n = ir.THROW_IF_NOT_FOUND);
        var r,
          o,
          i = Tt(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          var s = t.tokenKey;
          switch (s) {
            case ua:
            case la:
            case ca:
              return e;
          }
          var a,
            u = e._def.providersByKey[s];
          if (u) {
            var l = e._providers[u.index];
            return (
              void 0 === l && (l = e._providers[u.index] = fa(e, u)),
              l === aa ? void 0 : l
            );
          }
          if (
            (a = me(t.token)) &&
            ((r = e),
            null != (o = a).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(o.providedIn) > -1;
              })(r) ||
                ('root' === o.providedIn && r._def.isRoot)))
          ) {
            var c = e._providers.length;
            return (
              (e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: c,
                token: t.token
              }),
              (e._providers[c] = aa),
              (e._providers[c] = fa(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Tt(i);
        }
      }
      function fa(e, t) {
        var n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(pa(e, n[0]));
                case 2:
                  return new t(pa(e, n[0]), pa(e, n[1]));
                case 3:
                  return new t(pa(e, n[0]), pa(e, n[1]), pa(e, n[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++)
                    o[i] = pa(e, n[i]);
                  return new (t.bind.apply(t, c([void 0], o)))();
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(pa(e, n[0]));
                case 2:
                  return t(pa(e, n[0]), pa(e, n[1]));
                case 3:
                  return t(pa(e, n[0]), pa(e, n[1]), pa(e, n[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = pa(e, n[i]);
                  return t.apply(void 0, c(o));
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = pa(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === aa ||
            null == n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? aa : n
        );
      }
      function ha(e, t) {
        var n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        var r = n[t];
        return (
          (r.viewContainerParent = null),
          ma(n, t),
          _s.dirtyParentQueries(r),
          ya(r),
          r
        );
      }
      function va(e, t, n) {
        var r = t ? Hs(t, t.def.lastRenderRootNode) : e.renderElement,
          o = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        Ws(n, 2, o, i, void 0);
      }
      function ya(e) {
        Ws(e, 3, null, null, void 0);
      }
      function ga(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ma(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      var ba = new Object();
      function _a(e, t, n, r, o, i) {
        return new wa(e, t, n, r, o, i);
      }
      var wa = (function(e) {
          function t(t, n, r, o, i, s) {
            var a = e.call(this) || this;
            return (
              (a.selector = t),
              (a.componentType = n),
              (a._inputs = o),
              (a._outputs = i),
              (a.ngContentSelectors = s),
              (a.viewDefFactory = r),
              a
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'inputs', {
              get: function() {
                var e = [],
                  t = this._inputs;
                for (var n in t) e.push({ propName: n, templateName: t[n] });
                return e;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'outputs', {
              get: function() {
                var e = [];
                for (var t in this._outputs)
                  e.push({ propName: t, templateName: this._outputs[t] });
                return e;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.create = function(e, t, n, r) {
              if (!r) throw new Error('ngModule should be provided');
              var o = Qs(this.viewDefFactory),
                i = o.nodes[0].element.componentProvider.nodeIndex,
                s = _s.createRootView(e, t || [], n, o, r, ba),
                a = gs(s, i).instance;
              return (
                n &&
                  s.renderer.setAttribute(
                    ys(s, 0).renderElement,
                    'ng-version',
                    $r.full
                  ),
                new xa(s, new Oa(s), a)
              );
            }),
            t
          );
        })(Pr),
        xa = (function(e) {
          function t(t, n, r) {
            var o = e.call(this) || this;
            return (
              (o._view = t),
              (o._viewRef = n),
              (o._component = r),
              (o._elDef = o._view.def.nodes[0]),
              (o.hostView = n),
              (o.changeDetectorRef = n),
              (o.instance = r),
              o
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'location', {
              get: function() {
                return new Ur(
                  ys(this._view, this._elDef.nodeIndex).renderElement
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'injector', {
              get: function() {
                return new Ta(this._view, this._elDef);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'componentType', {
              get: function() {
                return this._component.constructor;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.destroy = function() {
              this._viewRef.destroy();
            }),
            (t.prototype.onDestroy = function(e) {
              this._viewRef.onDestroy(e);
            }),
            t
          );
        })(Nr);
      function Ca(e, t, n) {
        return new Ea(e, t, n);
      }
      var Ea = (function() {
        function e(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        return (
          Object.defineProperty(e.prototype, 'element', {
            get: function() {
              return new Ur(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return new Ta(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'parentInjector', {
            get: function() {
              for (var e = this._view, t = this._elDef.parent; !t && e; )
                (t = Ls(e)), (e = e.parent);
              return e ? new Ta(e, t) : new Ta(this._view, null);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.clear = function() {
            for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
              var t = ha(this._data, e);
              _s.destroyView(t);
            }
          }),
          (e.prototype.get = function(e) {
            var t = this._embeddedViews[e];
            if (t) {
              var n = new Oa(t);
              return n.attachToViewContainerRef(this), n;
            }
            return null;
          }),
          Object.defineProperty(e.prototype, 'length', {
            get: function() {
              return this._embeddedViews.length;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.createEmbeddedView = function(e, t, n) {
            var r = e.createEmbeddedView(t || {});
            return this.insert(r, n), r;
          }),
          (e.prototype.createComponent = function(e, t, n, r, o) {
            var i = n || this.parentInjector;
            o || e instanceof Hr || (o = i.get(Fr));
            var s = e.create(i, r, void 0, o);
            return this.insert(s.hostView, t), s;
          }),
          (e.prototype.insert = function(e, t) {
            if (e.destroyed)
              throw new Error(
                'Cannot insert a destroyed View in a ViewContainer!'
              );
            var n,
              r,
              o,
              i,
              s = e;
            return (
              (i = (n = this._data).viewContainer._embeddedViews),
              null == (r = t) && (r = i.length),
              ((o = s._view).viewContainerParent = this._view),
              ga(i, r, o),
              (function(e, t) {
                var n = Rs(t);
                if (n && n !== e && !(16 & t.state)) {
                  t.state |= 16;
                  var r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function(e, n) {
                      if (!(4 & n.flags)) {
                        (t.parent.def.nodeFlags |= 4), (n.flags |= 4);
                        for (var r = n.parent; r; )
                          (r.childFlags |= 4), (r = r.parent);
                      }
                    })(0, t.parentNodeDef);
                }
              })(n, o),
              _s.dirtyParentQueries(o),
              va(n, r > 0 ? i[r - 1] : null, o),
              s.attachToViewContainerRef(this),
              e
            );
          }),
          (e.prototype.move = function(e, t) {
            if (e.destroyed)
              throw new Error(
                'Cannot move a destroyed View in a ViewContainer!'
              );
            var n,
              r,
              o,
              i,
              s,
              a = this._embeddedViews.indexOf(e._view);
            return (
              (o = t),
              (s = (i = (n = this._data).viewContainer._embeddedViews)[
                (r = a)
              ]),
              ma(i, r),
              null == o && (o = i.length),
              ga(i, o, s),
              _s.dirtyParentQueries(s),
              ya(s),
              va(n, o > 0 ? i[o - 1] : null, s),
              e
            );
          }),
          (e.prototype.indexOf = function(e) {
            return this._embeddedViews.indexOf(e._view);
          }),
          (e.prototype.remove = function(e) {
            var t = ha(this._data, e);
            t && _s.destroyView(t);
          }),
          (e.prototype.detach = function(e) {
            var t = ha(this._data, e);
            return t ? new Oa(t) : null;
          }),
          e
        );
      })();
      function Sa(e) {
        return new Oa(e);
      }
      var Oa = (function() {
        function e(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          Object.defineProperty(e.prototype, 'rootNodes', {
            get: function() {
              return Ws(this._view, 0, void 0, void 0, (e = [])), e;
              var e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'context', {
            get: function() {
              return this._view.context;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'destroyed', {
            get: function() {
              return 0 != (128 & this._view.state);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.markForCheck = function() {
            Ds(this._view);
          }),
          (e.prototype.detach = function() {
            this._view.state &= -5;
          }),
          (e.prototype.detectChanges = function() {
            var e = this._view.root.rendererFactory;
            e.begin && e.begin();
            try {
              _s.checkAndUpdateView(this._view);
            } finally {
              e.end && e.end();
            }
          }),
          (e.prototype.checkNoChanges = function() {
            _s.checkNoChangesView(this._view);
          }),
          (e.prototype.reattach = function() {
            this._view.state |= 4;
          }),
          (e.prototype.onDestroy = function(e) {
            this._view.disposables || (this._view.disposables = []),
              this._view.disposables.push(e);
          }),
          (e.prototype.destroy = function() {
            this._appRef
              ? this._appRef.detachView(this)
              : this._viewContainerRef &&
                this._viewContainerRef.detach(
                  this._viewContainerRef.indexOf(this)
                ),
              _s.destroyView(this._view);
          }),
          (e.prototype.detachFromAppRef = function() {
            (this._appRef = null),
              ya(this._view),
              _s.dirtyParentQueries(this._view);
          }),
          (e.prototype.attachToAppRef = function(e) {
            if (this._viewContainerRef)
              throw new Error(
                'This view is already attached to a ViewContainer!'
              );
            this._appRef = e;
          }),
          (e.prototype.attachToViewContainerRef = function(e) {
            if (this._appRef)
              throw new Error(
                'This view is already attached directly to the ApplicationRef!'
              );
            this._viewContainerRef = e;
          }),
          e
        );
      })();
      function Aa(e, t) {
        return new ka(e, t);
      }
      var ka = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r._parentView = t), (r._def = n), r;
        }
        return (
          o(t, e),
          (t.prototype.createEmbeddedView = function(e) {
            return new Oa(
              _s.createEmbeddedView(
                this._parentView,
                this._def,
                this._def.element.template,
                e
              )
            );
          }),
          Object.defineProperty(t.prototype, 'elementRef', {
            get: function() {
              return new Ur(
                ys(this._parentView, this._def.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        );
      })(Vo);
      function Ia(e, t) {
        return new Ta(e, t);
      }
      var Ta = (function() {
        function e(e, t) {
          (this.view = e), (this.elDef = t);
        }
        return (
          (e.prototype.get = function(e, t) {
            return (
              void 0 === t && (t = ir.THROW_IF_NOT_FOUND),
              _s.resolveDep(
                this.view,
                this.elDef,
                !!this.elDef && 0 != (33554432 & this.elDef.flags),
                { flags: 0, token: e, tokenKey: Os(e) },
                t
              )
            );
          }),
          e
        );
      })();
      function Na(e, t) {
        var n = e.def.nodes[t];
        if (1 & n.flags) {
          var r = ys(e, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement;
        }
        if (2 & n.flags) return vs(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return gs(e, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + t);
      }
      function Pa(e) {
        return new Va(e.renderer);
      }
      var Va = (function() {
        function e(e) {
          this.delegate = e;
        }
        return (
          (e.prototype.selectRootElement = function(e) {
            return this.delegate.selectRootElement(e);
          }),
          (e.prototype.createElement = function(e, t) {
            var n = l(Js(t), 2),
              r = this.delegate.createElement(n[1], n[0]);
            return e && this.delegate.appendChild(e, r), r;
          }),
          (e.prototype.createViewRoot = function(e) {
            return e;
          }),
          (e.prototype.createTemplateAnchor = function(e) {
            var t = this.delegate.createComment('');
            return e && this.delegate.appendChild(e, t), t;
          }),
          (e.prototype.createText = function(e, t) {
            var n = this.delegate.createText(t);
            return e && this.delegate.appendChild(e, n), n;
          }),
          (e.prototype.projectNodes = function(e, t) {
            for (var n = 0; n < t.length; n++)
              this.delegate.appendChild(e, t[n]);
          }),
          (e.prototype.attachViewAfter = function(e, t) {
            for (
              var n = this.delegate.parentNode(e),
                r = this.delegate.nextSibling(e),
                o = 0;
              o < t.length;
              o++
            )
              this.delegate.insertBefore(n, t[o], r);
          }),
          (e.prototype.detachView = function(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                r = this.delegate.parentNode(n);
              this.delegate.removeChild(r, n);
            }
          }),
          (e.prototype.destroyView = function(e, t) {
            for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
          }),
          (e.prototype.listen = function(e, t, n) {
            return this.delegate.listen(e, t, n);
          }),
          (e.prototype.listenGlobal = function(e, t, n) {
            return this.delegate.listen(e, t, n);
          }),
          (e.prototype.setElementProperty = function(e, t, n) {
            this.delegate.setProperty(e, t, n);
          }),
          (e.prototype.setElementAttribute = function(e, t, n) {
            var r = l(Js(t), 2),
              o = r[0],
              i = r[1];
            null != n
              ? this.delegate.setAttribute(e, i, n, o)
              : this.delegate.removeAttribute(e, i, o);
          }),
          (e.prototype.setBindingDebugInfo = function(e, t, n) {}),
          (e.prototype.setElementClass = function(e, t, n) {
            n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
          }),
          (e.prototype.setElementStyle = function(e, t, n) {
            null != n
              ? this.delegate.setStyle(e, t, n)
              : this.delegate.removeStyle(e, t);
          }),
          (e.prototype.invokeElementMethod = function(e, t, n) {
            e[t].apply(e, n);
          }),
          (e.prototype.setText = function(e, t) {
            this.delegate.setValue(e, t);
          }),
          (e.prototype.animate = function() {
            throw new Error('Renderer.animate is no longer supported!');
          }),
          e
        );
      })();
      function Da(e, t, n, r) {
        return new Ma(e, t, n, r);
      }
      var Ma = (function() {
          function e(e, t, n, r) {
            (this._moduleType = e),
              (this._parent = t),
              (this._bootstrapComponents = n),
              (this._def = r),
              (this._destroyListeners = []),
              (this._destroyed = !1),
              (this.injector = this),
              (function(e) {
                for (
                  var t = e._def,
                    n = (e._providers = new Array(t.providers.length)),
                    r = 0;
                  r < t.providers.length;
                  r++
                ) {
                  var o = t.providers[r];
                  4096 & o.flags || (void 0 === n[r] && (n[r] = fa(e, o)));
                }
              })(this);
          }
          return (
            (e.prototype.get = function(e, t, n) {
              void 0 === t && (t = ir.THROW_IF_NOT_FOUND),
                void 0 === n && (n = kt.Default);
              var r = 0;
              return (
                n & kt.SkipSelf ? (r |= 1) : n & kt.Self && (r |= 4),
                pa(this, { token: e, tokenKey: Os(e), flags: r }, t)
              );
            }),
            Object.defineProperty(e.prototype, 'instance', {
              get: function() {
                return this.get(this._moduleType);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'componentFactoryResolver', {
              get: function() {
                return this.get(Rr);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.destroy = function() {
              if (this._destroyed)
                throw new Error(
                  'The ng module ' +
                    Ne(this.instance.constructor) +
                    ' has already been destroyed.'
                );
              (this._destroyed = !0),
                (function(e, t) {
                  for (
                    var n = e._def, r = new Set(), o = 0;
                    o < n.providers.length;
                    o++
                  )
                    if (131072 & n.providers[o].flags) {
                      var i = e._providers[o];
                      if (i && i !== aa) {
                        var s = i.ngOnDestroy;
                        'function' != typeof s ||
                          r.has(i) ||
                          (s.apply(i), r.add(i));
                      }
                    }
                })(this),
                this._destroyListeners.forEach(function(e) {
                  return e();
                });
            }),
            (e.prototype.onDestroy = function(e) {
              this._destroyListeners.push(e);
            }),
            e
          );
        })(),
        ja = Os(Zr),
        Ra = Os(qr),
        La = Os(Ur),
        Ha = Os(ji),
        Fa = Os(Vo),
        za = Os(Li),
        Ba = Os(ir),
        Ua = Os(rr);
      function Ga(e, t, n, r, o, i, s, a) {
        var u = [];
        if (s)
          for (var c in s) {
            var d = l(s[c], 2);
            u[d[0]] = {
              flags: 8,
              name: c,
              nonMinifiedName: d[1],
              ns: null,
              securityContext: null,
              suffix: null
            };
          }
        var p = [];
        if (a)
          for (var f in a)
            p.push({ type: 1, propName: f, target: null, eventName: a[f] });
        return Qa(e, (t |= 16384), n, r, o, o, i, u, p);
      }
      function Za(e, t, n, r, o) {
        return Qa(-1, e, t, 0, n, r, o);
      }
      function Qa(e, t, n, r, o, i, s, a, u) {
        var l = Bs(n),
          c = l.matchedQueries,
          d = l.references,
          p = l.matchedQueryIds;
        u || (u = []), a || (a = []), (i = De(i));
        var f = Us(s, Ne(o));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: p,
          references: d,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: ea(a),
          outputs: u,
          element: null,
          provider: { token: o, value: i, deps: f },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Wa(e, t) {
        return Ka(e, t);
      }
      function qa(e, t) {
        for (var n = e; n.parent && !Fs(n); ) n = n.parent;
        return $a(n.parent, Ls(n), !0, t.provider.value, t.provider.deps);
      }
      function Xa(e, t) {
        var n = $a(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (var r = 0; r < t.outputs.length; r++) {
            var o = t.outputs[r],
              i = n[o.propName];
            if (!Zo(i))
              throw new Error(
                '@Output ' +
                  o.propName +
                  " not initialized in '" +
                  n.constructor.name +
                  "'."
              );
            var s = i.subscribe(Ya(e, t.parent.nodeIndex, o.eventName));
            e.disposables[t.outputIndex + r] = s.unsubscribe.bind(s);
          }
        return n;
      }
      function Ya(e, t, n) {
        return function(r) {
          return js(e, t, n, r);
        };
      }
      function Ka(e, t) {
        var n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return $a(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(eu(e, t, n, o[0]));
                case 2:
                  return r(eu(e, t, n, o[0]), eu(e, t, n, o[1]));
                case 3:
                  return r(
                    eu(e, t, n, o[0]),
                    eu(e, t, n, o[1]),
                    eu(e, t, n, o[2])
                  );
                default:
                  for (var s = Array(i), a = 0; a < i; a++)
                    s[a] = eu(e, t, n, o[a]);
                  return r.apply(void 0, c(s));
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return eu(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function $a(e, t, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(eu(e, t, n, o[0]));
          case 2:
            return new r(eu(e, t, n, o[0]), eu(e, t, n, o[1]));
          case 3:
            return new r(
              eu(e, t, n, o[0]),
              eu(e, t, n, o[1]),
              eu(e, t, n, o[2])
            );
          default:
            for (var s = new Array(i), a = 0; a < i; a++)
              s[a] = eu(e, t, n, o[a]);
            return new (r.bind.apply(r, c([void 0], s)))();
        }
      }
      var Ja = {};
      function eu(e, t, n, r, o) {
        if ((void 0 === o && (o = ir.THROW_IF_NOT_FOUND), 8 & r.flags))
          return r.token;
        var i = e;
        2 & r.flags && (o = null);
        var s = r.tokenKey;
        s === za && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        for (var a = e; a; ) {
          if (t)
            switch (s) {
              case ja:
                return Pa(tu(a, t, n));
              case Ra:
                return tu(a, t, n).renderer;
              case La:
                return new Ur(ys(a, t.nodeIndex).renderElement);
              case Ha:
                return ys(a, t.nodeIndex).viewContainer;
              case Fa:
                if (t.element.template) return ys(a, t.nodeIndex).template;
                break;
              case za:
                return Sa(tu(a, t, n));
              case Ba:
              case Ua:
                return Ia(a, t);
              default:
                var u = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[s];
                if (u) {
                  var l = gs(a, u.nodeIndex);
                  return (
                    l ||
                      ((l = { instance: Ka(a, u) }),
                      (a.nodes[u.nodeIndex] = l)),
                    l.instance
                  );
                }
            }
          (n = Fs(a)), (t = Ls(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        var c = i.root.injector.get(r.token, Ja);
        return c !== Ja || o === Ja
          ? c
          : i.root.ngModule.injector.get(r.token, o);
      }
      function tu(e, t, n) {
        var r;
        if (n) r = ys(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !Fs(r); ) r = r.parent;
        return r;
      }
      function nu(e, t, n, r, o, i) {
        if (32768 & n.flags) {
          var s = ys(e, n.parent.nodeIndex).componentView;
          2 & s.def.flags && (s.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
          i = i || {};
          var a = bn.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new _n(a, o, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = o), i;
      }
      function ru(e, t) {
        if (e.def.nodeFlags & t)
          for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o],
              s = i.parent;
            for (
              !s && i.flags & t && iu(e, o, i.flags & t, r++),
                0 == (i.childFlags & t) && (o += i.childCount);
              s && 1 & s.flags && o === s.nodeIndex + s.childCount;

            )
              s.directChildFlags & t && (r = ou(e, s, t, r)), (s = s.parent);
          }
      }
      function ou(e, t, n, r) {
        for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
          var i = e.def.nodes[o];
          i.flags & n && iu(e, o, i.flags & n, r++), (o += i.childCount);
        }
        return r;
      }
      function iu(e, t, n, r) {
        var o = gs(e, t);
        if (o) {
          var i = o.instance;
          i &&
            (_s.setCurrentNode(e, t),
            1048576 & n && hs(e, 512, r) && i.ngAfterContentInit(),
            2097152 & n && i.ngAfterContentChecked(),
            4194304 & n && hs(e, 768, r) && i.ngAfterViewInit(),
            8388608 & n && i.ngAfterViewChecked(),
            131072 & n && i.ngOnDestroy());
        }
      }
      function su(e) {
        for (var t = e.def.nodeMatchedQueries; e.parent && zs(e); ) {
          var n = e.parentNodeDef;
          e = e.parent;
          for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++)
            67108864 & (i = e.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & t) === i.query.filterId &&
              bs(e, o).setDirty(),
              (!(1 & i.flags && o + i.childCount < n.nodeIndex) &&
                67108864 & i.childFlags &&
                536870912 & i.childFlags) ||
                (o += i.childCount);
        }
        if (134217728 & e.def.nodeFlags)
          for (o = 0; o < e.def.nodes.length; o++) {
            var i;
            134217728 & (i = e.def.nodes[o]).flags &&
              536870912 & i.flags &&
              bs(e, o).setDirty(),
              (o += i.childCount);
          }
      }
      function au(e, t) {
        var n = bs(e, t.nodeIndex);
        if (n.dirty) {
          var r,
            o = void 0;
          if (67108864 & t.flags) {
            var i = t.parent.parent;
            (o = uu(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, [])),
              (r = gs(e, t.parent.nodeIndex).instance);
          } else
            134217728 & t.flags &&
              ((o = uu(e, 0, e.def.nodes.length - 1, t.query, [])),
              (r = e.component));
          n.reset(o);
          for (var s = t.query.bindings, a = !1, u = 0; u < s.length; u++) {
            var l = s[u],
              c = void 0;
            switch (l.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                (c = n), (a = !0);
            }
            r[l.propName] = c;
          }
          a && n.notifyOnChanges();
        }
      }
      function uu(e, t, n, r, o) {
        for (var i = t; i <= n; i++) {
          var s = e.def.nodes[i],
            a = s.matchedQueries[r.id];
          if (
            (null != a && o.push(lu(e, s, a)),
            1 & s.flags &&
              s.element.template &&
              (s.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            var u = ys(e, i);
            if (
              ((s.childMatchedQueries & r.filterId) === r.filterId &&
                (uu(e, i + 1, i + s.childCount, r, o), (i += s.childCount)),
              16777216 & s.flags)
            )
              for (
                var l = u.viewContainer._embeddedViews, c = 0;
                c < l.length;
                c++
              ) {
                var d = l[c],
                  p = Rs(d);
                p && p === u && uu(d, 0, d.def.nodes.length - 1, r, o);
              }
            var f = u.template._projectedViews;
            if (f)
              for (c = 0; c < f.length; c++) {
                var h = f[c];
                uu(h, 0, h.def.nodes.length - 1, r, o);
              }
          }
          (s.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += s.childCount);
        }
        return o;
      }
      function lu(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return ys(e, t.nodeIndex).renderElement;
            case 0:
              return new Ur(ys(e, t.nodeIndex).renderElement);
            case 2:
              return ys(e, t.nodeIndex).template;
            case 3:
              return ys(e, t.nodeIndex).viewContainer;
            case 4:
              return gs(e, t.nodeIndex).instance;
          }
      }
      function cu(e, t, n) {
        var r = Gs(e, t, n);
        r && Xs(e, n.ngContent.index, 1, r, null, void 0);
      }
      function du(e, t, n) {
        for (var r = new Array(n.length - 1), o = 1; o < n.length; o++)
          r[o - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[o]
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null
        };
      }
      function pu(e, t, n) {
        var r,
          o = e.renderer;
        r = o.createText(n.text.prefix);
        var i = Gs(e, t, n);
        return i && o.appendChild(i, r), { renderText: r };
      }
      function fu(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function hu(e, t, n, r) {
        for (
          var o = 0,
            i = 0,
            s = 0,
            a = 0,
            u = 0,
            l = null,
            c = null,
            d = !1,
            p = !1,
            f = null,
            h = 0;
          h < t.length;
          h++
        ) {
          var v = t[h];
          if (
            ((v.nodeIndex = h),
            (v.parent = l),
            (v.bindingIndex = o),
            (v.outputIndex = i),
            (v.renderParent = c),
            (s |= v.flags),
            (u |= v.matchedQueryIds),
            v.element)
          ) {
            var y = v.element;
            (y.publicProviders = l
              ? l.element.publicProviders
              : Object.create(null)),
              (y.allProviders = y.publicProviders),
              (d = !1),
              (p = !1),
              v.element.template &&
                (u |= v.element.template.nodeMatchedQueries);
          }
          if (
            (yu(l, v, t.length),
            (o += v.bindings.length),
            (i += v.outputs.length),
            !c && 3 & v.flags && (f = v),
            20224 & v.flags)
          ) {
            d ||
              ((d = !0),
              (l.element.publicProviders = Object.create(
                l.element.publicProviders
              )),
              (l.element.allProviders = l.element.publicProviders));
            var g = 0 != (32768 & v.flags);
            0 == (8192 & v.flags) || g
              ? (l.element.publicProviders[Os(v.provider.token)] = v)
              : (p ||
                  ((p = !0),
                  (l.element.allProviders = Object.create(
                    l.element.publicProviders
                  ))),
                (l.element.allProviders[Os(v.provider.token)] = v)),
              g && (l.element.componentProvider = v);
          }
          if (
            (l
              ? ((l.childFlags |= v.flags),
                (l.directChildFlags |= v.flags),
                (l.childMatchedQueries |= v.matchedQueryIds),
                v.element &&
                  v.element.template &&
                  (l.childMatchedQueries |=
                    v.element.template.nodeMatchedQueries))
              : (a |= v.flags),
            v.childCount > 0)
          )
            (l = v), vu(v) || (c = v);
          else
            for (; l && h === l.nodeIndex + l.childCount; ) {
              var m = l.parent;
              m &&
                ((m.childFlags |= l.childFlags),
                (m.childMatchedQueries |= l.childMatchedQueries)),
                (c = (l = m) && vu(l) ? l.renderParent : l);
            }
        }
        return {
          factory: null,
          nodeFlags: s,
          rootNodeFlags: a,
          nodeMatchedQueries: u,
          flags: e,
          nodes: t,
          updateDirectives: n || Es,
          updateRenderer: r || Es,
          handleEvent: function(e, n, r, o) {
            return t[n].element.handleEvent(e, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: f
        };
      }
      function vu(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function yu(e, t, n) {
        var r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              "Illegal State: Last root node of a template can't have embedded views, at index " +
                t.nodeIndex +
                '!'
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            'Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ' +
              t.nodeIndex +
              '!'
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              'Illegal State: Content Query nodes need to be children of directives, at index ' +
                t.nodeIndex +
                '!'
            );
          if (134217728 & t.flags && e)
            throw new Error(
              'Illegal State: View Query nodes have to be top level nodes, at index ' +
                t.nodeIndex +
                '!'
            );
        }
        if (t.childCount) {
          var o = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o)
            throw new Error(
              'Illegal State: childCount of node leads outside of parent, at index ' +
                t.nodeIndex +
                '!'
            );
        }
      }
      function gu(e, t, n, r) {
        var o = _u(e.root, e.renderer, e, t, n);
        return wu(o, e.component, r), xu(o), o;
      }
      function mu(e, t, n) {
        var r = _u(e, e.renderer, null, null, t);
        return wu(r, n, n), xu(r), r;
      }
      function bu(e, t, n, r) {
        var o,
          i = t.element.componentRendererType;
        return (
          (o = i
            ? e.root.rendererFactory.createRenderer(r, i)
            : e.root.renderer),
          _u(e.root, o, e, t.element.componentProvider, n)
        );
      }
      function _u(e, t, n, r, o) {
        var i = new Array(o.nodes.length),
          s = o.outputCount ? new Array(o.outputCount) : null;
        return {
          def: o,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(o.bindingCount),
          disposables: s,
          initIndex: -1
        };
      }
      function wu(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function xu(e) {
        var t;
        Fs(e) &&
          (t = ys(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o];
          _s.setCurrentNode(e, o);
          var s = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var a = ra(e, t, i),
                u = void 0;
              if (33554432 & i.flags) {
                var l = Qs(i.element.componentView);
                u = _s.createComponentView(e, i, l, a);
              }
              oa(e, u, i, a),
                (s = {
                  renderElement: a,
                  componentView: u,
                  viewContainer: null,
                  template: i.element.template ? Aa(e, i) : void 0
                }),
                16777216 & i.flags && (s.viewContainer = Ca(e, i, s));
              break;
            case 2:
              s = pu(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (s = r[o]) || 4096 & i.flags || (s = { instance: Wa(e, i) });
              break;
            case 16:
              s = { instance: qa(e, i) };
              break;
            case 16384:
              (s = r[o]) || (s = { instance: Xa(e, i) }),
                32768 & i.flags &&
                  wu(
                    ys(e, i.parent.nodeIndex).componentView,
                    s.instance,
                    s.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              s = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              s = new Mi();
              break;
            case 8:
              cu(e, t, i), (s = void 0);
          }
          r[o] = s;
        }
        Nu(e, Tu.CreateViewNodes), Mu(e, 201326592, 268435456, 0);
      }
      function Cu(e) {
        Ou(e),
          _s.updateDirectives(e, 1),
          Pu(e, Tu.CheckNoChanges),
          _s.updateRenderer(e, 1),
          Nu(e, Tu.CheckNoChanges),
          (e.state &= -97);
      }
      function Eu(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          fs(e, 0, 256),
          Ou(e),
          _s.updateDirectives(e, 0),
          Pu(e, Tu.CheckAndUpdate),
          Mu(e, 67108864, 536870912, 0);
        var t = fs(e, 256, 512);
        ru(e, 2097152 | (t ? 1048576 : 0)),
          _s.updateRenderer(e, 0),
          Nu(e, Tu.CheckAndUpdate),
          Mu(e, 134217728, 536870912, 0),
          ru(e, 8388608 | ((t = fs(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          fs(e, 768, 1024);
      }
      function Su(e, t, n, r, o, i, s, a, u, l, d, p, f) {
        return 0 === n
          ? (function(e, t, n, r, o, i, s, a, u, l, c, d) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, o, i, s, a, u, l, c, d) {
                    var p = t.bindings.length,
                      f = !1;
                    return (
                      p > 0 && sa(e, t, 0, n) && (f = !0),
                      p > 1 && sa(e, t, 1, r) && (f = !0),
                      p > 2 && sa(e, t, 2, o) && (f = !0),
                      p > 3 && sa(e, t, 3, i) && (f = !0),
                      p > 4 && sa(e, t, 4, s) && (f = !0),
                      p > 5 && sa(e, t, 5, a) && (f = !0),
                      p > 6 && sa(e, t, 6, u) && (f = !0),
                      p > 7 && sa(e, t, 7, l) && (f = !0),
                      p > 8 && sa(e, t, 8, c) && (f = !0),
                      p > 9 && sa(e, t, 9, d) && (f = !0),
                      f
                    );
                  })(e, t, n, r, o, i, s, a, u, l, c, d);
                case 2:
                  return (function(e, t, n, r, o, i, s, a, u, l, c, d) {
                    var p = !1,
                      f = t.bindings,
                      h = f.length;
                    if (
                      (h > 0 && Ps(e, t, 0, n) && (p = !0),
                      h > 1 && Ps(e, t, 1, r) && (p = !0),
                      h > 2 && Ps(e, t, 2, o) && (p = !0),
                      h > 3 && Ps(e, t, 3, i) && (p = !0),
                      h > 4 && Ps(e, t, 4, s) && (p = !0),
                      h > 5 && Ps(e, t, 5, a) && (p = !0),
                      h > 6 && Ps(e, t, 6, u) && (p = !0),
                      h > 7 && Ps(e, t, 7, l) && (p = !0),
                      h > 8 && Ps(e, t, 8, c) && (p = !0),
                      h > 9 && Ps(e, t, 9, d) && (p = !0),
                      p)
                    ) {
                      var v = t.text.prefix;
                      h > 0 && (v += fu(n, f[0])),
                        h > 1 && (v += fu(r, f[1])),
                        h > 2 && (v += fu(o, f[2])),
                        h > 3 && (v += fu(i, f[3])),
                        h > 4 && (v += fu(s, f[4])),
                        h > 5 && (v += fu(a, f[5])),
                        h > 6 && (v += fu(u, f[6])),
                        h > 7 && (v += fu(l, f[7])),
                        h > 8 && (v += fu(c, f[8])),
                        h > 9 && (v += fu(d, f[9]));
                      var y = vs(e, t.nodeIndex).renderText;
                      e.renderer.setValue(y, v);
                    }
                    return p;
                  })(e, t, n, r, o, i, s, a, u, l, c, d);
                case 16384:
                  return (function(e, t, n, r, o, i, s, a, u, l, c, d) {
                    var p = gs(e, t.nodeIndex),
                      f = p.instance,
                      h = !1,
                      v = void 0,
                      y = t.bindings.length;
                    return (
                      y > 0 &&
                        Ns(e, t, 0, n) &&
                        ((h = !0), (v = nu(e, p, t, 0, n, v))),
                      y > 1 &&
                        Ns(e, t, 1, r) &&
                        ((h = !0), (v = nu(e, p, t, 1, r, v))),
                      y > 2 &&
                        Ns(e, t, 2, o) &&
                        ((h = !0), (v = nu(e, p, t, 2, o, v))),
                      y > 3 &&
                        Ns(e, t, 3, i) &&
                        ((h = !0), (v = nu(e, p, t, 3, i, v))),
                      y > 4 &&
                        Ns(e, t, 4, s) &&
                        ((h = !0), (v = nu(e, p, t, 4, s, v))),
                      y > 5 &&
                        Ns(e, t, 5, a) &&
                        ((h = !0), (v = nu(e, p, t, 5, a, v))),
                      y > 6 &&
                        Ns(e, t, 6, u) &&
                        ((h = !0), (v = nu(e, p, t, 6, u, v))),
                      y > 7 &&
                        Ns(e, t, 7, l) &&
                        ((h = !0), (v = nu(e, p, t, 7, l, v))),
                      y > 8 &&
                        Ns(e, t, 8, c) &&
                        ((h = !0), (v = nu(e, p, t, 8, c, v))),
                      y > 9 &&
                        Ns(e, t, 9, d) &&
                        ((h = !0), (v = nu(e, p, t, 9, d, v))),
                      v && f.ngOnChanges(v),
                      65536 & t.flags &&
                        hs(e, 256, t.nodeIndex) &&
                        f.ngOnInit(),
                      262144 & t.flags && f.ngDoCheck(),
                      h
                    );
                  })(e, t, n, r, o, i, s, a, u, l, c, d);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, o, i, s, a, u, l, c, d) {
                    var p = t.bindings,
                      f = !1,
                      h = p.length;
                    if (
                      (h > 0 && Ps(e, t, 0, n) && (f = !0),
                      h > 1 && Ps(e, t, 1, r) && (f = !0),
                      h > 2 && Ps(e, t, 2, o) && (f = !0),
                      h > 3 && Ps(e, t, 3, i) && (f = !0),
                      h > 4 && Ps(e, t, 4, s) && (f = !0),
                      h > 5 && Ps(e, t, 5, a) && (f = !0),
                      h > 6 && Ps(e, t, 6, u) && (f = !0),
                      h > 7 && Ps(e, t, 7, l) && (f = !0),
                      h > 8 && Ps(e, t, 8, c) && (f = !0),
                      h > 9 && Ps(e, t, 9, d) && (f = !0),
                      f)
                    ) {
                      var v = ms(e, t.nodeIndex),
                        y = void 0;
                      switch (201347067 & t.flags) {
                        case 32:
                          (y = new Array(p.length)),
                            h > 0 && (y[0] = n),
                            h > 1 && (y[1] = r),
                            h > 2 && (y[2] = o),
                            h > 3 && (y[3] = i),
                            h > 4 && (y[4] = s),
                            h > 5 && (y[5] = a),
                            h > 6 && (y[6] = u),
                            h > 7 && (y[7] = l),
                            h > 8 && (y[8] = c),
                            h > 9 && (y[9] = d);
                          break;
                        case 64:
                          (y = {}),
                            h > 0 && (y[p[0].name] = n),
                            h > 1 && (y[p[1].name] = r),
                            h > 2 && (y[p[2].name] = o),
                            h > 3 && (y[p[3].name] = i),
                            h > 4 && (y[p[4].name] = s),
                            h > 5 && (y[p[5].name] = a),
                            h > 6 && (y[p[6].name] = u),
                            h > 7 && (y[p[7].name] = l),
                            h > 8 && (y[p[8].name] = c),
                            h > 9 && (y[p[9].name] = d);
                          break;
                        case 128:
                          var g = n;
                          switch (h) {
                            case 1:
                              y = g.transform(n);
                              break;
                            case 2:
                              y = g.transform(r);
                              break;
                            case 3:
                              y = g.transform(r, o);
                              break;
                            case 4:
                              y = g.transform(r, o, i);
                              break;
                            case 5:
                              y = g.transform(r, o, i, s);
                              break;
                            case 6:
                              y = g.transform(r, o, i, s, a);
                              break;
                            case 7:
                              y = g.transform(r, o, i, s, a, u);
                              break;
                            case 8:
                              y = g.transform(r, o, i, s, a, u, l);
                              break;
                            case 9:
                              y = g.transform(r, o, i, s, a, u, l, c);
                              break;
                            case 10:
                              y = g.transform(r, o, i, s, a, u, l, c, d);
                          }
                      }
                      v.value = y;
                    }
                    return f;
                  })(e, t, n, r, o, i, s, a, u, l, c, d);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, o, i, s, a, u, l, d, p, f)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    for (var r = !1, o = 0; o < n.length; o++)
                      sa(e, t, o, n[o]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                      Ps(e, t, i, n[i]) && (o = !0);
                    if (o) {
                      var s = '';
                      for (i = 0; i < n.length; i++) s += fu(n[i], r[i]);
                      s = t.text.prefix + s;
                      var a = vs(e, t.nodeIndex).renderText;
                      e.renderer.setValue(a, s);
                    }
                    return o;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    for (
                      var r = gs(e, t.nodeIndex),
                        o = r.instance,
                        i = !1,
                        s = void 0,
                        a = 0;
                      a < n.length;
                      a++
                    )
                      Ns(e, t, a, n[a]) &&
                        ((i = !0), (s = nu(e, r, t, a, n[a], s)));
                    return (
                      s && o.ngOnChanges(s),
                      65536 & t.flags &&
                        hs(e, 256, t.nodeIndex) &&
                        o.ngOnInit(),
                      262144 & t.flags && o.ngDoCheck(),
                      i
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n) {
                    for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                      Ps(e, t, i, n[i]) && (o = !0);
                    if (o) {
                      var s = ms(e, t.nodeIndex),
                        a = void 0;
                      switch (201347067 & t.flags) {
                        case 32:
                          a = n;
                          break;
                        case 64:
                          for (a = {}, i = 0; i < n.length; i++)
                            a[r[i].name] = n[i];
                          break;
                        case 128:
                          var u = n[0],
                            l = n.slice(1);
                          a = u.transform.apply(u, c(l));
                      }
                      s.value = a;
                    }
                    return o;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function Ou(e) {
        var t = e.def;
        if (4 & t.nodeFlags)
          for (var n = 0; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (4 & r.flags) {
              var o = ys(e, n).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var s = o[i];
                  (s.state |= 32), Ms(s, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Au(e, t, n, r, o, i, s, a, u, l, c, d, p) {
        return (
          0 === n
            ? (function(e, t, n, r, o, i, s, a, u, l, c, d) {
                var p = t.bindings.length;
                p > 0 && Vs(e, t, 0, n),
                  p > 1 && Vs(e, t, 1, r),
                  p > 2 && Vs(e, t, 2, o),
                  p > 3 && Vs(e, t, 3, i),
                  p > 4 && Vs(e, t, 4, s),
                  p > 5 && Vs(e, t, 5, a),
                  p > 6 && Vs(e, t, 6, u),
                  p > 7 && Vs(e, t, 7, l),
                  p > 8 && Vs(e, t, 8, c),
                  p > 9 && Vs(e, t, 9, d);
              })(e, t, r, o, i, s, a, u, l, c, d, p)
            : (function(e, t, n) {
                for (var r = 0; r < n.length; r++) Vs(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function ku(e, t) {
        if (bs(e, t.nodeIndex).dirty)
          throw ws(
            _s.createDebugContext(e, t.nodeIndex),
            'Query ' + t.query.id + ' not dirty',
            'Query ' + t.query.id + ' dirty',
            0 != (1 & e.state)
          );
      }
      function Iu(e) {
        if (!(128 & e.state)) {
          if (
            (Pu(e, Tu.Destroy), Nu(e, Tu.Destroy), ru(e, 131072), e.disposables)
          )
            for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (16 & e.state) {
              var t = Rs(e);
              if (t) {
                var n = t.template._projectedViews;
                n && (ma(n, n.indexOf(e)), _s.dirtyParentQueries(e));
              }
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                  var r = e.def.nodes[n];
                  1 & r.flags
                    ? e.renderer.destroyNode(ys(e, n).renderElement)
                    : 2 & r.flags
                    ? e.renderer.destroyNode(vs(e, n).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) &&
                      bs(e, n).destroy();
                }
              })(e),
            Fs(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      var Tu = (function(e) {
        return (
          (e[(e.CreateViewNodes = 0)] = 'CreateViewNodes'),
          (e[(e.CheckNoChanges = 1)] = 'CheckNoChanges'),
          (e[(e.CheckNoChangesProjectedViews = 2)] =
            'CheckNoChangesProjectedViews'),
          (e[(e.CheckAndUpdate = 3)] = 'CheckAndUpdate'),
          (e[(e.CheckAndUpdateProjectedViews = 4)] =
            'CheckAndUpdateProjectedViews'),
          (e[(e.Destroy = 5)] = 'Destroy'),
          e
        );
      })({});
      function Nu(e, t) {
        var n = e.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags
              ? Vu(ys(e, r).componentView, t)
              : 0 == (33554432 & o.childFlags) && (r += o.childCount);
          }
      }
      function Pu(e, t) {
        var n = e.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags)
              for (
                var i = ys(e, r).viewContainer._embeddedViews, s = 0;
                s < i.length;
                s++
              )
                Vu(i[s], t);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount);
          }
      }
      function Vu(e, t) {
        var n = e.state;
        switch (t) {
          case Tu.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Cu(e)
                : 64 & n && Du(e, Tu.CheckNoChangesProjectedViews));
            break;
          case Tu.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Cu(e) : 64 & n && Du(e, t));
            break;
          case Tu.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Eu(e)
                : 64 & n && Du(e, Tu.CheckAndUpdateProjectedViews));
            break;
          case Tu.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? Eu(e) : 64 & n && Du(e, t));
            break;
          case Tu.Destroy:
            Iu(e);
            break;
          case Tu.CreateViewNodes:
            xu(e);
        }
      }
      function Du(e, t) {
        Pu(e, t), Nu(e, t);
      }
      function Mu(e, t, n, r) {
        if (e.def.nodeFlags & t && e.def.nodeFlags & n)
          for (var o = e.def.nodes.length, i = 0; i < o; i++) {
            var s = e.def.nodes[i];
            if (s.flags & t && s.flags & n)
              switch ((_s.setCurrentNode(e, s.nodeIndex), r)) {
                case 0:
                  au(e, s);
                  break;
                case 1:
                  ku(e, s);
              }
            (s.childFlags & t && s.childFlags & n) || (i += s.childCount);
          }
      }
      var ju = !1;
      function Ru(e, t, n, r, o, i) {
        var s = o.injector.get(Qr);
        return mu(Hu(e, o, s, t, n), r, i);
      }
      function Lu(e, t, n, r, o, i) {
        var s = o.injector.get(Qr),
          a = Hu(e, o, new gl(s), t, n),
          u = Xu(r);
        return vl(ol.create, mu, null, [a, u, i]);
      }
      function Hu(e, t, n, r, o) {
        var i = t.injector.get(Kr),
          s = t.injector.get(Uo),
          a = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: s
        };
      }
      function Fu(e, t, n, r) {
        var o = Xu(n);
        return vl(ol.create, gu, null, [e, t, o, r]);
      }
      function zu(e, t, n, r) {
        return (
          (n = Zu.get(t.element.componentProvider.provider.token) || Xu(n)),
          vl(ol.create, bu, null, [e, t, n, r])
        );
      }
      function Bu(e, t, n, r) {
        return Da(
          e,
          t,
          n,
          (function(e) {
            var t = (function(e) {
                var t = !1,
                  n = !1;
                return 0 === Uu.size
                  ? { hasOverrides: t, hasDeprecatedOverrides: n }
                  : (e.providers.forEach(function(e) {
                      var r = Uu.get(e.token);
                      3840 & e.flags &&
                        r &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    }),
                    e.modules.forEach(function(e) {
                      Gu.forEach(function(r, o) {
                        me(o).providedIn === e &&
                          ((t = !0), (n = n || r.deprecatedBehavior));
                      });
                    }),
                    { hasOverrides: t, hasDeprecatedOverrides: n });
              })(e),
              n = t.hasDeprecatedOverrides;
            return t.hasOverrides
              ? ((function(e) {
                  for (var t = 0; t < e.providers.length; t++) {
                    var r = e.providers[t];
                    n && (r.flags |= 4096);
                    var o = Uu.get(r.token);
                    o &&
                      ((r.flags = (-3841 & r.flags) | o.flags),
                      (r.deps = Us(o.deps)),
                      (r.value = o.value));
                  }
                  if (Gu.size > 0) {
                    var i = new Set(e.modules);
                    Gu.forEach(function(t, r) {
                      if (i.has(me(r).providedIn)) {
                        var o = {
                          token: r,
                          flags: t.flags | (n ? 4096 : 0),
                          deps: Us(t.deps),
                          value: t.value,
                          index: e.providers.length
                        };
                        e.providers.push(o), (e.providersByKey[Os(r)] = o);
                      }
                    });
                  }
                })(
                  (e = e.factory(function() {
                    return Es;
                  }))
                ),
                e)
              : e;
          })(r)
        );
      }
      var Uu = new Map(),
        Gu = new Map(),
        Zu = new Map();
      function Qu(e) {
        var t;
        Uu.set(e.token, e),
          'function' == typeof e.token &&
            (t = me(e.token)) &&
            'function' == typeof t.providedIn &&
            Gu.set(e.token, e);
      }
      function Wu(e, t) {
        var n = Qs(t.viewDefFactory),
          r = Qs(n.nodes[0].element.componentView);
        Zu.set(e, r);
      }
      function qu() {
        Uu.clear(), Gu.clear(), Zu.clear();
      }
      function Xu(e) {
        if (0 === Uu.size) return e;
        var t = (function(e) {
          for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
            var o = e.nodes[r];
            1 & o.flags && (n = o),
              n &&
                3840 & o.flags &&
                Uu.has(o.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(function() {
          return Es;
        });
        for (var n = 0; n < t.length; n++) r(e, t[n]);
        return e;
        function r(e, t) {
          for (var n = t + 1; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = Uu.get(o.token);
              i &&
                ((r.flags = (-3841 & r.flags) | i.flags),
                (o.deps = Us(i.deps)),
                (o.value = i.value));
            }
          }
        }
      }
      function Yu(e, t, n, r, o, i, s, a, u, l, c, d, p) {
        var f = e.def.nodes[t];
        return (
          Su(e, f, n, r, o, i, s, a, u, l, c, d, p),
          224 & f.flags ? ms(e, t).value : void 0
        );
      }
      function Ku(e, t, n, r, o, i, s, a, u, l, c, d, p) {
        var f = e.def.nodes[t];
        return (
          Au(e, f, n, r, o, i, s, a, u, l, c, d, p),
          224 & f.flags ? ms(e, t).value : void 0
        );
      }
      function $u(e) {
        return vl(ol.detectChanges, Eu, null, [e]);
      }
      function Ju(e) {
        return vl(ol.checkNoChanges, Cu, null, [e]);
      }
      function el(e) {
        return vl(ol.destroy, Iu, null, [e]);
      }
      var tl,
        nl,
        rl,
        ol = (function(e) {
          return (
            (e[(e.create = 0)] = 'create'),
            (e[(e.detectChanges = 1)] = 'detectChanges'),
            (e[(e.checkNoChanges = 2)] = 'checkNoChanges'),
            (e[(e.destroy = 3)] = 'destroy'),
            (e[(e.handleEvent = 4)] = 'handleEvent'),
            e
          );
        })({});
      function il(e, t) {
        (nl = e), (rl = t);
      }
      function sl(e, t, n, r) {
        return (
          il(e, t), vl(ol.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function al(e, t) {
        if (128 & e.state) throw Cs(ol[tl]);
        return (
          il(e, dl(e, 0)),
          e.def.updateDirectives(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var s = e.def.nodes[n];
            return (
              0 === t ? ll(e, s, r, o) : cl(e, s, r, o),
              16384 & s.flags && il(e, dl(e, n)),
              224 & s.flags ? ms(e, s.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function ul(e, t) {
        if (128 & e.state) throw Cs(ol[tl]);
        return (
          il(e, pl(e, 0)),
          e.def.updateRenderer(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var s = e.def.nodes[n];
            return (
              0 === t ? ll(e, s, r, o) : cl(e, s, r, o),
              3 & s.flags && il(e, pl(e, n)),
              224 & s.flags ? ms(e, s.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function ll(e, t, n, r) {
        if (Su.apply(void 0, c([e, t, n], r))) {
          var o = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            for (var i = {}, s = 0; s < t.bindings.length; s++) {
              var a = t.bindings[s],
                u = o[s];
              8 & a.flags &&
                (i[
                  ((f = a.nonMinifiedName),
                  'ng-reflect-' +
                    f.replace(/[$@]/g, '_').replace(yn, function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      return '-' + e[1].toLowerCase();
                    }))
                ] = gn(u));
            }
            var l = t.parent,
              d = ys(e, l.nodeIndex).renderElement;
            if (l.element.name)
              for (var p in i)
                null != (u = i[p])
                  ? e.renderer.setAttribute(d, p, u)
                  : e.renderer.removeAttribute(d, p);
            else
              e.renderer.setValue(d, 'bindings=' + JSON.stringify(i, null, 2));
          }
        }
        var f;
      }
      function cl(e, t, n, r) {
        Au.apply(void 0, c([e, t, n], r));
      }
      function dl(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      function pl(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      var fl = (function() {
        function e(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags); )
            n = n.parent;
          if (!n) for (; !n && r; ) (n = Ls(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        return (
          Object.defineProperty(e.prototype, 'elOrCompView', {
            get: function() {
              return (
                ys(this.elView, this.elDef.nodeIndex).componentView || this.view
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return Ia(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'component', {
            get: function() {
              return this.elOrCompView.component;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'context', {
            get: function() {
              return this.elOrCompView.context;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'providerTokens', {
            get: function() {
              var e = [];
              if (this.elDef)
                for (
                  var t = this.elDef.nodeIndex + 1;
                  t <= this.elDef.nodeIndex + this.elDef.childCount;
                  t++
                ) {
                  var n = this.elView.def.nodes[t];
                  20224 & n.flags && e.push(n.provider.token),
                    (t += n.childCount);
                }
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'references', {
            get: function() {
              var e = {};
              if (this.elDef) {
                hl(this.elView, this.elDef, e);
                for (
                  var t = this.elDef.nodeIndex + 1;
                  t <= this.elDef.nodeIndex + this.elDef.childCount;
                  t++
                ) {
                  var n = this.elView.def.nodes[t];
                  20224 & n.flags && hl(this.elView, n, e), (t += n.childCount);
                }
              }
              return e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'componentRenderElement', {
            get: function() {
              var e = (function(e) {
                for (; e && !Fs(e); ) e = e.parent;
                return e.parent ? ys(e.parent, Ls(e).nodeIndex) : null;
              })(this.elOrCompView);
              return e ? e.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'renderNode', {
            get: function() {
              return 2 & this.nodeDef.flags
                ? Hs(this.view, this.nodeDef)
                : Hs(this.elView, this.elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.logError = function(e) {
            for (var t, n, r = [], o = 1; o < arguments.length; o++)
              r[o - 1] = arguments[o];
            2 & this.nodeDef.flags
              ? ((t = this.view.def), (n = this.nodeDef.nodeIndex))
              : ((t = this.elView.def), (n = this.elDef.nodeIndex));
            var i = (function(e, t) {
                for (var n = -1, r = 0; r <= t; r++)
                  3 & e.nodes[r].flags && n++;
                return n;
              })(t, n),
              s = -1;
            t.factory(function() {
              var t;
              return ++s === i ? (t = e.error).bind.apply(t, c([e], r)) : Es;
            }),
              s < i &&
                (e.error(
                  'Illegal state: the ViewDefinitionFactory did not call the logger!'
                ),
                e.error.apply(e, c(r)));
          }),
          e
        );
      })();
      function hl(e, t, n) {
        for (var r in t.references) n[r] = lu(e, t, t.references[r]);
      }
      function vl(e, t, n, r) {
        var o = tl,
          i = nl,
          s = rl;
        try {
          tl = e;
          var a = t.apply(n, r);
          return (nl = i), (rl = s), (tl = o), a;
        } catch (u) {
          if (Fo(u) || !nl) throw u;
          throw (function(e, t) {
            return (
              e instanceof Error || (e = new Error(e.toString())), xs(e, t), e
            );
          })(u, yl());
        }
      }
      function yl() {
        return nl ? new fl(nl, rl) : null;
      }
      var gl = (function() {
          function e(e) {
            this.delegate = e;
          }
          return (
            (e.prototype.createRenderer = function(e, t) {
              return new ml(this.delegate.createRenderer(e, t));
            }),
            (e.prototype.begin = function() {
              this.delegate.begin && this.delegate.begin();
            }),
            (e.prototype.end = function() {
              this.delegate.end && this.delegate.end();
            }),
            (e.prototype.whenRenderingDone = function() {
              return this.delegate.whenRenderingDone
                ? this.delegate.whenRenderingDone()
                : Promise.resolve(null);
            }),
            e
          );
        })(),
        ml = (function() {
          function e(e) {
            (this.delegate = e),
              (this.debugContextFactory = yl),
              (this.data = this.delegate.data);
          }
          return (
            (e.prototype.createDebugContext = function(e) {
              return this.debugContextFactory(e);
            }),
            (e.prototype.destroyNode = function(e) {
              !(function(e) {
                Ui.delete(e.nativeNode);
              })(Gi(e)),
                this.delegate.destroyNode && this.delegate.destroyNode(e);
            }),
            (e.prototype.destroy = function() {
              this.delegate.destroy();
            }),
            (e.prototype.createElement = function(e, t) {
              var n = this.delegate.createElement(e, t),
                r = this.createDebugContext(n);
              if (r) {
                var o = new Bi(n, null, r);
                (o.name = e), Zi(o);
              }
              return n;
            }),
            (e.prototype.createComment = function(e) {
              var t = this.delegate.createComment(e),
                n = this.createDebugContext(t);
              return n && Zi(new zi(t, null, n)), t;
            }),
            (e.prototype.createText = function(e) {
              var t = this.delegate.createText(e),
                n = this.createDebugContext(t);
              return n && Zi(new zi(t, null, n)), t;
            }),
            (e.prototype.appendChild = function(e, t) {
              var n = Gi(e),
                r = Gi(t);
              n && r && n instanceof Bi && n.addChild(r),
                this.delegate.appendChild(e, t);
            }),
            (e.prototype.insertBefore = function(e, t, n) {
              var r = Gi(e),
                o = Gi(t),
                i = Gi(n);
              r && o && r instanceof Bi && r.insertBefore(i, o),
                this.delegate.insertBefore(e, t, n);
            }),
            (e.prototype.removeChild = function(e, t) {
              var n = Gi(e),
                r = Gi(t);
              n && r && n instanceof Bi && n.removeChild(r),
                this.delegate.removeChild(e, t);
            }),
            (e.prototype.selectRootElement = function(e, t) {
              var n = this.delegate.selectRootElement(e, t),
                r = yl();
              return r && Zi(new Bi(n, null, r)), n;
            }),
            (e.prototype.setAttribute = function(e, t, n, r) {
              var o = Gi(e);
              o && o instanceof Bi && (o.attributes[r ? r + ':' + t : t] = n),
                this.delegate.setAttribute(e, t, n, r);
            }),
            (e.prototype.removeAttribute = function(e, t, n) {
              var r = Gi(e);
              r &&
                r instanceof Bi &&
                (r.attributes[n ? n + ':' + t : t] = null),
                this.delegate.removeAttribute(e, t, n);
            }),
            (e.prototype.addClass = function(e, t) {
              var n = Gi(e);
              n && n instanceof Bi && (n.classes[t] = !0),
                this.delegate.addClass(e, t);
            }),
            (e.prototype.removeClass = function(e, t) {
              var n = Gi(e);
              n && n instanceof Bi && (n.classes[t] = !1),
                this.delegate.removeClass(e, t);
            }),
            (e.prototype.setStyle = function(e, t, n, r) {
              var o = Gi(e);
              o && o instanceof Bi && (o.styles[t] = n),
                this.delegate.setStyle(e, t, n, r);
            }),
            (e.prototype.removeStyle = function(e, t, n) {
              var r = Gi(e);
              r && r instanceof Bi && (r.styles[t] = null),
                this.delegate.removeStyle(e, t, n);
            }),
            (e.prototype.setProperty = function(e, t, n) {
              var r = Gi(e);
              r && r instanceof Bi && (r.properties[t] = n),
                this.delegate.setProperty(e, t, n);
            }),
            (e.prototype.listen = function(e, t, n) {
              if ('string' != typeof e) {
                var r = Gi(e);
                r && r.listeners.push(new Fi(t, n));
              }
              return this.delegate.listen(e, t, n);
            }),
            (e.prototype.parentNode = function(e) {
              return this.delegate.parentNode(e);
            }),
            (e.prototype.nextSibling = function(e) {
              return this.delegate.nextSibling(e);
            }),
            (e.prototype.setValue = function(e, t) {
              return this.delegate.setValue(e, t);
            }),
            e
          );
        })();
      function bl(e, t, n) {
        return new _l(e, t, n);
      }
      var _l = (function(e) {
          function t(t, n, r) {
            var o = e.call(this) || this;
            return (
              (o.moduleType = t),
              (o._bootstrapComponents = n),
              (o._ngModuleDefFactory = r),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.create = function(e) {
              !(function() {
                if (!ju) {
                  ju = !0;
                  var e = uo()
                    ? {
                        setCurrentNode: il,
                        createRootView: Lu,
                        createEmbeddedView: Fu,
                        createComponentView: zu,
                        createNgModuleRef: Bu,
                        overrideProvider: Qu,
                        overrideComponentView: Wu,
                        clearOverrides: qu,
                        checkAndUpdateView: $u,
                        checkNoChangesView: Ju,
                        destroyView: el,
                        createDebugContext: function(e, t) {
                          return new fl(e, t);
                        },
                        handleEvent: sl,
                        updateDirectives: al,
                        updateRenderer: ul
                      }
                    : {
                        setCurrentNode: function() {},
                        createRootView: Ru,
                        createEmbeddedView: gu,
                        createComponentView: bu,
                        createNgModuleRef: Da,
                        overrideProvider: Es,
                        overrideComponentView: Es,
                        clearOverrides: Es,
                        checkAndUpdateView: Eu,
                        checkNoChangesView: Cu,
                        destroyView: Iu,
                        createDebugContext: function(e, t) {
                          return new fl(e, t);
                        },
                        handleEvent: function(e, t, n, r) {
                          return e.def.handleEvent(e, t, n, r);
                        },
                        updateDirectives: function(e, t) {
                          return e.def.updateDirectives(0 === t ? Yu : Ku, e);
                        },
                        updateRenderer: function(e, t) {
                          return e.def.updateRenderer(0 === t ? Yu : Ku, e);
                        }
                      };
                  (_s.setCurrentNode = e.setCurrentNode),
                    (_s.createRootView = e.createRootView),
                    (_s.createEmbeddedView = e.createEmbeddedView),
                    (_s.createComponentView = e.createComponentView),
                    (_s.createNgModuleRef = e.createNgModuleRef),
                    (_s.overrideProvider = e.overrideProvider),
                    (_s.overrideComponentView = e.overrideComponentView),
                    (_s.clearOverrides = e.clearOverrides),
                    (_s.checkAndUpdateView = e.checkAndUpdateView),
                    (_s.checkNoChangesView = e.checkNoChangesView),
                    (_s.destroyView = e.destroyView),
                    (_s.resolveDep = eu),
                    (_s.createDebugContext = e.createDebugContext),
                    (_s.handleEvent = e.handleEvent),
                    (_s.updateDirectives = e.updateDirectives),
                    (_s.updateRenderer = e.updateRenderer),
                    (_s.dirtyParentQueries = su);
                }
              })();
              var t = (function(e) {
                var t = Array.from(e.providers),
                  n = Array.from(e.modules),
                  r = {};
                for (var o in e.providersByKey) r[o] = e.providersByKey[o];
                return {
                  factory: e.factory,
                  isRoot: e.isRoot,
                  providers: t,
                  modules: n,
                  providersByKey: r
                };
              })(Qs(this._ngModuleDefFactory));
              return _s.createNgModuleRef(
                this.moduleType,
                e || ir.NULL,
                this._bootstrapComponents,
                t
              );
            }),
            t
          );
        })(zr),
        wl = (function() {
          return function() {};
        })(),
        xl = n('Gz50'),
        Cl = (function() {
          return function() {
            this.charts = [
              { data: xl.Bar, type: 'Bar' },
              { data: xl.Line, type: 'Line' },
              { data: xl.Line2, type: 'Line' },
              {
                data: xl.Scatter,
                options: {
                  axisX: {
                    labelInterpolationFnc: function(e, t) {
                      return t % 13 == 0 ? 'W' + e : null;
                    }
                  },
                  showLine: !1
                },
                responsiveOptions: [
                  [
                    'screen and (min-width: 640px)',
                    {
                      axisX: {
                        labelInterpolationFnc: function(e, t) {
                          return t % 4 == 0 ? 'W' + e : null;
                        }
                      }
                    }
                  ]
                ],
                type: 'Line'
              },
              {
                data: xl.LineWithArea,
                options: { low: 0, showArea: !0 },
                type: 'Line'
              },
              {
                data: xl['Bi-PolarBar'],
                options: {
                  axisX: {
                    labelInterpolationFnc: function(e, t) {
                      return t % 2 == 0 ? e : null;
                    }
                  },
                  high: 10,
                  low: -10
                },
                type: 'Bar'
              },
              {
                data: xl.DistributedSeries,
                options: { distributeSeries: !0 },
                type: 'Bar'
              },
              {
                data: xl.Pie,
                options: {
                  donut: !0,
                  donutWidth: 60,
                  showLabel: !1,
                  startAngle: 270,
                  total: 200
                },
                type: 'Pie'
              },
              {
                data: xl.Pie,
                options: { donut: !0, showLabel: !1 },
                type: 'Pie'
              }
            ];
          };
        })(),
        El = n('BeBh'),
        Sl = (function() {
          function e(e) {
            this.element = e.nativeElement;
          }
          return (
            (e.prototype.ngOnInit = function() {
              var e = this;
              return (
                (this.type && this.data) ||
                  Promise.reject('Expected at least type and data.'),
                this.renderChart().then(function(t) {
                  return void 0 !== e.events && e.bindEvents(t), t;
                })
              );
            }),
            (e.prototype.ngOnChanges = function(e) {
              this.update(e);
            }),
            (e.prototype.ngOnDestroy = function() {
              this.chart && this.chart.detach();
            }),
            (e.prototype.renderChart = function() {
              var e = this;
              return Promise.all([
                this.type,
                this.element,
                this.data,
                this.options,
                this.responsiveOptions
              ]).then(function(t) {
                var n = l(t),
                  r = n[0],
                  o = n.slice(1);
                if (!(r in El))
                  throw new Error(r + ' is not a valid chart type');
                return (e.chart = El[r].apply(El, c(o))), e.chart;
              });
            }),
            (e.prototype.update = function(e) {
              !this.chart || 'type' in e
                ? this.renderChart()
                : (e.data && (this.data = e.data.currentValue),
                  e.options && (this.options = e.options.currentValue),
                  this.chart.update(this.data, this.options));
            }),
            (e.prototype.bindEvents = function(e) {
              var t, n;
              try {
                for (
                  var r = u(Object.keys(this.events)), o = r.next();
                  !o.done;
                  o = r.next()
                ) {
                  var i = o.value;
                  e.on(i, this.events[i]);
                }
              } catch (s) {
                t = { error: s };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            e
          );
        })(),
        Ol = (function() {
          return function() {};
        })(),
        Al = Is({ encapsulation: 2, styles: [], data: {} });
      function kl(e) {
        return hu(
          0,
          [
            {
              nodeIndex: -1,
              parent: null,
              renderParent: null,
              bindingIndex: -1,
              outputIndex: -1,
              checkIndex: -1,
              flags: 8,
              childFlags: 0,
              directChildFlags: 0,
              childMatchedQueries: 0,
              matchedQueries: {},
              matchedQueryIds: 0,
              references: {},
              ngContentIndex: null,
              childCount: 0,
              bindings: [],
              bindingFlags: 0,
              outputs: [],
              element: null,
              provider: null,
              text: null,
              query: null,
              ngContent: { index: 0 }
            }
          ],
          null,
          null
        );
      }
      var Il = (function() {
          return function() {};
        })(),
        Tl = void 0,
        Nl = [
          'en',
          [['a', 'p'], ['AM', 'PM'], Tl],
          [['AM', 'PM'], Tl, Tl],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
          ],
          Tl,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ]
          ],
          Tl,
          [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', Tl, "{1} 'at' {0}", Tl],
          [
            '.',
            ',',
            ';',
            '%',
            '+',
            '-',
            'E',
            '\xd7',
            '\u2030',
            '\u221e',
            'NaN',
            ':'
          ],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          '$',
          'US Dollar',
          {},
          function(e) {
            var t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === t && 0 === n ? 1 : 5;
          }
        ],
        Pl = {},
        Vl = (function(e) {
          return (
            (e[(e.Zero = 0)] = 'Zero'),
            (e[(e.One = 1)] = 'One'),
            (e[(e.Two = 2)] = 'Two'),
            (e[(e.Few = 3)] = 'Few'),
            (e[(e.Many = 4)] = 'Many'),
            (e[(e.Other = 5)] = 'Other'),
            e
          );
        })({}),
        Dl = new _e('UseV4Plurals'),
        Ml = (function() {
          return function() {};
        })(),
        jl = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (r.locale = t), (r.deprecatedPluralFn = n), r;
          }
          return (
            o(t, e),
            (t.prototype.getPluralCategory = function(e, t) {
              switch (
                this.deprecatedPluralFn
                  ? this.deprecatedPluralFn(t || this.locale, e)
                  : (function(e) {
                      return (function(e) {
                        var t = e.toLowerCase().replace(/_/g, '-'),
                          n = Pl[t];
                        if (n) return n;
                        var r = t.split('-')[0];
                        if ((n = Pl[r])) return n;
                        if ('en' === r) return Nl;
                        throw new Error(
                          'Missing locale data for the locale "' + e + '".'
                        );
                      })(e)[18];
                    })(t || this.locale)(e)
              ) {
                case Vl.Zero:
                  return 'zero';
                case Vl.One:
                  return 'one';
                case Vl.Two:
                  return 'two';
                case Vl.Few:
                  return 'few';
                case Vl.Many:
                  return 'many';
                default:
                  return 'other';
              }
            }),
            t
          );
        })(Ml),
        Rl = (function() {
          function e(e, t, n, r) {
            (this.$implicit = e),
              (this.ngForOf = t),
              (this.index = n),
              (this.count = r);
          }
          return (
            Object.defineProperty(e.prototype, 'first', {
              get: function() {
                return 0 === this.index;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'last', {
              get: function() {
                return this.index === this.count - 1;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'even', {
              get: function() {
                return this.index % 2 == 0;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'odd', {
              get: function() {
                return !this.even;
              },
              enumerable: !0,
              configurable: !0
            }),
            e
          );
        })(),
        Ll = (function() {
          function e(e, t, n) {
            (this._viewContainer = e),
              (this._template = t),
              (this._differs = n),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          return (
            Object.defineProperty(e.prototype, 'ngForOf', {
              set: function(e) {
                (this._ngForOf = e), (this._ngForOfDirty = !0);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'ngForTrackBy', {
              get: function() {
                return this._trackByFn;
              },
              set: function(e) {
                uo() &&
                  null != e &&
                  'function' != typeof e &&
                  console &&
                  console.warn &&
                  console.warn(
                    'trackBy must be a function, but received ' +
                      JSON.stringify(e) +
                      '. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
                  ),
                  (this._trackByFn = e);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'ngForTemplate', {
              set: function(e) {
                e && (this._template = e);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.ngDoCheck = function() {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                var e = this._ngForOf;
                if (!this._differ && e)
                  try {
                    this._differ = this._differs
                      .find(e)
                      .create(this.ngForTrackBy);
                  } catch (r) {
                    throw new Error(
                      "Cannot find a differ supporting object '" +
                        e +
                        "' of type '" +
                        ((t = e).name || typeof t) +
                        "'. NgFor only supports binding to Iterables such as Arrays."
                    );
                  }
              }
              var t;
              if (this._differ) {
                var n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n);
              }
            }),
            (e.prototype._applyChanges = function(e) {
              var t = this,
                n = [];
              e.forEachOperation(function(e, r, o) {
                if (null == e.previousIndex) {
                  var i = t._viewContainer.createEmbeddedView(
                      t._template,
                      new Rl(null, t._ngForOf, -1, -1),
                      o
                    ),
                    s = new Hl(e, i);
                  n.push(s);
                } else null == o ? t._viewContainer.remove(r) : ((i = t._viewContainer.get(r)), t._viewContainer.move(i, o), (s = new Hl(e, i)), n.push(s));
              });
              for (var r = 0; r < n.length; r++)
                this._perViewChange(n[r].view, n[r].record);
              r = 0;
              for (var o = this._viewContainer.length; r < o; r++) {
                var i = this._viewContainer.get(r);
                (i.context.index = r),
                  (i.context.count = o),
                  (i.context.ngForOf = this._ngForOf);
              }
              e.forEachIdentityChange(function(e) {
                t._viewContainer.get(e.currentIndex).context.$implicit = e.item;
              });
            }),
            (e.prototype._perViewChange = function(e, t) {
              e.context.$implicit = t.item;
            }),
            (e.ngTemplateContextGuard = function(e, t) {
              return !0;
            }),
            e
          );
        })(),
        Hl = (function() {
          return function(e, t) {
            (this.record = e), (this.view = t);
          };
        })(),
        Fl = (function() {
          return function() {};
        })(),
        zl = new _e('DocumentToken'),
        Bl = 'server',
        Ul = n('Gz50'),
        Gl = (function() {
          return function() {
            (this.data = new Promise(function(e) {
              setTimeout(function() {
                e(Ul.Pie);
              }, 5e3);
            })),
              (this.type = new Promise(function(e) {
                setTimeout(function() {
                  e('Pie');
                }, 5e3);
              }));
          };
        })(),
        Zl = Is({ encapsulation: 2, styles: [], data: {} });
      function Ql(e) {
        return hu(
          0,
          [
            (e()(),
            na(0, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), du(-1, null, ['Async'])),
            (e()(),
            na(
              2,
              0,
              null,
              null,
              1,
              'x-chartist',
              [],
              null,
              null,
              null,
              kl,
              Al
            )),
            Ga(
              3,
              770048,
              null,
              0,
              Sl,
              [Ur],
              { data: [0, 'data'], type: [1, 'type'] },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.data, n.type);
          },
          null
        );
      }
      var Wl = (function() {
          function e() {
            var e = this;
            (this.data = { labels: [], series: [[]] }),
              (this.type = 'Bar'),
              (this.interval = setInterval(function() {
                var t = new Date(),
                  n = [t.getHours(), t.getMinutes(), t.getSeconds()].join(':'),
                  r = Math.floor(39 * Math.random()) + 1,
                  o = e.data.series[0],
                  i = e.data.labels;
                i.push(n),
                  o.push(r),
                  (e.data.labels = i.slice(-9)),
                  (e.data.series[0] = o.slice(-9)),
                  (e.data = Object.assign({}, e.data));
              }, 2500));
          }
          return (
            (e.prototype.ngOnDestroy = function() {
              clearInterval(this.interval);
            }),
            e
          );
        })(),
        ql = Is({ encapsulation: 2, styles: [], data: {} });
      function Xl(e) {
        return hu(
          0,
          [
            (e()(),
            na(0, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), du(-1, null, ['Live Updating'])),
            (e()(),
            na(
              2,
              0,
              null,
              null,
              1,
              'x-chartist',
              [],
              null,
              null,
              null,
              kl,
              Al
            )),
            Ga(
              3,
              770048,
              null,
              0,
              Sl,
              [Ur],
              { data: [0, 'data'], type: [1, 'type'] },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.data, n.type);
          },
          null
        );
      }
      var Yl = new T(function(e) {
          return e.complete();
        }),
        Kl = (function(e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            (r.sources = n), (r.completed = 0), (r.haveValues = 0);
            var o = n.length;
            r.values = new Array(o);
            for (var i = 0; i < o; i++) {
              var s = q(r, n[i], null, i);
              s && r.add(s);
            }
            return r;
          }
          return (
            o(t, e),
            (t.prototype.notifyNext = function(e, t, n, r, o) {
              (this.values[n] = t),
                o._hasValue || ((o._hasValue = !0), this.haveValues++);
            }),
            (t.prototype.notifyComplete = function(e) {
              var t = this.destination,
                n = this.haveValues,
                r = this.values,
                o = r.length;
              e._hasValue
                ? (this.completed++,
                  this.completed === o && (n === o && t.next(r), t.complete()))
                : t.complete();
            }),
            t
          );
        })(X),
        $l = null;
      function Jl() {
        return $l;
      }
      var ec,
        tc = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        nc = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        rc = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        };
      Se.Node &&
        (ec =
          Se.Node.prototype.contains ||
          function(e) {
            return !!(16 & this.compareDocumentPosition(e));
          });
      var oc,
        ic = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.parse = function(e) {
              throw new Error('parse not implemented');
            }),
            (t.makeCurrent = function() {
              var e;
              (e = new t()), $l || ($l = e);
            }),
            (t.prototype.hasProperty = function(e, t) {
              return t in e;
            }),
            (t.prototype.setProperty = function(e, t, n) {
              e[t] = n;
            }),
            (t.prototype.getProperty = function(e, t) {
              return e[t];
            }),
            (t.prototype.invoke = function(e, t, n) {
              var r;
              (r = e)[t].apply(r, c(n));
            }),
            (t.prototype.logError = function(e) {
              window.console &&
                (console.error ? console.error(e) : console.log(e));
            }),
            (t.prototype.log = function(e) {
              window.console && window.console.log && window.console.log(e);
            }),
            (t.prototype.logGroup = function(e) {
              window.console && window.console.group && window.console.group(e);
            }),
            (t.prototype.logGroupEnd = function() {
              window.console &&
                window.console.groupEnd &&
                window.console.groupEnd();
            }),
            Object.defineProperty(t.prototype, 'attrToPropMap', {
              get: function() {
                return tc;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.contains = function(e, t) {
              return ec.call(e, t);
            }),
            (t.prototype.querySelector = function(e, t) {
              return e.querySelector(t);
            }),
            (t.prototype.querySelectorAll = function(e, t) {
              return e.querySelectorAll(t);
            }),
            (t.prototype.on = function(e, t, n) {
              e.addEventListener(t, n, !1);
            }),
            (t.prototype.onAndCancel = function(e, t, n) {
              return (
                e.addEventListener(t, n, !1),
                function() {
                  e.removeEventListener(t, n, !1);
                }
              );
            }),
            (t.prototype.dispatchEvent = function(e, t) {
              e.dispatchEvent(t);
            }),
            (t.prototype.createMouseEvent = function(e) {
              var t = this.getDefaultDocument().createEvent('MouseEvent');
              return t.initEvent(e, !0, !0), t;
            }),
            (t.prototype.createEvent = function(e) {
              var t = this.getDefaultDocument().createEvent('Event');
              return t.initEvent(e, !0, !0), t;
            }),
            (t.prototype.preventDefault = function(e) {
              e.preventDefault(), (e.returnValue = !1);
            }),
            (t.prototype.isPrevented = function(e) {
              return (
                e.defaultPrevented || (null != e.returnValue && !e.returnValue)
              );
            }),
            (t.prototype.getInnerHTML = function(e) {
              return e.innerHTML;
            }),
            (t.prototype.getTemplateContent = function(e) {
              return 'content' in e && this.isTemplateElement(e)
                ? e.content
                : null;
            }),
            (t.prototype.getOuterHTML = function(e) {
              return e.outerHTML;
            }),
            (t.prototype.nodeName = function(e) {
              return e.nodeName;
            }),
            (t.prototype.nodeValue = function(e) {
              return e.nodeValue;
            }),
            (t.prototype.type = function(e) {
              return e.type;
            }),
            (t.prototype.content = function(e) {
              return this.hasProperty(e, 'content') ? e.content : e;
            }),
            (t.prototype.firstChild = function(e) {
              return e.firstChild;
            }),
            (t.prototype.nextSibling = function(e) {
              return e.nextSibling;
            }),
            (t.prototype.parentElement = function(e) {
              return e.parentNode;
            }),
            (t.prototype.childNodes = function(e) {
              return e.childNodes;
            }),
            (t.prototype.childNodesAsList = function(e) {
              for (
                var t = e.childNodes, n = new Array(t.length), r = 0;
                r < t.length;
                r++
              )
                n[r] = t[r];
              return n;
            }),
            (t.prototype.clearNodes = function(e) {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
            }),
            (t.prototype.appendChild = function(e, t) {
              e.appendChild(t);
            }),
            (t.prototype.removeChild = function(e, t) {
              e.removeChild(t);
            }),
            (t.prototype.replaceChild = function(e, t, n) {
              e.replaceChild(t, n);
            }),
            (t.prototype.remove = function(e) {
              return e.parentNode && e.parentNode.removeChild(e), e;
            }),
            (t.prototype.insertBefore = function(e, t, n) {
              e.insertBefore(n, t);
            }),
            (t.prototype.insertAllBefore = function(e, t, n) {
              n.forEach(function(n) {
                return e.insertBefore(n, t);
              });
            }),
            (t.prototype.insertAfter = function(e, t, n) {
              e.insertBefore(n, t.nextSibling);
            }),
            (t.prototype.setInnerHTML = function(e, t) {
              e.innerHTML = t;
            }),
            (t.prototype.getText = function(e) {
              return e.textContent;
            }),
            (t.prototype.setText = function(e, t) {
              e.textContent = t;
            }),
            (t.prototype.getValue = function(e) {
              return e.value;
            }),
            (t.prototype.setValue = function(e, t) {
              e.value = t;
            }),
            (t.prototype.getChecked = function(e) {
              return e.checked;
            }),
            (t.prototype.setChecked = function(e, t) {
              e.checked = t;
            }),
            (t.prototype.createComment = function(e) {
              return this.getDefaultDocument().createComment(e);
            }),
            (t.prototype.createTemplate = function(e) {
              var t = this.getDefaultDocument().createElement('template');
              return (t.innerHTML = e), t;
            }),
            (t.prototype.createElement = function(e, t) {
              return (t = t || this.getDefaultDocument()).createElement(e);
            }),
            (t.prototype.createElementNS = function(e, t, n) {
              return (n = n || this.getDefaultDocument()).createElementNS(e, t);
            }),
            (t.prototype.createTextNode = function(e, t) {
              return (t = t || this.getDefaultDocument()).createTextNode(e);
            }),
            (t.prototype.createScriptTag = function(e, t, n) {
              var r = (n = n || this.getDefaultDocument()).createElement(
                'SCRIPT'
              );
              return r.setAttribute(e, t), r;
            }),
            (t.prototype.createStyleElement = function(e, t) {
              var n = (t = t || this.getDefaultDocument()).createElement(
                'style'
              );
              return this.appendChild(n, this.createTextNode(e, t)), n;
            }),
            (t.prototype.createShadowRoot = function(e) {
              return e.createShadowRoot();
            }),
            (t.prototype.getShadowRoot = function(e) {
              return e.shadowRoot;
            }),
            (t.prototype.getHost = function(e) {
              return e.host;
            }),
            (t.prototype.clone = function(e) {
              return e.cloneNode(!0);
            }),
            (t.prototype.getElementsByClassName = function(e, t) {
              return e.getElementsByClassName(t);
            }),
            (t.prototype.getElementsByTagName = function(e, t) {
              return e.getElementsByTagName(t);
            }),
            (t.prototype.classList = function(e) {
              return Array.prototype.slice.call(e.classList, 0);
            }),
            (t.prototype.addClass = function(e, t) {
              e.classList.add(t);
            }),
            (t.prototype.removeClass = function(e, t) {
              e.classList.remove(t);
            }),
            (t.prototype.hasClass = function(e, t) {
              return e.classList.contains(t);
            }),
            (t.prototype.setStyle = function(e, t, n) {
              e.style[t] = n;
            }),
            (t.prototype.removeStyle = function(e, t) {
              e.style[t] = '';
            }),
            (t.prototype.getStyle = function(e, t) {
              return e.style[t];
            }),
            (t.prototype.hasStyle = function(e, t, n) {
              var r = this.getStyle(e, t) || '';
              return n ? r == n : r.length > 0;
            }),
            (t.prototype.tagName = function(e) {
              return e.tagName;
            }),
            (t.prototype.attributeMap = function(e) {
              for (
                var t = new Map(), n = e.attributes, r = 0;
                r < n.length;
                r++
              ) {
                var o = n.item(r);
                t.set(o.name, o.value);
              }
              return t;
            }),
            (t.prototype.hasAttribute = function(e, t) {
              return e.hasAttribute(t);
            }),
            (t.prototype.hasAttributeNS = function(e, t, n) {
              return e.hasAttributeNS(t, n);
            }),
            (t.prototype.getAttribute = function(e, t) {
              return e.getAttribute(t);
            }),
            (t.prototype.getAttributeNS = function(e, t, n) {
              return e.getAttributeNS(t, n);
            }),
            (t.prototype.setAttribute = function(e, t, n) {
              e.setAttribute(t, n);
            }),
            (t.prototype.setAttributeNS = function(e, t, n, r) {
              e.setAttributeNS(t, n, r);
            }),
            (t.prototype.removeAttribute = function(e, t) {
              e.removeAttribute(t);
            }),
            (t.prototype.removeAttributeNS = function(e, t, n) {
              e.removeAttributeNS(t, n);
            }),
            (t.prototype.templateAwareRoot = function(e) {
              return this.isTemplateElement(e) ? this.content(e) : e;
            }),
            (t.prototype.createHtmlDocument = function() {
              return document.implementation.createHTMLDocument('fakeTitle');
            }),
            (t.prototype.getDefaultDocument = function() {
              return document;
            }),
            (t.prototype.getBoundingClientRect = function(e) {
              try {
                return e.getBoundingClientRect();
              } catch (t) {
                return {
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: 0,
                  height: 0
                };
              }
            }),
            (t.prototype.getTitle = function(e) {
              return e.title;
            }),
            (t.prototype.setTitle = function(e, t) {
              e.title = t || '';
            }),
            (t.prototype.elementMatches = function(e, t) {
              return (
                !!this.isElementNode(e) &&
                ((e.matches && e.matches(t)) ||
                  (e.msMatchesSelector && e.msMatchesSelector(t)) ||
                  (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
              );
            }),
            (t.prototype.isTemplateElement = function(e) {
              return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
            }),
            (t.prototype.isTextNode = function(e) {
              return e.nodeType === Node.TEXT_NODE;
            }),
            (t.prototype.isCommentNode = function(e) {
              return e.nodeType === Node.COMMENT_NODE;
            }),
            (t.prototype.isElementNode = function(e) {
              return e.nodeType === Node.ELEMENT_NODE;
            }),
            (t.prototype.hasShadowRoot = function(e) {
              return null != e.shadowRoot && e instanceof HTMLElement;
            }),
            (t.prototype.isShadowRoot = function(e) {
              return e instanceof DocumentFragment;
            }),
            (t.prototype.importIntoDoc = function(e) {
              return document.importNode(this.templateAwareRoot(e), !0);
            }),
            (t.prototype.adoptNode = function(e) {
              return document.adoptNode(e);
            }),
            (t.prototype.getHref = function(e) {
              return e.getAttribute('href');
            }),
            (t.prototype.getEventKey = function(e) {
              var t = e.key;
              if (null == t) {
                if (null == (t = e.keyIdentifier)) return 'Unidentified';
                t.startsWith('U+') &&
                  ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                  3 === e.location && rc.hasOwnProperty(t) && (t = rc[t]));
              }
              return nc[t] || t;
            }),
            (t.prototype.getGlobalEventTarget = function(e, t) {
              return 'window' === t
                ? window
                : 'document' === t
                ? e
                : 'body' === t
                ? e.body
                : null;
            }),
            (t.prototype.getHistory = function() {
              return window.history;
            }),
            (t.prototype.getLocation = function() {
              return window.location;
            }),
            (t.prototype.getBaseHref = function(e) {
              var t,
                n =
                  sc || (sc = document.querySelector('base'))
                    ? sc.getAttribute('href')
                    : null;
              return null == n
                ? null
                : ((t = n),
                  oc || (oc = document.createElement('a')),
                  oc.setAttribute('href', t),
                  '/' === oc.pathname.charAt(0)
                    ? oc.pathname
                    : '/' + oc.pathname);
            }),
            (t.prototype.resetBaseElement = function() {
              sc = null;
            }),
            (t.prototype.getUserAgent = function() {
              return window.navigator.userAgent;
            }),
            (t.prototype.setData = function(e, t, n) {
              this.setAttribute(e, 'data-' + t, n);
            }),
            (t.prototype.getData = function(e, t) {
              return this.getAttribute(e, 'data-' + t);
            }),
            (t.prototype.getComputedStyle = function(e) {
              return getComputedStyle(e);
            }),
            (t.prototype.supportsWebAnimation = function() {
              return 'function' == typeof Element.prototype.animate;
            }),
            (t.prototype.performanceNow = function() {
              return window.performance && window.performance.now
                ? window.performance.now()
                : new Date().getTime();
            }),
            (t.prototype.supportsCookies = function() {
              return !0;
            }),
            (t.prototype.getCookie = function(e) {
              return (function(e, t) {
                var n, r;
                t = encodeURIComponent(t);
                try {
                  for (
                    var o = u(e.split(';')), i = o.next();
                    !i.done;
                    i = o.next()
                  ) {
                    var s = i.value,
                      a = s.indexOf('='),
                      c = l(
                        -1 == a ? [s, ''] : [s.slice(0, a), s.slice(a + 1)],
                        2
                      ),
                      d = c[1];
                    if (c[0].trim() === t) return decodeURIComponent(d);
                  }
                } catch (p) {
                  n = { error: p };
                } finally {
                  try {
                    i && !i.done && (r = o.return) && r.call(o);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return null;
              })(document.cookie, e);
            }),
            (t.prototype.setCookie = function(e, t) {
              document.cookie =
                encodeURIComponent(e) + '=' + encodeURIComponent(t);
            }),
            t
          );
        })(
          (function(e) {
            function t() {
              var t = e.call(this) || this;
              (t._animationPrefix = null), (t._transitionEnd = null);
              try {
                var n = t.createElement('div', document);
                if (null != t.getStyle(n, 'animationName'))
                  t._animationPrefix = '';
                else
                  for (
                    var r = ['Webkit', 'Moz', 'O', 'ms'], o = 0;
                    o < r.length;
                    o++
                  )
                    if (null != t.getStyle(n, r[o] + 'AnimationName')) {
                      t._animationPrefix = '-' + r[o].toLowerCase() + '-';
                      break;
                    }
                var i = {
                  WebkitTransition: 'webkitTransitionEnd',
                  MozTransition: 'transitionend',
                  OTransition: 'oTransitionEnd otransitionend',
                  transition: 'transitionend'
                };
                Object.keys(i).forEach(function(e) {
                  null != t.getStyle(n, e) && (t._transitionEnd = i[e]);
                });
              } catch (s) {
                (t._animationPrefix = null), (t._transitionEnd = null);
              }
              return t;
            }
            return (
              o(t, e),
              (t.prototype.getDistributedNodes = function(e) {
                return e.getDistributedNodes();
              }),
              (t.prototype.resolveAndSetHref = function(e, t, n) {
                e.href = null == n ? t : t + '/../' + n;
              }),
              (t.prototype.supportsDOMEvents = function() {
                return !0;
              }),
              (t.prototype.supportsNativeShadowDOM = function() {
                return 'function' == typeof document.body.createShadowRoot;
              }),
              (t.prototype.getAnimationPrefix = function() {
                return this._animationPrefix ? this._animationPrefix : '';
              }),
              (t.prototype.getTransitionEnd = function() {
                return this._transitionEnd ? this._transitionEnd : '';
              }),
              (t.prototype.supportsAnimation = function() {
                return (
                  null != this._animationPrefix && null != this._transitionEnd
                );
              }),
              t
            );
          })(
            (function() {
              function e() {
                this.resourceLoaderType = null;
              }
              return (
                Object.defineProperty(e.prototype, 'attrToPropMap', {
                  get: function() {
                    return this._attrToPropMap;
                  },
                  set: function(e) {
                    this._attrToPropMap = e;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                e
              );
            })()
          )
        ),
        sc = null,
        ac = zl;
      function uc() {
        return !!window.history.pushState;
      }
      var lc = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n._doc = t), n._init(), n;
          }
          var n;
          return (
            o(t, e),
            (t.prototype._init = function() {
              (this.location = Jl().getLocation()),
                (this._history = Jl().getHistory());
            }),
            (t.prototype.getBaseHrefFromDOM = function() {
              return Jl().getBaseHref(this._doc);
            }),
            (t.prototype.onPopState = function(e) {
              Jl()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', e, !1);
            }),
            (t.prototype.onHashChange = function(e) {
              Jl()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', e, !1);
            }),
            Object.defineProperty(t.prototype, 'pathname', {
              get: function() {
                return this.location.pathname;
              },
              set: function(e) {
                this.location.pathname = e;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'search', {
              get: function() {
                return this.location.search;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'hash', {
              get: function() {
                return this.location.hash;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.pushState = function(e, t, n) {
              uc()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }),
            (t.prototype.replaceState = function(e, t, n) {
              uc()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }),
            (t.prototype.forward = function() {
              this._history.forward();
            }),
            (t.prototype.back = function() {
              this._history.back();
            }),
            s(
              [
                ((n = Et(ac)),
                function(e, t) {
                  n(e, t, 0);
                }),
                a('design:paramtypes', [Object])
              ],
              t
            )
          );
        })(Il),
        cc = new _e('TRANSITION_ID'),
        dc = [
          {
            provide: Qo,
            useFactory: function(e, t, n) {
              return function() {
                n.get(Wo).donePromise.then(function() {
                  var n = Jl();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(function(t) {
                      return n.getAttribute(t, 'ng-transition') === e;
                    })
                    .forEach(function(e) {
                      return n.remove(e);
                    });
                });
              };
            },
            deps: [cc, ac, ir],
            multi: !0
          }
        ],
        pc = (function() {
          function e() {}
          return (
            (e.init = function() {
              var t;
              (t = new e()), (Si = t);
            }),
            (e.prototype.addToWindow = function(e) {
              (Se.getAngularTestability = function(t, n) {
                void 0 === n && (n = !0);
                var r = e.findTestabilityInTree(t, n);
                if (null == r)
                  throw new Error('Could not find testability for element.');
                return r;
              }),
                (Se.getAllAngularTestabilities = function() {
                  return e.getAllTestabilities();
                }),
                (Se.getAllAngularRootElements = function() {
                  return e.getAllRootElements();
                }),
                Se.frameworkStabilizers || (Se.frameworkStabilizers = []),
                Se.frameworkStabilizers.push(function(e) {
                  var t = Se.getAllAngularTestabilities(),
                    n = t.length,
                    r = !1,
                    o = function(t) {
                      (r = r || t), 0 == --n && e(r);
                    };
                  t.forEach(function(e) {
                    e.whenStable(o);
                  });
                });
            }),
            (e.prototype.findTestabilityInTree = function(e, t, n) {
              if (null == t) return null;
              var r = e.getTestability(t);
              return null != r
                ? r
                : n
                ? Jl().isShadowRoot(t)
                  ? this.findTestabilityInTree(e, Jl().getHost(t), !0)
                  : this.findTestabilityInTree(e, Jl().parentElement(t), !0)
                : null;
            }),
            e
          );
        })();
      function fc(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((Se.ng = Se.ng || {})[e] = t);
      }
      var hc = { ApplicationRef: Pi, NgZone: vi };
      function vc(e) {
        return Gi(e);
      }
      var yc = new _e('EventManagerPlugins'),
        gc = (function() {
          function e(e, t) {
            var n = this;
            (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach(function(e) {
                return (e.manager = n);
              }),
              (this._plugins = e.slice().reverse());
          }
          return (
            (e.prototype.addEventListener = function(e, t, n) {
              return this._findPluginFor(t).addEventListener(e, t, n);
            }),
            (e.prototype.addGlobalEventListener = function(e, t, n) {
              return this._findPluginFor(t).addGlobalEventListener(e, t, n);
            }),
            (e.prototype.getZone = function() {
              return this._zone;
            }),
            (e.prototype._findPluginFor = function(e) {
              var t = this._eventNameToPlugin.get(e);
              if (t) return t;
              for (var n = this._plugins, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o;
              }
              throw new Error('No event manager plugin found for event ' + e);
            }),
            e
          );
        })(),
        mc = (function() {
          function e(e) {
            this._doc = e;
          }
          return (
            (e.prototype.addGlobalEventListener = function(e, t, n) {
              var r = Jl().getGlobalEventTarget(this._doc, e);
              if (!r)
                throw new Error(
                  'Unsupported event target ' + r + ' for event ' + t
                );
              return this.addEventListener(r, t, n);
            }),
            e
          );
        })(),
        bc = (function() {
          function e() {
            this._stylesSet = new Set();
          }
          return (
            (e.prototype.addStyles = function(e) {
              var t = this,
                n = new Set();
              e.forEach(function(e) {
                t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
              }),
                this.onStylesAdded(n);
            }),
            (e.prototype.onStylesAdded = function(e) {}),
            (e.prototype.getAllStyles = function() {
              return Array.from(this._stylesSet);
            }),
            e
          );
        })(),
        _c = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n._doc = t),
              (n._hostNodes = new Set()),
              (n._styleNodes = new Set()),
              n._hostNodes.add(t.head),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype._addStylesToHost = function(e, t) {
              var n = this;
              e.forEach(function(e) {
                var r = n._doc.createElement('style');
                (r.textContent = e), n._styleNodes.add(t.appendChild(r));
              });
            }),
            (t.prototype.addHost = function(e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }),
            (t.prototype.removeHost = function(e) {
              this._hostNodes.delete(e);
            }),
            (t.prototype.onStylesAdded = function(e) {
              var t = this;
              this._hostNodes.forEach(function(n) {
                return t._addStylesToHost(e, n);
              });
            }),
            (t.prototype.ngOnDestroy = function() {
              this._styleNodes.forEach(function(e) {
                return Jl().remove(e);
              });
            }),
            t
          );
        })(bc),
        wc = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        xc = /%COMP%/g,
        Cc = '_nghost-%COMP%',
        Ec = '_ngcontent-%COMP%';
      function Sc(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          Array.isArray(o) ? Sc(e, o, n) : ((o = o.replace(xc, e)), n.push(o));
        }
        return n;
      }
      function Oc(e) {
        return function(t) {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      var Ac = (function() {
          function e(e, t) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new kc(e));
          }
          return (
            (e.prototype.createRenderer = function(e, t) {
              if (!e || !t) return this.defaultRenderer;
              switch (t.encapsulation) {
                case Me.Emulated:
                  var n = this.rendererByCompId.get(t.id);
                  return (
                    n ||
                      ((n = new Pc(
                        this.eventManager,
                        this.sharedStylesHost,
                        t
                      )),
                      this.rendererByCompId.set(t.id, n)),
                    n.applyToHost(e),
                    n
                  );
                case Me.Native:
                case Me.ShadowDom:
                  return new Vc(this.eventManager, this.sharedStylesHost, e, t);
                default:
                  if (!this.rendererByCompId.has(t.id)) {
                    var r = Sc(t.id, t.styles, []);
                    this.sharedStylesHost.addStyles(r),
                      this.rendererByCompId.set(t.id, this.defaultRenderer);
                  }
                  return this.defaultRenderer;
              }
            }),
            (e.prototype.begin = function() {}),
            (e.prototype.end = function() {}),
            e
          );
        })(),
        kc = (function() {
          function e(e) {
            (this.eventManager = e), (this.data = Object.create(null));
          }
          return (
            (e.prototype.destroy = function() {}),
            (e.prototype.createElement = function(e, t) {
              return t
                ? document.createElementNS(wc[t], e)
                : document.createElement(e);
            }),
            (e.prototype.createComment = function(e) {
              return document.createComment(e);
            }),
            (e.prototype.createText = function(e) {
              return document.createTextNode(e);
            }),
            (e.prototype.appendChild = function(e, t) {
              e.appendChild(t);
            }),
            (e.prototype.insertBefore = function(e, t, n) {
              e && e.insertBefore(t, n);
            }),
            (e.prototype.removeChild = function(e, t) {
              e && e.removeChild(t);
            }),
            (e.prototype.selectRootElement = function(e, t) {
              var n = 'string' == typeof e ? document.querySelector(e) : e;
              if (!n)
                throw new Error(
                  'The selector "' + e + '" did not match any elements'
                );
              return t || (n.textContent = ''), n;
            }),
            (e.prototype.parentNode = function(e) {
              return e.parentNode;
            }),
            (e.prototype.nextSibling = function(e) {
              return e.nextSibling;
            }),
            (e.prototype.setAttribute = function(e, t, n, r) {
              if (r) {
                t = r + ':' + t;
                var o = wc[r];
                o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
              } else e.setAttribute(t, n);
            }),
            (e.prototype.removeAttribute = function(e, t, n) {
              if (n) {
                var r = wc[n];
                r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ':' + t);
              } else e.removeAttribute(t);
            }),
            (e.prototype.addClass = function(e, t) {
              e.classList.add(t);
            }),
            (e.prototype.removeClass = function(e, t) {
              e.classList.remove(t);
            }),
            (e.prototype.setStyle = function(e, t, n, r) {
              r & Wr.DashCase
                ? e.style.setProperty(t, n, r & Wr.Important ? 'important' : '')
                : (e.style[t] = n);
            }),
            (e.prototype.removeStyle = function(e, t, n) {
              n & Wr.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
            }),
            (e.prototype.setProperty = function(e, t, n) {
              Tc(t, 'property'), (e[t] = n);
            }),
            (e.prototype.setValue = function(e, t) {
              e.nodeValue = t;
            }),
            (e.prototype.listen = function(e, t, n) {
              return (
                Tc(t, 'listener'),
                'string' == typeof e
                  ? this.eventManager.addGlobalEventListener(e, t, Oc(n))
                  : this.eventManager.addEventListener(e, t, Oc(n))
              );
            }),
            e
          );
        })(),
        Ic = '@'.charCodeAt(0);
      function Tc(e, t) {
        if (e.charCodeAt(0) === Ic)
          throw new Error(
            'Found the synthetic ' +
              t +
              ' ' +
              e +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
          );
      }
      var Nc,
        Pc = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            o.component = r;
            var i = Sc(r.id, r.styles, []);
            return (
              n.addStyles(i),
              (o.contentAttr = Ec.replace(xc, r.id)),
              (o.hostAttr = Cc.replace(xc, r.id)),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.applyToHost = function(t) {
              e.prototype.setAttribute.call(this, t, this.hostAttr, '');
            }),
            (t.prototype.createElement = function(t, n) {
              var r = e.prototype.createElement.call(this, t, n);
              return (
                e.prototype.setAttribute.call(this, r, this.contentAttr, ''), r
              );
            }),
            t
          );
        })(kc),
        Vc = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            (i.sharedStylesHost = n),
              (i.hostEl = r),
              (i.component = o),
              (i.shadowRoot =
                o.encapsulation === Me.ShadowDom
                  ? r.attachShadow({ mode: 'open' })
                  : r.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var s = Sc(o.id, o.styles, []), a = 0; a < s.length; a++) {
              var u = document.createElement('style');
              (u.textContent = s[a]), i.shadowRoot.appendChild(u);
            }
            return i;
          }
          return (
            o(t, e),
            (t.prototype.nodeOrShadowRoot = function(e) {
              return e === this.hostEl ? this.shadowRoot : e;
            }),
            (t.prototype.destroy = function() {
              this.sharedStylesHost.removeHost(this.shadowRoot);
            }),
            (t.prototype.appendChild = function(t, n) {
              return e.prototype.appendChild.call(
                this,
                this.nodeOrShadowRoot(t),
                n
              );
            }),
            (t.prototype.insertBefore = function(t, n, r) {
              return e.prototype.insertBefore.call(
                this,
                this.nodeOrShadowRoot(t),
                n,
                r
              );
            }),
            (t.prototype.removeChild = function(t, n) {
              return e.prototype.removeChild.call(
                this,
                this.nodeOrShadowRoot(t),
                n
              );
            }),
            (t.prototype.parentNode = function(t) {
              return this.nodeOrShadowRoot(
                e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t))
              );
            }),
            t
          );
        })(kc),
        Dc =
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(e) {
            return '__zone_symbol__' + e;
          },
        Mc = Dc('addEventListener'),
        jc = Dc('removeEventListener'),
        Rc = {},
        Lc = '__zone_symbol__propagationStopped';
      'undefined' != typeof Zone &&
        Zone[Dc('BLACK_LISTED_EVENTS')] &&
        (Nc = {});
      var Hc = function(e) {
          return !!Nc && Nc.hasOwnProperty(e);
        },
        Fc = function(e) {
          var t = Rc[e.type];
          if (t) {
            var n = this[t];
            if (n) {
              var r = [e];
              if (1 === n.length)
                return (s = n[0]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              for (
                var o = n.slice(), i = 0;
                i < o.length && !0 !== e[Lc];
                i++
              ) {
                var s;
                (s = o[i]).zone !== Zone.current
                  ? s.zone.run(s.handler, this, r)
                  : s.handler.apply(this, r);
              }
            }
          }
        },
        zc = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (
              (o.ngZone = n),
              (r &&
                (function(e) {
                  return e === Bl;
                })(r)) ||
                o.patchEvent(),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.patchEvent = function() {
              if (
                'undefined' != typeof Event &&
                Event &&
                Event.prototype &&
                !Event.prototype.__zone_symbol__stopImmediatePropagation
              ) {
                var e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
                  Event.prototype.stopImmediatePropagation);
                Event.prototype.stopImmediatePropagation = function() {
                  this && (this[Lc] = !0), e && e.apply(this, arguments);
                };
              }
            }),
            (t.prototype.supports = function(e) {
              return !0;
            }),
            (t.prototype.addEventListener = function(e, t, n) {
              var r = this,
                o = n;
              if (!e[Mc] || (vi.isInAngularZone() && !Hc(t)))
                e.addEventListener(t, o, !1);
              else {
                var i = Rc[t];
                i || (i = Rc[t] = Dc('ANGULAR' + t + 'FALSE'));
                var s = e[i],
                  a = s && s.length > 0;
                s || (s = e[i] = []);
                var u = Hc(t) ? Zone.root : Zone.current;
                if (0 === s.length) s.push({ zone: u, handler: o });
                else {
                  for (var l = !1, c = 0; c < s.length; c++)
                    if (s[c].handler === o) {
                      l = !0;
                      break;
                    }
                  l || s.push({ zone: u, handler: o });
                }
                a || e[Mc](t, Fc, !1);
              }
              return function() {
                return r.removeEventListener(e, t, o);
              };
            }),
            (t.prototype.removeEventListener = function(e, t, n) {
              var r = e[jc];
              if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
              var o = Rc[t],
                i = o && e[o];
              if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
              for (var s = !1, a = 0; a < i.length; a++)
                if (i[a].handler === n) {
                  (s = !0), i.splice(a, 1);
                  break;
                }
              s
                ? 0 === i.length && r.apply(e, [t, Fc, !1])
                : e.removeEventListener.apply(e, [t, n, !1]);
            }),
            t
          );
        })(mc),
        Bc = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        Uc = new _e('HammerGestureConfig'),
        Gc = new _e('HammerLoader'),
        Zc = (function() {
          function e() {
            (this.events = []), (this.overrides = {});
          }
          return (
            (e.prototype.buildHammer = function(e) {
              var t = new Hammer(e, this.options);
              for (var n in (t.get('pinch').set({ enable: !0 }),
              t.get('rotate').set({ enable: !0 }),
              this.overrides))
                t.get(n).set(this.overrides[n]);
              return t;
            }),
            e
          );
        })(),
        Qc = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            return (i._config = n), (i.console = r), (i.loader = o), i;
          }
          return (
            o(t, e),
            (t.prototype.supports = function(e) {
              return !(
                (!Bc.hasOwnProperty(e.toLowerCase()) &&
                  !this.isCustomEvent(e)) ||
                (!window.Hammer &&
                  !this.loader &&
                  (this.console.warn(
                    'The "' +
                      e +
                      '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'
                  ),
                  1))
              );
            }),
            (t.prototype.addEventListener = function(e, t, n) {
              var r = this,
                o = this.manager.getZone();
              if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
                var i = !1,
                  s = function() {
                    i = !0;
                  };
                return (
                  this.loader()
                    .then(function() {
                      if (!window.Hammer)
                        return (
                          r.console.warn(
                            'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                          ),
                          void (s = function() {})
                        );
                      i || (s = r.addEventListener(e, t, n));
                    })
                    .catch(function() {
                      r.console.warn(
                        'The "' +
                          t +
                          '" event cannot be bound because the custom Hammer.JS loader failed.'
                      ),
                        (s = function() {});
                    }),
                  function() {
                    s();
                  }
                );
              }
              return o.runOutsideAngular(function() {
                var i = r._config.buildHammer(e),
                  s = function(e) {
                    o.runGuarded(function() {
                      n(e);
                    });
                  };
                return (
                  i.on(t, s),
                  function() {
                    i.off(t, s), 'function' == typeof i.destroy && i.destroy();
                  }
                );
              });
            }),
            (t.prototype.isCustomEvent = function(e) {
              return this._config.events.indexOf(e) > -1;
            }),
            t
          );
        })(mc),
        Wc = ['alt', 'control', 'meta', 'shift'],
        qc = {
          alt: function(e) {
            return e.altKey;
          },
          control: function(e) {
            return e.ctrlKey;
          },
          meta: function(e) {
            return e.metaKey;
          },
          shift: function(e) {
            return e.shiftKey;
          }
        },
        Xc = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          var n;
          return (
            o(t, e),
            (n = t),
            (t.prototype.supports = function(e) {
              return null != n.parseEventName(e);
            }),
            (t.prototype.addEventListener = function(e, t, r) {
              var o = n.parseEventName(t),
                i = n.eventCallback(o.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(function() {
                return Jl().onAndCancel(e, o.domEventName, i);
              });
            }),
            (t.parseEventName = function(e) {
              var t = e.toLowerCase().split('.'),
                r = t.shift();
              if (0 === t.length || ('keydown' !== r && 'keyup' !== r))
                return null;
              var o = n._normalizeKey(t.pop()),
                i = '';
              if (
                (Wc.forEach(function(e) {
                  var n = t.indexOf(e);
                  n > -1 && (t.splice(n, 1), (i += e + '.'));
                }),
                (i += o),
                0 != t.length || 0 === o.length)
              )
                return null;
              var s = {};
              return (s.domEventName = r), (s.fullKey = i), s;
            }),
            (t.getEventFullKey = function(e) {
              var t = '',
                n = Jl().getEventKey(e);
              return (
                ' ' === (n = n.toLowerCase())
                  ? (n = 'space')
                  : '.' === n && (n = 'dot'),
                Wc.forEach(function(r) {
                  r != n && (0, qc[r])(e) && (t += r + '.');
                }),
                (t += n)
              );
            }),
            (t.eventCallback = function(e, t, r) {
              return function(o) {
                n.getEventFullKey(o) === e &&
                  r.runGuarded(function() {
                    return t(o);
                  });
              };
            }),
            (t._normalizeKey = function(e) {
              switch (e) {
                case 'esc':
                  return 'escape';
                default:
                  return e;
              }
            }),
            t
          );
        })(mc),
        Yc = (function() {
          return function() {};
        })(),
        Kc = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n._doc = t), n;
          }
          return (
            o(t, e),
            (t.prototype.sanitize = function(e, t) {
              if (null == t) return null;
              switch (e) {
                case Yr.NONE:
                  return t;
                case Yr.HTML:
                  return t instanceof Jc
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'HTML'),
                      (function(e, t) {
                        var n = null;
                        try {
                          yo = yo || new lo(e);
                          var r = t ? String(t) : '';
                          n = yo.getInertBodyElement(r);
                          var o = 5,
                            i = r;
                          do {
                            if (0 === o)
                              throw new Error(
                                'Failed to sanitize html because the input is unstable'
                              );
                            o--,
                              (r = i),
                              (i = n.innerHTML),
                              (n = yo.getInertBodyElement(r));
                          } while (r !== i);
                          var s = new So(),
                            a = s.sanitizeChildren(Io(n) || n);
                          return (
                            uo() &&
                              s.sanitizedSomething &&
                              console.warn(
                                'WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).'
                              ),
                            a
                          );
                        } finally {
                          if (n)
                            for (var u = Io(n) || n; u.firstChild; )
                              u.removeChild(u.firstChild);
                        }
                      })(this._doc, String(t)));
                case Yr.STYLE:
                  return t instanceof ed
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'Style'),
                      (function(e) {
                        if (!(e = String(e).trim())) return '';
                        var t = e.match(jo);
                        return (t && fo(t[1]) === t[1]) ||
                          (e.match(Mo) &&
                            (function(e) {
                              for (
                                var t = !0, n = !0, r = 0;
                                r < e.length;
                                r++
                              ) {
                                var o = e.charAt(r);
                                "'" === o && n
                                  ? (t = !t)
                                  : '"' === o && t && (n = !n);
                              }
                              return t && n;
                            })(e))
                          ? e
                          : (uo() &&
                              console.warn(
                                'WARNING: sanitizing unsafe style value ' +
                                  e +
                                  ' (see http://g.co/ng/security#xss).'
                              ),
                            'unsafe');
                      })(t));
                case Yr.SCRIPT:
                  if (t instanceof td)
                    return t.changingThisBreaksApplicationSecurity;
                  throw (this.checkNotSafeValue(t, 'Script'),
                  new Error('unsafe value used in a script context'));
                case Yr.URL:
                  return t instanceof rd || t instanceof nd
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'URL'), fo(String(t)));
                case Yr.RESOURCE_URL:
                  if (t instanceof rd)
                    return t.changingThisBreaksApplicationSecurity;
                  throw (this.checkNotSafeValue(t, 'ResourceURL'),
                  new Error(
                    'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
                  ));
                default:
                  throw new Error(
                    'Unexpected SecurityContext ' +
                      e +
                      ' (see http://g.co/ng/security#xss)'
                  );
              }
            }),
            (t.prototype.checkNotSafeValue = function(e, t) {
              if (e instanceof $c)
                throw new Error(
                  'Required a safe ' +
                    t +
                    ', got a ' +
                    e.getTypeName() +
                    ' (see http://g.co/ng/security#xss)'
                );
            }),
            (t.prototype.bypassSecurityTrustHtml = function(e) {
              return new Jc(e);
            }),
            (t.prototype.bypassSecurityTrustStyle = function(e) {
              return new ed(e);
            }),
            (t.prototype.bypassSecurityTrustScript = function(e) {
              return new td(e);
            }),
            (t.prototype.bypassSecurityTrustUrl = function(e) {
              return new nd(e);
            }),
            (t.prototype.bypassSecurityTrustResourceUrl = function(e) {
              return new rd(e);
            }),
            t
          );
        })(Yc),
        $c = (function() {
          function e(e) {
            this.changingThisBreaksApplicationSecurity = e;
          }
          return (
            (e.prototype.toString = function() {
              return (
                'SafeValue must use [property]=binding: ' +
                this.changingThisBreaksApplicationSecurity +
                ' (see http://g.co/ng/security#xss)'
              );
            }),
            e
          );
        })(),
        Jc = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.getTypeName = function() {
              return 'HTML';
            }),
            t
          );
        })($c),
        ed = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.getTypeName = function() {
              return 'Style';
            }),
            t
          );
        })($c),
        td = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.getTypeName = function() {
              return 'Script';
            }),
            t
          );
        })($c),
        nd = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.getTypeName = function() {
              return 'URL';
            }),
            t
          );
        })($c),
        rd = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.getTypeName = function() {
              return 'ResourceURL';
            }),
            t
          );
        })($c),
        od = ki(as, 'browser', [
          { provide: $o, useValue: 'browser' },
          {
            provide: Ko,
            useValue: function() {
              ic.makeCurrent(), pc.init();
            },
            multi: !0
          },
          { provide: Il, useClass: lc, deps: [ac] },
          {
            provide: ac,
            useFactory: function() {
              return document;
            },
            deps: []
          }
        ]);
      function id() {
        return new Uo();
      }
      var sd = (function() {
        function e(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        var t;
        return (
          (t = e),
          (e.withServerTransition = function(e) {
            return {
              ngModule: t,
              providers: [
                { provide: qo, useValue: e.appId },
                { provide: cc, useExisting: qo },
                dc
              ]
            };
          }),
          e
        );
      })();
      'undefined' != typeof window && window;
      var ad = (function() {
          function e() {}
          return (
            Object.defineProperty(e.prototype, 'value', {
              get: function() {
                return this.control ? this.control.value : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'valid', {
              get: function() {
                return this.control ? this.control.valid : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'invalid', {
              get: function() {
                return this.control ? this.control.invalid : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'pending', {
              get: function() {
                return this.control ? this.control.pending : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'disabled', {
              get: function() {
                return this.control ? this.control.disabled : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'enabled', {
              get: function() {
                return this.control ? this.control.enabled : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'errors', {
              get: function() {
                return this.control ? this.control.errors : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'pristine', {
              get: function() {
                return this.control ? this.control.pristine : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'dirty', {
              get: function() {
                return this.control ? this.control.dirty : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'touched', {
              get: function() {
                return this.control ? this.control.touched : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'status', {
              get: function() {
                return this.control ? this.control.status : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'untouched', {
              get: function() {
                return this.control ? this.control.untouched : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'statusChanges', {
              get: function() {
                return this.control ? this.control.statusChanges : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'valueChanges', {
              get: function() {
                return this.control ? this.control.valueChanges : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.reset = function(e) {
              void 0 === e && (e = void 0),
                this.control && this.control.reset(e);
            }),
            (e.prototype.hasError = function(e, t) {
              return !!this.control && this.control.hasError(e, t);
            }),
            (e.prototype.getError = function(e, t) {
              return this.control ? this.control.getError(e, t) : null;
            }),
            e
          );
        })(),
        ud = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'formDirective', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return null;
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          );
        })(ad);
      function ld(e) {
        return null == e || 0 === e.length;
      }
      var cd = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        dd = (function() {
          function e() {}
          return (
            (e.min = function(e) {
              return function(t) {
                if (ld(t.value) || ld(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n < e
                  ? { min: { min: e, actual: t.value } }
                  : null;
              };
            }),
            (e.max = function(e) {
              return function(t) {
                if (ld(t.value) || ld(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n > e
                  ? { max: { max: e, actual: t.value } }
                  : null;
              };
            }),
            (e.required = function(e) {
              return ld(e.value) ? { required: !0 } : null;
            }),
            (e.requiredTrue = function(e) {
              return !0 === e.value ? null : { required: !0 };
            }),
            (e.email = function(e) {
              return ld(e.value)
                ? null
                : cd.test(e.value)
                ? null
                : { email: !0 };
            }),
            (e.minLength = function(e) {
              return function(t) {
                if (ld(t.value)) return null;
                var n = t.value ? t.value.length : 0;
                return n < e
                  ? { minlength: { requiredLength: e, actualLength: n } }
                  : null;
              };
            }),
            (e.maxLength = function(e) {
              return function(t) {
                var n = t.value ? t.value.length : 0;
                return n > e
                  ? { maxlength: { requiredLength: e, actualLength: n } }
                  : null;
              };
            }),
            (e.pattern = function(t) {
              return t
                ? ('string' == typeof t
                    ? ((r = ''),
                      '^' !== t.charAt(0) && (r += '^'),
                      (r += t),
                      '$' !== t.charAt(t.length - 1) && (r += '$'),
                      (n = new RegExp(r)))
                    : ((r = t.toString()), (n = t)),
                  function(e) {
                    if (ld(e.value)) return null;
                    var t = e.value;
                    return n.test(t)
                      ? null
                      : { pattern: { requiredPattern: r, actualValue: t } };
                  })
                : e.nullValidator;
              var n, r;
            }),
            (e.nullValidator = function(e) {
              return null;
            }),
            (e.compose = function(e) {
              if (!e) return null;
              var t = e.filter(pd);
              return 0 == t.length
                ? null
                : function(e) {
                    return hd(
                      (function(e, n) {
                        return t.map(function(t) {
                          return t(e);
                        });
                      })(e)
                    );
                  };
            }),
            (e.composeAsync = function(e) {
              if (!e) return null;
              var t = e.filter(pd);
              return 0 == t.length
                ? null
                : function(e) {
                    return (function e() {
                      for (var t, n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                      return (
                        'function' == typeof n[n.length - 1] && (t = n.pop()),
                        1 === n.length && d(n[0]) && (n = n[0]),
                        0 === n.length
                          ? Yl
                          : t
                          ? e(n).pipe(
                              Y(function(e) {
                                return t.apply(void 0, e);
                              })
                            )
                          : new T(function(e) {
                              return new Kl(e, n);
                            })
                      );
                    })(
                      (function(e, n) {
                        return t.map(function(t) {
                          return t(e);
                        });
                      })(e).map(fd)
                    ).pipe(Y(hd));
                  };
            }),
            e
          );
        })();
      function pd(e) {
        return null != e;
      }
      function fd(e) {
        var t = Go(e) ? ee(e) : e;
        if (!Zo(t))
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        return t;
      }
      function hd(e) {
        var t = e.reduce(function(e, t) {
          return null != t ? i({}, e, t) : e;
        }, {});
        return 0 === Object.keys(t).length ? null : t;
      }
      var vd = new _e('NgValueAccessor'),
        yd = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {});
          }
          return (
            (e.prototype.writeValue = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'checked',
                e
              );
            }),
            (e.prototype.registerOnChange = function(e) {
              this.onChange = e;
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            e
          );
        })(),
        gd = (function() {
          function e(e, t, n) {
            var r;
            (this._renderer = e),
              (this._elementRef = t),
              (this._compositionMode = n),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = ((r = Jl() ? Jl().getUserAgent() : ''),
                !/android (\d+)/.test(r.toLowerCase())));
          }
          return (
            (e.prototype.writeValue = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'value',
                null == e ? '' : e
              );
            }),
            (e.prototype.registerOnChange = function(e) {
              this.onChange = e;
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            (e.prototype._handleInput = function(e) {
              (!this._compositionMode ||
                (this._compositionMode && !this._composing)) &&
                this.onChange(e);
            }),
            (e.prototype._compositionStart = function() {
              this._composing = !0;
            }),
            (e.prototype._compositionEnd = function(e) {
              (this._composing = !1), this._compositionMode && this.onChange(e);
            }),
            e
          );
        })();
      function md(e) {
        return e.validate
          ? function(t) {
              return e.validate(t);
            }
          : e;
      }
      function bd(e) {
        return e.validate
          ? function(t) {
              return e.validate(t);
            }
          : e;
      }
      var _d = (function() {
        function e(e, t) {
          (this._renderer = e),
            (this._elementRef = t),
            (this.onChange = function(e) {}),
            (this.onTouched = function() {});
        }
        return (
          (e.prototype.writeValue = function(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              null == e ? '' : e
            );
          }),
          (e.prototype.registerOnChange = function(e) {
            this.onChange = function(t) {
              e('' == t ? null : parseFloat(t));
            };
          }),
          (e.prototype.registerOnTouched = function(e) {
            this.onTouched = e;
          }),
          (e.prototype.setDisabledState = function(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }),
          e
        );
      })();
      function wd() {
        throw new Error('unimplemented');
      }
      var xd = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._parent = null),
              (t.name = null),
              (t.valueAccessor = null),
              (t._rawValidators = []),
              (t._rawAsyncValidators = []),
              t
            );
          }
          return (
            o(t, e),
            Object.defineProperty(t.prototype, 'validator', {
              get: function() {
                return wd();
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return wd();
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          );
        })(ad),
        Cd = (function() {
          function e() {
            this._accessors = [];
          }
          return (
            (e.prototype.add = function(e, t) {
              this._accessors.push([e, t]);
            }),
            (e.prototype.remove = function(e) {
              for (var t = this._accessors.length - 1; t >= 0; --t)
                if (this._accessors[t][1] === e)
                  return void this._accessors.splice(t, 1);
            }),
            (e.prototype.select = function(e) {
              var t = this;
              this._accessors.forEach(function(n) {
                t._isSameGroup(n, e) && n[1] !== e && n[1].fireUncheck(e.value);
              });
            }),
            (e.prototype._isSameGroup = function(e, t) {
              return (
                !!e[0].control &&
                e[0]._parent === t._control._parent &&
                e[1].name === t.name
              );
            }),
            e
          );
        })(),
        Ed = (function() {
          function e(e, t, n, r) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._registry = n),
              (this._injector = r),
              (this.onChange = function() {}),
              (this.onTouched = function() {});
          }
          return (
            (e.prototype.ngOnInit = function() {
              (this._control = this._injector.get(xd)),
                this._checkName(),
                this._registry.add(this._control, this);
            }),
            (e.prototype.ngOnDestroy = function() {
              this._registry.remove(this);
            }),
            (e.prototype.writeValue = function(e) {
              (this._state = e === this.value),
                this._renderer.setProperty(
                  this._elementRef.nativeElement,
                  'checked',
                  this._state
                );
            }),
            (e.prototype.registerOnChange = function(e) {
              var t = this;
              (this._fn = e),
                (this.onChange = function() {
                  e(t.value), t._registry.select(t);
                });
            }),
            (e.prototype.fireUncheck = function(e) {
              this.writeValue(e);
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            (e.prototype._checkName = function() {
              this.name &&
                this.formControlName &&
                this.name !== this.formControlName &&
                this._throwNameError(),
                !this.name &&
                  this.formControlName &&
                  (this.name = this.formControlName);
            }),
            (e.prototype._throwNameError = function() {
              throw new Error(
                '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
              );
            }),
            e
          );
        })(),
        Sd = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {});
          }
          return (
            (e.prototype.writeValue = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'value',
                parseFloat(e)
              );
            }),
            (e.prototype.registerOnChange = function(e) {
              this.onChange = function(t) {
                e('' == t ? null : parseFloat(t));
              };
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            e
          );
        })(),
        Od =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        Ad =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
      function kd(e, t) {
        return null == e
          ? '' + t
          : (t && 'object' == typeof t && (t = 'Object'),
            (e + ': ' + t).slice(0, 50));
      }
      var Id = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Te);
          }
          return (
            Object.defineProperty(e.prototype, 'compareWith', {
              set: function(e) {
                if ('function' != typeof e)
                  throw new Error(
                    'compareWith must be a function, but received ' +
                      JSON.stringify(e)
                  );
                this._compareWith = e;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.writeValue = function(e) {
              this.value = e;
              var t = this._getOptionId(e);
              null == t &&
                this._renderer.setProperty(
                  this._elementRef.nativeElement,
                  'selectedIndex',
                  -1
                );
              var n = kd(t, e);
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'value',
                n
              );
            }),
            (e.prototype.registerOnChange = function(e) {
              var t = this;
              this.onChange = function(n) {
                (t.value = t._getOptionValue(n)), e(t.value);
              };
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            (e.prototype._registerOption = function() {
              return (this._idCounter++).toString();
            }),
            (e.prototype._getOptionId = function(e) {
              var t, n;
              try {
                for (
                  var r = u(Array.from(this._optionMap.keys())), o = r.next();
                  !o.done;
                  o = r.next()
                ) {
                  var i = o.value;
                  if (this._compareWith(this._optionMap.get(i), e)) return i;
                }
              } catch (s) {
                t = { error: s };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return null;
            }),
            (e.prototype._getOptionValue = function(e) {
              var t = (function(e) {
                return e.split(':')[0];
              })(e);
              return this._optionMap.has(t) ? this._optionMap.get(t) : e;
            }),
            e
          );
        })(),
        Td = (function() {
          function e(e, t, n) {
            (this._element = e),
              (this._renderer = t),
              (this._select = n),
              this._select && (this.id = this._select._registerOption());
          }
          return (
            Object.defineProperty(e.prototype, 'ngValue', {
              set: function(e) {
                null != this._select &&
                  (this._select._optionMap.set(this.id, e),
                  this._setElementValue(kd(this.id, e)),
                  this._select.writeValue(this._select.value));
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'value', {
              set: function(e) {
                this._setElementValue(e),
                  this._select && this._select.writeValue(this._select.value);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype._setElementValue = function(e) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'value',
                e
              );
            }),
            (e.prototype.ngOnDestroy = function() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }),
            e
          );
        })();
      function Nd(e, t) {
        return null == e
          ? '' + t
          : ('string' == typeof t && (t = "'" + t + "'"),
            t && 'object' == typeof t && (t = 'Object'),
            (e + ': ' + t).slice(0, 50));
      }
      var Pd = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Te);
          }
          return (
            Object.defineProperty(e.prototype, 'compareWith', {
              set: function(e) {
                if ('function' != typeof e)
                  throw new Error(
                    'compareWith must be a function, but received ' +
                      JSON.stringify(e)
                  );
                this._compareWith = e;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.writeValue = function(e) {
              var t,
                n = this;
              if (((this.value = e), Array.isArray(e))) {
                var r = e.map(function(e) {
                  return n._getOptionId(e);
                });
                t = function(e, t) {
                  e._setSelected(r.indexOf(t.toString()) > -1);
                };
              } else
                t = function(e, t) {
                  e._setSelected(!1);
                };
              this._optionMap.forEach(t);
            }),
            (e.prototype.registerOnChange = function(e) {
              var t = this;
              this.onChange = function(n) {
                var r = [];
                if (n.hasOwnProperty('selectedOptions'))
                  for (var o = n.selectedOptions, i = 0; i < o.length; i++) {
                    var s = o.item(i),
                      a = t._getOptionValue(s.value);
                    r.push(a);
                  }
                else
                  for (o = n.options, i = 0; i < o.length; i++)
                    (s = o.item(i)).selected &&
                      ((a = t._getOptionValue(s.value)), r.push(a));
                (t.value = r), e(r);
              };
            }),
            (e.prototype.registerOnTouched = function(e) {
              this.onTouched = e;
            }),
            (e.prototype.setDisabledState = function(e) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'disabled',
                e
              );
            }),
            (e.prototype._registerOption = function(e) {
              var t = (this._idCounter++).toString();
              return this._optionMap.set(t, e), t;
            }),
            (e.prototype._getOptionId = function(e) {
              var t, n;
              try {
                for (
                  var r = u(Array.from(this._optionMap.keys())), o = r.next();
                  !o.done;
                  o = r.next()
                ) {
                  var i = o.value;
                  if (this._compareWith(this._optionMap.get(i)._value, e))
                    return i;
                }
              } catch (s) {
                t = { error: s };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (t) throw t.error;
                }
              }
              return null;
            }),
            (e.prototype._getOptionValue = function(e) {
              var t = (function(e) {
                return e.split(':')[0];
              })(e);
              return this._optionMap.has(t) ? this._optionMap.get(t)._value : e;
            }),
            e
          );
        })(),
        Vd = (function() {
          function e(e, t, n) {
            (this._element = e),
              (this._renderer = t),
              (this._select = n),
              this._select && (this.id = this._select._registerOption(this));
          }
          return (
            Object.defineProperty(e.prototype, 'ngValue', {
              set: function(e) {
                null != this._select &&
                  ((this._value = e),
                  this._setElementValue(Nd(this.id, e)),
                  this._select.writeValue(this._select.value));
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'value', {
              set: function(e) {
                this._select
                  ? ((this._value = e),
                    this._setElementValue(Nd(this.id, e)),
                    this._select.writeValue(this._select.value))
                  : this._setElementValue(e);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype._setElementValue = function(e) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'value',
                e
              );
            }),
            (e.prototype._setSelected = function(e) {
              this._renderer.setProperty(
                this._element.nativeElement,
                'selected',
                e
              );
            }),
            (e.prototype.ngOnDestroy = function() {
              this._select &&
                (this._select._optionMap.delete(this.id),
                this._select.writeValue(this._select.value));
            }),
            e
          );
        })();
      function Dd(e, t) {
        return c(t.path, [e]);
      }
      function Md(e, t) {
        e || Rd(t, 'Cannot find control with'),
          t.valueAccessor || Rd(t, 'No value accessor for form control with'),
          (e.validator = dd.compose([e.validator, t.validator])),
          (e.asyncValidator = dd.composeAsync([
            e.asyncValidator,
            t.asyncValidator
          ])),
          t.valueAccessor.writeValue(e.value),
          (function(e, t) {
            t.valueAccessor.registerOnChange(function(n) {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && jd(e, t);
            });
          })(e, t),
          (function(e, t) {
            e.registerOnChange(function(e, n) {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
            });
          })(e, t),
          (function(e, t) {
            t.valueAccessor.registerOnTouched(function() {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && jd(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          t.valueAccessor.setDisabledState &&
            e.registerOnDisabledChange(function(e) {
              t.valueAccessor.setDisabledState(e);
            }),
          t._rawValidators.forEach(function(t) {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(function() {
                return e.updateValueAndValidity();
              });
          }),
          t._rawAsyncValidators.forEach(function(t) {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(function() {
                return e.updateValueAndValidity();
              });
          });
      }
      function jd(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function Rd(e, t) {
        var n;
        throw ((n =
          e.path.length > 1
            ? "path: '" + e.path.join(' -> ') + "'"
            : e.path[0]
            ? "name: '" + e.path + "'"
            : 'unspecified name attribute'),
        new Error(t + ' ' + n));
      }
      function Ld(e) {
        return null != e ? dd.compose(e.map(md)) : null;
      }
      function Hd(e) {
        return null != e ? dd.composeAsync(e.map(bd)) : null;
      }
      var Fd = [yd, Sd, _d, Id, Pd, Ed],
        zd = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            o(t, e),
            (t.prototype.ngOnInit = function() {
              this._checkParentType(), this.formDirective.addFormGroup(this);
            }),
            (t.prototype.ngOnDestroy = function() {
              this.formDirective && this.formDirective.removeFormGroup(this);
            }),
            Object.defineProperty(t.prototype, 'control', {
              get: function() {
                return this.formDirective.getFormGroup(this);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return Dd(this.name, this._parent);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'formDirective', {
              get: function() {
                return this._parent ? this._parent.formDirective : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'validator', {
              get: function() {
                return Ld(this._validators);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return Hd(this._asyncValidators);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype._checkParentType = function() {}),
            t
          );
        })(ud),
        Bd = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return o(t, e), t;
        })(
          (function() {
            function e(e) {
              this._cd = e;
            }
            return (
              Object.defineProperty(e.prototype, 'ngClassUntouched', {
                get: function() {
                  return !!this._cd.control && this._cd.control.untouched;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassTouched', {
                get: function() {
                  return !!this._cd.control && this._cd.control.touched;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassPristine', {
                get: function() {
                  return !!this._cd.control && this._cd.control.pristine;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassDirty', {
                get: function() {
                  return !!this._cd.control && this._cd.control.dirty;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassValid', {
                get: function() {
                  return !!this._cd.control && this._cd.control.valid;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassInvalid', {
                get: function() {
                  return !!this._cd.control && this._cd.control.invalid;
                },
                enumerable: !0,
                configurable: !0
              }),
              Object.defineProperty(e.prototype, 'ngClassPending', {
                get: function() {
                  return !!this._cd.control && this._cd.control.pending;
                },
                enumerable: !0,
                configurable: !0
              }),
              e
            );
          })()
        );
      function Ud(e) {
        var t = Zd(e) ? e.validators : e;
        return Array.isArray(t) ? Ld(t) : t || null;
      }
      function Gd(e, t) {
        var n = Zd(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? Hd(n) : n || null;
      }
      function Zd(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      var Qd = (function() {
          function e(e, t) {
            (this.validator = e),
              (this.asyncValidator = t),
              (this._onCollectionChange = function() {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this._parent;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'valid', {
              get: function() {
                return 'VALID' === this.status;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'invalid', {
              get: function() {
                return 'INVALID' === this.status;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'pending', {
              get: function() {
                return 'PENDING' == this.status;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'disabled', {
              get: function() {
                return 'DISABLED' === this.status;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'enabled', {
              get: function() {
                return 'DISABLED' !== this.status;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'dirty', {
              get: function() {
                return !this.pristine;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'untouched', {
              get: function() {
                return !this.touched;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'updateOn', {
              get: function() {
                return this._updateOn
                  ? this._updateOn
                  : this.parent
                  ? this.parent.updateOn
                  : 'change';
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.setValidators = function(e) {
              this.validator = Ud(e);
            }),
            (e.prototype.setAsyncValidators = function(e) {
              this.asyncValidator = Gd(e);
            }),
            (e.prototype.clearValidators = function() {
              this.validator = null;
            }),
            (e.prototype.clearAsyncValidators = function() {
              this.asyncValidator = null;
            }),
            (e.prototype.markAsTouched = function(e) {
              void 0 === e && (e = {}),
                (this.touched = !0),
                this._parent && !e.onlySelf && this._parent.markAsTouched(e);
            }),
            (e.prototype.markAsUntouched = function(e) {
              void 0 === e && (e = {}),
                (this.touched = !1),
                (this._pendingTouched = !1),
                this._forEachChild(function(e) {
                  e.markAsUntouched({ onlySelf: !0 });
                }),
                this._parent && !e.onlySelf && this._parent._updateTouched(e);
            }),
            (e.prototype.markAsDirty = function(e) {
              void 0 === e && (e = {}),
                (this.pristine = !1),
                this._parent && !e.onlySelf && this._parent.markAsDirty(e);
            }),
            (e.prototype.markAsPristine = function(e) {
              void 0 === e && (e = {}),
                (this.pristine = !0),
                (this._pendingDirty = !1),
                this._forEachChild(function(e) {
                  e.markAsPristine({ onlySelf: !0 });
                }),
                this._parent && !e.onlySelf && this._parent._updatePristine(e);
            }),
            (e.prototype.markAsPending = function(e) {
              void 0 === e && (e = {}),
                (this.status = 'PENDING'),
                !1 !== e.emitEvent && this.statusChanges.emit(this.status),
                this._parent && !e.onlySelf && this._parent.markAsPending(e);
            }),
            (e.prototype.disable = function(e) {
              void 0 === e && (e = {}),
                (this.status = 'DISABLED'),
                (this.errors = null),
                this._forEachChild(function(t) {
                  t.disable(i({}, e, { onlySelf: !0 }));
                }),
                this._updateValue(),
                !1 !== e.emitEvent &&
                  (this.valueChanges.emit(this.value),
                  this.statusChanges.emit(this.status)),
                this._updateAncestors(e),
                this._onDisabledChange.forEach(function(e) {
                  return e(!0);
                });
            }),
            (e.prototype.enable = function(e) {
              void 0 === e && (e = {}),
                (this.status = 'VALID'),
                this._forEachChild(function(t) {
                  t.enable(i({}, e, { onlySelf: !0 }));
                }),
                this.updateValueAndValidity({
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                }),
                this._updateAncestors(e),
                this._onDisabledChange.forEach(function(e) {
                  return e(!1);
                });
            }),
            (e.prototype._updateAncestors = function(e) {
              this._parent &&
                !e.onlySelf &&
                (this._parent.updateValueAndValidity(e),
                this._parent._updatePristine(),
                this._parent._updateTouched());
            }),
            (e.prototype.setParent = function(e) {
              this._parent = e;
            }),
            (e.prototype.updateValueAndValidity = function(e) {
              void 0 === e && (e = {}),
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled &&
                  (this._cancelExistingSubscription(),
                  (this.errors = this._runValidator()),
                  (this.status = this._calculateStatus()),
                  ('VALID' !== this.status && 'PENDING' !== this.status) ||
                    this._runAsyncValidator(e.emitEvent)),
                !1 !== e.emitEvent &&
                  (this.valueChanges.emit(this.value),
                  this.statusChanges.emit(this.status)),
                this._parent &&
                  !e.onlySelf &&
                  this._parent.updateValueAndValidity(e);
            }),
            (e.prototype._updateTreeValidity = function(e) {
              void 0 === e && (e = { emitEvent: !0 }),
                this._forEachChild(function(t) {
                  return t._updateTreeValidity(e);
                }),
                this.updateValueAndValidity({
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            (e.prototype._setInitialStatus = function() {
              this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
            }),
            (e.prototype._runValidator = function() {
              return this.validator ? this.validator(this) : null;
            }),
            (e.prototype._runAsyncValidator = function(e) {
              var t = this;
              if (this.asyncValidator) {
                this.status = 'PENDING';
                var n = fd(this.asyncValidator(this));
                this._asyncValidationSubscription = n.subscribe(function(n) {
                  return t.setErrors(n, { emitEvent: e });
                });
              }
            }),
            (e.prototype._cancelExistingSubscription = function() {
              this._asyncValidationSubscription &&
                this._asyncValidationSubscription.unsubscribe();
            }),
            (e.prototype.setErrors = function(e, t) {
              void 0 === t && (t = {}),
                (this.errors = e),
                this._updateControlsErrors(!1 !== t.emitEvent);
            }),
            (e.prototype.get = function(e) {
              return (function(e, t, n) {
                return null == t
                  ? null
                  : (t instanceof Array || (t = t.split('.')),
                    t instanceof Array && 0 === t.length
                      ? null
                      : t.reduce(function(e, t) {
                          return e instanceof qd
                            ? e.controls.hasOwnProperty(t)
                              ? e.controls[t]
                              : null
                            : (e instanceof Xd && e.at(t)) || null;
                        }, e));
              })(this, e);
            }),
            (e.prototype.getError = function(e, t) {
              var n = t ? this.get(t) : this;
              return n && n.errors ? n.errors[e] : null;
            }),
            (e.prototype.hasError = function(e, t) {
              return !!this.getError(e, t);
            }),
            Object.defineProperty(e.prototype, 'root', {
              get: function() {
                for (var e = this; e._parent; ) e = e._parent;
                return e;
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype._updateControlsErrors = function(e) {
              (this.status = this._calculateStatus()),
                e && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(e);
            }),
            (e.prototype._initObservables = function() {
              (this.valueChanges = new Po()), (this.statusChanges = new Po());
            }),
            (e.prototype._calculateStatus = function() {
              return this._allControlsDisabled()
                ? 'DISABLED'
                : this.errors
                ? 'INVALID'
                : this._anyControlsHaveStatus('PENDING')
                ? 'PENDING'
                : this._anyControlsHaveStatus('INVALID')
                ? 'INVALID'
                : 'VALID';
            }),
            (e.prototype._anyControlsHaveStatus = function(e) {
              return this._anyControls(function(t) {
                return t.status === e;
              });
            }),
            (e.prototype._anyControlsDirty = function() {
              return this._anyControls(function(e) {
                return e.dirty;
              });
            }),
            (e.prototype._anyControlsTouched = function() {
              return this._anyControls(function(e) {
                return e.touched;
              });
            }),
            (e.prototype._updatePristine = function(e) {
              void 0 === e && (e = {}),
                (this.pristine = !this._anyControlsDirty()),
                this._parent && !e.onlySelf && this._parent._updatePristine(e);
            }),
            (e.prototype._updateTouched = function(e) {
              void 0 === e && (e = {}),
                (this.touched = this._anyControlsTouched()),
                this._parent && !e.onlySelf && this._parent._updateTouched(e);
            }),
            (e.prototype._isBoxedValue = function(e) {
              return (
                'object' == typeof e &&
                null !== e &&
                2 === Object.keys(e).length &&
                'value' in e &&
                'disabled' in e
              );
            }),
            (e.prototype._registerOnCollectionChange = function(e) {
              this._onCollectionChange = e;
            }),
            (e.prototype._setUpdateStrategy = function(e) {
              Zd(e) && null != e.updateOn && (this._updateOn = e.updateOn);
            }),
            e
          );
        })(),
        Wd = (function(e) {
          function t(t, n, r) {
            void 0 === t && (t = null);
            var o = e.call(this, Ud(n), Gd(r, n)) || this;
            return (
              (o._onChange = []),
              o._applyFormState(t),
              o._setUpdateStrategy(n),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o._initObservables(),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.setValue = function(e, t) {
              var n = this;
              void 0 === t && (t = {}),
                (this.value = this._pendingValue = e),
                this._onChange.length &&
                  !1 !== t.emitModelToViewChange &&
                  this._onChange.forEach(function(e) {
                    return e(n.value, !1 !== t.emitViewToModelChange);
                  }),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.patchValue = function(e, t) {
              void 0 === t && (t = {}), this.setValue(e, t);
            }),
            (t.prototype.reset = function(e, t) {
              void 0 === e && (e = null),
                void 0 === t && (t = {}),
                this._applyFormState(e),
                this.markAsPristine(t),
                this.markAsUntouched(t),
                this.setValue(this.value, t),
                (this._pendingChange = !1);
            }),
            (t.prototype._updateValue = function() {}),
            (t.prototype._anyControls = function(e) {
              return !1;
            }),
            (t.prototype._allControlsDisabled = function() {
              return this.disabled;
            }),
            (t.prototype.registerOnChange = function(e) {
              this._onChange.push(e);
            }),
            (t.prototype._clearChangeFns = function() {
              (this._onChange = []),
                (this._onDisabledChange = []),
                (this._onCollectionChange = function() {});
            }),
            (t.prototype.registerOnDisabledChange = function(e) {
              this._onDisabledChange.push(e);
            }),
            (t.prototype._forEachChild = function(e) {}),
            (t.prototype._syncPendingControls = function() {
              return !(
                'submit' !== this.updateOn ||
                (this._pendingDirty && this.markAsDirty(),
                this._pendingTouched && this.markAsTouched(),
                !this._pendingChange) ||
                (this.setValue(this._pendingValue, {
                  onlySelf: !0,
                  emitModelToViewChange: !1
                }),
                0)
              );
            }),
            (t.prototype._applyFormState = function(e) {
              this._isBoxedValue(e)
                ? ((this.value = this._pendingValue = e.value),
                  e.disabled
                    ? this.disable({ onlySelf: !0, emitEvent: !1 })
                    : this.enable({ onlySelf: !0, emitEvent: !1 }))
                : (this.value = this._pendingValue = e);
            }),
            t
          );
        })(Qd),
        qd = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, Ud(n), Gd(r, n)) || this;
            return (
              (o.controls = t),
              o._initObservables(),
              o._setUpdateStrategy(n),
              o._setUpControls(),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.registerControl = function(e, t) {
              return this.controls[e]
                ? this.controls[e]
                : ((this.controls[e] = t),
                  t.setParent(this),
                  t._registerOnCollectionChange(this._onCollectionChange),
                  t);
            }),
            (t.prototype.addControl = function(e, t) {
              this.registerControl(e, t),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (t.prototype.removeControl = function(e) {
              this.controls[e] &&
                this.controls[e]._registerOnCollectionChange(function() {}),
                delete this.controls[e],
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (t.prototype.setControl = function(e, t) {
              this.controls[e] &&
                this.controls[e]._registerOnCollectionChange(function() {}),
                delete this.controls[e],
                t && this.registerControl(e, t),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (t.prototype.contains = function(e) {
              return (
                this.controls.hasOwnProperty(e) && this.controls[e].enabled
              );
            }),
            (t.prototype.setValue = function(e, t) {
              var n = this;
              void 0 === t && (t = {}),
                this._checkAllValuesPresent(e),
                Object.keys(e).forEach(function(r) {
                  n._throwIfControlMissing(r),
                    n.controls[r].setValue(e[r], {
                      onlySelf: !0,
                      emitEvent: t.emitEvent
                    });
                }),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.patchValue = function(e, t) {
              var n = this;
              void 0 === t && (t = {}),
                Object.keys(e).forEach(function(r) {
                  n.controls[r] &&
                    n.controls[r].patchValue(e[r], {
                      onlySelf: !0,
                      emitEvent: t.emitEvent
                    });
                }),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.reset = function(e, t) {
              void 0 === e && (e = {}),
                void 0 === t && (t = {}),
                this._forEachChild(function(n, r) {
                  n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                }),
                this.updateValueAndValidity(t),
                this._updatePristine(t),
                this._updateTouched(t);
            }),
            (t.prototype.getRawValue = function() {
              return this._reduceChildren({}, function(e, t, n) {
                return (e[n] = t instanceof Wd ? t.value : t.getRawValue()), e;
              });
            }),
            (t.prototype._syncPendingControls = function() {
              var e = this._reduceChildren(!1, function(e, t) {
                return !!t._syncPendingControls() || e;
              });
              return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
            }),
            (t.prototype._throwIfControlMissing = function(e) {
              if (!Object.keys(this.controls).length)
                throw new Error(
                  "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                );
              if (!this.controls[e])
                throw new Error(
                  'Cannot find form control with name: ' + e + '.'
                );
            }),
            (t.prototype._forEachChild = function(e) {
              var t = this;
              Object.keys(this.controls).forEach(function(n) {
                return e(t.controls[n], n);
              });
            }),
            (t.prototype._setUpControls = function() {
              var e = this;
              this._forEachChild(function(t) {
                t.setParent(e),
                  t._registerOnCollectionChange(e._onCollectionChange);
              });
            }),
            (t.prototype._updateValue = function() {
              this.value = this._reduceValue();
            }),
            (t.prototype._anyControls = function(e) {
              var t = this,
                n = !1;
              return (
                this._forEachChild(function(r, o) {
                  n = n || (t.contains(o) && e(r));
                }),
                n
              );
            }),
            (t.prototype._reduceValue = function() {
              var e = this;
              return this._reduceChildren({}, function(t, n, r) {
                return (n.enabled || e.disabled) && (t[r] = n.value), t;
              });
            }),
            (t.prototype._reduceChildren = function(e, t) {
              var n = e;
              return (
                this._forEachChild(function(e, r) {
                  n = t(n, e, r);
                }),
                n
              );
            }),
            (t.prototype._allControlsDisabled = function() {
              var e, t;
              try {
                for (
                  var n = u(Object.keys(this.controls)), r = n.next();
                  !r.done;
                  r = n.next()
                )
                  if (this.controls[r.value].enabled) return !1;
              } catch (o) {
                e = { error: o };
              } finally {
                try {
                  r && !r.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              return Object.keys(this.controls).length > 0 || this.disabled;
            }),
            (t.prototype._checkAllValuesPresent = function(e) {
              this._forEachChild(function(t, n) {
                if (void 0 === e[n])
                  throw new Error(
                    "Must supply a value for form control with name: '" +
                      n +
                      "'."
                  );
              });
            }),
            t
          );
        })(Qd),
        Xd = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, Ud(n), Gd(r, n)) || this;
            return (
              (o.controls = t),
              o._initObservables(),
              o._setUpdateStrategy(n),
              o._setUpControls(),
              o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              o
            );
          }
          return (
            o(t, e),
            (t.prototype.at = function(e) {
              return this.controls[e];
            }),
            (t.prototype.push = function(e) {
              this.controls.push(e),
                this._registerControl(e),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            (t.prototype.insert = function(e, t) {
              this.controls.splice(e, 0, t),
                this._registerControl(t),
                this.updateValueAndValidity();
            }),
            (t.prototype.removeAt = function(e) {
              this.controls[e] &&
                this.controls[e]._registerOnCollectionChange(function() {}),
                this.controls.splice(e, 1),
                this.updateValueAndValidity();
            }),
            (t.prototype.setControl = function(e, t) {
              this.controls[e] &&
                this.controls[e]._registerOnCollectionChange(function() {}),
                this.controls.splice(e, 1),
                t && (this.controls.splice(e, 0, t), this._registerControl(t)),
                this.updateValueAndValidity(),
                this._onCollectionChange();
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function() {
                return this.controls.length;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.setValue = function(e, t) {
              var n = this;
              void 0 === t && (t = {}),
                this._checkAllValuesPresent(e),
                e.forEach(function(e, r) {
                  n._throwIfControlMissing(r),
                    n
                      .at(r)
                      .setValue(e, { onlySelf: !0, emitEvent: t.emitEvent });
                }),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.patchValue = function(e, t) {
              var n = this;
              void 0 === t && (t = {}),
                e.forEach(function(e, r) {
                  n.at(r) &&
                    n
                      .at(r)
                      .patchValue(e, { onlySelf: !0, emitEvent: t.emitEvent });
                }),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.reset = function(e, t) {
              void 0 === e && (e = []),
                void 0 === t && (t = {}),
                this._forEachChild(function(n, r) {
                  n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
                }),
                this.updateValueAndValidity(t),
                this._updatePristine(t),
                this._updateTouched(t);
            }),
            (t.prototype.getRawValue = function() {
              return this.controls.map(function(e) {
                return e instanceof Wd ? e.value : e.getRawValue();
              });
            }),
            (t.prototype._syncPendingControls = function() {
              var e = this.controls.reduce(function(e, t) {
                return !!t._syncPendingControls() || e;
              }, !1);
              return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
            }),
            (t.prototype._throwIfControlMissing = function(e) {
              if (!this.controls.length)
                throw new Error(
                  "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                );
              if (!this.at(e))
                throw new Error('Cannot find form control at index ' + e);
            }),
            (t.prototype._forEachChild = function(e) {
              this.controls.forEach(function(t, n) {
                e(t, n);
              });
            }),
            (t.prototype._updateValue = function() {
              var e = this;
              this.value = this.controls
                .filter(function(t) {
                  return t.enabled || e.disabled;
                })
                .map(function(e) {
                  return e.value;
                });
            }),
            (t.prototype._anyControls = function(e) {
              return this.controls.some(function(t) {
                return t.enabled && e(t);
              });
            }),
            (t.prototype._setUpControls = function() {
              var e = this;
              this._forEachChild(function(t) {
                return e._registerControl(t);
              });
            }),
            (t.prototype._checkAllValuesPresent = function(e) {
              this._forEachChild(function(t, n) {
                if (void 0 === e[n])
                  throw new Error(
                    'Must supply a value for form control at index: ' + n + '.'
                  );
              });
            }),
            (t.prototype._allControlsDisabled = function() {
              var e, t;
              try {
                for (
                  var n = u(this.controls), r = n.next();
                  !r.done;
                  r = n.next()
                )
                  if (r.value.enabled) return !1;
              } catch (o) {
                e = { error: o };
              } finally {
                try {
                  r && !r.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
              return this.controls.length > 0 || this.disabled;
            }),
            (t.prototype._registerControl = function(e) {
              e.setParent(this),
                e._registerOnCollectionChange(this._onCollectionChange);
            }),
            t
          );
        })(Qd),
        Yd = Promise.resolve(null),
        Kd = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.submitted = !1),
              (r._directives = []),
              (r.ngSubmit = new Po()),
              (r.form = new qd({}, Ld(t), Hd(n))),
              r
            );
          }
          return (
            o(t, e),
            (t.prototype.ngAfterViewInit = function() {
              this._setUpdateStrategy();
            }),
            Object.defineProperty(t.prototype, 'formDirective', {
              get: function() {
                return this;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'control', {
              get: function() {
                return this.form;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return [];
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'controls', {
              get: function() {
                return this.form.controls;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.addControl = function(e) {
              var t = this;
              Yd.then(function() {
                var n = t._findContainer(e.path);
                (e.control = n.registerControl(e.name, e.control)),
                  Md(e.control, e),
                  e.control.updateValueAndValidity({ emitEvent: !1 }),
                  t._directives.push(e);
              });
            }),
            (t.prototype.getControl = function(e) {
              return this.form.get(e.path);
            }),
            (t.prototype.removeControl = function(e) {
              var t = this;
              Yd.then(function() {
                var n,
                  r,
                  o = t._findContainer(e.path);
                o && o.removeControl(e.name),
                  (r = (n = t._directives).indexOf(e)) > -1 && n.splice(r, 1);
              });
            }),
            (t.prototype.addFormGroup = function(e) {
              var t = this;
              Yd.then(function() {
                var n = t._findContainer(e.path),
                  r = new qd({});
                (function(e, t) {
                  null == e && Rd(t, 'Cannot find control with'),
                    (e.validator = dd.compose([e.validator, t.validator])),
                    (e.asyncValidator = dd.composeAsync([
                      e.asyncValidator,
                      t.asyncValidator
                    ]));
                })(r, e),
                  n.registerControl(e.name, r),
                  r.updateValueAndValidity({ emitEvent: !1 });
              });
            }),
            (t.prototype.removeFormGroup = function(e) {
              var t = this;
              Yd.then(function() {
                var n = t._findContainer(e.path);
                n && n.removeControl(e.name);
              });
            }),
            (t.prototype.getFormGroup = function(e) {
              return this.form.get(e.path);
            }),
            (t.prototype.updateModel = function(e, t) {
              var n = this;
              Yd.then(function() {
                n.form.get(e.path).setValue(t);
              });
            }),
            (t.prototype.setValue = function(e) {
              this.control.setValue(e);
            }),
            (t.prototype.onSubmit = function(e) {
              return (
                (this.submitted = !0),
                (t = this._directives),
                this.form._syncPendingControls(),
                t.forEach(function(e) {
                  var t = e.control;
                  'submit' === t.updateOn &&
                    t._pendingChange &&
                    (e.viewToModelUpdate(t._pendingValue),
                    (t._pendingChange = !1));
                }),
                this.ngSubmit.emit(e),
                !1
              );
              var t;
            }),
            (t.prototype.onReset = function() {
              this.resetForm();
            }),
            (t.prototype.resetForm = function(e) {
              void 0 === e && (e = void 0),
                this.form.reset(e),
                (this.submitted = !1);
            }),
            (t.prototype._setUpdateStrategy = function() {
              this.options &&
                null != this.options.updateOn &&
                (this.form._updateOn = this.options.updateOn);
            }),
            (t.prototype._findContainer = function(e) {
              return e.pop(), e.length ? this.form.get(e) : this.form;
            }),
            t
          );
        })(ud),
        $d = (function() {
          function e() {}
          return (
            (e.modelParentException = function() {
              throw new Error(
                '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
              );
            }),
            (e.formGroupNameException = function() {
              throw new Error(
                '\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ' +
                  Od +
                  "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " +
                  Ad
              );
            }),
            (e.missingNameException = function() {
              throw new Error(
                'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
              );
            }),
            (e.modelGroupParentException = function() {
              throw new Error(
                '\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ' +
                  Od +
                  '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' +
                  Ad
              );
            }),
            (e.ngFormWarning = function() {
              console.warn(
                "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
              );
            }),
            e
          );
        })(),
        Jd = new _e('NgFormSelectorWarning'),
        ep = (function(e) {
          function t(t, n, r) {
            var o = e.call(this) || this;
            return (
              (o._parent = t), (o._validators = n), (o._asyncValidators = r), o
            );
          }
          var n;
          return (
            o(t, e),
            (n = t),
            (t.prototype._checkParentType = function() {
              this._parent instanceof n ||
                this._parent instanceof Kd ||
                $d.modelGroupParentException();
            }),
            t
          );
        })(zd),
        tp = Promise.resolve(null),
        np = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this) || this;
            return (
              (i.control = new Wd()),
              (i._registered = !1),
              (i.update = new Po()),
              (i._parent = t),
              (i._rawValidators = n || []),
              (i._rawAsyncValidators = r || []),
              (i.valueAccessor = (function(e, t) {
                if (!t) return null;
                Array.isArray(t) ||
                  Rd(
                    e,
                    'Value accessor was not provided as an array for form control with'
                  );
                var n = void 0,
                  r = void 0,
                  o = void 0;
                return (
                  t.forEach(function(t) {
                    var i;
                    t.constructor === gd
                      ? (n = t)
                      : ((i = t),
                        Fd.some(function(e) {
                          return i.constructor === e;
                        })
                          ? (r &&
                              Rd(
                                e,
                                'More than one built-in value accessor matches form control with'
                              ),
                            (r = t))
                          : (o &&
                              Rd(
                                e,
                                'More than one custom value accessor matches form control with'
                              ),
                            (o = t)));
                  }),
                  o ||
                    r ||
                    n ||
                    (Rd(e, 'No valid value accessor for form control with'),
                    null)
                );
              })(i, o)),
              i
            );
          }
          return (
            o(t, e),
            (t.prototype.ngOnChanges = function(e) {
              this._checkForErrors(),
                this._registered || this._setUpControl(),
                'isDisabled' in e && this._updateDisabled(e),
                (function(e, t) {
                  if (!e.hasOwnProperty('model')) return !1;
                  var n = e.model;
                  return !!n.isFirstChange() || !Te(t, n.currentValue);
                })(e, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }),
            (t.prototype.ngOnDestroy = function() {
              this.formDirective && this.formDirective.removeControl(this);
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return this._parent ? Dd(this.name, this._parent) : [this.name];
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'formDirective', {
              get: function() {
                return this._parent ? this._parent.formDirective : null;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'validator', {
              get: function() {
                return Ld(this._rawValidators);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return Hd(this._rawAsyncValidators);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.viewToModelUpdate = function(e) {
              (this.viewModel = e), this.update.emit(e);
            }),
            (t.prototype._setUpControl = function() {
              this._setUpdateStrategy(),
                this._isStandalone()
                  ? this._setUpStandalone()
                  : this.formDirective.addControl(this),
                (this._registered = !0);
            }),
            (t.prototype._setUpdateStrategy = function() {
              this.options &&
                null != this.options.updateOn &&
                (this.control._updateOn = this.options.updateOn);
            }),
            (t.prototype._isStandalone = function() {
              return (
                !this._parent || !(!this.options || !this.options.standalone)
              );
            }),
            (t.prototype._setUpStandalone = function() {
              Md(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }),
            (t.prototype._checkForErrors = function() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }),
            (t.prototype._checkParentType = function() {
              !(this._parent instanceof ep) && this._parent instanceof zd
                ? $d.formGroupNameException()
                : this._parent instanceof ep ||
                  this._parent instanceof Kd ||
                  $d.modelParentException();
            }),
            (t.prototype._checkName = function() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone() || this.name || $d.missingNameException();
            }),
            (t.prototype._updateValue = function(e) {
              var t = this;
              tp.then(function() {
                t.control.setValue(e, { emitViewToModelChange: !1 });
              });
            }),
            (t.prototype._updateDisabled = function(e) {
              var t = this,
                n = e.isDisabled.currentValue,
                r = '' === n || (n && 'false' !== n);
              tp.then(function() {
                r && !t.control.disabled
                  ? t.control.disable()
                  : !r && t.control.disabled && t.control.enable();
              });
            }),
            t
          );
        })(xd),
        rp = (function() {
          return function() {};
        })(),
        op = (function() {
          function e() {}
          var t;
          return (
            (t = e),
            (e.withConfig = function(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: Jd, useValue: e.warnOnDeprecatedNgFormSelector }
                ]
              };
            }),
            e
          );
        })(),
        ip = n('Gz50'),
        sp = (function() {
          return function() {
            (this.chartTypes = ['Bar', 'Line']),
              (this.type = 'Bar'),
              (this.data = ip.Bar),
              (this.options = {
                axisX: { showLabel: !1 },
                axisY: { showLabel: !1 }
              });
          };
        })(),
        ap = Is({ encapsulation: 2, styles: [], data: {} });
      function up(e) {
        return hu(
          0,
          [
            (e()(),
            na(
              0,
              0,
              null,
              null,
              3,
              'option',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            Ga(
              1,
              147456,
              null,
              0,
              Td,
              [Ur, qr, [2, Id]],
              { ngValue: [0, 'ngValue'] },
              null
            ),
            Ga(
              2,
              147456,
              null,
              0,
              Vd,
              [Ur, qr, [8, null]],
              { ngValue: [0, 'ngValue'] },
              null
            ),
            (e()(), du(3, null, ['', '']))
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit), e(t, 2, 0, t.context.$implicit);
          },
          function(e, t) {
            e(t, 3, 0, t.context.$implicit);
          }
        );
      }
      function lp(e) {
        return hu(
          0,
          [
            (e()(),
            na(
              0,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              1,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(2, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), du(-1, null, ['Dynamic Chart Types'])),
            (e()(),
            na(
              4,
              0,
              null,
              null,
              8,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              5,
              0,
              null,
              null,
              7,
              'select',
              [['class', 'form-control']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [[null, 'ngModelChange'], [null, 'change'], [null, 'blur']],
              function(e, t, n) {
                var r = !0,
                  o = e.component;
                return (
                  'change' === t &&
                    (r = !1 !== Na(e, 6).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Na(e, 6).onTouched() && r),
                  'ngModelChange' === t && (r = !1 !== (o.type = n) && r),
                  r
                );
              },
              null,
              null
            )),
            Ga(6, 16384, null, 0, Id, [qr, Ur], null, null),
            Za(
              1024,
              null,
              vd,
              function(e) {
                return [e];
              },
              [Id]
            ),
            Ga(
              8,
              671744,
              null,
              0,
              np,
              [[8, null], [8, null], [8, null], [6, vd]],
              { model: [0, 'model'] },
              { update: 'ngModelChange' }
            ),
            Za(2048, null, xd, null, [np]),
            Ga(10, 16384, null, 0, Bd, [[4, xd]], null, null),
            (e()(), ta(16777216, null, null, 1, null, up)),
            Ga(
              12,
              278528,
              null,
              0,
              Ll,
              [ji, Vo, ns],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            na(
              13,
              0,
              null,
              null,
              1,
              'x-chartist',
              [],
              null,
              null,
              null,
              kl,
              Al
            )),
            Ga(
              14,
              770048,
              null,
              0,
              Sl,
              [Ur],
              { data: [0, 'data'], type: [1, 'type'], options: [2, 'options'] },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 8, 0, n.type),
              e(t, 12, 0, n.chartTypes),
              e(t, 14, 0, n.data, n.type, n.options);
          },
          function(e, t) {
            e(
              t,
              5,
              0,
              Na(t, 10).ngClassUntouched,
              Na(t, 10).ngClassTouched,
              Na(t, 10).ngClassPristine,
              Na(t, 10).ngClassDirty,
              Na(t, 10).ngClassValid,
              Na(t, 10).ngClassInvalid,
              Na(t, 10).ngClassPending
            );
          }
        );
      }
      var cp = Is({ encapsulation: 0, styles: [['']], data: {} });
      function dp(e) {
        return hu(
          0,
          [
            (e()(),
            na(0, 0, null, null, 2, 'div', [], null, null, null, null, null)),
            (e()(),
            na(
              1,
              0,
              null,
              null,
              1,
              'x-chartist',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              kl,
              Al
            )),
            Ga(
              2,
              770048,
              null,
              0,
              Sl,
              [Ur],
              {
                data: [0, 'data'],
                type: [1, 'type'],
                options: [2, 'options'],
                responsiveOptions: [3, 'responsiveOptions'],
                events: [4, 'events']
              },
              null
            )
          ],
          function(e, t) {
            e(
              t,
              2,
              0,
              t.context.$implicit.data,
              t.context.$implicit.type,
              t.context.$implicit.options,
              t.context.$implicit.responsiveOptions,
              t.context.$implicit.events
            );
          },
          null
        );
      }
      function pp(e) {
        return hu(
          0,
          [
            (e()(), ta(16777216, null, null, 1, null, dp)),
            Ga(
              1,
              278528,
              null,
              0,
              Ll,
              [ji, Vo, ns],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            na(
              2,
              0,
              null,
              null,
              6,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              3,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              4,
              0,
              null,
              null,
              1,
              'async-chart',
              [],
              null,
              null,
              null,
              Ql,
              Zl
            )),
            Ga(5, 49152, null, 0, Gl, [], null, null),
            (e()(),
            na(
              6,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              7,
              0,
              null,
              null,
              1,
              'live-chart',
              [],
              null,
              null,
              null,
              Xl,
              ql
            )),
            Ga(8, 180224, null, 0, Wl, [], null, null),
            (e()(),
            na(
              9,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              10,
              0,
              null,
              null,
              2,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            na(
              11,
              0,
              null,
              null,
              1,
              'dynamic-chart',
              [],
              null,
              null,
              null,
              lp,
              ap
            )),
            Ga(12, 49152, null, 0, sp, [], null, null),
            (e()(),
            na(
              13,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              null,
              null
            ))
          ],
          function(e, t) {
            e(t, 1, 0, t.component.charts);
          },
          null
        );
      }
      function fp(e) {
        return hu(
          0,
          [
            (e()(),
            na(0, 0, null, null, 1, 'app-root', [], null, null, null, pp, cp)),
            Ga(1, 49152, null, 0, Cl, [], null, null)
          ],
          null,
          null
        );
      }
      var hp = _a('app-root', Cl, fp, {}, {}, []),
        vp = bl(wl, [Cl], function(e) {
          return (function(e) {
            for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
              var i = e[o];
              i.token === br && !0 === i.value && (r = !0),
                1073741824 & i.flags && n.push(i.token),
                (i.index = o),
                (t[Os(i.token)] = i);
            }
            return {
              factory: null,
              providersByKey: t,
              providers: e,
              modules: n,
              isRoot: r
            };
          })([
            da(512, Rr, Lr, [[8, [hp]], [3, Rr], Fr]),
            da(5120, us, ds, [[3, us]]),
            da(4608, Ml, jl, [us, [2, Dl]]),
            da(4608, ui, ui, []),
            da(5120, qo, Xo, []),
            da(5120, ns, ls, []),
            da(5120, rs, cs, []),
            da(4608, Yc, Kc, [zl]),
            da(6144, Kr, null, [Yc]),
            da(4608, Uc, Zc, []),
            da(
              5120,
              yc,
              function(e, t, n, r, o, i, s, a) {
                return [new zc(e, t, n), new Xc(r), new Qc(o, i, s, a)];
              },
              [zl, vi, $o, zl, zl, Uc, ei, [2, Gc]]
            ),
            da(4608, gc, gc, [yc, vi]),
            da(135680, _c, _c, [zl]),
            da(4608, Ac, Ac, [gc, _c]),
            da(6144, Qr, null, [Ac]),
            da(6144, bc, null, [_c]),
            da(4608, Ci, Ci, [vi]),
            da(4608, Cd, Cd, []),
            da(1073742336, Fl, Fl, []),
            da(1024, Uo, id, []),
            da(
              1024,
              Qo,
              function(e) {
                return [
                  ((t = e),
                  fc('probe', vc),
                  fc(
                    'coreTokens',
                    i(
                      {},
                      hc,
                      (t || []).reduce(function(e, t) {
                        return (e[t.name] = t.token), e;
                      }, {})
                    )
                  ),
                  function() {
                    return vc;
                  })
                ];
                var t;
              },
              [[2, Ai]]
            ),
            da(512, Wo, Wo, [[2, Qo]]),
            da(131584, Pi, Pi, [vi, ei, ir, Uo, Rr, Wo]),
            da(1073742336, ps, ps, [Pi]),
            da(1073742336, sd, sd, [[3, sd]]),
            da(1073742336, Ol, Ol, []),
            da(1073742336, rp, rp, []),
            da(1073742336, op, op, []),
            da(1073742336, wl, wl, []),
            da(256, br, !0, [])
          ]);
        });
      (function() {
        if (ao)
          throw new Error('Cannot enable prod mode after platform setup.');
        so = !1;
      })(),
        od()
          .bootstrapModuleFactory(vp)
          .catch(function(e) {
            return console.error(e);
          });
    },
    zn8P: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 'zn8P');
    }
  },
  [[0, 0]]
]);
