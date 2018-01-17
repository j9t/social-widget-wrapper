# Social Widget Wrapper

Script wrapper to keep Facebook, Twitter, Google+, other social scripts from contaminating (WETting) template files and documents.

The idea is that production HTML only contains the most minimal markup in form of a “social” container (like `<div id=social></div>`), and everything else is piped in via script (found here). The resulting minimized repetition makes handling social scripts easier and more maintainable, for only the script needs updating later on.

* [social.html](https://github.com/j9t/social-widget-wrapper/blob/master/social.html) shows how the embedding works.
* [social.combined.js](https://github.com/j9t/social-widget-wrapper/blob/master/social.combined.js) is perhaps the most straight-forward script at the moment, tested and found stable to work with [AddThis](https://www.addthis.com/) code.

You can see a live example of the script in action on [Code Responsibly](https://mirrors.meiert.org/coderesponsibly.org/).

---

The script is currently unmaintained and needs TLC (as of January 17, 2018). [Contributions welcome.](https://github.com/j9t/social-widget-wrapper/issues/new)