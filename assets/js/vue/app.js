var config = {
  apiKey: "AIzaSyC3n8pajVi_JUCD9HcxEpifWCCSGqQreYk",
  authDomain: "investment-charts.firebaseapp.com",
  databaseURL: "https://investment-charts.firebaseio.com",
  projectId: "investment-charts",
  storageBucket: "investment-charts.appspot.com",
  messagingSenderId: "131428049149"
};

firebase.initializeApp(config);
var db = firebase.database();

var app = new Vue({
  el: '#app',
  firebase: {
    menus: db.ref("menus")
  }
})