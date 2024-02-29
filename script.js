class menubar{
  wpp(){
      window.open('https://wa.me/62993882350');
  }
  det(){
      window.open('./pages/help/help.html');
  }
}

var menuItems = document.querySelectorAll('.dp-menu-books > ul > li'); // Seleciona todos os elementos do menu

menuItems.forEach(function(menuItem) {
                                 // Adiciona um evento de clique a cada elemento do menu
menuItem.addEventListener('click', function(event) {
  event.preventDefault();                                            // Previne o comportamento padrão do link
  menuItems.forEach(function(item) {                                 // Esconde todos os submenus
    if (item !== menuItem) {
      var submenu = item.querySelector('ul');
      if (submenu) {
        submenu.style.display = 'none';
      }
    }
  });

  var submenu = this.querySelector('ul');                            // Mostra o submenu do item clicado
  if (submenu) {
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
  }
});
});

const menubarra = new menubar();
