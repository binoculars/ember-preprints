import Ember from 'ember';

export default Ember.Service.extend({
    base: 'default',
    name: null,
    isProvider: false,
    // the property used as a reference for styles

    stylesheet: Ember.computed('name', function() {
        return `/preprints/assets/css/${this.get('name').toLowerCase()}.css`
    }),

});
