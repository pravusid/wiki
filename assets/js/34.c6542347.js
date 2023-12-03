(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{404:function(e,t,n){"use strict";n.r(t);var a=n(28),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mysql-character-sets-and-collations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-character-sets-and-collations"}},[e._v("#")]),e._v(" MySQL character sets and collations")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/charset-general.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dev.mysql.com/doc/refman/8.0/en/charset-general.html"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("character set은 기호와 인코딩의 세트이다.\ncollation은 character set에서 문자를 비교하기 위한 규칙모음이다.")]),e._v(" "),n("p",[e._v("두 문자값을 비교한다고 할 때 가장 간단한 방법은 인코딩내에서의 순서를 보는 것이다.\n그러나 대소문자, 각국의 다양한 확장된 알파벳등을 정렬하려면 규칙이 필요하다.")]),e._v(" "),n("p",[e._v("MySQL에서는")]),e._v(" "),n("ul",[n("li",[e._v("다양한 character sets으로 문자열을 저장")]),e._v(" "),n("li",[e._v("여러가지 collations를 사용하여 문자열을 비교")])]),e._v(" "),n("h2",{attrs:{id:"character-sets-in-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#character-sets-in-mysql"}},[e._v("#")]),e._v(" Character Sets In MySQL")]),e._v(" "),n("p",[e._v("MySQL의 기본 문자집합은 latin1(cp1252 West European)이다.")]),e._v(" "),n("p",[e._v("그외 다양한 문자집합을 지원하지만 일반적인 상황에서 사용하는 유니코드 문자집합은 다음과 같다.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-sets.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dev.mysql.com/doc/refman/8.0/en/charset-unicode-sets.html"),n("OutboundLink")],1)]),e._v(" "),n("ul",[n("li",[e._v("utf8mb3: A UTF-8 encoding of the Unicode character set using one to three bytes per character.")]),e._v(" "),n("li",[e._v("utf8: An alias for utf8mb3.")]),e._v(" "),n("li",[e._v("utf8mb4: A UTF-8 encoding of the Unicode character set using one to four bytes per character.")]),e._v(" "),n("li",[e._v("ucs2: The UCS-2 encoding of the Unicode character set using two bytes per character.")]),e._v(" "),n("li",[e._v("utf16: The UTF-16 encoding for the Unicode character set using two or four bytes per character. Like ucs2 but with an extension for supplementary characters.")]),e._v(" "),n("li",[e._v("utf16le: The UTF-16LE encoding for the Unicode character set. Like utf16 but little-endian rather than big-endian.")]),e._v(" "),n("li",[e._v("utf32: The UTF-32 encoding for the Unicode character set using four bytes per character.")])]),e._v(" "),n("blockquote",[n("p",[n("code",[e._v("utf8mb3")]),e._v(" 문자집합은 deprecated 이며 미래의 MySQL에서 제거될 것이다. 대신 "),n("code",[e._v("utf8mb4")]),e._v(" 문자집합을 사용해야 한다.\n현재 "),n("code",[e._v("utf8")]),e._v("은 "),n("code",[e._v("utf8mb3")]),e._v("의 별칭이지만, 미래 특정시점에 "),n("code",[e._v("utf8mb4")]),e._v("의 별칭이 될 것이다.\n"),n("code",[e._v("utf8")]),e._v("의 모호함을 피하기 위해서 문자열셋을 명시적으로("),n("code",[e._v("utf8mb-")]),e._v(") 지정하는 것을 고려해야 한다.")])]),e._v(" "),n("ul",[n("li",[n("code",[e._v("utf8mb4")]),e._v(", "),n("code",[e._v("utf16")]),e._v(", "),n("code",[e._v("utf16le")]),e._v(", "),n("code",[e._v("utf32")]),e._v(" 문자집합은 Basic Multilingual Plane (BMP) characters 및 BMP 외부의 supplementary characters를 지원한다")]),e._v(" "),n("li",[n("code",[e._v("utf8")]),e._v(", "),n("code",[e._v("ucs2")]),e._v(" 문자집합은 BMP characters만 지원한다")])]),e._v(" "),n("p",[e._v("대부분의 유니코드 문자집합은 general collation이 있다. ("),n("code",[e._v("_general")]),e._v("으로 표시)\n예를 들어, "),n("code",[e._v("utf8mb4")]),e._v(" 문자집합은 "),n("code",[e._v("utf8mb4_general_ci")]),e._v(", "),n("code",[e._v("utf8mb4_bin")]),e._v("의 general 및 binary 정렬이 있다.\n"),n("code",[e._v("utf8mb4_danish_ci")]),e._v(" 경우 언어별 데이터 정렬이다.")]),e._v(" "),n("p",[e._v("대부분의 문자집합은 단일 이진 데이터 정렬만 있지만, "),n("code",[e._v("utf8mb4")]),e._v("는 "),n("code",[e._v("utf8mb4_bin")]),e._v(" and (as of MySQL 8.0.17) "),n("code",[e._v("utf8mb4_0900_bin")]),e._v(" 두가지 이다.")]),e._v(" "),n("h2",{attrs:{id:"collations-sets-in-mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#collations-sets-in-mysql"}},[e._v("#")]),e._v(" Collations Sets In MySQL")]),e._v(" "),n("p",[e._v("유니코드를 사용한다면 다음 두 가지의 정렬방식을 주로 사용할 것이다")]),e._v(" "),n("ul",[n("li",[e._v("utf8_general_ci (or utf8mb4_general_ci)")]),e._v(" "),n("li",[e._v("utf8_unicode_ci (or utf8mb4_unicode_ci)")])]),e._v(" "),n("h3",{attrs:{id:"collation-naming-conventions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#collation-naming-conventions"}},[e._v("#")]),e._v(" collation naming conventions")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Suffix")]),e._v(" "),n("th",[e._v("Meaning")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("_ai")])]),e._v(" "),n("td",[e._v("Accent-insensitive")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("_as")])]),e._v(" "),n("td",[e._v("Accent-sensitive")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("_ci")])]),e._v(" "),n("td",[e._v("Case-insensitive")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("_cs")])]),e._v(" "),n("td",[e._v("Case-sensitive")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("_ks")])]),e._v(" "),n("td",[e._v("Kana-sensitive")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("_bin")])]),e._v(" "),n("td",[e._v("Binary")])])])]),e._v(" "),n("h2",{attrs:{id:"문자집합-및-정렬-인덱스"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#문자집합-및-정렬-인덱스"}},[e._v("#")]),e._v(" 문자집합 및 정렬 & 인덱스")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://stackoverflow.com/questions/59665045/will-existing-indexes-be-affected-when-changing-character-set-and-collation-of-m",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/questions/59665045/will-existing-indexes-be-affected-when-changing-character-set-and-collation-of-m"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v('An index is an ordered list of pointers to the rows of the table.\nThe ordering is based on both the CHARACTER SET and COLLATION of the column(s) of the index.\nIf you change either, the index must be rebuilt. A "pointer" (in this context) is a copy of the PRIMARY KEY.')])]),e._v(" "),n("p",[e._v("특히 기본 utf8 문자집합이 변경되어 충돌발생 가능성이 존재")]),e._v(" "),n("ul",[n("li",[e._v("utf8 charset + utf8_general_ci collation")]),e._v(" "),n("li",[e._v("utf8mb4 charset + utf8mb4_unicode_ci collation")])])])}),[],!1,null,null,null);t.default=c.exports}}]);