import Ember from 'ember';

const {
  inject: { service },
  Route
} = Ember;

export default Route.extend({
  ajax: service(),

  model() {
    let project = this.modelFor('project');
    return project;
  },

  afterModel(model) {
    this.store.queryRecord('stripe-auth', {
      projectId: model.id
    }).then((result) => {
      this.controller.set('stripeAuth', result);
    });
  }
});
