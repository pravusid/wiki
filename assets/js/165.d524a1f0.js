(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{366:function(e,s,t){"use strict";t.r(s);var n=t(17),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"let-s-encrypt-certbot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-certbot"}},[e._v("#")]),e._v(" Let's Encrypt & CertBot")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://letsencrypt.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://letsencrypt.org/docs/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Let’s Encrypt is a free, automated, and open Certificate Authority")]),e._v(" "),t("p",[e._v("Let's Encrypt 인증서는 3개월의 유효기간을 갖고 있으며, 자동 발급/갱신을 도와주는 certbot을 이용함")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" software-properties-common\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" add-apt-repository universe\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" add-apt-repository ppa:certbot/certbot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" python-certbot-nginx\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h2",{attrs:{id:"인증서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인증서"}},[e._v("#")]),e._v(" 인증서")]),e._v(" "),t("p",[e._v("아래의 발급 과정을 거치면 다음 인증서가 생성됨")]),e._v(" "),t("p",[t("code",[e._v("/etc/letsencrypt/archive")]),e._v(" -> (symbolic link) "),t("code",[e._v("/etc/letsencrypt/live/<domain_name>")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("fullchain.pem")]),e._v(" : cert.pem + chain.pem")]),e._v(" "),t("li",[t("code",[e._v("cert.pem")]),e._v(" : 도메인 인증서")]),e._v(" "),t("li",[t("code",[e._v("chain.pem")]),e._v(" : Let’s Encrypt chain 인증서")]),e._v(" "),t("li",[t("code",[e._v("privkey.pem")]),e._v(" : 인증서 개인키")])]),e._v(" "),t("h2",{attrs:{id:"발급"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급"}},[e._v("#")]),e._v(" 발급")]),e._v(" "),t("h2",{attrs:{id:"발급-standalone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급-standalone"}},[e._v("#")]),e._v(" 발급: StandAlone")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" certbot certonly --authenticator standalone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -d example.com -d www.example.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --pre-hook "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"systemctl stop apache2"')]),e._v(" --post-hook "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"systemctl start apache2"')]),e._v("\n    --pre-hook "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"systemctl stop nginx"')]),e._v(" --post-hook "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"systemctl start nginx"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"발급-manual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급-manual"}},[e._v("#")]),e._v(" 발급: Manual")]),e._v(" "),t("p",[e._v("DNS의 TXT record로 인증 후 발급")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("certbot certonly --manual --preferred-challenges dns -d pravusid.kr -d www.pravusid.kr\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Are you OK with your IP being logged?:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -> Yes")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Please deploy a DNS TXT record under the name")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -> 출력되는 random string을 _acme-challenge.pravusid.kr TXT record에 등록함")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -> 등록후 $ nslookup -q=TXT _acme-challenge.pravusid.kr 입력하여 적용 확인")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h3",{attrs:{id:"발급-nginx-certbot-webroot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급-nginx-certbot-webroot"}},[e._v("#")]),e._v(" 발급: NGINX + certbot webroot")]),e._v(" "),t("p",[e._v("Challenge Seed를 외부에서 접근 가능한 경로에("),t("code",[e._v("/.well-known")]),e._v(")에 위치시켜 인증받는다")]),e._v(" "),t("p",[t("code",[e._v("sudo certbot certonly --cert-name <인증서이름> --webroot -w /var/www/certbot -d example.com -d www.example.com")])]),e._v(" "),t("p",[e._v("인증서 생성 도중 대상 도메인에 대한 소유권 확인 과정을 거친다")]),e._v(" "),t("p",[t("code",[e._v("http://example.com/.well-known/acme-challenge/<RANDOM_STRING>")]),e._v(" 경로로 접속할 때 값이 출력되어야 함")]),e._v(" "),t("p",[e._v("WebRoot로 사용할 디렉토리를 생성한다")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /var/www/certbot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" nginx:nginx /var/www/certbot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("700")]),e._v(" /var/www/certbot\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("/etc/nginx/conf.d/letsencrypt.conf")]),e._v(" 파일에서 well-known 디렉토리와 WebRoot를 연결한다")]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('location /.well-known/acme-challenge/ {\n    root /var/www/certbot/;\n}\n\n# 또는\n\nlocation ^~ /.well-known/acme-challenge/ {\n    default_type "text/plain";\n    root /home/www/certbot;\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("p",[t("code",[e._v("/etc/nginx/servers-available/domain.conf")])]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    server_name domain.tld\n    # ...\n    include conf.d/letsencrypt.conf;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[t("code",[e._v("sites-available")]),e._v("에서 다음을 추가한다")]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    server_name www.mysite.com;\n    listen 443 ssl http2 default_server;\n    listen [::]:443 ssl http2 default_server ipv6only=on;\n\n    ssl_certificate /etc/letsencrypt/live/www.mysite.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/www.mysite.com/privkey.pem;\n    ssl_trusted_certificate /etc/letsencrypt/live/www.mysite.com/chain.pem;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"발급-apache-certbot-webroot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급-apache-certbot-webroot"}},[e._v("#")]),e._v(" 발급 Apache + certbot webroot")]),e._v(" "),t("p",[e._v("아파치 설정파일")]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Alias /.well-known/acme-challenge/ "/var/www/certbot/.well-known/acme-challenge/"\n<Directory "/var/www/certbot/">\n    Options None\n    AllowOverride None\n    ForceType text/plain\n    RedirectMatch 404 "^(?!/\\.well-known/acme-challenge/[\\w-]{43}$)"\n</Directory>\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("인증서 생성")]),e._v(" "),t("p",[t("code",[e._v("sudo certbot certonly --cert-name <인증서이름> --webroot -w /var/www/certbot -d example.com -d www.example.com")])]),e._v(" "),t("p",[e._v("리버스 프록시 사용시 다음 추가")]),e._v(" "),t("p",[t("code",[e._v("ProxyPass /.wellknown !")])]),e._v(" "),t("h3",{attrs:{id:"발급-nginx-certbot-auto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#발급-nginx-certbot-auto"}},[e._v("#")]),e._v(" 발급: NGINX + certbot auto")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("/etc/nginx/sites-available/default")])]),e._v(" "),t("li",[t("code",[e._v("/etc/nginx/sites-available/example.com")])])]),e._v(" "),t("p",[e._v("두 파일 중 하나를 선택해("),t("code",[e._v("example.com")]),e._v(" 이름도 변경) "),t("code",[e._v("server_name")]),e._v("을 도메인 이름으로 변경")]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# http 요청을 https로 리다이렉트\nserver {\n    server_name www.example.com example.com;\n\n    return 301 https://example.com$request_uri;\n}\n\n# www 서브도메인을 리다이렉트\nserver {\n    listen 443 ssl http2;\n\n    server_name www.example.com;\n    include snippets/ssl-params.conf;\n\n    return 301 https://example.com$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n\n    server_name example.com;\n    include snippets/ssl-params.conf;\n\n    root /var/www/example.com;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br")])]),t("p",[e._v("만약 다른 포트(:8080)가 리다이렉트로 인해 인증서 오류가 나면, 포트는 리다이렉트 제외 설정할 수 있음")]),e._v(" "),t("div",{staticClass:"language-conf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    port_in_redirect off;\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("적용 (defalut 파일은 기본적으로 sites-enabled에 심볼릭 링크가 있음)")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" nginx -t\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" nginx restart\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("인증서 발급: "),t("code",[e._v("sudo certbot --nginx -d example.com -d www.example.com")])]),e._v(" "),t("h2",{attrs:{id:"wildcard-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wildcard-사용"}},[e._v("#")]),e._v(" WildCard 사용")]),e._v(" "),t("p",[e._v("도메인에 WildCard 사용을 위해서는 TXT record를 통해서만 가능한데,\n이를 자동으로 수행하기 위해 DNS 플러그인을 사용할 수 있다.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://certbot.eff.org/docs/using.html#dns-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://certbot.eff.org/docs/using.html#dns-plugins"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"도메인-변경"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#도메인-변경"}},[e._v("#")]),e._v(" 도메인 변경")]),e._v(" "),t("p",[t("code",[e._v("certbot certonly --cert-name <인증서 이름> -d <도메인1>,<도메인2>")])]),e._v(" "),t("h2",{attrs:{id:"갱신"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#갱신"}},[e._v("#")]),e._v(" 갱신")]),e._v(" "),t("p",[e._v("갱신 가능여부 확인: "),t("code",[e._v("sudo certbot renew --dry-run")])]),e._v(" "),t("p",[e._v("certbot-auto의 경우: "),t("code",[e._v("--no-self-upgrade")]),e._v("를 추가하여 certbot의 업그레이드를 막음")]),e._v(" "),t("p",[e._v("Ubuntu의 경우 "),t("code",[e._v("/etc/cron.d/")]),e._v("에 certbot이 생성되어있음: "),t("a",{attrs:{href:"https://certbot.eff.org/docs/using.html#automated-renewals",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://certbot.eff.org/docs/using.html#automated-renewals"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("Many Linux distributions provide automated renewal when you use the packages installed through their system package manager.")])]),e._v(" "),t("p",[e._v("cron job을 등록한다")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("crontab")]),e._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v(" * * * certbot renew --quiet --post-hook "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"service nginx reload"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("등록된 job을 확인한다: "),t("code",[e._v("crontab -l")])]),e._v(" "),t("h2",{attrs:{id:"제거"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#제거"}},[e._v("#")]),e._v(" 제거")]),e._v(" "),t("p",[e._v("인증제거: "),t("code",[e._v("sudo certbot delete --cert-name <인증서이름>")])]),e._v(" "),t("p",[e._v("인증제거(대화형): "),t("code",[e._v("sudo certbot delete")])]),e._v(" "),t("p",[e._v("인증서 revoke: "),t("a",{attrs:{href:"https://certbot.eff.org/docs/using.html#revoking-certificates",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://certbot.eff.org/docs/using.html#revoking-certificates"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=a.exports}}]);