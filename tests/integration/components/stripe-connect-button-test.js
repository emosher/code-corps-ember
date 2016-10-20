import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('stripe-connect-button', 'Integration | Component | stripe connect button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{stripe-connect-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#stripe-connect-button}}
      template block text
    {{/stripe-connect-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
