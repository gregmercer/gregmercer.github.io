/**
 * @file
 * Behaviors for the Alert.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Alert behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.close = {
    attach: function attach(context) {
      $('.su-alert').each(function () {
        $('button', context).on('click', function () {
          $(this).closest('.su-alert').hide();
        });
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=alert.js.map
