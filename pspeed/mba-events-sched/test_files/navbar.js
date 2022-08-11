/**
 * @file
 * Behaviors for the Header navigation.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Header navigation behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.navbar = {
    attach: function attach(context) {
      $('.menu-bar', context).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('clicked');
        $(this).closest('.header-wrapper').toggleClass('mobilemenu-open');
      });
      var $win = $(window);
      var top = $win.scrollTop(); // set fixed header based on theme setting sticky header

      $win.on('load scroll', function () {
        var $el = $('.header');
        var currentTop = $win.scrollTop();

        if (!$el.parent('div').hasClass('pl-js-pattern-example')) {
          if (top < currentTop || currentTop === 0) {
            $el.removeClass('header-fixed');
          } else {
            $el.addClass('header-fixed');
          }

          top = currentTop;
        }
      }); // Add class on focus.

      var topLevelLinks = $('.c-menu__item.l-0', context).find('> a');
      $(topLevelLinks).focus(function () {
        $(this).closest('ul').find('.show-menu').removeClass('show-menu');
        $(this).parent('li').addClass('show-menu');
      }); // Hide menu if click or focus occurs outside of navigation

      $(document).on('click mouseover', function () {
        $('.show-menu').removeClass('show-menu');
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=navbar.js.map
