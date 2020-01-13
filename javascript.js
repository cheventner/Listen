const menuIconEl = $('.menu-icon');
    const sidenavEl = $('.sidenav');
    const sidenavCloseEl = $('.sidenav__close-icon');

    // Ajouter et supprimer les noms de classe fournis
    function toggleClassName(el, className) {
      if (el.hasClass(className)) {
        el.removeClass(className);
      } else {
        el.addClass(className);
      }
    }

    // Ouvrez la navigation latérale en cliquant 
    menuIconEl.on('click', function() {
      toggleClassName(sidenavEl, 'active');
    });

    // Fermez la navigation latérale en cliquant 
    sidenavCloseEl.on('click', function() {
      toggleClassName(sidenavEl, 'active');
    });