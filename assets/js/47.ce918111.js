(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{409:function(t,s,e){"use strict";e.r(s);var a=e(27),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-credential"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-credential"}},[t._v("#")]),t._v(" Git Credential")]),t._v(" "),e("h2",{attrs:{id:"유형"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#유형"}},[t._v("#")]),t._v(" 유형")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("HTTP 프로토콜을 사용하는 경우 매번 인증정보를 입력해야 하지만, Git은 인증정보를 저장해둘 수 있다.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("아무런 설정도 하지 않으면 어떤 암호도 저장하지 않는다")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("cache")]),t._v(" 모드")]),t._v(" "),e("ul",[e("li",[t._v("일정 시간 동안 메모리에 사용자이름과 암호 같은 인증정보를 기억한다")]),t._v(" "),e("li",[t._v("이 정보를 Disk에 저장하지는 않으며 메모리에서도 15분 까지만 유지한다")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("store")]),t._v(" 모드")]),t._v(" "),e("ul",[e("li",[t._v("인증정보를 Disk의 텍스트 파일로 저장하며 계속 유지한다")]),t._v(" "),e("li",[t._v("인증정보가 사용자 홈 디렉토리 아래에 일반 텍스트 파일로 저장된다")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("osxkeychain")]),t._v(" 모드")]),t._v(" "),e("ul",[e("li",[t._v("Mac을 사용하는 경우 Mac에서 제공하는 Keychain 시스템에 사용자이름과 암호를 현재 로그인 계정 저장한다")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Git Credential Manager for Windows")])]),t._v(" "),e("ul",[e("li",[t._v("Windows 환경의 인증 Helper이다")]),t._v(" "),e("li",[e("code",[t._v("osxkeychain")]),t._v("과 비슷하게 Windows Credential Store를 사용하여 안전하게 인증정보를 저장한다")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Microsoft/Git-Credential-Manager-for-Windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Microsoft/Git-Credential-Manager-for-Windows"),e("OutboundLink")],1)])])])]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[e("code",[t._v("git config --global credential.helper <MODE>")])]),t._v(" "),e("p",[e("code",[t._v("git config --global credential.helper 'store --file ~/.my-credentials'")])]),t._v(" "),e("p",[t._v("Helper를 여러개 사용할 수도 있다.\n인증시에는 Helper를 순차적으로 사용하며, 저장할 때는 모든 Helper에 저장한다.")]),t._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[credential]\n    helper = store --file /mnt/thumbdrive/.git-credentials\n    helper = cache --timeout 30000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"git-askpass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-askpass"}},[t._v("#")]),t._v(" GIT_ASKPASS")]),t._v(" "),e("p",[t._v("git askpass 환경변수를 사용해서 git 명령어 호출시 비밀번호 입력을 생략할 수 있다.")]),t._v(" "),e("blockquote",[e("p",[t._v("되도록 운영체제의 키체인을 사용해서 암호화 저장해야 한다")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo $GIT_TOKEN'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.git-askpass\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.git-askpass\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_TOKEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_ASKPASS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.git-askpass\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://token@github.com/project.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);