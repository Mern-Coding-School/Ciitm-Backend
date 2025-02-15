import {
  f as W,
  j as P,
  l as j,
  w as N,
  n as L,
  a0 as Oe,
  o as p,
  c as g,
  t as K,
  v as Te,
  x as k,
  s as x,
  a as y,
  a1 as Fe,
  U as ne,
  G as re,
  i as Pe,
  b as V,
  F as $,
  d as ie,
  q as H,
  D as je,
  a2 as De,
  V as Ve,
  y as Be,
  z as We,
  W as X,
  A as Y,
  a3 as J,
  _ as ze,
  B as te,
  Y as Ke,
  a4 as He,
} from './BsYh-B0w.js';
import { g as Ge, s as ge, c as Ue, _ as Ye, a as Je } from './CMvAj04f.js';
const Qe = { key: 1, op30: '' },
  Xe = { key: 2 },
  Ze = { op75: '' },
  qe = W({
    __name: 'ColorizedRuleName',
    props: {
      name: {},
      prefix: {},
      url: {},
      as: {},
      deprecated: { type: Boolean },
      borderless: { type: Boolean },
      break: { type: Boolean },
    },
    setup(t) {
      const e = t,
        s = P(() => {
          if (e.prefix)
            return e.name.startsWith(e.prefix)
              ? {
                  scope: e.prefix,
                  name: e.name.slice(e.prefix.length).replace(/^\/+/, ''),
                }
              : { scope: void 0, name: e.name };
          const n = e.name.split('/');
          return n.length === 1
            ? { scope: void 0, name: n[0] }
            : { scope: n[0], name: n.slice(1).join('/') };
        });
      return (n, i) => (
        p(),
        j(
          Oe(n.as || 'div'),
          {
            'of-hidden': '',
            'text-ellipsis': '',
            'ws-nowrap': '',
            'font-mono': '',
            class: L([
              n.deprecated ? 'line-through' : '',
              n.borderless ? '' : 'badge',
            ]),
          },
          {
            default: N(() => [
              s.value.scope
                ? (p(),
                  g(
                    'span',
                    {
                      key: 0,
                      style: Te({
                        color: ('getPluginColor' in n
                          ? n.getPluginColor
                          : k(Ge))(s.value.scope),
                      }),
                    },
                    K(s.value.scope),
                    5
                  ))
                : x('', !0),
              s.value.scope ? (p(), g('span', Qe, '/')) : x('', !0),
              s.value.scope && e.break ? (p(), g('br', Xe)) : x('', !0),
              y('span', Ze, K(s.value.name), 1),
            ]),
            _: 1,
          },
          8,
          ['class']
        )
      );
    },
  });
