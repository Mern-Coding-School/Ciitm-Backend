import {
  f as U,
  m as A,
  g as N,
  c as f,
  F as B,
  q as D,
  o as d,
  Y as M,
  a as s,
  W as R,
  d as k,
  t as _,
  n as C,
  A as P,
  Z as j,
  j as y,
  G as c,
  C as o,
  r as G,
  I as L,
  O as q,
  x as n,
  b as S,
  w as F,
  s as g,
  l as T,
  $ as z,
  H as V,
} from './BsYh-B0w.js';
import { F as E, a as I, d as W } from './71Khq5Af.js';
import { g as O } from './CMvAj04f.js';
const H = { flex: '~ inline gap-1 wrap', 'of-hidden': '', 'text-sm': '' },
  Y = ['title'],
  Z = ['value', 'title'],
  J = U({
    __name: 'OptionSelectGroup',
    props: A(
      { options: {}, titles: {}, classes: {}, props: {} },
      { modelValue: { type: [String, Number] }, modelModifiers: {} }
    ),
    emits: ['update:modelValue'],
    setup($) {
      const m = N($, 'modelValue');
      return (r, h) => (
        d(),
        f('fieldset', H, [
          (d(!0),
          f(
            B,
            null,
            D(r.options, (v, i) => {
              var b, x, t, e, a, u, w, l;
              return (
                d(),
                f(
                  'label',
                  M(
                    {
                      key: v,
                      border: '~ base rounded-full',
                      relative: '',
                      'hover:bg-hover': '',
                      'px2.5': '',
                      'py0.5': '',
                      class: [
                        v === m.value
                          ? 'bg-active'
                          : 'saturate-0 hover:saturate-100',
                        ((x = (b = r.props) == null ? void 0 : b[i]) == null
                          ? void 0
                          : x.class) || '',
                      ],
                      ref_for: !0,
                    },
                    (t = r.props) == null ? void 0 : t[i],
                    { title: (e = r.titles) == null ? void 0 : e[i] }
                  ),
                  [
                    s(
                      'div',
                      {
                        class: C([
                          v === m.value ? '' : 'op50',
                          (a = r.titles) != null && a[i] ? '' : 'capitalize',
                          ((u = r.classes) == null ? void 0 : u[i]) || '',
                        ]),
                      },
                      [
                        R(
                          r.$slots,
                          'default',
                          {
                            value: v,
                            title: (w = r.titles) == null ? void 0 : w[i],
                            index: i,
                          },
                          () => {
                            var p;
                            return [
                              k(
                                _(
                                  ((p = r.titles) == null ? void 0 : p[i]) ?? v
                                ),
                                1
                              ),
                            ];
                          }
                        ),
                      ],
                      2
                    ),
                    P(
                      s(
                        'input',
                        {
                          'onUpdate:modelValue':
                            h[0] || (h[0] = (p) => (m.value = p)),
                          type: 'radio',
                          value: v,
                          title: (l = r.titles) == null ? void 0 : l[i],
                          absolute: '',
                          'inset-0': '',
                          'op-0.1': '',
                        },
                        null,
                        8,
                        Z
                      ),
                      [[j, m.value]]
                    ),
                  ],
                  16,
                  Y
                )
              );
            }),
            128
          )),
        ])
      );
    },
  }),
  K = { py4: '', flex: '~ col gap-2' },
  Q = { relative: '', flex: '' },
  X = s(
    'div',
    {
      absolute: '',
      'bottom-0': '',
      'left-0': '',
      'top-0': '',
      flex: '~ items-center justify-center',
      p4: '',
      op50: '',
    },
    [s('div', { 'i-ph-magnifying-glass-duotone': '' })],
    -1
  ),
  ee = { grid: '~ cols-[max-content_1fr] gap-2', my2: '', 'items-center': '' },
  te = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' Plugins ', -1),
  le = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' Usage ', -1),
  oe = { class: 'flex items-center' },
  se = { 'ml--1': '', 'mr-1': '', flex: '', 'items-center': '' },
  ae = s('div', { 'text-right': '', 'text-sm': '', op50: '' }, ' State ', -1),
  ne = { flex: '', 'items-center': '', 'gap-1': '' },
  re = {
    key: 0,
    'i-ph-check-square-duotone': '',
    'ml--0.5': '',
    'text-green': '',
  },
  ie = { key: 1, 'i-ph-wrench-duotone': '', 'ml--0.5': '', 'text-amber': '' },
  ue = {
    key: 2,
    'i-ph-prohibit-inset-duotone': '',
    'ml--1': '',
    'text-gray': '',
  },
  de = { 'items-center': '', 'justify-between': '', 'md:flex': '' },
  pe = { flex: '~ gap-2', 'lt-sm:flex-col': '' },
  ce = {
    flex: '~ inline gap-2 items-center',
    border: '~ gray/20 rounded-full',
    'bg-gray:10': '',
    px3: '',
    py1: '',
  },
  fe = s('div', { 'i-ph-list-checks-duotone': '' }, null, -1),
  me = { op75: '' },
  ve = { 'text-sm': '', op50: '' },
  ge = s('div', { 'i-ph-funnel-duotone': '', 'text-purple': '' }, null, -1),
  he = s('span', { op50: '' }, 'Clear Filter', -1),
  _e = s(
    'button',
    { 'i-ph-x': '', 'ml--1': '', 'text-sm': '', op25: '', 'hover:op100': '' },
    null,
    -1
  ),
  be = [ge, he, _e],
  ye = { key: 0, flex: '~ gap-1' },
  ke = s('div', { 'i-ph-list-duotone': '' }, null, -1),
  xe = s('div', { 'i-ph-grid-four-duotone': '' }, null, -1),
  Ce = U({
    __name: 'rules',
    setup($) {
      const m = y(() => Object.values(c.value.rules)),
        r = y(() =>
          Array.from(new Set(m.value.map((t) => t.plugin))).filter(Boolean)
        ),
        h = y(() => {
          let t = m.value;
          switch (
            (o.plugin && (t = t.filter((e) => e.plugin === o.plugin)),
            o.fixable != null &&
              (t = t.filter((e) => !!e.fixable === o.fixable)),
            o.state)
          ) {
            case 'using':
              t = t.filter((e) => c.value.ruleToState.get(e.name));
              break;
            case 'unused':
              t = t.filter((e) => !c.value.ruleToState.get(e.name));
              break;
            case 'overloads':
              t = t.filter((e) => {
                var a;
                return (
                  (((a = c.value.ruleToState.get(e.name)) == null
                    ? void 0
                    : a.length) || 0) > 1
                );
              });
              break;
            case 'error':
              t = t.filter((e) => {
                var a;
                return (a = c.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : a.some((u) => u.level === 'error');
              });
              break;
            case 'warn':
              t = t.filter((e) => {
                var a;
                return (a = c.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : a.some((u) => u.level === 'warn');
              });
              break;
            case 'off':
              t = t.filter((e) => {
                var a;
                return (a = c.value.ruleToState.get(e.name)) == null
                  ? void 0
                  : a.some((u) => u.level === 'off');
              });
              break;
            case 'off-only':
              t = t.filter((e) => {
                const a = c.value.ruleToState.get(e.name);
                return a != null && a.length
                  ? a.every((u) => u.level === 'off')
                  : !1;
              });
              break;
          }
          switch (o.status) {
            case 'active':
              t = t.filter((e) => !e.deprecated);
              break;
            case 'recommended':
              t = t.filter((e) => {
                var a;
                return (a = e.docs) == null ? void 0 : a.recommended;
              });
              break;
            case 'fixable':
              t = t.filter((e) => e.fixable);
              break;
            case 'deprecated':
              t = t.filter((e) => e.deprecated);
              break;
          }
          return t;
        }),
        v = y(
          () =>
            new E(h.value, {
              keys: ['name', 'docs.description'],
              threshold: 0.5,
            })
        ),
        i = G(h.value);
      L(
        () => [o.search, h.value],
        () => {
          if (!o.search) return (i.value = h.value);
          i.value = v.value.search(o.search).map((t) => t.item);
        },
        { debounce: 200 }
      );
      const b = y(
        () =>
          !(
            o.search ||
            o.plugin ||
            o.state !== 'using' ||
            o.status !== 'active'
          )
      );
      function x() {
        (o.search = ''),
          (o.plugin = ''),
          (o.state = 'using'),
          (o.status = 'active');
      }
      return (t, e) => {
        const a = J,
          u = W,
          w = I;
        return (
          d(),
          f('div', null, [
            s('div', K, [
              s('div', Q, [
                P(
                  s(
                    'input',
                    {
                      'onUpdate:modelValue':
                        e[0] || (e[0] = (l) => (n(o).search = l)),
                      class: C(n(o).search ? 'font-mono' : ''),
                      placeholder: 'Search rules...',
                      border: '~ base rounded-full',
                      'w-full': '',
                      'bg-transparent': '',
                      px3: '',
                      py2: '',
                      pl10: '',
                      'outline-none': '',
                    },
                    null,
                    2
                  ),
                  [[q, n(o).search]]
                ),
                X,
              ]),
              s('div', ee, [
                te,
                S(
                  a,
                  {
                    modelValue: n(o).plugin,
                    'onUpdate:modelValue':
                      e[1] || (e[1] = (l) => (n(o).plugin = l)),
                    options: ['', ...r.value],
                    titles: ['All', ...r.value],
                    props: [
                      {},
                      ...r.value.map((l) => ({
                        class: 'font-mono',
                        style:
                          n(o).plugin === l
                            ? {
                                color: ('getPluginColor' in t
                                  ? t.getPluginColor
                                  : n(O))(l),
                                backgroundColor: ('getPluginColor' in t
                                  ? t.getPluginColor
                                  : n(O))(l, 0.1),
                              }
                            : {},
                      })),
                    ],
                  },
                  null,
                  8,
                  ['modelValue', 'options', 'titles', 'props']
                ),
                le,
                S(
                  a,
                  {
                    modelValue: n(o).state,
                    'onUpdate:modelValue':
                      e[2] || (e[2] = (l) => (n(o).state = l)),
                    options: [
                      '',
                      'using',
                      'unused',
                      'error',
                      'warn',
                      'off',
                      'overloads',
                      'off-only',
                    ],
                    titles: [
                      'All',
                      'Using',
                      'Unused',
                      'Error',
                      'Warn',
                      'Off',
                      'Overloaded',
                      'Off Only',
                    ],
                  },
                  {
                    default: F(({ value: l, title: p }) => [
                      s('div', oe, [
                        s('div', se, [
                          l === 'error' || l === 'overloads'
                            ? (d(), T(u, { key: 0, level: 'error' }))
                            : g('', !0),
                          l === 'warn' || l === 'overloads'
                            ? (d(), T(u, { key: 1, level: 'warn' }))
                            : g('', !0),
                          l === 'off' || l === 'off-only' || l === 'overloads'
                            ? (d(), T(u, { key: 2, level: 'off' }))
                            : g('', !0),
                        ]),
                        k(' ' + _(p || l), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue']
                ),
                ae,
                S(
                  a,
                  {
                    modelValue: n(o).status,
                    'onUpdate:modelValue':
                      e[3] || (e[3] = (l) => (n(o).status = l)),
                    options: [
                      '',
                      'active',
                      'recommended',
                      'fixable',
                      'deprecated',
                    ],
                    titles: [
                      'All',
                      'Active',
                      'Recommended',
                      'Fixable',
                      'Deprecated',
                    ],
                  },
                  {
                    default: F(({ value: l, title: p }) => [
                      s('div', ne, [
                        l === 'recommended' ? (d(), f('div', re)) : g('', !0),
                        l === 'fixable' ? (d(), f('div', ie)) : g('', !0),
                        l === 'deprecated' ? (d(), f('div', ue)) : g('', !0),
                        k(' ' + _(p || l), 1),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue']
                ),
              ]),
            ]),
            s('div', de, [
              s('div', pe, [
                s('div', ce, [
                  fe,
                  s('span', null, _(i.value.length), 1),
                  s(
                    'span',
                    me,
                    'rules ' + _(b.value ? 'enabled' : 'filtered'),
                    1
                  ),
                  s('span', ve, 'out of ' + _(m.value.length) + ' rules', 1),
                ]),
                b.value
                  ? g('', !0)
                  : (d(),
                    f(
                      'button',
                      {
                        key: 0,
                        flex: '~ inline gap-2 items-center self-start',
                        border: '~ purple/20 rounded-full',
                        'bg-purple:10': '',
                        px3: '',
                        py1: '',
                        onClick: e[4] || (e[4] = (l) => x()),
                      },
                      be
                    )),
              ]),
              n(z)
                ? g('', !0)
                : (d(),
                  f('div', ye, [
                    s(
                      'button',
                      {
                        'btn-action': '',
                        class: C({
                          'btn-action-active': n(V).viewType === 'list',
                        }),
                        onClick:
                          e[5] || (e[5] = (l) => (n(V).viewType = 'list')),
                      },
                      [ke, k(' List ')],
                      2
                    ),
                    s(
                      'button',
                      {
                        'btn-action': '',
                        class: C({
                          'btn-action-active': n(V).viewType === 'grid',
                        }),
                        onClick:
                          e[6] || (e[6] = (l) => (n(V).viewType = 'grid')),
                      },
                      [xe, k(' Grid ')],
                      2
                    ),
                  ])),
            ]),
            S(
              w,
              {
                my4: '',
                rules: i.value,
                'get-bind': (l) => {
                  var p;
                  return {
                    class:
                      ((p = n(c).ruleToState.get(l)) != null && p.length) ||
                      n(o).state === 'unused'
                        ? ''
                        : 'op40',
                  };
                },
              },
              null,
              8,
              ['rules', 'get-bind']
            ),
          ])
        );
      };
    },
  });
export { Ce as default };
