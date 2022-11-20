(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{381:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"elastic-compute-cloud-ec2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elastic-compute-cloud-ec2"}},[e._v("#")]),e._v(" Elastic Compute Cloud (EC2)")]),e._v(" "),s("h2",{attrs:{id:"인스턴스-생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-생성"}},[e._v("#")]),e._v(" 인스턴스 생성")]),e._v(" "),s("p",[e._v("인스턴스 생성시 유의점: 보안그룹 확인")]),e._v(" "),s("ul",[s("li",[e._v("ssh 인바운드는 지정된 IP에서만")]),e._v(" "),s("li",[e._v("웹서비스용 80포트 443포트는 열어야함")]),e._v(" "),s("li",[e._v("인스턴스에 접근하기 위한 pem키를 잃어버리면 인스턴스를 다시 생성해야 함")])]),e._v(" "),s("p",[e._v("ssh에서 EC2 인스턴스 접속을 위한 호스트설정을 한다: "),s("code",[e._v("~/.ssh/config")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Host ec2-idpravus\n    HostName &lt;EIP||퍼블릭DNS>\n    User &lt;ec2-user||ubuntu>\n    IdentityFile ~/.ssh/&lt;pem파일>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("기본 타임존은 UTC이므로 UTC+9로 변경한다")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/localtime\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /usr/share/zoneinfo/Asia/Seoul /etc/localtime\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"aws-cli로-인스턴스-public-dns-조회"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-cli로-인스턴스-public-dns-조회"}},[e._v("#")]),e._v(" aws-cli로 인스턴스 public DNS 조회")]),e._v(" "),s("p",[s("code",[e._v("aws configure")]),e._v(" 설정한 이후 사용")]),e._v(" "),s("p",[s("code",[e._v("aws ec2 describe-instances --instance-ids <인스턴스id> --query 'Reservations[].Instances[].PublicDnsName'")])]),e._v(" "),s("h2",{attrs:{id:"ebs-볼륨크기-변경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ebs-볼륨크기-변경"}},[e._v("#")]),e._v(" EBS 볼륨크기 변경")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"windows-인스턴스-관리자-암호"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-인스턴스-관리자-암호"}},[e._v("#")]),e._v(" Windows 인스턴스 관리자 암호")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ResettingAdminPassword_EC2Config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ResettingAdminPassword_EC2Config.html"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("윈도우 인스턴스내에서 암호를 변경 한 경우 "),s("code",[e._v("연결 > 암호 가져오기")]),e._v("가 작동하지 않는다")]),e._v(" "),s("blockquote",[s("p",[e._v("암호변경: "),s("code",[e._v('net user Administrator "new_password"')])])]),e._v(" "),s("h3",{attrs:{id:"windows-2016-이전-버전의-경우"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-2016-이전-버전의-경우"}},[e._v("#")]),e._v(" Windows 2016 이전 버전의 경우")]),e._v(" "),s("p",[e._v("이 경우 "),s("code",[e._v("C:\\Program Files\\Amazon\\Ec2ConfigService\\Settings\\config.xml")]),e._v(" 파일에서\n"),s("code",[e._v("Ec2SetPassword")]),e._v(" 항목을 "),s("code",[e._v("Enabled")]),e._v("로 변경하고 인스턴스를 종료후 다시 켠다.")]),e._v(" "),s("p",[e._v("부팅 후 4분 이상 대기한 뒤 "),s("code",[e._v("연결 > 암호 가져오기")]),e._v("를 다시 실행한다.")]),e._v(" "),s("p",[e._v("직접 암호를 변경했을 때와 마찬가지로 암호가 변경으로 인해 "),s("code",[e._v("Ec2SetPassword")]),e._v(" 항목이 "),s("code",[e._v("Disabled")]),e._v("로 변경되어 있다.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ami-create-standard.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ami-create-standard.html"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("만약 해당 인스턴스의 이미지를 생성한다면 암호를 재생성 할 수 있도록\n"),s("code",[e._v("Ec2SetPassword")]),e._v(" 항목을 "),s("code",[e._v("Enabled")]),e._v("로 처리하는 방법도 좋을 듯 하다.")]),e._v(" "),s("h3",{attrs:{id:"windows-2016-이상-버전"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-2016-이상-버전"}},[e._v("#")]),e._v(" Windows 2016 이상 버전")]),e._v(" "),s("p",[e._v("암호를 변경하려면 볼륨을 분리하여 다른 인스턴스에서 접근하는 방법으로 가능하다")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ResettingAdminPassword_EC2Launch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ResettingAdminPassword_EC2Launch.html"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("관리자 암호를 Random으로 지정하고, "),s("code",[e._v("EC2Launch > Shutdown with Sysprep")]),e._v(" 실행후 이미지를 생성하면 암호를 재생성 할 수 있음")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ec2launch.html#ec2launch-sysprep",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ec2launch.html#ec2launch-sysprep"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"버스트-가능-인스턴스-t"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#버스트-가능-인스턴스-t"}},[e._v("#")]),e._v(" 버스트 가능 인스턴스 (T)")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-performance-instances.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-performance-instances.html"),s("OutboundLink")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("기존 Amazon EC2 인스턴스 유형은 고정된 CPU 리소스를 제공하는 반면,\n성능 순간 확장 가능 인스턴스는 기본 수준의 CPU 사용률을 제공하면서 기본 수준 이상으로 CPU 사용률을 버스트하는 기능을 제공합니다.\n이렇게 하면 기준 CPU와 추가 버스트 CPU 사용량에 대해서만 비용을 지불하면 되므로 컴퓨팅 비용이 절감됩니다.\n기준 사용률과 버스트 기능은 CPU 크레딧에 의해 좌우됩니다.")])]),e._v(" "),s("h3",{attrs:{id:"핵심개념"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#핵심개념"}},[e._v("#")]),e._v(" 핵심개념")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[e._v("시간당 적립되는 크레딧 수 = "),s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html#burstable-performance-instances-credit-table",target:"_blank",rel:"noopener noreferrer"}},[e._v("기준 사용률(%)"),s("OutboundLink")],1),e._v("] x vCPU 수 x 60분")]),e._v(" "),s("li",[e._v("분당 소비되는 CPU 크레딧 = vCPU 수 x CPU 사용률 x 1분")]),e._v(" "),s("li",[e._v("적립 - 소비 크레딧은 누적 한도(일반적으로 24시간 동안 적립되는 최대 크레딧 수)까지 적립됨")])]),e._v(" "),s("h3",{attrs:{id:"무제한-모드-unlimited"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무제한-모드-unlimited"}},[e._v("#")]),e._v(" 무제한 모드 (unlimited)")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.wisen.co.kr/pages/blog/blog-detail.html?idx=2726",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.wisen.co.kr/pages/blog/blog-detail.html?idx=2726"),s("OutboundLink")],1)])]),e._v(" "),s("blockquote",[s("p",[e._v("unlimited로 구성된 성능 순간 확장 가능 인스턴스의 CPU 크레딧 밸런스가 감소하면 잉여 크레딧을 사용하여 기준 이상으로 버스트할 수 있습니다.\nCPU 사용률이 기준 미만으로 떨어지면 획득한 CPU 크레딧을 사용하여 이전에 소비한 잉여 크레딧을 청산할 수 있습니다.\nCPU 크레딧을 획득하고 잉여 크레딧을 청산하는 기능을 통해 Amazon EC2은 24시간 동안 인스턴스의 CPU 사용률을 평균 수준으로 유지할 수 있습니다.\n24시간 동안의 평균 CPU 사용량이 기준을 초과하는 경우 인스턴스에 추가 사용량에 대해 vCPU 시간당 고정 추가 요금이 청구됩니다.")])]),e._v(" "),s("ul",[s("li",[e._v("무제한 모드에서는 잔여 크레딧이 0이 되면, 기준 사용률 이하로 제한되지 않고 잉여(surplus) 크레딧을 적립하게 된다")]),e._v(" "),s("li",[e._v("잉여 크레딧의 한도는 크레딧 누적 한도와 동일하다")]),e._v(" "),s("li",[e._v("잉여 크레딧 누적 한도를 초과하여 적립하게 되면 초과분에 대해 과금이 이루어진다")])]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/burstable-performance-instances-unlimited-mode-concepts.html#when-to-use-unlimited-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("무제한 모드 vs 고정 CPU 손익분기"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);