(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{517:function(e,s,t){"use strict";t.r(s);var r=t(28),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"리눅스-환경변수-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#리눅스-환경변수-shell"}},[e._v("#")]),e._v(" 리눅스 환경변수 & SHELL")]),e._v(" "),t("p",[t("code",[e._v("env")]),e._v(" 명령어로 출력 및 관리 할 수 있다")]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" references")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://unix.stackexchange.com/questions/71253/what-should-shouldnt-go-in-zshenv-zshrc-zlogin-zprofile-zlogout",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://unix.stackexchange.com/questions/71253/what-should-shouldnt-go-in-zshenv-zshrc-zlogin-zprofile-zlogout"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://superuser.com/questions/187639/zsh-not-hitting-profile",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://superuser.com/questions/187639/zsh-not-hitting-profile"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"계층"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#계층"}},[e._v("#")]),e._v(" 계층")]),e._v(" "),t("h3",{attrs:{id:"single-user-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-user-mode"}},[e._v("#")]),e._v(" Single user mode")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/etc/environment")])])]),e._v(" "),t("h3",{attrs:{id:"multi-user-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-user-mode"}},[e._v("#")]),e._v(" Multi user mode")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("login shell")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/etc/profile")])]),e._v(" "),t("li",[t("code",[e._v("~/.bash_profile")]),e._v(": bash쉘을 통해 사용자의 로그인 세션이 열릴때 호출된다")]),e._v(" "),t("li",[t("code",[e._v("~/.profile")]),e._v(": 사용자의 로그인 세션이 열릴 때 호출된다")])])]),e._v(" "),t("li",[t("p",[e._v("non login shell")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/etc/bash.bashrc")])]),e._v(" "),t("li",[t("code",[e._v("~/.bashrc")]),e._v(": 사용자에게만 적용되고, 리눅스 기본 쉘인 bash 쉘 세션이 생성될 때마다 로드된다")]),e._v(" "),t("li",[t("code",[e._v("~/.zshrc")]),e._v(": 사용자에게만 적용되고, zsh쉘 세션이 생성될 때 마다 로드된다")]),e._v(" "),t("li",[e._v("세션 환경변수는 현재 쉘에서 지정된 값으로 "),t("code",[e._v("set/unset 변수=값")]),e._v("을 활용해서 지정/해제한다")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("rc는 'run commands'의 약자이다")])]),e._v(" "),t("h2",{attrs:{id:"참고사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#참고사항"}},[e._v("#")]),e._v(" 참고사항")]),e._v(" "),t("h3",{attrs:{id:"login-shell-non-login-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#login-shell-non-login-shell"}},[e._v("#")]),e._v(" login shell / non login shell")]),e._v(" "),t("p",[t("code",[e._v("~/.profile")]),e._v(" 파일은 login shell에 의해 로드된다. login shell은 text mode에서 로그인 하면 수행되는 최초 과정이다.\n대부분의 리눅스에서는 기본 login shell은 "),t("code",[e._v("bash")]),e._v("이고 이는 "),t("code",[e._v("/etc/passwd")]),e._v("에서 확인할 수 있다.")]),e._v(" "),t("p",[e._v("login shell에서 "),t("code",[e._v("bash")]),e._v("는 "),t("code",[e._v("~/.bash_profile")]),e._v(" 파일과 "),t("code",[e._v("~/.profile")]),e._v(" 파일이 존재하면 읽는다.\n반면, "),t("code",[e._v("zsh")]),e._v("는 "),t("code",[e._v("~/.zprofile")]),e._v(" 파일만 읽는다. (이는 zsh 문법이 기본 bourne shell 계통과 완전한 호환성을 보장하지 않기 때문이다)")]),e._v(" "),t("p",[t("code",[e._v("/bin/sh")]),e._v("을 login shell로 하고 "),t("code",[e._v("~/.profile")]),e._v("에 "),t("code",[e._v("export SHELL=/bin/zsh")]),e._v(" 코드를 포함한다면,\n터미널을 열었을 때 터미널은 "),t("code",[e._v("zsh")]),e._v("를 실행할 것이다. (일부 터미널은 "),t("code",[e._v("$SHELL")]),e._v("을 따르지 않는다)")]),e._v(" "),t("blockquote",[t("p",[e._v("이 경우 여전히 login shell은 "),t("code",[e._v("sh")]),e._v(" 이다.")])]),e._v(" "),t("p",[e._v("대부분의 설정에서 "),t("code",[e._v("~/.profile")]),e._v(" 파일은 그래픽 디스플레이 매니저로 로그인 할 때 "),t("strong",[e._v("X session startup scripts")]),e._v("에 의해서 로드된다.")]),e._v(" "),t("h3",{attrs:{id:"terminal-emulator-gnome-terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminal-emulator-gnome-terminal"}},[e._v("#")]),e._v(" terminal emulator (gnome terminal...)")]),e._v(" "),t("p",[e._v("터미널 에뮬레이터를 시작한 뒤 shell prompt를 얻거나("),t("code",[e._v("bash")]),e._v(") shell script를 실행하면("),t("code",[e._v("bash foo.bash")]),e._v("), 해당 shell은 "),t("strong",[e._v("non login shell")]),e._v("이다.")]),e._v(" "),t("p",[t("code",[e._v("~/.profile")]),e._v(" (또는 "),t("code",[e._v("~/.zprofile")]),e._v(") 파일은 로그인 했을 때 실행하는 명령들 이므로 non-login shell에서는 해당 파일을 읽지 않는다.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("zsh")]),e._v("는 login shell이든 non-login shell이든 관계없이 모든 대화형 shell에서 "),t("code",[e._v("~/.zshrc")]),e._v(" 파일을 읽는다")]),e._v(" "),t("li",[t("code",[e._v("bash")]),e._v("는 login shell에서, "),t("code",[e._v("~/.bashrc")]),e._v(" 파일을 읽지 않는다")])]),e._v(" "),t("p",[e._v("일반적으로 "),t("code",[e._v("~/.profile")]),e._v(" 파일은 환경변수 정의를 담고있으므로, 로그인 시 혹은 전체 세션동안 한번만 실행하려는 프로그램일 것이다.")]),e._v(" "),t("p",[t("code",[e._v("~/.zshrc")]),e._v(" 파일은 모든 대화형 shell instance에서 실행되어야 하는 것을 포함해야 한다.\n예를 들면, alias, 함수 정의, shell 옵선 설정, 자동완성 설정, 프롬프트 설정 키 바인딩 등의 설정이다.")]),e._v(" "),t("h3",{attrs:{id:"zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[e._v("#")]),e._v(" zsh")]),e._v(" "),t("p",[e._v("다음은 "),t("code",[e._v("zsh")]),e._v("와 관련한 환경변수 파일이다")]),e._v(" "),t("h4",{attrs:{id:"zshenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zshenv"}},[e._v("#")]),e._v(" "),t("code",[e._v(".zshenv")])]),e._v(" "),t("blockquote",[t("p",[e._v("shell 실행시 항상 읽음")])]),e._v(" "),t("ul",[t("li",[e._v("변경가능성이 있는 (혹은 자주 변하는) 환경변수에 적합")]),e._v(" "),t("li",[t("em",[e._v("PATH")]),e._v("를 포함하는 것도 적합하다\n"),t("ul",[t("li",[e._v("경로가 변경될 때마다 업데이트를 위해 전체 세션을 재시작하는 것은 불편하기 때문이다")]),e._v(" "),t("li",[e._v("새로운 shell 인스턴스를 실행하면 (i.e. 터미널 에뮬레이터 재실행) 변경한 설정이 적용된다")])])])]),e._v(" "),t("p",[e._v("이 파일은 단일 명령어 실행(command string option == "),t("code",[e._v("zsh -c")]),e._v(")에도 적용된다는 사실을 잊으면 안된다. (대화형 쉘이 아닌 경우 포함)\n즉, 이 파일에 선언된 설정이나 alias등이 명령어에 영향을 줄 수 있고, 이를 염두에 두고 "),t("code",[e._v(".zshenv")]),e._v(" 설정이나 단일 명령어 실행을 사용해야 한다.")]),e._v(" "),t("h4",{attrs:{id:"zprofile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zprofile"}},[e._v("#")]),e._v(" "),t("code",[e._v(".zprofile")])]),e._v(" "),t("blockquote",[t("p",[e._v("로그인 시 읽음")])]),e._v(" "),t("ul",[t("li",[e._v("툴과 관련한 환경변수")]),e._v(" "),t("li",[e._v("명령어 실행과 관련한 환경설정")])]),e._v(" "),t("p",[e._v("이 파일을 수정하면 새로운 login shell을 실행하여 변경한 설정이 적용된 shell을 사용할 수 있다: "),t("code",[e._v("exec zsh --login")])]),e._v(" "),t("h4",{attrs:{id:"zshrc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zshrc"}},[e._v("#")]),e._v(" "),t("code",[e._v(".zshrc")])]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("대화형")]),e._v(" shell 실행시 항상 읽음")])]),e._v(" "),t("p",[e._v("대화형 쉘에서 사용할 내용을 입력하는 것이 좋음")]),e._v(" "),t("ul",[t("li",[e._v("prompt")]),e._v(" "),t("li",[e._v("output coloring")]),e._v(" "),t("li",[e._v("aliases")]),e._v(" "),t("li",[e._v("key bindings")]),e._v(" "),t("li",[e._v("command completion/suggestion/highlighting")]),e._v(" "),t("li",[e._v("commands history management")]),e._v(" "),t("li",[e._v("miscellaneous...")])]),e._v(" "),t("h4",{attrs:{id:"zlogin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlogin"}},[e._v("#")]),e._v(" "),t("code",[e._v(".zlogin")])]),e._v(" "),t("blockquote",[t("p",[e._v("로그인 시 읽음")])]),e._v(" "),t("p",[t("code",[e._v(".zprofile")]),e._v(" 파일과 유사하나 "),t("code",[e._v(".zshrc")]),e._v(" 파일 이후 읽는다.")]),e._v(" "),t("h4",{attrs:{id:"zlogout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlogout"}},[e._v("#")]),e._v(" "),t("code",[e._v(".zlogout")])]),e._v(" "),t("blockquote",[t("p",[e._v("로그인 쉘에서 로그아웃 시 읽음")])]),e._v(" "),t("h2",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" "),t("code",[e._v("$PATH")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://stackoverflow.com/questions/25235357/path-at-end-or-beginning-of-path-export-in-bash-profile-for-git-on-mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/questions/25235357/path-at-end-or-beginning-of-path-export-in-bash-profile-for-git-on-mac"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("PATH")]),e._v(" 추가시 두 가지 선택을 할 수 있다")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('PATH="/custom/path:$PATH"')])]),e._v(" "),t("li",[t("code",[e._v('PATH="$PATH:/custom/path"')])])]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("PATH")]),e._v("는 순서대로 참조된다 (선두에 우선순위가 있음)")])]),e._v(" "),t("h2",{attrs:{id:"예시-profile-환경변수-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#예시-profile-환경변수-설정"}},[e._v("#")]),e._v(" 예시: "),t("code",[e._v("~/.profile")]),e._v(" 환경변수 설정")]),e._v(" "),t("p",[e._v("zsh를 사용중이면 "),t("code",[e._v(".zshenv")]),e._v(" 파일에 환경변수를 설정해도 됨")]),e._v(" "),t("p",[t("code",[e._v("export")]),e._v("를 붙이면 shell variable이 아니라 "),t("strong",[e._v("environment variable")]),e._v("로 사용하겠다는 의미")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$APP_HOME")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$APP_HOME")]),e._v('/bin"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("APP_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/APP경로"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"xdg-base-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xdg-base-directory"}},[e._v("#")]),e._v(" XDG Base Directory")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wiki.archlinux.org/title/XDG_Base_Directory",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.archlinux.org/title/XDG_Base_Directory"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"xdg-base-directory-기본경로"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xdg-base-directory-기본경로"}},[e._v("#")]),e._v(" XDG Base Directory 기본경로")]),e._v(" "),t("ul",[t("li",[e._v("There is a single base directory relative to which user-specific data files should be written.\n"),t("ul",[t("li",[e._v("This directory is defined by the environment variable "),t("code",[e._v("$XDG_DATA_HOME")])])])]),e._v(" "),t("li",[e._v("There is a single base directory relative to which user-specific configuration files should be written.\n"),t("ul",[t("li",[e._v("This directory is defined by the environment variable "),t("code",[e._v("$XDG_CONFIG_HOME")])])])]),e._v(" "),t("li",[e._v("There is a single base directory relative to which user-specific state data should be written.\n"),t("ul",[t("li",[e._v("This directory is defined by the environment variable "),t("code",[e._v("$XDG_STATE_HOME")])])])]),e._v(" "),t("li",[e._v("There is a set of preference ordered base directories relative to which data files should be searched.\n"),t("ul",[t("li",[e._v("This set of directories is defined by the environment variable "),t("code",[e._v("$XDG_DATA_DIRS")])])])]),e._v(" "),t("li",[e._v("There is a set of preference ordered base directories relative to which configuration files should be searched.\n"),t("ul",[t("li",[e._v("This set of directories is defined by the environment variable "),t("code",[e._v("$XDG_CONFIG_DIRS")])])])]),e._v(" "),t("li",[e._v("There is a single base directory relative to which user-specific non-essential (cached) data should be written.\n"),t("ul",[t("li",[e._v("This directory is defined by the environment variable "),t("code",[e._v("$XDG_CACHE_HOME")])])])]),e._v(" "),t("li",[e._v("There is a single base directory relative to which user-specific runtime files and other file objects should be placed.\n"),t("ul",[t("li",[e._v("This directory is defined by the environment variable "),t("code",[e._v("$XDG_RUNTIME_DIR")])])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);