(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{399:function(t,s,a){"use strict";a.r(s);var r=a(28),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-grid"}},[t._v("#")]),t._v(" CSS Grid")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://yamoo9.gitbook.io/css-grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yamoo9.gitbook.io/css-grid/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.joshwcomeau.com/css/interactive-guide-to-grid/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.joshwcomeau.com/css/interactive-guide-to-grid/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"grid-선언"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-선언"}},[t._v("#")]),t._v(" grid 선언")]),t._v(" "),a("blockquote",[a("p",[t._v("그리드 컨테이너는 요소에 "),a("code",[t._v("display: grid")]),t._v(" 또는 "),a("code",[t._v("display: inline-grid")]),t._v("를 선언하여 만듭니다.\n이렇게 하면 해당 요소 바로 밑에 있는 모든 자식 요소는 그리드 아이템이 됩니다.")])]),t._v(" "),a("h2",{attrs:{id:"grid-트랙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-트랙"}},[t._v("#")]),t._v(" grid 트랙")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("columns")]),t._v(", "),a("code",[t._v("rows")]),t._v(" 고정값 또는 비율을 정의할 수 있다")]),t._v(" "),a("li",[a("code",[t._v("fr")]),t._v(" 단위는 컨테이너의 남은 공간을 비율로 지정한 것이다")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 2fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("fr")]),t._v(" 선언을 반복하는 대신 "),a("code",[t._v("repeat")]),t._v(" 키워드를 사용할 수 있다")]),t._v(" "),a("li",[a("code",[t._v("1fr 1fr 1fr == repeat(3, 1fr)")])])]),t._v(" "),a("h3",{attrs:{id:"grid-크기-자동설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-크기-자동설정"}},[t._v("#")]),t._v(" grid 크기 자동설정")]),t._v(" "),a("ul",[a("li",[t._v("grid에서는 행, 열 각각의 크기(비율)를 정해진 횟수만큼 선언하게 된다")]),t._v(" "),a("li",[t._v("선언한 크기를 넘어서는 그리드 요소가 발생했을 때 적용될 크기를 지정할 수 있다")]),t._v(" "),a("li",[t._v("이 때 자동설정 크기는 고정 값 대신 "),a("code",[t._v("minmax")]),t._v("를 사용할 수 있다")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-auto-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("minmax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 최소 100px, 최대크기 자동설정(콘텐츠 크기에 따라) */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"grid-라인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-라인"}},[t._v("#")]),t._v(" grid 라인")])])}),[],!1,null,null,null);s.default=n.exports}}]);