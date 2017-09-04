# Social Widget Wrapper

Script wrapper to keep Facebook, Twitter, Google+, other social scripts from contaminating (WETting) template files and documents.

The idea is that production HTML only contains the most minimal markup in form of a “social” container (like `<div id=social></div>`), and everything else is piped in via script (found here). The resulting minimized repetition makes handling social scripts easier and more maintainable, for only the script needs updating later on.

* [social.html][1] shows how the embedding works.
* [social.combined.js][2] is perhaps the most straight-forward script at the moment, tested and found stable to work with [AddThis][3] code.

You can see a live example of the script in action on [Code Responsibly][4].

---

The script is currently unmaintained and needs TLC (as of November 8, 2016). [Contributions welcome.][5]

[1]: https://github.com/j9t/social-widget-wrapper/blob/master/social.html
[2]: https://github.com/j9t/social-widget-wrapper/blob/master/social.combined.js
[3]: https://www.addthis.com/
[4]: https://mirrors.meiert.org/coderesponsibly.org/
[5]: https://github.com/j9t/social-widget-wrapper/issues/new