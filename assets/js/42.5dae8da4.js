(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{412:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-nginx"}},[s._v("#")]),s._v(" Docker NGINX")]),s._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[s._v("#")]),s._v(" 설정")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/Network/nginx.html"}},[s._v("NGINX")]),s._v(" 참고")],1),s._v(" "),a("h2",{attrs:{id:"실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실행"}},[s._v("#")]),s._v(" 실행")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -d --name my_nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/conf.d/:/etc/nginx/conf.d/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/tls/:/etc/nginx/tls/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --network "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    nginx:latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);