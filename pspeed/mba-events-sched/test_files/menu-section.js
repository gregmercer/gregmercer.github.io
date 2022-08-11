/**
 * @file
 * Behaviors for the Filter mega primary.
 */
!function (Drupal, $) {
  'use strict';

  Drupal.behaviors.menuSectionTweaks = {
    attach: function attach(context) {
      $('li.section--expanded > a', context).click(function () {
        var windowWidth = $(window).width();

        if (windowWidth < 1200) {
          var $this = $(this);
          var $linkItem = $this.closest('li');

          if ($linkItem.hasClass('open')) {
            $linkItem.removeClass('open');
          } else {
            $linkItem.addClass('open');
          }

          return false;
        }
      });
      $('.block--gsb-menu-section .block__menu-toggle', context).click(function () {
        var $this = $(this);
        var $gsbMenuBlock = $this.closest('.block--gsb-menu');
        $gsbMenuBlock.toggleClass('open');
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=menu-section.js.map
