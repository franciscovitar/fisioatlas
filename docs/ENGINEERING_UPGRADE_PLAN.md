# Engineering Upgrade Plan — fisioatlas

> **Meta:** usar Fisioatlas como piloto de su familia y llevarlo a **BUENO+** sin rediseño.
> **Principio:** es una web estática; no necesita backend, state manager ni arquitectura enterprise.

## Contrato para la IA ejecutora

Antes de cambios:
- baseline desktop/mobile de `/` y `/obras-sociales`;
- capturar Slick/reseñas, navbar desde ambas rutas y buscador de coberturas;
- preservar logo, servicios, coberturas, reseñas, Motion, Slick, responsive, anchors, WhatsApp/Instagram y copy;
- no corregir contenido clínico/comercial durante este trabajo.

---

# FASE 1 — Home server-first: conservar

## `app/page.js`
Está bien como composición Server Component.

- eliminar solo import muerto `Image` si sigue sin uso;
- no agregar fetching/state/global providers;
- mantener orden de secciones.

---

# FASE 2 — `/obras-sociales`: aislar búsqueda

## `app/obras-sociales/page.js`
Hoy toda la page es client por `searchTerm`.

## Target

```text
components/coverage/CoverageSearch.client.tsx
data/coverages.ts
lib/normalize-search.ts
```

Page server; input/filtro/lista como client island.

## Tests
vacío, acentos, match/no match, navegación Home↔obras sociales.

---

# FASE 3 — `Coberturas.jsx`: separar data/render

Problemas:
- lista inline;
- filtro/normalización mezclados con UI;
- keys por índice;
- comentarios legacy.

## Pasos
1. Mover datos exactos a `data/coverages.ts`.
2. IDs estables.
3. Helper puro accent-insensitive.
4. Preservar orden/nombres, aunque parezcan typos.
5. No instalar search libraries para este volumen.

---

# FASE 4 — Servicios data-driven

## `Servicios.jsx`
5 bloques Motion casi idénticos.

Target:

```ts
const SERVICES = [{ id, Icon, title, description, delay }]
```

Un `map`, manteniendo DOM, clases, icon size, delays y orden.

No corregir copy editorial aquí.

---

# FASE 5 — Reseñas: Slick está activo y se conserva

## `Reseñas.jsx`
- React Slick activo;
- autoplay 3000ms y breakpoints productivos;
- ~20 reviews inline, incluso algunas con texto vacío.

## Pasos
1. `data/reviews.ts` con IDs estables.
2. Mantener settings cerca del componente client.
3. Preservar autoplay, initialSlide, breakpoints, estrellas, reviews vacías y CTA.
4. No reemplazar Slick salvo incompatibilidad futura demostrada.
5. Visual regression desktop/tablet/mobile.

---

# FASE 6 — Navbar correctness

Fortaleza: scroll listener + cleanup ya correctos.

Deuda:
- clicked + refs/classList duplican autoridad;
- nav mobile/desktop duplicada;
- `<i type="button">`;
- logo sin alt/`./`;
- anchors locales pueden fallar desde `/obras-sociales`.

## Target
- `NAV_ITEMS` único;
- `isMenuOpen` único;
- button semántico/ARIA;
- verificar si desde ruta secundaria debe usar `/#inicio`, `/#servicios`, etc.;
- conservar threshold 80px y Motion/clases.

---

# FASE 7 — Contacto

Contacto es estático. **No crear formulario ni backend.**

Mantener Motion si visible; mejorar únicamente semántica/alt/links/tipado cuando no cambie apariencia.

---

# FASE 8 — assets/template residue

Inventario inicial:
- `soporte2.jpg` ~1.07 MB;
- banco*.png ~327–343 KB;
- welcome ~280 KB;
- assets con nombres de template.

## Pasos
1. import graph;
2. clasificar active/dead/template residue;
3. eliminar muertos;
4. optimizar activos grandes con comparación visual;
5. no renombrar todo en el mismo PR.

---

# FASE 9 — package/template debt

Package actual `modo`, Next14.2.5/React18/ESLint8.

1. `name: fisioatlas`;
2. fijar Node/package manager;
3. verificar Tailwind/PostCSS por uso real;
4. conservar Bootstrap/Motion/Slick mientras tengan consumidor;
5. TypeScript gradual en data/props/search;
6. quality gate + CI;
7. framework upgrade al final.

---

# FASE 10 — layout/SEO

- `lang="en"` → `es`/`es-AR`;
- conservar Quicksand y CSS global de Slick;
- metadata específica actual se preserva;
- canonical/OpenGraph solo con dominio productivo confirmado.

---

# Quality gate

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run check
```

Cobertura: coverage search, services catalog, Slick smoke, Navbar desde ambas rutas, Home/coberturas snapshots.

---

# Orden de PRs

1. baseline/import graph;
2. CoverageSearch/data/helpers;
3. Services + Reviews data-driven;
4. Navbar correctness;
5. template/assets/dependency cleanup;
6. TS/check/CI;
7. framework/SEO/performance.

---

# Definition of Done — BUENO+

- Home sigue server composition simple;
- coverage search aislada/testeada;
- servicios/reseñas sin copy-paste estructural innecesario;
- Slick se conserva mientras sea útil;
- Navbar funciona desde `/obras-sociales`;
- package ya no es `modo`;
- no hay deps/assets template muertos evidentes;
- lint + typecheck + tests + E2E + build PASS;
- visual regression aprobada.

---

# Prompt para la IA ejecutora

```text
Implementá docs/ENGINEERING_UPGRADE_PLAN.md completo. No rediseñes fisioatlas.

Conservá app/page.js server-first y React Slick. Separá únicamente búsqueda/data/client state que hoy obliga a hacer cliente a páginas completas. No inventes backend ni corrijas contenido clínico por tu cuenta.

Usá este repo como piloto solo para patrones técnicos; no conviertas su data en una fuente compartida para otros clientes. Corré tests/screenshots por fase y no declares terminado hasta cumplir la Definition of Done.
```
