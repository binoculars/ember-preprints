import Ember from 'ember';

export default Ember.Controller.extend({
    brand: Ember.inject.service('theme'),
    provider: null,

    providerChanged: Ember.observer('provider', function() {
        console.log(this.get('provider'));

        this.set('brand.name', this.get('provider'));
    }),
});
