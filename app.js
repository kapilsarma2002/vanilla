import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// @ts-ignore
window.app = {}
app.store = Store; 
app.router = Router;


window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});