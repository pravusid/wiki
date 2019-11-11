(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{280:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"using-mysql-or-mariadb-via-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-mysql-or-mariadb-via-docker"}},[s._v("#")]),s._v(" Using MySQL or MariaDB via docker")]),s._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[t("code",[s._v("docker pull mariadb:latest")])]),s._v(" "),t("h2",{attrs:{id:"설정-실행"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설정-실행"}},[s._v("#")]),s._v(" 설정 & 실행")]),s._v(" "),t("p",[s._v("run 명령어에서 환경 설정을 하고 컨테이너를 실행함")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 백그라운드에서 작동")]),s._v("\n  --detach "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# db를 컨테이너 밖으로 연결 / 현재 경로를 지정한다면 {데이터경로} == $(pwd)/data")]),s._v("\n  --volume "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("데이터경로"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 관리자 비밀번호 (설정 or empty 택 1)")]),s._v("\n  --env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MYSQL_ROOT_PASSWORD"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ALLOW_EMPTY_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user, password, database")]),s._v("\n  --env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MYSQL_USER"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MYSQL_PASSWORD"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --env "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MYSQL_DATABASE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 컨테이너 이름과 포트연결")]),s._v("\n  --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MYSQL_CONTAINER_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --publish "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 실행할 이미지")]),s._v("\n  mariadb:latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 인코딩 설정 (args)")]),s._v("\n  --character-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --collation-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("bash shell로 container 실행")]),s._v(" "),t("p",[t("code",[s._v("docker exec -it <CONTAINER_NAME> /bin/bash")])]),s._v(" "),t("p",[s._v("명령어로 직접 실행")]),s._v(" "),t("p",[t("code",[s._v("docker exec -it <CONTAINER_NAME> mysql -uroot -p")])]),s._v(" "),t("p",[s._v("run 예시")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\ndocker stop "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\ndocker run -d --name "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":3306 -v "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/data:/var/lib/mysql my-image\n\ndocker stop "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf data/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r backup data\n\ndocker start "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('FROM mariadb:latest\n\nENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}\nENV MYSQL_USER=${MYSQL_USER}\nENV MYSQL_PASSWORD=${MYSQL_PASSWORD}\nENV MYSQL_DATABASE=${MYSQL_DATABASE}\n\nCMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]\n# CMD ["mysqld", "--sql-mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"]\n\nADD script.sql /docker-entrypoint-initdb.d/\nRUN chown -R mysql:mysql /docker-entrypoint-initdb.d/\n\nEXPOSE 3306\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("prefix MYSQL_ 환경변수는 하나씩만 입력가능(배열... 불가)")]),s._v(" "),t("li",[t("code",[s._v("entrypoint-initdb.d")]),s._v("에 넣은 초기화 스크립트는 도커 인스턴스 최초 실행시 파일이름 오름차순으로 구동됨")])])])}),[],!1,null,null,null);a.default=e.exports}}]);