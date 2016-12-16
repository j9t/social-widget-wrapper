/**
 * Modular: rebuilding individual service code
 */

// Script Manager
function manageScript(url) {
	var externalScript = document.createElement('script');
	externalScript.setAttribute('src', url);
	externalScript.setAttribute('type', 'text/javascript');
	document.getElementsByTagName('body')[0].appendChild(externalScript);
};

// Container Manager
function createContainer(service, element, attributes, text) {
	var containerMother = document.createElement('div');
	containerMother.setAttribute('id', 'social-' + service);
	var container = document.createElement(element);
	for (var attribute in attributes) {
		container.setAttribute(attribute, attributes[attribute]);
	};
	container.textContent = text;
	containerMother.appendChild(container);
	if (document.getElementById('social')) {
		document.getElementById('social').appendChild(containerMother);
	};
};

// Configuration and Init
(function() {

	// Language codes, https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes#Partial_ISO_639_table?
	var language = 'en';
	// Country codes, https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements?
	var country = 'US';

	// Google+, https://developers.google.com/+/web/+1button/
	var containerAttributes = {
		'class': 'g-plusone',
		'data-size': 'tall'
		// 'lang': language
	};
	createContainer('googleplus', 'div', containerAttributes, '');
	manageScript('https://apis.google.com/js/platform.js');

	// Facebook, https://developers.facebook.com/docs/plugins/like-button/
	var containerAttributes = {
		'class': 'fb-like',
		'data-action': 'like',
		'data-href': document.location.href,
		'data-layout': 'box_count',
		'data-share': 'false',
		'data-show-faces': 'false'
	};
	createContainer('facebook', 'div', containerAttributes, '');
	manageScript('https://connect.facebook.net/' + language + '_' + country + '/all.js#xfbml=1');

	// Twitter, https://dev.twitter.com/docs/tweet-button
	var containerAttributes = {
		'class': 'twitter-share-button',
		'data-count': 'vertical',
		'data-lang': language,
		'data-url': document.location.href,
		'data-via': 'j9t',
		'href': 'https://twitter.com/share'
	};
	createContainer('twitter', 'a', containerAttributes, 'Tweet');
	manageScript('https://platform.twitter.com/widgets.js');

}());