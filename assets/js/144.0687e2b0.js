(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{344:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"partitioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[s._v("#")]),s._v(" Partitioning")]),s._v(" "),t("p",[s._v("개인 사용자용 리눅스(server 배포판이 아닌 desktop 배포판) 기준")]),s._v(" "),t("p",[s._v("서버 배포판의 경우에는 "),t("code",[s._v("/var")]),s._v(", "),t("code",[s._v("/tmp")]),s._v(" 등의 파티션을 고려해야 한다")]),s._v(" "),t("h2",{attrs:{id:"나누기를-권장하는-파티션"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#나누기를-권장하는-파티션"}},[s._v("#")]),s._v(" 나누기를 권장하는 파티션")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("swap")]),s._v(": 아래 참조")]),s._v(" "),t("li",[t("code",[s._v("/boot")]),s._v(": 250 MB")]),s._v(" "),t("li",[t("code",[s._v("/")]),s._v(": 최소 5 GB (보통 50 GB 정도를 할당하였음)")]),s._v(" "),t("li",[t("code",[s._v("/home")]),s._v(": 나머지 공간")])]),s._v(" "),t("h2",{attrs:{id:"swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swap"}},[s._v("#")]),s._v(" swap")]),s._v(" "),t("ul",[t("li",[s._v("4GB 이하 RAM: 최소 2GB의 스왑 공간")]),s._v(" "),t("li",[s._v("4GB에서 16GB RAM: 최소 4GB 스왑 공간")]),s._v(" "),t("li",[s._v("16GB에서 64GB RAM: 최소 8GB 스왑 공간")]),s._v(" "),t("li",[s._v("64GB에서 256GB RAM: 최소 16GB 스왑 공간")]),s._v(" "),t("li",[s._v("256GB에서 512GB RAM: 최소 32GB 스왑 공간")])]),s._v(" "),t("h3",{attrs:{id:"스왑-파일-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스왑-파일-생성"}},[s._v("#")]),s._v(" 스왑 파일 생성")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# dd 명령을 사용하여 루트 파일 시스템에 스왑 파일생성. "bs"는 블록 크기이고 "count"는 블록 수')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/zero "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/swapfile "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1G "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 스왑 파일의 읽기 및 쓰기 권한을 업데이트")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" /swapfile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Linux 스왑 영역을 설정")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkswap")]),s._v(" /swapfile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 스왑 공간에 스왑 파일을 추가하여 스왑 파일을 즉시 사용할 수 있도록 함")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" /swapfile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 프로시저가 성공적인지 확인")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/fstab 파일을 편집하여 부팅 시 스왑 파일을 활성화")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/fstab\n/swapfile swap swap defaults "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);