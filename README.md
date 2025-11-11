# Créer le projet React
npx create-react-app projet
cd projet
code .

## Lancer le projet
npm start

### Installation des dépendances
* React Router (pour la navigation)
npm install react-router-dom

* React Helmet (pour les balises meta / SEO)
npm install react-helmet

* Bootstrap + AOS + Icônes
npm install bootstrap aos bootstrap-icons

#### Configuration du routage (App.jsx)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    .....
  );
}

export default App;

##### Importer Bootstrap & AOS dans index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();


1- Installer GitHub Pages
npm install gh-pages --save-dev

2- Modifier package.json
"homepage": "https://samamrani.github.io/WebCraft",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

3️- Initialiser et pousser vers GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/samamrani/WebCraft.git
git push -u origin main

4-  Déployer 
npm run deploy


