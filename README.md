# Simple Blog — React + Laravel REST API

Небольшой блог: SPA на React (Vite) и REST API на Laravel. Фронтенд обращается к бэкенду через прокси Vite: `/api` → `http://localhost:8000`, префикс `/api` отбрасывается.

## Стек
- Frontend: React 19, Vite 8, React Router 7, Axios, Tailwind CSS 4, react-icons.
- Backend: PHP 8.3, Laravel 13, Laravel Sanctum, MySQL/SQLite (через `.env`), PHPUnit.

## Структура
- `src/` — React-приложение (`components/`, `pages/`, `assets/`).
- `api/` — Laravel: `routes/`, `app/Http/Controllers/`, `app/Models/`, `database/migrations/`.
- `Dockerfile`, `compose.yaml` — контейнеризация фронтенда.

## Эндпойнты (по коду)
Объявлены в `api/routes/web.php`:
| Метод | Путь | Контроллер |
|---|---|---|
| GET | /posts | PostController@index |
| POST | /posts | PostController@store |
| GET | /posts/{id} | PostController@show |
| GET | /posts/{id}/comments | CommentController@index |

В `api/routes/api.php` объявлен только `GET /user` (middleware `auth:sanctum`).

## Запуск (локально, dev)
Backend:
```sh
cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve        # http://localhost:8000
```
Frontend:
```sh
yarn install
yarn dev                 # Vite dev-сервер, проксирует /api → http://localhost:8000
```

## Запуск через Docker
```sh
docker compose up --build
```
`Dockerfile` устанавливает зависимости и запускает `yarn dev`. В `compose.yaml` порт опубликован как `9000:80`, при этом контейнер слушает порт `5180` (значения не согласованы, см. Заметки).

## Тесты
```sh
cd api
php artisan test
```
`phpunit.xml` использует SQLite в памяти. В репозитории только стандартные `ExampleTest` (Unit, Feature).

## Заметки (по факту кода)
- API-роуты постов лежат в `routes/web.php`, а не в `routes/api.php`.
- В `database/migrations/` две миграции создают таблицу `posts` (`2026_05_25_105757_...` и `2026_06_15_100418_...`).
- `PostController` объявляет только `index` и `show`, хотя роут `POST /posts` ссылается на `store`.
- Порты `Dockerfile` (`5180`) и `compose.yaml` (`9000:80`) не согласованы.
- `.env` не должен попадать в репозиторий (в `.gitignore`); реальные ключи в коде не хранятся.
