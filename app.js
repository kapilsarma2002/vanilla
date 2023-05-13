import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/Detailspage.js';
import { OrdersPage } from './components/OrdersPage.js';

// @ts-ignore
window.app = {}
app.store = Store; 
app.router = Router;


window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});