# AGENTS.md

## Project Structure

- **Frontend** (root): React 19 + Vite 8 + Tailwind CSS 4, package manager is `yarn`
- **Backend** (`api/`): Laravel 13 (PHP 8.3+), uses SQLite by default, package manager is `composer`

## Commands

### Frontend (root)
```
yarn dev        # Start Vite dev server with HMR
yarn build      # Production build → dist/
yarn lint       # ESLint (flat config)
yarn preview    # Preview production build
```

### Backend (api/)
```
composer run setup    # First-time: install deps, create .env, generate key, migrate
composer run dev      # Dev: serves API + queue + logs + Vite (uses concurrently)
composer run test     # Run PHPUnit tests
```

## Architecture

- Frontend entry: `src/main.jsx` — routes: `/` (App), `/post` (Post), `*` (404)
- Frontend fetches from backend via `axios` (no base URL configured — defaults to same origin)
- Backend API routes in `api/routes/web.php`: `GET /posts`, `GET /posts/{id}`, `POST /posts`
- Backend also serves a Blade welcome page at `GET /`
- Frontend and backend are decoupled; run both `yarn dev` (root) and `composer run dev` (api/) simultaneously for full dev

## Testing

- Frontend: no test framework configured
- Backend: `composer run test` runs PHPUnit; tests in `api/tests/`

## Gotchas

- Root uses `yarn`, backend uses `composer` — do not mix package managers
- Backend `.env` must exist before any artisan command; run `composer run setup` first
- ESLint uses flat config (`eslint.config.js`), not `.eslintrc`
- No TypeScript — plain JSX
