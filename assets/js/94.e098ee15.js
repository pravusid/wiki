(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{297:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"npm-node-js-package-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-node-js-package-manager"}},[s._v("#")]),s._v(" npm (node.js package manager)")]),s._v(" "),t("h2",{attrs:{id:"npm-기초명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-기초명령어"}},[s._v("#")]),s._v(" npm 기초명령어")]),s._v(" "),t("h3",{attrs:{id:"npm-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install"}},[s._v("#")]),s._v(" npm install")]),s._v(" "),t("p",[t("code",[s._v("npm install --only=production")]),s._v(" (or "),t("code",[s._v("--only=prod")]),s._v("): devDependencies 설치하지 않음")]),s._v(" "),t("blockquote",[t("p",[s._v("The npm install command installs package files based on dependencies and devDependencies in package.json.")])]),s._v(" "),t("h3",{attrs:{id:"npm-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-ci"}},[s._v("#")]),s._v(" npm ci")]),s._v(" "),t("p",[s._v("npm 5.7.0 이상 사용가능한 커맨드")]),s._v(" "),t("blockquote",[t("p",[s._v("package-lock.json takes precedence over package.json for npm ci.")])]),s._v(" "),t("p",[t("code",[s._v("npm ci")]),s._v("는 "),t("code",[s._v("package-lock.json")]),s._v(" 파일을 우선으로 하여 패키지를 설치함")]),s._v(" "),t("blockquote",[t("p",[s._v("When you run ci command, all of the node_modules folder installed by npm is deleted by default, and package is reinstalled based on package-lock.json.")])]),s._v(" "),t("h3",{attrs:{id:"version-in-package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-in-package-json"}},[s._v("#")]),s._v(" version in "),t("code",[s._v("package.json")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/misc/semver"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("code",[s._v("[major, minor, patch]")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("version")]),s._v(": 정확히 일치하는 버전")]),s._v(" "),t("li",[t("code",[s._v(">version")]),s._v(": 특정 버전 초과")]),s._v(" "),t("li",[t("code",[s._v(">=version")]),s._v(": 특정 버전 이상")]),s._v(" "),t("li",[t("code",[s._v("<version")]),s._v(": 특정 버전 미만")]),s._v(" "),t("li",[t("code",[s._v("<=version")]),s._v(": 특정 버전 이하")]),s._v(" "),t("li",[t("code",[s._v("~version")]),s._v(": (tilde) minor 있으면 patch 변경가능, minor 없으면 minor 변경가능, m.m.p 인 경우 해당 버전 이상")]),s._v(" "),t("li",[t("code",[s._v("^version")]),s._v(": (caret) m.m.p 버전에서 0이 아닌 가장 왼쪽 버전은 변경 불가, m.m.p 인 경우 해당 버전 이상")]),s._v(" "),t("li",[t("code",[s._v("1.2.x")]),s._v(": 1.2.0, 1.2.1, etc ... 그러나 1.3.0 불가능")]),s._v(" "),t("li",[t("code",[s._v("http://...")]),s._v(": "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#urls-as-dependencies",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/files/package.json#urls-as-dependencies"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("*")]),s._v(": 아무 버전이나 가능")]),s._v(" "),t("li",[t("code",[s._v('""')]),s._v(": 비어있는 문자열 "),t("code",[s._v("*")]),s._v("와 같음")]),s._v(" "),t("li",[t("code",[s._v("version1 - version2")]),s._v(": between 버전1 and 버전2")]),s._v(" "),t("li",[t("code",[s._v("range1 || range2")]),s._v(": 두 버전 범위중 하나")]),s._v(" "),t("li",[t("code",[s._v("git...")]),s._v(": "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#git-urls-as-dependencies",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/files/package.json#git-urls-as-dependencies"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("user/repo")]),s._v(": "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#github-urls",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/files/package.json#github-urls"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("tag")]),s._v(": "),t("a",{attrs:{href:"https://docs.npmjs.com/cli/dist-tag",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/cli/dist-tag"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("code",[s._v("path/path/path")]),s._v(": "),t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json#local-paths",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/files/package.json#local-paths"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"global-modules-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-modules-확인"}},[s._v("#")]),s._v(" global modules 확인")]),s._v(" "),t("p",[t("code",[s._v("npm ls -g --depth=0")])]),s._v(" "),t("h3",{attrs:{id:"의존성-추가"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#의존성-추가"}},[s._v("#")]),s._v(" 의존성 추가")]),s._v(" "),t("p",[s._v("운영이 아닌 개발 단계에서만 필요한 의존성 모듈들은 devDependencies로 설치")]),s._v(" "),t("p",[s._v("peerDependencies는 현재 모듈과 다른 모듈간의 호환성 표시 (npm install시 node_modules에 설치되지 않음)")]),s._v(" "),t("p",[s._v("peer dependencies 확인: "),t("code",[s._v('npm info "패키지명@버전" peerDependencies')])]),s._v(" "),t("ol",[t("li",[t("code",[s._v("npm install")]),s._v(": ./node_modules 패키지 설치")]),s._v(" "),t("li",[t("code",[s._v("npm install --save / --save-dev(-D)")]),s._v(" ./node_modules에 패키지 설치 + ./package.json 업데이트")])]),s._v(" "),t("h2",{attrs:{id:"yarn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" yarn")]),s._v(" "),t("h3",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[s._v("우분투/데비안에서 설치")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sS https://dl.yarnpkg.com/debian/pubkey.gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb https://dl.yarnpkg.com/debian/ stable main"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/apt/sources.list.d/yarn.list\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Note: Ubuntu 17.04 comes with cmdtest installed by default. If you’re getting errors from installing yarn, you may want to run sudo apt remove cmdtest first. Refer to this for more information.")]),s._v(" "),t("p",[t("strong",[s._v("설치이후 global package binaries 경로를 환경변수로 설정해주어야 한다. 기본경로는 "),t("code",[s._v("~/.yarn")]),s._v("이고 경로를 변경하면 "),t("code",[s._v("경로/bin")]),s._v("에 바이너리가 연결된다")])]),s._v(" "),t("p",[s._v("yarn global bin will output the location where Yarn will install symlinks to your installed binaries. You can configure the base location with yarn config set prefix "),t("code",[s._v("<filepath>")]),s._v(".")]),s._v(" "),t("h3",{attrs:{id:"기본-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-명령어"}},[s._v("#")]),s._v(" 기본 명령어")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("yarn")]),s._v(" == "),t("code",[s._v("npm install")]),s._v(" packages.json에 명시된 의존성 패키지를 다운로드/설치 한다.")]),s._v(" "),t("li",[t("code",[s._v("yarn (global) add/bin/list/remove/upgrade [--prefix]")])])]),s._v(" "),t("h3",{attrs:{id:"yarn-add-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-add-prefix"}},[s._v("#")]),s._v(" yarn add prefix")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("--dev")]),s._v("(-D) : devDependencies (개발용)")]),s._v(" "),t("li",[t("code",[s._v("--peer")]),s._v("(-P) : peerDependencies (호환성이 있음을 명시: 의존성이 있는것은 아님)")]),s._v(" "),t("li",[t("code",[s._v("--optional")]),s._v("(-O) : optionalDependencies에")]),s._v(" "),t("li",[t("code",[s._v("--exact")]),s._v("(-E) : 명시한 버전과 정확한 경우에만 설치")]),s._v(" "),t("li",[t("code",[s._v("--tilde")]),s._v("(-T) : 명시한 버전과 같은 minor 버전의 최신버전 설치 (버전 세 번째 자리)")])]),s._v(" "),t("h2",{attrs:{id:"package-publishing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-publishing"}},[s._v("#")]),s._v(" package publishing")]),s._v(" "),t("p",[s._v("TS 기준")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/files/package.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/files/package.json"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("code",[s._v("package.json")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm install 되고 난 후 실행됨")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prepare"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run build"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm publish 직전 실행됨")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prepublishOnly"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm run lint"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib/index.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib/index.d.ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// publishing후 module에 포함할 파일 경로")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"files"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib/**/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cli를 포함하고 있다면")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"my-package"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./cli.js"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"homepage"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://pravusid.kr"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/pravusid/my-package.git"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"bugs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/pravusid/my-package/issues"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);