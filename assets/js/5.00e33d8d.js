(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"aws-codedeploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-codedeploy"}},[e._v("#")]),e._v(" AWS CodeDeploy")]),e._v(" "),a("h2",{attrs:{id:"codedeploy-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codedeploy-agent"}},[e._v("#")]),e._v(" CodeDeploy Agent")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("CodeDeploy CLI 설치")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sudo yum install ruby")])]),e._v(" "),a("li",[a("code",[e._v("curl -O https://aws-codedeploy-ap-northeast-2.s3.amazonaws.com/latest/install")])]),e._v(" "),a("li",[a("code",[e._v("chmod +x install")])]),e._v(" "),a("li",[a("code",[e._v("sudo ./install auto")])])])]),e._v(" "),a("li",[a("p",[e._v("CodeDeploy Agent 실행")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sudo service codedeploy-agent start")])]),e._v(" "),a("li",[a("code",[e._v("sudo service codedeploy-agent status")])])])]),e._v(" "),a("li",[a("p",[e._v("CodeDeploy Agent 사용자 변경: "),a("a",{attrs:{href:"https://aws.amazon.com/ko/premiumsupport/knowledge-center/codedeploy-agent-non-root-profile/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/ko/premiumsupport/knowledge-center/codedeploy-agent-non-root-profile/"),a("OutboundLink")],1)])])]),e._v(" "),a("h3",{attrs:{id:"agent-실행-환경변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agent-실행-환경변수"}},[e._v("#")]),e._v(" agent 실행 환경변수")]),e._v(" "),a("p",[e._v("agent 실행시 환경변수는 다음과 같음")]),e._v(" "),a("ol",[a("li",[e._v("LIFECYCLE_EVENT : This variable contains the name of the lifecycle event associated with the script.")]),e._v(" "),a("li",[e._v("DEPLOYMENT_ID :  This variables contains the deployment ID of the current deployment.")]),e._v(" "),a("li",[e._v("APPLICATION_NAME :  This variable contains the name of the application being deployed. This is the name the user sets in the console or AWS CLI.")]),e._v(" "),a("li",[e._v("DEPLOYMENT_GROUP_NAME :  This variable contains the name of the deployment group. A deployment group is a set of instances associated with an application that you target for a deployment.")]),e._v(" "),a("li",[e._v("DEPLOYMENT_GROUP_ID : This variable contains the ID of the deployment group in AWS CodeDeploy that corresponds to the current deployment")])]),e._v(" "),a("h2",{attrs:{id:"준비"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#준비"}},[e._v("#")]),e._v(" 준비")]),e._v(" "),a("ul",[a("li",[e._v("배포할 데이터를 업로드할 "),a("strong",[e._v("S3 bucket 생성")])]),e._v(" "),a("li",[e._v("외부 트리거(CI...)에서 사용할 "),a("strong",[a("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/getting-started-provision-user.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAM 사용자를 추가"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("S3 접근권한 ("),a("code",[e._v("action:s3:PutObject")]),e._v(")")]),e._v(" "),a("li",[e._v("CodeDeploy 권한 ("),a("code",[e._v("POLICY:AWSCodeDeployDeployerAccess")]),e._v(")")])])]),e._v(" "),a("li",[e._v("CodeDeploy가 배포를 진행하기 위한 "),a("strong",[a("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/getting-started-create-service-role.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeDeploy Role 생성"),a("OutboundLink")],1)])]),e._v(" "),a("li",[e._v("EC2에서 작업을 수행하기 위해 "),a("strong",[a("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/getting-started-create-iam-instance-profile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("S3 접근 권한이 있는 Role 생성"),a("OutboundLink")],1)]),e._v(" 후 EC2에 Role 할당")]),e._v(" "),a("li",[e._v("CodeDeploy 웹 콘솔에서 "),a("strong",[a("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/deployment-groups-create.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("배포 그룹 생성(ARN에서 기존에 생성한 CodeDeploy Role 선택)"),a("OutboundLink")],1)]),e._v(" 후 배포 애플리케이션 생성")])]),e._v(" "),a("h2",{attrs:{id:"appspec-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appspec-yml"}},[e._v("#")]),e._v(" "),a("code",[e._v("appspec.yml")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/reference-appspec-file.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/reference-appspec-file.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("최소 기능 스크립트 ("),a("code",[e._v("runas")]),e._v(" 사용시 사용자 암호 입력이 필요하다면 오류발생함)")]),e._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("os")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" linux\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("source")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ./\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /home/ec2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user/deployment/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("BeforeInstall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" scripts/deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("prepare.sh\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("runas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ec2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ApplicationStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("location")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" scripts/deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("run.sh\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("runas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ec2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("user\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("ul",[a("li",[e._v("스크립트가 실행되는 경로는 Code Deploy Agent가 설치된 경로임 "),a("code",[e._v("/opt/codedeploy-agent")])]),e._v(" "),a("li",[e._v("실제 파일 경로는: "),a("code",[e._v("/opt/codedeploy-agent/deployment-root/{deployment-group-ID}/{deployment-ID}")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);