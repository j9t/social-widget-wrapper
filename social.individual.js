/**
 * Individual: pushing individual services in via innerHTML
 */

// Event handler
function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
	} else if (obj.attachEvent) {
		obj['e'+type+fn] = fn;
		obj[type+fn] = function() {
			obj['e'+type+fn](window.event);
		};
		obj.attachEvent('on'+type, obj[type+fn]);
	};
};

// Social factory
function shift(service, code) {
	var container = document.createElement('div');
	container.setAttribute('id', 'social-' + service);
	document.getElementById('social').appendChild(container).innerHTML = code;
};

// Social services
function initSocial() {

	// Language codes, https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes#Partial_ISO_639_table?
	var language = 'en';
	// Country codes, https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements?
	var country = 'US';

	// Google+, https://developers.google.com/+/web/+1button/
	shift('googleplus', '<div class="g-plusone" data-size="tall"></div><script type="text/javascript">window.___gcfg = {lang: "' + language + '"};(function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/platform.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })();</script>');

	// Facebook, https://developers.facebook.com/docs/plugins/like-button/
	shift('facebook', '<div id="fb-root"></div><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/' + language + '_' + country + '/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script><div class="fb-like" data-href="' + document.location.href + '" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false"></div>');

	// Twitter, https://dev.twitter.com/docs/tweet-button
	shift('twitter', '<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + document.location.href + '" data-via="j9t" data-lang="' + language + '" data-count="vertical">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');

};

// Initialization
function init() {
	initSocial();
};

addEvent(window, 'load', init);