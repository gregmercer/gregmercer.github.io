(function($) {
  var BrowserClass = {
    init: function() {
      this.classes = [];
      this.agent = navigator.userAgent.toLowerCase();
      this.checkBrowser();
      this.checkPlatform();
      if (this.isMobile(this.classes)) {
        this.classes.push('mobile');
      } else {
        this.classes.push('desktop');
      }
    },

    checkBrowser: function() {
      var matches = Array();
      var aresult = '';
      var aversion = '';
      var resultant = '';

      var iePattern = /(?:\b(ms)?ie\s+|\btrident\/7\.0;.*\s+rv:)(\d+)/;
      var ieMatch = this.agent.match(iePattern);

      if (ieMatch) {
        this.classes.push('ie');

        if (typeof ieMatch[2] !== 'undefined') {
          this.classes.push('ie' + ieMatch[2]);
        }
      }

      if (this.agent.match(/opera/)) {
        this.classes.push('opera');

        aresult = this.stristr(this.agent, 'version').split('/');
        if (aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('opera' + this.clearVersion(aversion[0]));
        }
      }

      // Check for chrome desktop first, then chrome mobile, lastly check for
      // safari, as these are mutually exclusive.
      if (this.agent.match(/chrome/)) {
        this.classes.push('chrome');

        aresult = this.stristr(this.agent, 'chrome').split('/');
        aversion = aresult[1].split(' ');
        this.classes.push('chrome' + this.clearVersion(aversion[0]));
      } else if (this.agent.match(/crios/)) {
        this.classes.push('chrome');
        aresult = this.stristr(this.agent, 'crios').split('/');

        if (aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('chrome' + this.clearVersion(aversion[0]));
        }
      } else if (this.agent.match(/safari/)) {
        this.classes.push('safari');
        aresult = this.stristr(this.agent, 'version').split('/');

        if (aresult[1]) {
          aversion = aresult[1].split(' ');
          this.classes.push('safari' + this.clearVersion(aversion[0]));
        }
      }

      if (this.agent.match(/firefox/)) {
        this.classes.push('ff');
        matches = this.agent.match(/firefox[\/ \(]([^ ;\)]+)/);
        if (matches) {
          this.classes.push('ff' + this.clearVersion(matches[1]));
        }
      }

      if (this.agent.match(/opera mini/)) {
        this.classes.push('operamini');

        resultant = this.stristr(this.agent, 'opera mini');
        if (resultant.match('/\//')) {
          aresult = resultant.split('/');
          aversion = aresult[1].split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[0]));
        } else {
          aversion = this.stristr(resultant, 'opera mini').split(' ');
          this.classes.push('operamini' + this.clearVersion(aversion[1]));
        }
      }
    },

    checkPlatform: function() {
      if (this.agent.match(/windows/)) {
        this.classes.push('win');
      }

      if (this.agent.match(/ipad/)) {
        this.classes.push('ipad');
      }

      if (this.agent.match(/ipod/)) {
        this.classes.push('ipod');
      }

      if (this.agent.match(/iphone/)) {
        this.classes.push('iphone');
      }

      if (this.agent.match(/mac/)) {
        this.classes.push('mac');
      }

      if (this.agent.match(/android/)) {
        this.classes.push('android');
      }

      if (this.agent.match(/linux/)) {
        this.classes.push('linux');
      }
    },

    isMobile: function(classes) {
      var mobile_devices = ['ipad', 'ipod', 'iphone', 'android', 'operamini'];
      var mobile_devices_test = false;

      $.each(mobile_devices, function(index, value) {
        if ($.inArray(value, classes) != -1) {
          mobile_devices_test = true;

          // Terminate the $.each() loop, since a match has been found.
          return false;
        }
      });

      if (mobile_devices_test || this.agent.match(/(up.browser|up.link|mmp|smartphone|mobile)/)) {
        return true;
      }
    },

    clearVersion: function(version) {
      version = version.replace('/[^0-9,.,a-z,A-Z-]/', '');
      var find = (version + '').indexOf('.');
      return version.substr(0, find);
    },

    stristr: function(haystack, needle, bool) {
      var pos = 0;

      haystack += '';
      pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
      if (pos == -1) {
        return false;
      } else {
        if (bool) {
          return haystack.substr(0, pos);
        } else {
          return haystack.slice(pos);
        }
      }
    }

  };

  BrowserClass.init();
  $('body').addClass(BrowserClass.classes.join(' '));
})(jQuery);
