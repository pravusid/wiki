(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{503:function(_,t,v){"use strict";v.r(t);var e=v(28),r=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"유니코드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#유니코드"}},[_._v("#")]),_._v(" 유니코드")]),_._v(" "),v("p",[_._v("유니코드(Unicode)는 전 세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준이며, 유니코드 협회(Unicode Consortium)가 제정한다.")]),_._v(" "),v("p",[_._v("이 표준에는 ISO 10646 문자 집합, 문자 인코딩, 문자 정보 데이터베이스, 문자들을 다루기 위한 알고리즘 등을 포함하고 있다.")]),_._v(" "),v("h2",{attrs:{id:"유니코드-평면"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#유니코드-평면"}},[_._v("#")]),_._v(" 유니코드 평면")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Plane_(Unicode)",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://en.wikipedia.org/wiki/Plane_(Unicode)"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("유니코드를 구획으로 나눈 것이며 0번(다국어 기본평면)에서 16번까지 17개로 나뉘어 있으며 각 편면은 2^16개 코드로 구성된다.")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("0: 다국어 기본 평면(BMP)")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+0000 ~ U+FFFF")]),_._v(" "),v("li",[_._v("내용: 각 언어의 문자 및 특수문자(한글과 한중일 통합한자 포함)")])])]),_._v(" "),v("li",[v("p",[_._v("1: 다국어 보충 평면(SMP)")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+10000 ~ U+1FFFF")]),_._v(" "),v("li",[_._v("내용: 옛 문자나 음악기호, 수학기호")])])]),_._v(" "),v("li",[v("p",[_._v("2: 상형문자 보충 평면(SIP)")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+20000 ~ U+2FFFF")]),_._v(" "),v("li",[_._v("내용: 초기 유니코드에서 제외된 한중일 통합한자가 대부분")])])]),_._v(" "),v("li",[v("p",[_._v("3: 상형문자 제 3평면")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+30000 ~ U+3FFFF")]),_._v(" "),v("li",[_._v("내용: 갑골 문자, 금문 ... (아직 내용지정되어있지 않음)")])])]),_._v(" "),v("li",[v("p",[_._v("4~13: 미지정 평면")]),_._v(" "),v("p",[_._v("-범위: U+40000 ~ U+​DFFFF")])]),_._v(" "),v("li",[v("p",[_._v("14: 특수 목적 보충 평면(SSP)")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+E0000 ~ U+​EFFFF")]),_._v(" "),v("li",[_._v("내용: 소수의 제어문자")])])]),_._v(" "),v("li",[v("p",[_._v("15~16: 사용자 영역 평면")]),_._v(" "),v("ul",[v("li",[_._v("범위: U+F0000 ~ U+​10FFFF")]),_._v(" "),v("li",[_._v("내용: 특정 업체나 사용자별로 할당가능하며 호환성이 보장되지 않음")])])])]),_._v(" "),v("h2",{attrs:{id:"byte-order-mark-bom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#byte-order-mark-bom"}},[_._v("#")]),_._v(" Byte Order Mark (BOM)")]),_._v(" "),v("p",[v("code",[_._v("U+FEFF")]),_._v(": UTF-16으로 된 파일의 엔디언 식별을 위해서 파일의 맨 앞에 삽입한다.")]),_._v(" "),v("p",[_._v("유니코드 표준은 UTF-8의 BOM을 허용하지만, 그것의 사용은 필수가 아니며 UTF-8에서 바이트 순서는 어떤 의미도 없어서 권장되지도 않는다.")]),_._v(" "),v("p",[_._v("첫 두 바이트가 "),v("code",[_._v("FE FF")]),_._v("이면 빅 엔디언, "),v("code",[_._v("FF FE")]),_._v("이면 리틀 엔디언으로 식별한다.")]),_._v(" "),v("h2",{attrs:{id:"utf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#utf"}},[_._v("#")]),_._v(" UTF")]),_._v(" "),v("ul",[v("li",[_._v("종류: 알파벳 / 한글")]),_._v(" "),v("li",[_._v("EUC-KR: 1byte / 2bytes")]),_._v(" "),v("li",[_._v("UTF-8: 1byte / 3bytes")]),_._v(" "),v("li",[_._v("UTF-16: 2bytes / 2bytes")]),_._v(" "),v("li",[_._v("UTF-32: 4bytes / 4bytes")])]),_._v(" "),v("h3",{attrs:{id:"utf-8"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#utf-8"}},[_._v("#")]),_._v(" UTF-8")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://ko.wikipedia.org/wiki/UTF-8",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://ko.wikipedia.org/wiki/UTF-8"),v("OutboundLink")],1)]),_._v(" "),v("blockquote",[v("p",[_._v("Universal Coded Character Set + Transformation Format – 8-bit")])]),_._v(" "),v("p",[_._v("켄 톰슨과 롭 파이크가 만들었다. 가변 인코딩으로 한 글자를 1~4바이트로 표기한다.")]),_._v(" "),v("p",[_._v("여러 장점 덕분에 표준적으로 가장 많이 쓰이는 유니코드 인코딩이 되었다.")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("설명")]),_._v(" "),v("th",[_._v("코드 범위(십육진법)")]),_._v(" "),v("th",[_._v("UTF-8 표현(이진법)")]),_._v(" "),v("th",[_._v("UTF-16BE 표현(이진법)")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ASCII 범위")]),_._v(" "),v("td",[_._v("000000-00007F")]),_._v(" "),v("td",[_._v("0xxxxxxx")]),_._v(" "),v("td",[_._v("00000000 0xxxxxxx")])]),_._v(" "),v("tr",[v("td",[_._v("2바이트")]),_._v(" "),v("td",[_._v("000080-0007FF")]),_._v(" "),v("td",[_._v("110xxxxx 10xxxxxx")]),_._v(" "),v("td",[_._v("00000xxx xxxxxxxx")])]),_._v(" "),v("tr",[v("td",[_._v("3바이트")]),_._v(" "),v("td",[_._v("000800-00FFFF")]),_._v(" "),v("td",[_._v("1110xxxx 10xxxxxx 10xxxxxx")]),_._v(" "),v("td",[_._v("xxxxxxxx xxxxxxxx")])]),_._v(" "),v("tr",[v("td",[_._v("4바이트")]),_._v(" "),v("td",[_._v("010000-10FFFF")]),_._v(" "),v("td",[_._v("11110zzz 10zzxxxx 10xxxxxx 10xxxxxx")]),_._v(" "),v("td",[_._v("110110yy yyxxxxxx 110111xx xxxxxxxx")])])])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("1바이트로 표시된 문자의 최상위 비트는 항상 0이다")])]),_._v(" "),v("li",[v("p",[_._v("2바이트 이상으로 표시된 문자의 경우, 첫 바이트의 상위 비트들이 그 문자를 표시하는 데 필요한 바이트 수를 결정한다")]),_._v(" "),v("ul",[v("li",[_._v("예를 들어서 2바이트는 110으로 시작하고, 3바이트는 1110으로 시작한다")])])]),_._v(" "),v("li",[v("p",[_._v("첫 바이트가 아닌 나머지 바이트들은 상위 2비트가 항상 10이다")])])]),_._v(" "),v("h4",{attrs:{id:"utf-8-오류처리"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#utf-8-오류처리"}},[_._v("#")]),_._v(" UTF-8 오류처리")]),_._v(" "),v("blockquote",[v("p",[_._v("U+003F(?, 물음표)나 U+FFFD(�, 유니코드 대치 문자) 같은 다른 문자를 집어 넣는다")])]),_._v(" "),v("h3",{attrs:{id:"utf-16"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#utf-16"}},[_._v("#")]),_._v(" UTF-16")]),_._v(" "),v("p",[_._v("기본 다국어평면의 문자는 16비트 값으로 인코딩하고, 그 이상 범위의 문자는 32비트로 인코딩 한다.")]),_._v(" "),v("h3",{attrs:{id:"utf-32"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#utf-32"}},[_._v("#")]),_._v(" UTF-32")]),_._v(" "),v("p",[_._v("한 글자를 32비트(4bytes)로 인코딩한다.")]),_._v(" "),v("h2",{attrs:{id:"한글평면"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#한글평면"}},[_._v("#")]),_._v(" 한글평면")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://d2.naver.com/helloworld/19187",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://d2.naver.com/helloworld/19187"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"https://d2.naver.com/helloworld/76650",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://d2.naver.com/helloworld/76650"),v("OutboundLink")],1)])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("이름")]),_._v(" "),v("th",[_._v("처음")]),_._v(" "),v("th",[_._v("끝")]),_._v(" "),v("th",[_._v("개수")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("한글 자모 (Hangul Jamo)")]),_._v(" "),v("td",[_._v("1100")]),_._v(" "),v("td",[_._v("11FF")]),_._v(" "),v("td",[_._v("256")])]),_._v(" "),v("tr",[v("td",[_._v("호환용 한글 자모 (Hangul Compatibility Jamo)")]),_._v(" "),v("td",[_._v("3130")]),_._v(" "),v("td",[_._v("318F")]),_._v(" "),v("td",[_._v("96")])]),_._v(" "),v("tr",[v("td",[_._v("한글 자모 확장 A (Hangul Jamo Extended A)")]),_._v(" "),v("td",[_._v("A960")]),_._v(" "),v("td",[_._v("A97F")]),_._v(" "),v("td",[_._v("32")])]),_._v(" "),v("tr",[v("td",[_._v("한글 소리 마디 (Hangul Syllables)")]),_._v(" "),v("td",[_._v("AC00")]),_._v(" "),v("td",[_._v("D7AF")]),_._v(" "),v("td",[_._v("11184")])]),_._v(" "),v("tr",[v("td",[_._v("한글 자모 확장 B (Hangul Jamo Extended B)")]),_._v(" "),v("td",[_._v("D7B0")]),_._v(" "),v("td",[_._v("D7FF")]),_._v(" "),v("td",[_._v("80")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("완성형 한글 범위(한글소리마디): '가'(U+AC00)부터 '힣'(U+D7A3)")])]),_._v(" "),v("h2",{attrs:{id:"각종-유니코드-공백-space"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#각종-유니코드-공백-space"}},[_._v("#")]),_._v(" 각종 유니코드 공백 (space)")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Space_(punctuation)#Types_of_spaces",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://en.wikipedia.org/wiki/Space_(punctuation)#Types_of_spaces"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);