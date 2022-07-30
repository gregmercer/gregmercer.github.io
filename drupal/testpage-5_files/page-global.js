/**
 * @file
 * Behaviors for the global.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Update page Global tweaks js behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.pageGlobalTweaks = {
    attach: function attach(context) {
      $(window).on('load', function () {
        $('.infogram-embed iframe', context).each(function () {
          var infogramType = $(this).closest('.infogram-embed').data('type');
          $(this).attr('title', 'Infogram ' + infogramType);
        }); // Update screen reader text.

        $('a', context).each(function () {
          // Check if target has _blank.
          var targetValue = $(this).attr('target');

          if (targetValue != undefined && targetValue == '_blank') {
            //Check if already screen reader text added or not.
            if ($(this).children('.sr-only').length == 0) {
              $(this).append('<span class="sr-only">open in new window</span>');
            }
          }
        });
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=page-global.js.map
