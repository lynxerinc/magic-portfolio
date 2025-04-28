# Utiliser l’image officielle Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le projet
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port Next.js
EXPOSE 3000

# Lancer l’application en mode production
CMD ["npm", "run", "start"]
