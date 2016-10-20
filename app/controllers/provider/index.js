import Ember from 'ember';
import config from 'ember-get-config';
// import Analytics from '../../mixins/analytics';

export default Ember.Controller.extend(//Analytics,
{
    theme: Ember.inject.service(),

    init() {
        this.get('theme').set('isProvider', true);
    }

});
