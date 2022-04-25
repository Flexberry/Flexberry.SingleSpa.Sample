'use strict';

define('ember-app/tests/acceptance/flexberry/t-v-single-spa-sample-chat-bot-message-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | t v single spa sample chat bot message l');

  (0, _qunit.test)('testing t-v-single-spa-sample-chat-bot-message-l', function (assert) {
    var _this = this;

    visit('/t-v-single-spa-sample-chat-bot-message-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/t-v-single-spa-sample-person-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | t v single spa sample person l');

  (0, _qunit.test)('testing t-v-single-spa-sample-person-l', function (assert) {
    var _this = this;

    visit('/t-v-single-spa-sample-person-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/t-v-single-spa-sample-person-meta-data-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | t v single spa sample person meta data l');

  (0, _qunit.test)('testing t-v-single-spa-sample-person-meta-data-l', function (assert) {
    var _this = this;

    visit('/t-v-single-spa-sample-person-meta-data-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/t-v-single-spa-sample-request-person-data-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | t v single spa sample request person data l');

  (0, _qunit.test)('testing t-v-single-spa-sample-request-person-data-l', function (assert) {
    var _this = this;

    visit('/t-v-single-spa-sample-request-person-data-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/t-v-single-spa-sample-social-network-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | t v single spa sample social network l');

  (0, _qunit.test)('testing t-v-single-spa-sample-social-network-l', function (assert) {
    var _this = this;

    visit('/t-v-single-spa-sample-social-network-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-chat-bot-message-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-chat-bot-message-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-chat-bot-message-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-chat-bot-message-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-chat-bot-message-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-chat-bot-message-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-meta-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-meta-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-meta-data-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-meta-data-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-person-meta-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-person-meta-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-request-person-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-request-person-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-request-person-data-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-request-person-data-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-request-person-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-request-person-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-social-network-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-social-network-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-social-network-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-social-network-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/t-v-single-spa-sample-social-network-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/t-v-single-spa-sample-social-network-l.js should pass ESLint\n\n');
  });

  QUnit.test('enums/t-v-single-spa-sample-chat-message-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/t-v-single-spa-sample-chat-message-type.js should pass ESLint\n\n');
  });

  QUnit.test('enums/t-v-single-spa-sample-data-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/t-v-single-spa-sample-data-type.js should pass ESLint\n\n');
  });

  QUnit.test('enums/t-v-single-spa-sample-sex.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/t-v-single-spa-sample-sex.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-chat-bot-message-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-chat-bot-message-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-chat-bot-message-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-chat-bot-message-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-person-meta-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-person-meta-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-person-meta-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-person-meta-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-request-person-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-request-person-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-request-person-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-request-person-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-social-network-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-social-network-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/t-v-single-spa-sample-social-network-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/t-v-single-spa-sample-social-network-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-chat-bot-message-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-chat-bot-message-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-chat-bot-message-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-chat-bot-message-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-person-meta-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-person-meta-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-person-meta-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-person-meta-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-request-person-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-request-person-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-request-person-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-request-person-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-social-network-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-social-network-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/t-v-single-spa-sample-social-network-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/t-v-single-spa-sample-social-network-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-chat-bot-message-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-chat-bot-message-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person-account-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person-account-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person-meta-data-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person-meta-data-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-request-person-data-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-request-person-data-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-social-network-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-social-network-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('models/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-chat-bot-message-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-chat-bot-message-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-chat-bot-message-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-chat-bot-message-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-chat-bot-message-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-chat-bot-message-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-meta-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-meta-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-meta-data-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-meta-data-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-person-meta-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-person-meta-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-request-person-data-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-request-person-data-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-request-person-data-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-request-person-data-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-request-person-data-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-request-person-data-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-social-network-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-social-network-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-social-network-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-social-network-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/t-v-single-spa-sample-social-network-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/t-v-single-spa-sample-social-network-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-chat-bot-message-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-chat-bot-message-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-chat-bot-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-chat-bot-message.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person-account-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person-account-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person-account.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person-meta-data-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person-meta-data-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person-meta-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person-meta-data.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-person.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-request-person-data-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-request-person-data-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-request-person-data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-request-person-data.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-social-network-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-social-network-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/t-v-single-spa-sample-social-network.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/t-v-single-spa-sample-social-network.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/t-v-single-spa-sample-chat-message-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/t-v-single-spa-sample-chat-message-type.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/t-v-single-spa-sample-data-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/t-v-single-spa-sample-data-type.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/t-v-single-spa-sample-sex.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/t-v-single-spa-sample-sex.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/t-v-single-spa-sample-chat-bot-message-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/t-v-single-spa-sample-chat-bot-message-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/t-v-single-spa-sample-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/t-v-single-spa-sample-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/t-v-single-spa-sample-person-meta-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/t-v-single-spa-sample-person-meta-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/t-v-single-spa-sample-request-person-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/t-v-single-spa-sample-request-person-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/t-v-single-spa-sample-social-network-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/t-v-single-spa-sample-social-network-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-chat-bot-message-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-chat-bot-message-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-chat-bot-message-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-chat-bot-message-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-person-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-person-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-person-meta-data-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-person-meta-data-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-person-meta-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-person-meta-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-request-person-data-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-request-person-data-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-request-person-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-request-person-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-social-network-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-social-network-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/t-v-single-spa-sample-social-network-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/t-v-single-spa-sample-social-network-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-chat-bot-message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-chat-bot-message-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-person-account-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-person-account-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-person-meta-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-person-meta-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-request-person-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-request-person-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/t-v-single-spa-sample-social-network-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/t-v-single-spa-sample-social-network-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-chat-bot-message-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-chat-bot-message-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-chat-bot-message-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-chat-bot-message-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-person-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-person-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-person-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-person-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-person-meta-data-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-person-meta-data-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-person-meta-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-person-meta-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-request-person-data-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-request-person-data-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-request-person-data-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-request-person-data-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-social-network-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-social-network-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/t-v-single-spa-sample-social-network-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/t-v-single-spa-sample-social-network-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-chat-bot-message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-chat-bot-message-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-person-account-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-person-account-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-person-meta-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-person-meta-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-person-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-request-person-data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-request-person-data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/t-v-single-spa-sample-social-network-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/t-v-single-spa-sample-social-network-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-chat-bot-message-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-chat-bot-message-e', 'Unit | Controller | t-v-single-spa-sample-chat-bot-message-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-chat-bot-message-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-chat-bot-message-l', 'Unit | Controller | t-v-single-spa-sample-chat-bot-message-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-person-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-person-e', 'Unit | Controller | t-v-single-spa-sample-person-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-person-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-person-l', 'Unit | Controller | t-v-single-spa-sample-person-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-person-meta-data-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-person-meta-data-e', 'Unit | Controller | t-v-single-spa-sample-person-meta-data-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-person-meta-data-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-person-meta-data-l', 'Unit | Controller | t-v-single-spa-sample-person-meta-data-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-request-person-data-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-request-person-data-e', 'Unit | Controller | t-v-single-spa-sample-request-person-data-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-request-person-data-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-request-person-data-l', 'Unit | Controller | t-v-single-spa-sample-request-person-data-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-social-network-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-social-network-e', 'Unit | Controller | t-v-single-spa-sample-social-network-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/t-v-single-spa-sample-social-network-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:t-v-single-spa-sample-social-network-l', 'Unit | Controller | t-v-single-spa-sample-social-network-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-chat-bot-message-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-chat-bot-message', 'Unit | Model | t-v-single-spa-sample-chat-bot-message', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-person-account-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person-account', 'Unit | Model | t-v-single-spa-sample-person-account', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-person-meta-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person-meta-data', 'Unit | Model | t-v-single-spa-sample-person-meta-data', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person', 'Unit | Model | t-v-single-spa-sample-person', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-request-person-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-request-person-data', 'Unit | Model | t-v-single-spa-sample-request-person-data', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/t-v-single-spa-sample-social-network-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-social-network', 'Unit | Model | t-v-single-spa-sample-social-network', {
    // Specify the other units that are required for this test.
    needs: ['model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-chat-bot-message-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-chat-bot-message-e', 'Unit | Route | t-v-single-spa-sample-chat-bot-message-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-chat-bot-message-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-chat-bot-message-l', 'Unit | Route | t-v-single-spa-sample-chat-bot-message-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-person-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-person-e', 'Unit | Route | t-v-single-spa-sample-person-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-person-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-person-l', 'Unit | Route | t-v-single-spa-sample-person-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-person-meta-data-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-person-meta-data-e', 'Unit | Route | t-v-single-spa-sample-person-meta-data-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-person-meta-data-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-person-meta-data-l', 'Unit | Route | t-v-single-spa-sample-person-meta-data-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-request-person-data-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-request-person-data-e', 'Unit | Route | t-v-single-spa-sample-request-person-data-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-request-person-data-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-request-person-data-l', 'Unit | Route | t-v-single-spa-sample-request-person-data-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-social-network-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-social-network-e', 'Unit | Route | t-v-single-spa-sample-social-network-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/t-v-single-spa-sample-social-network-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:t-v-single-spa-sample-social-network-l', 'Unit | Route | t-v-single-spa-sample-social-network-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-chat-bot-message-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-chat-bot-message', 'Unit | Serializer | t-v-single-spa-sample-chat-bot-message', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-chat-bot-message', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-person-account-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person-account', 'Unit | Serializer | t-v-single-spa-sample-person-account', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-person-account', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-person-meta-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person-meta-data', 'Unit | Serializer | t-v-single-spa-sample-person-meta-data', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-person-meta-data', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-person-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-person', 'Unit | Serializer | t-v-single-spa-sample-person', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-person', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-request-person-data-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-request-person-data', 'Unit | Serializer | t-v-single-spa-sample-request-person-data', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-request-person-data', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/t-v-single-spa-sample-social-network-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('t-v-single-spa-sample-social-network', 'Unit | Serializer | t-v-single-spa-sample-social-network', {
    // Specify the other units that are required for this test.
    needs: ['serializer:t-v-single-spa-sample-social-network', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:t-v-single-spa-sample-chat-message-type', 'transform:t-v-single-spa-sample-data-type', 'transform:t-v-single-spa-sample-sex', 'model:t-v-single-spa-sample-chat-bot-message', 'model:t-v-single-spa-sample-person-account', 'model:t-v-single-spa-sample-person-meta-data', 'model:t-v-single-spa-sample-person', 'model:t-v-single-spa-sample-request-person-data', 'model:t-v-single-spa-sample-social-network', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
