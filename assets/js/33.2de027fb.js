(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{404:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[s._v("#")]),s._v(" MONGODB")]),s._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("ul",[t("li",[s._v("Mongodb GUI : "),t("a",{attrs:{href:"https://robomongo.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://robomongo.org"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("몽고DB-서버 설치 : "),t("code",[s._v("sudo apt install mongodb-server")])])]),s._v(" "),t("h2",{attrs:{id:"설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[s._v("#")]),s._v(" 설정")]),s._v(" "),t("ul",[t("li",[s._v("ip 바인딩 설정\n"),t("ul",[t("li",[s._v("/etc/mongod.conf : "),t("code",[s._v("bind_ip = 0.0.0.0")])]),s._v(" "),t("li",[s._v("/etc/ : "),t("code",[s._v("sudo rm -rf *.sock")])])])])]),s._v(" "),t("p",[t("code",[s._v("mongod.conf")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for documentation of all options, see:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   http://docs.mongodb.org/manual/reference/configuration-options/")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# where to write logging data.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("systemLog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("destination")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" file\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logAppend")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/log/mongodb/mongod.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Where and how to store data.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/mongo\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("journal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  engine: mmapv1 / wiredTiger")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# how the process runs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("processManagement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fork")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fork and run in background")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pidFilePath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/run/mongodb/mongod.pid  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# location of pidfile")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeZoneInfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /usr/share/zoneinfo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network interfaces")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("net")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bindIp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h3",{attrs:{id:"windows-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-설정"}},[s._v("#")]),s._v(" windows 설정")]),s._v(" "),t("p",[s._v("실행: "),t("code",[s._v('mongod --config "c:\\data\\mongod.cfg"')])]),s._v(" "),t("p",[t("code",[s._v("mongod.cfg")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("net")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28080")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bindIp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("systemLog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("destination")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" file\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\data\\log\\mongod.log\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("journal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\data\\\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("engine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mmapv1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 32bit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("security")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("authorization")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" enabled\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"실행-종료"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실행-종료"}},[s._v("#")]),s._v(" 실행/종료")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("서버 실행 : "),t("code",[s._v("mongod --dbpath /home/sist/springDev/mongodb/data")])])]),s._v(" "),t("li",[t("p",[s._v("서버 종료")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mongo\nuse admin\ndb.shutdownServer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"인증모드-콘솔접속"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인증모드-콘솔접속"}},[s._v("#")]),s._v(" 인증모드 콘솔접속")]),s._v(" "),t("h3",{attrs:{id:"로컬-연결"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#로컬-연결"}},[s._v("#")]),s._v(" 로컬 연결")]),s._v(" "),t("p",[t("code",[s._v("mongo <dbname> -u <username> -p <password>")])]),s._v(" "),t("h3",{attrs:{id:"원격-연결"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#원격-연결"}},[s._v("#")]),s._v(" 원격 연결")]),s._v(" "),t("p",[t("code",[s._v("mongo -u <username> -p <password> <ipaddress>:<port>/<dbname>")])]),s._v(" "),t("h2",{attrs:{id:"사용자-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용자-설정"}},[s._v("#")]),s._v(" 사용자 설정")]),s._v(" "),t("h3",{attrs:{id:"관리자-계정-및-권한-추가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#관리자-계정-및-권한-추가"}},[s._v("#")]),s._v(" 관리자 계정 및 권한 추가")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use admin\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(",\n    pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234"')]),s._v(",\n    roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nuse admin\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbadmin"')]),s._v(",\n    pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1234"')]),s._v(",\n    roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWriteNayDatabase"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbAdminAnyDatabase"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clusterAdmin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"사용자-관리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용자-관리"}},[s._v("#")]),s._v(" 사용자 관리")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use dbname\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testUser"')]),s._v(",\n  pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(",\n  roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbAdmin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ndb.dropUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<username>"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"다른-db에-권한을-가진-사용자"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#다른-db에-권한을-가진-사용자"}},[s._v("#")]),s._v(" 다른 db에 권한을 가진 사용자")]),s._v(" "),t("p",[s._v("다음 명령은 read 권한만 갖고 있는 동일한 사용자를 admin 데이터베이스에 추가하고 testDB 데이터베이스에 대한 readWrite 권한을 부여한다.")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use admin\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testUser"')]),s._v(",\n    userSource: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(",\n    roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"read"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n    otherDBRoles:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" testDB: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"인증모드-활성화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인증모드-활성화"}},[s._v("#")]),s._v(" 인증모드 활성화")]),s._v(" "),t("p",[t("code",[s._v("--auth")]),s._v(" 파라미터로 인증모드를 활성화 한다")]),s._v(" "),t("p",[t("code",[s._v("mongod -dbpath D:\\mongodb\\data --auth")])]),s._v(" "),t("h3",{attrs:{id:"관리자로-로그인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#관리자로-로그인"}},[s._v("#")]),s._v(" 관리자로 로그인")]),s._v(" "),t("p",[s._v("mongo shell에 접속한 이후")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("use admin\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"useradmin"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nshow "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("mongo shell에 접속하기 전")]),s._v(" "),t("p",[t("code",[s._v('mongo admin --username "useradmin" --password "test"')])]),s._v(" "),t("h2",{attrs:{id:"기본-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-명령어"}},[s._v("#")]),s._v(" 기본 명령어")]),s._v(" "),t("ul",[t("li",[s._v("db생성 : "),t("code",[s._v("use db이름")])]),s._v(" "),t("li",[s._v("table생성 : "),t("code",[s._v("db.테이블이름")])]),s._v(" "),t("li",[s._v("insert : "),t("code",[s._v('db.member.insert({no:1,name:"hong",age:10})')])]),s._v(" "),t("li",[s._v("select : "),t("code",[s._v("db.member.find()")])]),s._v(" "),t("li",[s._v("drop : "),t("code",[s._v("db.member.drop()")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);