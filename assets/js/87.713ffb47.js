(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{290:function(t,v,_){"use strict";_.r(v);var a=_(0),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"javascript-정규표현식"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript-정규표현식"}},[t._v("#")]),t._v(" JavaScript 정규표현식")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/정규식"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"정규표현식-규칙"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#정규표현식-규칙"}},[t._v("#")]),t._v(" 정규표현식 규칙")]),t._v(" "),_("p",[t._v("정규표현식 리터럴은 "),_("code",[t._v("const regexp = /ab+c/;")]),t._v(" 와 같이 슬래쉬("),_("code",[t._v("/")]),t._v(")로 감싸는 패턴을 사용한다")]),t._v(" "),_("p",[t._v("정규표현식 생성자 함수를 호출할 수도 있다: "),_("code",[t._v('const regexp = new RegExp("ab+c");')])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("문자")]),t._v(" "),_("th",[t._v("일치")]),t._v(" "),_("th",[t._v("예제")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("^")])]),t._v(" "),_("td",[t._v("입력값의 시작")]),t._v(" "),_("td",[_("code",[t._v("/^This/")]),t._v(' 는 "This is.." 와 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("$")])]),t._v(" "),_("td",[t._v("입력값의 끝")]),t._v(" "),_("td",[_("code",[t._v("/end/")]),t._v('는 "This is the end" 와 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("*")])]),t._v(" "),_("td",[t._v("0번 이상 반복")]),t._v(" "),_("td",[_("code",[t._v("/se*/")]),t._v('는 "seeee"와 "se"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("+")])]),t._v(" "),_("td",[t._v("1번 이상 반복")]),t._v(" "),_("td",[_("code",[t._v("/ap+/")]),t._v('는 "apple"에는 일치. "apie"에는 불일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("?")])]),t._v(" "),_("td",[t._v("0번 또는 1번 반복")]),t._v(" "),_("td",[_("code",[t._v("/ap?/")]),t._v('는 "apple" 과 "and"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n}")])]),t._v(" "),_("td",[t._v("정확히 n번 반복")]),t._v(" "),_("td",[_("code",[t._v("/ap{2}")]),t._v('는 "apple"에는 일치. "apie"에는 불일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n,}")])]),t._v(" "),_("td",[t._v("n번 이상 반복")]),t._v(" "),_("td",[_("code",[t._v("/ap{2,}")]),t._v('는 "apple"과 "apple"의 모든 p에 일치. "apie"에는 불일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("{n,m}")])]),t._v(" "),_("td",[t._v("최소 n번, 최대 m번")]),t._v(" "),_("td",[_("code",[t._v("/a,p{2,4}/")]),t._v('는 "appppppple"의 p 4개에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("(x)")])]),t._v(" "),_("td",[t._v("x에 대응하여 기억한다 (\\숫자)에 대응")]),t._v(" "),_("td",[_("code",[t._v("/(foo) (bar) \\1 \\2/")]),t._v('는 "foo bar foo bar"는 정규식 순서대로 대응함')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("(?:x)")])]),t._v(" "),_("td",[t._v("x리터럴을 묶고 (\\숫자)에 대응(기억)하지 않음")]),t._v(" "),_("td",[_("code",[t._v("/(?:foo){1,2}/")]),t._v(" 처럼 문자를 묶어 하위표현을 정의할 때 사용")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("x(?=y)")])]),t._v(" "),_("td",[t._v("y가 따라오는 x에만 대응(lookahead)")]),t._v(" "),_("td",[_("code",[t._v("/Jack(?=Sprat|Frost)/")]),t._v("는 'Sprat' 또는 'Frost'가 뒤따라오는 'Jack'에만 대응")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("x(?!y)")])]),t._v(" "),_("td",[t._v("'y'가 뒤따라오지 않는 'x'에만 일치(negated lookahead)")]),t._v(" "),_("td",[t._v("정규식 "),_("code",[t._v('/\\d+(?!\\.)/.exec("3.141")')]),t._v("는 '3.141' 이 아닌 '141'에 일치")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("x|y")])]),t._v(" "),_("td",[t._v("x 또는 y")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("[xyz]")])]),t._v(" "),_("td",[t._v("대괄호 안의 모든문자")]),t._v(" "),_("td",[_("code",[t._v("/a[px]e/")]),t._v('는 "ape" 와 "axe"에 일치. "ale"에는 불일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("[^xyz]")])]),t._v(" "),_("td",[t._v("대괄호 안의 문자를 제외한 모든문자")]),t._v(" "),_("td",[_("code",[t._v("/a[^px]/")]),t._v('는 "ale"에는 일치. "axe"나 "ape"에는 불일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v(".")])]),t._v(" "),_("td",[t._v("줄 바꿈을 제외한 모든문자")]),t._v(" "),_("td",[_("code",[t._v("/a,e/")]),t._v('는 "ape"와 "axe"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\b")])]),t._v(" "),_("td",[t._v("단어 경계")]),t._v(" "),_("td",[_("code",[t._v("/\\bno/")]),t._v('는 "nono"에서 첫번째 "no"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\B")])]),t._v(" "),_("td",[t._v("단어 경계를 제외한 모든문자")]),t._v(" "),_("td",[_("code",[t._v("/\\Bno/")]),t._v('는 "nono"에서 두번째 "no"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\d")])]),t._v(" "),_("td",[t._v("0부터 9까지의 숫자")]),t._v(" "),_("td",[_("code",[t._v("/\\d{3}/")]),t._v('는 "Now in 123"에서 123에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\D")])]),t._v(" "),_("td",[t._v("숫자를 제외한 모든문자")]),t._v(" "),_("td",[_("code",[t._v("/\\D{2,4}/")]),t._v('는 "Now in 123" 에서 "Now"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\w")])]),t._v(" "),_("td",[t._v("단어 문자(알파벳,숫자,밑줄)")]),t._v(" "),_("td",[_("code",[t._v("/\\w/")]),t._v('는 "javascript"에서 "j"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\W")])]),t._v(" "),_("td",[t._v("단어 문자가 아닌 문자 (알파벳,숫자,밑줄이 아닌 문자)")]),t._v(" "),_("td",[_("code",[t._v("/\\W/")]),t._v('는 "100%"에서 "%"에 일치')])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\n")])]),t._v(" "),_("td",[t._v("줄바꿈")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\s")])]),t._v(" "),_("td",[t._v("하나의 공백 문자")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\S")])]),t._v(" "),_("td",[t._v("공백 문자가 아닌 모든 문자")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[_("code",[t._v("\\t")])]),t._v(" "),_("td",[t._v("탭")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"flag"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" flag")]),t._v(" "),_("p",[t._v("플래그는 정규표현식 리터럴 마지막에 추가한다: "),_("code",[t._v("const regexp = /pattern/flags;")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Flag")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("g")]),t._v(" "),_("td",[t._v("전역 검색")])]),t._v(" "),_("tr",[_("td",[t._v("i")]),t._v(" "),_("td",[t._v("대소문자 구분 없는 검색")])]),t._v(" "),_("tr",[_("td",[t._v("m")]),t._v(" "),_("td",[t._v("다중행(multi-line) 검색")])]),t._v(" "),_("tr",[_("td",[t._v("u")]),t._v(" "),_("td",[t._v("유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다")])]),t._v(" "),_("tr",[_("td",[t._v("y")]),t._v(" "),_("td",[t._v('"sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다. sticky 문서를 확인하세요')])])])]),t._v(" "),_("h3",{attrs:{id:"capturing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#capturing"}},[t._v("#")]),t._v(" capturing")]),t._v(" "),_("p",[t._v("정규식 패턴 내부에서 capturing 사용: "),_("code",[t._v("\\n")]),t._v("은 n번째 capturing 대응함")]),t._v(" "),_("blockquote",[_("p",[t._v("패턴 "),_("code",[t._v("/(foo) (bar) \\1 \\2/")]),t._v(" 안의 '(foo)' 와 '(bar)'는 문자열 \"foo bar foo bar\"에서 앞 두단어에 대응하고, 패턴 내부의 "),_("code",[t._v("\\1 \\2")]),t._v("는 문자열의 뒷 두 단어에 대응한다.")])]),t._v(" "),_("p",[t._v("정규식의 치환에서 capturing 사용: "),_("code",[t._v("$n")]),t._v("은 n번째 capturing 대응하고, "),_("code",[t._v("$&")]),t._v("는 capturing 전체 문자열을 가리킴")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("'bar foo'.replace( /(...) (...)/, '$2 $1')")]),t._v("를 처리한 결과는 'foo bar'가 된다.")])]),t._v(" "),_("h2",{attrs:{id:"예제"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 줄바꿈")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" linebreak "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[\\r|\\n|\\r\\n]$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 아이디 체크")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpId "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^[a-z0-9_-]\\w{5,20}$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비밀번호 길이 체크")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpPassword "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\w[6,16]$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비밀번호 조합(영문, 숫자) 및 길이 체크")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpPassword "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이메일 체크")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpEmail"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 휴대폰번호")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpMobile "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^01([016789]?)-?([0-9]{3,4})-?([0-9]{4})$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 숫자만 사용")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpNumber "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^\\d+$/")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br"),_("span",{staticClass:"line-number"},[t._v("7")]),_("br"),_("span",{staticClass:"line-number"},[t._v("8")]),_("br"),_("span",{staticClass:"line-number"},[t._v("9")]),_("br"),_("span",{staticClass:"line-number"},[t._v("10")]),_("br"),_("span",{staticClass:"line-number"},[t._v("11")]),_("br"),_("span",{staticClass:"line-number"},[t._v("12")]),_("br"),_("span",{staticClass:"line-number"},[t._v("13")]),_("br"),_("span",{staticClass:"line-number"},[t._v("14")]),_("br"),_("span",{staticClass:"line-number"},[t._v("15")]),_("br"),_("span",{staticClass:"line-number"},[t._v("16")]),_("br"),_("span",{staticClass:"line-number"},[t._v("17")]),_("br"),_("span",{staticClass:"line-number"},[t._v("18")]),_("br"),_("span",{staticClass:"line-number"},[t._v("19")]),_("br"),_("span",{staticClass:"line-number"},[t._v("20")]),_("br")])])])}),[],!1,null,null,null);v.default=e.exports}}]);