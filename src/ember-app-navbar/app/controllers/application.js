import { A } from '@ember/array';
import Controller from '@ember/controller';
import { isNone } from '@ember/utils';
import $ from 'jquery';

export default Controller.extend({
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
  Toggles application sitemap's side bar.

  @method actions.toggleSidebar
*/
  toggleSidebar() {
    let sidebar = $('.ui.sidebar.main.menu');
    sidebar.sidebar('toggle');
    sidebar.toggleClass('sidebar-mini');

    $('.full.height').toggleClass('content-opened');

    $('.sidebar.icon .text_menu').toggleClass('hidden');
    $('.sidebar.icon').toggleClass('text-menu-show');
    $('.sidebar.icon').toggleClass('text-menu-hide');
    $('.bgw-opacity').toggleClass('hidden');

    // For reinit overflowed tabs.
    $(window).trigger('resize');
  },
});
