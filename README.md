# Social Widget Wrapper

Script wrapper to keep Facebook, Twitter, Google+, other social scripts from contaminating (WETting) template files and documents.

The idea is that production HTML only contains the most minimal markup in form of a “social” container (like `&lt;div id=social&gt;&lt;/div&gt;`), and everything else is piped in via script (found here). The resulting minimized repetition makes handling social scripts easier and more maintainable, for only the script needs updating later on.

* [social.html][1] shows how the embedding works.
* [social.combined.js][2] is perhaps the most straight-forward script at the moment, tested and found stable to work with [AddThis][3] code.

You can see a live example of the script in action on [Code Responsibly][4].

⚠ Script and documentation are in need of review and TLC.

[1]: https://github.com/j9t/social-widget-wrapper/blob/master/social.html
[2]: https://github.com/j9t/social-widget-wrapper/blob/master/social.combined.js
[3]: http://www.addthis.com/
[4]: https://coderesponsibly.org/