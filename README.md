# @k7bart/restaurant-shared-types

TypeScript **declaration-only** package describing the Restaurant product’s HTTP JSON shapes and UI domain models.

## Consumption

- **Today:** the React frontend (`restaurant`) is the only consumer. Install from npm and import from the package root:

  ```ts
  import type { User, CartItem, Response } from "@k7bart/restaurant-shared-types";
  ```

- **Backend:** `restaurant-backend` is plain JavaScript and does **not** import this package yet. Treat these types as the **frontend API contract**; when adding BE modules, align Mongoose schemas and controller payloads with these declarations (or extend the types first).

Deep imports (for example `@k7bart/restaurant-shared-types/dist/ticket`) are not supported — use the root export map.

## Build & publish

```bash
npm run build   # cleans dist/ and emits .d.ts only
npm publish     # runs prepublishOnly → build
```

There is no runtime JavaScript entry; `"types"` and `"exports"` point at `dist/index.d.ts`.

## Contract notes

| Area | Types | Backend today |
|------|--------|----------------|
| Auth user | `MeUser` from `/auth/me`, login, signup | Identity fields only |
| Full profile | `User` with optional `orders`, `addresses`, `reservations`, `tickets` | Nested arrays filled client-side until domain APIs land |
| Reservations | `Reservation.id` is **number** | Counter sequence in Mongo |
| Cart line items | `CartItem.quantity` | Client Redux only |
| Auth refresh / logout | `Response` with optional `data` | No JSON body on success |
