// Generated by CoffeeScript 1.6.1
(function() {
  var BaseView, HomeView, db, device, generateDigitCtx, getByRole, renderer, views,
    _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BaseView = require('../core/View').BaseView;

  getByRole = require('../helpers/dom').getByRole;

  device = require('../core/device');

  renderer = require('../core/renderer');

  views = require('../core/views');

  db = require('../core/db');

  generateDigitCtx = require('../helpers/system').generateDigitCtx;

  HomeView = (function(_super) {

    __extends(HomeView, _super);

    HomeView.prototype.templateName = 'home';

    function HomeView() {
      var _this = this;
      this.submit = function() {
        return HomeView.prototype.submit.apply(_this, arguments);
      };
      this.bind = function() {
        return HomeView.prototype.bind.apply(_this, arguments);
      };
      this.getElements = function() {
        return HomeView.prototype.getElements.apply(_this, arguments);
      };
    }

    HomeView.prototype.getElements = function() {
      HomeView.__super__.getElements.call(this);
      this.elements.form = this.elements.main.find('form');
      this.elements.input = getByRole('digit-input', this.elements.form);
      this.elements.button = this.elements.form.find('button');
      return this.elements.savedWrap = getByRole('saved-wrap', this.elements.main);
    };

    HomeView.prototype.bind = function() {
      var scrolling, self;
      HomeView.__super__.bind.call(this);
      self = this;
      this.elements.input.on('keydown', function(e) {
        var charCode, isAllowed, isNumber;
        charCode = e.which ? e.which : e.keyCode;
        isNumber = (charCode >= 48 && charCode <= 57) || charCode === 43;
        isAllowed = charCode === 8 || charCode === 13;
        if (!isNumber && !isAllowed) {
          return false;
        }
      });
      this.elements.input.on('change', function() {
        return self.submit();
      });
      this.elements.form.on('submit', function() {
        return false;
      });
      this.elements.button.on('click touchend', function() {
        self.submit();
        return false;
      });
      db.select('digits', {}, {
        order: ['id', -1]
      }, function(digits) {
        var ctx, entry, savedList, _i, _len;
        ctx = [];
        for (_i = 0, _len = digits.length; _i < _len; _i++) {
          entry = digits[_i];
          ctx.push(generateDigitCtx(entry.value));
        }
        savedList = $(renderer.render('saved-list', {
          entries: ctx
        }));
        return self.elements.savedWrap.append(savedList);
      });
      scrolling = null;
      this.elements.main.on('mousemove touchmove', '[data-role="saved-digits"]', function(e) {
        return scrolling = true;
      });
      this.elements.main.on('mousedown touchstart', '[data-role="saved-digits"]', function(e) {
        scrolling = false;
        return null;
      });
      return this.elements.main.on('mouseup touchend', '[data-role="saved-digits"]', function(e) {
        var digits;
        if (!scrolling) {
          digits = $(this).attr('data-digits');
          views.open('output', 'slide-right', null, false, digits);
        }
        scrolling = false;
        return true;
      });
    };

    HomeView.prototype.submit = function() {
      var digits;
      digits = this.elements.input.val();
      views.open('output', 'slide-right', null, false, digits);
      return db.insert('digits', {
        value: digits
      });
    };

    return HomeView;

  })(BaseView);

  module.exports = {
    HomeView: HomeView
  };

}).call(this);
