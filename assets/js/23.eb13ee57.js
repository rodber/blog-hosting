(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{352:function(e,t,s){"use strict";s.r(t);var a=s(6),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Encryption is the process which encodes or transform data making it useless without the proper decryption mechanism. For example, it allows to transform a file, like a picture, into just useless bytes without the encryption key.")]),e._v(" "),t("p",[e._v("For today standards data encryption in a storage service is a must have because it allows a better layer of privacy —a very thin layer anyway— which aims to protect whatever you throw in these services and keep some eyes out of that content. Any storage service made to be used in private or personal environments must have this thing.")]),e._v(" "),t("h3",{attrs:{id:"the-problem-with-encryption"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem-with-encryption"}},[e._v("#")]),e._v(" The problem with encryption")]),e._v(" "),t("p",[e._v("A robust encryption model is quite simple: The user password is the «constant» element to generate encryption keys for each stored file so the encryption and decryption works on-the-fly for each session when someone is logged in. Hopefully all this happens at client side so the decrypted files are never handled by the server.")]),e._v(" "),t("p",[e._v("Problem is that this model has several pitfalls when some basic features must be added to the system. For example, if you want to change the password —remember that this is the «constant» key element— you must decrypt and re-encrypt everything. Another example is when someone want to share a file which means that there must be a way to store or include the decryption key somewhere like implicit in the link or in the database. What I’m saying is that this and many other features compromises the strength of the system. There is no way to make the files truly private in any mainstream service with all the fancy features checklist.")]),e._v(" "),t("h3",{attrs:{id:"how-encryption-is-actually-used"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-encryption-is-actually-used"}},[e._v("#")]),e._v(" How encryption is actually used")]),e._v(" "),t("p",[e._v("Since you can’t fully encrypt the files —without sacrifice several features of the overall system— the deal is just handle a portion of the encryption thing and actually, "),t("strong",[e._v("the true goal of file encryption in storage services is to blind the storage part")]),e._v(". The files sent to the storage server must be encrypted, which allows to use any third-party service (Amazon S3, Google Cloud, etc.) to store whatever because they won’t be able to index, label or do anything with those encrypted files because they are dealing only with encrypted data which is worthless without the encryption keys.")]),e._v(" "),t("p",[t("strong",[e._v("Most storage services store the file encryption keys")]),e._v(" which may look bad if you truly care about privacy. The only thing that they do for privacy is that the third-party storage server —and any party with access to the storage server— can’t access to the information directly. This is not that bad if you think about it because by doing this they are abstracting this part of the system.")]),e._v(" "),t("h3",{attrs:{id:"the-mega-client-side-encryption-system"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-mega-client-side-encryption-system"}},[e._v("#")]),e._v(" The MEGA client-side encryption system")]),e._v(" "),t("p",[e._v("MEGA is not that different from any other storage service and they store the encryption keys like everybody else. They say that the key is behind the user’s password and several other claims that doesn’t seem to be real for what I saw and Arstechnica wrote about MEGA "),t("a",{attrs:{href:"https://arstechnica.com/business/2013/01/megabad-a-quick-look-at-the-state-of-megas-encryption/",target:"_blank",rel:"noopener noreferrer"}},[e._v("calling it Megabad"),t("OutboundLink")],1),e._v(" revealing a lot of issues back in 2013.")]),e._v(" "),t("p",[e._v("MEGA is well know because of their privacy —or encryption— concerns. Actually, their motto is «The Privacy Company» so I did some own research to understand how their encryption system works. Honestly, when they launched back in 2013 I didn’t pay to much attention to their encryption mechanism because the things that I code are made to be used in public environments so encryption is not something needed. That has changed a little bit because "),t("strong",[e._v("I’m planning to add personal modes")]),e._v(" to both "),t("a",{attrs:{href:"https://chevereto.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto"),t("OutboundLink")],1),e._v(" and Quickty and I really like the client-side encryption system used by MEGA which means that the job is done by the web browser, not the remote server.")]),e._v(" "),t("p",[e._v("There are several caveats in file encryption and systems designed to deliver this files. "),t("strong",[e._v("Encrypt and decrypt is something that takes a high load of resources")]),e._v(" and on top of that you must deliver this dynamic —or cached— files. If your server will be decrypting files it will eventually get out of resources very quickly and that is why client-side decryption is great because it works directly in the client web browser rather than the remote server. This means "),t("strong",[e._v("zero server load")]),e._v(" for both encryption/decryption and final file delivery processes.")]),e._v(" "),t("h3",{attrs:{id:"missing-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#missing-things"}},[e._v("#")]),e._v(" Missing things")]),e._v(" "),t("p",[e._v("A client-side decryption model has things that must be worked out. For example, it takes a lot of resources (CPU and RAM) when you download a couple large files at the same time. And "),t("strong",[e._v("not all the modern web browsers apply the HTML 5 local storage API in the same way")]),e._v(", in most cases the implementation is highly limited. Actually, MEGA works properly only in Chrome and Opera —Opera uses the same Google fork of webkit— so it is still very limited, even in 2015.")]),e._v(" "),t("p",[e._v("There are also limitations in mobile devices. In both iOS and Android the browsers has "),t("strong",[e._v("limitations in the HTML 5 APIs")]),e._v(" like local storage or the file API. Even if all the related APIs are fully implemented it won’t be the same thing because of the resources demanded by the processes which have a cap since they are running in a web browser so a custom app is the way to go.")]),e._v(" "),t("h3",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),t("p",[e._v("A system that works natively only in two major web browsers and that it needs polyfills to make it work is not something good at all. If MEGA started all this thing in 2013 and in two years there are still issues related to cross-browser support means that the future doesn't seem that good for this technique.")]),e._v(" "),t("p",[e._v("The only way to guarantee privacy means that several features must be removed and no one does that. File keys are stored to make the whole thing works with all the fancy features that users demands but if the keys are stored somewhere... "),t("strong",[e._v("What is the point of do any job client-side anyway?")]),e._v(". Maybe it will save server resources but at a ver high cost: Limited support.")]),e._v(" "),t("p",[e._v("If the storage service has access to both keys and files —which are in the third-party storage server— there is no additional privacy layer introduced by doing client-side encryption or decryption. Maybe interception if the connection is not secure but if the system connects using a certificate theres no need to do anything else.")]),e._v(" "),t("p",[e._v("This client-side encryption system indeed increases user’s privacy but only if the system doesn’t store the keys at all. There are some small services that works like this and those services are really secure but you can do very limited stuff. At the end, "),t("strong",[e._v("users trend to use the services that will allow them do do more")]),e._v(" with their content like sharing or things like that and the privacy is not that bad, at least that is way better than nothing.")])])}),[],!1,null,null,null);t.default=o.exports}}]);