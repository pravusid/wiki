(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{297:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"node-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),n("h2",{attrs:{id:"개요"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),n("p",[t._v("JavaScript Runtime")]),t._v(" "),n("h2",{attrs:{id:"특징"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#특징"}},[t._v("#")]),t._v(" 특징")]),t._v(" "),n("ol",[n("li",[t._v("google V8 engine : 구글이 개발한 V8 자바스크립트 엔진 기반, 자바스크립트 기반이므로 single thread로 작동함")]),t._v(" "),n("li",[t._v("Event driven : 순차적으로 작업을 실행하는 것이 아니라 작업에서 무엇을 처리해야하는지만 알려주고(callback) 시간이 걸리는 처리들을 EventListener로 위임한다.")]),t._v(" "),n("li",[t._v("Nonblocking I/O / Asynchronous : single thread로 작동하므로 다중 요청 처리를 위해서 비동기 nonblocking I/O로 처리가 이루어짐")])]),t._v(" "),n("h2",{attrs:{id:"설치"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[t._v("#")]),t._v(" 설치")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/en/download/package-manager/"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"삭제"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#삭제"}},[t._v("#")]),t._v(" 삭제")]),t._v(" "),n("p",[t._v("A-1: npm, npm global modules 모두 삭제")]),t._v(" "),n("p",[n("code",[t._v("npm ls -gp --depth=0 | awk -F/ '/node_modules/ && !/\\/npm$/ {print $NF}' | xargs npm -g rm")])]),t._v(" "),n("p",[t._v("A-2: 삭제에 관리자 권한이 필요하면")]),t._v(" "),n("p",[n("code",[t._v("npm ls -gp --depth=0 | awk -F/ '/node_modules/ && !/\\/npm$/ {print $NF}' | xargs sudo npm -g rm")])]),t._v(" "),n("p",[t._v("B: 설치할 때 사용한 "),n("code",[t._v("package-manager")]),t._v(" 통해 "),n("code",[t._v("nodejs")]),t._v(" 삭제")]),t._v(" "),n("p",[t._v("C: nodejs 관련 파일 삭제")]),t._v(" "),n("p",[n("code",[t._v("sudo rm -rf /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp")])]),t._v(" "),n("h2",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),n("p",[t._v("Node.js는 다양한 작업을 수행할 수 있지만, 웹 기반 Application에 적합하도록 많은 투자가 이루어지고 있다.")]),t._v(" "),n("p",[t._v("node에서 http는 first class citizen 이다.")]),t._v(" "),n("p",[t._v("node server 예제")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hostname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hostname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Server running at http://")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("hostname"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h3",{attrs:{id:"서버-실행"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#서버-실행"}},[t._v("#")]),t._v(" 서버 실행")]),t._v(" "),n("p",[n("code",[t._v("node index.js")])]),t._v(" "),n("p",[t._v("hot-reload를 위해서 nodemon을 이용한다")]),t._v(" "),n("p",[n("code",[t._v("yarn global add nodemon")])]),t._v(" "),n("p",[n("code",[t._v("nodemon index.js")])])])}),[],!1,null,null,null);s.default=e.exports}}]);