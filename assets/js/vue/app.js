import { MenuService } from './services/service.js';

new Vue({
  el: '#app',
  data: {
    menus: []
  },
  created: function() {
    var menuService = new MenuService();
    this.menus = menuService.getMenus();
  }
});
