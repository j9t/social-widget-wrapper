# social-widget-wrapper

Script wrapper to keep Facebook, Twitter, Google+, other social scripts from contaminating (WETting) template files and documents.

The idea is that production HTML only contains the most minimal markup in form of a “social” container (like <code>&lt;div id=social&gt;&lt;/div&gt;</code>), and everything else is piped in via script (found here). The resulting minimized repetition makes handling social scripts easier and more maintainable, for only the script needs updating later on.

* <a href="https://github.com/j9t/social-widget-wrapper/blob/master/social.html">social.html</a> shows how the embedding works.
* <a href="https://github.com/j9t/social-widget-wrapper/blob/master/social.combined.js">social.combined.js</a> is perhaps the most straight-forward script at the moment, tested and found stable to work with <a href="http://www.addthis.com/">AddThis</a> code.

You can see a live example of the script in action on <a href="http://coderesponsibly.org/">Code Responsibly</a>.

⚠ Script and documentation are in need of review and TLC.