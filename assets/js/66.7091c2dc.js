(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{395:function(e,t,r){"use strict";r.r(t);var a=r(6),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("For "),t("a",{attrs:{href:"https://xrdebug.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("xrDebug"),t("OutboundLink")],1),e._v(" V3 I have rebuilt the software from "),t("a",{attrs:{href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),t("OutboundLink")],1),e._v(" to "),t("a",{attrs:{href:"https://go.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),t("OutboundLink")],1),e._v(". This major update brings enhanced performance, reliability, and cross-platform support with binary builds available for Windows, macOS, Linux, and FreeBSD. The source code is available at "),t("a",{attrs:{href:"https://github.com/xrdebug/xrdebug",target:"_blank",rel:"noopener noreferrer"}},[e._v("xrdebug/xrdebug"),t("OutboundLink")],1),e._v(" on GitHub.")]),e._v(" "),t("p",[e._v("In this post, I want to share the challenges faced with the PHP version, the transition process, and the significant improvements achieved with this new release.")]),e._v(" "),t("h2",{attrs:{id:"based-php-xrdebug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#based-php-xrdebug"}},[e._v("#")]),e._v(" Based, PHP xrDebug")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/_posts/2022/2022-01-06-hello-xr.html"}},[e._v("Initially")]),e._v(", xrDebug was developed as an all-in-one PHP client-server system. I chose PHP because of its flexibility and simplicity, given my long experience with the language. PHP has always been a go-to for web-related tasks, and it felt natural to build xrDebug with it.")],1),e._v(" "),t("p",[e._v("The PHP ecosystem is diverse, and it wasn’t a challenge to build a debug server based on "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Server-sent_events",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSE"),t("OutboundLink")],1),e._v(", distributed in binary form, thanks to existing libraries for it. However, binary distribution was limited to macOS and Linux. While "),t("a",{attrs:{href:"https://myray.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ray"),t("OutboundLink")],1),e._v(" offered a Windows installer, this created a disadvantage for xrDebug, which required users to run WSL as a workaround. This was a significant drawback, limiting access to the software for a large portion of the potential user base.")]),e._v(" "),t("p",[e._v("I focused on the project distribution goals, and though PHP is a powerful and versatile language, I ultimately determined that creating reliable, cross-platform distributable desktop software was better suited to a different technology stack.")]),e._v(" "),t("h2",{attrs:{id:"golang-xrdebug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang-xrdebug"}},[e._v("#")]),e._v(" Golang xrDebug")]),e._v(" "),t("p",[e._v("I chose Golang for its cross-compilation capabilities and robust standard library. During the rebuilding process, I aimed to minimize the use of third-party libraries, relying instead on the language itself as part of my learning journey. Keeping the project simple was a priority, and Golang was the perfect fit.")]),e._v(" "),t("p",[e._v("The ability to cross-compile Go code for multiple platforms was a game changer. With just a few commands, I could generate binary builds for each platform, ensuring broad compatibility and accessibility for users. Integrating cross-compilation into GitHub Actions was straightforward, allowing the CI/CD pipeline to be set up quickly and efficiently.")]),e._v(" "),t("p",[e._v("Golang’s comprehensive standard library, which includes support for HTTP, testing, benchmarking, linting, and a language server, provided a robust foundation for development. It felt great to have everything I needed right out of the box, without relying on external dependencies or complex IDE configurations. I’m used to having my own tooling and custom setup, but with Golang, none of these were necessary, making it a refreshing experience.")]),e._v(" "),t("h2",{attrs:{id:"improvements-new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements-new-features"}},[e._v("#")]),e._v(" Improvements & new features")]),e._v(" "),t("p",[e._v("The transition to Golang brought several key improvements xrDebug. Here are some of the highlights:")]),e._v(" "),t("h3",{attrs:{id:"cross-platform-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-platform-support"}},[e._v("#")]),e._v(" Cross-platform support")]),e._v(" "),t("p",[e._v("The transition to Golang has enabled cross-platform compatibility. Users can now download and run xrDebug on their preferred operating system without any additional setup or dependencies, making it accessible to a wider range of developers and users.")]),e._v(" "),t("h3",{attrs:{id:"building-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-improvements"}},[e._v("#")]),e._v(" Building improvements")]),e._v(" "),t("p",[e._v("Release times for both versions are similar, around one and a half minutes. However, Golang produces 8 binary artifacts, twice as many as the PHP version, in the same time. The key advantage is that the build process with Golang is simpler.")]),e._v(" "),t("p",[e._v("Here’s the "),t("a",{attrs:{href:"https://github.com/xrdebug/xrdebug/blob/3.0/.github/workflows/release.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang workflow"),t("OutboundLink")],1),e._v(" and the "),t("a",{attrs:{href:"https://github.com/xrdebug/xrdebug-php/blob/2.0/.github/workflows/release.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP version"),t("OutboundLink")],1),e._v(". Notice that the PHP version requires more setup, making the project more complex and harder to maintain.")]),e._v(" "),t("p",[e._v("The compiled binaries are significantly smaller in size: previously around 30 MB, now just 10 MB. The Docker image size has also reduced from 148 MB to 10 MB. The package size (tar.gz) is now about 4 MB.")]),e._v(" "),t("p",[e._v("These improvements in distribution and resource consumption make xrDebug more lightweight and efficient. The reduced binary and Docker image sizes enhance portability, allowing developers to integrate xrDebug into their workflows without excessive resource usage. This portability is crucial for developers who need to run debugging tools in various environments, from local machines to cloud-based systems, ensuring a seamless and efficient debugging experience.")]),e._v(" "),t("h3",{attrs:{id:"dependencies-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies-improvements"}},[e._v("#")]),e._v(" Dependencies improvements")]),e._v(" "),t("p",[e._v("The PHP-based version of xrDebug relied on several "),t("a",{attrs:{href:"https://github.com/xrdebug/xrdebug-php/blob/2.0/composer.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("external dependencies"),t("OutboundLink")],1),e._v(' to achieve its functionality. While the PHP ecosystem provides a rich set of tools and libraries, managing multiple dependencies can increase maintenance overhead and complexity. As the saying goes, "a dependency is a liability."')]),e._v(" "),t("p",[e._v("In contrast, the new Golang-based version significantly reduces dependencies, relying on just one major external library: the "),t("a",{attrs:{href:"https://github.com/patrickmn/go-cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-cache"),t("OutboundLink")],1),e._v(" library, used for the pause lock system.")]),e._v(" "),t("p",[e._v("Golang’s robust standard library and built-in features allowed me to minimize external dependencies, simplifying the project and making it easier to maintain, build, and distribute efficiently. I didn’t miss any of the dependencies I had on PHP, as Golang provided everything I needed out of the box except for the TTL cache system.")]),e._v(" "),t("h3",{attrs:{id:"performance-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance-improvements"}},[e._v("#")]),e._v(" Performance improvements")]),e._v(" "),t("p",[e._v("A significant side effect of transitioning to Golang was a performance boost. The new version is faster, more responsive, and more efficient than its PHP-based predecessor. The optimized concurrency model, efficient resource management, and architecture contribute to the improved performance.")]),e._v(" "),t("p",[e._v("To illustrate the performance improvements, I conducted a load test using "),t("a",{attrs:{href:"https://github.com/wg/wrk",target:"_blank",rel:"noopener noreferrer"}},[e._v("wrk"),t("OutboundLink")],1),e._v(" by sending 100 concurrent POST requests for 30 seconds to the "),t("code",[e._v("/messages")]),e._v(" endpoint with a dump payload. Tests were conducted on the same machine with the same configuration.")]),e._v(" "),t("p",[e._v("Results for xrdebug-php:")]),e._v(" "),t("div",{staticClass:"language-plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[e._v("wrk -t4 -c100 -d30s -s test.lua http://127.0.0.1:27420/messages\nRunning 30s test @ http://127.0.0.1:27420/messages\n  4 threads and 100 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency    17.45ms   10.61ms 330.84ms   94.49%\n    Req/Sec     1.49k   232.96     1.99k    75.75%\n  178678 requests in 30.04s, 18.57MB read\nRequests/sec:   5948.48\nTransfer/sec:    633.19KB\n")])])]),t("p",[e._v("Results for xrdebug (Golang):")]),e._v(" "),t("div",{staticClass:"language-plain extra-class"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[e._v("❯ wrk -t4 -c100 -d30s -s test.lua http://127.0.0.1:27420/messages\nRunning 30s test @ http://127.0.0.1:27420/messages\n  4 threads and 100 connections\n  Thread Stats   Avg      Stdev     Max   +/- Stdev\n    Latency     2.69ms    5.04ms  85.05ms   91.18%\n    Req/Sec    20.89k     3.44k   28.51k    69.00%\n  2496773 requests in 30.04s, 428.60MB read\nRequests/sec:  83104.24\nTransfer/sec:     14.27MB\n")])])]),t("p",[e._v("Summary of results:")]),e._v(" "),t("ul",[t("li",[e._v("Go handles approximately 14x more requests per second than PHP.")]),e._v(" "),t("li",[e._v("Go exhibits significantly lower latency (about 6.5x less) compared to PHP.")]),e._v(" "),t("li",[e._v("Go achieves a much higher transfer rate, about 22x greater than PHP.")]),e._v(" "),t("li",[e._v("Go processed significantly more requests and data during the same time frame.")])]),e._v(" "),t("p",[e._v("These performance improvements were a natural outcome of transitioning to Golang, with no manual optimizations required. The results were well received, as I anticipated better performance but not with such minimal effort. While the PHP version handled around 6,000 requests per second, which is impressive for a PHP application, the Golang version’s performance was on a different level.")]),e._v(" "),t("h3",{attrs:{id:"new-features-and-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features-and-changes"}},[e._v("#")]),e._v(" New features and changes")]),e._v(" "),t("p",[e._v("In addition to the transition to a new programming language, xrDebug 3 introduces several key updates, improvements, and features:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Updated signature algorithm:")]),e._v(" The previous algorithm (based on PHP serialize) has been replaced with a more universal approach, making the sign process available for more languages by simply concatenating keys and values.")]),e._v(" "),t("li",[t("strong",[e._v("Updated keys file handling:")]),e._v(" The new version reads keys from files, not inline.")]),e._v(" "),t("li",[t("strong",[e._v("Enhanced logging system:")]),e._v(" The logging mechanism has been refined, offering more detailed insights and improved error handling.")]),e._v(" "),t("li",[t("strong",[e._v("Removed custom working directory:")]),e._v(" Support for custom working directories has been dropped.")]),e._v(" "),t("li",[t("strong",[e._v("Removed CLI color support:")]),e._v(" Color support has been removed, as it was deemed unnecessary for the current version. The user interface is the SPA, not the terminal.")]),e._v(" "),t("li",[t("strong",[e._v("Removed open browser function:")]),e._v(" The function to automatically open a browser window has been removed.")])]),e._v(" "),t("h2",{attrs:{id:"development-journey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-journey"}},[e._v("#")]),e._v(" Development journey")]),e._v(" "),t("p",[e._v("Learning Golang was an exciting and rewarding challenge, and I want to share some resources that truly helped me during the 15-day journey from zero to a working xrDebug 3.0:")]),e._v(" "),t("p",[e._v("I began with the "),t("a",{attrs:{href:"https://go.dev/doc/tutorial/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started guide"),t("OutboundLink")],1),e._v(", which provided a solid introduction to the language. However, what really accelerated my progress was this "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=8uiZC0l4Ajw",target:"_blank",rel:"noopener noreferrer"}},[e._v("video by Alex Mux"),t("OutboundLink")],1),e._v(". In just about forty minutes, it covered the essentials of Golang, giving me the confidence to dive deeper into the language.")]),e._v(" "),t("p",[e._v("Coming from a PHP background, I found "),t("a",{attrs:{href:"https://www.dantleech.com/blog/2022/09/19/encountering-go-as-a-php-developer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("“Encountering Go as a PHP Developer”"),t("OutboundLink")],1),e._v(" by Daniel Leech particularly helpful. It bridged the gap between familiar PHP concepts and Go’s unique features, saving me a lot of time and frustration. I’m truly grateful to Daniel for sharing his insights, which made the transition smoother.")]),e._v(" "),t("p",[e._v("Setting up "),t("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/go",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang with Visual Studio Code"),t("OutboundLink")],1),e._v(" was straightforward, and the language support is fantastic. The official extension installs additional tools automatically, making the development environment nearly effortless.")]),e._v(" "),t("h2",{attrs:{id:"closing-thoughts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#closing-thoughts"}},[e._v("#")]),e._v(" Closing thoughts")]),e._v(" "),t("p",[e._v("Rebuilding a working system is always a last resort, and that was the case for xrDebug. The transition from PHP to Golang was a significant undertaking, but the benefits far outweigh the challenges. The new version is faster, more reliable and easier to distribute.")]),e._v(" "),t("p",[e._v("Taking the time to learn a new language and apply it to a real-world project has been incredibly rewarding. While rebuilding wasn’t strictly necessary, the journey was worth every moment. It has not only improved xrDebug but also expanded my skills and knowledge.")]),e._v(" "),t("p",[e._v("I’m excited to see how the community receives this new release and look forward to your feedback. Your support and insights will be invaluable as we continue to evolve and improve xrDebug.")])])}),[],!1,null,null,null);t.default=n.exports}}]);