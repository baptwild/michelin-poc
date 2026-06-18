# Michelin Performance Hub - Backend

Ce répertoire contient l'API REST du projet, développée avec le framework NestJS et utilisant l'ORM Prisma pour l'accès aux données.

## Spécifications Techniques

* **Framework :** NestJS (Node.js / TypeScript)
* **ORM :** Prisma
* **Base de données :** SQLite (Fichier local `prisma/dev.db`)
* **Port d'écoute :** 3001
* **URL locale :** http://localhost:3001

## Configuration

L'application consomme l'API backend via la variable d'environnement suivante, à définir dans un fichier `.env` à créer ici, à la base du dossier [`/backend`](/backend/) :

```bash
DATABASE_URL="file:./dev.db"
```

## Architecture du Module Tyres

L'API expose un module unique `TyresModule` structuré de la manière suivante :
* `tyres.controller.ts` : Gestion des routes HTTP et des paramètres de requêtes.
* `tyres.service.ts` : Logique d'interrogation de la base de données via le client Prisma.

## Documentation des Endpoints

| Méthode | Route | Paramètres de requête | Description |
| :--- | :--- | :--- | :--- |
| **GET** | `/tyres` | Aucun | Renvoie l'intégralité du catalogue de pneus. |
| **GET** | `/tyres/filter` | `category` (`road`, `gravel`, `mtb`, `urban`) | Renvoie les pneus filtrés par segment. |

## Développement Local (Hors Docker)

Si vous devez exécuter le backend indépendamment du conteneur global, suivez ces étapes :

### 1. Installez les dépendances :
```bash
npm install
```

### 2. Générez le client Prisma pour votre architecture locale :

```bash
npx prisma generate
```

### 3. Exécutez le script d'initialisation de la base de données (Seeding) :

```bash
npx prisma db seed
```

### 4. Lancez le serveur de développement :

```bash
npm run start:dev
```

### 5. Accès au serveur :

Le serveur est désormais disponible à l'URL : http://localhost:3001
