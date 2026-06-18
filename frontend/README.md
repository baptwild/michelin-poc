# Michelin Performance Hub - Frontend

Ce répertoire contient la couche d'interface du projet, développée avec le framework Next.js.

## Spécifications Techniques

- **Framework :** Next.js
- **Port d'écoute :** 3000
- **URL locale :** http://localhost:3000

## Configuration

L'application consomme l'API backend via la variable d'environnement suivante, à définir dans un fichier `.env.local` à créer ici, à la base du dossier [`/frontend`](/frontend/) :

```bash
NEXT_PUBLIC_API_URL : http://localhost:3001
```

## Développement Local (Hors Docker)

Si vous devez exécuter le frontend indépendamment du conteneur global, suivez ces étapes :

### 1. Installez les dépendances :

```bash
npm install
```

### 2. Lancez le serveur de développement :

```bash
npm run dev
```

### 3. Accès à l'application :

L'application est désormais disponible à l'URL : http://localhost:3000

**À noter :**
Lancer uniquement le code du frontend risque de faire remonter des erreurs si le backend n'est pas lancé aussi en parralèle (erreurs de connexion à l'API).

**Note sur le Rechargement à Chaud**
L'environnement intègre la variable `CHOKIDAR_USEPOLLING=true` pour garantir la détection des modifications de fichiers et le rafraîchissement automatique de l'interface sur les postes de travail configurés sous Windows et non-accessibles à l'environnement Docker (qui tourne sur l'environnement Linux via WSL).
