import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsif.css';
import '../styles/detail-resto.css';
import '../styles/favorite-resto.css';
import '../styles/load.css';
import '../styles/normalized.css';
import '../styles/roots.css';

import './component/footer-custom';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './globals/config';
import App from './views/app';
 
const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#Maincontent'),
  });
   
  window.addEventListener('hashchange', () => {
    document.querySelector('.container').scrollIntoView();
    app.renderPage();
  });
   
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
  });