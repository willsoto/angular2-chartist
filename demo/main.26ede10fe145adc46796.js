(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '+Bet': function(e, t, n) {
      var r, o, i;
      void 0 === (i = this) && void 0 !== window && (i = window),
        (r = [n('BeBh')]),
        void 0 ===
          (o = function(e) {
            return (i['Chartist.plugins.tooltip'] =
              ((t = e),
              (function(e, t, n) {
                'use strict';
                var r = {
                  currency: void 0,
                  currencyFormatCallback: void 0,
                  tooltipOffset: { x: 0, y: -20 },
                  anchorToPoint: !1,
                  appendToBody: !0,
                  class: void 0,
                  pointClass: 'ct-point'
                };
                function o(e, t) {
                  return (
                    (' ' + e.getAttribute('class') + ' ').indexOf(
                      ' ' + t + ' '
                    ) > -1
                  );
                }
                function i(n) {
                  var r;
                  return i in n
                    ? ((r = n.offsetParent) || (r = t.body.parentElement), r)
                    : (r = n.parentNode)
                    ? 'static' !== e.getComputedStyle(r).position
                      ? r
                      : 'BODY' === r.tagName
                      ? r.parentElement
                      : i(r)
                    : t.body.parentElement;
                }
                (n.plugins = n.plugins || {}),
                  (n.plugins.tooltip = function(a) {
                    return (
                      (a = n.extend({}, r, a)),
                      function(r) {
                        var s = a.pointClass;
                        r instanceof n.Bar
                          ? (s = 'ct-bar')
                          : r instanceof n.Pie &&
                            (s = r.options.donut
                              ? 'ct-slice-donut'
                              : 'ct-slice-pie');
                        var u,
                          l = r.container,
                          c = !1,
                          d = i(l);
                        (u = a.appendToBody
                          ? t.querySelector('.chartist-tooltip')
                          : l.querySelector('.chartist-tooltip')) ||
                          (((u = t.createElement('div')).className = a.class
                            ? 'chartist-tooltip ' + a.class
                            : 'chartist-tooltip'),
                          a.appendToBody
                            ? t.body.appendChild(u)
                            : l.appendChild(u));
                        var p = u.offsetHeight,
                          h = u.offsetWidth;
                        function f(e, t, n) {
                          l.addEventListener(e, function(e) {
                            (t && !o(e.target, t)) || n(e);
                          });
                        }
                        function y(t) {
                          var n =
                              -(h = h || u.offsetWidth) / 2 + a.tooltipOffset.x,
                            r = -(p = p || u.offsetHeight) + a.tooltipOffset.y,
                            o =
                              !0 === a.anchorToPoint &&
                              t.target.x2 &&
                              t.target.y2;
                          if (!0 === a.appendToBody)
                            if (o) {
                              var i = l.getBoundingClientRect(),
                                s =
                                  t.target.y2.baseVal.value +
                                  i.top +
                                  e.pageYOffset;
                              (u.style.left =
                                t.target.x2.baseVal.value +
                                i.left +
                                e.pageXOffset +
                                n +
                                'px'),
                                (u.style.top = s + r + 'px');
                            } else
                              (u.style.left = t.pageX + n + 'px'),
                                (u.style.top = t.pageY + r + 'px');
                          else {
                            var c = d.getBoundingClientRect(),
                              f = -c.left - e.scrollX + n,
                              y = -c.top - e.scrollY + r;
                            o
                              ? ((i = l.getBoundingClientRect()),
                                (s =
                                  t.target.y2.baseVal.value +
                                  i.top +
                                  e.pageYOffset),
                                (u.style.left =
                                  t.target.x2.baseVal.value +
                                  i.left +
                                  e.pageXOffset +
                                  f +
                                  'px'),
                                (u.style.top = s + y + 'px'))
                              : ((u.style.left = t.pageX + f + 'px'),
                                (u.style.top = t.pageY + y + 'px'));
                          }
                        }
                        function v(e) {
                          c = !1;
                          var t = new RegExp('tooltip-show\\s*', 'gi');
                          e.className = e.className.replace(t, '').trim();
                        }
                        v(u),
                          f('mouseover', s, function(e) {
                            var s,
                              f = e.target,
                              v = '',
                              g = (r instanceof n.Pie
                              ? f
                              : f.parentNode)
                                ? f.parentNode.getAttribute('ct:meta') ||
                                  f.parentNode.getAttribute('ct:series-name')
                                : '',
                              m = f.getAttribute('ct:meta') || g || '',
                              b = !!m,
                              _ = f.getAttribute('ct:value');
                            if (
                              (a.transformTooltipTextFnc &&
                                'function' ==
                                  typeof a.transformTooltipTextFnc &&
                                (_ = a.transformTooltipTextFnc(_)),
                              a.tooltipFnc && 'function' == typeof a.tooltipFnc)
                            )
                              v = a.tooltipFnc(m, _);
                            else {
                              if (a.metaIsHTML) {
                                var w = t.createElement('textarea');
                                (w.innerHTML = m), (m = w.value);
                              }
                              if (
                                ((m =
                                  '<span class="chartist-tooltip-meta">' +
                                  m +
                                  '</span>'),
                                b)
                              )
                                v += m + '<br>';
                              else if (r instanceof n.Pie) {
                                var x = (function(e, t) {
                                  do {
                                    e = e.nextSibling;
                                  } while (e && !o(e, 'ct-label'));
                                  return e;
                                })(f);
                                x &&
                                  (v +=
                                    ((s = x).innerText || s.textContent) +
                                    '<br>');
                              }
                              _ &&
                                (a.currency &&
                                  (_ =
                                    null != a.currencyFormatCallback
                                      ? a.currencyFormatCallback(_, a)
                                      : a.currency +
                                        _.replace(
                                          /(\d)(?=(\d{3})+(?:\.\d+)?$)/g,
                                          '$1,'
                                        )),
                                (v += _ =
                                  '<span class="chartist-tooltip-value">' +
                                  _ +
                                  '</span>'));
                            }
                            v &&
                              ((u.innerHTML = v),
                              (p = u.offsetHeight),
                              (h = u.offsetWidth),
                              !0 !== a.appendToBody && (d = i(l)),
                              'absolute' !== u.style.display &&
                                (u.style.display = 'absolute'),
                              y(e),
                              (function(e) {
                                (c = !0),
                                  o(e, 'tooltip-show') ||
                                    (e.className =
                                      e.className + ' tooltip-show');
                              })(u),
                              (p = u.offsetHeight),
                              (h = u.offsetWidth));
                          }),
                          f('mouseout', s, function() {
                            v(u);
                          }),
                          f('mousemove', null, function(e) {
                            !1 === a.anchorToPoint && c && y(e);
                          });
                      }
                    );
                  });
              })(window, document, t),
              t.plugins.tooltip));
            var t;
          }.apply(t, r)) || (e.exports = o);
    },
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    BeBh: function(e, t, n) {
      var r, o;
      (o = this),
        void 0 ===
          (r = function() {
            return (o.Chartist = (function() {
              var e = { version: '0.11.3' };
              return (
                (function(e, t) {
                  'use strict';
                  var n = e.window,
                    r = e.document;
                  (t.namespaces = {
                    svg: 'http://www.w3.org/2000/svg',
                    xmlns: 'http://www.w3.org/2000/xmlns/',
                    xhtml: 'http://www.w3.org/1999/xhtml',
                    xlink: 'http://www.w3.org/1999/xlink',
                    ct: 'http://gionkunz.github.com/chartist-js/ct'
                  }),
                    (t.noop = function(e) {
                      return e;
                    }),
                    (t.alphaNumerate = function(e) {
                      return String.fromCharCode(97 + (e % 26));
                    }),
                    (t.extend = function(e) {
                      var n, r, o;
                      for (e = e || {}, n = 1; n < arguments.length; n++)
                        for (var i in (r = arguments[n]))
                          e[i] =
                            'object' != typeof (o = r[i]) ||
                            null === o ||
                            o instanceof Array
                              ? o
                              : t.extend(e[i], o);
                      return e;
                    }),
                    (t.replaceAll = function(e, t, n) {
                      return e.replace(new RegExp(t, 'g'), n);
                    }),
                    (t.ensureUnit = function(e, t) {
                      return 'number' == typeof e && (e += t), e;
                    }),
                    (t.quantity = function(e) {
                      if ('string' == typeof e) {
                        var t = /^(\d+)\s*(.*)$/g.exec(e);
                        return { value: +t[1], unit: t[2] || void 0 };
                      }
                      return { value: e };
                    }),
                    (t.querySelector = function(e) {
                      return e instanceof Node ? e : r.querySelector(e);
                    }),
                    (t.times = function(e) {
                      return Array.apply(null, new Array(e));
                    }),
                    (t.sum = function(e, t) {
                      return e + (t || 0);
                    }),
                    (t.mapMultiply = function(e) {
                      return function(t) {
                        return t * e;
                      };
                    }),
                    (t.mapAdd = function(e) {
                      return function(t) {
                        return t + e;
                      };
                    }),
                    (t.serialMap = function(e, n) {
                      var r = [],
                        o = Math.max.apply(
                          null,
                          e.map(function(e) {
                            return e.length;
                          })
                        );
                      return (
                        t.times(o).forEach(function(t, o) {
                          var i = e.map(function(e) {
                            return e[o];
                          });
                          r[o] = n.apply(null, i);
                        }),
                        r
                      );
                    }),
                    (t.roundWithPrecision = function(e, n) {
                      var r = Math.pow(10, n || t.precision);
                      return Math.round(e * r) / r;
                    }),
                    (t.precision = 8),
                    (t.escapingMap = {
                      '&': '&amp;',
                      '<': '&lt;',
                      '>': '&gt;',
                      '"': '&quot;',
                      "'": '&#039;'
                    }),
                    (t.serialize = function(e) {
                      return null == e
                        ? e
                        : ('number' == typeof e
                            ? (e = '' + e)
                            : 'object' == typeof e &&
                              (e = JSON.stringify({ data: e })),
                          Object.keys(t.escapingMap).reduce(function(e, n) {
                            return t.replaceAll(e, n, t.escapingMap[n]);
                          }, e));
                    }),
                    (t.deserialize = function(e) {
                      if ('string' != typeof e) return e;
                      e = Object.keys(t.escapingMap).reduce(function(e, n) {
                        return t.replaceAll(e, t.escapingMap[n], n);
                      }, e);
                      try {
                        e = void 0 !== (e = JSON.parse(e)).data ? e.data : e;
                      } catch (n) {}
                      return e;
                    }),
                    (t.createSvg = function(e, n, r, o) {
                      var i;
                      return (
                        (n = n || '100%'),
                        (r = r || '100%'),
                        Array.prototype.slice
                          .call(e.querySelectorAll('svg'))
                          .filter(function(e) {
                            return e.getAttributeNS(t.namespaces.xmlns, 'ct');
                          })
                          .forEach(function(t) {
                            e.removeChild(t);
                          }),
                        ((i = new t.Svg('svg')
                          .attr({ width: n, height: r })
                          .addClass(o))._node.style.width = n),
                        (i._node.style.height = r),
                        e.appendChild(i._node),
                        i
                      );
                    }),
                    (t.normalizeData = function(e, n, r) {
                      var o,
                        i = { raw: e, normalized: {} };
                      return (
                        (i.normalized.series = t.getDataArray(
                          { series: e.series || [] },
                          n,
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
                          t
                            .times(Math.max(0, o - i.normalized.labels.length))
                            .map(function() {
                              return '';
                            })
                        ),
                        n && t.reverseData(i.normalized),
                        i
                      );
                    }),
                    (t.safeHasProperty = function(e, t) {
                      return (
                        null !== e &&
                        'object' == typeof e &&
                        e.hasOwnProperty(t)
                      );
                    }),
                    (t.isDataHoleValue = function(e) {
                      return null == e || ('number' == typeof e && isNaN(e));
                    }),
                    (t.reverseData = function(e) {
                      e.labels.reverse(), e.series.reverse();
                      for (var t = 0; t < e.series.length; t++)
                        'object' == typeof e.series[t] &&
                        void 0 !== e.series[t].data
                          ? e.series[t].data.reverse()
                          : e.series[t] instanceof Array &&
                            e.series[t].reverse();
                    }),
                    (t.getDataArray = function(e, n, r) {
                      return e.series.map(function e(n) {
                        if (t.safeHasProperty(n, 'value')) return e(n.value);
                        if (t.safeHasProperty(n, 'data')) return e(n.data);
                        if (n instanceof Array) return n.map(e);
                        if (!t.isDataHoleValue(n)) {
                          if (r) {
                            var o = {};
                            return (
                              'string' == typeof r
                                ? (o[r] = t.getNumberOrUndefined(n))
                                : (o.y = t.getNumberOrUndefined(n)),
                              (o.x = n.hasOwnProperty('x')
                                ? t.getNumberOrUndefined(n.x)
                                : o.x),
                              (o.y = n.hasOwnProperty('y')
                                ? t.getNumberOrUndefined(n.y)
                                : o.y),
                              o
                            );
                          }
                          return t.getNumberOrUndefined(n);
                        }
                      });
                    }),
                    (t.normalizePadding = function(e, t) {
                      return (
                        (t = t || 0),
                        'number' == typeof e
                          ? { top: e, right: e, bottom: e, left: e }
                          : {
                              top: 'number' == typeof e.top ? e.top : t,
                              right: 'number' == typeof e.right ? e.right : t,
                              bottom:
                                'number' == typeof e.bottom ? e.bottom : t,
                              left: 'number' == typeof e.left ? e.left : t
                            }
                      );
                    }),
                    (t.getMetaData = function(e, t) {
                      var n = e.data ? e.data[t] : e[t];
                      return n ? n.meta : void 0;
                    }),
                    (t.orderOfMagnitude = function(e) {
                      return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
                    }),
                    (t.projectLength = function(e, t, n) {
                      return (t / n.range) * e;
                    }),
                    (t.getAvailableHeight = function(e, n) {
                      return Math.max(
                        (t.quantity(n.height).value || e.height()) -
                          (n.chartPadding.top + n.chartPadding.bottom) -
                          n.axisX.offset,
                        0
                      );
                    }),
                    (t.getHighLow = function(e, n, r) {
                      var o = {
                          high:
                            void 0 ===
                            (n = t.extend(
                              {},
                              n,
                              r ? n['axis' + r.toUpperCase()] : {}
                            )).high
                              ? -Number.MAX_VALUE
                              : +n.high,
                          low: void 0 === n.low ? Number.MAX_VALUE : +n.low
                        },
                        i = void 0 === n.high,
                        a = void 0 === n.low;
                      return (
                        (i || a) &&
                          (function e(t) {
                            if (void 0 !== t)
                              if (t instanceof Array)
                                for (var n = 0; n < t.length; n++) e(t[n]);
                              else {
                                var s = r ? +t[r] : +t;
                                i && s > o.high && (o.high = s),
                                  a && s < o.low && (o.low = s);
                              }
                          })(e),
                        (n.referenceValue || 0 === n.referenceValue) &&
                          ((o.high = Math.max(n.referenceValue, o.high)),
                          (o.low = Math.min(n.referenceValue, o.low))),
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
                    (t.isNumeric = function(e) {
                      return null !== e && isFinite(e);
                    }),
                    (t.isFalseyButZero = function(e) {
                      return !e && 0 !== e;
                    }),
                    (t.getNumberOrUndefined = function(e) {
                      return t.isNumeric(e) ? +e : void 0;
                    }),
                    (t.isMultiValue = function(e) {
                      return 'object' == typeof e && ('x' in e || 'y' in e);
                    }),
                    (t.getMultiValue = function(e, n) {
                      return t.isMultiValue(e)
                        ? t.getNumberOrUndefined(e[n || 'y'])
                        : t.getNumberOrUndefined(e);
                    }),
                    (t.rho = function(e) {
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
                    (t.getBounds = function(e, n, r, o) {
                      var i,
                        a,
                        s,
                        u = 0,
                        l = { high: n.high, low: n.low };
                      (l.valueRange = l.high - l.low),
                        (l.oom = t.orderOfMagnitude(l.valueRange)),
                        (l.step = Math.pow(10, l.oom)),
                        (l.min = Math.floor(l.low / l.step) * l.step),
                        (l.max = Math.ceil(l.high / l.step) * l.step),
                        (l.range = l.max - l.min),
                        (l.numberOfSteps = Math.round(l.range / l.step));
                      var c = t.projectLength(e, l.step, l) < r,
                        d = o ? t.rho(l.range) : 0;
                      if (o && t.projectLength(e, 1, l) >= r) l.step = 1;
                      else if (o && d < l.step && t.projectLength(e, d, l) >= r)
                        l.step = d;
                      else
                        for (;;) {
                          if (c && t.projectLength(e, l.step, l) <= r)
                            l.step *= 2;
                          else {
                            if (c || !(t.projectLength(e, l.step / 2, l) >= r))
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
                      var p = 2221e-19;
                      function h(e, t) {
                        return e === (e += t) && (e *= 1 + (t > 0 ? p : -p)), e;
                      }
                      for (
                        l.step = Math.max(l.step, p), a = l.min, s = l.max;
                        a + l.step <= l.low;

                      )
                        a = h(a, l.step);
                      for (; s - l.step >= l.high; ) s = h(s, -l.step);
                      (l.min = a), (l.max = s), (l.range = l.max - l.min);
                      var f = [];
                      for (i = l.min; i <= l.max; i = h(i, l.step)) {
                        var y = t.roundWithPrecision(i);
                        y !== f[f.length - 1] && f.push(y);
                      }
                      return (l.values = f), l;
                    }),
                    (t.polarToCartesian = function(e, t, n, r) {
                      var o = ((r - 90) * Math.PI) / 180;
                      return { x: e + n * Math.cos(o), y: t + n * Math.sin(o) };
                    }),
                    (t.createChartRect = function(e, n, r) {
                      var o = !(!n.axisX && !n.axisY),
                        i = o ? n.axisY.offset : 0,
                        a = o ? n.axisX.offset : 0,
                        s = e.width() || t.quantity(n.width).value || 0,
                        u = e.height() || t.quantity(n.height).value || 0,
                        l = t.normalizePadding(n.chartPadding, r);
                      (s = Math.max(s, i + l.left + l.right)),
                        (u = Math.max(u, a + l.top + l.bottom));
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
                          ? ('start' === n.axisX.position
                              ? ((c.y2 = l.top + a),
                                (c.y1 = Math.max(u - l.bottom, c.y2 + 1)))
                              : ((c.y2 = l.top),
                                (c.y1 = Math.max(u - l.bottom - a, c.y2 + 1))),
                            'start' === n.axisY.position
                              ? ((c.x1 = l.left + i),
                                (c.x2 = Math.max(s - l.right, c.x1 + 1)))
                              : ((c.x1 = l.left),
                                (c.x2 = Math.max(s - l.right - i, c.x1 + 1))))
                          : ((c.x1 = l.left),
                            (c.x2 = Math.max(s - l.right, c.x1 + 1)),
                            (c.y2 = l.top),
                            (c.y1 = Math.max(u - l.bottom, c.y2 + 1))),
                        c
                      );
                    }),
                    (t.createGrid = function(e, n, r, o, i, a, s, u) {
                      var l = {};
                      (l[r.units.pos + '1'] = e),
                        (l[r.units.pos + '2'] = e),
                        (l[r.counterUnits.pos + '1'] = o),
                        (l[r.counterUnits.pos + '2'] = o + i);
                      var c = a.elem('line', l, s.join(' '));
                      u.emit(
                        'draw',
                        t.extend(
                          {
                            type: 'grid',
                            axis: r,
                            index: n,
                            group: a,
                            element: c
                          },
                          l
                        )
                      );
                    }),
                    (t.createGridBackground = function(e, t, n, r) {
                      var o = e.elem(
                        'rect',
                        {
                          x: t.x1,
                          y: t.y2,
                          width: t.width(),
                          height: t.height()
                        },
                        n,
                        !0
                      );
                      r.emit('draw', {
                        type: 'gridBackground',
                        group: e,
                        element: o
                      });
                    }),
                    (t.createLabel = function(e, n, o, i, a, s, u, l, c, d, p) {
                      var h,
                        f = {};
                      if (
                        ((f[a.units.pos] = e + u[a.units.pos]),
                        (f[a.counterUnits.pos] = u[a.counterUnits.pos]),
                        (f[a.units.len] = n),
                        (f[a.counterUnits.len] = Math.max(0, s - 10)),
                        d)
                      ) {
                        var y = r.createElement('span');
                        (y.className = c.join(' ')),
                          y.setAttribute('xmlns', t.namespaces.xhtml),
                          (y.innerText = i[o]),
                          (y.style[a.units.len] =
                            Math.round(f[a.units.len]) + 'px'),
                          (y.style[a.counterUnits.len] =
                            Math.round(f[a.counterUnits.len]) + 'px'),
                          (h = l.foreignObject(
                            y,
                            t.extend({ style: 'overflow: visible;' }, f)
                          ));
                      } else h = l.elem('text', f, c.join(' ')).text(i[o]);
                      p.emit(
                        'draw',
                        t.extend(
                          {
                            type: 'label',
                            axis: a,
                            index: o,
                            group: l,
                            element: h,
                            text: i[o]
                          },
                          f
                        )
                      );
                    }),
                    (t.getSeriesOption = function(e, t, n) {
                      if (e.name && t.series && t.series[e.name]) {
                        var r = t.series[e.name];
                        return r.hasOwnProperty(n) ? r[n] : t[n];
                      }
                      return t[n];
                    }),
                    (t.optionsProvider = function(e, r, o) {
                      var i,
                        a,
                        s = t.extend({}, e),
                        u = [];
                      function l(e) {
                        var u = i;
                        if (((i = t.extend({}, s)), r))
                          for (a = 0; a < r.length; a++)
                            n.matchMedia(r[a][0]).matches &&
                              (i = t.extend(i, r[a][1]));
                        o &&
                          e &&
                          o.emit('optionsChanged', {
                            previousOptions: u,
                            currentOptions: i
                          });
                      }
                      if (!n.matchMedia)
                        throw "window.matchMedia not found! Make sure you're using a polyfill.";
                      if (r)
                        for (a = 0; a < r.length; a++) {
                          var c = n.matchMedia(r[a][0]);
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
                            return t.extend({}, i);
                          }
                        }
                      );
                    }),
                    (t.splitIntoSegments = function(e, n, r) {
                      r = t.extend({}, { increasingX: !1, fillHoles: !1 }, r);
                      for (var o = [], i = !0, a = 0; a < e.length; a += 2)
                        void 0 === t.getMultiValue(n[a / 2].value)
                          ? r.fillHoles || (i = !0)
                          : (r.increasingX &&
                              a >= 2 &&
                              e[a] <= e[a - 2] &&
                              (i = !0),
                            i &&
                              (o.push({ pathCoordinates: [], valueData: [] }),
                              (i = !1)),
                            o[o.length - 1].pathCoordinates.push(
                              e[a],
                              e[a + 1]
                            ),
                            o[o.length - 1].valueData.push(n[a / 2]));
                      return o;
                    });
                })(this, e),
                (function(e, t) {
                  'use strict';
                  (t.Interpolation = {}),
                    (t.Interpolation.none = function(e) {
                      return (
                        (e = t.extend({}, { fillHoles: !1 }, e)),
                        function(n, r) {
                          for (
                            var o = new t.Svg.Path(), i = !0, a = 0;
                            a < n.length;
                            a += 2
                          ) {
                            var s = n[a],
                              u = n[a + 1],
                              l = r[a / 2];
                            void 0 !== t.getMultiValue(l.value)
                              ? (i ? o.move(s, u, !1, l) : o.line(s, u, !1, l),
                                (i = !1))
                              : e.fillHoles || (i = !0);
                          }
                          return o;
                        }
                      );
                    }),
                    (t.Interpolation.simple = function(e) {
                      e = t.extend({}, { divisor: 2, fillHoles: !1 }, e);
                      var n = 1 / Math.max(1, e.divisor);
                      return function(r, o) {
                        for (
                          var i, a, s, u = new t.Svg.Path(), l = 0;
                          l < r.length;
                          l += 2
                        ) {
                          var c = r[l],
                            d = r[l + 1],
                            p = (c - i) * n,
                            h = o[l / 2];
                          void 0 !== h.value
                            ? (void 0 === s
                                ? u.move(c, d, !1, h)
                                : u.curve(i + p, a, c - p, d, c, d, !1, h),
                              (i = c),
                              (a = d),
                              (s = h))
                            : e.fillHoles || (i = c = s = void 0);
                        }
                        return u;
                      };
                    }),
                    (t.Interpolation.cardinal = function(e) {
                      e = t.extend({}, { tension: 1, fillHoles: !1 }, e);
                      var n = Math.min(1, Math.max(0, e.tension)),
                        r = 1 - n;
                      return function o(i, a) {
                        var s = t.splitIntoSegments(i, a, {
                          fillHoles: e.fillHoles
                        });
                        if (s.length) {
                          if (s.length > 1) {
                            var u = [];
                            return (
                              s.forEach(function(e) {
                                u.push(o(e.pathCoordinates, e.valueData));
                              }),
                              t.Svg.Path.join(u)
                            );
                          }
                          if (
                            ((a = s[0].valueData),
                            (i = s[0].pathCoordinates).length <= 4)
                          )
                            return t.Interpolation.none()(i, a);
                          for (
                            var l = new t.Svg.Path().move(i[0], i[1], !1, a[0]),
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
                                (n * (6 * p[1].x - p[0].x + p[2].x)) / 6 +
                                  r * p[2].x,
                                (n * (6 * p[1].y - p[0].y + p[2].y)) / 6 +
                                  r * p[2].y,
                                (n * (p[1].x + 6 * p[2].x - p[3].x)) / 6 +
                                  r * p[2].x,
                                (n * (p[1].y + 6 * p[2].y - p[3].y)) / 6 +
                                  r * p[2].y,
                                p[2].x,
                                p[2].y,
                                !1,
                                a[(c + 2) / 2]
                              );
                          }
                          return l;
                        }
                        return t.Interpolation.none()([]);
                      };
                    }),
                    (t.Interpolation.monotoneCubic = function(e) {
                      return (
                        (e = t.extend({}, { fillHoles: !1 }, e)),
                        function n(r, o) {
                          var i = t.splitIntoSegments(r, o, {
                            fillHoles: e.fillHoles,
                            increasingX: !0
                          });
                          if (i.length) {
                            if (i.length > 1) {
                              var a = [];
                              return (
                                i.forEach(function(e) {
                                  a.push(n(e.pathCoordinates, e.valueData));
                                }),
                                t.Svg.Path.join(a)
                              );
                            }
                            if (
                              ((o = i[0].valueData),
                              (r = i[0].pathCoordinates).length <= 4)
                            )
                              return t.Interpolation.none()(r, o);
                            var s,
                              u,
                              l = [],
                              c = [],
                              d = r.length / 2,
                              p = [],
                              h = [],
                              f = [],
                              y = [];
                            for (s = 0; s < d; s++)
                              (l[s] = r[2 * s]), (c[s] = r[2 * s + 1]);
                            for (s = 0; s < d - 1; s++)
                              (f[s] = c[s + 1] - c[s]),
                                (y[s] = l[s + 1] - l[s]),
                                (h[s] = f[s] / y[s]);
                            for (
                              p[0] = h[0], p[d - 1] = h[d - 2], s = 1;
                              s < d - 1;
                              s++
                            )
                              0 === h[s] ||
                              0 === h[s - 1] ||
                              h[s - 1] > 0 != h[s] > 0
                                ? (p[s] = 0)
                                : ((p[s] =
                                    (3 * (y[s - 1] + y[s])) /
                                    ((2 * y[s] + y[s - 1]) / h[s - 1] +
                                      (y[s] + 2 * y[s - 1]) / h[s])),
                                  isFinite(p[s]) || (p[s] = 0));
                            for (
                              u = new t.Svg.Path().move(l[0], c[0], !1, o[0]),
                                s = 0;
                              s < d - 1;
                              s++
                            )
                              u.curve(
                                l[s] + y[s] / 3,
                                c[s] + (p[s] * y[s]) / 3,
                                l[s + 1] - y[s] / 3,
                                c[s + 1] - (p[s + 1] * y[s]) / 3,
                                l[s + 1],
                                c[s + 1],
                                !1,
                                o[s + 1]
                              );
                            return u;
                          }
                          return t.Interpolation.none()([]);
                        }
                      );
                    }),
                    (t.Interpolation.step = function(e) {
                      return (
                        (e = t.extend({}, { postpone: !0, fillHoles: !1 }, e)),
                        function(n, r) {
                          for (
                            var o, i, a, s = new t.Svg.Path(), u = 0;
                            u < n.length;
                            u += 2
                          ) {
                            var l = n[u],
                              c = n[u + 1],
                              d = r[u / 2];
                            void 0 !== d.value
                              ? (void 0 === a
                                  ? s.move(l, c, !1, d)
                                  : (e.postpone
                                      ? s.line(l, i, !1, a)
                                      : s.line(o, c, !1, d),
                                    s.line(l, c, !1, d)),
                                (o = l),
                                (i = c),
                                (a = d))
                              : e.fillHoles || (o = i = a = void 0);
                          }
                          return s;
                        }
                      );
                    });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  t.EventEmitter = function() {
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
                })(0, e),
                (function(e, t) {
                  'use strict';
                  t.Class = {
                    extend: function(e, n) {
                      var r = n || this.prototype || t.Class,
                        o = Object.create(r);
                      t.Class.cloneDefinitions(o, e);
                      var i = function() {
                        var e,
                          n = o.constructor || function() {};
                        return (
                          (e = this === t ? Object.create(o) : this),
                          n.apply(e, Array.prototype.slice.call(arguments, 0)),
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
                })(0, e),
                (function(e, t) {
                  'use strict';
                  var n = e.window;
                  t.Base = t.Class.extend({
                    constructor: function(e, r, o, i, a) {
                      (this.container = t.querySelector(e)),
                        (this.data = r || {}),
                        (this.data.labels = this.data.labels || []),
                        (this.data.series = this.data.series || []),
                        (this.defaultOptions = o),
                        (this.options = i),
                        (this.responsiveOptions = a),
                        (this.eventEmitter = t.EventEmitter()),
                        (this.supportsForeignObject = t.Svg.isSupported(
                          'Extensibility'
                        )),
                        (this.supportsAnimations = t.Svg.isSupported(
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
                            n.addEventListener('resize', this.resizeListener),
                              (this.optionsProvider = t.optionsProvider(
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
                                    e instanceof Array
                                      ? e[0](this, e[1])
                                      : e(this);
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
                    update: function(e, n, r) {
                      return (
                        e &&
                          ((this.data = e || {}),
                          (this.data.labels = this.data.labels || []),
                          (this.data.series = this.data.series || []),
                          this.eventEmitter.emit('data', {
                            type: 'update',
                            data: this.data
                          })),
                        n &&
                          ((this.options = t.extend(
                            {},
                            r ? this.options : this.defaultOptions,
                            n
                          )),
                          this.initializeTimeoutId ||
                            (this.optionsProvider.removeMediaQueryListeners(),
                            (this.optionsProvider = t.optionsProvider(
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
                          ? n.clearTimeout(this.initializeTimeoutId)
                          : (n.removeEventListener(
                              'resize',
                              this.resizeListener
                            ),
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
                    version: t.version,
                    supportsForeignObject: !1
                  });
                })(this, e),
                (function(e, t) {
                  'use strict';
                  var n = e.document;
                  (t.Svg = t.Class.extend({
                    constructor: function(e, r, o, i, a) {
                      e instanceof Element
                        ? (this._node = e)
                        : ((this._node = n.createElementNS(
                            t.namespaces.svg,
                            e
                          )),
                          'svg' === e &&
                            this.attr({ 'xmlns:ct': t.namespaces.ct })),
                        r && this.attr(r),
                        o && this.addClass(o),
                        i &&
                          (a && i._node.firstChild
                            ? i._node.insertBefore(
                                this._node,
                                i._node.firstChild
                              )
                            : i._node.appendChild(this._node));
                    },
                    attr: function(e, n) {
                      return 'string' == typeof e
                        ? n
                          ? this._node.getAttributeNS(n, e)
                          : this._node.getAttribute(e)
                        : (Object.keys(e).forEach(
                            function(n) {
                              if (void 0 !== e[n])
                                if (-1 !== n.indexOf(':')) {
                                  var r = n.split(':');
                                  this._node.setAttributeNS(
                                    t.namespaces[r[0]],
                                    n,
                                    e[n]
                                  );
                                } else this._node.setAttribute(n, e[n]);
                            }.bind(this)
                          ),
                          this);
                    },
                    elem: function(e, n, r, o) {
                      return new t.Svg(e, n, r, this, o);
                    },
                    parent: function() {
                      return this._node.parentNode instanceof SVGElement
                        ? new t.Svg(this._node.parentNode)
                        : null;
                    },
                    root: function() {
                      for (var e = this._node; 'svg' !== e.nodeName; )
                        e = e.parentNode;
                      return new t.Svg(e);
                    },
                    querySelector: function(e) {
                      var n = this._node.querySelector(e);
                      return n ? new t.Svg(n) : null;
                    },
                    querySelectorAll: function(e) {
                      var n = this._node.querySelectorAll(e);
                      return n.length ? new t.Svg.List(n) : null;
                    },
                    getNode: function() {
                      return this._node;
                    },
                    foreignObject: function(e, r, o, i) {
                      if ('string' == typeof e) {
                        var a = n.createElement('div');
                        (a.innerHTML = e), (e = a.firstChild);
                      }
                      e.setAttribute('xmlns', t.namespaces.xmlns);
                      var s = this.elem('foreignObject', r, o, i);
                      return s._node.appendChild(e), s;
                    },
                    text: function(e) {
                      return this._node.appendChild(n.createTextNode(e)), this;
                    },
                    empty: function() {
                      for (; this._node.firstChild; )
                        this._node.removeChild(this._node.firstChild);
                      return this;
                    },
                    remove: function() {
                      return (
                        this._node.parentNode.removeChild(this._node),
                        this.parent()
                      );
                    },
                    replace: function(e) {
                      return (
                        this._node.parentNode.replaceChild(e._node, this._node),
                        e
                      );
                    },
                    append: function(e, t) {
                      return (
                        t && this._node.firstChild
                          ? this._node.insertBefore(
                              e._node,
                              this._node.firstChild
                            )
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
                    animate: function(e, n, r) {
                      return (
                        void 0 === n && (n = !0),
                        Object.keys(e).forEach(
                          function(o) {
                            function i(e, n) {
                              var i,
                                a,
                                s,
                                u = {};
                              e.easing &&
                                ((s =
                                  e.easing instanceof Array
                                    ? e.easing
                                    : t.Svg.Easing[e.easing]),
                                delete e.easing),
                                (e.begin = t.ensureUnit(e.begin, 'ms')),
                                (e.dur = t.ensureUnit(e.dur, 'ms')),
                                s &&
                                  ((e.calcMode = 'spline'),
                                  (e.keySplines = s.join(' ')),
                                  (e.keyTimes = '0;1')),
                                n &&
                                  ((e.fill = 'freeze'),
                                  (u[o] = e.from),
                                  this.attr(u),
                                  (a = t.quantity(e.begin || 0).value),
                                  (e.begin = 'indefinite')),
                                (i = this.elem(
                                  'animate',
                                  t.extend({ attributeName: o }, e)
                                )),
                                n &&
                                  setTimeout(
                                    function() {
                                      try {
                                        i._node.beginElement();
                                      } catch (t) {
                                        (u[o] = e.to), this.attr(u), i.remove();
                                      }
                                    }.bind(this),
                                    a
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
                                      n &&
                                        ((u[o] = e.to),
                                        this.attr(u),
                                        i.remove());
                                  }.bind(this)
                                );
                            }
                            e[o] instanceof Array
                              ? e[o].forEach(
                                  function(e) {
                                    i.bind(this)(e, !1);
                                  }.bind(this)
                                )
                              : i.bind(this)(e[o], n);
                          }.bind(this)
                        ),
                        this
                      );
                    }
                  })),
                    (t.Svg.isSupported = function(e) {
                      return n.implementation.hasFeature(
                        'http://www.w3.org/TR/SVG11/feature#' + e,
                        '1.1'
                      );
                    }),
                    (t.Svg.Easing = {
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
                    (t.Svg.List = t.Class.extend({
                      constructor: function(e) {
                        var n = this;
                        this.svgElements = [];
                        for (var r = 0; r < e.length; r++)
                          this.svgElements.push(new t.Svg(e[r]));
                        Object.keys(t.Svg.prototype)
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
                            n[e] = function() {
                              var r = Array.prototype.slice.call(arguments, 0);
                              return (
                                n.svgElements.forEach(function(n) {
                                  t.Svg.prototype[e].apply(n, r);
                                }),
                                n
                              );
                            };
                          });
                      }
                    }));
                })(this, e),
                (function(e, t) {
                  'use strict';
                  var n = {
                      m: ['x', 'y'],
                      l: ['x', 'y'],
                      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
                      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
                    },
                    r = { accuracy: 3 };
                  function o(e, n, r, o, i, a) {
                    var s = t.extend(
                      { command: i ? e.toLowerCase() : e.toUpperCase() },
                      n,
                      a ? { data: a } : {}
                    );
                    r.splice(o, 0, s);
                  }
                  function i(e, t) {
                    e.forEach(function(r, o) {
                      n[r.command.toLowerCase()].forEach(function(n, i) {
                        t(r, n, o, i, e);
                      });
                    });
                  }
                  (t.Svg.Path = t.Class.extend({
                    constructor: function(e, n) {
                      (this.pathElements = []),
                        (this.pos = 0),
                        (this.close = e),
                        (this.options = t.extend({}, r, n));
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
                        o(
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
                        o(
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
                    curve: function(e, t, n, r, i, a, s, u) {
                      return (
                        o(
                          'C',
                          { x1: +e, y1: +t, x2: +n, y2: +r, x: +i, y: +a },
                          this.pathElements,
                          this.pos++,
                          s,
                          u
                        ),
                        this
                      );
                    },
                    arc: function(e, t, n, r, i, a, s, u, l) {
                      return (
                        o(
                          'A',
                          {
                            rx: +e,
                            ry: +t,
                            xAr: +n,
                            lAf: +r,
                            sf: +i,
                            x: +a,
                            y: +s
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
                        i(this.pathElements, function(n, r) {
                          n[r] *= 'x' === r[0] ? e : t;
                        }),
                        this
                      );
                    },
                    translate: function(e, t) {
                      return (
                        i(this.pathElements, function(n, r) {
                          n[r] += 'x' === r[0] ? e : t;
                        }),
                        this
                      );
                    },
                    transform: function(e) {
                      return (
                        i(this.pathElements, function(t, n, r, o, i) {
                          var a = e(t, n, r, o, i);
                          (a || 0 === a) && (t[n] = a);
                        }),
                        this
                      );
                    },
                    parse: function(e) {
                      var r = e
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
                      'Z' === r[r.length - 1][0].toUpperCase() && r.pop();
                      var o = r.map(function(e) {
                          var r = e.shift(),
                            o = n[r.toLowerCase()];
                          return t.extend(
                            { command: r },
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
                          function(t, r) {
                            var o = n[r.command.toLowerCase()].map(
                              function(t) {
                                return this.options.accuracy
                                  ? Math.round(r[t] * e) / e
                                  : r[t];
                              }.bind(this)
                            );
                            return t + r.command + o.join(',');
                          }.bind(this),
                          ''
                        ) + (this.close ? 'Z' : '')
                      );
                    },
                    clone: function(e) {
                      var n = new t.Svg.Path(e || this.close);
                      return (
                        (n.pos = this.pos),
                        (n.pathElements = this.pathElements
                          .slice()
                          .map(function(e) {
                            return t.extend({}, e);
                          })),
                        (n.options = t.extend({}, this.options)),
                        n
                      );
                    },
                    splitByCommand: function(e) {
                      var n = [new t.Svg.Path()];
                      return (
                        this.pathElements.forEach(function(r) {
                          r.command === e.toUpperCase() &&
                            0 !== n[n.length - 1].pathElements.length &&
                            n.push(new t.Svg.Path()),
                            n[n.length - 1].pathElements.push(r);
                        }),
                        n
                      );
                    }
                  })),
                    (t.Svg.Path.elementDescriptions = n),
                    (t.Svg.Path.join = function(e, n, r) {
                      for (
                        var o = new t.Svg.Path(n, r), i = 0;
                        i < e.length;
                        i++
                      )
                        for (
                          var a = e[i], s = 0;
                          s < a.pathElements.length;
                          s++
                        )
                          o.pathElements.push(a.pathElements[s]);
                      return o;
                    });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  var n = {
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
                  (t.Axis = t.Class.extend({
                    constructor: function(e, t, r, o) {
                      (this.units = e),
                        (this.counterUnits = e === n.x ? n.y : n.x),
                        (this.chartRect = t),
                        (this.axisLength = t[e.rectEnd] - t[e.rectStart]),
                        (this.gridOffset = t[e.rectOffset]),
                        (this.ticks = r),
                        (this.options = o);
                    },
                    createGridAndLabels: function(e, n, r, o, i) {
                      var a = o['axis' + this.units.pos.toUpperCase()],
                        s = this.ticks.map(this.projectValue.bind(this)),
                        u = this.ticks.map(a.labelInterpolationFnc);
                      s.forEach(
                        function(l, c) {
                          var d,
                            p = { x: 0, y: 0 };
                          (d = s[c + 1]
                            ? s[c + 1] - l
                            : Math.max(this.axisLength - l, 30)),
                            (t.isFalseyButZero(u[c]) && '' !== u[c]) ||
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
                              a.showGrid &&
                                t.createGrid(
                                  l,
                                  c,
                                  this,
                                  this.gridOffset,
                                  this.chartRect[this.counterUnits.len](),
                                  e,
                                  [
                                    o.classNames.grid,
                                    o.classNames[this.units.dir]
                                  ],
                                  i
                                ),
                              a.showLabel &&
                                t.createLabel(
                                  l,
                                  d,
                                  c,
                                  u,
                                  this,
                                  a.offset,
                                  p,
                                  n,
                                  [
                                    o.classNames.label,
                                    o.classNames[this.units.dir],
                                    'start' === a.position
                                      ? o.classNames[a.position]
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
                    (t.Axis.units = n);
                })(0, e),
                (function(e, t) {
                  'use strict';
                  t.AutoScaleAxis = t.Axis.extend({
                    constructor: function(e, n, r, o) {
                      var i = o.highLow || t.getHighLow(n, o, e.pos);
                      (this.bounds = t.getBounds(
                        r[e.rectEnd] - r[e.rectStart],
                        i,
                        o.scaleMinSpace || 20,
                        o.onlyInteger
                      )),
                        (this.range = {
                          min: this.bounds.min,
                          max: this.bounds.max
                        }),
                        t.AutoScaleAxis.super.constructor.call(
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
                          (+t.getMultiValue(e, this.units.pos) -
                            this.bounds.min)) /
                        this.bounds.range
                      );
                    }
                  });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  t.FixedScaleAxis = t.Axis.extend({
                    constructor: function(e, n, r, o) {
                      var i = o.highLow || t.getHighLow(n, o, e.pos);
                      (this.divisor = o.divisor || 1),
                        (this.ticks =
                          o.ticks ||
                          t.times(this.divisor).map(
                            function(e, t) {
                              return (
                                i.low + ((i.high - i.low) / this.divisor) * t
                              );
                            }.bind(this)
                          )),
                        this.ticks.sort(function(e, t) {
                          return e - t;
                        }),
                        (this.range = { min: i.low, max: i.high }),
                        t.FixedScaleAxis.super.constructor.call(
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
                          (+t.getMultiValue(e, this.units.pos) -
                            this.range.min)) /
                        (this.range.max - this.range.min)
                      );
                    }
                  });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  t.StepAxis = t.Axis.extend({
                    constructor: function(e, n, r, o) {
                      t.StepAxis.super.constructor.call(this, e, r, o.ticks, o);
                      var i = Math.max(1, o.ticks.length - (o.stretch ? 1 : 0));
                      this.stepLength = this.axisLength / i;
                    },
                    projectValue: function(e, t) {
                      return this.stepLength * t;
                    }
                  });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  var n = {
                    axisX: {
                      offset: 30,
                      position: 'end',
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: t.noop,
                      type: void 0
                    },
                    axisY: {
                      offset: 40,
                      position: 'start',
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: t.noop,
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
                  t.Line = t.Base.extend({
                    constructor: function(e, r, o, i) {
                      t.Line.super.constructor.call(
                        this,
                        e,
                        r,
                        n,
                        t.extend({}, n, o),
                        i
                      );
                    },
                    createChart: function(e) {
                      var r = t.normalizeData(this.data, e.reverseData, !0);
                      this.svg = t.createSvg(
                        this.container,
                        e.width,
                        e.height,
                        e.classNames.chart
                      );
                      var o,
                        i,
                        a = this.svg.elem('g').addClass(e.classNames.gridGroup),
                        s = this.svg.elem('g'),
                        u = this.svg
                          .elem('g')
                          .addClass(e.classNames.labelGroup),
                        l = t.createChartRect(this.svg, e, n.padding);
                      (o =
                        void 0 === e.axisX.type
                          ? new t.StepAxis(
                              t.Axis.units.x,
                              r.normalized.series,
                              l,
                              t.extend({}, e.axisX, {
                                ticks: r.normalized.labels,
                                stretch: e.fullWidth
                              })
                            )
                          : e.axisX.type.call(
                              t,
                              t.Axis.units.x,
                              r.normalized.series,
                              l,
                              e.axisX
                            )),
                        (i =
                          void 0 === e.axisY.type
                            ? new t.AutoScaleAxis(
                                t.Axis.units.y,
                                r.normalized.series,
                                l,
                                t.extend({}, e.axisY, {
                                  high: t.isNumeric(e.high)
                                    ? e.high
                                    : e.axisY.high,
                                  low: t.isNumeric(e.low) ? e.low : e.axisY.low
                                })
                              )
                            : e.axisY.type.call(
                                t,
                                t.Axis.units.y,
                                r.normalized.series,
                                l,
                                e.axisY
                              )),
                        o.createGridAndLabels(
                          a,
                          u,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        i.createGridAndLabels(
                          a,
                          u,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        e.showGridBackground &&
                          t.createGridBackground(
                            a,
                            l,
                            e.classNames.gridBackground,
                            this.eventEmitter
                          ),
                        r.raw.series.forEach(
                          function(n, a) {
                            var u = s.elem('g');
                            u.attr({
                              'ct:series-name': n.name,
                              'ct:meta': t.serialize(n.meta)
                            }),
                              u.addClass(
                                [
                                  e.classNames.series,
                                  n.className ||
                                    e.classNames.series +
                                      '-' +
                                      t.alphaNumerate(a)
                                ].join(' ')
                              );
                            var c = [],
                              d = [];
                            r.normalized.series[a].forEach(
                              function(e, s) {
                                var u = {
                                  x:
                                    l.x1 +
                                    o.projectValue(
                                      e,
                                      s,
                                      r.normalized.series[a]
                                    ),
                                  y:
                                    l.y1 -
                                    i.projectValue(e, s, r.normalized.series[a])
                                };
                                c.push(u.x, u.y),
                                  d.push({
                                    value: e,
                                    valueIndex: s,
                                    meta: t.getMetaData(n, s)
                                  });
                              }.bind(this)
                            );
                            var p = {
                                lineSmooth: t.getSeriesOption(
                                  n,
                                  e,
                                  'lineSmooth'
                                ),
                                showPoint: t.getSeriesOption(n, e, 'showPoint'),
                                showLine: t.getSeriesOption(n, e, 'showLine'),
                                showArea: t.getSeriesOption(n, e, 'showArea'),
                                areaBase: t.getSeriesOption(n, e, 'areaBase')
                              },
                              h = ('function' == typeof p.lineSmooth
                                ? p.lineSmooth
                                : p.lineSmooth
                                ? t.Interpolation.monotoneCubic()
                                : t.Interpolation.none())(c, d);
                            if (
                              (p.showPoint &&
                                h.pathElements.forEach(
                                  function(r) {
                                    var s = u
                                      .elem(
                                        'line',
                                        {
                                          x1: r.x,
                                          y1: r.y,
                                          x2: r.x + 0.01,
                                          y2: r.y
                                        },
                                        e.classNames.point
                                      )
                                      .attr({
                                        'ct:value': [
                                          r.data.value.x,
                                          r.data.value.y
                                        ]
                                          .filter(t.isNumeric)
                                          .join(','),
                                        'ct:meta': t.serialize(r.data.meta)
                                      });
                                    this.eventEmitter.emit('draw', {
                                      type: 'point',
                                      value: r.data.value,
                                      index: r.data.valueIndex,
                                      meta: r.data.meta,
                                      series: n,
                                      seriesIndex: a,
                                      axisX: o,
                                      axisY: i,
                                      group: u,
                                      element: s,
                                      x: r.x,
                                      y: r.y
                                    });
                                  }.bind(this)
                                ),
                              p.showLine)
                            ) {
                              var f = u.elem(
                                'path',
                                { d: h.stringify() },
                                e.classNames.line,
                                !0
                              );
                              this.eventEmitter.emit('draw', {
                                type: 'line',
                                values: r.normalized.series[a],
                                path: h.clone(),
                                chartRect: l,
                                index: a,
                                series: n,
                                seriesIndex: a,
                                seriesMeta: n.meta,
                                axisX: o,
                                axisY: i,
                                group: u,
                                element: f
                              });
                            }
                            if (p.showArea && i.range) {
                              var y = Math.max(
                                  Math.min(p.areaBase, i.range.max),
                                  i.range.min
                                ),
                                v = l.y1 - i.projectValue(y);
                              h.splitByCommand('M')
                                .filter(function(e) {
                                  return e.pathElements.length > 1;
                                })
                                .map(function(e) {
                                  var t = e.pathElements[0],
                                    n =
                                      e.pathElements[e.pathElements.length - 1];
                                  return e
                                    .clone(!0)
                                    .position(0)
                                    .remove(1)
                                    .move(t.x, v)
                                    .line(t.x, t.y)
                                    .position(e.pathElements.length + 1)
                                    .line(n.x, v);
                                })
                                .forEach(
                                  function(t) {
                                    var s = u.elem(
                                      'path',
                                      { d: t.stringify() },
                                      e.classNames.area,
                                      !0
                                    );
                                    this.eventEmitter.emit('draw', {
                                      type: 'area',
                                      values: r.normalized.series[a],
                                      path: t.clone(),
                                      series: n,
                                      seriesIndex: a,
                                      axisX: o,
                                      axisY: i,
                                      chartRect: l,
                                      index: a,
                                      group: u,
                                      element: s
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
                })(0, e),
                (function(e, t) {
                  'use strict';
                  var n = {
                    axisX: {
                      offset: 30,
                      position: 'end',
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: t.noop,
                      scaleMinSpace: 30,
                      onlyInteger: !1
                    },
                    axisY: {
                      offset: 40,
                      position: 'start',
                      labelOffset: { x: 0, y: 0 },
                      showLabel: !0,
                      showGrid: !0,
                      labelInterpolationFnc: t.noop,
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
                  t.Bar = t.Base.extend({
                    constructor: function(e, r, o, i) {
                      t.Bar.super.constructor.call(
                        this,
                        e,
                        r,
                        n,
                        t.extend({}, n, o),
                        i
                      );
                    },
                    createChart: function(e) {
                      var r, o;
                      e.distributeSeries
                        ? ((r = t.normalizeData(
                            this.data,
                            e.reverseData,
                            e.horizontalBars ? 'x' : 'y'
                          )).normalized.series = r.normalized.series.map(
                            function(e) {
                              return [e];
                            }
                          ))
                        : (r = t.normalizeData(
                            this.data,
                            e.reverseData,
                            e.horizontalBars ? 'x' : 'y'
                          )),
                        (this.svg = t.createSvg(
                          this.container,
                          e.width,
                          e.height,
                          e.classNames.chart +
                            (e.horizontalBars
                              ? ' ' + e.classNames.horizontalBars
                              : '')
                        ));
                      var i = this.svg
                          .elem('g')
                          .addClass(e.classNames.gridGroup),
                        a = this.svg.elem('g'),
                        s = this.svg
                          .elem('g')
                          .addClass(e.classNames.labelGroup);
                      if (e.stackBars && 0 !== r.normalized.series.length) {
                        var u = t.serialMap(r.normalized.series, function() {
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
                        o = t.getHighLow([u], e, e.horizontalBars ? 'x' : 'y');
                      } else
                        o = t.getHighLow(
                          r.normalized.series,
                          e,
                          e.horizontalBars ? 'x' : 'y'
                        );
                      (o.high = +e.high || (0 === e.high ? 0 : o.high)),
                        (o.low = +e.low || (0 === e.low ? 0 : o.low));
                      var l,
                        c,
                        d,
                        p,
                        h,
                        f = t.createChartRect(this.svg, e, n.padding);
                      (c =
                        e.distributeSeries && e.stackBars
                          ? r.normalized.labels.slice(0, 1)
                          : r.normalized.labels),
                        e.horizontalBars
                          ? ((l = p =
                              void 0 === e.axisX.type
                                ? new t.AutoScaleAxis(
                                    t.Axis.units.x,
                                    r.normalized.series,
                                    f,
                                    t.extend({}, e.axisX, {
                                      highLow: o,
                                      referenceValue: 0
                                    })
                                  )
                                : e.axisX.type.call(
                                    t,
                                    t.Axis.units.x,
                                    r.normalized.series,
                                    f,
                                    t.extend({}, e.axisX, {
                                      highLow: o,
                                      referenceValue: 0
                                    })
                                  )),
                            (d = h =
                              void 0 === e.axisY.type
                                ? new t.StepAxis(
                                    t.Axis.units.y,
                                    r.normalized.series,
                                    f,
                                    { ticks: c }
                                  )
                                : e.axisY.type.call(
                                    t,
                                    t.Axis.units.y,
                                    r.normalized.series,
                                    f,
                                    e.axisY
                                  )))
                          : ((d = p =
                              void 0 === e.axisX.type
                                ? new t.StepAxis(
                                    t.Axis.units.x,
                                    r.normalized.series,
                                    f,
                                    { ticks: c }
                                  )
                                : e.axisX.type.call(
                                    t,
                                    t.Axis.units.x,
                                    r.normalized.series,
                                    f,
                                    e.axisX
                                  )),
                            (l = h =
                              void 0 === e.axisY.type
                                ? new t.AutoScaleAxis(
                                    t.Axis.units.y,
                                    r.normalized.series,
                                    f,
                                    t.extend({}, e.axisY, {
                                      highLow: o,
                                      referenceValue: 0
                                    })
                                  )
                                : e.axisY.type.call(
                                    t,
                                    t.Axis.units.y,
                                    r.normalized.series,
                                    f,
                                    t.extend({}, e.axisY, {
                                      highLow: o,
                                      referenceValue: 0
                                    })
                                  )));
                      var y = e.horizontalBars
                          ? f.x1 + l.projectValue(0)
                          : f.y1 - l.projectValue(0),
                        v = [];
                      d.createGridAndLabels(
                        i,
                        s,
                        this.supportsForeignObject,
                        e,
                        this.eventEmitter
                      ),
                        l.createGridAndLabels(
                          i,
                          s,
                          this.supportsForeignObject,
                          e,
                          this.eventEmitter
                        ),
                        e.showGridBackground &&
                          t.createGridBackground(
                            i,
                            f,
                            e.classNames.gridBackground,
                            this.eventEmitter
                          ),
                        r.raw.series.forEach(
                          function(n, o) {
                            var i,
                              s,
                              u = o - (r.raw.series.length - 1) / 2;
                            (i =
                              e.distributeSeries && !e.stackBars
                                ? d.axisLength / r.normalized.series.length / 2
                                : e.distributeSeries && e.stackBars
                                ? d.axisLength / 2
                                : d.axisLength /
                                  r.normalized.series[o].length /
                                  2),
                              (s = a.elem('g')).attr({
                                'ct:series-name': n.name,
                                'ct:meta': t.serialize(n.meta)
                              }),
                              s.addClass(
                                [
                                  e.classNames.series,
                                  n.className ||
                                    e.classNames.series +
                                      '-' +
                                      t.alphaNumerate(o)
                                ].join(' ')
                              ),
                              r.normalized.series[o].forEach(
                                function(a, c) {
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
                                            f.x1 +
                                            l.projectValue(
                                              a && a.x ? a.x : 0,
                                              c,
                                              r.normalized.series[o]
                                            ),
                                          y:
                                            f.y1 -
                                            d.projectValue(
                                              a && a.y ? a.y : 0,
                                              _,
                                              r.normalized.series[o]
                                            )
                                        }
                                      : {
                                          x:
                                            f.x1 +
                                            d.projectValue(
                                              a && a.x ? a.x : 0,
                                              _,
                                              r.normalized.series[o]
                                            ),
                                          y:
                                            f.y1 -
                                            l.projectValue(
                                              a && a.y ? a.y : 0,
                                              c,
                                              r.normalized.series[o]
                                            )
                                        }),
                                    d instanceof t.StepAxis &&
                                      (d.options.stretch ||
                                        (g[d.units.pos] +=
                                          i * (e.horizontalBars ? -1 : 1)),
                                      (g[d.units.pos] +=
                                        e.stackBars || e.distributeSeries
                                          ? 0
                                          : u *
                                            e.seriesBarDistance *
                                            (e.horizontalBars ? -1 : 1))),
                                    (v[c] =
                                      (b = v[c] || y) -
                                      (y - g[d.counterUnits.pos])),
                                    void 0 !== a)
                                  ) {
                                    var w = {};
                                    (w[d.units.pos + '1'] = g[d.units.pos]),
                                      (w[d.units.pos + '2'] = g[d.units.pos]),
                                      !e.stackBars ||
                                      ('accumulate' !== e.stackMode &&
                                        e.stackMode)
                                        ? ((w[d.counterUnits.pos + '1'] = y),
                                          (w[d.counterUnits.pos + '2'] =
                                            g[d.counterUnits.pos]))
                                        : ((w[d.counterUnits.pos + '1'] = b),
                                          (w[d.counterUnits.pos + '2'] = v[c])),
                                      (w.x1 = Math.min(
                                        Math.max(w.x1, f.x1),
                                        f.x2
                                      )),
                                      (w.x2 = Math.min(
                                        Math.max(w.x2, f.x1),
                                        f.x2
                                      )),
                                      (w.y1 = Math.min(
                                        Math.max(w.y1, f.y2),
                                        f.y1
                                      )),
                                      (w.y2 = Math.min(
                                        Math.max(w.y2, f.y2),
                                        f.y1
                                      ));
                                    var x = t.getMetaData(n, c);
                                    (m = s
                                      .elem('line', w, e.classNames.bar)
                                      .attr({
                                        'ct:value': [a.x, a.y]
                                          .filter(t.isNumeric)
                                          .join(','),
                                        'ct:meta': t.serialize(x)
                                      })),
                                      this.eventEmitter.emit(
                                        'draw',
                                        t.extend(
                                          {
                                            type: 'bar',
                                            value: a,
                                            index: c,
                                            meta: x,
                                            series: n,
                                            seriesIndex: o,
                                            axisX: p,
                                            axisY: h,
                                            chartRect: f,
                                            group: s,
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
                          chartRect: f,
                          axisX: p,
                          axisY: h,
                          svg: this.svg,
                          options: e
                        });
                    }
                  });
                })(0, e),
                (function(e, t) {
                  'use strict';
                  var n = {
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
                    labelInterpolationFnc: t.noop,
                    labelDirection: 'neutral',
                    reverseData: !1,
                    ignoreEmptyValues: !1
                  };
                  function r(e, t, n) {
                    var r = t.x > e.x;
                    return (r && 'explode' === n) || (!r && 'implode' === n)
                      ? 'start'
                      : (r && 'implode' === n) || (!r && 'explode' === n)
                      ? 'end'
                      : 'middle';
                  }
                  t.Pie = t.Base.extend({
                    constructor: function(e, r, o, i) {
                      t.Pie.super.constructor.call(
                        this,
                        e,
                        r,
                        n,
                        t.extend({}, n, o),
                        i
                      );
                    },
                    createChart: function(e) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = t.normalizeData(this.data),
                        c = [],
                        d = e.startAngle;
                      (this.svg = t.createSvg(
                        this.container,
                        e.width,
                        e.height,
                        e.donut
                          ? e.classNames.chartDonut
                          : e.classNames.chartPie
                      )),
                        (i = t.createChartRect(this.svg, e, n.padding)),
                        (a = Math.min(i.width() / 2, i.height() / 2)),
                        (u =
                          e.total ||
                          l.normalized.series.reduce(function(e, t) {
                            return e + t;
                          }, 0));
                      var p = t.quantity(e.donutWidth);
                      '%' === p.unit && (p.value *= a / 100),
                        (a -= e.donut && !e.donutSolid ? p.value / 2 : 0),
                        (s =
                          'outside' === e.labelPosition ||
                          (e.donut && !e.donutSolid)
                            ? a
                            : 'center' === e.labelPosition
                            ? 0
                            : e.donutSolid
                            ? a - p.value / 2
                            : a / 2),
                        (s += e.labelOffset);
                      var h = {
                          x: i.x1 + i.width() / 2,
                          y: i.y2 + i.height() / 2
                        },
                        f =
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
                        e.showLabel && (o = this.svg.elem('g', null, null)),
                        l.raw.series.forEach(
                          function(n, i) {
                            if (
                              0 !== l.normalized.series[i] ||
                              !e.ignoreEmptyValues
                            ) {
                              c[i].attr({ 'ct:series-name': n.name }),
                                c[i].addClass(
                                  [
                                    e.classNames.series,
                                    n.className ||
                                      e.classNames.series +
                                        '-' +
                                        t.alphaNumerate(i)
                                  ].join(' ')
                                );
                              var y =
                                  u > 0
                                    ? d + (l.normalized.series[i] / u) * 360
                                    : 0,
                                v = Math.max(0, d - (0 === i || f ? 0 : 0.2));
                              y - v >= 359.99 && (y = v + 359.99);
                              var g,
                                m,
                                b,
                                _ = t.polarToCartesian(h.x, h.y, a, v),
                                w = t.polarToCartesian(h.x, h.y, a, y),
                                x = new t.Svg.Path(!e.donut || e.donutSolid)
                                  .move(w.x, w.y)
                                  .arc(a, a, 0, y - d > 180, 0, _.x, _.y);
                              e.donut
                                ? e.donutSolid &&
                                  ((g = t.polarToCartesian(
                                    h.x,
                                    h.y,
                                    (b = a - p.value),
                                    d - (0 === i || f ? 0 : 0.2)
                                  )),
                                  (m = t.polarToCartesian(h.x, h.y, b, y)),
                                  x.line(g.x, g.y),
                                  x.arc(b, b, 0, y - d > 180, 1, m.x, m.y))
                                : x.line(h.x, h.y);
                              var C = e.classNames.slicePie;
                              e.donut &&
                                ((C = e.classNames.sliceDonut),
                                e.donutSolid &&
                                  (C = e.classNames.sliceDonutSolid));
                              var E = c[i].elem(
                                'path',
                                { d: x.stringify() },
                                C
                              );
                              if (
                                (E.attr({
                                  'ct:value': l.normalized.series[i],
                                  'ct:meta': t.serialize(n.meta)
                                }),
                                e.donut &&
                                  !e.donutSolid &&
                                  (E._node.style.strokeWidth = p.value + 'px'),
                                this.eventEmitter.emit('draw', {
                                  type: 'slice',
                                  value: l.normalized.series[i],
                                  totalDataSum: u,
                                  index: i,
                                  meta: n.meta,
                                  series: n,
                                  group: c[i],
                                  element: E,
                                  path: x.clone(),
                                  center: h,
                                  radius: a,
                                  startAngle: d,
                                  endAngle: y
                                }),
                                e.showLabel)
                              ) {
                                var S, O;
                                (S =
                                  1 === l.raw.series.length
                                    ? { x: h.x, y: h.y }
                                    : t.polarToCartesian(
                                        h.x,
                                        h.y,
                                        s,
                                        d + (y - d) / 2
                                      )),
                                  (O =
                                    l.normalized.labels &&
                                    !t.isFalseyButZero(l.normalized.labels[i])
                                      ? l.normalized.labels[i]
                                      : l.normalized.series[i]);
                                var k = e.labelInterpolationFnc(O, i);
                                if (k || 0 === k) {
                                  var A = o
                                    .elem(
                                      'text',
                                      {
                                        dx: S.x,
                                        dy: S.y,
                                        'text-anchor': r(h, S, e.labelDirection)
                                      },
                                      e.classNames.label
                                    )
                                    .text('' + k);
                                  this.eventEmitter.emit('draw', {
                                    type: 'label',
                                    index: i,
                                    group: o,
                                    element: A,
                                    text: '' + k,
                                    x: S.x,
                                    y: S.y
                                  });
                                }
                              }
                              d = y;
                            }
                          }.bind(this)
                        ),
                        this.eventEmitter.emit('created', {
                          chartRect: i,
                          svg: this.svg,
                          options: e
                        });
                    },
                    determineAnchorPosition: r
                  });
                })(0, e),
                e
              );
            })());
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
      function a(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function s(e, t) {
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
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (s) {
          o = { error: s };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
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
        return null !== e && 'object' == typeof e;
      }
      function h(e) {
        return 'function' == typeof e;
      }
      function f(e) {
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
      f.prototype = Object.create(Error.prototype);
      var y = f,
        v = (function() {
          function e(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          return (
            (e.prototype.unsubscribe = function() {
              var t;
              if (!this.closed) {
                var n = this._parentOrParents,
                  r = this._unsubscribe,
                  o = this._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n instanceof e)
                )
                  n.remove(this);
                else if (null !== n)
                  for (var i = 0; i < n.length; ++i) n[i].remove(this);
                if (h(r))
                  try {
                    r.call(this);
                  } catch (u) {
                    t = u instanceof y ? g(u.errors) : [u];
                  }
                if (d(o)) {
                  i = -1;
                  for (var a = o.length; ++i < a; ) {
                    var s = o[i];
                    if (p(s))
                      try {
                        s.unsubscribe();
                      } catch (u) {
                        (t = t || []),
                          u instanceof y
                            ? (t = t.concat(g(u.errors)))
                            : t.push(u);
                      }
                  }
                }
                if (t) throw new y(t);
              }
            }),
            (e.prototype.add = function(t) {
              var n = t;
              if (!t) return e.EMPTY;
              switch (typeof t) {
                case 'function':
                  n = new e(t);
                case 'object':
                  if (
                    n === this ||
                    n.closed ||
                    'function' != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof e)) {
                    var r = n;
                    (n = new e())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    'unrecognized teardown ' + t + ' added to Subscription.'
                  );
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof e) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (e.prototype.remove = function(e) {
              var t = this._subscriptions;
              if (t) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }
            }),
            (e.EMPTY = (function(e) {
              return (e.closed = !0), e;
            })(new e())),
            e
          );
        })();
      function g(e) {
        return e.reduce(function(e, t) {
          return e.concat(t instanceof y ? t.errors : t);
        }, []);
      }
      var m = !1,
        b = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(e) {
            m = e;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return m;
          }
        };
      function _(e) {
        setTimeout(function() {
          throw e;
        }, 0);
      }
      var w = {
          closed: !0,
          next: function(e) {},
          error: function(e) {
            if (b.useDeprecatedSynchronousErrorHandling) throw e;
            _(e);
          },
          complete: function() {}
        },
        x =
          'function' == typeof Symbol
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random(),
        C = (function(e) {
          function t(n, r, o) {
            var i = e.call(this) || this;
            switch (
              ((i.syncErrorValue = null),
              (i.syncErrorThrown = !1),
              (i.syncErrorThrowable = !1),
              (i.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                i.destination = w;
                break;
              case 1:
                if (!n) {
                  i.destination = w;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof t
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable),
                      (i.destination = n),
                      n.add(i))
                    : ((i.syncErrorThrowable = !0),
                      (i.destination = new E(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0),
                  (i.destination = new E(i, n, r, o));
            }
            return i;
          }
          return (
            o(t, e),
            (t.prototype[x] = function() {
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
              var e = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = e),
                this
              );
            }),
            t
          );
        })(v),
        E = (function(e) {
          function t(t, n, r, o) {
            var i,
              a = e.call(this) || this;
            a._parentSubscriber = t;
            var s = a;
            return (
              h(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (r = n.error),
                  (o = n.complete),
                  n !== w &&
                    (h((s = Object.create(n)).unsubscribe) &&
                      a.add(s.unsubscribe.bind(s)),
                    (s.unsubscribe = a.unsubscribe.bind(a)))),
              (a._context = s),
              (a._next = i),
              (a._error = r),
              (a._complete = o),
              a
            );
          }
          return (
            o(t, e),
            (t.prototype.next = function(e) {
              if (!this.isStopped && this._next) {
                var t = this._parentSubscriber;
                b.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, e);
              }
            }),
            (t.prototype.error = function(e) {
              if (!this.isStopped) {
                var t = this._parentSubscriber,
                  n = b.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && t.syncErrorThrowable
                    ? (this.__tryOrSetError(t, this._error, e),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
                else if (t.syncErrorThrowable)
                  n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : _(e),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw e;
                  _(e);
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
                  b.useDeprecatedSynchronousErrorHandling &&
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
                  (this.unsubscribe(), b.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                _(n);
              }
            }),
            (t.prototype.__tryOrSetError = function(e, t, n) {
              if (!b.useDeprecatedSynchronousErrorHandling)
                throw new Error('bad call');
              try {
                t.call(this._context, n);
              } catch (r) {
                return b.useDeprecatedSynchronousErrorHandling
                  ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                  : (_(r), !0);
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
        })(C),
        S =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function O() {}
      function k(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function(t) {
                return e.reduce(function(e, t) {
                  return t(e);
                }, t);
              }
          : O;
      }
      var A = (function() {
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
                  if (e instanceof C) return e;
                  if (e[x]) return e[x]();
                }
                return e || t || n ? new C(e, t, n) : new C(w);
              })(e, t, n);
            if (
              (o.add(
                r
                  ? r.call(o, this.source)
                  : this.source ||
                    (b.useDeprecatedSynchronousErrorHandling &&
                      !o.syncErrorThrowable)
                  ? this._subscribe(o)
                  : this._trySubscribe(o)
              ),
              b.useDeprecatedSynchronousErrorHandling &&
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
              b.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function(e) {
                  for (; e; ) {
                    var t = e.destination;
                    if (e.closed || e.isStopped) return !1;
                    e = t && t instanceof C ? t : null;
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
          (e.prototype[S] = function() {
            return this;
          }),
          (e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return 0 === e.length ? this : k(e)(this);
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
        if ((e || (e = b.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      function T() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      T.prototype = Object.create(Error.prototype);
      var P = T,
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
        })(v),
        I = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.destination = t), n;
          }
          return o(t, e), t;
        })(C),
        M = (function(e) {
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
            (t.prototype[x] = function() {
              return new I(this);
            }),
            (t.prototype.lift = function(e) {
              var t = new V(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype.next = function(e) {
              if (this.closed) throw new P();
              if (!this.isStopped)
                for (
                  var t = this.observers, n = t.length, r = t.slice(), o = 0;
                  o < n;
                  o++
                )
                  r[o].next(e);
            }),
            (t.prototype.error = function(e) {
              if (this.closed) throw new P();
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
              if (this.closed) throw new P();
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
              if (this.closed) throw new P();
              return e.prototype._trySubscribe.call(this, t);
            }),
            (t.prototype._subscribe = function(e) {
              if (this.closed) throw new P();
              return this.hasError
                ? (e.error(this.thrownError), v.EMPTY)
                : this.isStopped
                ? (e.complete(), v.EMPTY)
                : (this.observers.push(e), new D(this, e));
            }),
            (t.prototype.asObservable = function() {
              var e = new A();
              return (e.source = this), e;
            }),
            (t.create = function(e, t) {
              return new V(e, t);
            }),
            t
          );
        })(A),
        V = (function(e) {
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
              return this.source ? this.source.subscribe(e) : v.EMPTY;
            }),
            t
          );
        })(M);
      function j(e) {
        return e && 'function' == typeof e.schedule;
      }
      var R = (function(e) {
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
        })(C),
        L = function(e) {
          return function(t) {
            for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
            t.complete();
          };
        };
      function F() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      var B = F(),
        H = function(e) {
          return e && 'number' == typeof e.length && 'function' != typeof e;
        };
      function z(e) {
        return (
          !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      var U = function(e) {
          if (e && 'function' == typeof e[S])
            return (
              (r = e),
              function(e) {
                var t = r[S]();
                if ('function' != typeof t.subscribe)
                  throw new TypeError(
                    'Provided object does not correctly implement Symbol.observable'
                  );
                return t.subscribe(e);
              }
            );
          if (H(e)) return L(e);
          if (z(e))
            return (
              (n = e),
              function(e) {
                return (
                  n
                    .then(
                      function(t) {
                        e.closed || (e.next(t), e.complete());
                      },
                      function(t) {
                        return e.error(t);
                      }
                    )
                    .then(null, _),
                  e
                );
              }
            );
          if (e && 'function' == typeof e[B])
            return (
              (t = e),
              function(e) {
                for (var n = t[B](); ; ) {
                  var r = n.next();
                  if (r.done) {
                    e.complete();
                    break;
                  }
                  if ((e.next(r.value), e.closed)) break;
                }
                return (
                  'function' == typeof n.return &&
                    e.add(function() {
                      n.return && n.return();
                    }),
                  e
                );
              }
            );
          var t,
            n,
            r,
            o = p(e) ? 'an invalid object' : "'" + e + "'";
          throw new TypeError(
            'You provided ' +
              o +
              ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
          );
        },
        G = (function(e) {
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
        })(C);
      function Z(e, t) {
        return function(n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new W(e, t));
        };
      }
      var W = (function() {
          function e(e, t) {
            (this.project = e), (this.thisArg = t);
          }
          return (
            (e.prototype.call = function(e, t) {
              return t.subscribe(new q(e, this.project, this.thisArg));
            }),
            e
          );
        })(),
        q = (function(e) {
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
        })(C);
      function Y(e, t) {
        return new A(function(n) {
          var r = new v(),
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
        });
      }
      function Q(e, t) {
        return t
          ? (function(e, t) {
              if (null != e) {
                if (
                  (function(e) {
                    return e && 'function' == typeof e[S];
                  })(e)
                )
                  return (function(e, t) {
                    return new A(function(n) {
                      var r = new v();
                      return (
                        r.add(
                          t.schedule(function() {
                            var o = e[S]();
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
                    });
                  })(e, t);
                if (z(e))
                  return (function(e, t) {
                    return new A(function(n) {
                      var r = new v();
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
                    });
                  })(e, t);
                if (H(e)) return Y(e, t);
                if (
                  (function(e) {
                    return e && 'function' == typeof e[B];
                  })(e) ||
                  'string' == typeof e
                )
                  return (function(e, t) {
                    if (!e) throw new Error('Iterable cannot be null');
                    return new A(function(n) {
                      var r,
                        o = new v();
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
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + ' is not observable'
              );
            })(e, t)
          : e instanceof A
          ? e
          : new A(U(e));
      }
      var X = (function() {
          function e(e, t) {
            void 0 === t && (t = Number.POSITIVE_INFINITY),
              (this.project = e),
              (this.concurrent = t);
          }
          return (
            (e.prototype.call = function(e, t) {
              return t.subscribe(new $(e, this.project, this.concurrent));
            }),
            e
          );
        })(),
        $ = (function(e) {
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
              var r,
                o,
                i = new R(this, void 0, void 0);
              this.destination.add(i),
                (r = e),
                void 0 === (o = i) && (o = new R(this, t, n)),
                o.closed || (r instanceof A ? r.subscribe(o) : U(r)(o));
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
        })(G);
      function K(e) {
        return e;
      }
      function J(e) {
        return (
          void 0 === e && (e = Number.POSITIVE_INFINITY),
          (function e(t, n, r) {
            return (
              void 0 === r && (r = Number.POSITIVE_INFINITY),
              'function' == typeof n
                ? function(o) {
                    return o.pipe(
                      e(function(e, r) {
                        return Q(t(e, r)).pipe(
                          Z(function(t, o) {
                            return n(e, t, r, o);
                          })
                        );
                      }, r)
                    );
                  }
                : ('number' == typeof n && (r = n),
                  function(e) {
                    return e.lift(new X(t, r));
                  })
            );
          })(K, e)
        );
      }
      function ee(e, t) {
        return t ? Y(e, t) : new A(L(e));
      }
      function te() {
        return function(e) {
          return e.lift(new ne(e));
        };
      }
      var ne = (function() {
          function e(e) {
            this.connectable = e;
          }
          return (
            (e.prototype.call = function(e, t) {
              var n = this.connectable;
              n._refCount++;
              var r = new re(e, n),
                o = t.subscribe(r);
              return r.closed || (r.connection = n.connect()), o;
            }),
            e
          );
        })(),
        re = (function(e) {
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
        })(C),
        oe = (function(e) {
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
                  (e = this._connection = new v()).add(
                    this.source.subscribe(new ae(this.getSubject(), this))
                  ),
                  e.closed && ((this._connection = null), (e = v.EMPTY))),
                e
              );
            }),
            (t.prototype.refCount = function() {
              return te()(this);
            }),
            t
          );
        })(A).prototype,
        ie = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: oe._subscribe },
          _isComplete: { value: oe._isComplete, writable: !0 },
          getSubject: { value: oe.getSubject },
          connect: { value: oe.connect },
          refCount: { value: oe.refCount }
        },
        ae = (function(e) {
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
        })(I);
      function se() {
        return new M();
      }
      var ue = '__parameters__';
      function le(e, t, n) {
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
          return (a.annotation = i), a;
          function a(e, t, n) {
            for (
              var r = e.hasOwnProperty(ue)
                ? e[ue]
                : Object.defineProperty(e, ue, { value: [] })[ue];
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
      var ce = le('Inject', function(e) {
          return { token: e };
        }),
        de = le('Optional'),
        pe = le('Self'),
        he = le('SkipSelf'),
        fe = (function(e) {
          return (
            (e[(e.Default = 0)] = 'Default'),
            (e[(e.Host = 1)] = 'Host'),
            (e[(e.Self = 2)] = 'Self'),
            (e[(e.SkipSelf = 4)] = 'SkipSelf'),
            (e[(e.Optional = 8)] = 'Optional'),
            e
          );
        })({});
      function ye(e) {
        for (var t in e) if (e[t] === ye) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function ve(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function ge(e) {
        var t = e[me];
        return t && t.token === e ? t : null;
      }
      var me = ye({ ngInjectableDef: ye });
      function be(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(be).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        var t = e.toString();
        if (null == t) return '' + t;
        var n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      var _e = ye({ __forward_ref__: ye });
      function we(e) {
        return (
          (e.__forward_ref__ = we),
          (e.toString = function() {
            return be(this());
          }),
          e
        );
      }
      function xe(e) {
        var t = e;
        return 'function' == typeof t &&
          t.hasOwnProperty(_e) &&
          t.__forward_ref__ === we
          ? t()
          : e;
      }
      var Ce,
        Ee = 'undefined' != typeof globalThis && globalThis,
        Se = 'undefined' != typeof window && window,
        Oe =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        ke = 'undefined' != typeof global && global,
        Ae = Ee || ke || Se || Oe,
        Ne = (function() {
          function e(e, t) {
            (this._desc = e),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ngInjectableDef = void 0),
              'number' == typeof t
                ? (this.__NG_ELEMENT_ID__ = t)
                : void 0 !== t &&
                  (this.ngInjectableDef = ve({
                    token: this,
                    providedIn: t.providedIn || 'root',
                    factory: t.factory
                  }));
          }
          return (
            (e.prototype.toString = function() {
              return 'InjectionToken ' + this._desc;
            }),
            e
          );
        })(),
        Te = new Ne('INJECTOR', -1),
        Pe = new Object(),
        De = /\n/gm,
        Ie = '\u0275',
        Me = '__source',
        Ve = ye({ provide: String, useValue: ye }),
        je = void 0;
      function Re(e) {
        var t = je;
        return (je = e), t;
      }
      var Le = (function() {
        function e() {}
        return (
          (e.prototype.get = function(e, t) {
            if ((void 0 === t && (t = Pe), t === Pe)) {
              var n = new Error(
                'NullInjectorError: No provider for ' + be(e) + '!'
              );
              throw ((n.name = 'NullInjectorError'), n);
            }
            return t;
          }),
          e
        );
      })();
      function Fe(e, t, n, r) {
        void 0 === r && (r = null),
          (e =
            e && '\n' === e.charAt(0) && e.charAt(1) == Ie ? e.substr(2) : e);
        var o = be(t);
        if (t instanceof Array) o = t.map(be).join(' -> ');
        else if ('object' == typeof t) {
          var i = [];
          for (var a in t)
            if (t.hasOwnProperty(a)) {
              var s = t[a];
              i.push(
                a + ':' + ('string' == typeof s ? JSON.stringify(s) : be(s))
              );
            }
          o = '{' + i.join(', ') + '}';
        }
        return (
          n + (r ? '(' + r + ')' : '') + '[' + o + ']: ' + e.replace(De, '\n  ')
        );
      }
      var Be = new Ne(
          'The presence of this token marks an injector as being the root injector.'
        ),
        He = function(e, t, n) {
          return new qe(e, t, n);
        },
        ze = (function() {
          function e() {}
          return (
            (e.create = function(e, t) {
              return Array.isArray(e)
                ? He(e, t, '')
                : He(e.providers, e.parent, e.name || '');
            }),
            (e.THROW_IF_NOT_FOUND = Pe),
            (e.NULL = new Le()),
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'any',
              factory: function() {
                return (
                  void 0 === e && (e = fe.Default),
                  (Ce ||
                    function(e, t) {
                      if ((void 0 === t && (t = fe.Default), void 0 === je))
                        throw new Error(
                          'inject() must be called from an injection context'
                        );
                      return null === je
                        ? (function(e, t, n) {
                            var r = ge(e);
                            if (r && 'root' == r.providedIn)
                              return void 0 === r.value
                                ? (r.value = r.factory())
                                : r.value;
                            if (n & fe.Optional) return null;
                            throw new Error(
                              'Injector: NOT_FOUND [' + be(e) + ']'
                            );
                          })(e, 0, t)
                        : je.get(e, t & fe.Optional ? null : void 0, t);
                    })(Te, e)
                );
                var e;
              }
            })),
            (e.__NG_ELEMENT_ID__ = -1),
            e
          );
        })(),
        Ue = function(e) {
          return e;
        },
        Ge = [],
        Ze = Ue,
        We = function() {
          return Array.prototype.slice.call(arguments);
        },
        qe = (function() {
          function e(e, t, n) {
            void 0 === t && (t = ze.NULL),
              void 0 === n && (n = null),
              (this.parent = t),
              (this.source = n);
            var r = (this._records = new Map());
            r.set(ze, { token: ze, fn: Ue, deps: Ge, value: this, useNew: !1 }),
              r.set(Te, {
                token: Te,
                fn: Ue,
                deps: Ge,
                value: this,
                useNew: !1
              }),
              (function e(t, n) {
                if (n)
                  if ((n = xe(n)) instanceof Array)
                    for (var r = 0; r < n.length; r++) e(t, n[r]);
                  else {
                    if ('function' == typeof n)
                      throw Qe('Function/Class not supported', n);
                    if (!n || 'object' != typeof n || !n.provide)
                      throw Qe('Unexpected provider', n);
                    var o = xe(n.provide),
                      i = (function(e) {
                        var t = (function(e) {
                            var t = Ge,
                              n = e.deps;
                            if (n && n.length) {
                              t = [];
                              for (var r = 0; r < n.length; r++) {
                                var o = 6;
                                if ((u = xe(n[r])) instanceof Array)
                                  for (var i = 0, a = u; i < a.length; i++) {
                                    var s = a[i];
                                    s instanceof de || s == de
                                      ? (o |= 1)
                                      : s instanceof he || s == he
                                      ? (o &= -3)
                                      : s instanceof pe || s == pe
                                      ? (o &= -5)
                                      : (u = s instanceof ce ? s.token : xe(s));
                                  }
                                t.push({ token: u, options: o });
                              }
                            } else if (e.useExisting) {
                              var u;
                              t = [
                                { token: (u = xe(e.useExisting)), options: 6 }
                              ];
                            } else if (!(n || Ve in e))
                              throw Qe("'deps' required", e);
                            return t;
                          })(e),
                          n = Ue,
                          r = Ge,
                          o = !1,
                          i = xe(e.provide);
                        if (Ve in e) r = e.useValue;
                        else if (e.useFactory) n = e.useFactory;
                        else if (e.useExisting);
                        else if (e.useClass) (o = !0), (n = xe(e.useClass));
                        else {
                          if ('function' != typeof i)
                            throw Qe(
                              'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                              e
                            );
                          (o = !0), (n = i);
                        }
                        return { deps: t, fn: n, useNew: o, value: r };
                      })(n);
                    if (!0 === n.multi) {
                      var a = t.get(o);
                      if (a) {
                        if (a.fn !== We) throw Ye(o);
                      } else
                        t.set(
                          o,
                          (a = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: We,
                            value: Ge
                          })
                        );
                      a.deps.push({ token: (o = n), options: 6 });
                    }
                    var s = t.get(o);
                    if (s && s.fn == We) throw Ye(o);
                    t.set(o, i);
                  }
              })(r, e);
          }
          return (
            (e.prototype.get = function(e, t, n) {
              void 0 === n && (n = fe.Default);
              var r = this._records.get(e);
              try {
                return (function e(t, n, r, o, i, a) {
                  try {
                    return (function(t, n, r, o, i, a) {
                      var s, u;
                      if (!n || a & fe.SkipSelf)
                        a & fe.Self || (u = o.get(t, i, fe.Default));
                      else {
                        if ((u = n.value) == Ze)
                          throw Error('\u0275Circular dependency');
                        if (u === Ge) {
                          n.value = Ze;
                          var l = n.useNew,
                            d = n.fn,
                            p = n.deps,
                            h = Ge;
                          if (p.length) {
                            h = [];
                            for (var f = 0; f < p.length; f++) {
                              var y = p[f],
                                v = y.options,
                                g = 2 & v ? r.get(y.token) : void 0;
                              h.push(
                                e(
                                  y.token,
                                  g,
                                  r,
                                  g || 4 & v ? o : ze.NULL,
                                  1 & v ? null : ze.THROW_IF_NOT_FOUND,
                                  fe.Default
                                )
                              );
                            }
                          }
                          n.value = u = l
                            ? new ((s = d).bind.apply(s, c([void 0], h)))()
                            : d.apply(void 0, h);
                        }
                      }
                      return u;
                    })(t, n, r, o, i, a);
                  } catch (s) {
                    throw (s instanceof Error || (s = new Error(s)),
                    (s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(t),
                    n && n.value == Ze && (n.value = Ge),
                    s);
                  }
                })(e, r, this._records, this.parent, t, n);
              } catch (o) {
                return (function(e, t, n, r) {
                  var o = e.ngTempTokenPath;
                  throw (t[Me] && o.unshift(t[Me]),
                  (e.message = Fe(
                    '\n' + e.message,
                    o,
                    'StaticInjectorError',
                    r
                  )),
                  (e.ngTokenPath = o),
                  (e.ngTempTokenPath = null),
                  e);
                })(o, e, 0, this.source);
              }
            }),
            (e.prototype.toString = function() {
              var e = [];
              return (
                this._records.forEach(function(t, n) {
                  return e.push(be(n));
                }),
                'StaticInjector[' + e.join(', ') + ']'
              );
            }),
            e
          );
        })();
      function Ye(e) {
        return Qe('Cannot mix multi providers and regular providers', e);
      }
      function Qe(e, t) {
        return new Error(Fe(e, t, 'StaticInjectorError'));
      }
      var Xe = 'ngDebugContext',
        $e = 'ngOriginalError',
        Ke = 'ngErrorLogger',
        Je = (function(e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.Native = 1)] = 'Native'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })({}),
        et = (function() {
          return (
            ('undefined' != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(Ae);
        })(),
        tt = !0,
        nt = !1;
      function rt() {
        return (nt = !0), tt;
      }
      var ot = (function() {
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
        it = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        at = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function st(e) {
        return (e = String(e)).match(it) || e.match(at)
          ? e
          : (rt() &&
              console.warn(
                'WARNING: sanitizing unsafe URL value ' +
                  e +
                  ' (see http://g.co/ng/security#xss)'
              ),
            'unsafe:' + e);
      }
      function ut(e) {
        var t,
          n,
          r = {};
        try {
          for (var o = u(e.split(',')), i = o.next(); !i.done; i = o.next())
            r[i.value] = !0;
        } catch (a) {
          t = { error: a };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (t) throw t.error;
          }
        }
        return r;
      }
      function lt() {
        for (var e, t, n = [], r = 0; r < arguments.length; r++)
          n[r] = arguments[r];
        var o = {};
        try {
          for (var i = u(n), a = i.next(); !a.done; a = i.next()) {
            var s = a.value;
            for (var l in s) s.hasOwnProperty(l) && (o[l] = !0);
          }
        } catch (c) {
          e = { error: c };
        } finally {
          try {
            a && !a.done && (t = i.return) && t.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return o;
      }
      var ct,
        dt = ut('area,br,col,hr,img,wbr'),
        pt = ut('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ht = ut('rp,rt'),
        ft = lt(ht, pt),
        yt = lt(
          dt,
          lt(
            pt,
            ut(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          lt(
            ht,
            ut(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ft
        ),
        vt = ut('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        gt = ut('srcset'),
        mt = lt(
          vt,
          gt,
          ut(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ut(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        bt = ut('script,style,template'),
        _t = (function() {
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
              if (!yt.hasOwnProperty(n))
                return (this.sanitizedSomething = !0), !bt.hasOwnProperty(n);
              this.buf.push('<'), this.buf.push(n);
              for (var r = e.attributes, o = 0; o < r.length; o++) {
                var i = r.item(o),
                  a = i.name,
                  s = a.toLowerCase();
                if (mt.hasOwnProperty(s)) {
                  var u = i.value;
                  vt[s] && (u = st(u)),
                    gt[s] &&
                      ((t = u),
                      (u = (t = String(t))
                        .split(',')
                        .map(function(e) {
                          return st(e.trim());
                        })
                        .join(', '))),
                    this.buf.push(' ', a, '="', Ct(u), '"');
                } else this.sanitizedSomething = !0;
              }
              return this.buf.push('>'), !0;
            }),
            (e.prototype.endElement = function(e) {
              var t = e.nodeName.toLowerCase();
              yt.hasOwnProperty(t) &&
                !dt.hasOwnProperty(t) &&
                (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
            }),
            (e.prototype.chars = function(e) {
              this.buf.push(Ct(e));
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
        wt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        xt = /([^\#-~ |!])/g;
      function Ct(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(wt, function(e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(xt, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function Et(e) {
        return 'content' in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var St = (function(e) {
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
        Ot = (function() {
          return function() {};
        })(),
        kt = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        At = /^url\(([^)]+)\)$/;
      function Nt(e) {
        return e[Xe];
      }
      function Tt(e) {
        return e[$e];
      }
      function Pt(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        e.error.apply(e, c(t));
      }
      var Dt = (function() {
          function e() {
            this._console = console;
          }
          return (
            (e.prototype.handleError = function(e) {
              var t = this._findOriginalError(e),
                n = this._findContext(e),
                r = (function(e) {
                  return e[Ke] || Pt;
                })(e);
              r(this._console, 'ERROR', e),
                t && r(this._console, 'ORIGINAL ERROR', t),
                n && r(this._console, 'ERROR CONTEXT', n);
            }),
            (e.prototype._findContext = function(e) {
              return e ? (Nt(e) ? Nt(e) : this._findContext(Tt(e))) : null;
            }),
            (e.prototype._findOriginalError = function(e) {
              for (var t = Tt(e); t && Tt(t); ) t = Tt(t);
              return t;
            }),
            e
          );
        })(),
        It = /([A-Z])/g;
      function Mt(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      var Vt = null;
      function jt() {
        if (!Vt) {
          var e = Ae.Symbol;
          if (e && e.iterator) Vt = e.iterator;
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
                (Vt = r);
            }
        }
        return Vt;
      }
      function Rt(e, t) {
        return (
          e === t ||
          ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function Lt(e, t) {
        var n = Bt(e),
          r = Bt(t);
        return n && r
          ? (function(e, t, n) {
              for (var r = e[jt()](), o = t[jt()](); ; ) {
                var i = r.next(),
                  a = o.next();
                if (i.done && a.done) return !0;
                if (i.done || a.done) return !1;
                if (!n(i.value, a.value)) return !1;
              }
            })(e, t, Lt)
          : !(
              n ||
              !e ||
              ('object' != typeof e && 'function' != typeof e) ||
              r ||
              !t ||
              ('object' != typeof t && 'function' != typeof t)
            ) || Rt(e, t);
      }
      var Ft = (function() {
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
      })();
      function Bt(e) {
        return (
          !!Ht(e) && (Array.isArray(e) || (!(e instanceof Map) && jt() in e))
        );
      }
      function Ht(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function zt(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Ut(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      var Gt = (function() {
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
        })(),
        Zt = (function() {
          return function() {};
        })(),
        Wt = (function() {
          return function() {};
        })();
      function qt(e) {
        var t = Error(
          'No component factory found for ' +
            be(e) +
            '. Did you add it to @NgModule.entryComponents?'
        );
        return (t[Yt] = e), t;
      }
      var Yt = 'ngComponent',
        Qt = (function() {
          function e() {}
          return (
            (e.prototype.resolveComponentFactory = function(e) {
              throw qt(e);
            }),
            e
          );
        })(),
        Xt = (function() {
          function e() {}
          return (e.NULL = new Qt()), e;
        })(),
        $t = (function() {
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
                throw qt(e);
              return new Kt(t, this._ngModule);
            }),
            e
          );
        })(),
        Kt = (function(e) {
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
        })(Wt),
        Jt = (function() {
          return function() {};
        })(),
        en = (function() {
          return function() {};
        })();
      function tn() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      }
      var nn = (function() {
          function e(e) {
            this.nativeElement = e;
          }
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return rn(e);
            }),
            e
          );
        })(),
        rn = tn,
        on = (function() {
          return function() {};
        })(),
        an = (function() {
          return function() {};
        })(),
        sn = (function(e) {
          return (
            (e[(e.Important = 1)] = 'Important'),
            (e[(e.DashCase = 2)] = 'DashCase'),
            e
          );
        })({}),
        un = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return ln();
            }),
            e
          );
        })(),
        ln = tn,
        cn = new ((function() {
          return function(e) {
            (this.full = e),
              (this.major = e.split('.')[0]),
              (this.minor = e.split('.')[1]),
              (this.patch = e
                .split('.')
                .slice(2)
                .join('.'));
          };
        })())('8.1.0'),
        dn = (function() {
          function e() {}
          return (
            (e.prototype.supports = function(e) {
              return Bt(e);
            }),
            (e.prototype.create = function(e) {
              return new hn(e);
            }),
            e
          );
        })(),
        pn = function(e, t) {
          return t;
        },
        hn = (function() {
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
              (this._trackByFn = e || pn);
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
                var i = !n || (t && t.currentIndex < gn(n, r, o)) ? t : n,
                  a = gn(i, r, o),
                  s = i.currentIndex;
                if (i === n) r--, (n = n._nextRemoved);
                else if (((t = t._next), null == i.previousIndex)) r++;
                else {
                  o || (o = []);
                  var u = a - r,
                    l = s - r;
                  if (u != l) {
                    for (var c = 0; c < u; c++) {
                      var d = c < o.length ? o[c] : (o[c] = 0),
                        p = d + c;
                      l <= p && p < u && (o[c] = d + 1);
                    }
                    o[i.previousIndex] = l - u;
                  }
                }
                a !== s && e(i, a, s);
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
              if ((null == e && (e = []), !Bt(e)))
                throw new Error(
                  "Error trying to diff '" +
                    be(e) +
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
                a = !1;
              if (Array.isArray(e)) {
                this.length = e.length;
                for (var s = 0; s < this.length; s++)
                  (o = this._trackByFn(s, (r = e[s]))),
                    null !== i && Rt(i.trackById, o)
                      ? (a && (i = this._verifyReinsertion(i, r, o, s)),
                        Rt(i.item, r) || this._addIdentityChange(i, r))
                      : ((i = this._mismatch(i, r, o, s)), (a = !0)),
                    (i = i._next);
              } else
                (n = 0),
                  (function(e, t) {
                    if (Array.isArray(e))
                      for (var n = 0; n < e.length; n++) t(e[n]);
                    else
                      for (
                        var r = e[jt()](), o = void 0;
                        !(o = r.next()).done;

                      )
                        t(o.value);
                  })(e, function(e) {
                    (o = t._trackByFn(n, e)),
                      null !== i && Rt(i.trackById, o)
                        ? (a && (i = t._verifyReinsertion(i, e, o, n)),
                          Rt(i.item, e) || t._addIdentityChange(i, e))
                        : ((i = t._mismatch(i, e, o, n)), (a = !0)),
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
                  ? (Rt(e.item, t) || this._addIdentityChange(e, t),
                    this._moveAfter(e, o, r))
                  : null !==
                    (e =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null))
                  ? (Rt(e.item, t) || this._addIdentityChange(e, t),
                    this._reinsertAfter(e, o, r))
                  : (e = this._addAfter(new fn(t, n), o, r)),
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
                  (this._linkedRecords = new vn()),
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
                  (this._unlinkedRecords = new vn()),
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
        fn = (function() {
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
        yn = (function() {
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
                if ((null === t || t <= n.currentIndex) && Rt(n.trackById, e))
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
        vn = (function() {
          function e() {
            this.map = new Map();
          }
          return (
            (e.prototype.put = function(e) {
              var t = e.trackById,
                n = this.map.get(t);
              n || ((n = new yn()), this.map.set(t, n)), n.add(e);
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
      function gn(e, t, n) {
        var r = e.previousIndex;
        if (null === r) return r;
        var o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      var mn = (function() {
          function e() {}
          return (
            (e.prototype.supports = function(e) {
              return e instanceof Map || Ht(e);
            }),
            (e.prototype.create = function() {
              return new bn();
            }),
            e
          );
        })(),
        bn = (function() {
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
                if (!(e instanceof Map || Ht(e)))
                  throw new Error(
                    "Error trying to diff '" +
                      be(e) +
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
              var i = new _n(e);
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
              Rt(t, e.currentValue) ||
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
        _n = (function() {
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
        wn = (function() {
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
                deps: [[e, new he(), new de()]]
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
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'root',
              factory: function() {
                return new e([new dn()]);
              }
            })),
            e
          );
        })(),
        xn = (function() {
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
                deps: [[e, new he(), new de()]]
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
            (e.ngInjectableDef = ve({
              token: e,
              providedIn: 'root',
              factory: function() {
                return new e([new mn()]);
              }
            })),
            e
          );
        })(),
        Cn = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return En();
            }),
            e
          );
        })(),
        En = function() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        },
        Sn = [new mn()],
        On = new wn([new dn()]),
        kn = new xn(Sn),
        An = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Nn(e, nn);
            }),
            e
          );
        })(),
        Nn = tn,
        Tn = (function() {
          function e() {}
          return (
            (e.__NG_ELEMENT_ID__ = function() {
              return Pn(e, nn);
            }),
            e
          );
        })(),
        Pn = tn;
      function Dn(e, t, n, r) {
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
            return In(n, t), n;
          })(o, e)
        );
      }
      function In(e, t) {
        (e[Xe] = t), (e[Ke] = t.logError.bind(t));
      }
      function Mn(e) {
        return new Error(
          'ViewDestroyedError: Attempt to use a destroyed view: ' + e
        );
      }
      function Vn(e, t, n) {
        var r = e.state,
          o = 1792 & r;
        return o === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : o === n;
      }
      function jn(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function Rn(e, t) {
        return e.nodes[t];
      }
      function Ln(e, t) {
        return e.nodes[t];
      }
      function Fn(e, t) {
        return e.nodes[t];
      }
      function Bn(e, t) {
        return e.nodes[t];
      }
      function Hn(e, t) {
        return e.nodes[t];
      }
      var zn = {
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
        },
        Un = function() {},
        Gn = new Map();
      function Zn(e) {
        var t = Gn.get(e);
        return t || ((t = be(e) + '_' + Gn.size), Gn.set(e, t)), t;
      }
      function Wn(e, t, n, r) {
        if (Ft.isWrapped(r)) {
          r = Ft.unwrap(r);
          var o = e.def.nodes[t].bindingIndex + n,
            i = Ft.unwrap(e.oldValues[o]);
          e.oldValues[o] = new Ft(i);
        }
        return r;
      }
      var qn = '$$undefined',
        Yn = '$$empty';
      function Qn(e) {
        return {
          id: qn,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data
        };
      }
      var Xn = 0;
      function $n(e, t, n, r) {
        return !(!(2 & e.state) && Rt(e.oldValues[t.bindingIndex + n], r));
      }
      function Kn(e, t, n, r) {
        return !!$n(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function Jn(e, t, n, r) {
        var o = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Lt(o, r)) {
          var i = t.bindings[n].name;
          throw Dn(
            zn.createDebugContext(e, t.nodeIndex),
            i + ': ' + o,
            i + ': ' + r,
            0 != (1 & e.state)
          );
        }
      }
      function er(e) {
        for (var t = e; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function tr(e, t) {
        for (var n = e; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function nr(e, t, n, r) {
        try {
          return (
            er(33554432 & e.def.nodes[t].flags ? Ln(e, t).componentView : e),
            zn.handleEvent(e, t, n, r)
          );
        } catch (o) {
          e.root.errorHandler.handleError(o);
        }
      }
      function rr(e) {
        return e.parent ? Ln(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function or(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function ir(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Ln(e, t.nodeIndex).renderElement;
          case 2:
            return Rn(e, t.nodeIndex).renderText;
        }
      }
      function ar(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function sr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function ur(e) {
        var t = {},
          n = 0,
          r = {};
        return (
          e &&
            e.forEach(function(e) {
              var o = l(e, 2),
                i = o[0],
                a = o[1];
              'number' == typeof i
                ? ((t[i] = a),
                  (n |= (function(e) {
                    return 1 << e % 32;
                  })(i)))
                : (r[i] = a);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function lr(e, t) {
        return e.map(function(e) {
          var n, r, o;
          return (
            Array.isArray(e)
              ? ((o = (n = l(e, 2))[0]), (r = n[1]))
              : ((o = 0), (r = e)),
            r &&
              ('function' == typeof r || 'object' == typeof r) &&
              t &&
              Object.defineProperty(r, Me, { value: t, configurable: !0 }),
            { flags: o, token: r, tokenKey: Zn(r) }
          );
        });
      }
      function cr(e, t, n) {
        var r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === Je.Native)
            ? Ln(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      var dr = new WeakMap();
      function pr(e) {
        var t = dr.get(e);
        return (
          t ||
            (((t = e(function() {
              return Un;
            })).factory = e),
            dr.set(e, t)),
          t
        );
      }
      function hr(e, t, n, r, o) {
        3 === t && (n = e.renderer.parentNode(ir(e, e.def.lastRenderRootNode))),
          fr(e, t, 0, e.def.nodes.length - 1, n, r, o);
      }
      function fr(e, t, n, r, o, i, a) {
        for (var s = n; s <= r; s++) {
          var u = e.def.nodes[s];
          11 & u.flags && vr(e, u, t, o, i, a), (s += u.childCount);
        }
      }
      function yr(e, t, n, r, o, i) {
        for (var a = e; a && !ar(a); ) a = a.parent;
        for (
          var s = a.parent,
            u = or(a),
            l = u.nodeIndex + u.childCount,
            c = u.nodeIndex + 1;
          c <= l;
          c++
        ) {
          var d = s.def.nodes[c];
          d.ngContentIndex === t && vr(s, d, n, r, o, i), (c += d.childCount);
        }
        if (!s.parent) {
          var p = e.root.projectableNodes[t];
          if (p) for (c = 0; c < p.length; c++) gr(e, p[c], n, r, o, i);
        }
      }
      function vr(e, t, n, r, o, i) {
        if (8 & t.flags) yr(e, t.ngContent.index, n, r, o, i);
        else {
          var a = ir(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && gr(e, a, n, r, o, i),
                32 & t.bindingFlags &&
                  gr(Ln(e, t.nodeIndex).componentView, a, n, r, o, i))
              : gr(e, a, n, r, o, i),
            16777216 & t.flags)
          )
            for (
              var s = Ln(e, t.nodeIndex).viewContainer._embeddedViews, u = 0;
              u < s.length;
              u++
            )
              hr(s[u], n, r, o, i);
          1 & t.flags &&
            !t.element.name &&
            fr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
        }
      }
      function gr(e, t, n, r, o, i) {
        var a = e.renderer;
        switch (n) {
          case 1:
            a.appendChild(r, t);
            break;
          case 2:
            a.insertBefore(r, t, o);
            break;
          case 3:
            a.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      var mr = /^:([^:]+):(.+)$/;
      function br(e) {
        if (':' === e[0]) {
          var t = e.match(mr);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function _r(e) {
        for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      var wr = new Object(),
        xr = Zn(ze),
        Cr = Zn(Te),
        Er = Zn(Jt);
      function Sr(e, t, n, r) {
        return (
          (n = xe(n)),
          { index: -1, deps: lr(r, be(t)), flags: e, token: t, value: n }
        );
      }
      function Or(e, t, n) {
        void 0 === n && (n = ze.THROW_IF_NOT_FOUND);
        var r,
          o,
          i = Re(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          var a = t.tokenKey;
          switch (a) {
            case xr:
            case Cr:
            case Er:
              return e;
          }
          var s,
            u = e._def.providersByKey[a];
          if (u) {
            var l = e._providers[u.index];
            return (
              void 0 === l && (l = e._providers[u.index] = kr(e, u)),
              l === wr ? void 0 : l
            );
          }
          if (
            (s = ge(t.token)) &&
            ((r = e),
            null != (o = s).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(o.providedIn) > -1;
              })(r) ||
                ('root' === o.providedIn && r._def.isRoot)))
          ) {
            var c = e._providers.length;
            return (
              (e._def.providers[c] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: s.factory,
                deps: [],
                index: c,
                token: t.token
              }),
              (e._providers[c] = wr),
              (e._providers[c] = kr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Re(i);
        }
      }
      function kr(e, t) {
        var n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              var r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Or(e, n[0]));
                case 2:
                  return new t(Or(e, n[0]), Or(e, n[1]));
                case 3:
                  return new t(Or(e, n[0]), Or(e, n[1]), Or(e, n[2]));
                default:
                  for (var o = new Array(r), i = 0; i < r; i++)
                    o[i] = Or(e, n[i]);
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
                  return t(Or(e, n[0]));
                case 2:
                  return t(Or(e, n[0]), Or(e, n[1]));
                case 3:
                  return t(Or(e, n[0]), Or(e, n[1]), Or(e, n[2]));
                default:
                  for (var o = Array(r), i = 0; i < r; i++) o[i] = Or(e, n[i]);
                  return t.apply(void 0, c(o));
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Or(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === wr ||
            null === n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? wr : n
        );
      }
      function Ar(e, t) {
        var n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        var r = n[t];
        return (
          (r.viewContainerParent = null),
          Dr(n, t),
          zn.dirtyParentQueries(r),
          Tr(r),
          r
        );
      }
      function Nr(e, t, n) {
        var r = t ? ir(t, t.def.lastRenderRootNode) : e.renderElement,
          o = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        hr(n, 2, o, i, void 0);
      }
      function Tr(e) {
        hr(e, 3, null, null, void 0);
      }
      function Pr(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Dr(e, t) {
        t >= e.length - 1 ? e.pop() : e.splice(t, 1);
      }
      var Ir = new Object();
      function Mr(e, t, n, r, o, i) {
        return new Vr(e, t, n, r, o, i);
      }
      var Vr = (function(e) {
          function t(t, n, r, o, i, a) {
            var s = e.call(this) || this;
            return (
              (s.selector = t),
              (s.componentType = n),
              (s._inputs = o),
              (s._outputs = i),
              (s.ngContentSelectors = a),
              (s.viewDefFactory = r),
              s
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
              var o = pr(this.viewDefFactory),
                i = o.nodes[0].element.componentProvider.nodeIndex,
                a = zn.createRootView(e, t || [], n, o, r, Ir),
                s = Fn(a, i).instance;
              return (
                n &&
                  a.renderer.setAttribute(
                    Ln(a, 0).renderElement,
                    'ng-version',
                    cn.full
                  ),
                new jr(a, new Br(a), s)
              );
            }),
            t
          );
        })(Wt),
        jr = (function(e) {
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
                return new nn(
                  Ln(this._view, this._elDef.nodeIndex).renderElement
                );
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'injector', {
              get: function() {
                return new Gr(this._view, this._elDef);
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
        })(Zt);
      function Rr(e, t, n) {
        return new Lr(e, t, n);
      }
      var Lr = (function() {
        function e(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        return (
          Object.defineProperty(e.prototype, 'element', {
            get: function() {
              return new nn(this._data.renderElement);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return new Gr(this._view, this._elDef);
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'parentInjector', {
            get: function() {
              for (var e = this._view, t = this._elDef.parent; !t && e; )
                (t = or(e)), (e = e.parent);
              return e ? new Gr(e, t) : new Gr(this._view, null);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.clear = function() {
            for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
              var t = Ar(this._data, e);
              zn.destroyView(t);
            }
          }),
          (e.prototype.get = function(e) {
            var t = this._embeddedViews[e];
            if (t) {
              var n = new Br(t);
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
            o || e instanceof Kt || (o = i.get(Jt));
            var a = e.create(i, r, void 0, o);
            return this.insert(a.hostView, t), a;
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
              a = e;
            return (
              (i = (n = this._data).viewContainer._embeddedViews),
              null == (r = t) && (r = i.length),
              ((o = a._view).viewContainerParent = this._view),
              Pr(i, r, o),
              (function(e, t) {
                var n = rr(t);
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
              zn.dirtyParentQueries(o),
              Nr(n, r > 0 ? i[r - 1] : null, o),
              a.attachToViewContainerRef(this),
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
              a,
              s = this._embeddedViews.indexOf(e._view);
            return (
              (o = t),
              (a = (i = (n = this._data).viewContainer._embeddedViews)[
                (r = s)
              ]),
              Dr(i, r),
              null == o && (o = i.length),
              Pr(i, o, a),
              zn.dirtyParentQueries(a),
              Tr(a),
              Nr(n, o > 0 ? i[o - 1] : null, a),
              e
            );
          }),
          (e.prototype.indexOf = function(e) {
            return this._embeddedViews.indexOf(e._view);
          }),
          (e.prototype.remove = function(e) {
            var t = Ar(this._data, e);
            t && zn.destroyView(t);
          }),
          (e.prototype.detach = function(e) {
            var t = Ar(this._data, e);
            return t ? new Br(t) : null;
          }),
          e
        );
      })();
      function Fr(e) {
        return new Br(e);
      }
      var Br = (function() {
        function e(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        return (
          Object.defineProperty(e.prototype, 'rootNodes', {
            get: function() {
              return hr(this._view, 0, void 0, void 0, (e = [])), e;
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
            er(this._view);
          }),
          (e.prototype.detach = function() {
            this._view.state &= -5;
          }),
          (e.prototype.detectChanges = function() {
            var e = this._view.root.rendererFactory;
            e.begin && e.begin();
            try {
              zn.checkAndUpdateView(this._view);
            } finally {
              e.end && e.end();
            }
          }),
          (e.prototype.checkNoChanges = function() {
            zn.checkNoChangesView(this._view);
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
              zn.destroyView(this._view);
          }),
          (e.prototype.detachFromAppRef = function() {
            (this._appRef = null),
              Tr(this._view),
              zn.dirtyParentQueries(this._view);
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
      function Hr(e, t) {
        return new zr(e, t);
      }
      var zr = (function(e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (r._parentView = t), (r._def = n), r;
        }
        return (
          o(t, e),
          (t.prototype.createEmbeddedView = function(e) {
            return new Br(
              zn.createEmbeddedView(
                this._parentView,
                this._def,
                this._def.element.template,
                e
              )
            );
          }),
          Object.defineProperty(t.prototype, 'elementRef', {
            get: function() {
              return new nn(
                Ln(this._parentView, this._def.nodeIndex).renderElement
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          t
        );
      })(An);
      function Ur(e, t) {
        return new Gr(e, t);
      }
      var Gr = (function() {
        function e(e, t) {
          (this.view = e), (this.elDef = t);
        }
        return (
          (e.prototype.get = function(e, t) {
            return (
              void 0 === t && (t = ze.THROW_IF_NOT_FOUND),
              zn.resolveDep(
                this.view,
                this.elDef,
                !!this.elDef && 0 != (33554432 & this.elDef.flags),
                { flags: 0, token: e, tokenKey: Zn(e) },
                t
              )
            );
          }),
          e
        );
      })();
      function Zr(e, t) {
        var n = e.def.nodes[t];
        if (1 & n.flags) {
          var r = Ln(e, n.nodeIndex);
          return n.element.template ? r.template : r.renderElement;
        }
        if (2 & n.flags) return Rn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return Fn(e, n.nodeIndex).instance;
        throw new Error('Illegal state: read nodeValue for node index ' + t);
      }
      function Wr(e) {
        return new qr(e.renderer);
      }
      var qr = (function() {
        function e(e) {
          this.delegate = e;
        }
        return (
          (e.prototype.selectRootElement = function(e) {
            return this.delegate.selectRootElement(e);
          }),
          (e.prototype.createElement = function(e, t) {
            var n = l(br(t), 2),
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
            var r = l(br(t), 2),
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
      function Yr(e, t, n, r) {
        return new Qr(e, t, n, r);
      }
      var Qr = (function() {
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
                  4096 & o.flags || (void 0 === n[r] && (n[r] = kr(e, o)));
                }
              })(this);
          }
          return (
            (e.prototype.get = function(e, t, n) {
              void 0 === t && (t = ze.THROW_IF_NOT_FOUND),
                void 0 === n && (n = fe.Default);
              var r = 0;
              return (
                n & fe.SkipSelf ? (r |= 1) : n & fe.Self && (r |= 4),
                Or(this, { token: e, tokenKey: Zn(e), flags: r }, t)
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
                return this.get(Xt);
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.destroy = function() {
              if (this._destroyed)
                throw new Error(
                  'The ng module ' +
                    be(this.instance.constructor) +
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
                      if (i && i !== wr) {
                        var a = i.ngOnDestroy;
                        'function' != typeof a ||
                          r.has(i) ||
                          (a.apply(i), r.add(i));
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
        Xr = Zn(on),
        $r = Zn(un),
        Kr = Zn(nn),
        Jr = Zn(Tn),
        eo = Zn(An),
        to = Zn(Cn),
        no = Zn(ze),
        ro = Zn(Te);
      function oo(e, t, n, r, o, i, a, s) {
        var u = [];
        if (a)
          for (var c in a) {
            var d = l(a[c], 2);
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
        if (s)
          for (var h in s)
            p.push({ type: 1, propName: h, target: null, eventName: s[h] });
        return so(e, (t |= 16384), n, r, o, o, i, u, p);
      }
      function io(e, t, n) {
        return so(-1, (e |= 16), null, 0, t, t, n);
      }
      function ao(e, t, n, r, o) {
        return so(-1, e, t, 0, n, r, o);
      }
      function so(e, t, n, r, o, i, a, s, u) {
        var l = ur(n),
          c = l.matchedQueries,
          d = l.references,
          p = l.matchedQueryIds;
        u || (u = []), s || (s = []), (i = xe(i));
        var h = lr(a, be(o));
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
          bindings: s,
          bindingFlags: _r(s),
          outputs: u,
          element: null,
          provider: { token: o, value: i, deps: h },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function uo(e, t) {
        return ho(e, t);
      }
      function lo(e, t) {
        for (var n = e; n.parent && !ar(n); ) n = n.parent;
        return fo(n.parent, or(n), !0, t.provider.value, t.provider.deps);
      }
      function co(e, t) {
        var n = fo(
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
            if (!Ut(i))
              throw new Error(
                '@Output ' +
                  o.propName +
                  " not initialized in '" +
                  n.constructor.name +
                  "'."
              );
            var a = i.subscribe(po(e, t.parent.nodeIndex, o.eventName));
            e.disposables[t.outputIndex + r] = a.unsubscribe.bind(a);
          }
        return n;
      }
      function po(e, t, n) {
        return function(r) {
          return nr(e, t, n, r);
        };
      }
      function ho(e, t) {
        var n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return fo(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, o) {
              var i = o.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(vo(e, t, n, o[0]));
                case 2:
                  return r(vo(e, t, n, o[0]), vo(e, t, n, o[1]));
                case 3:
                  return r(
                    vo(e, t, n, o[0]),
                    vo(e, t, n, o[1]),
                    vo(e, t, n, o[2])
                  );
                default:
                  for (var a = Array(i), s = 0; s < i; s++)
                    a[s] = vo(e, t, n, o[s]);
                  return r.apply(void 0, c(a));
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return vo(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function fo(e, t, n, r, o) {
        var i = o.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(vo(e, t, n, o[0]));
          case 2:
            return new r(vo(e, t, n, o[0]), vo(e, t, n, o[1]));
          case 3:
            return new r(
              vo(e, t, n, o[0]),
              vo(e, t, n, o[1]),
              vo(e, t, n, o[2])
            );
          default:
            for (var a = new Array(i), s = 0; s < i; s++)
              a[s] = vo(e, t, n, o[s]);
            return new (r.bind.apply(r, c([void 0], a)))();
        }
      }
      var yo = {};
      function vo(e, t, n, r, o) {
        if ((void 0 === o && (o = ze.THROW_IF_NOT_FOUND), 8 & r.flags))
          return r.token;
        var i = e;
        2 & r.flags && (o = null);
        var a = r.tokenKey;
        a === to && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        for (var s = e; s; ) {
          if (t)
            switch (a) {
              case Xr:
                return Wr(go(s, t, n));
              case $r:
                return go(s, t, n).renderer;
              case Kr:
                return new nn(Ln(s, t.nodeIndex).renderElement);
              case Jr:
                return Ln(s, t.nodeIndex).viewContainer;
              case eo:
                if (t.element.template) return Ln(s, t.nodeIndex).template;
                break;
              case to:
                return Fr(go(s, t, n));
              case no:
              case ro:
                return Ur(s, t);
              default:
                var u = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[a];
                if (u) {
                  var l = Fn(s, u.nodeIndex);
                  return (
                    l ||
                      ((l = { instance: ho(s, u) }),
                      (s.nodes[u.nodeIndex] = l)),
                    l.instance
                  );
                }
            }
          (n = ar(s)), (t = or(s)), (s = s.parent), 4 & r.flags && (s = null);
        }
        var c = i.root.injector.get(r.token, yo);
        return c !== yo || o === yo
          ? c
          : i.root.ngModule.injector.get(r.token, o);
      }
      function go(e, t, n) {
        var r;
        if (n) r = Ln(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !ar(r); ) r = r.parent;
        return r;
      }
      function mo(e, t, n, r, o, i) {
        if (32768 & n.flags) {
          var a = Ln(e, n.parent.nodeIndex).componentView;
          2 & a.def.flags && (a.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
          i = i || {};
          var s = Ft.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new Gt(s, o, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = o), i;
      }
      function bo(e, t) {
        if (e.def.nodeFlags & t)
          for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
            var i = n[o],
              a = i.parent;
            for (
              !a && i.flags & t && wo(e, o, i.flags & t, r++),
                0 == (i.childFlags & t) && (o += i.childCount);
              a && 1 & a.flags && o === a.nodeIndex + a.childCount;

            )
              a.directChildFlags & t && (r = _o(e, a, t, r)), (a = a.parent);
          }
      }
      function _o(e, t, n, r) {
        for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
          var i = e.def.nodes[o];
          i.flags & n && wo(e, o, i.flags & n, r++), (o += i.childCount);
        }
        return r;
      }
      function wo(e, t, n, r) {
        var o = Fn(e, t);
        if (o) {
          var i = o.instance;
          i &&
            (zn.setCurrentNode(e, t),
            1048576 & n && jn(e, 512, r) && i.ngAfterContentInit(),
            2097152 & n && i.ngAfterContentChecked(),
            4194304 & n && jn(e, 768, r) && i.ngAfterViewInit(),
            8388608 & n && i.ngAfterViewChecked(),
            131072 & n && i.ngOnDestroy());
        }
      }
      var xo = new Ne('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function() {
            return et;
          }
        }),
        Co = {},
        Eo = (function(e) {
          return (
            (e[(e.LocaleId = 0)] = 'LocaleId'),
            (e[(e.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
            (e[(e.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
            (e[(e.DaysFormat = 3)] = 'DaysFormat'),
            (e[(e.DaysStandalone = 4)] = 'DaysStandalone'),
            (e[(e.MonthsFormat = 5)] = 'MonthsFormat'),
            (e[(e.MonthsStandalone = 6)] = 'MonthsStandalone'),
            (e[(e.Eras = 7)] = 'Eras'),
            (e[(e.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
            (e[(e.WeekendRange = 9)] = 'WeekendRange'),
            (e[(e.DateFormat = 10)] = 'DateFormat'),
            (e[(e.TimeFormat = 11)] = 'TimeFormat'),
            (e[(e.DateTimeFormat = 12)] = 'DateTimeFormat'),
            (e[(e.NumberSymbols = 13)] = 'NumberSymbols'),
            (e[(e.NumberFormats = 14)] = 'NumberFormats'),
            (e[(e.CurrencySymbol = 15)] = 'CurrencySymbol'),
            (e[(e.CurrencyName = 16)] = 'CurrencyName'),
            (e[(e.Currencies = 17)] = 'Currencies'),
            (e[(e.PluralCase = 18)] = 'PluralCase'),
            (e[(e.ExtraData = 19)] = 'ExtraData'),
            e
          );
        })({}),
        So = void 0,
        Oo = [
          'en',
          [['a', 'p'], ['AM', 'PM'], So],
          [['AM', 'PM'], So, So],
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
          So,
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
          So,
          [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', So, "{1} 'at' {0}", So],
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
        ];
      function ko(e) {
        var t = e.toLowerCase().replace(/_/g, '-'),
          n = Co[t];
        if (n) return n;
        var r = t.split('-')[0];
        if ((n = Co[r])) return n;
        if ('en' === r) return Oo;
        throw new Error('Missing locale data for the locale "' + e + '".');
      }
      var Ao = (function(e) {
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
              a = function() {
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
                  (a = this.__isAsync
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
                  (a = this.__isAsync
                    ? function() {
                        setTimeout(function() {
                          return r();
                        });
                      }
                    : function() {
                        r();
                      }));
            var s = e.prototype.subscribe.call(this, o, i, a);
            return t instanceof v && t.add(s), s;
          }),
          t
        );
      })(M);
      function No() {
        return this._results[jt()]();
      }
      var To = (function() {
          function e() {
            (this.dirty = !0),
              (this._results = []),
              (this.changes = new Ao()),
              (this.length = 0);
            var t = jt(),
              n = e.prototype;
            n[t] || (n[t] = No);
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
            (e.prototype.toString = function() {
              return this._results.toString();
            }),
            (e.prototype.reset = function(e) {
              (this._results = (function e(t, n) {
                void 0 === n && (n = t);
                for (var r = 0; r < t.length; r++) {
                  var o = t[r];
                  Array.isArray(o)
                    ? (n === t && (n = t.slice(0, r)), e(o, n))
                    : n !== t && n.push(o);
                }
                return n;
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
        Po = new Ne('Application Initializer'),
        Do = (function() {
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
                    zt(o) && t.push(o);
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
        Io = new Ne('AppId');
      function Mo() {
        return '' + Vo() + Vo() + Vo();
      }
      function Vo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var jo = new Ne('Platform Initializer'),
        Ro = new Ne('Platform ID'),
        Lo = new Ne('appBootstrapListener'),
        Fo = (function() {
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
        })(),
        Bo = new Ne('LocaleId');
      function Ho() {
        throw new Error('Runtime compiler is not loaded');
      }
      var zo,
        Uo,
        Go = Ho,
        Zo = Ho,
        Wo = Ho,
        qo = Ho,
        Yo = (function() {
          function e() {
            (this.compileModuleSync = Go),
              (this.compileModuleAsync = Zo),
              (this.compileModuleAndAllComponentsSync = Wo),
              (this.compileModuleAndAllComponentsAsync = qo);
          }
          return (
            (e.prototype.clearCache = function() {}),
            (e.prototype.clearCacheFor = function(e) {}),
            (e.prototype.getModuleId = function(e) {}),
            e
          );
        })(),
        Qo = (function() {
          return function() {};
        })();
      function Xo() {
        var e = Ae.wtf;
        return !(!e || !(zo = e.trace) || ((Uo = zo.events), 0));
      }
      var $o = Xo();
      function Ko(e, t) {
        return null;
      }
      var Jo = $o
          ? function(e, t) {
              return void 0 === t && (t = null), Uo.createScope(e, t);
            }
          : function(e, t) {
              return Ko;
            },
        ei = $o
          ? function(e, t) {
              return zo.leaveScope(e, t), t;
            }
          : function(e, t) {
              return t;
            },
        ti = (function() {
          return Promise.resolve(0);
        })();
      function ni(e) {
        'undefined' == typeof Zone
          ? ti.then(function() {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      var ri = (function() {
        function e(e) {
          var t,
            n = e.enableLongStackTrace,
            r = void 0 !== n && n;
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ao(!1)),
            (this.onMicrotaskEmpty = new Ao(!1)),
            (this.onStable = new Ao(!1)),
            (this.onError = new Ao(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            r &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: function(e, n, r, o, i, a) {
                try {
                  return si(t), e.invokeTask(r, o, i, a);
                } finally {
                  ui(t);
                }
              },
              onInvoke: function(e, n, r, o, i, a, s) {
                try {
                  return si(t), e.invoke(r, o, i, a, s);
                } finally {
                  ui(t);
                }
              },
              onHasTask: function(e, n, r, o) {
                e.hasTask(r, o),
                  n === r &&
                    ('microTask' == o.change
                      ? ((t.hasPendingMicrotasks = o.microTask), ai(t))
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
              throw new Error('Expected to be in Angular Zone, but it is not!');
          }),
          (e.assertNotInAngularZone = function() {
            if (e.isInAngularZone())
              throw new Error('Expected to not be in Angular Zone, but it is!');
          }),
          (e.prototype.run = function(e, t, n) {
            return this._inner.run(e, t, n);
          }),
          (e.prototype.runTask = function(e, t, n, r) {
            var o = this._inner,
              i = o.scheduleEventTask('NgZoneEvent: ' + r, e, ii, oi, oi);
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
      function oi() {}
      var ii = {};
      function ai(e) {
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
      function si(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ui(e) {
        e._nesting--, ai(e);
      }
      var li,
        ci = (function() {
          function e() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Ao()),
              (this.onMicrotaskEmpty = new Ao()),
              (this.onStable = new Ao()),
              (this.onError = new Ao());
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
        di = (function() {
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
                      ri.assertNotInAngularZone(),
                        ni(function() {
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
                ni(function() {
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
        pi = (function() {
          function e() {
            (this._applications = new Map()), hi.addToWindow(this);
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
                void 0 === t && (t = !0), hi.findTestabilityInTree(this, e, t)
              );
            }),
            a([s('design:paramtypes', [])], e)
          );
        })(),
        hi = new ((function() {
          function e() {}
          return (
            (e.prototype.addToWindow = function(e) {}),
            (e.prototype.findTestabilityInTree = function(e, t, n) {
              return null;
            }),
            e
          );
        })())(),
        fi = new Ne('AllowMultipleToken'),
        yi = (function() {
          return function(e, t) {
            (this.name = e), (this.token = t);
          };
        })();
      function vi(e, t, n) {
        void 0 === n && (n = []);
        var r = 'Platform: ' + t,
          o = new Ne(r);
        return function(t) {
          void 0 === t && (t = []);
          var i = gi();
          if (!i || i.injector.get(fi, !1))
            if (e) e(n.concat(t).concat({ provide: o, useValue: !0 }));
            else {
              var a = n.concat(t).concat({ provide: o, useValue: !0 });
              !(function(e) {
                if (li && !li.destroyed && !li.injector.get(fi, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                li = e.get(mi);
                var t = e.get(jo, null);
                t &&
                  t.forEach(function(e) {
                    return e();
                  });
              })(ze.create({ providers: a, name: r }));
            }
          return (function(e) {
            var t = gi();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(o);
        };
      }
      function gi() {
        return li && !li.destroyed ? li : null;
      }
      var mi = (function() {
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
                  ? new ci()
                  : ('zone.js' === n ? void 0 : n) ||
                    new ri({ enableLongStackTrace: rt() }),
              i = [{ provide: ri, useValue: o }];
            return o.run(function() {
              var t = ze.create({
                  providers: i,
                  parent: r.injector,
                  name: e.moduleType.name
                }),
                n = e.create(t),
                a = n.injector.get(Dt, null);
              if (!a)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                n.injector
                  .get(Bo, 'en-US')
                  .toLowerCase()
                  .replace(/_/g, '-'),
                n.onDestroy(function() {
                  return wi(r._modules, n);
                }),
                o.runOutsideAngular(function() {
                  return o.onError.subscribe({
                    next: function(e) {
                      a.handleError(e);
                    }
                  });
                }),
                (function(e, t, o) {
                  try {
                    var i =
                      ((a = n.injector.get(Do)).runInitializers(),
                      a.donePromise.then(function() {
                        return r._moduleDoBootstrap(n), n;
                      }));
                    return zt(i)
                      ? i.catch(function(n) {
                          throw (t.runOutsideAngular(function() {
                            return e.handleError(n);
                          }),
                          n);
                        })
                      : i;
                  } catch (s) {
                    throw (t.runOutsideAngular(function() {
                      return e.handleError(s);
                    }),
                    s);
                  }
                  var a;
                })(a, o)
              );
            });
          }),
          (e.prototype.bootstrapModule = function(e, t) {
            var n = this;
            void 0 === t && (t = []);
            var r = bi({}, t);
            return (function(e, t, n) {
              return e
                .get(Qo)
                .createCompiler([t])
                .compileModuleAsync(n);
            })(this.injector, r, e).then(function(e) {
              return n.bootstrapModuleFactory(e, r);
            });
          }),
          (e.prototype._moduleDoBootstrap = function(e) {
            var t = e.injector.get(_i);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach(function(e) {
                return t.bootstrap(e);
              });
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  'The module ' +
                    be(e.instance.constructor) +
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
      function bi(e, t) {
        return Array.isArray(t) ? t.reduce(bi, e) : i({}, e, t);
      }
      var _i = (function() {
        function e(e, t, n, r, o, i) {
          var a = this;
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
            (this._enforceNoNewChanges = rt()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: function() {
                a._zone.run(function() {
                  a.tick();
                });
              }
            });
          var s = new A(function(e) {
              (a._stable =
                a._zone.isStable &&
                !a._zone.hasPendingMacrotasks &&
                !a._zone.hasPendingMicrotasks),
                a._zone.runOutsideAngular(function() {
                  e.next(a._stable), e.complete();
                });
            }),
            u = new A(function(e) {
              var t;
              a._zone.runOutsideAngular(function() {
                t = a._zone.onStable.subscribe(function() {
                  ri.assertNotInAngularZone(),
                    ni(function() {
                      a._stable ||
                        a._zone.hasPendingMacrotasks ||
                        a._zone.hasPendingMicrotasks ||
                        ((a._stable = !0), e.next(!0));
                    });
                });
              });
              var n = a._zone.onUnstable.subscribe(function() {
                ri.assertInAngularZone(),
                  a._stable &&
                    ((a._stable = !1),
                    a._zone.runOutsideAngular(function() {
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
            var n = Number.POSITIVE_INFINITY,
              r = null,
              o = e[e.length - 1];
            return (
              j(o)
                ? ((r = e.pop()),
                  e.length > 1 &&
                    'number' == typeof e[e.length - 1] &&
                    (n = e.pop()))
                : 'number' == typeof o && (n = e.pop()),
              null === r && 1 === e.length && e[0] instanceof A
                ? e[0]
                : J(n)(ee(e, r))
            );
          })(
            s,
            u.pipe(function(e) {
              return te()(
                ((t = se),
                function(e) {
                  var n;
                  n =
                    'function' == typeof t
                      ? t
                      : function() {
                          return t;
                        };
                  var r = Object.create(e, ie);
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
              e instanceof Wt
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            var o = n instanceof Kt ? null : this._injector.get(Jt),
              i = n.create(ze.NULL, [], t || n.selector, o);
            i.onDestroy(function() {
              r._unloadComponent(i);
            });
            var a = i.injector.get(di, null);
            return (
              a &&
                i.injector
                  .get(pi)
                  .registerApplication(i.location.nativeElement, a),
              this._loadComponent(i),
              rt() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }),
          (e.prototype.tick = function() {
            var e,
              n,
              r,
              o,
              i = this;
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            var a = t._tickScope();
            try {
              this._runningTick = !0;
              try {
                for (
                  var s = u(this._views), l = s.next();
                  !l.done;
                  l = s.next()
                )
                  l.value.detectChanges();
              } catch (p) {
                e = { error: p };
              } finally {
                try {
                  l && !l.done && (n = s.return) && n.call(s);
                } finally {
                  if (e) throw e.error;
                }
              }
              if (this._enforceNoNewChanges)
                try {
                  for (
                    var c = u(this._views), d = c.next();
                    !d.done;
                    d = c.next()
                  )
                    d.value.checkNoChanges();
                } catch (h) {
                  r = { error: h };
                } finally {
                  try {
                    d && !d.done && (o = c.return) && o.call(c);
                  } finally {
                    if (r) throw r.error;
                  }
                }
            } catch (f) {
              this._zone.runOutsideAngular(function() {
                return i._exceptionHandler.handleError(f);
              });
            } finally {
              (this._runningTick = !1), ei(a);
            }
          }),
          (e.prototype.attachView = function(e) {
            var t = e;
            this._views.push(t), t.attachToAppRef(this);
          }),
          (e.prototype.detachView = function(e) {
            var t = e;
            wi(this._views, t), t.detachFromAppRef();
          }),
          (e.prototype._loadComponent = function(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Lo, [])
                .concat(this._bootstrapListeners)
                .forEach(function(t) {
                  return t(e);
                });
          }),
          (e.prototype._unloadComponent = function(e) {
            this.detachView(e.hostView), wi(this.components, e);
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
          (e._tickScope = Jo('ApplicationRef#tick()')),
          e
        );
      })();
      function wi(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var xi = (function() {
          return function(e, t) {
            (this.name = e), (this.callback = t);
          };
        })(),
        Ci = (function() {
          function e(e, t, n) {
            (this.listeners = []),
              (this.parent = null),
              (this._debugContext = n),
              (this.nativeNode = e),
              t && t instanceof Ei && t.addChild(this);
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
        Ei = (function(e) {
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
                    t instanceof Ei && (n(t) && r.push(t), e(t, n, r));
                  });
                })(this, e, t),
                t
              );
            }),
            (t.prototype.queryAllNodes = function(e) {
              var t = [];
              return (
                (function e(t, n, r) {
                  t instanceof Ei &&
                    t.childNodes.forEach(function(t) {
                      n(t) && r.push(t), t instanceof Ei && e(t, n, r);
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
        })(Ci),
        Si = new Map(),
        Oi = function(e) {
          return Si.get(e) || null;
        };
      function ki(e) {
        Si.set(e.nativeNode, e);
      }
      var Ai = vi(null, 'core', [
        { provide: Ro, useValue: 'unknown' },
        { provide: mi, deps: [ze] },
        { provide: pi, deps: [] },
        { provide: Fo, deps: [] }
      ]);
      function Ni() {
        return On;
      }
      function Ti() {
        return kn;
      }
      function Pi(e) {
        return e || 'en-US';
      }
      function Di(e) {
        var t = [];
        return (
          e.onStable.subscribe(function() {
            for (; t.length; ) t.pop()();
          }),
          function(e) {
            t.push(e);
          }
        );
      }
      var Ii = (function() {
        return function(e) {};
      })();
      function Mi(e, t, n, r, o, i) {
        e |= 1;
        var a = ur(t);
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
          matchedQueries: a.matchedQueries,
          matchedQueryIds: a.matchedQueryIds,
          references: a.references,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? pr(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: o || Un
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Vi(e, t, n, r, o, i, a, s, u, c, d, p) {
        var h;
        void 0 === a && (a = []), c || (c = Un);
        var f = ur(n),
          y = f.matchedQueries,
          v = f.references,
          g = f.matchedQueryIds,
          m = null,
          b = null;
        i && ((m = (h = l(br(i), 2))[0]), (b = h[1])), (s = s || []);
        for (var _ = new Array(s.length), w = 0; w < s.length; w++) {
          var x = l(s[w], 3),
            C = x[0],
            E = x[2],
            S = l(br(x[1]), 2),
            O = S[0],
            k = S[1],
            A = void 0,
            N = void 0;
          switch (15 & C) {
            case 4:
              N = E;
              break;
            case 1:
            case 8:
              A = E;
          }
          _[w] = {
            flags: C,
            ns: O,
            name: k,
            nonMinifiedName: k,
            securityContext: A,
            suffix: N
          };
        }
        u = u || [];
        var T = new Array(u.length);
        for (w = 0; w < u.length; w++) {
          var P = l(u[w], 2);
          T[w] = { type: 0, target: P[0], eventName: P[1], propName: null };
        }
        var D = (a = a || []).map(function(e) {
          var t = l(e, 2),
            n = t[1],
            r = l(br(t[0]), 2);
          return [r[0], r[1], n];
        });
        return (
          (p = (function(e) {
            if (e && e.id === qn) {
              var t =
                (null != e.encapsulation && e.encapsulation !== Je.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? 'c' + Xn++ : Yn;
            }
            return e && e.id === Yn && (e = null), e || null;
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
            matchedQueries: y,
            matchedQueryIds: g,
            references: v,
            ngContentIndex: r,
            childCount: o,
            bindings: _,
            bindingFlags: _r(_),
            outputs: T,
            element: {
              ns: m,
              name: b,
              attrs: D,
              template: null,
              componentProvider: null,
              componentView: d || null,
              componentRendererType: p,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || Un
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function ji(e, t, n) {
        var r,
          o = n.element,
          i = e.root.selectorOrNode,
          a = e.renderer;
        if (e.parent || !i) {
          r = o.name ? a.createElement(o.name, o.ns) : a.createComment('');
          var s = cr(e, t, n);
          s && a.appendChild(s, r);
        } else
          r = a.selectRootElement(
            i,
            !!o.componentRendererType &&
              o.componentRendererType.encapsulation === Je.ShadowDom
          );
        if (o.attrs)
          for (var u = 0; u < o.attrs.length; u++) {
            var c = l(o.attrs[u], 3);
            a.setAttribute(r, c[1], c[2], c[0]);
          }
        return r;
      }
      function Ri(e, t, n, r) {
        for (var o = 0; o < n.outputs.length; o++) {
          var i = n.outputs[o],
            a = Li(
              e,
              n.nodeIndex,
              ((d = i.eventName), (c = i.target) ? c + ':' + d : d)
            ),
            s = i.target,
            u = e;
          'component' === i.target && ((s = null), (u = t));
          var l = u.renderer.listen(s || r, i.eventName, a);
          e.disposables[n.outputIndex + o] = l;
        }
        var c, d;
      }
      function Li(e, t, n) {
        return function(r) {
          return nr(e, t, n, r);
        };
      }
      function Fi(e, t, n, r) {
        if (!Kn(e, t, n, r)) return !1;
        var o = t.bindings[n],
          i = Ln(e, t.nodeIndex),
          a = i.renderElement,
          s = o.name;
        switch (15 & o.flags) {
          case 1:
            !(function(e, t, n, r, o, i) {
              var a = t.securityContext,
                s = a ? e.root.sanitizer.sanitize(a, i) : i;
              s = null != s ? s.toString() : null;
              var u = e.renderer;
              null != i
                ? u.setAttribute(n, o, s, r)
                : u.removeAttribute(n, o, r);
            })(e, o, a, o.ns, s, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              var o = e.renderer;
              r ? o.addClass(t, n) : o.removeClass(t, n);
            })(e, a, s, r);
            break;
          case 4:
            !(function(e, t, n, r, o) {
              var i = e.root.sanitizer.sanitize(St.STYLE, o);
              if (null != i) {
                i = i.toString();
                var a = t.suffix;
                null != a && (i += a);
              } else i = null;
              var s = e.renderer;
              null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r);
            })(e, o, a, s, r);
            break;
          case 8:
            !(function(e, t, n, r, o) {
              var i = t.securityContext,
                a = i ? e.root.sanitizer.sanitize(i, o) : o;
              e.renderer.setProperty(n, r, a);
            })(
              33554432 & t.flags && 32 & o.flags ? i.componentView : e,
              o,
              a,
              s,
              r
            );
        }
        return !0;
      }
      function Bi(e) {
        for (var t = e.def.nodeMatchedQueries; e.parent && sr(e); ) {
          var n = e.parentNodeDef;
          e = e.parent;
          for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++)
            67108864 & (i = e.def.nodes[o]).flags &&
              536870912 & i.flags &&
              (i.query.filterId & t) === i.query.filterId &&
              Hn(e, o).setDirty(),
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
              Hn(e, o).setDirty(),
              (o += i.childCount);
          }
      }
      function Hi(e, t) {
        var n = Hn(e, t.nodeIndex);
        if (n.dirty) {
          var r,
            o = void 0;
          if (67108864 & t.flags) {
            var i = t.parent.parent;
            (o = zi(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, [])),
              (r = Fn(e, t.parent.nodeIndex).instance);
          } else
            134217728 & t.flags &&
              ((o = zi(e, 0, e.def.nodes.length - 1, t.query, [])),
              (r = e.component));
          n.reset(o);
          for (var a = t.query.bindings, s = !1, u = 0; u < a.length; u++) {
            var l = a[u],
              c = void 0;
            switch (l.bindingType) {
              case 0:
                c = n.first;
                break;
              case 1:
                (c = n), (s = !0);
            }
            r[l.propName] = c;
          }
          s && n.notifyOnChanges();
        }
      }
      function zi(e, t, n, r, o) {
        for (var i = t; i <= n; i++) {
          var a = e.def.nodes[i],
            s = a.matchedQueries[r.id];
          if (
            (null != s && o.push(Ui(e, a, s)),
            1 & a.flags &&
              a.element.template &&
              (a.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            var u = Ln(e, i);
            if (
              ((a.childMatchedQueries & r.filterId) === r.filterId &&
                (zi(e, i + 1, i + a.childCount, r, o), (i += a.childCount)),
              16777216 & a.flags)
            )
              for (
                var l = u.viewContainer._embeddedViews, c = 0;
                c < l.length;
                c++
              ) {
                var d = l[c],
                  p = rr(d);
                p && p === u && zi(d, 0, d.def.nodes.length - 1, r, o);
              }
            var h = u.template._projectedViews;
            if (h)
              for (c = 0; c < h.length; c++) {
                var f = h[c];
                zi(f, 0, f.def.nodes.length - 1, r, o);
              }
          }
          (a.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += a.childCount);
        }
        return o;
      }
      function Ui(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Ln(e, t.nodeIndex).renderElement;
            case 0:
              return new nn(Ln(e, t.nodeIndex).renderElement);
            case 2:
              return Ln(e, t.nodeIndex).template;
            case 3:
              return Ln(e, t.nodeIndex).viewContainer;
            case 4:
              return Fn(e, t.nodeIndex).instance;
          }
      }
      function Gi(e, t, n) {
        var r = cr(e, t, n);
        r && yr(e, n.ngContent.index, 1, r, null, void 0);
      }
      function Zi(e, t, n) {
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
      function Wi(e, t, n) {
        var r,
          o = e.renderer;
        r = o.createText(n.text.prefix);
        var i = cr(e, t, n);
        return i && o.appendChild(i, r), { renderText: r };
      }
      function qi(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function Yi(e, t, n, r) {
        for (
          var o = 0,
            i = 0,
            a = 0,
            s = 0,
            u = 0,
            l = null,
            c = null,
            d = !1,
            p = !1,
            h = null,
            f = 0;
          f < t.length;
          f++
        ) {
          var y = t[f];
          if (
            ((y.nodeIndex = f),
            (y.parent = l),
            (y.bindingIndex = o),
            (y.outputIndex = i),
            (y.renderParent = c),
            (a |= y.flags),
            (u |= y.matchedQueryIds),
            y.element)
          ) {
            var v = y.element;
            (v.publicProviders = l
              ? l.element.publicProviders
              : Object.create(null)),
              (v.allProviders = v.publicProviders),
              (d = !1),
              (p = !1),
              y.element.template &&
                (u |= y.element.template.nodeMatchedQueries);
          }
          if (
            (Xi(l, y, t.length),
            (o += y.bindings.length),
            (i += y.outputs.length),
            !c && 3 & y.flags && (h = y),
            20224 & y.flags)
          ) {
            d ||
              ((d = !0),
              (l.element.publicProviders = Object.create(
                l.element.publicProviders
              )),
              (l.element.allProviders = l.element.publicProviders));
            var g = 0 != (32768 & y.flags);
            0 == (8192 & y.flags) || g
              ? (l.element.publicProviders[Zn(y.provider.token)] = y)
              : (p ||
                  ((p = !0),
                  (l.element.allProviders = Object.create(
                    l.element.publicProviders
                  ))),
                (l.element.allProviders[Zn(y.provider.token)] = y)),
              g && (l.element.componentProvider = y);
          }
          if (
            (l
              ? ((l.childFlags |= y.flags),
                (l.directChildFlags |= y.flags),
                (l.childMatchedQueries |= y.matchedQueryIds),
                y.element &&
                  y.element.template &&
                  (l.childMatchedQueries |=
                    y.element.template.nodeMatchedQueries))
              : (s |= y.flags),
            y.childCount > 0)
          )
            (l = y), Qi(y) || (c = y);
          else
            for (; l && f === l.nodeIndex + l.childCount; ) {
              var m = l.parent;
              m &&
                ((m.childFlags |= l.childFlags),
                (m.childMatchedQueries |= l.childMatchedQueries)),
                (c = (l = m) && Qi(l) ? l.renderParent : l);
            }
        }
        return {
          factory: null,
          nodeFlags: a,
          rootNodeFlags: s,
          nodeMatchedQueries: u,
          flags: e,
          nodes: t,
          updateDirectives: n || Un,
          updateRenderer: r || Un,
          handleEvent: function(e, n, r, o) {
            return t[n].element.handleEvent(e, r, o);
          },
          bindingCount: o,
          outputCount: i,
          lastRenderRootNode: h
        };
      }
      function Qi(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function Xi(e, t, n) {
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
      function $i(e, t, n, r) {
        var o = ea(e.root, e.renderer, e, t, n);
        return ta(o, e.component, r), na(o), o;
      }
      function Ki(e, t, n) {
        var r = ea(e, e.renderer, null, null, t);
        return ta(r, n, n), na(r), r;
      }
      function Ji(e, t, n, r) {
        var o,
          i = t.element.componentRendererType;
        return (
          (o = i
            ? e.root.rendererFactory.createRenderer(r, i)
            : e.root.renderer),
          ea(e.root, o, e, t.element.componentProvider, n)
        );
      }
      function ea(e, t, n, r, o) {
        var i = new Array(o.nodes.length),
          a = o.outputCount ? new Array(o.outputCount) : null;
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
          disposables: a,
          initIndex: -1
        };
      }
      function ta(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function na(e) {
        var t;
        ar(e) &&
          (t = Ln(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
          var i = n.nodes[o];
          zn.setCurrentNode(e, o);
          var a = void 0;
          switch (201347067 & i.flags) {
            case 1:
              var s = ji(e, t, i),
                u = void 0;
              if (33554432 & i.flags) {
                var l = pr(i.element.componentView);
                u = zn.createComponentView(e, i, l, s);
              }
              Ri(e, u, i, s),
                (a = {
                  renderElement: s,
                  componentView: u,
                  viewContainer: null,
                  template: i.element.template ? Hr(e, i) : void 0
                }),
                16777216 & i.flags && (a.viewContainer = Rr(e, i, a));
              break;
            case 2:
              a = Wi(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (a = r[o]) || 4096 & i.flags || (a = { instance: uo(e, i) });
              break;
            case 16:
              a = { instance: lo(e, i) };
              break;
            case 16384:
              (a = r[o]) || (a = { instance: co(e, i) }),
                32768 & i.flags &&
                  ta(
                    Ln(e, i.parent.nodeIndex).componentView,
                    a.instance,
                    a.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              a = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              a = new To();
              break;
            case 8:
              Gi(e, t, i), (a = void 0);
          }
          r[o] = a;
        }
        da(e, ca.CreateViewNodes), ya(e, 201326592, 268435456, 0);
      }
      function ra(e) {
        aa(e),
          zn.updateDirectives(e, 1),
          pa(e, ca.CheckNoChanges),
          zn.updateRenderer(e, 1),
          da(e, ca.CheckNoChanges),
          (e.state &= -97);
      }
      function oa(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Vn(e, 0, 256),
          aa(e),
          zn.updateDirectives(e, 0),
          pa(e, ca.CheckAndUpdate),
          ya(e, 67108864, 536870912, 0);
        var t = Vn(e, 256, 512);
        bo(e, 2097152 | (t ? 1048576 : 0)),
          zn.updateRenderer(e, 0),
          da(e, ca.CheckAndUpdate),
          ya(e, 134217728, 536870912, 0),
          bo(e, 8388608 | ((t = Vn(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Vn(e, 768, 1024);
      }
      function ia(e, t, n, r, o, i, a, s, u, l, d, p, h) {
        return 0 === n
          ? (function(e, t, n, r, o, i, a, s, u, l, c, d) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, o, i, a, s, u, l, c, d) {
                    var p = t.bindings.length,
                      h = !1;
                    return (
                      p > 0 && Fi(e, t, 0, n) && (h = !0),
                      p > 1 && Fi(e, t, 1, r) && (h = !0),
                      p > 2 && Fi(e, t, 2, o) && (h = !0),
                      p > 3 && Fi(e, t, 3, i) && (h = !0),
                      p > 4 && Fi(e, t, 4, a) && (h = !0),
                      p > 5 && Fi(e, t, 5, s) && (h = !0),
                      p > 6 && Fi(e, t, 6, u) && (h = !0),
                      p > 7 && Fi(e, t, 7, l) && (h = !0),
                      p > 8 && Fi(e, t, 8, c) && (h = !0),
                      p > 9 && Fi(e, t, 9, d) && (h = !0),
                      h
                    );
                  })(e, t, n, r, o, i, a, s, u, l, c, d);
                case 2:
                  return (function(e, t, n, r, o, i, a, s, u, l, c, d) {
                    var p = !1,
                      h = t.bindings,
                      f = h.length;
                    if (
                      (f > 0 && Kn(e, t, 0, n) && (p = !0),
                      f > 1 && Kn(e, t, 1, r) && (p = !0),
                      f > 2 && Kn(e, t, 2, o) && (p = !0),
                      f > 3 && Kn(e, t, 3, i) && (p = !0),
                      f > 4 && Kn(e, t, 4, a) && (p = !0),
                      f > 5 && Kn(e, t, 5, s) && (p = !0),
                      f > 6 && Kn(e, t, 6, u) && (p = !0),
                      f > 7 && Kn(e, t, 7, l) && (p = !0),
                      f > 8 && Kn(e, t, 8, c) && (p = !0),
                      f > 9 && Kn(e, t, 9, d) && (p = !0),
                      p)
                    ) {
                      var y = t.text.prefix;
                      f > 0 && (y += qi(n, h[0])),
                        f > 1 && (y += qi(r, h[1])),
                        f > 2 && (y += qi(o, h[2])),
                        f > 3 && (y += qi(i, h[3])),
                        f > 4 && (y += qi(a, h[4])),
                        f > 5 && (y += qi(s, h[5])),
                        f > 6 && (y += qi(u, h[6])),
                        f > 7 && (y += qi(l, h[7])),
                        f > 8 && (y += qi(c, h[8])),
                        f > 9 && (y += qi(d, h[9]));
                      var v = Rn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(v, y);
                    }
                    return p;
                  })(e, t, n, r, o, i, a, s, u, l, c, d);
                case 16384:
                  return (function(e, t, n, r, o, i, a, s, u, l, c, d) {
                    var p = Fn(e, t.nodeIndex),
                      h = p.instance,
                      f = !1,
                      y = void 0,
                      v = t.bindings.length;
                    return (
                      v > 0 &&
                        $n(e, t, 0, n) &&
                        ((f = !0), (y = mo(e, p, t, 0, n, y))),
                      v > 1 &&
                        $n(e, t, 1, r) &&
                        ((f = !0), (y = mo(e, p, t, 1, r, y))),
                      v > 2 &&
                        $n(e, t, 2, o) &&
                        ((f = !0), (y = mo(e, p, t, 2, o, y))),
                      v > 3 &&
                        $n(e, t, 3, i) &&
                        ((f = !0), (y = mo(e, p, t, 3, i, y))),
                      v > 4 &&
                        $n(e, t, 4, a) &&
                        ((f = !0), (y = mo(e, p, t, 4, a, y))),
                      v > 5 &&
                        $n(e, t, 5, s) &&
                        ((f = !0), (y = mo(e, p, t, 5, s, y))),
                      v > 6 &&
                        $n(e, t, 6, u) &&
                        ((f = !0), (y = mo(e, p, t, 6, u, y))),
                      v > 7 &&
                        $n(e, t, 7, l) &&
                        ((f = !0), (y = mo(e, p, t, 7, l, y))),
                      v > 8 &&
                        $n(e, t, 8, c) &&
                        ((f = !0), (y = mo(e, p, t, 8, c, y))),
                      v > 9 &&
                        $n(e, t, 9, d) &&
                        ((f = !0), (y = mo(e, p, t, 9, d, y))),
                      y && h.ngOnChanges(y),
                      65536 & t.flags &&
                        jn(e, 256, t.nodeIndex) &&
                        h.ngOnInit(),
                      262144 & t.flags && h.ngDoCheck(),
                      f
                    );
                  })(e, t, n, r, o, i, a, s, u, l, c, d);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, o, i, a, s, u, l, c, d) {
                    var p = t.bindings,
                      h = !1,
                      f = p.length;
                    if (
                      (f > 0 && Kn(e, t, 0, n) && (h = !0),
                      f > 1 && Kn(e, t, 1, r) && (h = !0),
                      f > 2 && Kn(e, t, 2, o) && (h = !0),
                      f > 3 && Kn(e, t, 3, i) && (h = !0),
                      f > 4 && Kn(e, t, 4, a) && (h = !0),
                      f > 5 && Kn(e, t, 5, s) && (h = !0),
                      f > 6 && Kn(e, t, 6, u) && (h = !0),
                      f > 7 && Kn(e, t, 7, l) && (h = !0),
                      f > 8 && Kn(e, t, 8, c) && (h = !0),
                      f > 9 && Kn(e, t, 9, d) && (h = !0),
                      h)
                    ) {
                      var y = Bn(e, t.nodeIndex),
                        v = void 0;
                      switch (201347067 & t.flags) {
                        case 32:
                          (v = new Array(p.length)),
                            f > 0 && (v[0] = n),
                            f > 1 && (v[1] = r),
                            f > 2 && (v[2] = o),
                            f > 3 && (v[3] = i),
                            f > 4 && (v[4] = a),
                            f > 5 && (v[5] = s),
                            f > 6 && (v[6] = u),
                            f > 7 && (v[7] = l),
                            f > 8 && (v[8] = c),
                            f > 9 && (v[9] = d);
                          break;
                        case 64:
                          (v = {}),
                            f > 0 && (v[p[0].name] = n),
                            f > 1 && (v[p[1].name] = r),
                            f > 2 && (v[p[2].name] = o),
                            f > 3 && (v[p[3].name] = i),
                            f > 4 && (v[p[4].name] = a),
                            f > 5 && (v[p[5].name] = s),
                            f > 6 && (v[p[6].name] = u),
                            f > 7 && (v[p[7].name] = l),
                            f > 8 && (v[p[8].name] = c),
                            f > 9 && (v[p[9].name] = d);
                          break;
                        case 128:
                          var g = n;
                          switch (f) {
                            case 1:
                              v = g.transform(n);
                              break;
                            case 2:
                              v = g.transform(r);
                              break;
                            case 3:
                              v = g.transform(r, o);
                              break;
                            case 4:
                              v = g.transform(r, o, i);
                              break;
                            case 5:
                              v = g.transform(r, o, i, a);
                              break;
                            case 6:
                              v = g.transform(r, o, i, a, s);
                              break;
                            case 7:
                              v = g.transform(r, o, i, a, s, u);
                              break;
                            case 8:
                              v = g.transform(r, o, i, a, s, u, l);
                              break;
                            case 9:
                              v = g.transform(r, o, i, a, s, u, l, c);
                              break;
                            case 10:
                              v = g.transform(r, o, i, a, s, u, l, c, d);
                          }
                      }
                      y.value = v;
                    }
                    return h;
                  })(e, t, n, r, o, i, a, s, u, l, c, d);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, o, i, a, s, u, l, d, p, h)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    for (var r = !1, o = 0; o < n.length; o++)
                      Fi(e, t, o, n[o]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    for (var r = t.bindings, o = !1, i = 0; i < n.length; i++)
                      Kn(e, t, i, n[i]) && (o = !0);
                    if (o) {
                      var a = '';
                      for (i = 0; i < n.length; i++) a += qi(n[i], r[i]);
                      a = t.text.prefix + a;
                      var s = Rn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(s, a);
                    }
                    return o;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    for (
                      var r = Fn(e, t.nodeIndex),
                        o = r.instance,
                        i = !1,
                        a = void 0,
                        s = 0;
                      s < n.length;
                      s++
                    )
                      $n(e, t, s, n[s]) &&
                        ((i = !0), (a = mo(e, r, t, s, n[s], a)));
                    return (
                      a && o.ngOnChanges(a),
                      65536 & t.flags &&
                        jn(e, 256, t.nodeIndex) &&
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
                      Kn(e, t, i, n[i]) && (o = !0);
                    if (o) {
                      var a = Bn(e, t.nodeIndex),
                        s = void 0;
                      switch (201347067 & t.flags) {
                        case 32:
                          s = n;
                          break;
                        case 64:
                          for (s = {}, i = 0; i < n.length; i++)
                            s[r[i].name] = n[i];
                          break;
                        case 128:
                          var u = n[0],
                            l = n.slice(1);
                          s = u.transform.apply(u, c(l));
                      }
                      a.value = s;
                    }
                    return o;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function aa(e) {
        var t = e.def;
        if (4 & t.nodeFlags)
          for (var n = 0; n < t.nodes.length; n++) {
            var r = t.nodes[n];
            if (4 & r.flags) {
              var o = Ln(e, n).template._projectedViews;
              if (o)
                for (var i = 0; i < o.length; i++) {
                  var a = o[i];
                  (a.state |= 32), tr(a, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function sa(e, t, n, r, o, i, a, s, u, l, c, d, p) {
        return (
          0 === n
            ? (function(e, t, n, r, o, i, a, s, u, l, c, d) {
                var p = t.bindings.length;
                p > 0 && Jn(e, t, 0, n),
                  p > 1 && Jn(e, t, 1, r),
                  p > 2 && Jn(e, t, 2, o),
                  p > 3 && Jn(e, t, 3, i),
                  p > 4 && Jn(e, t, 4, a),
                  p > 5 && Jn(e, t, 5, s),
                  p > 6 && Jn(e, t, 6, u),
                  p > 7 && Jn(e, t, 7, l),
                  p > 8 && Jn(e, t, 8, c),
                  p > 9 && Jn(e, t, 9, d);
              })(e, t, r, o, i, a, s, u, l, c, d, p)
            : (function(e, t, n) {
                for (var r = 0; r < n.length; r++) Jn(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function ua(e, t) {
        if (Hn(e, t.nodeIndex).dirty)
          throw Dn(
            zn.createDebugContext(e, t.nodeIndex),
            'Query ' + t.query.id + ' not dirty',
            'Query ' + t.query.id + ' dirty',
            0 != (1 & e.state)
          );
      }
      function la(e) {
        if (!(128 & e.state)) {
          if (
            (pa(e, ca.Destroy), da(e, ca.Destroy), bo(e, 131072), e.disposables)
          )
            for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (16 & e.state) {
              var t = rr(e);
              if (t) {
                var n = t.template._projectedViews;
                n && (Dr(n, n.indexOf(e)), zn.dirtyParentQueries(e));
              }
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                  var r = e.def.nodes[n];
                  1 & r.flags
                    ? e.renderer.destroyNode(Ln(e, n).renderElement)
                    : 2 & r.flags
                    ? e.renderer.destroyNode(Rn(e, n).renderText)
                    : (67108864 & r.flags || 134217728 & r.flags) &&
                      Hn(e, n).destroy();
                }
              })(e),
            ar(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      var ca = (function(e) {
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
      function da(e, t) {
        var n = e.def;
        if (33554432 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            33554432 & o.flags
              ? ha(Ln(e, r).componentView, t)
              : 0 == (33554432 & o.childFlags) && (r += o.childCount);
          }
      }
      function pa(e, t) {
        var n = e.def;
        if (16777216 & n.nodeFlags)
          for (var r = 0; r < n.nodes.length; r++) {
            var o = n.nodes[r];
            if (16777216 & o.flags)
              for (
                var i = Ln(e, r).viewContainer._embeddedViews, a = 0;
                a < i.length;
                a++
              )
                ha(i[a], t);
            else 0 == (16777216 & o.childFlags) && (r += o.childCount);
          }
      }
      function ha(e, t) {
        var n = e.state;
        switch (t) {
          case ca.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? ra(e)
                : 64 & n && fa(e, ca.CheckNoChangesProjectedViews));
            break;
          case ca.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? ra(e) : 64 & n && fa(e, t));
            break;
          case ca.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? oa(e)
                : 64 & n && fa(e, ca.CheckAndUpdateProjectedViews));
            break;
          case ca.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? oa(e) : 64 & n && fa(e, t));
            break;
          case ca.Destroy:
            la(e);
            break;
          case ca.CreateViewNodes:
            na(e);
        }
      }
      function fa(e, t) {
        pa(e, t), da(e, t);
      }
      function ya(e, t, n, r) {
        if (e.def.nodeFlags & t && e.def.nodeFlags & n)
          for (var o = e.def.nodes.length, i = 0; i < o; i++) {
            var a = e.def.nodes[i];
            if (a.flags & t && a.flags & n)
              switch ((zn.setCurrentNode(e, a.nodeIndex), r)) {
                case 0:
                  Hi(e, a);
                  break;
                case 1:
                  ua(e, a);
              }
            (a.childFlags & t && a.childFlags & n) || (i += a.childCount);
          }
      }
      var va = !1;
      function ga(e, t, n, r, o, i) {
        var a = o.injector.get(an);
        return Ki(ba(e, o, a, t, n), r, i);
      }
      function ma(e, t, n, r, o, i) {
        var a = o.injector.get(an),
          s = ba(e, o, new Ka(a), t, n),
          u = Na(r);
        return Xa(La.create, Ki, null, [s, u, i]);
      }
      function ba(e, t, n, r, o) {
        var i = t.injector.get(Ot),
          a = t.injector.get(Dt),
          s = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: o,
          sanitizer: i,
          rendererFactory: n,
          renderer: s,
          errorHandler: a
        };
      }
      function _a(e, t, n, r) {
        var o = Na(n);
        return Xa(La.create, $i, null, [e, t, o, r]);
      }
      function wa(e, t, n, r) {
        return (
          (n = Sa.get(t.element.componentProvider.provider.token) || Na(n)),
          Xa(La.create, Ji, null, [e, t, n, r])
        );
      }
      function xa(e, t, n, r) {
        return Yr(
          e,
          t,
          n,
          (function(e) {
            var t = (function(e) {
                var t = !1,
                  n = !1;
                return 0 === Ca.size
                  ? { hasOverrides: t, hasDeprecatedOverrides: n }
                  : (e.providers.forEach(function(e) {
                      var r = Ca.get(e.token);
                      3840 & e.flags &&
                        r &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    }),
                    e.modules.forEach(function(e) {
                      Ea.forEach(function(r, o) {
                        ge(o).providedIn === e &&
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
                    var o = Ca.get(r.token);
                    o &&
                      ((r.flags = (-3841 & r.flags) | o.flags),
                      (r.deps = lr(o.deps)),
                      (r.value = o.value));
                  }
                  if (Ea.size > 0) {
                    var i = new Set(e.modules);
                    Ea.forEach(function(t, r) {
                      if (i.has(ge(r).providedIn)) {
                        var o = {
                          token: r,
                          flags: t.flags | (n ? 4096 : 0),
                          deps: lr(t.deps),
                          value: t.value,
                          index: e.providers.length
                        };
                        e.providers.push(o), (e.providersByKey[Zn(r)] = o);
                      }
                    });
                  }
                })(
                  (e = e.factory(function() {
                    return Un;
                  }))
                ),
                e)
              : e;
          })(r)
        );
      }
      var Ca = new Map(),
        Ea = new Map(),
        Sa = new Map();
      function Oa(e) {
        var t;
        Ca.set(e.token, e),
          'function' == typeof e.token &&
            (t = ge(e.token)) &&
            'function' == typeof t.providedIn &&
            Ea.set(e.token, e);
      }
      function ka(e, t) {
        var n = pr(t.viewDefFactory),
          r = pr(n.nodes[0].element.componentView);
        Sa.set(e, r);
      }
      function Aa() {
        Ca.clear(), Ea.clear(), Sa.clear();
      }
      function Na(e) {
        if (0 === Ca.size) return e;
        var t = (function(e) {
          for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
            var o = e.nodes[r];
            1 & o.flags && (n = o),
              n &&
                3840 & o.flags &&
                Ca.has(o.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(function() {
          return Un;
        });
        for (var n = 0; n < t.length; n++) r(e, t[n]);
        return e;
        function r(e, t) {
          for (var n = t + 1; n < e.nodes.length; n++) {
            var r = e.nodes[n];
            if (1 & r.flags) return;
            if (3840 & r.flags) {
              var o = r.provider,
                i = Ca.get(o.token);
              i &&
                ((r.flags = (-3841 & r.flags) | i.flags),
                (o.deps = lr(i.deps)),
                (o.value = i.value));
            }
          }
        }
      }
      function Ta(e, t, n, r, o, i, a, s, u, l, c, d, p) {
        var h = e.def.nodes[t];
        return (
          ia(e, h, n, r, o, i, a, s, u, l, c, d, p),
          224 & h.flags ? Bn(e, t).value : void 0
        );
      }
      function Pa(e, t, n, r, o, i, a, s, u, l, c, d, p) {
        var h = e.def.nodes[t];
        return (
          sa(e, h, n, r, o, i, a, s, u, l, c, d, p),
          224 & h.flags ? Bn(e, t).value : void 0
        );
      }
      function Da(e) {
        return Xa(La.detectChanges, oa, null, [e]);
      }
      function Ia(e) {
        return Xa(La.checkNoChanges, ra, null, [e]);
      }
      function Ma(e) {
        return Xa(La.destroy, la, null, [e]);
      }
      var Va,
        ja,
        Ra,
        La = (function(e) {
          return (
            (e[(e.create = 0)] = 'create'),
            (e[(e.detectChanges = 1)] = 'detectChanges'),
            (e[(e.checkNoChanges = 2)] = 'checkNoChanges'),
            (e[(e.destroy = 3)] = 'destroy'),
            (e[(e.handleEvent = 4)] = 'handleEvent'),
            e
          );
        })({});
      function Fa(e, t) {
        (ja = e), (Ra = t);
      }
      function Ba(e, t, n, r) {
        return (
          Fa(e, t), Xa(La.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function Ha(e, t) {
        if (128 & e.state) throw Mn(La[Va]);
        return (
          Fa(e, Za(e, 0)),
          e.def.updateDirectives(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var a = e.def.nodes[n];
            return (
              0 === t ? Ua(e, a, r, o) : Ga(e, a, r, o),
              16384 & a.flags && Fa(e, Za(e, n)),
              224 & a.flags ? Bn(e, a.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function za(e, t) {
        if (128 & e.state) throw Mn(La[Va]);
        return (
          Fa(e, Wa(e, 0)),
          e.def.updateRenderer(function(e, n, r) {
            for (var o = [], i = 3; i < arguments.length; i++)
              o[i - 3] = arguments[i];
            var a = e.def.nodes[n];
            return (
              0 === t ? Ua(e, a, r, o) : Ga(e, a, r, o),
              3 & a.flags && Fa(e, Wa(e, n)),
              224 & a.flags ? Bn(e, a.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Ua(e, t, n, r) {
        if (ia.apply(void 0, c([e, t, n], r))) {
          var o = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            for (var i = {}, a = 0; a < t.bindings.length; a++) {
              var s = t.bindings[a],
                u = o[a];
              8 & s.flags &&
                (i[
                  ((h = s.nonMinifiedName),
                  'ng-reflect-' +
                    h.replace(/[$@]/g, '_').replace(It, function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      return '-' + e[1].toLowerCase();
                    }))
                ] = Mt(u));
            }
            var l = t.parent,
              d = Ln(e, l.nodeIndex).renderElement;
            if (l.element.name)
              for (var p in i)
                null != (u = i[p])
                  ? e.renderer.setAttribute(d, p, u)
                  : e.renderer.removeAttribute(d, p);
            else
              e.renderer.setValue(d, 'bindings=' + JSON.stringify(i, null, 2));
          }
        }
        var h;
      }
      function Ga(e, t, n, r) {
        sa.apply(void 0, c([e, t, n], r));
      }
      function Za(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (16384 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      function Wa(e, t) {
        for (var n = t; n < e.def.nodes.length; n++) {
          var r = e.def.nodes[n];
          if (3 & r.flags && r.bindings && r.bindings.length) return n;
        }
        return null;
      }
      var qa = (function() {
        function e(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags); )
            n = n.parent;
          if (!n) for (; !n && r; ) (n = or(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        return (
          Object.defineProperty(e.prototype, 'elOrCompView', {
            get: function() {
              return (
                Ln(this.elView, this.elDef.nodeIndex).componentView || this.view
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'injector', {
            get: function() {
              return Ur(this.elView, this.elDef);
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
                Qa(this.elView, this.elDef, e);
                for (
                  var t = this.elDef.nodeIndex + 1;
                  t <= this.elDef.nodeIndex + this.elDef.childCount;
                  t++
                ) {
                  var n = this.elView.def.nodes[t];
                  20224 & n.flags && Qa(this.elView, n, e), (t += n.childCount);
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
                for (; e && !ar(e); ) e = e.parent;
                return e.parent ? Ln(e.parent, or(e).nodeIndex) : null;
              })(this.elOrCompView);
              return e ? e.renderElement : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, 'renderNode', {
            get: function() {
              return 2 & this.nodeDef.flags
                ? ir(this.view, this.nodeDef)
                : ir(this.elView, this.elDef);
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
            var i = Ya(t, n),
              a = -1,
              s = function() {
                var t;
                return ++a === i ? (t = e.error).bind.apply(t, c([e], r)) : Un;
              };
            t.factory(s),
              a < i &&
                (e.error(
                  'Illegal state: the ViewDefinitionFactory did not call the logger!'
                ),
                e.error.apply(e, c(r)));
          }),
          e
        );
      })();
      function Ya(e, t) {
        for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
        return n;
      }
      function Qa(e, t, n) {
        for (var r in t.references) n[r] = Ui(e, t, t.references[r]);
      }
      function Xa(e, t, n, r) {
        var o = Va,
          i = ja,
          a = Ra;
        try {
          Va = e;
          var s = t.apply(n, r);
          return (ja = i), (Ra = a), (Va = o), s;
        } catch (u) {
          if (Nt(u) || !ja) throw u;
          throw (function(e, t) {
            return (
              e instanceof Error || (e = new Error(e.toString())), In(e, t), e
            );
          })(u, $a());
        }
      }
      function $a() {
        return ja ? new qa(ja, Ra) : null;
      }
      var Ka = (function() {
          function e(e) {
            this.delegate = e;
          }
          return (
            (e.prototype.createRenderer = function(e, t) {
              return new Ja(this.delegate.createRenderer(e, t));
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
        Ja = (function() {
          function e(e) {
            (this.delegate = e),
              (this.debugContextFactory = $a),
              (this.data = this.delegate.data);
          }
          return (
            (e.prototype.createDebugContext = function(e) {
              return this.debugContextFactory(e);
            }),
            (e.prototype.destroyNode = function(e) {
              !(function(e) {
                Si.delete(e.nativeNode);
              })(Oi(e)),
                this.delegate.destroyNode && this.delegate.destroyNode(e);
            }),
            (e.prototype.destroy = function() {
              this.delegate.destroy();
            }),
            (e.prototype.createElement = function(e, t) {
              var n = this.delegate.createElement(e, t),
                r = this.createDebugContext(n);
              if (r) {
                var o = new Ei(n, null, r);
                (o.name = e), ki(o);
              }
              return n;
            }),
            (e.prototype.createComment = function(e) {
              var t = this.delegate.createComment(e),
                n = this.createDebugContext(t);
              return n && ki(new Ci(t, null, n)), t;
            }),
            (e.prototype.createText = function(e) {
              var t = this.delegate.createText(e),
                n = this.createDebugContext(t);
              return n && ki(new Ci(t, null, n)), t;
            }),
            (e.prototype.appendChild = function(e, t) {
              var n = Oi(e),
                r = Oi(t);
              n && r && n instanceof Ei && n.addChild(r),
                this.delegate.appendChild(e, t);
            }),
            (e.prototype.insertBefore = function(e, t, n) {
              var r = Oi(e),
                o = Oi(t),
                i = Oi(n);
              r && o && r instanceof Ei && r.insertBefore(i, o),
                this.delegate.insertBefore(e, t, n);
            }),
            (e.prototype.removeChild = function(e, t) {
              var n = Oi(e),
                r = Oi(t);
              n && r && n instanceof Ei && n.removeChild(r),
                this.delegate.removeChild(e, t);
            }),
            (e.prototype.selectRootElement = function(e, t) {
              var n = this.delegate.selectRootElement(e, t),
                r = $a();
              return r && ki(new Ei(n, null, r)), n;
            }),
            (e.prototype.setAttribute = function(e, t, n, r) {
              var o = Oi(e);
              o && o instanceof Ei && (o.attributes[r ? r + ':' + t : t] = n),
                this.delegate.setAttribute(e, t, n, r);
            }),
            (e.prototype.removeAttribute = function(e, t, n) {
              var r = Oi(e);
              r &&
                r instanceof Ei &&
                (r.attributes[n ? n + ':' + t : t] = null),
                this.delegate.removeAttribute(e, t, n);
            }),
            (e.prototype.addClass = function(e, t) {
              var n = Oi(e);
              n && n instanceof Ei && (n.classes[t] = !0),
                this.delegate.addClass(e, t);
            }),
            (e.prototype.removeClass = function(e, t) {
              var n = Oi(e);
              n && n instanceof Ei && (n.classes[t] = !1),
                this.delegate.removeClass(e, t);
            }),
            (e.prototype.setStyle = function(e, t, n, r) {
              var o = Oi(e);
              o && o instanceof Ei && (o.styles[t] = n),
                this.delegate.setStyle(e, t, n, r);
            }),
            (e.prototype.removeStyle = function(e, t, n) {
              var r = Oi(e);
              r && r instanceof Ei && (r.styles[t] = null),
                this.delegate.removeStyle(e, t, n);
            }),
            (e.prototype.setProperty = function(e, t, n) {
              var r = Oi(e);
              r && r instanceof Ei && (r.properties[t] = n),
                this.delegate.setProperty(e, t, n);
            }),
            (e.prototype.listen = function(e, t, n) {
              if ('string' != typeof e) {
                var r = Oi(e);
                r && r.listeners.push(new xi(t, n));
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
      function es(e, t, n) {
        return new ts(e, t, n);
      }
      var ts = (function(e) {
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
                if (!va) {
                  va = !0;
                  var e = rt()
                    ? {
                        setCurrentNode: Fa,
                        createRootView: ma,
                        createEmbeddedView: _a,
                        createComponentView: wa,
                        createNgModuleRef: xa,
                        overrideProvider: Oa,
                        overrideComponentView: ka,
                        clearOverrides: Aa,
                        checkAndUpdateView: Da,
                        checkNoChangesView: Ia,
                        destroyView: Ma,
                        createDebugContext: function(e, t) {
                          return new qa(e, t);
                        },
                        handleEvent: Ba,
                        updateDirectives: Ha,
                        updateRenderer: za
                      }
                    : {
                        setCurrentNode: function() {},
                        createRootView: ga,
                        createEmbeddedView: $i,
                        createComponentView: Ji,
                        createNgModuleRef: Yr,
                        overrideProvider: Un,
                        overrideComponentView: Un,
                        clearOverrides: Un,
                        checkAndUpdateView: oa,
                        checkNoChangesView: ra,
                        destroyView: la,
                        createDebugContext: function(e, t) {
                          return new qa(e, t);
                        },
                        handleEvent: function(e, t, n, r) {
                          return e.def.handleEvent(e, t, n, r);
                        },
                        updateDirectives: function(e, t) {
                          return e.def.updateDirectives(0 === t ? Ta : Pa, e);
                        },
                        updateRenderer: function(e, t) {
                          return e.def.updateRenderer(0 === t ? Ta : Pa, e);
                        }
                      };
                  (zn.setCurrentNode = e.setCurrentNode),
                    (zn.createRootView = e.createRootView),
                    (zn.createEmbeddedView = e.createEmbeddedView),
                    (zn.createComponentView = e.createComponentView),
                    (zn.createNgModuleRef = e.createNgModuleRef),
                    (zn.overrideProvider = e.overrideProvider),
                    (zn.overrideComponentView = e.overrideComponentView),
                    (zn.clearOverrides = e.clearOverrides),
                    (zn.checkAndUpdateView = e.checkAndUpdateView),
                    (zn.checkNoChangesView = e.checkNoChangesView),
                    (zn.destroyView = e.destroyView),
                    (zn.resolveDep = vo),
                    (zn.createDebugContext = e.createDebugContext),
                    (zn.handleEvent = e.handleEvent),
                    (zn.updateDirectives = e.updateDirectives),
                    (zn.updateRenderer = e.updateRenderer),
                    (zn.dirtyParentQueries = Bi);
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
              })(pr(this._ngModuleDefFactory));
              return zn.createNgModuleRef(
                this.moduleType,
                e || ze.NULL,
                this._bootstrapComponents,
                t
              );
            }),
            t
          );
        })(en),
        ns = (function() {
          return function() {};
        })(),
        rs = n('Gz50'),
        os = (function() {
          return function() {
            this.charts = [
              { data: rs.Bar, type: 'Bar' },
              { data: rs.Line, type: 'Line' },
              { data: rs.Line2, type: 'Line' },
              {
                data: rs.Scatter,
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
                data: rs.LineWithArea,
                options: { low: 0, showArea: !0 },
                type: 'Line'
              },
              {
                data: rs['Bi-PolarBar'],
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
                data: rs.DistributedSeries,
                options: { distributeSeries: !0 },
                type: 'Bar'
              },
              {
                data: rs.Pie,
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
                data: rs.Pie,
                options: { donut: !0, showLabel: !1 },
                type: 'Pie'
              }
            ];
          };
        })(),
        is = n('BeBh'),
        as = (function() {
          function e(e) {
            (this.elementRef = e), (this.initialized = new Ao());
          }
          return (
            (e.prototype.ngOnInit = function() {
              this.type && this.data && this.renderChart();
            }),
            (e.prototype.ngOnChanges = function(e) {
              this.update(e);
            }),
            (e.prototype.ngOnDestroy = function() {
              this.chart && (this.chart.detach(), (this.chart = null));
            }),
            (e.prototype.renderChart = function() {
              var e = this.elementRef.nativeElement;
              if (!(this.type in is))
                throw new Error(this.type + ' is not a valid chart type');
              (this.chart = is[this.type](
                e,
                this.data,
                this.options,
                this.responsiveOptions
              )),
                this.events && this.bindEvents(),
                this.initialized.emit(this.chart);
            }),
            (e.prototype.update = function(e) {
              this.type &&
                this.data &&
                (!this.chart || 'type' in e
                  ? this.renderChart()
                  : (e.data || e.options) &&
                    this.chart.update(this.data, this.options));
            }),
            (e.prototype.bindEvents = function() {
              var e, t;
              try {
                for (
                  var n = u(Object.keys(this.events)), r = n.next();
                  !r.done;
                  r = n.next()
                ) {
                  var o = r.value;
                  this.chart.on(o, this.events[o]);
                }
              } catch (i) {
                e = { error: i };
              } finally {
                try {
                  r && !r.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            e
          );
        })(),
        ss = (function() {
          return function() {};
        })(),
        us = Qn({
          encapsulation: 0,
          styles: ['[_nghost-%COMP%] {\n        display: block;\n      }'],
          data: {}
        });
      function ls(e) {
        return Yi(0, [], null, null);
      }
      var cs = (function() {
          return function() {};
        })(),
        ds = (function(e) {
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
        ps = (function(e) {
          return (
            (e[(e.Format = 0)] = 'Format'),
            (e[(e.Standalone = 1)] = 'Standalone'),
            e
          );
        })({}),
        hs = (function(e) {
          return (
            (e[(e.Narrow = 0)] = 'Narrow'),
            (e[(e.Abbreviated = 1)] = 'Abbreviated'),
            (e[(e.Wide = 2)] = 'Wide'),
            (e[(e.Short = 3)] = 'Short'),
            e
          );
        })({}),
        fs = (function(e) {
          return (
            (e[(e.Short = 0)] = 'Short'),
            (e[(e.Medium = 1)] = 'Medium'),
            (e[(e.Long = 2)] = 'Long'),
            (e[(e.Full = 3)] = 'Full'),
            e
          );
        })({}),
        ys = (function(e) {
          return (
            (e[(e.Decimal = 0)] = 'Decimal'),
            (e[(e.Group = 1)] = 'Group'),
            (e[(e.List = 2)] = 'List'),
            (e[(e.PercentSign = 3)] = 'PercentSign'),
            (e[(e.PlusSign = 4)] = 'PlusSign'),
            (e[(e.MinusSign = 5)] = 'MinusSign'),
            (e[(e.Exponential = 6)] = 'Exponential'),
            (e[(e.SuperscriptingExponent = 7)] = 'SuperscriptingExponent'),
            (e[(e.PerMille = 8)] = 'PerMille'),
            (e[(e[1 / 0] = 9)] = 'Infinity'),
            (e[(e.NaN = 10)] = 'NaN'),
            (e[(e.TimeSeparator = 11)] = 'TimeSeparator'),
            (e[(e.CurrencyDecimal = 12)] = 'CurrencyDecimal'),
            (e[(e.CurrencyGroup = 13)] = 'CurrencyGroup'),
            e
          );
        })({});
      function vs(e, t) {
        return ws(ko(e)[Eo.DateFormat], t);
      }
      function gs(e, t) {
        return ws(ko(e)[Eo.TimeFormat], t);
      }
      function ms(e, t) {
        return ws(ko(e)[Eo.DateTimeFormat], t);
      }
      function bs(e, t) {
        var n = ko(e),
          r = n[Eo.NumberSymbols][t];
        if (void 0 === r) {
          if (t === ys.CurrencyDecimal) return n[Eo.NumberSymbols][ys.Decimal];
          if (t === ys.CurrencyGroup) return n[Eo.NumberSymbols][ys.Group];
        }
        return r;
      }
      function _s(e) {
        if (!e[Eo.ExtraData])
          throw new Error(
            'Missing extra locale data for the locale "' +
              e[Eo.LocaleId] +
              '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.'
          );
      }
      function ws(e, t) {
        for (var n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
        throw new Error('Locale data API: locale data undefined');
      }
      function xs(e) {
        var t = l(e.split(':'), 2);
        return { hours: +t[0], minutes: +t[1] };
      }
      var Cs = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Es = {},
        Ss = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
        Os = (function(e) {
          return (
            (e[(e.Short = 0)] = 'Short'),
            (e[(e.ShortGMT = 1)] = 'ShortGMT'),
            (e[(e.Long = 2)] = 'Long'),
            (e[(e.Extended = 3)] = 'Extended'),
            e
          );
        })({}),
        ks = (function(e) {
          return (
            (e[(e.FullYear = 0)] = 'FullYear'),
            (e[(e.Month = 1)] = 'Month'),
            (e[(e.Date = 2)] = 'Date'),
            (e[(e.Hours = 3)] = 'Hours'),
            (e[(e.Minutes = 4)] = 'Minutes'),
            (e[(e.Seconds = 5)] = 'Seconds'),
            (e[(e.FractionalSeconds = 6)] = 'FractionalSeconds'),
            (e[(e.Day = 7)] = 'Day'),
            e
          );
        })({}),
        As = (function(e) {
          return (
            (e[(e.DayPeriods = 0)] = 'DayPeriods'),
            (e[(e.Days = 1)] = 'Days'),
            (e[(e.Months = 2)] = 'Months'),
            (e[(e.Eras = 3)] = 'Eras'),
            e
          );
        })({});
      function Ns(e, t) {
        return (
          t &&
            (e = e.replace(/\{([^}]+)}/g, function(e, n) {
              return null != t && n in t ? t[n] : e;
            })),
          e
        );
      }
      function Ts(e, t, n, r, o) {
        void 0 === n && (n = '-');
        var i = '';
        (e < 0 || (o && e <= 0)) && (o ? (e = 1 - e) : ((e = -e), (i = n)));
        for (var a = String(e); a.length < t; ) a = '0' + a;
        return r && (a = a.substr(a.length - t)), i + a;
      }
      function Ps(e, t, n, r, o) {
        return (
          void 0 === n && (n = 0),
          void 0 === r && (r = !1),
          void 0 === o && (o = !1),
          function(i, a) {
            var s,
              u = (function(e, t) {
                switch (e) {
                  case ks.FullYear:
                    return t.getFullYear();
                  case ks.Month:
                    return t.getMonth();
                  case ks.Date:
                    return t.getDate();
                  case ks.Hours:
                    return t.getHours();
                  case ks.Minutes:
                    return t.getMinutes();
                  case ks.Seconds:
                    return t.getSeconds();
                  case ks.FractionalSeconds:
                    return t.getMilliseconds();
                  case ks.Day:
                    return t.getDay();
                  default:
                    throw new Error('Unknown DateType value "' + e + '".');
                }
              })(e, i);
            if (((n > 0 || u > -n) && (u += n), e === ks.Hours))
              0 === u && -12 === n && (u = 12);
            else if (e === ks.FractionalSeconds)
              return (s = t), Ts(u, 3).substr(0, s);
            var l = bs(a, ys.MinusSign);
            return Ts(u, t, l, r, o);
          }
        );
      }
      function Ds(e, t, n, r) {
        return (
          void 0 === n && (n = ps.Format),
          void 0 === r && (r = !1),
          function(o, i) {
            return (function(e, t, n, r, o, i) {
              switch (n) {
                case As.Months:
                  return (function(e, t, n) {
                    var r = ko(e),
                      o = ws([r[Eo.MonthsFormat], r[Eo.MonthsStandalone]], t);
                    return ws(o, n);
                  })(t, o, r)[e.getMonth()];
                case As.Days:
                  return (function(e, t, n) {
                    var r = ko(e),
                      o = ws([r[Eo.DaysFormat], r[Eo.DaysStandalone]], t);
                    return ws(o, n);
                  })(t, o, r)[e.getDay()];
                case As.DayPeriods:
                  var a = e.getHours(),
                    s = e.getMinutes();
                  if (i) {
                    var u,
                      l = (function(e) {
                        var t = ko(e);
                        return (
                          _s(t),
                          (t[Eo.ExtraData][2] || []).map(function(e) {
                            return 'string' == typeof e
                              ? xs(e)
                              : [xs(e[0]), xs(e[1])];
                          })
                        );
                      })(t),
                      c = (function(e, t, n) {
                        var r = ko(e);
                        _s(r);
                        var o =
                          ws([r[Eo.ExtraData][0], r[Eo.ExtraData][1]], t) || [];
                        return ws(o, n) || [];
                      })(t, o, r);
                    if (
                      (l.forEach(function(e, t) {
                        if (Array.isArray(e)) {
                          var n = e[0],
                            r = e[1],
                            o = r.hours;
                          a >= n.hours &&
                            s >= n.minutes &&
                            (a < o || (a === o && s < r.minutes)) &&
                            (u = c[t]);
                        } else e.hours === a && e.minutes === s && (u = c[t]);
                      }),
                      u)
                    )
                      return u;
                  }
                  return (function(e, t, n) {
                    var r = ko(e),
                      o = ws(
                        [r[Eo.DayPeriodsFormat], r[Eo.DayPeriodsStandalone]],
                        t
                      );
                    return ws(o, n);
                  })(t, o, r)[a < 12 ? 0 : 1];
                case As.Eras:
                  return (function(e, t) {
                    return ws(ko(e)[Eo.Eras], t);
                  })(t, r)[e.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error('unexpected translation type ' + n);
              }
            })(o, i, e, t, n, r);
          }
        );
      }
      function Is(e) {
        return function(t, n, r) {
          var o = -1 * r,
            i = bs(n, ys.MinusSign),
            a = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
          switch (e) {
            case Os.Short:
              return (
                (o >= 0 ? '+' : '') + Ts(a, 2, i) + Ts(Math.abs(o % 60), 2, i)
              );
            case Os.ShortGMT:
              return 'GMT' + (o >= 0 ? '+' : '') + Ts(a, 1, i);
            case Os.Long:
              return (
                'GMT' +
                (o >= 0 ? '+' : '') +
                Ts(a, 2, i) +
                ':' +
                Ts(Math.abs(o % 60), 2, i)
              );
            case Os.Extended:
              return 0 === r
                ? 'Z'
                : (o >= 0 ? '+' : '') +
                    Ts(a, 2, i) +
                    ':' +
                    Ts(Math.abs(o % 60), 2, i);
            default:
              throw new Error('Unknown zone width "' + e + '"');
          }
        };
      }
      var Ms = 0,
        Vs = 4;
      function js(e, t) {
        return (
          void 0 === t && (t = !1),
          function(n, r) {
            var o, i, a, s;
            if (t) {
              var u = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                l = n.getDate();
              o = 1 + Math.floor((l + u) / 7);
            } else {
              var c =
                  ((a = n.getFullYear()),
                  (s = new Date(a, Ms, 1).getDay()),
                  new Date(a, 0, 1 + (s <= Vs ? Vs : Vs + 7) - s)),
                d =
                  ((i = n),
                  new Date(
                    i.getFullYear(),
                    i.getMonth(),
                    i.getDate() + (Vs - i.getDay())
                  )).getTime() - c.getTime();
              o = 1 + Math.round(d / 6048e5);
            }
            return Ts(o, e, bs(r, ys.MinusSign));
          }
        );
      }
      var Rs = {};
      function Ls(e, t) {
        e = e.replace(/:/g, '');
        var n = Date.parse('Jan 01, 1970 00:00:00 ' + e) / 6e4;
        return isNaN(n) ? t : n;
      }
      function Fs(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      var Bs = new Ne('UseV4Plurals'),
        Hs = (function() {
          return function() {};
        })(),
        zs = (function(e) {
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
                      return ko(e)[Eo.PluralCase];
                    })(t || this.locale)(e)
              ) {
                case ds.Zero:
                  return 'zero';
                case ds.One:
                  return 'one';
                case ds.Two:
                  return 'two';
                case ds.Few:
                  return 'few';
                case ds.Many:
                  return 'many';
                default:
                  return 'other';
              }
            }),
            t
          );
        })(Hs),
        Us = (function() {
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
        Gs = (function() {
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
                rt() &&
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
                      new Us(null, t._ngForOf, -1, -1),
                      o
                    ),
                    a = new Zs(e, i);
                  n.push(a);
                } else null == o ? t._viewContainer.remove(r) : ((i = t._viewContainer.get(r)), t._viewContainer.move(i, o), (a = new Zs(e, i)), n.push(a));
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
        Zs = (function() {
          return function(e, t) {
            (this.record = e), (this.view = t);
          };
        })(),
        Ws = (function() {
          function e() {}
          return (
            (e.prototype.createSubscription = function(e, t) {
              return e.subscribe({
                next: t,
                error: function(e) {
                  throw e;
                }
              });
            }),
            (e.prototype.dispose = function(e) {
              e.unsubscribe();
            }),
            (e.prototype.onDestroy = function(e) {
              e.unsubscribe();
            }),
            e
          );
        })(),
        qs = new ((function() {
          function e() {}
          return (
            (e.prototype.createSubscription = function(e, t) {
              return e.then(t, function(e) {
                throw e;
              });
            }),
            (e.prototype.dispose = function(e) {}),
            (e.prototype.onDestroy = function(e) {}),
            e
          );
        })())(),
        Ys = new Ws(),
        Qs = (function() {
          function e(e) {
            (this._ref = e),
              (this._latestValue = null),
              (this._latestReturnedValue = null),
              (this._subscription = null),
              (this._obj = null),
              (this._strategy = null);
          }
          var t;
          return (
            (t = e),
            (e.prototype.ngOnDestroy = function() {
              this._subscription && this._dispose();
            }),
            (e.prototype.transform = function(e) {
              return this._obj
                ? e !== this._obj
                  ? (this._dispose(), this.transform(e))
                  : Rt(this._latestValue, this._latestReturnedValue)
                  ? this._latestReturnedValue
                  : ((this._latestReturnedValue = this._latestValue),
                    Ft.wrap(this._latestValue))
                : (e && this._subscribe(e),
                  (this._latestReturnedValue = this._latestValue),
                  this._latestValue);
            }),
            (e.prototype._subscribe = function(e) {
              var t = this;
              (this._obj = e),
                (this._strategy = this._selectStrategy(e)),
                (this._subscription = this._strategy.createSubscription(
                  e,
                  function(n) {
                    return t._updateLatestValue(e, n);
                  }
                ));
            }),
            (e.prototype._selectStrategy = function(e) {
              if (zt(e)) return qs;
              if (Ut(e)) return Ys;
              throw Error(
                "InvalidPipeArgument: '" + e + "' for pipe '" + be(t) + "'"
              );
            }),
            (e.prototype._dispose = function() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._latestReturnedValue = null),
                (this._subscription = null),
                (this._obj = null);
            }),
            (e.prototype._updateLatestValue = function(e, t) {
              e === this._obj &&
                ((this._latestValue = t), this._ref.markForCheck());
            }),
            e
          );
        })(),
        Xs = (function() {
          return function() {};
        })(),
        $s = new Ne('DocumentToken'),
        Ks = 'server';
      function Js() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e[e.length - 1];
        return j(n) ? (e.pop(), Y(e, n)) : ee(e);
      }
      var eu = (function(e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
          }
          return (
            o(t, e),
            (t.prototype.schedule = function(e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function(e, t, n) {
              return (
                void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n)
              );
            }),
            (t.prototype.recycleAsyncId = function(e, t, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return t;
              clearInterval(t);
            }),
            (t.prototype.execute = function(e, t) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              var n = this._execute(e, t);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function(e, t) {
              var n = !1,
                r = void 0;
              try {
                this.work(e);
              } catch (o) {
                (n = !0), (r = (!!o && o) || new Error(o));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (t.prototype._unsubscribe = function() {
              var e = this.id,
                t = this.scheduler,
                n = t.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != e && (this.id = this.recycleAsyncId(t, e, null)),
                (this.delay = null);
            }),
            t
          );
        })(
          (function(e) {
            function t(t, n) {
              return e.call(this) || this;
            }
            return (
              o(t, e),
              (t.prototype.schedule = function(e, t) {
                return void 0 === t && (t = 0), this;
              }),
              t
            );
          })(v)
        ),
        tu = (function() {
          function e(t, n) {
            void 0 === n && (n = e.now),
              (this.SchedulerAction = t),
              (this.now = n);
          }
          return (
            (e.prototype.schedule = function(e, t, n) {
              return (
                void 0 === t && (t = 0),
                new this.SchedulerAction(this, e).schedule(n, t)
              );
            }),
            (e.now = function() {
              return Date.now();
            }),
            e
          );
        })(),
        nu = new ((function(e) {
          function t(n, r) {
            void 0 === r && (r = tu.now);
            var o =
              e.call(this, n, function() {
                return t.delegate && t.delegate !== o ? t.delegate.now() : r();
              }) || this;
            return (o.actions = []), (o.active = !1), (o.scheduled = void 0), o;
          }
          return (
            o(t, e),
            (t.prototype.schedule = function(n, r, o) {
              return (
                void 0 === r && (r = 0),
                t.delegate && t.delegate !== this
                  ? t.delegate.schedule(n, r, o)
                  : e.prototype.schedule.call(this, n, r, o)
              );
            }),
            (t.prototype.flush = function(e) {
              var t = this.actions;
              if (this.active) t.push(e);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this.active = !1), n)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw n;
                }
              }
            }),
            t
          );
        })(tu))(eu),
        ru = new A(function(e) {
          return e.complete();
        }),
        ou = (function() {
          function e(e, t, n) {
            (this.kind = e),
              (this.value = t),
              (this.error = n),
              (this.hasValue = 'N' === e);
          }
          return (
            (e.prototype.observe = function(e) {
              switch (this.kind) {
                case 'N':
                  return e.next && e.next(this.value);
                case 'E':
                  return e.error && e.error(this.error);
                case 'C':
                  return e.complete && e.complete();
              }
            }),
            (e.prototype.do = function(e, t, n) {
              switch (this.kind) {
                case 'N':
                  return e && e(this.value);
                case 'E':
                  return t && t(this.error);
                case 'C':
                  return n && n();
              }
            }),
            (e.prototype.accept = function(e, t, n) {
              return e && 'function' == typeof e.next
                ? this.observe(e)
                : this.do(e, t, n);
            }),
            (e.prototype.toObservable = function() {
              var e;
              switch (this.kind) {
                case 'N':
                  return Js(this.value);
                case 'E':
                  return (
                    (e = this.error),
                    new A(function(t) {
                      return t.error(e);
                    })
                  );
                case 'C':
                  return ru;
              }
              throw new Error('unexpected notification kind value');
            }),
            (e.createNext = function(t) {
              return void 0 !== t
                ? new e('N', t)
                : e.undefinedValueNotification;
            }),
            (e.createError = function(t) {
              return new e('E', void 0, t);
            }),
            (e.createComplete = function() {
              return e.completeNotification;
            }),
            (e.completeNotification = new e('C')),
            (e.undefinedValueNotification = new e('N', void 0)),
            e
          );
        })();
      function iu(e, t) {
        void 0 === t && (t = nu);
        var n,
          r =
            (n = e) instanceof Date && !isNaN(+n) ? +e - t.now() : Math.abs(e);
        return function(e) {
          return e.lift(new au(r, t));
        };
      }
      var au = (function() {
          function e(e, t) {
            (this.delay = e), (this.scheduler = t);
          }
          return (
            (e.prototype.call = function(e, t) {
              return t.subscribe(new su(e, this.delay, this.scheduler));
            }),
            e
          );
        })(),
        su = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (
              (o.delay = n),
              (o.scheduler = r),
              (o.queue = []),
              (o.active = !1),
              (o.errored = !1),
              o
            );
          }
          return (
            o(t, e),
            (t.dispatch = function(e) {
              for (
                var t = e.source,
                  n = t.queue,
                  r = e.scheduler,
                  o = e.destination;
                n.length > 0 && n[0].time - r.now() <= 0;

              )
                n.shift().notification.observe(o);
              if (n.length > 0) {
                var i = Math.max(0, n[0].time - r.now());
                this.schedule(e, i);
              } else this.unsubscribe(), (t.active = !1);
            }),
            (t.prototype._schedule = function(e) {
              (this.active = !0),
                this.destination.add(
                  e.schedule(t.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: e
                  })
                );
            }),
            (t.prototype.scheduleNotification = function(e) {
              if (!0 !== this.errored) {
                var t = this.scheduler,
                  n = new uu(t.now() + this.delay, e);
                this.queue.push(n), !1 === this.active && this._schedule(t);
              }
            }),
            (t.prototype._next = function(e) {
              this.scheduleNotification(ou.createNext(e));
            }),
            (t.prototype._error = function(e) {
              (this.errored = !0),
                (this.queue = []),
                this.destination.error(e),
                this.unsubscribe();
            }),
            (t.prototype._complete = function() {
              this.scheduleNotification(ou.createComplete()),
                this.unsubscribe();
            }),
            t
          );
        })(C),
        uu = (function() {
          return function(e, t) {
            (this.time = e), (this.notification = t);
          };
        })();
      function lu(e) {
        return !d(e) && e - parseFloat(e) + 1 >= 0;
      }
      function cu(e) {
        var t = e.index,
          n = e.period,
          r = e.subscriber;
        if ((r.next(t), !r.closed)) {
          if (-1 === n) return r.complete();
          (e.index = t + 1), this.schedule(e, n);
        }
      }
      var du = function() {
        return (du =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function pu(e, t) {
        return Math.floor(Math.random() * (t - e)) + e;
      }
      var hu = (function() {
          function e() {
            var e = this;
            (this.data = { labels: [], series: [[]] }),
              (this.type = 'Bar'),
              (this.timerSubscription = (function(e, t, n) {
                void 0 === e && (e = 0);
                var r = -1;
                return (
                  lu(2500)
                    ? (r = Number(2500) < 1 ? 1 : Number(2500))
                    : j(2500) && (n = 2500),
                  j(n) || (n = nu),
                  new A(function(t) {
                    var o = lu(e) ? e : +e - n.now();
                    return n.schedule(cu, o, {
                      index: 0,
                      period: r,
                      subscriber: t
                    });
                  })
                );
              })(0).subscribe(function() {
                return e.updateData();
              }));
          }
          return (
            (e.prototype.updateData = function() {
              var e = (function(e, t, n, r) {
                  var o = (function(e) {
                    if (Fs(e)) return e;
                    if ('number' == typeof e && !isNaN(e)) return new Date(e);
                    if ('string' == typeof e) {
                      e = e.trim();
                      var t,
                        n = parseFloat(e);
                      if (!isNaN(e - n)) return new Date(n);
                      if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                        var r = l(
                          e.split('-').map(function(e) {
                            return +e;
                          }),
                          3
                        );
                        return new Date(r[0], r[1] - 1, r[2]);
                      }
                      if ((t = e.match(Cs)))
                        return (function(e) {
                          var t = new Date(0),
                            n = 0,
                            r = 0,
                            o = e[8] ? t.setUTCFullYear : t.setFullYear,
                            i = e[8] ? t.setUTCHours : t.setHours;
                          e[9] &&
                            ((n = Number(e[9] + e[10])),
                            (r = Number(e[9] + e[11]))),
                            o.call(
                              t,
                              Number(e[1]),
                              Number(e[2]) - 1,
                              Number(e[3])
                            );
                          var a = Number(e[4] || 0) - n,
                            s = Number(e[5] || 0) - r,
                            u = Number(e[6] || 0),
                            l = Math.round(
                              1e3 * parseFloat('0.' + (e[7] || 0))
                            );
                          return i.call(t, a, s, u, l), t;
                        })(t);
                    }
                    var o = new Date(e);
                    if (!Fs(o))
                      throw new Error(
                        'Unable to convert "' + e + '" into a date'
                      );
                    return o;
                  })(e);
                  t =
                    (function e(t, n) {
                      var r = (function(e) {
                        return ko(e)[Eo.LocaleId];
                      })(t);
                      if (((Es[r] = Es[r] || {}), Es[r][n])) return Es[r][n];
                      var o = '';
                      switch (n) {
                        case 'shortDate':
                          o = vs(t, fs.Short);
                          break;
                        case 'mediumDate':
                          o = vs(t, fs.Medium);
                          break;
                        case 'longDate':
                          o = vs(t, fs.Long);
                          break;
                        case 'fullDate':
                          o = vs(t, fs.Full);
                          break;
                        case 'shortTime':
                          o = gs(t, fs.Short);
                          break;
                        case 'mediumTime':
                          o = gs(t, fs.Medium);
                          break;
                        case 'longTime':
                          o = gs(t, fs.Long);
                          break;
                        case 'fullTime':
                          o = gs(t, fs.Full);
                          break;
                        case 'short':
                          var i = e(t, 'shortTime'),
                            a = e(t, 'shortDate');
                          o = Ns(ms(t, fs.Short), [i, a]);
                          break;
                        case 'medium':
                          var s = e(t, 'mediumTime'),
                            u = e(t, 'mediumDate');
                          o = Ns(ms(t, fs.Medium), [s, u]);
                          break;
                        case 'long':
                          var l = e(t, 'longTime'),
                            c = e(t, 'longDate');
                          o = Ns(ms(t, fs.Long), [l, c]);
                          break;
                        case 'full':
                          var d = e(t, 'fullTime'),
                            p = e(t, 'fullDate');
                          o = Ns(ms(t, fs.Full), [d, p]);
                      }
                      return o && (Es[r][n] = o), o;
                    })(n, t) || t;
                  for (var i, a = []; t; ) {
                    if (!(i = Ss.exec(t))) {
                      a.push(t);
                      break;
                    }
                    var s = (a = a.concat(i.slice(1))).pop();
                    if (!s) break;
                    t = s;
                  }
                  var u = o.getTimezoneOffset();
                  r &&
                    ((u = Ls(r, u)),
                    (o = (function(e, t, n) {
                      var r = e.getTimezoneOffset();
                      return (function(e, t) {
                        return (
                          (e = new Date(e.getTime())).setMinutes(
                            e.getMinutes() + t
                          ),
                          e
                        );
                      })(e, -1 * (Ls(t, r) - r));
                    })(o, r)));
                  var c = '';
                  return (
                    a.forEach(function(e) {
                      var t = (function(e) {
                        if (Rs[e]) return Rs[e];
                        var t;
                        switch (e) {
                          case 'G':
                          case 'GG':
                          case 'GGG':
                            t = Ds(As.Eras, hs.Abbreviated);
                            break;
                          case 'GGGG':
                            t = Ds(As.Eras, hs.Wide);
                            break;
                          case 'GGGGG':
                            t = Ds(As.Eras, hs.Narrow);
                            break;
                          case 'y':
                            t = Ps(ks.FullYear, 1, 0, !1, !0);
                            break;
                          case 'yy':
                            t = Ps(ks.FullYear, 2, 0, !0, !0);
                            break;
                          case 'yyy':
                            t = Ps(ks.FullYear, 3, 0, !1, !0);
                            break;
                          case 'yyyy':
                            t = Ps(ks.FullYear, 4, 0, !1, !0);
                            break;
                          case 'M':
                          case 'L':
                            t = Ps(ks.Month, 1, 1);
                            break;
                          case 'MM':
                          case 'LL':
                            t = Ps(ks.Month, 2, 1);
                            break;
                          case 'MMM':
                            t = Ds(As.Months, hs.Abbreviated);
                            break;
                          case 'MMMM':
                            t = Ds(As.Months, hs.Wide);
                            break;
                          case 'MMMMM':
                            t = Ds(As.Months, hs.Narrow);
                            break;
                          case 'LLL':
                            t = Ds(As.Months, hs.Abbreviated, ps.Standalone);
                            break;
                          case 'LLLL':
                            t = Ds(As.Months, hs.Wide, ps.Standalone);
                            break;
                          case 'LLLLL':
                            t = Ds(As.Months, hs.Narrow, ps.Standalone);
                            break;
                          case 'w':
                            t = js(1);
                            break;
                          case 'ww':
                            t = js(2);
                            break;
                          case 'W':
                            t = js(1, !0);
                            break;
                          case 'd':
                            t = Ps(ks.Date, 1);
                            break;
                          case 'dd':
                            t = Ps(ks.Date, 2);
                            break;
                          case 'E':
                          case 'EE':
                          case 'EEE':
                            t = Ds(As.Days, hs.Abbreviated);
                            break;
                          case 'EEEE':
                            t = Ds(As.Days, hs.Wide);
                            break;
                          case 'EEEEE':
                            t = Ds(As.Days, hs.Narrow);
                            break;
                          case 'EEEEEE':
                            t = Ds(As.Days, hs.Short);
                            break;
                          case 'a':
                          case 'aa':
                          case 'aaa':
                            t = Ds(As.DayPeriods, hs.Abbreviated);
                            break;
                          case 'aaaa':
                            t = Ds(As.DayPeriods, hs.Wide);
                            break;
                          case 'aaaaa':
                            t = Ds(As.DayPeriods, hs.Narrow);
                            break;
                          case 'b':
                          case 'bb':
                          case 'bbb':
                            t = Ds(
                              As.DayPeriods,
                              hs.Abbreviated,
                              ps.Standalone,
                              !0
                            );
                            break;
                          case 'bbbb':
                            t = Ds(As.DayPeriods, hs.Wide, ps.Standalone, !0);
                            break;
                          case 'bbbbb':
                            t = Ds(As.DayPeriods, hs.Narrow, ps.Standalone, !0);
                            break;
                          case 'B':
                          case 'BB':
                          case 'BBB':
                            t = Ds(
                              As.DayPeriods,
                              hs.Abbreviated,
                              ps.Format,
                              !0
                            );
                            break;
                          case 'BBBB':
                            t = Ds(As.DayPeriods, hs.Wide, ps.Format, !0);
                            break;
                          case 'BBBBB':
                            t = Ds(As.DayPeriods, hs.Narrow, ps.Format, !0);
                            break;
                          case 'h':
                            t = Ps(ks.Hours, 1, -12);
                            break;
                          case 'hh':
                            t = Ps(ks.Hours, 2, -12);
                            break;
                          case 'H':
                            t = Ps(ks.Hours, 1);
                            break;
                          case 'HH':
                            t = Ps(ks.Hours, 2);
                            break;
                          case 'm':
                            t = Ps(ks.Minutes, 1);
                            break;
                          case 'mm':
                            t = Ps(ks.Minutes, 2);
                            break;
                          case 's':
                            t = Ps(ks.Seconds, 1);
                            break;
                          case 'ss':
                            t = Ps(ks.Seconds, 2);
                            break;
                          case 'S':
                            t = Ps(ks.FractionalSeconds, 1);
                            break;
                          case 'SS':
                            t = Ps(ks.FractionalSeconds, 2);
                            break;
                          case 'SSS':
                            t = Ps(ks.FractionalSeconds, 3);
                            break;
                          case 'Z':
                          case 'ZZ':
                          case 'ZZZ':
                            t = Is(Os.Short);
                            break;
                          case 'ZZZZZ':
                            t = Is(Os.Extended);
                            break;
                          case 'O':
                          case 'OO':
                          case 'OOO':
                          case 'z':
                          case 'zz':
                          case 'zzz':
                            t = Is(Os.ShortGMT);
                            break;
                          case 'OOOO':
                          case 'ZZZZ':
                          case 'zzzz':
                            t = Is(Os.Long);
                            break;
                          default:
                            return null;
                        }
                        return (Rs[e] = t), t;
                      })(e);
                      c += t
                        ? t(o, n, u)
                        : "''" === e
                        ? "'"
                        : e.replace(/(^'|'$)/g, '').replace(/''/g, "'");
                    }),
                    c
                  );
                })(new Date(), 'HH:mm:ss', 'en'),
                t = pu(1, 40),
                n = this.data.series[0],
                r = this.data.labels;
              r.push(e),
                n.push(t),
                (this.data.labels = r.slice(-9)),
                (this.data.series[0] = n.slice(-9)),
                (this.data = du({}, this.data));
            }),
            (e.prototype.ngOnDestroy = function() {
              this.timerSubscription.unsubscribe();
            }),
            e
          );
        })(),
        fu = n('Gz50'),
        yu = (function() {
          return function() {
            (this.data$ = Js(fu.Pie).pipe(iu(pu(1e3, 3e3)))),
              (this.type$ = Js('Pie').pipe(iu(pu(1e3, 3e3))));
          };
        })(),
        vu = Qn({ encapsulation: 2, styles: [], data: {} });
      function gu(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(0, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), Zi(-1, null, ['Async'])),
            (e()(),
            Vi(
              2,
              0,
              null,
              null,
              3,
              'x-chartist',
              [],
              null,
              null,
              null,
              ls,
              us
            )),
            oo(
              3,
              770048,
              null,
              0,
              as,
              [nn],
              { data: [0, 'data'], type: [1, 'type'] },
              null
            ),
            io(131072, Qs, [Cn]),
            io(131072, Qs, [Cn])
          ],
          function(e, t) {
            var n = t.component;
            e(
              t,
              3,
              0,
              Wn(t, 3, 0, Zr(t, 4).transform(n.data$)),
              Wn(t, 3, 1, Zr(t, 5).transform(n.type$))
            );
          },
          null
        );
      }
      var mu = Qn({ encapsulation: 2, styles: [], data: {} });
      function bu(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(0, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), Zi(-1, null, ['Live Updating'])),
            (e()(),
            Vi(
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
              ls,
              us
            )),
            oo(
              3,
              770048,
              null,
              0,
              as,
              [nn],
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
      var _u = null;
      function wu() {
        return _u;
      }
      var xu,
        Cu = (function(e) {
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
            } catch (a) {
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
        ),
        Eu = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex'
        },
        Su = {
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
        Ou = {
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
        },
        ku = (function() {
          if (Ae.Node)
            return (
              Ae.Node.prototype.contains ||
              function(e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })(),
        Au = (function(e) {
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
              (e = new t()), _u || (_u = e);
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
                return Eu;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.contains = function(e, t) {
              return ku.call(e, t);
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
                  3 === e.location && Ou.hasOwnProperty(t) && (t = Ou[t]));
              }
              return Su[t] || t;
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
                  Nu || (Nu = document.querySelector('base'))
                    ? Nu.getAttribute('href')
                    : null;
              return null == n
                ? null
                : ((t = n),
                  xu || (xu = document.createElement('a')),
                  xu.setAttribute('href', t),
                  '/' === xu.pathname.charAt(0)
                    ? xu.pathname
                    : '/' + xu.pathname);
            }),
            (t.prototype.resetBaseElement = function() {
              Nu = null;
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
                    var a = i.value,
                      s = a.indexOf('='),
                      c = l(
                        -1 == s ? [a, ''] : [a.slice(0, s), a.slice(s + 1)],
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
        })(Cu),
        Nu = null;
      function Tu() {
        return !!window.history.pushState;
      }
      var Pu = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n._doc = t), n._init(), n;
          }
          var n;
          return (
            o(t, e),
            (t.prototype._init = function() {
              (this.location = wu().getLocation()),
                (this._history = wu().getHistory());
            }),
            (t.prototype.getBaseHrefFromDOM = function() {
              return wu().getBaseHref(this._doc);
            }),
            (t.prototype.onPopState = function(e) {
              wu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', e, !1);
            }),
            (t.prototype.onHashChange = function(e) {
              wu()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', e, !1);
            }),
            Object.defineProperty(t.prototype, 'href', {
              get: function() {
                return this.location.href;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'protocol', {
              get: function() {
                return this.location.protocol;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'hostname', {
              get: function() {
                return this.location.hostname;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'port', {
              get: function() {
                return this.location.port;
              },
              enumerable: !0,
              configurable: !0
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
              Tu()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }),
            (t.prototype.replaceState = function(e, t, n) {
              Tu()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }),
            (t.prototype.forward = function() {
              this._history.forward();
            }),
            (t.prototype.back = function() {
              this._history.back();
            }),
            (t.prototype.getState = function() {
              return this._history.state;
            }),
            a(
              [
                ((n = ce($s)),
                function(e, t) {
                  n(e, t, 0);
                }),
                s('design:paramtypes', [Object])
              ],
              t
            )
          );
        })(cs),
        Du = new Ne('TRANSITION_ID'),
        Iu = [
          {
            provide: Po,
            useFactory: function(e, t, n) {
              return function() {
                n.get(Do).donePromise.then(function() {
                  var n = wu();
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
            deps: [Du, $s, ze],
            multi: !0
          }
        ],
        Mu = (function() {
          function e() {}
          return (
            (e.init = function() {
              var t;
              (t = new e()), (hi = t);
            }),
            (e.prototype.addToWindow = function(e) {
              (Ae.getAngularTestability = function(t, n) {
                void 0 === n && (n = !0);
                var r = e.findTestabilityInTree(t, n);
                if (null == r)
                  throw new Error('Could not find testability for element.');
                return r;
              }),
                (Ae.getAllAngularTestabilities = function() {
                  return e.getAllTestabilities();
                }),
                (Ae.getAllAngularRootElements = function() {
                  return e.getAllRootElements();
                }),
                Ae.frameworkStabilizers || (Ae.frameworkStabilizers = []),
                Ae.frameworkStabilizers.push(function(e) {
                  var t = Ae.getAllAngularTestabilities(),
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
                ? wu().isShadowRoot(t)
                  ? this.findTestabilityInTree(e, wu().getHost(t), !0)
                  : this.findTestabilityInTree(e, wu().parentElement(t), !0)
                : null;
            }),
            e
          );
        })();
      function Vu(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((Ae.ng = Ae.ng || {})[e] = t);
      }
      var ju = (function() {
        return { ApplicationRef: _i, NgZone: ri };
      })();
      function Ru(e) {
        return Oi(e);
      }
      var Lu = new Ne('EventManagerPlugins'),
        Fu = (function() {
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
        Bu = (function() {
          function e(e) {
            this._doc = e;
          }
          return (
            (e.prototype.addGlobalEventListener = function(e, t, n) {
              var r = wu().getGlobalEventTarget(this._doc, e);
              if (!r)
                throw new Error(
                  'Unsupported event target ' + r + ' for event ' + t
                );
              return this.addEventListener(r, t, n);
            }),
            e
          );
        })(),
        Hu = (function() {
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
        zu = (function(e) {
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
                return wu().remove(e);
              });
            }),
            t
          );
        })(Hu),
        Uu = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        Gu = /%COMP%/g,
        Zu = '_nghost-%COMP%',
        Wu = '_ngcontent-%COMP%';
      function qu(e, t, n) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          Array.isArray(o) ? qu(e, o, n) : ((o = o.replace(Gu, e)), n.push(o));
        }
        return n;
      }
      function Yu(e) {
        return function(t) {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      var Qu = (function() {
          function e(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Xu(e));
          }
          return (
            (e.prototype.createRenderer = function(e, t) {
              if (!e || !t) return this.defaultRenderer;
              switch (t.encapsulation) {
                case Je.Emulated:
                  var n = this.rendererByCompId.get(t.id);
                  return (
                    n ||
                      ((n = new Ju(
                        this.eventManager,
                        this.sharedStylesHost,
                        t,
                        this.appId
                      )),
                      this.rendererByCompId.set(t.id, n)),
                    n.applyToHost(e),
                    n
                  );
                case Je.Native:
                case Je.ShadowDom:
                  return new el(this.eventManager, this.sharedStylesHost, e, t);
                default:
                  if (!this.rendererByCompId.has(t.id)) {
                    var r = qu(t.id, t.styles, []);
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
        Xu = (function() {
          function e(e) {
            (this.eventManager = e), (this.data = Object.create(null));
          }
          return (
            (e.prototype.destroy = function() {}),
            (e.prototype.createElement = function(e, t) {
              return t
                ? document.createElementNS(Uu[t] || t, e)
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
                var o = Uu[r];
                o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
              } else e.setAttribute(t, n);
            }),
            (e.prototype.removeAttribute = function(e, t, n) {
              if (n) {
                var r = Uu[n];
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
              r & sn.DashCase
                ? e.style.setProperty(t, n, r & sn.Important ? 'important' : '')
                : (e.style[t] = n);
            }),
            (e.prototype.removeStyle = function(e, t, n) {
              n & sn.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
            }),
            (e.prototype.setProperty = function(e, t, n) {
              Ku(t, 'property'), (e[t] = n);
            }),
            (e.prototype.setValue = function(e, t) {
              e.nodeValue = t;
            }),
            (e.prototype.listen = function(e, t, n) {
              return (
                Ku(t, 'listener'),
                'string' == typeof e
                  ? this.eventManager.addGlobalEventListener(e, t, Yu(n))
                  : this.eventManager.addEventListener(e, t, Yu(n))
              );
            }),
            e
          );
        })(),
        $u = (function() {
          return '@'.charCodeAt(0);
        })();
      function Ku(e, t) {
        if (e.charCodeAt(0) === $u)
          throw new Error(
            'Found the synthetic ' +
              t +
              ' ' +
              e +
              '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.'
          );
      }
      var Ju = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            i.component = r;
            var a = qu(o + '-' + r.id, r.styles, []);
            return (
              n.addStyles(a),
              (i.contentAttr = Wu.replace(Gu, o + '-' + r.id)),
              (i.hostAttr = Zu.replace(Gu, o + '-' + r.id)),
              i
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
        })(Xu),
        el = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            (i.sharedStylesHost = n),
              (i.hostEl = r),
              (i.component = o),
              (i.shadowRoot =
                o.encapsulation === Je.ShadowDom
                  ? r.attachShadow({ mode: 'open' })
                  : r.createShadowRoot()),
              i.sharedStylesHost.addHost(i.shadowRoot);
            for (var a = qu(o.id, o.styles, []), s = 0; s < a.length; s++) {
              var u = document.createElement('style');
              (u.textContent = a[s]), i.shadowRoot.appendChild(u);
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
        })(Xu),
        tl = (function() {
          return (
            ('undefined' != typeof Zone && Zone.__symbol__) ||
            function(e) {
              return '__zone_symbol__' + e;
            }
          );
        })(),
        nl = tl('addEventListener'),
        rl = tl('removeEventListener'),
        ol = {},
        il = '__zone_symbol__propagationStopped',
        al = (function() {
          var e = 'undefined' != typeof Zone && Zone[tl('BLACK_LISTED_EVENTS')];
          if (e) {
            var t = {};
            return (
              e.forEach(function(e) {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        sl = function(e) {
          return !!al && al.hasOwnProperty(e);
        },
        ul = function(e) {
          var t = ol[e.type];
          if (t) {
            var n = this[t];
            if (n) {
              var r = [e];
              if (1 === n.length)
                return (a = n[0]).zone !== Zone.current
                  ? a.zone.run(a.handler, this, r)
                  : a.handler.apply(this, r);
              for (
                var o = n.slice(), i = 0;
                i < o.length && !0 !== e[il];
                i++
              ) {
                var a;
                (a = o[i]).zone !== Zone.current
                  ? a.zone.run(a.handler, this, r)
                  : a.handler.apply(this, r);
              }
            }
          }
        },
        ll = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, t) || this;
            return (
              (o.ngZone = n),
              (r &&
                (function(e) {
                  return e === Ks;
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
                  this && (this[il] = !0), e && e.apply(this, arguments);
                };
              }
            }),
            (t.prototype.supports = function(e) {
              return !0;
            }),
            (t.prototype.addEventListener = function(e, t, n) {
              var r = this,
                o = n;
              if (!e[nl] || (ri.isInAngularZone() && !sl(t)))
                e.addEventListener(t, o, !1);
              else {
                var i = ol[t];
                i || (i = ol[t] = tl('ANGULAR' + t + 'FALSE'));
                var a = e[i],
                  s = a && a.length > 0;
                a || (a = e[i] = []);
                var u = sl(t) ? Zone.root : Zone.current;
                if (0 === a.length) a.push({ zone: u, handler: o });
                else {
                  for (var l = !1, c = 0; c < a.length; c++)
                    if (a[c].handler === o) {
                      l = !0;
                      break;
                    }
                  l || a.push({ zone: u, handler: o });
                }
                s || e[nl](t, ul, !1);
              }
              return function() {
                return r.removeEventListener(e, t, o);
              };
            }),
            (t.prototype.removeEventListener = function(e, t, n) {
              var r = e[rl];
              if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
              var o = ol[t],
                i = o && e[o];
              if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
              for (var a = !1, s = 0; s < i.length; s++)
                if (i[s].handler === n) {
                  (a = !0), i.splice(s, 1);
                  break;
                }
              a
                ? 0 === i.length && r.apply(e, [t, ul, !1])
                : e.removeEventListener.apply(e, [t, n, !1]);
            }),
            t
          );
        })(Bu),
        cl = {
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
        dl = new Ne('HammerGestureConfig'),
        pl = new Ne('HammerLoader'),
        hl = (function() {
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
        fl = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this, t) || this;
            return (i._config = n), (i.console = r), (i.loader = o), i;
          }
          return (
            o(t, e),
            (t.prototype.supports = function(e) {
              return !(
                (!cl.hasOwnProperty(e.toLowerCase()) &&
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
                  a = function() {
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
                          void (a = function() {})
                        );
                      i || (a = r.addEventListener(e, t, n));
                    })
                    .catch(function() {
                      r.console.warn(
                        'The "' +
                          t +
                          '" event cannot be bound because the custom Hammer.JS loader failed.'
                      ),
                        (a = function() {});
                    }),
                  function() {
                    a();
                  }
                );
              }
              return o.runOutsideAngular(function() {
                var i = r._config.buildHammer(e),
                  a = function(e) {
                    o.runGuarded(function() {
                      n(e);
                    });
                  };
                return (
                  i.on(t, a),
                  function() {
                    i.off(t, a), 'function' == typeof i.destroy && i.destroy();
                  }
                );
              });
            }),
            (t.prototype.isCustomEvent = function(e) {
              return this._config.events.indexOf(e) > -1;
            }),
            t
          );
        })(Bu),
        yl = ['alt', 'control', 'meta', 'shift'],
        vl = {
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
        gl = (function(e) {
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
                return wu().onAndCancel(e, o.domEventName, i);
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
                (yl.forEach(function(e) {
                  var n = t.indexOf(e);
                  n > -1 && (t.splice(n, 1), (i += e + '.'));
                }),
                (i += o),
                0 != t.length || 0 === o.length)
              )
                return null;
              var a = {};
              return (a.domEventName = r), (a.fullKey = i), a;
            }),
            (t.getEventFullKey = function(e) {
              var t = '',
                n = wu().getEventKey(e);
              return (
                ' ' === (n = n.toLowerCase())
                  ? (n = 'space')
                  : '.' === n && (n = 'dot'),
                yl.forEach(function(r) {
                  r != n && (0, vl[r])(e) && (t += r + '.');
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
        })(Bu),
        ml = (function() {
          return function() {};
        })(),
        bl = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (n._doc = t), n;
          }
          return (
            o(t, e),
            (t.prototype.sanitize = function(e, t) {
              if (null == t) return null;
              switch (e) {
                case St.NONE:
                  return t;
                case St.HTML:
                  return t instanceof wl
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'HTML'),
                      (function(e, t) {
                        var n = null;
                        try {
                          ct = ct || new ot(e);
                          var r = t ? String(t) : '';
                          n = ct.getInertBodyElement(r);
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
                              (n = ct.getInertBodyElement(r));
                          } while (r !== i);
                          var a = new _t(),
                            s = a.sanitizeChildren(Et(n) || n);
                          return (
                            rt() &&
                              a.sanitizedSomething &&
                              console.warn(
                                'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                              ),
                            s
                          );
                        } finally {
                          if (n)
                            for (var u = Et(n) || n; u.firstChild; )
                              u.removeChild(u.firstChild);
                        }
                      })(this._doc, String(t)));
                case St.STYLE:
                  return t instanceof xl
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'Style'),
                      (function(e) {
                        if (!(e = String(e).trim())) return '';
                        var t = e.match(At);
                        return (t && st(t[1]) === t[1]) ||
                          (e.match(kt) &&
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
                          : (rt() &&
                              console.warn(
                                'WARNING: sanitizing unsafe style value ' +
                                  e +
                                  ' (see http://g.co/ng/security#xss).'
                              ),
                            'unsafe');
                      })(t));
                case St.SCRIPT:
                  if (t instanceof Cl)
                    return t.changingThisBreaksApplicationSecurity;
                  throw (this.checkNotSafeValue(t, 'Script'),
                  new Error('unsafe value used in a script context'));
                case St.URL:
                  return t instanceof Sl || t instanceof El
                    ? t.changingThisBreaksApplicationSecurity
                    : (this.checkNotSafeValue(t, 'URL'), st(String(t)));
                case St.RESOURCE_URL:
                  if (t instanceof Sl)
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
              if (e instanceof _l)
                throw new Error(
                  'Required a safe ' +
                    t +
                    ', got a ' +
                    e.getTypeName() +
                    ' (see http://g.co/ng/security#xss)'
                );
            }),
            (t.prototype.bypassSecurityTrustHtml = function(e) {
              return new wl(e);
            }),
            (t.prototype.bypassSecurityTrustStyle = function(e) {
              return new xl(e);
            }),
            (t.prototype.bypassSecurityTrustScript = function(e) {
              return new Cl(e);
            }),
            (t.prototype.bypassSecurityTrustUrl = function(e) {
              return new El(e);
            }),
            (t.prototype.bypassSecurityTrustResourceUrl = function(e) {
              return new Sl(e);
            }),
            t
          );
        })(ml),
        _l = (function() {
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
        wl = (function(e) {
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
        })(_l),
        xl = (function(e) {
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
        })(_l),
        Cl = (function(e) {
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
        })(_l),
        El = (function(e) {
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
        })(_l),
        Sl = (function(e) {
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
        })(_l),
        Ol = vi(Ai, 'browser', [
          { provide: Ro, useValue: 'browser' },
          {
            provide: jo,
            useValue: function() {
              Au.makeCurrent(), Mu.init();
            },
            multi: !0
          },
          { provide: cs, useClass: Pu, deps: [$s] },
          {
            provide: $s,
            useFactory: function() {
              return document;
            },
            deps: []
          }
        ]);
      function kl() {
        return new Dt();
      }
      var Al = (function() {
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
                { provide: Io, useValue: e.appId },
                { provide: Du, useExisting: Io },
                Iu
              ]
            };
          }),
          e
        );
      })();
      function Nl(e, t) {
        return new A(function(n) {
          var r = e.length;
          if (0 !== r)
            for (
              var o = new Array(r),
                i = 0,
                a = 0,
                s = function(s) {
                  var u = Q(e[s]),
                    l = !1;
                  n.add(
                    u.subscribe({
                      next: function(e) {
                        l || ((l = !0), a++), (o[s] = e);
                      },
                      error: function(e) {
                        return n.error(e);
                      },
                      complete: function() {
                        (++i !== r && l) ||
                          (a === r &&
                            n.next(
                              t
                                ? t.reduce(function(e, t, n) {
                                    return (e[t] = o[n]), e;
                                  }, {})
                                : o
                            ),
                          n.complete());
                      }
                    })
                  );
                },
                u = 0;
              u < r;
              u++
            )
              s(u);
          else n.complete();
        });
      }
      'undefined' != typeof window && window;
      var Tl = new Ne('NgValueAccessor'),
        Pl = (function() {
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
        Dl = (function() {
          function e(e, t, n) {
            var r;
            (this._renderer = e),
              (this._elementRef = t),
              (this._compositionMode = n),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode =
                  ((r = wu() ? wu().getUserAgent() : ''),
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
        })(),
        Il = (function() {
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
        Ml = (function(e) {
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
        })(Il);
      function Vl() {
        throw new Error('unimplemented');
      }
      var jl = (function(e) {
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
                return Vl();
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return Vl();
              },
              enumerable: !0,
              configurable: !0
            }),
            t
          );
        })(Il),
        Rl = (function(e) {
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
      function Ll(e) {
        return null == e || 0 === e.length;
      }
      var Fl = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Bl = (function() {
          function e() {}
          return (
            (e.min = function(e) {
              return function(t) {
                if (Ll(t.value) || Ll(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n < e
                  ? { min: { min: e, actual: t.value } }
                  : null;
              };
            }),
            (e.max = function(e) {
              return function(t) {
                if (Ll(t.value) || Ll(e)) return null;
                var n = parseFloat(t.value);
                return !isNaN(n) && n > e
                  ? { max: { max: e, actual: t.value } }
                  : null;
              };
            }),
            (e.required = function(e) {
              return Ll(e.value) ? { required: !0 } : null;
            }),
            (e.requiredTrue = function(e) {
              return !0 === e.value ? null : { required: !0 };
            }),
            (e.email = function(e) {
              return Ll(e.value)
                ? null
                : Fl.test(e.value)
                ? null
                : { email: !0 };
            }),
            (e.minLength = function(e) {
              return function(t) {
                if (Ll(t.value)) return null;
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
                    if (Ll(e.value)) return null;
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
              var t = e.filter(Hl);
              return 0 == t.length
                ? null
                : function(e) {
                    return Ul(
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
              var t = e.filter(Hl);
              return 0 == t.length
                ? null
                : function(e) {
                    return (function() {
                      for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                      if (1 === e.length) {
                        var n = e[0];
                        if (d(n)) return Nl(n, null);
                        if (
                          p(n) &&
                          Object.getPrototypeOf(n) === Object.prototype
                        ) {
                          var r = Object.keys(n);
                          return Nl(
                            r.map(function(e) {
                              return n[e];
                            }),
                            r
                          );
                        }
                      }
                      if ('function' == typeof e[e.length - 1]) {
                        var o = e.pop();
                        return Nl(
                          (e = 1 === e.length && d(e[0]) ? e[0] : e),
                          null
                        ).pipe(
                          Z(function(e) {
                            return o.apply(void 0, e);
                          })
                        );
                      }
                      return Nl(e, null);
                    })(
                      (function(e, n) {
                        return t.map(function(t) {
                          return t(e);
                        });
                      })(e).map(zl)
                    ).pipe(Z(Ul));
                  };
            }),
            e
          );
        })();
      function Hl(e) {
        return null != e;
      }
      function zl(e) {
        var t = zt(e) ? Q(e) : e;
        if (!Ut(t))
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        return t;
      }
      function Ul(e) {
        var t = e.reduce(function(e, t) {
          return null != t ? i({}, e, t) : e;
        }, {});
        return 0 === Object.keys(t).length ? null : t;
      }
      function Gl(e) {
        return e.validate
          ? function(t) {
              return e.validate(t);
            }
          : e;
      }
      function Zl(e) {
        return e.validate
          ? function(t) {
              return e.validate(t);
            }
          : e;
      }
      var Wl = (function() {
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
        })(),
        ql = (function() {
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
        Yl = (function() {
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
              (this._control = this._injector.get(jl)),
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
        Ql = (function() {
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
        Xl =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        $l =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
      function Kl(e, t) {
        return null == e
          ? '' + t
          : (t && 'object' == typeof t && (t = 'Object'),
            (e + ': ' + t).slice(0, 50));
      }
      var Jl = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Rt);
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
              var n = Kl(t, e);
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
              } catch (a) {
                t = { error: a };
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
        ec = (function() {
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
                  this._setElementValue(Kl(this.id, e)),
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
      function tc(e, t) {
        return null == e
          ? '' + t
          : ('string' == typeof t && (t = "'" + t + "'"),
            t && 'object' == typeof t && (t = 'Object'),
            (e + ': ' + t).slice(0, 50));
      }
      var nc = (function() {
          function e(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function(e) {}),
              (this.onTouched = function() {}),
              (this._compareWith = Rt);
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
                    var a = o.item(i),
                      s = t._getOptionValue(a.value);
                    r.push(s);
                  }
                else
                  for (o = n.options, i = 0; i < o.length; i++)
                    (a = o.item(i)).selected &&
                      ((s = t._getOptionValue(a.value)), r.push(s));
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
              } catch (a) {
                t = { error: a };
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
        rc = (function() {
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
                  this._setElementValue(tc(this.id, e)),
                  this._select.writeValue(this._select.value));
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'value', {
              set: function(e) {
                this._select
                  ? ((this._value = e),
                    this._setElementValue(tc(this.id, e)),
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
      function oc(e, t) {
        return c(t.path, [e]);
      }
      function ic(e, t) {
        e || sc(t, 'Cannot find control with'),
          t.valueAccessor || sc(t, 'No value accessor for form control with'),
          (e.validator = Bl.compose([e.validator, t.validator])),
          (e.asyncValidator = Bl.composeAsync([
            e.asyncValidator,
            t.asyncValidator
          ])),
          t.valueAccessor.writeValue(e.value),
          (function(e, t) {
            t.valueAccessor.registerOnChange(function(n) {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && ac(e, t);
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
                'blur' === e.updateOn && e._pendingChange && ac(e, t),
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
      function ac(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function sc(e, t) {
        var n;
        throw ((n =
          e.path.length > 1
            ? "path: '" + e.path.join(' -> ') + "'"
            : e.path[0]
            ? "name: '" + e.path + "'"
            : 'unspecified name attribute'),
        new Error(t + ' ' + n));
      }
      function uc(e) {
        return null != e ? Bl.compose(e.map(Gl)) : null;
      }
      function lc(e) {
        return null != e ? Bl.composeAsync(e.map(Zl)) : null;
      }
      var cc = [Pl, Ql, Wl, Jl, nc, Yl];
      function dc(e) {
        var t = hc(e) ? e.validators : e;
        return Array.isArray(t) ? uc(t) : t || null;
      }
      function pc(e, t) {
        var n = hc(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? lc(n) : n || null;
      }
      function hc(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      var fc = (function() {
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
              this.validator = dc(e);
            }),
            (e.prototype.setAsyncValidators = function(e) {
              this.asyncValidator = pc(e);
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
            (e.prototype.markAllAsTouched = function() {
              this.markAsTouched({ onlySelf: !0 }),
                this._forEachChild(function(e) {
                  return e.markAllAsTouched();
                });
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
              void 0 === e && (e = {});
              var t = this._parentMarkedDirty(e.onlySelf);
              (this.status = 'DISABLED'),
                (this.errors = null),
                this._forEachChild(function(t) {
                  t.disable(i({}, e, { onlySelf: !0 }));
                }),
                this._updateValue(),
                !1 !== e.emitEvent &&
                  (this.valueChanges.emit(this.value),
                  this.statusChanges.emit(this.status)),
                this._updateAncestors(i({}, e, { skipPristineCheck: t })),
                this._onDisabledChange.forEach(function(e) {
                  return e(!0);
                });
            }),
            (e.prototype.enable = function(e) {
              void 0 === e && (e = {});
              var t = this._parentMarkedDirty(e.onlySelf);
              (this.status = 'VALID'),
                this._forEachChild(function(t) {
                  t.enable(i({}, e, { onlySelf: !0 }));
                }),
                this.updateValueAndValidity({
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                }),
                this._updateAncestors(i({}, e, { skipPristineCheck: t })),
                this._onDisabledChange.forEach(function(e) {
                  return e(!1);
                });
            }),
            (e.prototype._updateAncestors = function(e) {
              this._parent &&
                !e.onlySelf &&
                (this._parent.updateValueAndValidity(e),
                e.skipPristineCheck || this._parent._updatePristine(),
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
                var n = zl(this.asyncValidator(this));
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
                          return e instanceof vc
                            ? e.controls.hasOwnProperty(t)
                              ? e.controls[t]
                              : null
                            : (e instanceof gc && e.at(t)) || null;
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
              (this.valueChanges = new Ao()), (this.statusChanges = new Ao());
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
              hc(e) && null != e.updateOn && (this._updateOn = e.updateOn);
            }),
            (e.prototype._parentMarkedDirty = function(e) {
              return (
                !e &&
                this._parent &&
                this._parent.dirty &&
                !this._parent._anyControlsDirty()
              );
            }),
            e
          );
        })(),
        yc = (function(e) {
          function t(t, n, r) {
            void 0 === t && (t = null);
            var o = e.call(this, dc(n), pc(r, n)) || this;
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
        })(fc),
        vc = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, dc(n), pc(r, n)) || this;
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
                this._updatePristine(t),
                this._updateTouched(t),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.getRawValue = function() {
              return this._reduceChildren({}, function(e, t, n) {
                return (e[n] = t instanceof yc ? t.value : t.getRawValue()), e;
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
        })(fc),
        gc = (function(e) {
          function t(t, n, r) {
            var o = e.call(this, dc(n), pc(r, n)) || this;
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
                this._updatePristine(t),
                this._updateTouched(t),
                this.updateValueAndValidity(t);
            }),
            (t.prototype.getRawValue = function() {
              return this.controls.map(function(e) {
                return e instanceof yc ? e.value : e.getRawValue();
              });
            }),
            (t.prototype.clear = function() {
              this.controls.length < 1 ||
                (this._forEachChild(function(e) {
                  return e._registerOnCollectionChange(function() {});
                }),
                this.controls.splice(0),
                this.updateValueAndValidity());
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
        })(fc),
        mc = (function() {
          return Promise.resolve(null);
        })(),
        bc = (function(e) {
          function t(t, n) {
            var r = e.call(this) || this;
            return (
              (r.submitted = !1),
              (r._directives = []),
              (r.ngSubmit = new Ao()),
              (r.form = new vc({}, uc(t), lc(n))),
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
              mc.then(function() {
                var n = t._findContainer(e.path);
                (e.control = n.registerControl(e.name, e.control)),
                  ic(e.control, e),
                  e.control.updateValueAndValidity({ emitEvent: !1 }),
                  t._directives.push(e);
              });
            }),
            (t.prototype.getControl = function(e) {
              return this.form.get(e.path);
            }),
            (t.prototype.removeControl = function(e) {
              var t = this;
              mc.then(function() {
                var n,
                  r,
                  o = t._findContainer(e.path);
                o && o.removeControl(e.name),
                  (r = (n = t._directives).indexOf(e)) > -1 && n.splice(r, 1);
              });
            }),
            (t.prototype.addFormGroup = function(e) {
              var t = this;
              mc.then(function() {
                var n = t._findContainer(e.path),
                  r = new vc({});
                (function(e, t) {
                  null == e && sc(t, 'Cannot find control with'),
                    (e.validator = Bl.compose([e.validator, t.validator])),
                    (e.asyncValidator = Bl.composeAsync([
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
              mc.then(function() {
                var n = t._findContainer(e.path);
                n && n.removeControl(e.name);
              });
            }),
            (t.prototype.getFormGroup = function(e) {
              return this.form.get(e.path);
            }),
            (t.prototype.updateModel = function(e, t) {
              var n = this;
              mc.then(function() {
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
        })(Ml),
        _c = (function() {
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
                  Xl +
                  "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " +
                  $l
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
                  Xl +
                  '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ' +
                  $l
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
        wc = new Ne('NgFormSelectorWarning'),
        xc = (function(e) {
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
                return oc(this.name, this._parent);
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
                return uc(this._validators);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return lc(this._asyncValidators);
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype._checkParentType = function() {}),
            t
          );
        })(Ml),
        Cc = (function(e) {
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
                this._parent instanceof bc ||
                _c.modelGroupParentException();
            }),
            t
          );
        })(xc),
        Ec = (function() {
          return Promise.resolve(null);
        })(),
        Sc = (function(e) {
          function t(t, n, r, o) {
            var i = e.call(this) || this;
            return (
              (i.control = new yc()),
              (i._registered = !1),
              (i.update = new Ao()),
              (i._parent = t),
              (i._rawValidators = n || []),
              (i._rawAsyncValidators = r || []),
              (i.valueAccessor = (function(e, t) {
                if (!t) return null;
                Array.isArray(t) ||
                  sc(
                    e,
                    'Value accessor was not provided as an array for form control with'
                  );
                var n = void 0,
                  r = void 0,
                  o = void 0;
                return (
                  t.forEach(function(t) {
                    var i;
                    t.constructor === Dl
                      ? (n = t)
                      : ((i = t),
                        cc.some(function(e) {
                          return i.constructor === e;
                        })
                          ? (r &&
                              sc(
                                e,
                                'More than one built-in value accessor matches form control with'
                              ),
                            (r = t))
                          : (o &&
                              sc(
                                e,
                                'More than one custom value accessor matches form control with'
                              ),
                            (o = t)));
                  }),
                  o ||
                    r ||
                    n ||
                    (sc(e, 'No valid value accessor for form control with'),
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
                  return !!n.isFirstChange() || !Rt(t, n.currentValue);
                })(e, this.viewModel) &&
                  (this._updateValue(this.model),
                  (this.viewModel = this.model));
            }),
            (t.prototype.ngOnDestroy = function() {
              this.formDirective && this.formDirective.removeControl(this);
            }),
            Object.defineProperty(t.prototype, 'path', {
              get: function() {
                return this._parent ? oc(this.name, this._parent) : [this.name];
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
                return uc(this._rawValidators);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'asyncValidator', {
              get: function() {
                return lc(this._rawAsyncValidators);
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
              ic(this.control, this),
                this.control.updateValueAndValidity({ emitEvent: !1 });
            }),
            (t.prototype._checkForErrors = function() {
              this._isStandalone() || this._checkParentType(),
                this._checkName();
            }),
            (t.prototype._checkParentType = function() {
              !(this._parent instanceof Cc) && this._parent instanceof xc
                ? _c.formGroupNameException()
                : this._parent instanceof Cc ||
                  this._parent instanceof bc ||
                  _c.modelParentException();
            }),
            (t.prototype._checkName = function() {
              this.options &&
                this.options.name &&
                (this.name = this.options.name),
                this._isStandalone() || this.name || _c.missingNameException();
            }),
            (t.prototype._updateValue = function(e) {
              var t = this;
              Ec.then(function() {
                t.control.setValue(e, { emitViewToModelChange: !1 });
              });
            }),
            (t.prototype._updateDisabled = function(e) {
              var t = this,
                n = e.isDisabled.currentValue,
                r = '' === n || (n && 'false' !== n);
              Ec.then(function() {
                r && !t.control.disabled
                  ? t.control.disable()
                  : !r && t.control.disabled && t.control.enable();
              });
            }),
            t
          );
        })(jl),
        Oc = (function() {
          return function() {};
        })(),
        kc = (function() {
          function e() {}
          var t;
          return (
            (t = e),
            (e.withConfig = function(e) {
              return {
                ngModule: t,
                providers: [
                  { provide: wc, useValue: e.warnOnDeprecatedNgFormSelector }
                ]
              };
            }),
            e
          );
        })(),
        Ac = n('Gz50'),
        Nc = (function() {
          return function() {
            (this.chartTypes = ['Bar', 'Line']),
              (this.type = 'Bar'),
              (this.data = Ac.Bar),
              (this.options = {
                axisX: { showLabel: !1 },
                axisY: { showLabel: !1 }
              });
          };
        })(),
        Tc = Qn({ encapsulation: 2, styles: [], data: {} });
      function Pc(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(
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
            oo(
              1,
              147456,
              null,
              0,
              ec,
              [nn, un, [2, Jl]],
              { ngValue: [0, 'ngValue'] },
              null
            ),
            oo(
              2,
              147456,
              null,
              0,
              rc,
              [nn, un, [8, null]],
              { ngValue: [0, 'ngValue'] },
              null
            ),
            (e()(), Zi(3, null, ['', '']))
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit), e(t, 2, 0, t.context.$implicit);
          },
          function(e, t) {
            e(t, 3, 0, t.context.$implicit);
          }
        );
      }
      function Dc(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(
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
            Vi(
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
            Vi(2, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), Zi(-1, null, ['Dynamic Chart Types'])),
            (e()(),
            Vi(
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
            Vi(
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
                    (r = !1 !== Zr(e, 6).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Zr(e, 6).onTouched() && r),
                  'ngModelChange' === t && (r = !1 !== (o.type = n) && r),
                  r
                );
              },
              null,
              null
            )),
            oo(6, 16384, null, 0, Jl, [un, nn], null, null),
            ao(
              1024,
              null,
              Tl,
              function(e) {
                return [e];
              },
              [Jl]
            ),
            oo(
              8,
              671744,
              null,
              0,
              Sc,
              [[8, null], [8, null], [8, null], [6, Tl]],
              { model: [0, 'model'] },
              { update: 'ngModelChange' }
            ),
            ao(2048, null, jl, null, [Sc]),
            oo(10, 16384, null, 0, Rl, [[4, jl]], null, null),
            (e()(), Mi(16777216, null, null, 1, null, Pc)),
            oo(
              12,
              278528,
              null,
              0,
              Gs,
              [Tn, An, wn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            Vi(
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
              ls,
              us
            )),
            oo(
              14,
              770048,
              null,
              0,
              as,
              [nn],
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
              Zr(t, 10).ngClassUntouched,
              Zr(t, 10).ngClassTouched,
              Zr(t, 10).ngClassPristine,
              Zr(t, 10).ngClassDirty,
              Zr(t, 10).ngClassValid,
              Zr(t, 10).ngClassInvalid,
              Zr(t, 10).ngClassPending
            );
          }
        );
      }
      var Ic = n('+Bet'),
        Mc = n.n(Ic),
        Vc = (function() {
          return function() {
            (this.type = 'Line'),
              (this.data = {
                labels: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday'
                ],
                series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
              }),
              (this.options = {
                plugins: [Mc()({ anchorToPoint: !0, appendToBody: !0 })]
              });
          };
        })(),
        jc = Qn({ encapsulation: 2, styles: [], data: {} });
      function Rc(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(0, 0, null, null, 1, 'h4', [], null, null, null, null, null)),
            (e()(), Zi(-1, null, ['Tooltips'])),
            (e()(),
            Vi(
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
              ls,
              us
            )),
            oo(
              3,
              770048,
              null,
              0,
              as,
              [nn],
              { data: [0, 'data'], type: [1, 'type'], options: [2, 'options'] },
              null
            )
          ],
          function(e, t) {
            var n = t.component;
            e(t, 3, 0, n.data, n.type, n.options);
          },
          null
        );
      }
      var Lc = Qn({
        encapsulation: 0,
        styles: [['.col-md-6[_ngcontent-%COMP%]{padding:20px}']],
        data: {}
      });
      function Fc(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(
              0,
              0,
              null,
              null,
              1,
              'x-chartist',
              [['class', 'col-md-6']],
              null,
              null,
              null,
              ls,
              us
            )),
            oo(
              1,
              770048,
              null,
              0,
              as,
              [nn],
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
              1,
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
      function Bc(e) {
        return Yi(
          0,
          [
            (e()(), Mi(16777216, null, null, 1, null, Fc)),
            oo(
              1,
              278528,
              null,
              0,
              Gs,
              [Tn, An, wn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            Vi(
              2,
              0,
              null,
              null,
              0,
              'div',
              [['class', 'row']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Vi(
              3,
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
            Vi(
              4,
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
            Vi(
              5,
              0,
              null,
              null,
              1,
              'async-chart',
              [],
              null,
              null,
              null,
              gu,
              vu
            )),
            oo(6, 49152, null, 0, yu, [], null, null),
            (e()(),
            Vi(
              7,
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
            Vi(
              8,
              0,
              null,
              null,
              1,
              'live-chart',
              [],
              null,
              null,
              null,
              bu,
              mu
            )),
            oo(9, 180224, null, 0, hu, [], null, null),
            (e()(),
            Vi(
              10,
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
            Vi(
              11,
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
            Vi(
              12,
              0,
              null,
              null,
              1,
              'dynamic-chart',
              [],
              null,
              null,
              null,
              Dc,
              Tc
            )),
            oo(13, 49152, null, 0, Nc, [], null, null),
            (e()(),
            Vi(
              14,
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
            Vi(
              15,
              0,
              null,
              null,
              1,
              'tooltip-chart',
              [],
              null,
              null,
              null,
              Rc,
              jc
            )),
            oo(16, 49152, null, 0, Vc, [], null, null)
          ],
          function(e, t) {
            e(t, 1, 0, t.component.charts);
          },
          null
        );
      }
      function Hc(e) {
        return Yi(
          0,
          [
            (e()(),
            Vi(0, 0, null, null, 1, 'app-root', [], null, null, null, Bc, Lc)),
            oo(1, 49152, null, 0, os, [], null, null)
          ],
          null,
          null
        );
      }
      var zc = Mr('app-root', os, Hc, {}, {}, []),
        Uc = es(ns, [os], function(e) {
          return (function(e) {
            for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
              var i = e[o];
              i.token === Be && !0 === i.value && (r = !0),
                1073741824 & i.flags && n.push(i.token),
                (i.index = o),
                (t[Zn(i.token)] = i);
            }
            return {
              factory: null,
              providersByKey: t,
              providers: e,
              modules: n,
              isRoot: r
            };
          })([
            Sr(512, Xt, $t, [[8, [zc]], [3, Xt], Jt]),
            Sr(5120, Bo, Pi, [[3, Bo]]),
            Sr(4608, Hs, zs, [Bo, [2, Bs]]),
            Sr(5120, xo, Di, [ri]),
            Sr(4608, Yo, Yo, []),
            Sr(5120, Io, Mo, []),
            Sr(5120, wn, Ni, []),
            Sr(5120, xn, Ti, []),
            Sr(4608, ml, bl, [$s]),
            Sr(6144, Ot, null, [ml]),
            Sr(4608, dl, hl, []),
            Sr(
              5120,
              Lu,
              function(e, t, n, r, o, i, a, s) {
                return [new ll(e, t, n), new gl(r), new fl(o, i, a, s)];
              },
              [$s, ri, Ro, $s, $s, dl, Fo, [2, pl]]
            ),
            Sr(4608, Fu, Fu, [Lu, ri]),
            Sr(135680, zu, zu, [$s]),
            Sr(4608, Qu, Qu, [Fu, zu, Io]),
            Sr(6144, an, null, [Qu]),
            Sr(6144, Hu, null, [zu]),
            Sr(4608, di, di, [ri]),
            Sr(4608, ql, ql, []),
            Sr(1073742336, Xs, Xs, []),
            Sr(1024, Dt, kl, []),
            Sr(
              1024,
              Po,
              function(e) {
                return [
                  ((t = e),
                  Vu('probe', Ru),
                  Vu(
                    'coreTokens',
                    i(
                      {},
                      ju,
                      (t || []).reduce(function(e, t) {
                        return (e[t.name] = t.token), e;
                      }, {})
                    )
                  ),
                  function() {
                    return Ru;
                  })
                ];
                var t;
              },
              [[2, yi]]
            ),
            Sr(512, Do, Do, [[2, Po]]),
            Sr(131584, _i, _i, [ri, Fo, ze, Dt, Xt, Do]),
            Sr(1073742336, Ii, Ii, [_i]),
            Sr(1073742336, Al, Al, [[3, Al]]),
            Sr(1073742336, ss, ss, []),
            Sr(1073742336, Oc, Oc, []),
            Sr(1073742336, kc, kc, []),
            Sr(1073742336, ns, ns, []),
            Sr(256, Be, !0, [])
          ]);
        });
      (function() {
        if (nt)
          throw new Error('Cannot enable prod mode after platform setup.');
        tt = !1;
      })(),
        Ol()
          .bootstrapModuleFactory(Uc)
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
