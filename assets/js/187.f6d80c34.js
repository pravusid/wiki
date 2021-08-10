(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{547:function(e,r,t){"use strict";t.r(r);var _=t(27),o=Object(_.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"대한민국-공인인증서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#대한민국-공인인증서"}},[e._v("#")]),e._v(" 대한민국 공인인증서")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://ko.wikipedia.org/wiki/%EA%B3%B5%EB%8F%99%EC%9D%B8%EC%A6%9D%EC%84%9C",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ko.wikipedia.org/wiki/공동인증서"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("공동인증서로 이름이 바뀌었고 5개의 발급기관이 있다")]),e._v(" "),t("p",[e._v("그 중 은행에서 발급하는 인증서는 금융결제원(yesssign), 증권사에서 발급하는 인증서는 코스콤(signkorea)이 기본이다.")]),e._v(" "),t("h2",{attrs:{id:"기술규격"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기술규격"}},[e._v("#")]),e._v(" 기술규격")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/Security/public-key-infrastructure.html"}},[e._v("인증서 관련 전체적인 개념은 다음을 참고")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.rootca.or.kr/kor/standard/standard01A.jsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.rootca.or.kr/kor/standard/standard01A.jsp"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("발급받은 공인인증서는 인증서("),t("code",[e._v(".cer")]),e._v(")와 개인키("),t("code",[e._v(".key")]),e._v(")로 구성되어 있다")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("공인인증서는")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/X.509#Structure_of_a_certificate",target:"_blank",rel:"noopener noreferrer"}},[e._v("X.509 V3 규격"),t("OutboundLink")],1),e._v("을 따르고 있다")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.rootca.or.kr/kcac/down/TechSpec/1.1-KCAC.TS.CERTPROF.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("전자서명 인증서 프로파일 규격"),t("OutboundLink")],1),e._v("에서 인증서 구조를 확인할 수 있다")])])]),e._v(" "),t("li",[t("p",[e._v("개인키는")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc2898",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCS#5"),t("OutboundLink")],1),e._v(" 및 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/PKCS_8",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCS#8"),t("OutboundLink")],1),e._v(" 형식을 사용하며")]),e._v(" "),t("li",[e._v("PKCS#8 개인키를 ASN.1 구조로 파싱하면 "),t("a",{attrs:{href:"https://github.com/bcgit/bc-java/blob/master/core/src/main/java/org/bouncycastle/asn1/pkcs/EncryptedPrivateKeyInfo.java#L20",target:"_blank",rel:"noopener noreferrer"}},[e._v("sequence[0]은 암호화 알고리즘, sequence[1]은 암호화된 개인키 정보이다"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.rootca.or.kr/kcac/down/TechSpec/2.3-KCAC.TS.ENC.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("암호 알고리즘 규격"),t("OutboundLink")],1),e._v("을 확인할 수 있다")]),e._v(" "),t("li",[e._v("주요 알고리즘은 "),t("a",{attrs:{href:"https://seed.kisa.or.kr/kisa/algorithm/EgovSeedInfo.do",target:"_blank",rel:"noopener noreferrer"}},[e._v("SEED (OID: "),t("code",[e._v("1.2.410.200004.1.4")]),e._v(", "),t("code",[e._v("1.2.410.200004.1.15")]),e._v(")"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://datatracker.ietf.org/doc/html/rfc8018#section-6.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("PKCS#5 PBES2 (OID: "),t("code",[e._v("1.2.840.113549.1.5.13")]),e._v(")"),t("OutboundLink")],1),e._v(" 이다")])])])]),e._v(" "),t("h3",{attrs:{id:"공인인증서-certificate-revocation-list-인증서-폐기-목록-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#공인인증서-certificate-revocation-list-인증서-폐기-목록-확인"}},[e._v("#")]),e._v(" 공인인증서 Certificate Revocation List (인증서 폐기 목록) 확인")]),e._v(" "),t("blockquote",[t("p",[e._v("전자서명 인증서 프로파일 규격 6.2.12, 세부 규격은 "),t("a",{attrs:{href:"https://www.rootca.or.kr/kcac/down/TechSpec/1.2-KCAC.TS.CRLPROF.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.rootca.or.kr/kcac/down/TechSpec/1.2-KCAC.TS.CRLPROF.pdf"),t("OutboundLink")],1),e._v(" 참고")])]),e._v(" "),t("h3",{attrs:{id:"식별번호를-이용한-본인확인-기술규격"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#식별번호를-이용한-본인확인-기술규격"}},[e._v("#")]),e._v(" 식별번호를 이용한 본인확인 기술규격")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://www.rootca.or.kr/kcac/down/TechSpec/1.5-KCAC.TS.SIVID.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.rootca.or.kr/kcac/down/TechSpec/1.5-KCAC.TS.SIVID.pdf"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("VID = h(h(IDN, R)")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("VID")]),e._v(": 가상식별번호")]),e._v(" "),t("li",[t("code",[e._v("h")]),e._v(": 해쉬함수")]),e._v(" "),t("li",[t("code",[e._v("IDN")]),e._v(": 개인식별정보 (주민번호, 사업자등록번호)")]),e._v(" "),t("li",[t("code",[e._v("R")]),e._v(": 가입자를 식별할 수 있는 난수(RandomNum) (OID: "),t("code",[e._v("1.2.410.200004.10.1.1.3")]),e._v(")")])]),e._v(" "),t("p",[e._v("가상 식별번호는 위와 같은 방식으로 클라이언트에서 생성되며\n공인인증기관 공개키로 "),t("code",[e._v("VID")]),e._v(" 및 "),t("code",[e._v("R")]),e._v(" 값을 암호화하여 보내서 생성된 "),t("code",[e._v("VID")]),e._v(" 값을 재검증하고 문제가 없으면 공인인증서가 발급된다")]),e._v(" "),t("p",[e._v("식별번호는 공인인증서를 사용하는 기관에서도 요구할 수 있는데 해당 내용은 기술규격 부록 B에 기재되어 있다")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("(A) 유저")]),e._v(" "),t("ul",[t("li",[e._v("(A-1) 유저는 "),t("code",[e._v("IDN")]),e._v("과 "),t("code",[e._v("R")]),e._v("을 사용기관에 전달하며 이때 두 값은 안전한 방법으로 전달해야 한다")]),e._v(" "),t("li",[e._v("(A-2) A-1 단계의 "),t("code",[e._v("IDN")]),e._v(" 값이 포함되어 있는 공인인증서를 사용기관에 전달한다")])])]),e._v(" "),t("li",[t("p",[e._v("(B) 사용기관")]),e._v(" "),t("ul",[t("li",[e._v("(B-1) A-2 단계에서 유저로 부터 전달받은 공인인증서에서 "),t("code",[e._v("VID")]),e._v(" 값과 해쉬 알고리즘("),t("code",[e._v("h")]),e._v(")을 추출한다")]),e._v(" "),t("li",[e._v("(B-2) A-1 단계에서 유저로 부터 전달받은 "),t("code",[e._v("IDN")]),e._v("과 "),t("code",[e._v("R")]),e._v("값과 B-1 단계에서 구한 해쉬 알고리즘("),t("code",[e._v("h")]),e._v(")을 사용하여 "),t("code",[e._v("VID*")]),e._v(" 값을 구한다")]),e._v(" "),t("li",[e._v("(B-3) B-1 단계의 "),t("code",[e._v("VID")]),e._v(" 값과 B-2 단계의 "),t("code",[e._v("VID*")]),e._v(" 값을 비교한다")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("상황에 따라 "),t("code",[e._v("IDN")]),e._v(", "),t("code",[e._v("R")]),e._v(" 값 중 하나 혹은 전부를 전달하지 않을 수도 있다 (사용기관에서 이미 식별번호를 가지고 있거나 두 값의 해쉬값만 전달)")])]),e._v(" "),t("h2",{attrs:{id:"공인인증서-활용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#공인인증서-활용"}},[e._v("#")]),e._v(" 공인인증서 활용")]),e._v(" "),t("h3",{attrs:{id:"국세청-홈택스-로그인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#국세청-홈택스-로그인"}},[e._v("#")]),e._v(" 국세청 홈택스 로그인")]),e._v(" "),t("p",[e._v("로그인에 필요한 데이터는 다음과 같다")]),e._v(" "),t("ul",[t("li",[e._v("공인인증서 일련번호")]),e._v(" "),t("li",[e._v("공인인증서 공개키를 PEM 인코딩 한 값")]),e._v(" "),t("li",[e._v("홈택스로부터 전자서명 요청받은 값 (pkcEncSsn)")]),e._v(" "),t("li",[e._v("개인키로 전자서명한 값 (signed pkcEncSsn)")]),e._v(" "),t("li",[e._v("개인키의 RandomNum")])])])}),[],!1,null,null,null);r.default=o.exports}}]);