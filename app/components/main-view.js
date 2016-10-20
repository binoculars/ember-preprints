import Ember from 'ember';
import config from 'ember-get-config';
import Analytics from '../mixins/analytics';

// TODO provide filter for providers
const getTotalPayload = JSON.stringify({
    size: 0,
    from: 0,
    query: {
        bool: {
            must: {
                query_string: {
                    query: '*'
                }
            },
            filter: [
                {
                    term: {
                        'type.raw': 'preprint'
                    }
                }
            ]
        }
    }
});

export default Ember.Component.extend(Analytics, {
    sharePreprintsTotal: null,
    init() {
        this._super(...arguments);

        this.set('currentDate', new Date());
        // Fetch total number of preprints. Allow elasticsearch failure to pass silently.
        // This is considered to be a one-time fetch, and therefore is run in controller init.
        Ember.$.ajax({
            type: 'POST',
            url: config.SHARE.searchUrl,
            data: getTotalPayload,
            contentType: 'application/json',
            crossDomain: true,
        }).then(results => results.hits.total.toLocaleString())
            .then(count => this.set('sharePreprintsTotal', count))
            .fail(() => {});
    },
    actions: {
        search(q) {
            this.sendAction('search', { queryParams: { queryString: q } });
        }
    }
});
