(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{362:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bash-shell-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash-shell-script"}},[s._v("#")]),s._v(" Bash Shell Script")]),s._v(" "),t("h2",{attrs:{id:"환경변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#환경변수"}},[s._v("#")]),s._v(" 환경변수")]),s._v(" "),t("ul",[t("li",[s._v("HOME: 현재 사용자의 홈디렉토리")]),s._v(" "),t("li",[s._v("USER: 현재 사용자의 이름")]),s._v(" "),t("li",[s._v("HOSTNAME: 호스트 이름")]),s._v(" "),t("li",[s._v("PATH: 시스템 PATH")]),s._v(" "),t("li",[s._v("PWD: 사용자의 현재 작업 디렉토리")]),s._v(" "),t("li",[s._v("...")])]),s._v(" "),t("h2",{attrs:{id:"변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변수"}},[s._v("#")]),s._v(" 변수")]),s._v(" "),t("ul",[t("li",[s._v("변수를 선언하지 않으며, 처음 변수에 값이 할당되면 생성된다")]),s._v(" "),t("li",[s._v("변수값의 타입은 모두 문자열(string)이다")]),s._v(" "),t("li",[s._v("변수이름은 대소문자를 구분한다")]),s._v(" "),t("li",[s._v("변수 할당시 "),t("code",[s._v("=")]),s._v(" 좌우 공백이 없어야 한다")]),s._v(" "),t("li",[s._v("변수를 큰따옴표로 묶어도 되고 묶지 않아도 되지만, 공백이 있다면 묶어야 함")]),s._v(" "),t("li",[t("code",[s._v("$")]),s._v(" 문자를 사용하기 위해서는 작은따옴표로 묶거나 escape("),t("code",[s._v("\\")]),s._v(")문자로 사용해야 함")]),s._v(" "),t("li",[s._v("즉, 작은따옴표 내부는 모두 문자로 처리한다")]),s._v(" "),t("li",[s._v("큰 따옴표 안에서 사용되는 다음 세 문자는 무시하지 않는다.\n"),t("ul",[t("li",[s._v("dollar (변수실행)")]),s._v(" "),t("li",[s._v("backtick (명령실행)")]),s._v(" "),t("li",[s._v("reverse-slash (escape)")])])])]),s._v(" "),t("h3",{attrs:{id:"변수-내-숫자연산"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#변수-내-숫자연산"}},[s._v("#")]),s._v(" 변수 내 숫자연산")]),s._v(" "),t("ul",[t("li",[s._v("변수 내부에서 숫자와 연산기호를 사용하려면 "),t("code",[s._v("expr")]),s._v(" 키워드와 backtick(`)을 사용한다")]),s._v(" "),t("li",[s._v("괄호 및 곱하기(*) 기호도 escape("),t("code",[s._v("\\")]),s._v(")문자로 사용해야함")])]),s._v(" "),t("h3",{attrs:{id:"파라미터-변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파라미터-변수"}},[s._v("#")]),s._v(" 파라미터 변수")]),s._v(" "),t("p",[s._v("해당 스크립트 명령을 다음과 같이 실행했다면: "),t("code",[s._v("<명령> param1 param2 parm3")])]),s._v(" "),t("p",[s._v("파라미터 변수가 기본적으로 할당된다")]),s._v(" "),t("ul",[t("li",[s._v('$*="param1 param2 parm3"')]),s._v(" "),t("li",[s._v("$0=명령")]),s._v(" "),t("li",[s._v("$1=param1")]),s._v(" "),t("li",[s._v("$2=param2")]),s._v(" "),t("li",[s._v("$3=param3")])]),s._v(" "),t("h3",{attrs:{id:"export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[s._v("#")]),s._v(" export")]),s._v(" "),t("p",[s._v("외부 변수로 선언함 (현재 쉘 세션이 남아있는 동안 유효)")]),s._v(" "),t("h2",{attrs:{id:"제어문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#제어문"}},[s._v("#")]),s._v(" 제어문")]),s._v(" "),t("h3",{attrs:{id:"if문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if문"}},[s._v("#")]),s._v(" if문")]),s._v(" "),t("p",[t("code",[s._v("[ 조건 ]")]),s._v("의 각 단어 사이는 모두 공백이 있어야 한다")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 조건1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  조건1이 참인 경우 실행\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 조건2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  조건2가 참인 경우 실행\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  이외의 경우 실행\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"case문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#case문"}},[s._v("#")]),s._v(" case문")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("변수"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n  조건1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    조건1의 경우 실행"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  조건2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 조건3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    조건2 또는 조건3의 경우 실행"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    앞에 n 또는 N이 들어간 경우 실행"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  조건4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    조건4의 경우 무엇인가 실행하고 추가 실행\n    마지막으로 실행"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  *"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    이외의 경우 실행"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"조건문-상의-비교연산자"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#조건문-상의-비교연산자"}},[s._v("#")]),s._v(" 조건문 상의 비교연산자")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("문자열 비교")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('"A" = "A"')]),s._v(": 같은경우")]),s._v(" "),t("li",[t("code",[s._v('"A" != "B"')]),s._v(": 다른경우")]),s._v(" "),t("li",[t("code",[s._v('-n "str"')]),s._v(": NULL이 아닌경우")]),s._v(" "),t("li",[t("code",[s._v('-z "str"')]),s._v(": NULL인 경우")])])]),s._v(" "),t("li",[t("p",[s._v("산술 비교 ("),t("code",[s._v("수식1 <산술연산자> 수식2")]),s._v(")")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-eq")]),s._v(": 같은경우")]),s._v(" "),t("li",[t("code",[s._v("-ne")]),s._v(": 다른경우")]),s._v(" "),t("li",[t("code",[s._v("-gt")]),s._v(": 수식1이 큰경우")]),s._v(" "),t("li",[t("code",[s._v("-ge")]),s._v(": 수식1이 크거나 같은경우")]),s._v(" "),t("li",[t("code",[s._v("-lt")]),s._v(": 수식1이 작은경우")]),s._v(" "),t("li",[t("code",[s._v("-le")]),s._v(": 수식1이 작거나 같은경우")])])]),s._v(" "),t("li",[t("p",[s._v("파일 처리 ("),t("code",[s._v("연산자 <파일이름>")]),s._v(")")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-d")]),s._v(": 파일이 디렉토리")]),s._v(" "),t("li",[t("code",[s._v("-e")]),s._v(": 파일이 존재")]),s._v(" "),t("li",[t("code",[s._v("-f")]),s._v(": 일반 파일인 경우")]),s._v(" "),t("li",[t("code",[s._v("-u")]),s._v(": set-user-id가 설정된 경우")]),s._v(" "),t("li",[t("code",[s._v("-g")]),s._v(": set-group-id가 설정된 경우")]),s._v(" "),t("li",[t("code",[s._v("-s")]),s._v(": 파일 크기가 0이 아닌 경우")]),s._v(" "),t("li",[t("code",[s._v("-r")]),s._v(": 파일 읽기 가능")]),s._v(" "),t("li",[t("code",[s._v("-w")]),s._v(": 파일 쓰기 가능")]),s._v(" "),t("li",[t("code",[s._v("-x")]),s._v(": 파일 실행 가능")])])])]),s._v(" "),t("h3",{attrs:{id:"조건문-상의-논리연산자"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#조건문-상의-논리연산자"}},[s._v("#")]),s._v(" 조건문 상의 논리연산자")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-a")]),s._v(" 또는 "),t("code",[s._v("&&")])]),s._v(" "),t("li",[t("code",[s._v("-o")]),s._v(" 또는 "),t("code",[s._v("||")])]),s._v(" "),t("li",[t("code",[s._v("!변수")]),s._v(": 변수가 거짓인경우")])]),s._v(" "),t("p",[t("code",[s._v("if [ 조건1 ] && [ 조건2 ]")])]),s._v(" "),t("p",[t("code",[s._v("-a")]),s._v("나 "),t("code",[s._v("-o")]),s._v("는 조건("),t("code",[s._v("[]")]),s._v(") 내부에서 사용할 수 있으나 각 조건을 괄호로 묶어야 함")]),s._v(" "),t("p",[t("code",[s._v("if [ \\( 조건1 \\) -a \\( 조건2 \\) ]")])]),s._v(" "),t("h2",{attrs:{id:"반복문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#반복문"}},[s._v("#")]),s._v(" 반복문")]),s._v(" "),t("h3",{attrs:{id:"for-in문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-in문"}},[s._v("#")]),s._v(" for-in문")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" 변수 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" 값1 값2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  반복할 명령\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"while문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#while문"}},[s._v("#")]),s._v(" while문")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 조건 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  반복할 명령\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"until문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#until문"}},[s._v("#")]),s._v(" until문")]),s._v(" "),t("p",[s._v("조건이 거짓인 동안 계속 반복한다")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 조건 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  반복할 명령\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"break-continue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#break-continue"}},[s._v("#")]),s._v(" break, continue")]),s._v(" "),t("ul",[t("li",[s._v("break: 반복문 종료")]),s._v(" "),t("li",[s._v("continue: 키워드 아래영역 실행 생략하고 반복문 조건검사로 돌아감")])]),s._v(" "),t("h2",{attrs:{id:"함수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#함수"}},[s._v("#")]),s._v(" 함수")]),s._v(" "),t("p",[s._v("함수를 선언하고 호출시 인자를 넘길 수 있다. 넘긴 인자는 함수내부에서 파라미터로 호출 가능하다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("함수명 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" $1 + $2"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n함수명 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"eval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eval"}},[s._v("#")]),s._v(" eval")]),s._v(" "),t("p",[s._v("문자열을 명령문으로 해석하여 실행함")]),s._v(" "),t("p",[t("code",[s._v('eval "ls -al"')])]),s._v(" "),t("h2",{attrs:{id:"subshell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subshell"}},[s._v("#")]),s._v(" subshell")]),s._v(" "),t("p",[t("code",[s._v("$(<script>)")]),s._v(" subshell로 괄호 내부에 스크립트를 작성해 결과값을 사용할 수 있음")]),s._v(" "),t("p",[t("code",[s._v("set $(...)")]),s._v("을 사용해서 결과값을 파라미터로 할당할 수 있음 (subshell의 결과를 공백 단위로 $1 부터 할당)")]),s._v(" "),t("h2",{attrs:{id:"shift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shift"}},[s._v("#")]),s._v(" shift")]),s._v(" "),t("p",[s._v("인자는 9개까지 사용가능(1~9, 0은 명령어) 하므로 10번째 인자부터는 shift를 통해서 모든 파라미터 변수를 한단계식 낮춰 사용해야 한다.")]),s._v(" "),t("h2",{attrs:{id:"예제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#예제"}},[s._v("#")]),s._v(" 예제")]),s._v(" "),t("h3",{attrs:{id:"process-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#process-id"}},[s._v("#")]),s._v(" process id")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROC_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pgrep -f $PROC_NAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PID")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);