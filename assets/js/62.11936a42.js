(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{388:function(e,t,r){"use strict";r.r(t);var a=r(6),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("New from Chevere is the "),t("a",{attrs:{href:"https://github.com/chevere/var-dump/releases/tag/2.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("VarDump 2.0.0"),t("OutboundLink")],1),e._v(" package. This update adds foldable sections and improve HTML rendering with CSS classes, foldable sections and automatic light/dark mode display.")]),e._v(" "),t("h2",{attrs:{id:"demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" Demo")]),e._v(" "),t("p",[e._v("Play with it, see for yourself:")]),e._v(" "),t("div",{staticClass:"iframe-container rainbow-box"},[t("iframe",{attrs:{border:"0",loading:"lazy",src:"https://chevere.github.io/var-dump/demo/output/html.html"}})]),e._v(" "),t("p",[e._v("There's a demo available for each output format:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://chevere.github.io/var-dump/demo/output/html.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://chevere.github.io/var-dump/demo/output/plain.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plain text"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://asciinema.org/a/496889",target:"_blank",rel:"noopener noreferrer"}},[e._v("Console (asciinema)"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"it-folds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#it-folds"}},[e._v("#")]),e._v(" It folds!")]),e._v(" "),t("p",[e._v("This is for those working with big objects and/or large datasets. As the previous version didn't fold, all properties were being displayed expanded which made a poor debug experience. Without folding it was hard to navigate and display looked complex to the eye.")]),e._v(" "),t("p",[e._v("The new VarDump 2.0 adds foldable sections with pure HTML (no JS required) using the "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",target:"_blank",rel:"noopener noreferrer"}},[e._v("details"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary",target:"_blank",rel:"noopener noreferrer"}},[e._v("summary"),t("OutboundLink")],1),e._v(" HTML tags. The system takes fully advantage of these HTML elements and thanks to these the user experience has been dramatically improved.")]),e._v(" "),t("p",[e._v("It folds similar to how your editor does, with clear indentation marks and it recognizes the whole line for showing/hide the nested structure.")]),e._v(" "),t("h2",{attrs:{id:"uses-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uses-css"}},[e._v("#")]),e._v(" Uses CSS")]),e._v(" "),t("p",[e._v("Previous VarDump version used "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style",target:"_blank",rel:"noopener noreferrer"}},[e._v("style attribute"),t("OutboundLink")],1),e._v(" for HTML display. It became an issue when dealing with large objects as the style rules clogged output as every style property was being repeated over and over for every variable. Using style limited a lot the HTML display and it didn't take advantage of advanced CSS rules.")]),e._v(" "),t("p",[e._v("VarDump 2.0 now uses "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS"),t("OutboundLink")],1),e._v(" and generated HTML is more lightweight which makes a smaller footprint output. It allows tools like "),t("a",{attrs:{href:"https://xrdebug.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("xrDebug"),t("OutboundLink")],1),e._v(" to process smaller messages on HTTP and to tweak display accordingly on the dump window.")]),e._v(" "),t("p",[e._v("Using CSS instead of style enabled browser specific rules and more advanced styling options. For example, I needed some tweaking for Safari in order to display the detail marker on the right spot.")]),e._v(" "),t("h2",{attrs:{id:"auto-dark-light-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-dark-light-mode"}},[e._v("#")]),e._v(" Auto dark/light mode")]),e._v(" "),t("p",[e._v("The addition of CSS enabled automatic color mode based on your device preference. Instead of being fixed to a given color display, VarDump 2.0 adapts to your OS color setting which your eyes will be really thankful.")]),e._v(" "),t("p",[e._v("This is the light version:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/org/chevere/packages/var-dump/2.0/demo-light.webp",alt:"Demo light"}})]),e._v(" "),t("p",[e._v("And this is the dark version:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/org/chevere/packages/var-dump/2.0/demo-dark.webp",alt:"Demo dark"}})]),e._v(" "),t("h2",{attrs:{id:"the-prettiest-dumps-of-our-lives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-prettiest-dumps-of-our-lives"}},[e._v("#")]),e._v(" The Prettiest Dumps of Our Lives")]),e._v(" "),t("p",[e._v("This project has been a lot of fun and I keep learning from it. Thanks to VarDump I also made "),t("a",{attrs:{href:"https://xrdebug.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xrDebug"),t("OutboundLink")],1),e._v(" and I'm happy with the flexing I'm doing here.")]),e._v(" "),t("p",[e._v("Let me emphasize the motto: "),t("em",[t("strong",[e._v("Beautiful looking dumps!")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);