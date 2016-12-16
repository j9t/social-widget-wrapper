/**
 * Combined: using AddThis
 */

// Script Manager
function manageScript(url) {
	var externalScript = document.createElement('script');
	externalScript.setAttribute('src', url);
	externalScript.setAttribute('type', 'text/javascript');
	document.getElementsByTagName('body')[0].appendChild(externalScript);
};

// Container Manager
function shift(service, code) {
	var container = document.createElement('div');
	container.setAttribute('id', 'social-' + service);
	if (document.getElementById('social')) {
		document.getElementById('social').appendChild(container).innerHTML = code;
	};
};

// Configuration and Init
(function() {
	shift('addthis', '<div class="addthis_toolbox addthis_default_style"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div><script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>');
	manageScript('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-533484d9341006e1');
}());