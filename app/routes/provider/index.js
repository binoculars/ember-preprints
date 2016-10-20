import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store
            .query('taxonomy', { filter: { parents: 'null' }, page: { size: 20 } });
    },
});
