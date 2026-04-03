# Grignotte — Frontend

Interface Vue 3 pour la découverte de repas et la gestion de recettes personnalisées.

## Stack technique

- **Vue 3** (Composition API) / **Vite 5**
- **Vue Router 4** — navigation
- **Pinia** — gestion d'état
- **Axios** — requêtes HTTP
- **Tailwind CSS** — styles
- **Vitest** — tests unitaires
- **Playwright** — tests end-to-end

## Prérequis

- Node.js 18+
- npm

## Configuration

Copier le fichier d'environnement et l'adapter si nécessaire :

```bash
cp .env.example .env
```

| Variable            | Valeur par défaut                              | Description                  |
|---------------------|------------------------------------------------|------------------------------|
| `VITE_API_BASE_URL` | `https://www.themealdb.com/api/json/v1/1/`     | URL de l'API TheMealDB       |
| `VITE_BACKEND_URL`  | `http://localhost:8081`                        | URL du backend Grignotte     |

## Lancement en développement

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:8080`.

## Build de production

```bash
npm run build
npm run preview   # Pour prévisualiser le build
```

## Lancement avec Docker

```bash
docker build -t grignotte-front .
docker run -p 8080:8080 grignotte-front
```

## Commandes utiles

```bash
npm run test:unit   # Tests unitaires (Vitest)
npm run test:e2e    # Tests end-to-end (Playwright)
npm run lint        # Lint + auto-fix (ESLint)
npm run format      # Formatage du code (Prettier)
```

## Fonctionnalités

- **Découverte de repas** via l'API publique TheMealDB
  - Recherche par nom
  - Navigation par lettre
  - Filtrage par ingrédient
  - Détail d'un repas (ingrédients, instructions, vidéo)
- **Authentification** — inscription et connexion (JWT)
- **Recettes personnalisées** — création et suppression de ses propres recettes

## Structure du projet

```
src/
├── views/           # Pages de l'application
├── components/      # Composants réutilisables
├── stores/          # État global (Pinia)
├── services/        # Appels API
├── router/          # Configuration des routes
├── axiosClient.js   # Client HTTP TheMealDB
└── backendClient.js # Client HTTP backend
```
