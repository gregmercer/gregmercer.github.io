/**
 * @file
 *
 * Behaviors for the views-direct links.
 */
(function ($) {
  'use strict';

  Drupal.behaviors.gsbFilteredViewLink = {
    attach: function attach(context, settings) {
      var contextTest = false;
      var searchList = '';

      if ($('div.view.view-cases-search.view-id-cases_search.view-display-id-list').length > 0) {
        // Cases - /faculty-research/case-studies
        contextTest = context === document || context === $('div.view.view-cases-search.view-id-cases_search.view-display-id-list')[0];
        searchList = '.view-id-cases_search .views-row .views-field-title a';
      } else if ($('div.view.view-idea-stories-search.view-id-idea_stories_search.view-display-id-search_list').length > 0) {
        // Insights - /insights/search
        contextTest = context === document || context === $('div.view.view-idea-stories-search.view-id-idea_stories_search.view-display-id-search_list')[0];
        searchList = '.idea-stories-search-list-view .views-row .views-field-title a';
      } else if ($('div.view.view-id-event_list_search.view-id-event_list_search.view-display-id-main_list').length > 0) {
        // Events - /events
        contextTest = context === document || context === $('div.view.view-id-event_list_search.view-id-event_list_search.view-display-id-main_list')[0];
        searchList = '.view-id-event_list_search .views-row .title a';
      } else if ($('div.view-school-story-news-search.view-id-school_story_news_search.view-display-id-list').length > 0) {
        // School News - /experience/news-history
        contextTest = context === document || context === $('div.view-school-story-news-search.view-id-school_story_news_search.view-display-id-list')[0];
        searchList = '.view-school-story-news-search .views-row .school-stories-title a';
      } else if ($('div.view.view-clubs.view-id-clubs.view-display-id-list').length > 0) {
        // Clubs - /experience/life/activities-organizations
        contextTest = context === document || context === $('div.view.view-clubs.view-id-clubs.view-display-id-list')[0];
      } else if ($('div.view.view-act-project.view-id-act_project.view-display-id-list').length > 0) {
        // ACT - /alumni/volunteering/act/projects
        contextTest = context === document || context === $('div.view.view-act-project.view-id-act_project.view-display-id-list')[0];
        searchList = '.view-act-project .views-row .act-view-node-title a';
      } else if ($('div.view.view-coaches.view-id-coaches.view-display-id-list').length > 0) {
        // Coaches - /seed/get-involved/coach/current-coaches
        contextTest = context === document || context === $('div.view.view-coaches.view-id-coaches.view-display-id-list')[0];
        searchList = '.view-coaches .views-row a';
      } else if ($('div.view.view-seed-research-projects-search.view-id-seed_research_projects_search.view-display-id-list').length > 0) {
        // Seed Research - /seed/discover-impact/studies/research-library
        contextTest = context === document || context === $('div.view.view-seed-research-projects-search.view-id-seed_research_projects_search.view-display-id-list')[0];
        searchList = '.view-seed-research-projects-search .views-row .views-field-title a';
      } //if ($('body.direct-link-filter-display.user-logged-in').length > 0) {


      $('body').on('click', searchList, function (e) {
        if ($(e.target).hasClass('filter-exit')) {
          return;
        }

        if ($(e.target).hasClass('search-icon')) {
          return;
        }

        if ($(e.target).hasClass('form-checkbox')) {
          return;
        }

        if ($(e.target).hasClass('form-text')) {
          return;
        }

        if ($(e.target).get(0).tagName === 'SUMMARY') {
          return;
        }

        if ($(e.target).get(0).tagName === 'BUTTON') {
          return;
        }
        /*if (window.history && window.history.pushState) {
          var url = $('.link-box').val();
          if (window.location.href !== url) {
            window.history.pushState('', null, url);
          }
        }*/

      }); // Setup the Filtered View link field.

      var $link;
      var $wrapper;
      var $input;
      var linkText;

      if (typeof settings.gsbFilteredViewLink === 'undefined') {
        settings.gsbFilteredViewLink = {};
      }

      if (typeof settings.gsbFilteredViewLink.open === 'undefined') {
        settings.gsbFilteredViewLink.open = false;
      }

      if (settings.gsbFilteredViewLink.open) {
        linkText = Drupal.t('Hide the direct url field');
      } else {
        linkText = Drupal.t('Show the direct url to this filter');
      }

      $('.gsb-direct-link').remove();
      $wrapper = $('<div class="gsb-direct-link"></div>');
      $link = $('<a href="#">' + linkText + '</a>');
      $wrapper.prepend($link);
      $wrapper.append('<br />');
      $input = $('<input class="link-box" type="text" value="" aria-label="Direct url" />');
      $wrapper.append($input);
      $('.views-exposed-form').prepend($wrapper);

      if (!settings.gsbFilteredViewLink.open) {
        $input.hide();
      }

      Drupal.gsbFilteredViewLink.buildURL($input);
      $link.click(function (e) {
        e.preventDefault();

        if (settings.gsbFilteredViewLink.open) {
          $input.hide();
          $link.text(Drupal.t('Show the direct url to this filter'));
          settings.gsbFilteredViewLink.open = false;
        } else {
          $input.show();
          $link.text(Drupal.t('Hide the direct url field'));
          settings.gsbFilteredViewLink.open = true;
        }
      });
      $('.view-filters input[type="checkbox"]:checked, .view-filters input[type="text"]:not(".link-box")').change(function () {
        Drupal.gsbFilteredViewLink.buildURL($input);
      });

      if ($('body.direct-link-filter-display.user-logged-in').length > 0) {
        $('.gsb-direct-link').show();
      } else {
        $('.gsb-direct-link').hide();
      }
    }
  };
  Drupal.gsbFilteredViewLink = Drupal.gsbFilteredViewLink || {};

  Drupal.gsbFilteredViewLink.buildURL = function ($input) {
    var url = location.protocol + '//' + location.hostname + location.pathname + '?';
    $('.view-filters input[type="checkbox"]:checked').each(function () {
      var name = $(this).attr('name');
      var tid = $(this).attr('value');
      url += name + '=' + tid + '&';
    });
    $('.view-filters input[type="text"]:not(".link-box"), .view-filters select').each(function () {
      if ($(this).val()) {
        url += $(this).attr('name') + '=' + $(this).val() + '&';
      }
    });
    var az_filter_flag = false;

    if ($('.view-filters .custom-a-z-filters .slick-list .active-filter').length > 0) {
      var href_data = $('.view-filters .custom-a-z-filters .slick-list .active-filter').attr('href');
      var param_array = href_data.split('=');

      if (param_array[1] != 'undefined' && param_array[1] != null) {
        url += 'custom_az_filter=' + param_array[1];
        az_filter_flag = true;
      }
    }

    if (az_filter_flag == false) {
      url = url.substring(0, url.length - 1);
    }

    $input.val(url);
  };
})(jQuery);
//# sourceMappingURL=filter-direct-link.js.map
