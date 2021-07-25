(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{444:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"date-object-in-javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-object-in-javascript"}},[t._v("#")]),t._v(" Date Object in JavaScript")]),t._v(" "),a("ul",[a("li",[t._v("Date 생성자는 특정 시점을 나타내는 "),a("code",[t._v("Date")]),t._v(" 객체를 생성한다")]),t._v(" "),a("li",[t._v("JavaScript "),a("code",[t._v("Date")]),t._v("객체는 기본적으로 OS에 설정된 현재지역 타임존(Local timezone)을 따른다.")]),t._v(" "),a("li",[t._v("Date 객체는 내부 데이터로 1970년 1월 1일 (UTC) 00:00으로부터 지난 시간을 miliseconds 값을 가지고 있다")]),t._v(" "),a("li",[t._v("Date 객체는 유닉스 시간으로부터 약 ±100,000,000일 (1억일)을 기록할 수 있으므로, 293,742년이 오면 문제가 발생할 수 있다")])]),t._v(" "),a("blockquote",[a("p",[t._v("Unix 시간은 UTC 시작부터 경과시간을 "),a("strong",[t._v("seconds")]),t._v("로 환산하여 나타낸 것이다. JavaScript Date 객체는 "),a("strong",[t._v("miliseconds")]),t._v(" 단위이다.")])]),t._v(" "),a("h2",{attrs:{id:"생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#생성"}},[t._v("#")]),t._v(" 생성")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 현재시각 Date 객체")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unix timestamp in miliseconds")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IETF 호환 RFC 2822 타임스탬프 또는 ISO-8601 형식으로 작성되어야 함")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 개별 날짜 및 시각")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" monthIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minutes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" seconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milliseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환")]),t._v("\nDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 쉼표로 구분된 날짜 매개변수를 받아 사용자가 지정한 시간과 1970년 1월 1일 00:00:00 사이의 밀리초 수를 반환 (local time 대신 UTC 사용)")]),t._v("\nDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" month"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hour"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" millisecond"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unix 시간 얻기")]),t._v("\nMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("ul",[a("li",[t._v("입력 및 수정에 사용되는 함수("),a("code",[t._v("생성자")]),t._v(", "),a("code",[t._v("parse()")]),t._v(", "),a("code",[t._v("getHour()")]),t._v(", "),a("code",[t._v("setHour()")]),t._v("...)들은 모두 실행환경의 local time 기준으로 작동한다.")]),t._v(" "),a("li",[t._v("연도 입력시 0~99 범위는 1900~1999로 처리됨")]),t._v(" "),a("li",[t._v("월 입력시 0부터 시작 (1월 == 0, 2월 == 1)")]),t._v(" "),a("li",[a("code",[t._v("Date.parse()")]),t._v("는 구현방식이 상이하여 사용하지 않기를 권장함 (브라우저 기준, ES6 이전의 경우)")]),t._v(" "),a("li",[a("code",[t._v("dateString")]),t._v("의 경우 구현에 따라 마지막 "),a("code",[t._v("Z")]),t._v("가 붙어있지 않으면 local time으로 처리되므로 유의해야 함: "),a("code",[t._v("2019-07-28T21:44:20")])])]),t._v(" "),a("h2",{attrs:{id:"변환-formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#변환-formatting"}},[t._v("#")]),t._v(" 변환(formatting)")]),t._v(" "),a("p",[t._v("다음 문자열 변환은 UTC+0("),a("code",[t._v("Z")]),t._v(") 기준으로 출력된다.")]),t._v(" "),a("ul",[a("li",[t._v("ISO-8601 포맷: "),a("code",[t._v("toISOString()")]),t._v(", "),a("code",[t._v("toJSON()")])]),t._v(" "),a("li",[t._v("RFC-1123 포맷: "),a("code",[t._v("toGMTString()")]),t._v(", "),a("code",[t._v("toUTCString()")])])]),t._v(" "),a("h2",{attrs:{id:"offset-적용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-적용"}},[t._v("#")]),t._v(" offset 적용")]),t._v(" "),a("p",[a("code",[t._v("getTimeZoneOffset()")]),t._v(" 메소드를 사용하면 현재 timezone offset을 분 단위로 출력한다")]),t._v(" "),a("blockquote",[a("p",[t._v("i.e. +09:00(Asia/Seoul) => -540 출력 (offset과 부호가 반대이므로 유의)")])]),t._v(" "),a("p",[t._v("그러나 offset만 가지고는 time zone 적용이 불가능하다 (time zone은 해당 지역과 offset 데이터의 집합임)")]),t._v(" "),a("h2",{attrs:{id:"date-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-library"}},[t._v("#")]),t._v(" Date Library")]),t._v(" "),a("p",[t._v("편리한 날짜 계산과 time zone 적용을 위해서 사용할 수 있는 라이브러리 목록이다")]),t._v(" "),a("ul",[a("li",[t._v("moment: "),a("a",{attrs:{href:"https://github.com/moment/moment",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/moment/moment"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("moment-timezone: "),a("a",{attrs:{href:"https://github.com/moment/moment-timezone/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/moment/moment-timezone/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("dayjs: "),a("a",{attrs:{href:"https://github.com/iamkun/dayjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iamkun/dayjs"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("date-fns: "),a("a",{attrs:{href:"https://github.com/date-fns/date-fns",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/date-fns/date-fns"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);