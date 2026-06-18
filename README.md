# Michelin Performance Hub - Documentation Technique

Ce projet contient le prototype du Michelin Performance Hub, développé sous forme d'application découplée (Next.js / NestJS) et conteneurisé avec Docker.
Il a été réalisé dans le cadre du Hackathon pour Michelin dans le cadre du cursus de Mastère 2 en Ingénierie du Web à l'ESGI de Grenoble.

Ce projet a été réalisé par le groupe composé de : Baptiste SAUVAGE, Justyna WARZECHA, Anita CHAUDHARY, Wilson BEYLER et Nicolas OSBORNE.

## Structure du Projet

- `/frontend` : Application Next.js (Interface utilisateur).
- `/backend` : API NestJS (Gestion du catalogue de pneus et API).

## Prérequis

L'exécution du projet nécessite uniquement l'installation de :

- Docker Engine
- Docker Compose

## Installation et Lancement du Projet

### 1. Configuration des variables d'environnement

À la racine du dossier du code [`/backend`](/backend/), créer un fichier `.env` et ajouter la ligne :

```bash
DATABASE_URL="file:./dev.db"
```

À la racine du dossier du code frontent [`/frontend`](/frontend/), créer un fichier `.env.local` et ajouter la ligne :

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/
```

### 2. Démarrage des conteneurs

A la racine du projet (là où se situe le fichier `docker-compose.yml`), exécutez la commande suivante pour construire les images et lancer les services en arrière-plan :

```bash
docker compose up -d --build
```

**Une fois le processus terminé :**

- Le Frontend est accessible à l'adresse : http://localhost:3000

- Le Backend est accessible à l'adresse : http://localhost:3001

### 3. Initialisation de la Base de Données (Seeding)

Pour injecter le jeu de données initial de pneumatiques Michelin dans la base de données SQLite locale, exécutez la commande de seed suivante à travers le conteneur backend :

```bash
docker compose exec backend npx prisma db seed
```

### 4. Consommation de l'API :

L'API expose le service `tyres` sur le port 3001 via les points d'accès suivants :

- Récupérer tous les pneus : GET http://localhost:3001/tyres

- Filtrer les pneus par catégorie : GET http://localhost:3001/tyres/filter?category=category (road | gravel | mtb | urban)

### 5. Notes Techniques

**Hot Reload / Rechargement à chaud :** Les fichiers locaux sont synchronisés avec les conteneurs via des volumes de développement. L'image frontend intègre la configuration `CHOKIDAR_USEPOLLING=true` pour forcer la détection des changements de code sur les environnements de stockage hôtes (notamment pour les configurations sous Windows).

**Persistance :** La base de données est matérialisée par le fichier `backend/prisma/dev.db`
Sa structure est définie par le schéma Prisma généré au build du conteneur.

### 6. Commandes de Maintenance

### Arrêter les services :

```bash
docker compose down
```

### Visualiser les logs en temps réel :

```bash
docker compose logs -f
```

### Visualiser les logs d'un service spécifique :

```bash
docker compose logs -f backend
ou
docker compose logs -f frontend
```
