(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{522:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[s._v("#")]),s._v(" PM2")]),s._v(" "),a("p",[s._v("Process Manager 2")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/quick-start/"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작"}},[s._v("#")]),s._v(" 시작")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2@latest -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Update")]),s._v("\npm2 update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// cluster: n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n개"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", -n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("core 수 - n개"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npm2 start app.js -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("number-instances"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 한번에 종료하지 않고 클러스터 내에서 순차적으로 재시작")]),s._v("\npm2 reload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Invoke reload")]),s._v("\npm2 startOrReload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[s._v("#")]),s._v(" CLI")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/quick-start/#cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/quick-start/#cheatsheet"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 start app.js --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\npm2 reload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npm2 restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\npm2 stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\npm2 delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("all"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Display all processes status")]),s._v("\npm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Monitor all processes")]),s._v("\npm2 monit\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# all apps logs / only app logs / only out or err")]),s._v("\npm2 logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("app_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("app_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--err "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# empty all application logs")]),s._v("\npm2 flush\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Reload all logs")]),s._v("\npm2 reloadLogs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Send system signal to script")]),s._v("\npm2 sendSignal SIGUSR2 my-app\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"ecosystem-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem-file"}},[s._v("#")]),s._v(" Ecosystem File")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/#attributes-available",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/application-declaration/#attributes-available"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("code",[s._v("pm2 ecosystem")]),s._v(": "),a("code",[s._v("ecosystem.config.js")]),s._v(" 파일이 생성됨")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      instances"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cluster")]),s._v("\n      exp_backoff_restart_delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      max_memory_restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200M"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/out.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./logs/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      log_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      merge_logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      env"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"development"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      env_production"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"production"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("code",[s._v("pm2 <start|restart|stop|delete> [/path/to/ecosystem.config.js] [--only app]")])]),s._v(" "),a("p",[s._v("설정된 환경변수는 재시작해도 변하지 않으므로 변경을 위해 환경변수를 명시함")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/application-declaration/#switching-environments",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/application-declaration/#switching-environments"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("code",[s._v("pm2 <restart|reload> <app_name> --env production")])]),s._v(" "),a("h2",{attrs:{id:"graceful-start-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graceful-start-stop"}},[s._v("#")]),s._v(" Graceful Start/Stop")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pm2.keymetrics.io/docs/usage/signals-clean-restart/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pm2.keymetrics.io/docs/usage/signals-clean-restart/"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"graceful-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graceful-start"}},[s._v("#")]),s._v(" Graceful Start")]),s._v(" "),a("p",[s._v("앱 실행까지 준비시간이 필요할 수 있다 (db연결, 데이터로드 ...)")]),s._v(" "),a("p",[s._v("pm2를 통해 실행된 어플리케이션에서는 "),a("code",[s._v("wait_ready: true")]),s._v(" 옵션을 활성화하고\n아래의 코드를 앱에서 실행하여 PM2에게 "),a("code",[s._v("ready")]),s._v(" signal을 직접 보낼 수 있다")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ready"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"graceful-stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graceful-stop"}},[s._v("#")]),s._v(" Graceful Stop")]),s._v(" "),a("p",[s._v("SIGINT signal을 가로채서 앱 종료준비를 한다 ("),a("code",[s._v("kill_timeout")]),s._v("내에 작업을 끝내야 한다)")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("process.on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SIGINT'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   db.stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     process.exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err ? "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"ecosystem-file-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem-file-2"}},[s._v("#")]),s._v(" ecosystem file")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  apps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./app.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      wait_ready"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Instead of reload waiting for listen event, wait for process.send(‘ready’)")]),s._v("\n      listen_timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (default) time in ms before forcing a reload if app not listening")]),s._v("\n      kill_timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1600")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// (default) time in milliseconds before sending a final SIGKILL")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"log-rotate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-rotate"}},[s._v("#")]),s._v(" log rotate")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/keymetrics/pm2-logrotate",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/keymetrics/pm2-logrotate"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2-logrotate\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"참고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[s._v("#")]),s._v(" 참고")]),s._v(" "),a("h3",{attrs:{id:"오류처리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오류처리"}},[s._v("#")]),s._v(" 오류처리")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/keymetrics/pm2-io-apm/blob/HEAD/src/features/notify.ts#L71",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/keymetrics/pm2-io-apm/blob/HEAD/src/features/notify.ts#L71"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("pm2는 실행중인 프로세스의 "),a("code",[s._v("uncaughtException")]),s._v(", "),a("code",[s._v("unhandledRejection")]),s._v("을 처리함 (기본 값 "),a("code",[s._v("true")]),s._v(")")])])}),[],!1,null,null,null);t.default=e.exports}}]);