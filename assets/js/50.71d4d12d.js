(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{420:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-volume"}},[s._v("#")]),s._v(" Docker Volume")]),s._v(" "),a("p",[s._v("volume 사용현황 및 binding 조회")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a --format "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{ .ID }}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" docker inspect -f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{{ .Name }}{{ range .Mounts }}{{ printf "\\n\\t" }}{{ .Type }} {{ if eq .Type "bind" }}{{ .Source }}{{ end }}{{ .Name }} => {{ .Destination }}{{ end }}{{ printf "\\n" }}\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("dangling volume을 삭제한다")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -qf "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dangling")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);