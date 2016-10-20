import Ember from 'ember';


export default Ember.Route.extend({
    provider: null,
    theme: Ember.inject.service(),
    //
    // beforeModel(transition) {
    //     const {slug} = transition.params['provider'];
    //
    //     // Check if the slug is a provider name, if not, go to content page
    //     if (!providers.contains(slug.toLowerCase()))
    //         this.transitionTo('content', slug);
    // },

    model(params) {
        const provider = params.slug;

        this.set('provider', provider);
        this.get('theme').set('theme', provider);

        return this.store.query('taxonomy', { filter: { parents: 'null' }, page: { size: 20 } });
    },

    isProvider: true
});
