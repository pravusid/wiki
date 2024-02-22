(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{582:function(e,s,t){"use strict";t.r(s);var a=t(28),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"gnupg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnupg"}},[e._v("#")]),e._v(" GnuPG")]),e._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[e._v("#")]),e._v(" 설치")]),e._v(" "),t("p",[t("code",[e._v("sudo pacman -S gnupg")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/GnuPG",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.archlinux.org/index.php/GnuPG"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("명령어 확인: "),t("code",[e._v("gpg -h")])])]),e._v(" "),t("h2",{attrs:{id:"생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#생성"}},[e._v("#")]),e._v(" 생성")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("gpg --full-generate-key")])]),e._v(" "),t("li",[e._v("알고리즘 "),t("code",[e._v("RSA and RSA (default)")]),e._v(" 선택")]),e._v(" "),t("li",[e._v("키 사이즈 "),t("code",[e._v("2048bit")]),e._v(" 이상")]),e._v(" "),t("li",[e._v("유효기간 2년 이하")]),e._v(" "),t("li",[e._v("이름, 이메일, 코멘트 설정")])]),e._v(" "),t("h2",{attrs:{id:"권한"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#권한"}},[e._v("#")]),e._v(" 권한")]),e._v(" "),t("ul",[t("li",[e._v("디렉토리("),t("code",[e._v("~/.gnupg")]),e._v("): 700")]),e._v(" "),t("li",[e._v("파일: 600")])]),e._v(" "),t("h2",{attrs:{id:"키-목록"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#키-목록"}},[e._v("#")]),e._v(" 키 목록")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("공개키 목록: "),t("code",[e._v("gpg -k")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pub")]),e._v(": 공개키")]),e._v(" "),t("li",[t("code",[e._v("uid")]),e._v(": user id")]),e._v(" "),t("li",[t("code",[e._v("sub")]),e._v(": sub key")]),e._v(" "),t("li",[t("code",[e._v("[SC]")]),e._v(": for Signing & Certificate")]),e._v(" "),t("li",[t("code",[e._v("[E]")]),e._v(": for Encryption")]),e._v(" "),t("li",[t("code",[e._v("[expires: yyyy-mm-dd]")]),e._v(": 만료일")]),e._v(" "),t("li",[t("code",[e._v("trust values")]),e._v(": ultimate, full, marginal, never, undefined, expired, unknown")])])]),e._v(" "),t("li",[t("p",[e._v("비밀키 목록: "),t("code",[e._v("gpg -K")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("sec")]),e._v(": 비밀키")]),e._v(" "),t("li",[t("code",[e._v("ssb")]),e._v(": secret sub key")])])])]),e._v(" "),t("h2",{attrs:{id:"키-관리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#키-관리"}},[e._v("#")]),e._v(" 키 관리")]),e._v(" "),t("ul",[t("li",[e._v("public|secret key 불러오기: "),t("code",[e._v("gpg --import <key-file>")])]),e._v(" "),t("li",[e._v("public key 내보내기: "),t("code",[e._v("gpg --armor --export <key-id|uid>")])]),e._v(" "),t("li",[e._v("secret key 내보내기: "),t("code",[e._v("gpg --armor --export-secret-keys <key-id|uid>")])]),e._v(" "),t("li",[e._v("public key 삭제: "),t("code",[e._v("gpg --delete-key <key-id|uid>")])]),e._v(" "),t("li",[e._v("secret key 삭제: "),t("code",[e._v("gpg --delete-secret-key <key-id|uid>")])])]),e._v(" "),t("h2",{attrs:{id:"키-정보-변경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#키-정보-변경"}},[e._v("#")]),e._v(" 키 정보 변경")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("gpg --edit-key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 도움말")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 비밀번호 변경")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("passwd")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" save\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h3",{attrs:{id:"키-갱신-유효기간-변경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#키-갱신-유효기간-변경"}},[e._v("#")]),e._v(" 키 갱신 (유효기간 변경)")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://unix.stackexchange.com/questions/552707/how-to-renew-an-expired-encryption-subkey-with-gpg",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://unix.stackexchange.com/questions/552707/how-to-renew-an-expired-encryption-subkey-with-gpg"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("gpg --edit-key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("uid"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 유효기간 변경")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" expire\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("유효기간"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" save\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# subkey 선택: 1~n, 0(선택해제), *(모두선택)")]),e._v("\ngpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("number"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("갱신 명령어 사용")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("gpg --quick-set-expire "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("period"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("subkeys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# key, subkey 일괄갱신")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# gpg --quick-set-expire <key-id> 2y && gpg --quick-set-expire <key-id> 2y "*"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h2",{attrs:{id:"관련-파일-확장자"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#관련-파일-확장자"}},[e._v("#")]),e._v(" 관련 파일 확장자")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://stackoverflow.com/questions/58929260/what-are-the-meaningful-differences-between-gpg-sig-asc",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/questions/58929260/what-are-the-meaningful-differences-between-gpg-sig-asc"),t("OutboundLink")],1)])]),e._v(" "),t("ul",[t("li",[t("code",[e._v(".gpg")]),e._v(": GNU Privacy Guard public keyring file, binary format")]),e._v(" "),t("li",[t("code",[e._v(".sig")]),e._v(": GPG signed document file, binary format")]),e._v(" "),t("li",[t("code",[e._v(".asc")]),e._v(": ASCII-armored signature with or without wrapped document, plain text format")])])])}),[],!1,null,null,null);s.default=r.exports}}]);