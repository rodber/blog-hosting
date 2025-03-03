(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{395:function(e,t,o){"use strict";o.r(t);var r=o(6),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("I started working on "),t("a",{attrs:{href:"https://blog.chevereto.com/2024/10/24/chevereto-4-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto 4.2"),t("OutboundLink")],1),e._v(" (Regio) in June, and its development took about five months. Compared to "),t("RouterLink",{attrs:{to:"/_posts/2024/2024-04-20-chevereto-4.1.html"}},[e._v("Chevereto 4.1")]),e._v(" (Pulento), which took one month, Regio required significant effort and consumed much of my energy. Along with introducing numerous new features, I also implemented changes to enable Chevereto as a service in a shared, multi-tenant application system.")],1),e._v(" "),t("h2",{attrs:{id:"multi-tenancy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-tenancy"}},[e._v("#")]),e._v(" Multi-tenancy")]),e._v(" "),t("p",[e._v("For a long time, I’ve been crafting the "),t("a",{attrs:{href:"https://chevereto.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto Cloud"),t("OutboundLink")],1),e._v(" service, and not having multi-tenancy at the application layer was a deal breaker for me. While Chevereto has been a "),t("a",{attrs:{href:"https://12factor.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("12 factor app"),t("OutboundLink")],1),e._v(" since "),t("RouterLink",{attrs:{to:"/_posts/2022/2022-09-20-chevereto-4.html"}},[e._v("Chevereto 4.0")]),e._v(" (Macanudo), it lacked the necessary controls for a commercial service. To address this, I introduced constraints to manage service limits and grants, enabling Chevereto Cloud to easily adapt and support various service plan variations. These constraints allow for more predictable instances, providing a fail-safe context for providers.")],1),e._v(" "),t("h2",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),t("p",[e._v("Performance was another major focus, and Regio is the most performant Chevereto yet. It minimizes disk operations, optimizes queries, and reduces the number of queries needed. These improvements allow me to allocate more users per instance.")]),e._v(" "),t("p",[e._v("As we launch the Chevereto Cloud beta, we’ll begin testing a micro-cache system that, in synthetic tests, has shown significant optimization of MySQL usage.")]),e._v(" "),t("h2",{attrs:{id:"cloud-native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud-native"}},[e._v("#")]),e._v(" Cloud native")]),e._v(" "),t("p",[e._v("Since Regio, the Chevereto Cloud edition has become the upstream source for all other editions, including Chevereto Pro, Chevereto Lite, and Chevereto Free. Chevereto Cloud is set to become the backbone of the entire project.")]),e._v(" "),t("h2",{attrs:{id:"chevereto-lite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chevereto-lite"}},[e._v("#")]),e._v(" Chevereto Lite")]),e._v(" "),t("p",[e._v("I identified a significant gap between the Chevereto Free and Chevereto Pro offerings. While Chevereto Free is well-suited for individual use, it doesn’t provide an easy progression for users to explore advanced features at a gradual pace before committing to an annual subscription.")]),e._v(" "),t("p",[e._v("Chevereto Lite addresses this gap by offering the most affordable licensing option we’ve ever provided. Tailored for communities, it includes all multi-user-oriented features and fits into the ‘Dollar Club’ category with an accessible month-to-month subscription, making it affordable for virtually anyone.")]),e._v(" "),t("p",[e._v("I want to launch Chevereto Lite in Q1 2025, expanding our reach in the self-hosted market and providing a more inclusive entry point for users.")])])}),[],!1,null,null,null);t.default=a.exports}}]);