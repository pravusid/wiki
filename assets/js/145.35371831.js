(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{504:function(s,n,e){"use strict";e.r(n);var a=e(27),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" NGINX")]),s._v(" "),e("p",[s._v("Web Server (Apache와 2강 구도를 형성하고 있다)")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Apache : 요청을 Multi Processing Module 방식으로 처리")]),s._v(" "),e("ul",[e("li",[s._v("Prefork: 실행중인 프로세스를 복제하여 처리")]),s._v(" "),e("li",[s._v("Worker: 여러 프로세스가 여러 쓰레드를 사용한다")])])]),s._v(" "),e("li",[e("p",[s._v("Nginx : Event Driven 방식으로 요청을 비동기 처리함")])])]),s._v(" "),e("h2",{attrs:{id:"명령"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#명령"}},[s._v("#")]),s._v(" 명령")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("nginx -s stop")]),s._v(": 바로 종료 (TERM)")]),s._v(" "),e("li",[e("code",[s._v("nginx -s quit")]),s._v(": 정상 종료 (QUIT)")]),s._v(" "),e("li",[e("code",[s._v("nginx -s reload")]),s._v(": 환경설정을 다시 읽음")]),s._v(" "),e("li",[e("code",[s._v("nginx -s reopen")]),s._v(": 로그 파일을 다시 연다")])]),s._v(" "),e("h2",{attrs:{id:"설정파일-연결"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정파일-연결"}},[s._v("#")]),s._v(" 설정파일 연결")]),s._v(" "),e("p",[s._v("설정파일 위치: "),e("code",[s._v("/etc/nginx/nginx.conf")])]),s._v(" "),e("p",[s._v("환경설정 구문 체크: "),e("code",[s._v("nginx -t")])]),s._v(" "),e("p",[s._v("설정 생성후 심볼릭 링크, 적용")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/nginx/sites-enabled/default\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /etc/nginx/sites-available/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("conf_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".conf /etc/nginx/sites-enabled/"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("conf_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".conf\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl stop nginx\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("blockquote",[e("p",[s._v("digitalocean에서 운영하는 "),e("a",{attrs:{href:"https://nginxconfig.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginxconfig.io/"),e("OutboundLink")],1),s._v("에서 설정 생성할 수 있음")])]),s._v(" "),e("h2",{attrs:{id:"http-모듈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-모듈"}},[s._v("#")]),s._v(" HTTP 모듈")]),s._v(" "),e("p",[s._v("HTTP 모듈 설정은 세 가지 계층 블럭을 제공한다")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("http (프로토콜 수준)")]),s._v(" "),e("ul",[e("li",[s._v("HTTP와 관련된 모든 모듈의 지시어를 정의함")])])]),s._v(" "),e("li",[e("p",[s._v("server (서버 수준)")]),s._v(" "),e("ul",[e("li",[s._v("하나의 웹사이트를 선언하는 데 사용")]),s._v(" "),e("li",[s._v("http 블럭 안에서만 사용 가능")])])]),s._v(" "),e("li",[e("p",[s._v("location (요청 URI 수준)")]),s._v(" "),e("ul",[e("li",[s._v("웹사이트의 특정 위치에 적용할 설정 그룹 정의")]),s._v(" "),e("li",[s._v("server 블럭이나 다른 location 블럭 안에 삽입할 수 있다")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("설정에 사용할 수 있는 변수 참고: "),e("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#var_arg_",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nginx.org/en/docs/http/ngx_http_core_module.html#var_arg_"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"tls-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls-설정"}},[s._v("#")]),s._v(" TLS 설정")]),s._v(" "),e("p",[s._v("dhparam 생성 (안전한 키 길이를 가진 DHE 알고리즘 키로 교체)")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("openssl dhparam -out dhparam.pem "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("site-available/<conf_name>.conf")])]),s._v(" "),e("blockquote",[e("p",[s._v("동일 sub-domain에서 443(https default), 8080 포트를 각각 listen")])]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    server_name aws.pravusid.kr;\n\n    # ...\n\n    port_in_redirect off; # 443 포트가 아닌 다른 포트에서 https 사용\n\n    listen [::]:8080 ssl ipv6only=on;\n    listen 8080 ssl;\n\n    ssl_certificate /etc/letsencrypt/live/aws.pravusid.kr/fullchain.pem; # 도메인 인증서 + 체인 인증서 + 루트 인증서\n    ssl_certificate_key /etc/letsencrypt/live/aws.pravusid.kr/privkey.pem; # domain 인증서 private key\n\n    include /etc/letsencrypt/options-ssl-nginx.conf;\n    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;\n}\n\nserver {\n    if ($host = aws.pravusid.kr) {\n        return 301 https://$host$request_uri;\n    }\n\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    server_name aws.pravusid.kr;\n    return 404;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h2",{attrs:{id:"gzip-compression"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip-compression"}},[s._v("#")]),s._v(" gzip compression")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://nginx.org/en/docs/http/ngx_http_gzip_module.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://nginx.org/en/docs/http/ngx_http_gzip_module.html"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('http {\n  gzip on;\n  gzip_min_length 1000;\n  gzip_proxied expired no-cache no-store private auth;\n  gzip_types text/plain application/json application/xml;\n  gzip_disable "msie6";\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"url-matching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-matching"}},[s._v("#")]),s._v(" URL matching")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("server {\n    listen 80;\n    server_name *.example.com;\n\n    location optional_modifier location_match {\n        # ...\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"location-modifier"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-modifier"}},[s._v("#")]),s._v(" location modifier")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("none")]),s._v(": prefix match")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("/site")]),s._v(" 경로에 대해 "),e("code",[s._v("/site/page1/index.html")]),s._v(" 혹은 "),e("code",[s._v("/site/index.html")]),s._v(" 등이 대응될 수 있다")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("=")]),s._v(": 정확히 일치하는 경로")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("~")]),s._v(": 대소문자를 구분하는 regular expression match")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("~*")]),s._v(": 대소문자를 구분하지 않는 regular expression match")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("^~")]),s._v(": prefix match에서 가장 일치하는 결과인 경우 regular expression match를 하지 않고 연결함")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("^~ /costumes")]),s._v("인 경우 "),e("code",[s._v("/costumes/ninja.html")]),s._v(" 경로는 정규식 매칭을 하지 않고 바로 연결함")])])])]),s._v(" "),e("h2",{attrs:{id:"리버스-프록시"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#리버스-프록시"}},[s._v("#")]),s._v(" 리버스 프록시")]),s._v(" "),e("h3",{attrs:{id:"요청-흐름제어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#요청-흐름제어"}},[s._v("#")]),s._v(" 요청 흐름제어")]),s._v(" "),e("p",[s._v("server 아래의 location을 다음과 같이 수정")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("proxy_pass")])]),s._v(" "),e("ul",[e("li",[s._v("요청이 오면 해당 위치로 전달")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass"),e("OutboundLink")],1)])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("proxy_set_header <헤더> <헤더값>")])]),s._v(" "),e("ul",[e("li",[s._v("요청의 헤더에 정의한 값 할당")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header"),e("OutboundLink")],1)])])]),s._v(" "),e("li",[e("p",[s._v("SSL을 사용하는 경우")]),s._v(" "),e("ul",[e("li",[s._v("헤더설정: "),e("a",{attrs:{href:"https://nginx.com/resources/wiki/start/topics/examples/likeapache/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.com/resources/wiki/start/topics/examples/likeapache/"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("프록시 리다이렉트: "),e("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect"),e("OutboundLink")],1)])])])]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("location / {\n    proxy_set_header X-Forwarded-Host $host:$server_port;\n    proxy_set_header X-Forwarded-Server $host;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_pass http://localhost:8000;\n    proxy_redirect http://localhost:8000 https://$host:$server_port;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("해당 위치를 변수로 설정하고 싶으면")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("include /etc/nginx/conf.d/service-url.inc;\n\nlocation / {\n    proxy_pass $service_url;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("code",[s._v("/etc/nginx/conf.d/service-url.inc")]),s._v(" 파일 내용은 다음으로 한다")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set $service_url http://localhost:8000;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"로드밸런싱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로드밸런싱"}},[s._v("#")]),s._v(" 로드밸런싱")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream test_proxy {\n    <LOAD_BALANCING_METHOD>\n    server web-01;\n    server web-02;\n}\nserver {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n\n    root /var/www/html;\n\n    index index.html index.htm index.nginx-debian.html;\n\n    server_name _;\n\n    location / {\n        proxy_pass http://test_proxy;\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("로드밸런싱 메소드("),e("code",[s._v("<LOAD_BALANCING_METHOD>")]),s._v(" 위치)")]),s._v(" "),e("ul",[e("li",[s._v("default: round-robin")]),s._v(" "),e("li",[s._v("least_conn: 연결이 적은곳으로")]),s._v(" "),e("li",[s._v("ip_hash: 클라이언트 IP주소를 기준으로 요청 분배")]),s._v(" "),e("li",[s._v("hash: 유저정의 변수 조합을 해싱하여 기준으로 사용")]),s._v(" "),e("li",[s._v("least_time: 평균 레이턴시와 연결을 기준으로")])]),s._v(" "),e("h3",{attrs:{id:"정규표현식-매칭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정규표현식-매칭"}},[s._v("#")]),s._v(" 정규표현식 매칭")]),s._v(" "),e("p",[s._v("URI를 정규표현식 매칭으로 분류했으면, 리버스 프록시에서도 capturing 그룹을 넘겨줄 수 있다.")]),s._v(" "),e("p",[e("code",[s._v("location ~ ^/api/(admin|setting)/(.*)")])]),s._v(" "),e("p",[s._v("위와 같은 정규표현식 매칭이 있다면 리버스프록시 호출에서 캡쳐 그룹을 "),e("code",[s._v("$순서")]),s._v("로 사용할 수 있다.\n또한, "),e("code",[s._v("$is_args")]),s._v(", "),e("code",[s._v("$args")]),s._v("로 query-string을 받을 수 있다.")]),s._v(" "),e("p",[e("code",[s._v("proxy_pass http://localhost:8080/$1/$2$is_args$args;")])]),s._v(" "),e("p",[s._v("위와 같은 방법 대신 "),e("code",[s._v("rewrite")]),s._v("를 사용할 수도 있다. 이 경우 query-string은 nginx가 처리한다.")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("location /api/ {\n    rewrite ^/api/(admin|setting)/(.*) /$1/$2 break;\n    proxy_pass http://localhost:8080;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"ip-제한"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip-제한"}},[s._v("#")]),s._v(" IP 제한")]),s._v(" "),e("p",[s._v("위 -> 아래 순서대로 작동함")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("location ^~ /admin/ {\n    deny 1.1.1.1; # Deny a single IP\n    deny 2.2.2.0/24; #Deny a IP range\n    allow 3.3.3.3;\n    allow 1.1.1.0/24;\n    deny all; # Deny everyone else\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"load-balancer-elb-등으로-인해-nginx에-ip가-전달되지-않는-경우"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-elb-등으로-인해-nginx에-ip가-전달되지-않는-경우"}},[s._v("#")]),s._v(" Load Balancer (ELB...)등으로 인해 nginx에 ip가 전달되지 않는 경우")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http {\n    # ...\n    real_ip_header X-Forwarded-For;\n    set_real_ip_from 10.0.0.0/8; # <- subnet IPs or Elastic Load Balance IP\n    # ...\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);