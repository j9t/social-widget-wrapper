/**
 * Combined: using AddThis
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

// Script manager
function manageScript(url) {
	var externalScript = document.createElement('script');
	externalScript.setAttribute('src', url);
	externalScript.setAttribute('type', 'text/javascript');
	document.getElementsByTagName('body')[0].appendChild(externalScript);
};

// Container manager
function shift(service, code) {
	var container = document.createElement('div');
	container.setAttribute('id', 'social-' + service);
	document.getElementById('social').appendChild(container).innerHTML = code;
};

// Social services
function initSocial() {
	shift('addthis', '<div class="addthis_toolbox addthis_default_style"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div><script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>');
	manageScript('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-533484d9341006e1');
};

// Initialization
function init() {
	initSocial();
};

addEvent(window, 'load', init);