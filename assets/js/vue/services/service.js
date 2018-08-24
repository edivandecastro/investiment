import { Menu } from '../stores/menu.js'

var config = {
  apiKey: "AIzaSyC3n8pajVi_JUCD9HcxEpifWCCSGqQreYk",
  authDomain: "investment-charts.firebaseapp.com",
  databaseURL: "https://investment-charts.firebaseio.com",
  projectId: "investment-charts",
  storageBucket: "investment-charts.appspot.com",
  messagingSenderId: "131428049149"
}

firebase.initializeApp(config);

export function MenuService() {
  this.db = firebase.firestore();

  this.getMenus = function() {
    var menus = [];
    this.db.collection("menus").orderBy('label').onSnapshot((querySnapshot) => {
      querySnapshot.docChanges.forEach(function(change) {
        var menu = change.doc.data();
        if (change.type === "added") {
          menus.push(menu);
        }
        if (change.type === "modified") {
          var menuService = new MenuService();
          var pos = menuService.getPositionInMenus(menus, menu);
          if (pos) menus.splice(pos, 1, menu);
        }
        if (change.type === "removed") {
          var menuService = new MenuService();
          var pos = menuService.getPositionInMenus(menus, menu);
          if (pos) menus.splice(pos, 1);
        }
      });
    });
    return menus;
  }

  this.getPositionInMenus = function(menus, menu) {
    var pos = null;
    menus.forEach(function(element, index, array) { 
      if(element.id === menu.id) {
        pos = index;
      }
    });

    return pos;
  }
}
