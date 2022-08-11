/**
 * @file
 * Behaviors for the Events List Search view.
 */
!function (Drupal, $) {
  'use strict';

  $(document).ajaxComplete(function () {
    var titles = $('.view__content-title--group');
    var previousTitle = '';

    for (var index = 0; index < titles.length; index++) {
      if (titles[index].innerText === previousTitle) {
        var sibs = $(titles[index - 1]).siblings();
        var lastsib = sibs[sibs.length - 1];
        $(titles[index]).siblings().insertAfter($(lastsib));
        titles[index].remove();
      }

      previousTitle = titles[index].innerText;
    }
  });
}(Drupal, jQuery);
//# sourceMappingURL=events-list-search.js.map
