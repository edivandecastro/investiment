Vue.component('submenu', {
  template: '<li><a href="{{ link }}.html">{{ label }}</a></li>',
  props: ['link', 'label']
})