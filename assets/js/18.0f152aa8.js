(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{389:function(e,a,s){"use strict";s.r(a);var t=s(28),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"aws-lambda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-lambda"}},[e._v("#")]),e._v(" AWS lambda")]),e._v(" "),s("h2",{attrs:{id:"serverless-computing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless-computing"}},[e._v("#")]),e._v(" Serverless Computing")]),e._v(" "),s("p",[e._v("사용자가 애플리케이션/운영체제/하드웨어를 모두 관리하는 전통적인 방식에서, 하드웨어는 관리하지 않는 가상서버로 넘어갔고,\n추가로 Docker와 같은 컨테이너를 쓴다면 운영체제 영역도 관리하지 않아도 된다.")]),e._v(" "),s("p",[e._v("서버리스는 다른 모든 것을 신경쓸 필요 없이 CPU와 메모리만을 할당받아 코드를 실행한다.\n이러한 접근법을 Fuction as a Service 라고 부르기도 한다.")]),e._v(" "),s("blockquote",[s("p",[e._v("lambda + API gateway: "),s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-on-demand-https-example.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-on-demand-https-example.html"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"aws-sam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-sam"}},[e._v("#")]),e._v(" AWS SAM")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/what-is-sam.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/what-is-sam.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/awslabs/serverless-application-model/blob/master/versions/2016-10-31.md"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("code",[e._v("pip install --user aws-sam-cli")])]),e._v(" "),s("ul",[s("li",[e._v("scaffolding: "),s("code",[e._v("sam init")])]),e._v(" "),s("li",[e._v("build: "),s("code",[e._v("sam build")])]),e._v(" "),s("li",[e._v("package: "),s("code",[e._v("sam package --template-file template.yaml --s3-bucket mybucket --output-template-file packaged.yaml")])]),e._v(" "),s("li",[e._v("deploy (암시적으로 package 포함)\n"),s("ul",[s("li",[s("code",[e._v("sam deploy --guided")])]),e._v(" "),s("li",[s("code",[e._v("sam deploy --template-file ./packaged.yaml --stack-name mystack --capabilities CAPABILITY_IAM")])])])]),e._v(" "),s("li",[e._v("run local\n"),s("ul",[s("li",[e._v("generate event: "),s("code",[e._v("sam local generate-event [SERVICE] --help")])]),e._v(" "),s("li",[e._v("run lambda endpoint: "),s("code",[e._v("sam local start-lambda")]),e._v(" (AWS CLI 혹은 SDK로 호출)")]),e._v(" "),s("li",[e._v("run api gateway: "),s("code",[e._v("sam local start-api")])]),e._v(" "),s("li",[e._v("invoke function: "),s("code",[e._v('sam local invoke "HelloWorldFunction" -e event.json')])]),e._v(" "),s("li",[e._v("env var: "),s("code",[e._v("sam local <start-api|invoke> --env-vars env.json")])])])]),e._v(" "),s("li",[e._v("cleanup: "),s("code",[e._v("aws cloudformation delete-stack --stack-name <name> --region <region>")])])]),e._v(" "),s("h3",{attrs:{id:"sam-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sam-permissions"}},[e._v("#")]),e._v(" SAM permissions")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/sam-permissions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/serverless-application-model/latest/developerguide/sam-permissions.html"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://aws.amazon.com/ko/blogs/compute/simplifying-serverless-permissions-with-aws-sam-connectors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aws.amazon.com/ko/blogs/compute/simplifying-serverless-permissions-with-aws-sam-connectors/"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"using-aws-lambda-with-amazon-sns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-aws-lambda-with-amazon-sns"}},[e._v("#")]),e._v(" Using AWS Lambda with Amazon SNS")]),e._v(" "),s("p",[e._v("CloudWatch -> SNS -> Lambda 메시지 처리")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-sns.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-sns.html"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"serverless-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless-framework"}},[e._v("#")]),e._v(" Serverless Framework")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://serverless.com/framework/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://serverless.com/framework/docs/"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);