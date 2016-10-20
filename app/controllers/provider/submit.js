import Ember from 'ember';

export default Ember.Controller.extend({
    theme: Ember.inject.service(),

    init() {
        this.get('theme').set('isProvider', true);
        // this.set('theme.isProvider', true);

    }
});
