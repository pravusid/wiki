(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{542:function(e,v,_){"use strict";_.r(v);var t=_(27),i=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"gnupg"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),_("h2",{attrs:{id:"설치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[e._v("#")]),e._v(" 설치")]),e._v(" "),_("p",[_("code",[e._v("sudo pacman -S gnupg")])]),e._v(" "),_("p",[_("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GnuPG",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.archlinux.org/index.php/GnuPG"),_("OutboundLink")],1)]),e._v(" "),_("blockquote",[_("p",[e._v("명령어 확인: "),_("code",[e._v("gpg -h")])])]),e._v(" "),_("h2",{attrs:{id:"생성"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#생성"}},[e._v("#")]),e._v(" 생성")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("gpg --full-generate-key")])]),e._v(" "),_("li",[e._v("알고리즘 "),_("code",[e._v("RSA and RSA (default)")]),e._v(" 선택")]),e._v(" "),_("li",[e._v("키 사이즈 "),_("code",[e._v("2048bit")]),e._v(" 이상")]),e._v(" "),_("li",[e._v("유효기간 2년 이하")]),e._v(" "),_("li",[e._v("이름, 이메일, 코멘트 설정")])]),e._v(" "),_("h2",{attrs:{id:"권한"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#권한"}},[e._v("#")]),e._v(" 권한")]),e._v(" "),_("ul",[_("li",[e._v("디렉토리("),_("code",[e._v("~/.gnupg")]),e._v("): 700")]),e._v(" "),_("li",[e._v("파일: 600")])]),e._v(" "),_("h2",{attrs:{id:"키-목록"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#키-목록"}},[e._v("#")]),e._v(" 키 목록")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("공개키 목록: "),_("code",[e._v("gpg -k")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("pub")]),e._v(": 공개키")]),e._v(" "),_("li",[_("code",[e._v("uid")]),e._v(": user id")]),e._v(" "),_("li",[_("code",[e._v("sub")]),e._v(": sub key")]),e._v(" "),_("li",[_("code",[e._v("[SC]")]),e._v(": for Signing & Certificate")]),e._v(" "),_("li",[_("code",[e._v("[E]")]),e._v(": for Encryption")]),e._v(" "),_("li",[_("code",[e._v("[expires: yyyy-mm-dd]")]),e._v(": 만료일")]),e._v(" "),_("li",[_("code",[e._v("trust values")]),e._v(": ultimate, full, marginal, never, undefined, expired, unknown")])])]),e._v(" "),_("li",[_("p",[e._v("비밀키 목록: "),_("code",[e._v("gpg -K")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("sec")]),e._v(": 비밀키")]),e._v(" "),_("li",[_("code",[e._v("ssb")]),e._v(": secret sub key")])])])]),e._v(" "),_("h2",{attrs:{id:"키-관리"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#키-관리"}},[e._v("#")]),e._v(" 키 관리")]),e._v(" "),_("ul",[_("li",[e._v("public key 내보내기: "),_("code",[e._v("gpg --armor --export <key-id|uid>")])]),e._v(" "),_("li",[e._v("secret key 내보내기: "),_("code",[e._v("gpg --armor --export-secret-keys <key-id|uid>")])]),e._v(" "),_("li",[e._v("secret key 정보 변경: "),_("code",[e._v("gpg --edit-key <key-id|uid>")]),e._v(" (help 명령어로 작업확인)")]),e._v(" "),_("li",[e._v("key 불러오기: "),_("code",[e._v("gpg --import <key-file>")])]),e._v(" "),_("li",[e._v("secret key 삭제: "),_("code",[e._v("gpg --delete-secret-key <key-id|uid>")])]),e._v(" "),_("li",[e._v("public key 삭제: "),_("code",[e._v("gpg --delete-key <key-id|uid>")])])])])}),[],!1,null,null,null);v.default=i.exports}}]);