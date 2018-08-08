var app = new Vue({
  el: '#app',
  data: {
    menus: [
      { 
        icon: 'icon-note', 
        label: 'Cadastro',
        submenus: [
          { link: 'investimentos', label: 'Investimentos' },
          { link: 'titulos', label: 'Títulos' },
          { link: 'corretoras', label: 'Corretoras' }
        ]
      },
      { 
        icon: 'icon-organization', 
        label: 'Admin',
        submenus: [
          { link: 'usuarios', label: 'Usuários' },
        ]
      }
    ]
  }
})