/**
 * @file
 * Behaviors for the Responsive menu.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Responsive menu behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.ResponsiveMenu = {
    attach: function attach(context) {
      // Adding role and aria-label
      $('.filter-responsive-wrapper.mm-menu.mm-menu_offcanvas').attr({
        role: 'dialog',
        'aria-label': 'filters'
      }); // Adding role and aria-label to #off-canvas

      $('#off-canvas').attr({
        role: 'navigation',
        'aria-label': 'main menu'
      }); // Add/Remove mm-menu-parent-open class to manage Iconbar border
      // and Home icon highlight.

      if ($('#off-canvas .mm-panel', context).hasClass('mm-panel_opened-parent')) {
        $('#off-canvas').addClass('mm-menu-parent-open');
      }

      $('.mm-menu_offcanvas .mm-panels .mm-listview .mm-listitem .mm-listitem__text', context).on('click', function () {
        if ($(this).closest('.mm-panel').hasClass('mm-panel_opened-parent')) {
          $('#off-canvas').addClass('mm-menu-parent-open');
        }
      });
      $('.mm-menu_offcanvas .mm-panels .mm-panel', context).each(function () {
        $(this).find('.mm-navbar').on('click', function () {
          if ($(this).parent('.mm-panel').siblings('.mm-panel').eq(0).is(':visible')) {
            $('#off-canvas').removeClass('mm-menu-parent-open');
          }
        });
      });
      $('.responsive-menu-toggle-icon span.label').text('Open Menu');
      $('.mm-iconbar a.home-icon').attr('aria-label', 'Menu Home'); // Home icon click back to the main menu Level 1.

      $('.home-icon').on('click', function () {
        $('#off-canvas').removeClass('mm-menu-parent-open');
      }); // When focus in Search box addClass.

      $('.mm-searchfield input').on('focus', function () {
        $('#off-canvas').addClass('mm-menu-search-open');
      });
      $('.mm-searchfield__cancel').on('click', function () {
        $('#off-canvas').removeClass('mm-menu-search-open');
      }); // MMenu - Main nav add/remove class to toggle
      // Hamburger and Close icon.

      $('.responsive-menu-toggle-icon').click(function () {
        if ($('body').hasClass('mm-wrapper_opened')) {
          $('body').addClass('mmenu-main-nav');
          $('.responsive-menu-toggle-icon span.label').text('Close Menu');
        } else {
          $('body').removeClass('mmenu-main-nav');
          $('.responsive-menu-toggle-icon span.label').text('Open Menu');
        }
      });
      $('.mm-wrapper__blocker').on('click mousedown touchstart', function () {
        $('body').removeClass('mmenu-main-nav');
        $('.responsive-menu-toggle-icon span.label').text('Open Menu');
        $('.responsive-menu-toggle-icon').focus();
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=responsive-menu.js.map
