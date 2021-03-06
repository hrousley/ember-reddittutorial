import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('about', { path: '/about' });
	this.resource('subreddit', {path: '/r/:subreddit_id'});
});

export default Router;
