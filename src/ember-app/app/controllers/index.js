import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.metaverse.caption'),
          title: i18n.t('forms.application.sitemap.metaverse.title'),
          children: [{
            link: 't-v-single-spa-sample-chat-bot-message-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-chat-bot-message-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-chat-bot-message-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 't-v-single-spa-sample-request-person-data-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-request-person-data-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-request-person-data-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 't-v-single-spa-sample-social-network-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-social-network-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-social-network-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 't-v-single-spa-sample-person-meta-data-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-person-meta-data-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-person-meta-data-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 't-v-single-spa-sample-person-l',
            caption: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-person-l.caption'),
            title: i18n.t('forms.application.sitemap.metaverse.t-v-single-spa-sample-person-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})