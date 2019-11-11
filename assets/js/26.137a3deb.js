(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{271:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"docker-명령어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-명령어"}},[t._v("#")]),t._v(" Docker 명령어")]),t._v(" "),r("p",[r("code",[t._v("docker version")]),t._v(": 버전 확인")]),t._v(" "),r("p",[r("code",[t._v("docker system info")]),t._v(": 실행 환경 확인")]),t._v(" "),r("p",[r("code",[t._v("docker system df")]),t._v(": 디스크 상태 확인")]),t._v(" "),r("h2",{attrs:{id:"docker-run"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-run"}},[t._v("#")]),t._v(" docker run")]),t._v(" "),r("p",[r("code",[t._v("docker run [OPTIONS] IMAGE[:TAG|@DIGEST][COMMAND] [ARG...]")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("옵션")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("-d")]),t._v(" "),r("td",[t._v("detached mode 흔히 말하는 백그라운드 모드")])]),t._v(" "),r("tr",[r("td",[t._v("-p")]),t._v(" "),r("td",[t._v("호스트와 컨테이너의 포트를 연결 (포워딩)")])]),t._v(" "),r("tr",[r("td",[t._v("-v")]),t._v(" "),r("td",[t._v("호스트와 컨테이너의 디렉토리를 연결 (마운트)")])]),t._v(" "),r("tr",[r("td",[t._v("-e")]),t._v(" "),r("td",[t._v("컨테이너 내에서 사용할 환경변수 설정")])]),t._v(" "),r("tr",[r("td",[t._v("–name")]),t._v(" "),r("td",[t._v("컨테이너 이름 설정")])]),t._v(" "),r("tr",[r("td",[t._v("–rm")]),t._v(" "),r("td",[t._v("프로세스 종료시 컨테이너 자동 제거")])]),t._v(" "),r("tr",[r("td",[t._v("-it")]),t._v(" "),r("td",[t._v("-i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션")])]),t._v(" "),r("tr",[r("td",[t._v("–link")]),t._v(" "),r("td",[t._v("컨테이너 연결 [컨테이너명:별칭]")])])])]),t._v(" "),r("h3",{attrs:{id:"bash-shell로-ubuntu-이미지-시작"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bash-shell로-ubuntu-이미지-시작"}},[t._v("#")]),t._v(" bash shell로 Ubuntu 이미지 시작")]),t._v(" "),r("p",[r("code",[t._v("docker run --rm -it ubuntu:16.04 /bin/bash")])]),t._v(" "),r("h3",{attrs:{id:"volume-v-옵션으로-데이터-볼륨-지정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#volume-v-옵션으로-데이터-볼륨-지정"}},[t._v("#")]),t._v(" --volume (-v) 옵션으로 데이터 볼륨 지정")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("docker run -d -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(":3306 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ALLOW_EMPTY_PASSWORD")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name mysql "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /my/own/dir:/var/lib/mysql "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/data:/var/lib/mysql "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("some-volume-name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":/var/lib/mysql "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  mysql:5.7\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br")])]),r("h2",{attrs:{id:"docker-ps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-ps"}},[t._v("#")]),t._v(" docker ps")]),t._v(" "),r("p",[t._v("실행중인 컨테이너 목록을 출력")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("옵션")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("-a(--all)")]),t._v(" "),r("td",[t._v("전체 목록 출력")])])])]),t._v(" "),r("h2",{attrs:{id:"docker-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-start"}},[t._v("#")]),t._v(" docker start")]),t._v(" "),r("p",[r("code",[t._v("docker start [OPTIONS] CONTAINER [CONTAINER...]")])]),t._v(" "),r("h2",{attrs:{id:"docker-stop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-stop"}},[t._v("#")]),t._v(" docker stop")]),t._v(" "),r("p",[r("code",[t._v("docker stop [OPTIONS] CONTAINER [CONTAINER...]")])]),t._v(" "),r("h2",{attrs:{id:"docker-rm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-rm"}},[t._v("#")]),t._v(" docker rm")]),t._v(" "),r("p",[r("code",[t._v("docker rm [OPTIONS] CONTAINER [CONTAINER...]")])]),t._v(" "),r("p",[t._v("중지된 컨테이너 모두 삭제 : "),r("code",[t._v("docker rm -v $(docker ps -a -q -f status=exited)")])]),t._v(" "),r("h2",{attrs:{id:"docker-images"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-images"}},[t._v("#")]),t._v(" docker images")]),t._v(" "),r("p",[t._v("다운로드한 이미지 목록 출력")]),t._v(" "),r("p",[r("code",[t._v("docker images [OPTIONS][REPOSITORY[:TAG]]")])]),t._v(" "),r("h2",{attrs:{id:"docker-pull"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-pull"}},[t._v("#")]),t._v(" docker pull")]),t._v(" "),r("p",[t._v("이미지 다운로드")]),t._v(" "),r("p",[r("code",[t._v("docker pull [OPTIONS] NAME[:TAG|@DIGEST]")])]),t._v(" "),r("h2",{attrs:{id:"docker-rmi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-rmi"}},[t._v("#")]),t._v(" docker rmi")]),t._v(" "),r("p",[t._v("다운로드 한 이미지 삭제")]),t._v(" "),r("p",[r("code",[t._v("docker rmi [OPTIONS] IMAGE [IMAGE...]")])]),t._v(" "),r("h2",{attrs:{id:"docker-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-logs"}},[t._v("#")]),t._v(" docker logs")]),t._v(" "),r("p",[r("code",[t._v("docker logs [OPTIONS] CONTAINER")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("옵션")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("-f "),r("code",[t._v("${CONTAINER_ID}")])]),t._v(" "),r("td",[t._v("해당 컨테이너의 실시간 로그 출력")])]),t._v(" "),r("tr",[r("td",[t._v("--tail n")]),t._v(" "),r("td",[t._v("마지막 n줄의 로그 출력")])])])]),t._v(" "),r("h2",{attrs:{id:"docker-exec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-exec"}},[t._v("#")]),t._v(" docker exec")]),t._v(" "),r("p",[t._v("컨테이너 내의 파일을 실행하려고 할 때")]),t._v(" "),r("p",[r("code",[t._v("docker exec [OPTIONS] CONTAINER COMMAND [ARG...]")])])])}),[],!1,null,null,null);a.default=s.exports}}]);