function Me(t) {
  const e = `${t}`;
  return e.endsWith('1') && t !== 11
    ? `${e}st`
    : e.endsWith('2') && t !== 12
      ? `${e}nd`
      : e.endsWith('3') && t !== 13
        ? `${e}rd`
        : `${t}th`;
}
function et(t) {
  return JSON.stringify(t, null, 2)
    .replace(/"(\w+)":/g, '$1:')
    .replace(/"/g, "'");
}
const tt = ['title'],
  st = {
    key: 0,
    absolute: '',
    'right--2px': '',
    'top--2px': '',
    'h-6px': '',
    'w-6px': '',
    'rounded-full': '',
    'bg-current': '',
    op75: '',
  },
  ke = W({
    __name: 'RuleLevelIcon',
    props: {
      level: {},
      hasOptions: { type: Boolean },
      configIndex: {},
      class: {},
    },
    setup(t) {
      const e = t,
        s = P(() =>
          e.configIndex == null
            ? `Enabled as '${e.level}'`
            : `Enabled as '${e.level}', in the ${Me(e.configIndex + 1)} config item`
        ),
        n = P(
          () =>
            ({
              error: 'text-red op80',
              warn: 'text-yellow5 op80 dark:text-yellow4',
              off: 'text-gray op50',
            })[e.level]
        ),
        i = P(
          () =>
            ({
              error: 'i-ph-warning-circle-duotone',
              warn: 'i-ph-warning-duotone',
              off: 'i-ph-circle-half-tilt-duotone',
            })[e.level]
        );
      return (o, r) => (
        p(),
        g(
          'div',
          { relative: '', class: L([n.value, e.class]), title: s.value },
          [
            y('div', { class: L(i.value) }, null, 2),
            o.hasOptions ? (p(), g('div', st)) : x('', !0),
          ],
          10,
          tt
        )
      );
    },
  }),
  nt = W({
    name: 'Shiki',
    props: {
      code: { type: String, required: !0 },
      lang: { type: String, required: !0 },
    },
    setup(t) {
      const e = P(() =>
        ge.value
          ? ge.value.codeToHtml(t.code, {
              lang: t.lang,
              theme: Fe.value ? 'vitesse-dark' : 'vitesse-light',
              transformers: [
                {
                  pre(s) {
                    s.properties.style = '';
                  },
                },
              ],
            })
          : Ue(t.code)
      );
      return () =>
        ne('div', { class: 'filter-hue-rotate-90', innerHTML: e.value });
    },
  }),
  rt = { 'min-w-100': '', p4: '', flex: '~ col gap-2' },
  it = { flex: '~ gap-1 items-center' },
  ot = { key: 0, ml1: '', op50: '' },
  ct = { key: 1, ml1: '', op50: '' },
  at = y('span', { op50: '' }, 'in', -1),
  lt = y('span', { op50: '' }, ' the ', -1),
  ut = y('span', { op50: '' }, ' config item ', -1),
  ht = { key: 3, op50: '' },
  dt = { key: 0, flex: '~ gap-2' },
  pt = y(
    'div',
    {
      'i-ph-file-magnifying-glass-duotone': '',
      my1: '',
      'flex-none': '',
      op75: '',
    },
    null,
    -1
  ),
  ft = { flex: '~ col gap-2' },
  gt = y('div', { op50: '' }, ' Applies to files matching ', -1),
  mt = { flex: '~ gap-2 items-center wrap' },
  _t = y(
    'div',
    { 'i-ph-files-duotone': '', my1: '', 'flex-none': '', op75: '' },
    null,
    -1
  ),
  yt = y('div', { op50: '' }, ' Applied generally for all files ', -1),
  vt = y(
    'div',
    { flex: '~ gap-2 items-center' },
    [
      y('div', {
        'i-ph-sliders-duotone': '',
        my1: '',
        'flex-none': '',
        op75: '',
      }),
      y('div', { op50: '' }, ' Rule options '),
    ],
    -1
  ),
  be = W({
    __name: 'RuleStateItem',
    props: { state: {}, isLocal: { type: Boolean } },
    setup(t) {
      const e = t,
        s = { error: 'text-red', warn: 'text-amber', off: 'text-gray' },
        n = P(() => re.value.configs[e.state.configIndex]),
        i = Pe();
      function o() {
        (je.rule = e.state.name), i.push('/configs');
      }
      return (r, c) => {
        var f, m;
        const a = ke,
          l = Ye,
          u = Je,
          h = nt;
        return (
          p(),
          g('div', rt, [
            y('div', it, [
              V(
                a,
                { level: r.state.level, 'config-index': r.state.configIndex },
                null,
                8,
                ['level', 'config-index']
              ),
              r.state.level === 'off'
                ? (p(), g('span', ot, 'Turned '))
                : (p(), g('span', ct, 'Set to ')),
              y(
                'span',
                { 'font-mono': '', class: L(s[r.state.level]) },
                K(r.state.level),
                3
              ),
              r.isLocal
                ? (p(), g('div', ht, ' in this config '))
                : (p(),
                  g(
                    $,
                    { key: 2 },
                    [
                      at,
                      y(
                        'button',
                        {
                          hover: '!color-base',
                          'text-gray': '',
                          onClick: c[0] || (c[0] = (_) => o()),
                        },
                        [
                          n.value.name
                            ? (p(),
                              j(
                                l,
                                {
                                  key: 0,
                                  name: n.value.name,
                                  px2: '',
                                  'font-mono': '',
                                  border: '~ base rounded',
                                },
                                null,
                                8,
                                ['name']
                              ))
                            : x('', !0),
                          lt,
                          ie(' ' + K(k(Me)(r.state.configIndex + 1)) + ' ', 1),
                          ut,
                        ]
                      ),
                    ],
                    64
                  )),
            ]),
            r.isLocal
              ? x('', !0)
              : (p(),
                g('div', dt, [
                  n.value.files
                    ? (p(),
                      g(
                        $,
                        { key: 0 },
                        [
                          pt,
                          y('div', ft, [
                            gt,
                            y('div', mt, [
                              (p(!0),
                              g(
                                $,
                                null,
                                H(
                                  (f = n.value.files) == null
                                    ? void 0
                                    : f.flat(),
                                  (_, v) => (
                                    p(),
                                    j(u, { key: v, glob: _ }, null, 8, ['glob'])
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]),
                        ],
                        64
                      ))
                    : n.value.rules
                      ? (p(), g($, { key: 1 }, [_t, yt], 64))
                      : x('', !0),
                ])),
            (m = r.state.options) != null && m.length
              ? (p(),
                g(
                  $,
                  { key: 1 },
                  [
                    vt,
                    (p(!0),
                    g(
                      $,
                      null,
                      H(
                        r.state.options,
                        (_, v) => (
                          p(),
                          j(
                            h,
                            {
                              key: v,
                              lang: 'ts',
                              code: k(et)(_),
                              rounded: '',
                              'bg-code': '',
                              p2: '',
                              'text-sm': '',
                            },
                            null,
                            8,
                            ['code']
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  64
                ))
              : x('', !0),
          ])
        );
      };
    },
  }),
  xt = { key: 0, 'max-h': '50vh' },
  Mt = { flex: '~ items-center gap-2', p3: '' },
  kt = y('div', { 'i-ph-book-duotone': '' }, null, -1),
  bt = y('div', { 'i-ph-copy-duotone': '' }, null, -1),
  wt = { key: 2, grid: '~ cols-2 items-center gap1', mx2: '' },
  It = { key: 0, 'i-ph-check-square-duotone': '', op50: '' },
  Et = { key: 1 },
  $t = { key: 2, 'i-ph-wrench-duotone': '', op50: '' },
  St = { key: 3 },
  At = {
    key: 0,
    border: '~ red/25 rounded',
    'bg-red:5': '',
    px1: '',
    'text-xs': '',
    'text-red': '',
  },
  Rt = {
    key: 3,
    flex: '',
    'flex-auto': '',
    'flex-col': '',
    'items-start': '',
    'justify-end': '',
  },
  Lt = { flex: '~ gap-2', mt1: '' },
  Ct = {
    key: 0,
    border: '~ red/25 rounded',
    'bg-red:5': '',
    px1: '',
    'text-xs': '',
    'text-red': '',
  },
  Nt = { key: 1, 'i-ph-check-square-duotone': '', op50: '' },
  Ot = { key: 2, 'i-ph-wrench-duotone': '', op50: '' },
  Tt = W({
    __name: 'RuleItem',
    props: {
      rule: {},
      ruleStates: {},
      value: {},
      class: {},
      gridView: { type: Boolean },
    },
    emits: ['badgeClick', 'stateClick'],
    setup(t, { emit: e }) {
      const s = t,
        n = e,
        { copy: i } = De();
      function o(r) {
        return r && r[0].toUpperCase() + r.slice(1);
      }
      return (r, c) => {
        var m, _, v, A, w;
        const a = ke,
          l = be,
          u = Ve('VDropdown'),
          h = qe,
          f = ze;
        return (
          p(),
          g(
            $,
            null,
            [
              r.ruleStates
                ? (p(),
                  g(
                    'div',
                    {
                      key: 0,
                      flex: '~ items-center gap-0.5 justify-end',
                      'text-lg': '',
                      class: L(
                        r.gridView ? 'absolute top-2 right-2 flex-col' : ''
                      ),
                    },
                    [
                      (p(!0),
                      g(
                        $,
                        null,
                        H(
                          r.ruleStates,
                          (M, I) => (
                            p(),
                            j(
                              u,
                              { key: I },
                              {
                                popper: N(({ shown: R }) => [
                                  R
                                    ? (p(),
                                      j(l, { key: 0, state: M }, null, 8, [
                                        'state',
                                      ]))
                                    : x('', !0),
                                ]),
                                default: N(() => {
                                  var R;
                                  return [
                                    V(
                                      a,
                                      {
                                        level: M.level,
                                        'config-index': M.configIndex,
                                        'has-options': !!(
                                          (R = M.options) != null && R.length
                                        ),
                                      },
                                      null,
                                      8,
                                      ['level', 'config-index', 'has-options']
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ))
                : x('', !0),
              r.value != null
                ? (p(),
                  g(
                    'div',
                    {
                      key: 1,
                      class: L([
                        s.class,
                        r.gridView ? 'absolute top-2 right-2 flex-col' : '',
                      ]),
                    },
                    [
                      V(
                        a,
                        {
                          level: k(Be)(r.value),
                          'has-options': !!(
                            (m = k(We)(r.value)) != null && m.length
                          ),
                        },
                        null,
                        8,
                        ['level', 'has-options']
                      ),
                    ],
                    2
                  ))
                : x('', !0),
              y(
                'div',
                { class: L(s.class) },
                [
                  V(
                    u,
                    { 'inline-block': '' },
                    {
                      popper: N(({ shown: M }) => {
                        var I;
                        return [
                          M
                            ? (p(),
                              g('div', xt, [
                                y('div', Mt, [
                                  V(
                                    f,
                                    {
                                      'btn-action-sm': '',
                                      to:
                                        (I = r.rule.docs) == null
                                          ? void 0
                                          : I.url,
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                      title: 'Docs',
                                    },
                                    {
                                      default: N(() => [kt, ie(' Docs ')]),
                                      _: 1,
                                    },
                                    8,
                                    ['to']
                                  ),
                                  y(
                                    'button',
                                    {
                                      'btn-action-sm': '',
                                      title: 'Copy',
                                      onClick:
                                        c[1] ||
                                        (c[1] = (R) => k(i)(r.rule.name)),
                                    },
                                    [bt, ie(' Copy name ')]
                                  ),
                                  X(r.$slots, 'popup-actions'),
                                ]),
                                X(r.$slots, 'popup'),
                              ]))
                            : x('', !0),
                        ];
                      }),
                      default: N(() => [
                        V(
                          h,
                          {
                            name: r.rule.name,
                            prefix: r.rule.plugin,
                            deprecated: r.rule.deprecated,
                            borderless: r.gridView,
                            break: r.gridView,
                            'text-start': '',
                            as: 'button',
                            onClick: c[0] || (c[0] = (M) => n('badgeClick', M)),
                          },
                          null,
                          8,
                          [
                            'name',
                            'prefix',
                            'deprecated',
                            'borderless',
                            'break',
                          ]
                        ),
                      ]),
                      _: 3,
                    }
                  ),
                ],
                2
              ),
              r.gridView
                ? x('', !0)
                : (p(),
                  g('div', wt, [
                    (_ = r.rule.docs) != null && _.recommended
                      ? Y((p(), g('div', It, null, 512)), [
                          [k(J), '✅ Recommended'],
                        ])
                      : (p(), g('div', Et)),
                    r.rule.fixable
                      ? Y((p(), g('div', $t, null, 512)), [
                          [k(J), '🔧 Fixable'],
                        ])
                      : (p(), g('div', St)),
                  ])),
              y(
                'div',
                { class: L(s.class), flex: '~ gap-2 items-center' },
                [
                  y(
                    'div',
                    {
                      class: L([
                        r.rule.deprecated ? 'line-through' : '',
                        r.gridView
                          ? 'op50 text-sm'
                          : 'op75 ws-nowrap of-hidden text-ellipsis line-clamp-1',
                      ]),
                    },
                    K(o((v = r.rule.docs) == null ? void 0 : v.description)),
                    3
                  ),
                  !r.gridView && r.rule.deprecated
                    ? (p(), g('div', At, ' DEPRECATED '))
                    : x('', !0),
                ],
                2
              ),
              r.gridView &&
              (r.rule.deprecated ||
                r.rule.fixable ||
                ((A = r.rule.docs) != null && A.recommended))
                ? (p(),
                  g('div', Rt, [
                    y('div', Lt, [
                      r.rule.deprecated
                        ? (p(), g('div', Ct, ' DEPRECATED '))
                        : x('', !0),
                      (w = r.rule.docs) != null && w.recommended
                        ? Y((p(), g('div', Nt, null, 512)), [
                            [k(J), '✅ Recommended'],
                          ])
                        : x('', !0),
                      r.rule.fixable
                        ? Y((p(), g('div', Ot, null, 512)), [
                            [k(J), '🔧 Fixable'],
                          ])
                        : x('', !0),
                    ]),
                  ]))
                : x('', !0),
            ],
            64
          )
        );
      };
    },
  }),
  Is = W({
    __name: 'RuleList',
    props: {
      rules: {},
      getBind: { type: Function },
      filter: { type: Function },
    },
    setup(t) {
      const e = t,
        s = P(() =>
          Array.isArray(e.rules)
            ? e.rules.map((c) => c.name)
            : Object.keys(e.rules)
        ),
        n = function (c) {
          return Array.isArray(e.rules)
            ? e.rules.find((a) => a.name === c)
            : He(c);
        },
        i = function (c) {
          return Array.isArray(e.rules) ? void 0 : e.rules[c];
        },
        o = P(() =>
          te.value
            ? 'grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-2'
            : (Array.isArray(e.rules),
              'grid grid-cols-[max-content_max-content_max-content_1fr] gap-x-2 gap-y-2 items-center')
        ),
        r = W({
          setup(c, { slots: a }) {
            return () => {
              var l, u;
              return te.value
                ? ne(
                    'div',
                    {
                      class:
                        'relative border border-base max-w-full rounded-lg p4 py3 flex flex-col gap-2 of-hidden justify-start',
                    },
                    (l = a.default) == null ? void 0 : l.call(a)
                  )
                : ne($, (u = a.default) == null ? void 0 : u.call(a));
            };
          },
        });
      return (c, a) => {
        const l = be,
          u = Tt;
        return (
          p(),
          g(
            'div',
            { class: L(o.value) },
            [
              (p(!0),
              g(
                $,
                null,
                H(s.value, (h) => {
                  var f;
                  return (
                    p(),
                    g(
                      $,
                      { key: h },
                      [
                        ((f = e.filter) == null ? void 0 : f.call(e, h)) !== !1
                          ? (p(),
                            j(
                              k(r),
                              { key: 0 },
                              {
                                default: N(() => {
                                  var m;
                                  return [
                                    V(
                                      u,
                                      Ke(
                                        {
                                          rule: n(h),
                                          'rule-states': Array.isArray(c.rules)
                                            ? k(re).ruleToState.get(h) || []
                                            : void 0,
                                          'grid-view': k(te),
                                          value: i(h),
                                          ref_for: !0,
                                        },
                                        (m = c.getBind) == null
                                          ? void 0
                                          : m.call(c, h)
                                      ),
                                      {
                                        popup: N(() => [
                                          X(
                                            c.$slots,
                                            'popup',
                                            { ruleName: h, value: i(h) },
                                            () => [
                                              (p(!0),
                                              g(
                                                $,
                                                null,
                                                H(
                                                  k(re).ruleToState.get(h) ||
                                                    [],
                                                  (_, v) => (
                                                    p(),
                                                    j(
                                                      l,
                                                      {
                                                        key: v,
                                                        border: 't base',
                                                        state: _,
                                                      },
                                                      null,
                                                      8,
                                                      ['state']
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]
                                          ),
                                        ]),
                                        'popup-actions': N(() => [
                                          X(c.$slots, 'popup-actions', {
                                            ruleName: h,
                                          }),
                                        ]),
                                        _: 2,
                                      },
                                      1040,
                                      [
                                        'rule',
                                        'rule-states',
                                        'grid-view',
                                        'value',
                                      ]
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1024
                            ))
                          : x('', !0),
                      ],
                      64
                    )
                  );
                }),
                128
              )),
            ],
            2
          )
        );
      };
    },
  });
function O(t) {
  return Array.isArray ? Array.isArray(t) : Ee(t) === '[object Array]';
}
const Ft = 1 / 0;
function Pt(t) {
  if (typeof t == 'string') return t;
  let e = t + '';
  return e == '0' && 1 / t == -Ft ? '-0' : e;
}
function jt(t) {
  return t == null ? '' : Pt(t);
}
function C(t) {
  return typeof t == 'string';
}
function we(t) {
  return typeof t == 'number';
}
function Dt(t) {
  return t === !0 || t === !1 || (Vt(t) && Ee(t) == '[object Boolean]');
}
function Ie(t) {
  return typeof t == 'object';
}
function Vt(t) {
  return Ie(t) && t !== null;
}
function b(t) {
  return t != null;
}
function se(t) {
  return !t.trim().length;
}
function Ee(t) {
  return t == null
    ? t === void 0
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(t);
}
const Bt = "Incorrect 'index' type",
  Wt = (t) => `Invalid value for key ${t}`,
  zt = (t) => `Pattern length exceeds max of ${t}.`,
  Kt = (t) => `Missing ${t} property in key`,
  Ht = (t) => `Property 'weight' in key '${t}' must be a positive integer`,
  me = Object.prototype.hasOwnProperty;
class Gt {
  constructor(e) {
    (this._keys = []), (this._keyMap = {});
    let s = 0;
    e.forEach((n) => {
      let i = $e(n);
      this._keys.push(i), (this._keyMap[i.id] = i), (s += i.weight);
    }),
      this._keys.forEach((n) => {
        n.weight /= s;
      });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function $e(t) {
  let e = null,
    s = null,
    n = null,
    i = 1,
    o = null;
  if (C(t) || O(t)) (n = t), (e = _e(t)), (s = oe(t));
  else {
    if (!me.call(t, 'name')) throw new Error(Kt('name'));
    const r = t.name;
    if (((n = r), me.call(t, 'weight') && ((i = t.weight), i <= 0)))
      throw new Error(Ht(r));
    (e = _e(r)), (s = oe(r)), (o = t.getFn);
  }
  return { path: e, id: s, weight: i, src: n, getFn: o };
}
function _e(t) {
  return O(t) ? t : t.split('.');
}
function oe(t) {
  return O(t) ? t.join('.') : t;
}
function Ut(t, e) {
  let s = [],
    n = !1;
  const i = (o, r, c) => {
    if (b(o))
      if (!r[c]) s.push(o);
      else {
        let a = r[c];
        const l = o[a];
        if (!b(l)) return;
        if (c === r.length - 1 && (C(l) || we(l) || Dt(l))) s.push(jt(l));
        else if (O(l)) {
          n = !0;
          for (let u = 0, h = l.length; u < h; u += 1) i(l[u], r, c + 1);
        } else r.length && i(l, r, c + 1);
      }
  };
  return i(t, C(e) ? e.split('.') : e, 0), n ? s : s[0];
}
const Yt = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  Jt = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) =>
      t.score === e.score
        ? t.idx < e.idx
          ? -1
          : 1
        : t.score < e.score
          ? -1
          : 1,
  },
  Qt = { location: 0, threshold: 0.6, distance: 100 },
  Xt = {
    useExtendedSearch: !1,
    getFn: Ut,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var d = { ...Jt, ...Yt, ...Qt, ...Xt };
const Zt = /[^ ]+/g;
function qt(t = 1, e = 3) {
  const s = new Map(),
    n = Math.pow(10, e);
  return {
    get(i) {
      const o = i.match(Zt).length;
      if (s.has(o)) return s.get(o);
      const r = 1 / Math.pow(o, 0.5 * t),
        c = parseFloat(Math.round(r * n) / n);
      return s.set(o, c), c;
    },
    clear() {
      s.clear();
    },
  };
}
class de {
  constructor({
    getFn: e = d.getFn,
    fieldNormWeight: s = d.fieldNormWeight,
  } = {}) {
    (this.norm = qt(s, 3)),
      (this.getFn = e),
      (this.isCreated = !1),
      this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    (this.keys = e),
      (this._keysMap = {}),
      e.forEach((s, n) => {
        this._keysMap[s.id] = n;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      C(this.docs[0])
        ? this.docs.forEach((e, s) => {
            this._addString(e, s);
          })
        : this.docs.forEach((e, s) => {
            this._addObject(e, s);
          }),
      this.norm.clear());
  }
  add(e) {
    const s = this.size();
    C(e) ? this._addString(e, s) : this._addObject(e, s);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let s = e, n = this.size(); s < n; s += 1) this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(e, s) {
    return e[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, s) {
    if (!b(e) || se(e)) return;
    let n = { v: e, i: s, n: this.norm.get(e) };
    this.records.push(n);
  }
  _addObject(e, s) {
    let n = { i: s, $: {} };
    this.keys.forEach((i, o) => {
      let r = i.getFn ? i.getFn(e) : this.getFn(e, i.path);
      if (b(r)) {
        if (O(r)) {
          let c = [];
          const a = [{ nestedArrIndex: -1, value: r }];
          for (; a.length; ) {
            const { nestedArrIndex: l, value: u } = a.pop();
            if (b(u))
              if (C(u) && !se(u)) {
                let h = { v: u, i: l, n: this.norm.get(u) };
                c.push(h);
              } else
                O(u) &&
                  u.forEach((h, f) => {
                    a.push({ nestedArrIndex: f, value: h });
                  });
          }
          n.$[o] = c;
        } else if (C(r) && !se(r)) {
          let c = { v: r, n: this.norm.get(r) };
          n.$[o] = c;
        }
      }
    }),
      this.records.push(n);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Se(
  t,
  e,
  { getFn: s = d.getFn, fieldNormWeight: n = d.fieldNormWeight } = {}
) {
  const i = new de({ getFn: s, fieldNormWeight: n });
  return i.setKeys(t.map($e)), i.setSources(e), i.create(), i;
}
function es(
  t,
  { getFn: e = d.getFn, fieldNormWeight: s = d.fieldNormWeight } = {}
) {
  const { keys: n, records: i } = t,
    o = new de({ getFn: e, fieldNormWeight: s });
  return o.setKeys(n), o.setIndexRecords(i), o;
}
function Q(
  t,
  {
    errors: e = 0,
    currentLocation: s = 0,
    expectedLocation: n = 0,
    distance: i = d.distance,
    ignoreLocation: o = d.ignoreLocation,
  } = {}
) {
  const r = e / t.length;
  if (o) return r;
  const c = Math.abs(n - s);
  return i ? r + c / i : c ? 1 : r;
}
function ts(t = [], e = d.minMatchCharLength) {
  let s = [],
    n = -1,
    i = -1,
    o = 0;
  for (let r = t.length; o < r; o += 1) {
    let c = t[o];
    c && n === -1
      ? (n = o)
      : !c &&
        n !== -1 &&
        ((i = o - 1), i - n + 1 >= e && s.push([n, i]), (n = -1));
  }
  return t[o - 1] && o - n >= e && s.push([n, o - 1]), s;
}
const B = 32;
function ss(
  t,
  e,
  s,
  {
    location: n = d.location,
    distance: i = d.distance,
    threshold: o = d.threshold,
    findAllMatches: r = d.findAllMatches,
    minMatchCharLength: c = d.minMatchCharLength,
    includeMatches: a = d.includeMatches,
    ignoreLocation: l = d.ignoreLocation,
  } = {}
) {
  if (e.length > B) throw new Error(zt(B));
  const u = e.length,
    h = t.length,
    f = Math.max(0, Math.min(n, h));
  let m = o,
    _ = f;
  const v = c > 1 || a,
    A = v ? Array(h) : [];
  let w;
  for (; (w = t.indexOf(e, _)) > -1; ) {
    let E = Q(e, {
      currentLocation: w,
      expectedLocation: f,
      distance: i,
      ignoreLocation: l,
    });
    if (((m = Math.min(E, m)), (_ = w + u), v)) {
      let T = 0;
      for (; T < u; ) (A[w + T] = 1), (T += 1);
    }
  }
  _ = -1;
  let M = [],
    I = 1,
    R = u + h;
  const Ne = 1 << (u - 1);
  for (let E = 0; E < u; E += 1) {
    let T = 0,
      F = R;
    for (; T < F; )
      Q(e, {
        errors: E,
        currentLocation: f + F,
        expectedLocation: f,
        distance: i,
        ignoreLocation: l,
      }) <= m
        ? (T = F)
        : (R = F),
        (F = Math.floor((R - T) / 2 + T));
    R = F;
    let pe = Math.max(1, f - F + 1),
      ee = r ? h : Math.min(f + F, h) + u,
      z = Array(ee + 2);
    z[ee + 1] = (1 << E) - 1;
    for (let S = ee; S >= pe; S -= 1) {
      let U = S - 1,
        fe = s[t.charAt(U)];
      if (
        (v && (A[U] = +!!fe),
        (z[S] = ((z[S + 1] << 1) | 1) & fe),
        E && (z[S] |= ((M[S + 1] | M[S]) << 1) | 1 | M[S + 1]),
        z[S] & Ne &&
          ((I = Q(e, {
            errors: E,
            currentLocation: U,
            expectedLocation: f,
            distance: i,
            ignoreLocation: l,
          })),
          I <= m))
      ) {
        if (((m = I), (_ = U), _ <= f)) break;
        pe = Math.max(1, 2 * f - _);
      }
    }
    if (
      Q(e, {
        errors: E + 1,
        currentLocation: f,
        expectedLocation: f,
        distance: i,
        ignoreLocation: l,
      }) > m
    )
      break;
    M = z;
  }
  const q = { isMatch: _ >= 0, score: Math.max(0.001, I) };
  if (v) {
    const E = ts(A, c);
    E.length ? a && (q.indices = E) : (q.isMatch = !1);
  }
  return q;
}
function ns(t) {
  let e = {};
  for (let s = 0, n = t.length; s < n; s += 1) {
    const i = t.charAt(s);
    e[i] = (e[i] || 0) | (1 << (n - s - 1));
  }
  return e;
}
class Ae {
  constructor(
    e,
    {
      location: s = d.location,
      threshold: n = d.threshold,
      distance: i = d.distance,
      includeMatches: o = d.includeMatches,
      findAllMatches: r = d.findAllMatches,
      minMatchCharLength: c = d.minMatchCharLength,
      isCaseSensitive: a = d.isCaseSensitive,
      ignoreLocation: l = d.ignoreLocation,
    } = {}
  ) {
    if (
      ((this.options = {
        location: s,
        threshold: n,
        distance: i,
        includeMatches: o,
        findAllMatches: r,
        minMatchCharLength: c,
        isCaseSensitive: a,
        ignoreLocation: l,
      }),
      (this.pattern = a ? e : e.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const u = (f, m) => {
        this.chunks.push({ pattern: f, alphabet: ns(f), startIndex: m });
      },
      h = this.pattern.length;
    if (h > B) {
      let f = 0;
      const m = h % B,
        _ = h - m;
      for (; f < _; ) u(this.pattern.substr(f, B), f), (f += B);
      if (m) {
        const v = h - B;
        u(this.pattern.substr(v), v);
      }
    } else u(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: s, includeMatches: n } = this.options;
    if ((s || (e = e.toLowerCase()), this.pattern === e)) {
      let _ = { isMatch: !0, score: 0 };
      return n && (_.indices = [[0, e.length - 1]]), _;
    }
    const {
      location: i,
      distance: o,
      threshold: r,
      findAllMatches: c,
      minMatchCharLength: a,
      ignoreLocation: l,
    } = this.options;
    let u = [],
      h = 0,
      f = !1;
    this.chunks.forEach(({ pattern: _, alphabet: v, startIndex: A }) => {
      const {
        isMatch: w,
        score: M,
        indices: I,
      } = ss(e, _, v, {
        location: i + A,
        distance: o,
        threshold: r,
        findAllMatches: c,
        minMatchCharLength: a,
        includeMatches: n,
        ignoreLocation: l,
      });
      w && (f = !0), (h += M), w && I && (u = [...u, ...I]);
    });
    let m = { isMatch: f, score: f ? h / this.chunks.length : 1 };
    return f && n && (m.indices = u), m;
  }
}
class D {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return ye(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return ye(e, this.singleRegex);
  }
  search() {}
}
function ye(t, e) {
  const s = t.match(e);
  return s ? s[1] : null;
}
class rs extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'exact';
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const s = e === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class is extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const n = e.indexOf(this.pattern) === -1;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class os extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'prefix-exact';
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const s = e.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1],
    };
  }
}
class cs extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-prefix-exact';
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const s = !e.startsWith(this.pattern);
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class as extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'suffix-exact';
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const s = e.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1],
    };
  }
}
class ls extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-suffix-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const s = !e.endsWith(this.pattern);
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Re extends D {
  constructor(
    e,
    {
      location: s = d.location,
      threshold: n = d.threshold,
      distance: i = d.distance,
      includeMatches: o = d.includeMatches,
      findAllMatches: r = d.findAllMatches,
      minMatchCharLength: c = d.minMatchCharLength,
      isCaseSensitive: a = d.isCaseSensitive,
      ignoreLocation: l = d.ignoreLocation,
    } = {}
  ) {
    super(e),
      (this._bitapSearch = new Ae(e, {
        location: s,
        threshold: n,
        distance: i,
        includeMatches: o,
        findAllMatches: r,
        minMatchCharLength: c,
        isCaseSensitive: a,
        ignoreLocation: l,
      }));
  }
  static get type() {
    return 'fuzzy';
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class Le extends D {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'include';
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let s = 0,
      n;
    const i = [],
      o = this.pattern.length;
    for (; (n = e.indexOf(this.pattern, s)) > -1; )
      (s = n + o), i.push([n, s - 1]);
    const r = !!i.length;
    return { isMatch: r, score: r ? 0 : 1, indices: i };
  }
}
const ce = [rs, Le, os, cs, ls, as, is, Re],
  ve = ce.length,
  us = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  hs = '|';
function ds(t, e = {}) {
  return t.split(hs).map((s) => {
    let n = s
        .trim()
        .split(us)
        .filter((o) => o && !!o.trim()),
      i = [];
    for (let o = 0, r = n.length; o < r; o += 1) {
      const c = n[o];
      let a = !1,
        l = -1;
      for (; !a && ++l < ve; ) {
        const u = ce[l];
        let h = u.isMultiMatch(c);
        h && (i.push(new u(h, e)), (a = !0));
      }
      if (!a)
        for (l = -1; ++l < ve; ) {
          const u = ce[l];
          let h = u.isSingleMatch(c);
          if (h) {
            i.push(new u(h, e));
            break;
          }
        }
    }
    return i;
  });
}
const ps = new Set([Re.type, Le.type]);
class fs {
  constructor(
    e,
    {
      isCaseSensitive: s = d.isCaseSensitive,
      includeMatches: n = d.includeMatches,
      minMatchCharLength: i = d.minMatchCharLength,
      ignoreLocation: o = d.ignoreLocation,
      findAllMatches: r = d.findAllMatches,
      location: c = d.location,
      threshold: a = d.threshold,
      distance: l = d.distance,
    } = {}
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: s,
        includeMatches: n,
        minMatchCharLength: i,
        findAllMatches: r,
        ignoreLocation: o,
        location: c,
        threshold: a,
        distance: l,
      }),
      (this.pattern = s ? e : e.toLowerCase()),
      (this.query = ds(this.pattern, this.options));
  }
  static condition(e, s) {
    return s.useExtendedSearch;
  }
  searchIn(e) {
    const s = this.query;
    if (!s) return { isMatch: !1, score: 1 };
    const { includeMatches: n, isCaseSensitive: i } = this.options;
    e = i ? e : e.toLowerCase();
    let o = 0,
      r = [],
      c = 0;
    for (let a = 0, l = s.length; a < l; a += 1) {
      const u = s[a];
      (r.length = 0), (o = 0);
      for (let h = 0, f = u.length; h < f; h += 1) {
        const m = u[h],
          { isMatch: _, indices: v, score: A } = m.search(e);
        if (_) {
          if (((o += 1), (c += A), n)) {
            const w = m.constructor.type;
            ps.has(w) ? (r = [...r, ...v]) : r.push(v);
          }
        } else {
          (c = 0), (o = 0), (r.length = 0);
          break;
        }
      }
      if (o) {
        let h = { isMatch: !0, score: c / o };
        return n && (h.indices = r), h;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const ae = [];
function gs(...t) {
  ae.push(...t);
}
function le(t, e) {
  for (let s = 0, n = ae.length; s < n; s += 1) {
    let i = ae[s];
    if (i.condition(t, e)) return new i(t, e);
  }
  return new Ae(t, e);
}
const Z = { AND: '$and', OR: '$or' },
  ue = { PATH: '$path', PATTERN: '$val' },
  he = (t) => !!(t[Z.AND] || t[Z.OR]),
  ms = (t) => !!t[ue.PATH],
  _s = (t) => !O(t) && Ie(t) && !he(t),
  xe = (t) => ({ [Z.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function Ce(t, e, { auto: s = !0 } = {}) {
  const n = (i) => {
    let o = Object.keys(i);
    const r = ms(i);
    if (!r && o.length > 1 && !he(i)) return n(xe(i));
    if (_s(i)) {
      const a = r ? i[ue.PATH] : o[0],
        l = r ? i[ue.PATTERN] : i[a];
      if (!C(l)) throw new Error(Wt(a));
      const u = { keyId: oe(a), pattern: l };
      return s && (u.searcher = le(l, e)), u;
    }
    let c = { children: [], operator: o[0] };
    return (
      o.forEach((a) => {
        const l = i[a];
        O(l) &&
          l.forEach((u) => {
            c.children.push(n(u));
          });
      }),
      c
    );
  };
  return he(t) || (t = xe(t)), n(t);
}
function ys(t, { ignoreFieldNorm: e = d.ignoreFieldNorm }) {
  t.forEach((s) => {
    let n = 1;
    s.matches.forEach(({ key: i, norm: o, score: r }) => {
      const c = i ? i.weight : null;
      n *= Math.pow(r === 0 && c ? Number.EPSILON : r, (c || 1) * (e ? 1 : o));
    }),
      (s.score = n);
  });
}
function vs(t, e) {
  const s = t.matches;
  (e.matches = []),
    b(s) &&
      s.forEach((n) => {
        if (!b(n.indices) || !n.indices.length) return;
        const { indices: i, value: o } = n;
        let r = { indices: i, value: o };
        n.key && (r.key = n.key.src),
          n.idx > -1 && (r.refIndex = n.idx),
          e.matches.push(r);
      });
}
function xs(t, e) {
  e.score = t.score;
}
function Ms(
  t,
  e,
  {
    includeMatches: s = d.includeMatches,
    includeScore: n = d.includeScore,
  } = {}
) {
  const i = [];
  return (
    s && i.push(vs),
    n && i.push(xs),
    t.map((o) => {
      const { idx: r } = o,
        c = { item: e[r], refIndex: r };
      return (
        i.length &&
          i.forEach((a) => {
            a(o, c);
          }),
        c
      );
    })
  );
}
class G {
  constructor(e, s = {}, n) {
    (this.options = { ...d, ...s }),
      this.options.useExtendedSearch,
      (this._keyStore = new Gt(this.options.keys)),
      this.setCollection(e, n);
  }
  setCollection(e, s) {
    if (((this._docs = e), s && !(s instanceof de))) throw new Error(Bt);
    this._myIndex =
      s ||
      Se(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    b(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const s = [];
    for (let n = 0, i = this._docs.length; n < i; n += 1) {
      const o = this._docs[n];
      e(o, n) && (this.removeAt(n), (n -= 1), (i -= 1), s.push(o));
    }
    return s;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: s = -1 } = {}) {
    const {
      includeMatches: n,
      includeScore: i,
      shouldSort: o,
      sortFn: r,
      ignoreFieldNorm: c,
    } = this.options;
    let a = C(e)
      ? C(this._docs[0])
        ? this._searchStringList(e)
        : this._searchObjectList(e)
      : this._searchLogical(e);
    return (
      ys(a, { ignoreFieldNorm: c }),
      o && a.sort(r),
      we(s) && s > -1 && (a = a.slice(0, s)),
      Ms(a, this._docs, { includeMatches: n, includeScore: i })
    );
  }
  _searchStringList(e) {
    const s = le(e, this.options),
      { records: n } = this._myIndex,
      i = [];
    return (
      n.forEach(({ v: o, i: r, n: c }) => {
        if (!b(o)) return;
        const { isMatch: a, score: l, indices: u } = s.searchIn(o);
        a &&
          i.push({
            item: o,
            idx: r,
            matches: [{ score: l, value: o, norm: c, indices: u }],
          });
      }),
      i
    );
  }
  _searchLogical(e) {
    const s = Ce(e, this.options),
      n = (c, a, l) => {
        if (!c.children) {
          const { keyId: h, searcher: f } = c,
            m = this._findMatches({
              key: this._keyStore.get(h),
              value: this._myIndex.getValueForItemAtKeyId(a, h),
              searcher: f,
            });
          return m && m.length ? [{ idx: l, item: a, matches: m }] : [];
        }
        const u = [];
        for (let h = 0, f = c.children.length; h < f; h += 1) {
          const m = c.children[h],
            _ = n(m, a, l);
          if (_.length) u.push(..._);
          else if (c.operator === Z.AND) return [];
        }
        return u;
      },
      i = this._myIndex.records,
      o = {},
      r = [];
    return (
      i.forEach(({ $: c, i: a }) => {
        if (b(c)) {
          let l = n(s, c, a);
          l.length &&
            (o[a] || ((o[a] = { idx: a, item: c, matches: [] }), r.push(o[a])),
            l.forEach(({ matches: u }) => {
              o[a].matches.push(...u);
            }));
        }
      }),
      r
    );
  }
  _searchObjectList(e) {
    const s = le(e, this.options),
      { keys: n, records: i } = this._myIndex,
      o = [];
    return (
      i.forEach(({ $: r, i: c }) => {
        if (!b(r)) return;
        let a = [];
        n.forEach((l, u) => {
          a.push(...this._findMatches({ key: l, value: r[u], searcher: s }));
        }),
          a.length && o.push({ idx: c, item: r, matches: a });
      }),
      o
    );
  }
  _findMatches({ key: e, value: s, searcher: n }) {
    if (!b(s)) return [];
    let i = [];
    if (O(s))
      s.forEach(({ v: o, i: r, n: c }) => {
        if (!b(o)) return;
        const { isMatch: a, score: l, indices: u } = n.searchIn(o);
        a &&
          i.push({ score: l, key: e, value: o, idx: r, norm: c, indices: u });
      });
    else {
      const { v: o, n: r } = s,
        { isMatch: c, score: a, indices: l } = n.searchIn(o);
      c && i.push({ score: a, key: e, value: o, norm: r, indices: l });
    }
    return i;
  }
}
G.version = '7.0.0';
G.createIndex = Se;
G.parseIndex = es;
G.config = d;
G.parseQuery = Ce;
gs(fs);
export { G as F, be as _, Is as a, nt as b, qe as c, ke as d, et as s };
