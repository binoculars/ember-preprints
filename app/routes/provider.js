import Ember from 'ember';
import config from 'ember-get-config';

const providers = (config.brands || []).map(brand => brand.toLowerCase());

export default Ember.Route.extend({
    theme: Ember.inject.service(),
    provider: null,

    beforeModel(transition) {
        const {slug} = transition.params['provider'];
        const index = providers.indexOf(slug);

        this.set('provider', config.brands[index]);

        // Check if the slug is a provider name
        if (~index) {
            this.get('theme').set('isProvider', true);
        } else {
            this.transitionTo('content', slug);
        }
    },

    setupController(controller, model) {
        this._super(controller, model);

        controller.set('provider', this.get('provider'));
    }
});
