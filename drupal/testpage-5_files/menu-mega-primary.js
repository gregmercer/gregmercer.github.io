/**
 * @file
 * Behaviors for the Filter mega primary.
 */
!function (Drupal, $) {
  'use strict';
  /**
   * Toggles the aria-expanded attribute of a given link to a desired state.
   * @param {element} el - Link element that should be toggled.
   * @param {boolean} toState - State indicating the end result toggle.
   * @returns {void}
   */

  function updateLinkAttributes(el, toState) {
    var $allL0s = $(el).closest('.c-menu').children('li').children('a.l-0');
    $allL0s.each(function () {
      if ($(this).attr('aria-expanded')) {
        $(this).attr('aria-expanded', false);
      }
    });

    if (toState) {
      $(el).closest('li').addClass('show-menu'); //program comparision page on mouse hover with megamenu

      $('.compare-items').attr('style', 'z-index: 1 !important');
    } else {
      $(el).closest('li').removeClass('show-menu'); //program comparision page on mouse hover with megamenu

      $('.compare-items').attr('style', 'z-index: 999 !important');
    }

    $(el).attr('aria-expanded', toState);
  }
  /**
   * set height to link content element.
   * @param {Object} $el the linkcontent wrapper
   * @returns {void}
   */


  function setLinkContentHeight($el) {
    var linkContentHeight = $el.height();
    $el.css('max-height', linkContentHeight);
  }
  /**
   * remove height to link content element.
   * @param {Object} $el the linkcontent wrapper
   * @returns {void}
   */


  function removeLinkContentHeight($el) {
    $el.css('max-height', '');
  }
  /**
   * Update seed mega dropdown width.
   * @param {Object} el the li wrapper
   * @returns {void}
   */


  function updateliWidth(el) {
    var $insideLayouts = $(el).find('.menu_link_content .layout');
    $insideLayouts.each(function () {
      var currentLayoutText = $(this).text().trim();
      var windowWidth = $(window).width();

      if (currentLayoutText !== '' && windowWidth >= 1190) {
        // If three columns.
        if ($(this).hasClass('layout--threecol-section') || $(this).hasClass('columns-3')) {
          // Calculation as follows.
          // Each layout columns width: 248px * 3
          // Column width + grid gap (20 + 20)
          // Column width + grip gap + padding left + right (26 + 26)
          $(this).closest('.menu_link_content').css('width', '836px');
        } // If four columns.


        if ($(this).hasClass('layout--fourcol-section') || $(this).hasClass('columns-4')) {
          // Calculation as follows.
          // Each layout columns width: 248px * 4
          // Column width + grid gap (20 + 20)
          // Column width + grip gap + padding left + right (26 + 26)
          $(this).closest('.menu_link_content').css('width', '1104px');
        }
      }
    });
  }

  Drupal.behaviors.megaPrimary = {
    attach: function attach(context) {
      var $megaPrimarySeedItemL0 = $('.mega-primary--expanded.mega-primary-seed--expanded.l-0', context);
      $('.l-0.mega-primary--expanded > a', context).click(function () {
        var windowWidth = $(window).width();

        if (windowWidth < 1200) {
          var $this = $(this);
          var $linkItem = $this.closest('li');
          var $linkContent = $linkItem.find('.menu_link_content');

          if ($linkItem.hasClass('open')) {
            $linkItem.removeClass('open');
            removeLinkContentHeight($linkContent);
          } else {
            $linkItem.addClass('open');
            setTimeout(function () {
              setLinkContentHeight($linkContent);
            }, 300);
          }

          return false;
        }
      }); // Adjust mega child width for seed and exceed-> menu link content layout.

      $megaPrimarySeedItemL0.hover(function () {
        updateliWidth($(this));
      }, function () {});
      $('.l-0.mega-primary--expanded > a').hover(function () {
        updateLinkAttributes($(this), true);
      }, function () {
        updateLinkAttributes($(this), false);
      });
      $('.l-0.mega-primary--expanded > .menu_link_content').hover(function () {
        updateLinkAttributes($(this).closest('li').children('a'), true);
      }, function () {
        updateLinkAttributes($(this).closest('li').children('a'), false);
      }); // Get top Level 0 link elements.

      var topLevelLinks = document.querySelectorAll('.c-menu__item-link--mega-primary.l-0');
      topLevelLinks.forEach(function (link) {
        if (link.nextElementSibling) {
          link.addEventListener('focus', function () {
            this.parentElement.classList.add('show-menu');
            this.setAttribute('aria-expanded', true);

            if (this.classList.contains('c-menu__item-link--mega-primary-seed')) {
              updateliWidth(this.parentElement);
            }
          });
          var subMenu = link.nextElementSibling;
          var subMenuLinks = subMenu.querySelectorAll('a');
          var lastLinkIndex = subMenuLinks.length - 1;
          var lastLink = subMenuLinks[lastLinkIndex];

          if (lastLink != 'undefined') {
            lastLink.addEventListener('blur', function () {
              link.parentElement.classList.remove('show-menu');
              link.setAttribute('aria-expanded', false);
            });
          }
        }
      });
      topLevelLinks[0].addEventListener('keydown', function (e) {
        if (e.shiftKey && e.keyCode === 9) {
          this.parentElement.classList.remove('show-menu');
          this.setAttribute('aria-expanded', false);
        }
      });
    }
  };
}(Drupal, jQuery);
//# sourceMappingURL=menu-mega-primary.js.map
