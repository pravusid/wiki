(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{475:function(t,e,s){"use strict";s.r(e);var a=s(28),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-정규표현식"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-정규표현식"}},[t._v("#")]),t._v(" JavaScript 정규표현식")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/정규식"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ziishaned/learn-regex/blob/master/translations/README-ko.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ziishaned/learn-regex/blob/master/translations/README-ko.md"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"예약어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예약어"}},[t._v("#")]),t._v(" 예약어")]),t._v(" "),s("p",[s("code",[t._v("[ ] ( ) { } . * + ? ^ $ \\ |")])]),t._v(" "),s("h2",{attrs:{id:"정규표현식-규칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정규표현식-규칙"}},[t._v("#")]),t._v(" 정규표현식 규칙")]),t._v(" "),s("p",[t._v("정규표현식 리터럴은 "),s("code",[t._v("const regexp = /ab+c/;")]),t._v(" 와 같이 슬래쉬("),s("code",[t._v("/")]),t._v(")로 감싸는 패턴을 사용한다")]),t._v(" "),s("p",[t._v("정규표현식 생성자 함수를 호출할 수도 있다: "),s("code",[t._v('const regexp = new RegExp("ab+c");')])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("문자")]),t._v(" "),s("th",[t._v("일치")]),t._v(" "),s("th",[t._v("예제")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("^")])]),t._v(" "),s("td",[t._v("입력값의 시작")]),t._v(" "),s("td",[s("code",[t._v("/^This/")]),t._v(" => "),s("strong",[t._v("This")]),t._v(" is end.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$")])]),t._v(" "),s("td",[t._v("입력값의 끝")]),t._v(" "),s("td",[s("code",[t._v("/end\\.$/")]),t._v(" => This is the "),s("strong",[t._v("end.")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("0번 이상 반복")]),t._v(" "),s("td",[s("code",[t._v("/se*/")]),t._v(" => "),s("strong",[t._v("seeee")]),t._v("d")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("+")])]),t._v(" "),s("td",[t._v("1번 이상 반복")]),t._v(" "),s("td",[s("code",[t._v("/ap+/")]),t._v(" => "),s("strong",[t._v("apple")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("?")])]),t._v(" "),s("td",[t._v("0번 또는 1번 반복")]),t._v(" "),s("td",[s("code",[t._v("/ap?/")]),t._v(" => "),s("strong",[t._v("apple")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n}")])]),t._v(" "),s("td",[t._v("정확히 n번 반복")]),t._v(" "),s("td",[s("code",[t._v("/ap{2}/")]),t._v(" => "),s("strong",[t._v("app")]),t._v("le")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n,}")])]),t._v(" "),s("td",[t._v("n번 이상 반복")]),t._v(" "),s("td",[s("code",[t._v("/ap{1,}/")]),t._v(" => "),s("strong",[t._v("app")]),t._v("le")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n,m}")])]),t._v(" "),s("td",[t._v("최소 n번, 최대 m번")]),t._v(" "),s("td",[s("code",[t._v("/ap{2,4}/")]),t._v(" => "),s("strong",[t._v("apppp")]),t._v("ppple")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("x|y")])]),t._v(" "),s("td",[t._v("x 또는 y")]),t._v(" "),s("td",[s("code",[t._v("/p|l/")]),t._v(" => a"),s("strong",[t._v("ppppl")]),t._v("e")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[xyz]")])]),t._v(" "),s("td",[t._v("대괄호 안의 모든문자")]),t._v(" "),s("td",[s("code",[t._v("/a[px]e/")]),t._v(" => a"),s("strong",[t._v("p")]),t._v("e or a"),s("strong",[t._v("x")]),t._v("e")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[^xyz]")])]),t._v(" "),s("td",[t._v("대괄호 안의 문자를 제외한 모든문자")]),t._v(" "),s("td",[s("code",[t._v("/a[^px]/")]),t._v(" => axe or ape")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v(".")])]),t._v(" "),s("td",[t._v("줄 바꿈을 제외한 모든문자")]),t._v(" "),s("td",[s("code",[t._v("/.pp/")]),t._v(" => "),s("strong",[t._v("app")]),t._v("le")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\b")])]),t._v(" "),s("td",[t._v("단어 경계")]),t._v(" "),s("td",[s("code",[t._v("/\\bno/")]),t._v(" => "),s("strong",[t._v("no")]),t._v("nonono")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\B")])]),t._v(" "),s("td",[t._v("단어 경계를 제외한 모든문자")]),t._v(" "),s("td",[s("code",[t._v("/\\Bno/")]),t._v(" => no"),s("strong",[t._v("nonono")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\d")])]),t._v(" "),s("td",[t._v("0부터 9까지의 숫자")]),t._v(" "),s("td",[s("code",[t._v("/\\d{3}/")]),t._v(" => Now in "),s("strong",[t._v("123")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\D")])]),t._v(" "),s("td",[t._v("숫자를 제외한 모든문자")]),t._v(" "),s("td",[s("code",[t._v("/\\D{2,4}/")]),t._v(" => "),s("strong",[t._v("Now")]),t._v(" in 123")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\w")])]),t._v(" "),s("td",[t._v("단어문자 == 알파벳, 숫자, 밑줄("),s("code",[t._v("_")]),t._v(")")]),t._v(" "),s("td",[s("code",[t._v("/\\w/")]),t._v(" => "),s("strong",[t._v("j")]),t._v("avascript")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\W")])]),t._v(" "),s("td",[t._v("단어문자가 아닌 문자")]),t._v(" "),s("td",[s("code",[t._v("/\\W/")]),t._v(" => 100 "),s("strong",[t._v("$")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\n")])]),t._v(" "),s("td",[t._v("줄바꿈")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\s")])]),t._v(" "),s("td",[t._v("하나의 공백 문자")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\S")])]),t._v(" "),s("td",[t._v("공백 문자가 아닌 모든문자")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\t")])]),t._v(" "),s("td",[t._v("탭")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"capturing-non-capturing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capturing-non-capturing"}},[t._v("#")]),t._v(" capturing & non-capturing")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("문자")]),t._v(" "),s("th",[t._v("일치")]),t._v(" "),s("th",[t._v("예제")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("(x)")])]),t._v(" "),s("td",[t._v("x를 묶고(하위패턴), "),s("code",[t._v("\\위치")]),t._v("에 대응")]),t._v(" "),s("td",[s("code",[t._v("/(foo) (bar) \\1 \\2/")]),t._v('는 "foo bar foo bar"는 정규식 순서대로 대응함')])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("(?:x)")])]),t._v(" "),s("td",[t._v("x를 묶지만(하위패턴), "),s("code",[t._v("\\위치")]),t._v("에 대응 하지않음")]),t._v(" "),s("td",[s("code",[t._v("/(?:foo){1,2}/")]),t._v(" 처럼 문자를 묶어 하위패턴을 정의할 때 사용")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("x(?=y)")])]),t._v(" "),s("td",[t._v("y 앞의 x에 대응 (lookahead)")]),t._v(" "),s("td",[s("code",[t._v("[T|t]he(?=\\sfat)")]),t._v(" => "),s("strong",[t._v("The")]),t._v(" fat cat sat on the mat.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("x(?!y)")])]),t._v(" "),s("td",[t._v("not y 앞의 x에 대응 (negated lookahead)")]),t._v(" "),s("td",[s("code",[t._v("[T|t]he(?!\\sfat)")]),t._v(" => The fat cat sat on "),s("strong",[t._v("the")]),t._v(" mat.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("(?<=y)x")])]),t._v(" "),s("td",[t._v("y 뒤의 x에 대응 (lookbehind)")]),t._v(" "),s("td",[s("code",[t._v("(?<=[T|t]he\\s)(fat|mat)")]),t._v(" => The "),s("strong",[t._v("fat")]),t._v(" cat sat on the "),s("strong",[t._v("mat")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("(?<!y)x")])]),t._v(" "),s("td",[t._v("not y 뒤의 x에 대응 (negated lookbehind)")]),t._v(" "),s("td",[s("code",[t._v("(?<![T|t]he\\s)(cat)")]),t._v(" => The cat sat on "),s("strong",[t._v("cat")]),t._v(".")])])])]),t._v(" "),s("h3",{attrs:{id:"flag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" flag")]),t._v(" "),s("p",[t._v("플래그는 정규표현식 리터럴 마지막에 추가한다: "),s("code",[t._v("const regexp = /pattern/flags;")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Flag")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("g")])]),t._v(" "),s("td",[t._v("전역 검색")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("i")])]),t._v(" "),s("td",[t._v("대소문자 구분 없는 검색")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("m")])]),t._v(" "),s("td",[t._v("다중행(multi-line) 검색")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("u")])]),t._v(" "),s("td",[t._v("유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("y")])]),t._v(" "),s("td",[t._v('"sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다. sticky 문서를 확인하세요')])])])]),t._v(" "),s("h3",{attrs:{id:"capturing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capturing"}},[t._v("#")]),t._v(" capturing")]),t._v(" "),s("p",[t._v("정규식 패턴 내부에서 capturing 사용: "),s("code",[t._v("\\n")]),t._v("은 n번째 capturing 대응함")]),t._v(" "),s("blockquote",[s("p",[t._v("패턴 "),s("code",[t._v("/(foo) (bar) \\1 \\2/")]),t._v(" 안의 '(foo)' 와 '(bar)'는 문자열 \"foo bar foo bar\"에서 앞 두단어에 대응하고, 패턴 내부의 "),s("code",[t._v("\\1 \\2")]),t._v("는 문자열의 뒷 두 단어에 대응한다.")])]),t._v(" "),s("p",[t._v("정규식의 치환에서 capturing 사용: "),s("code",[t._v("$n")]),t._v("은 n번째 capturing 대응하고, "),s("code",[t._v("$&")]),t._v("는 capturing 전체 문자열을 가리킴")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("'bar foo'.replace( /(...) (...)/, '$2 $1')")]),t._v("를 처리한 결과는 'foo bar'가 된다.")])]),t._v(" "),s("h2",{attrs:{id:"예제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[t._v("#")]),t._v(" 예제")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 줄바꿈")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" linebreak "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\r|\\n|\\r\\n]$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 아이디 체크")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^[a-z0-9_-]\\w{5,20}$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비밀번호 길이 체크")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpPassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^\\w[6,16]$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 비밀번호 조합(영문, 숫자) 및 길이 체크")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpPassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 이메일 체크")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpEmail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 휴대폰번호")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpMobile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^01([016789]?)-?([0-9]{3,4})-?([0-9]{4})$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 숫자만 사용")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" regExpNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^\\d+$")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])])])}),[],!1,null,null,null);e.default=v.exports}}]);