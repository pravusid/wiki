(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{525:function(s,a,t){"use strict";t.r(a);var r=t(28),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mono-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mono-repository"}},[s._v("#")]),s._v(" Mono Repository")]),s._v(" "),t("p",[s._v("Mono Repository(이하 monorepo)는 관련 패키지들을 단일 저장소에서 함께 관리하는 방식이다.")]),s._v(" "),t("h2",{attrs:{id:"monorepo-in-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-in-nodejs"}},[s._v("#")]),s._v(" monorepo in NodeJS")]),s._v(" "),t("ul",[t("li",[s._v("NodeJS 환경의 monorepo 툴은 여러가지가 있지만 주로 node package manager(npm, yarn, pnpm), lerna 등을 사용한다")]),s._v(" "),t("li",[s._v("MS의 "),t("a",{attrs:{href:"https://rushjs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rush by TypeScript"),t("OutboundLink")],1),s._v(", Google의 "),t("a",{attrs:{href:"https://bazel.build/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bazel by Java"),t("OutboundLink")],1),s._v(" 등을 사용할 수도 있다")])]),s._v(" "),t("p",[s._v("mororepo 툴이 수행하는 주요기능은 다음과 같다")]),s._v(" "),t("ul",[t("li",[s._v("버전관리 (version)")]),s._v(" "),t("li",[s._v("배포관리 (publish)")]),s._v(" "),t("li",[s._v("스크립트 실행 (run)")]),s._v(" "),t("li",[s._v("의존성관리 (bootstrap / hoist, symlink)")])]),s._v(" "),t("blockquote",[t("p",[s._v("monorepo 내의 node_modules 중복이 많아질 수록 lerna의 성능이 좋지 않다\n-- "),t("a",{attrs:{href:"https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"pnpm-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pnpm-workspace"}},[s._v("#")]),s._v(" pnpm workspace")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://pnpm.io/workspaces",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pnpm.io/workspaces"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"yarn-classic-workspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-classic-workspace"}},[s._v("#")]),s._v(" yarn classic workspace")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/workspaces/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://classic.yarnpkg.com/en/docs/workspaces/"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/cli/workspace",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://classic.yarnpkg.com/en/docs/cli/workspace"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/cli/workspaces",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://classic.yarnpkg.com/en/docs/cli/workspaces"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"lerna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna"}},[s._v("#")]),s._v(" lerna")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/lerna/lerna"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("주요 명령어는 다음과 같다")]),s._v(" "),t("h3",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/init#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("init"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Create a new Lerna repo or upgrade an existing repo to the current version of Lerna")])]),s._v(" "),t("h3",{attrs:{id:"bootstrap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("bootstrap"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Bootstrap the packages in the current Lerna repo. Installs all of their dependencies and links any cross-dependencies.")])]),s._v(" "),t("h3",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/version#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("version"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Bump version of packages changed since the last release.\nIdentifies packages that have been updated since the previous tagged release")])]),s._v(" "),t("h3",{attrs:{id:"publish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/publish#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("publish"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Publish packages in the current project")])]),s._v(" "),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/lerna/lerna/tree/main/commands/run#readme",target:"_blank",rel:"noopener noreferrer"}},[s._v("run"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("Run an npm script in each package that contains that script")])]),s._v(" "),t("h2",{attrs:{id:"monorepo-적용-w-lerna-github-package-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#monorepo-적용-w-lerna-github-package-registry"}},[s._v("#")]),s._v(" monorepo 적용 (w/ lerna, github package registry)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://viewsource.io/publishing-and-installing-private-github-packages-using-yarn-and-lerna/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://viewsource.io/publishing-and-installing-private-github-packages-using-yarn-and-lerna/"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init\nlerna init --independent\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("프로젝트 루트에 "),t("code",[s._v("package.json")]),s._v(" 파일과 "),t("code",[s._v("lerna.json")]),s._v(" 설정파일이 생성된다")]),s._v(" "),t("h3",{attrs:{id:"package-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[s._v("#")]),s._v(" "),t("code",[s._v("package.json")])]),s._v(" "),t("h4",{attrs:{id:"root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[s._v("#")]),s._v(" root")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"monorepo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"private"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"workspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/core"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("workspace 목록을 별도 표기하여 빌드 실행 우선순위를 지정할 수 있음\n(이 경우 lerna 커맨드 실행시 패키지 중복오류가 발생할 수 있으므로 전체 경로("),t("code",[s._v("*")]),s._v(")만 사용하고 스크립트 실행등은 lerna run 사용)")]),s._v(" "),t("h4",{attrs:{id:"in-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-packages"}},[s._v("#")]),s._v(" in packages")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json#repository",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.npmjs.com/cli/v6/configuring-npm/package-json#repository"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("패키지 이름은 "),t("code",[s._v("@scope")]),s._v(" + 워크스페이스 prefix 경로("),t("code",[s._v("packages/*")]),s._v(")를 제외한 패키지로 정의하고")]),s._v(" "),t("p",[s._v("각 패키지의 "),t("code",[s._v("package.json")]),s._v(" 파일에 다음 내용을 추가한다")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@scope/package-name-without-workspaces-prefix"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh://git@github.com/idpravus/monorepo.git"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"directory"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"packages/package-name-without-workspaces-prefix"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publishConfig"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://npm.pkg.github.com/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  ...\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"lerna-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lerna-json"}},[s._v("#")]),s._v(" "),t("code",[s._v("lerna.json")])]),s._v(" "),t("p",[s._v("다음 내용을 추가한다")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"npmClient"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yarn"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"useWorkspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"command"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"release"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ignoreChanges"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.spec.ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.md"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"publish"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://npm.pkg.github.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"allowBranch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[s._v("#")]),s._v(" TypeScript")]),s._v(" "),t("p",[s._v("타입스크립트 컴파일러 설정과 type export 경로 처리에 주의해야 한다")]),s._v(" "),t("h3",{attrs:{id:"사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[s._v("#")]),s._v(" 사용")]),s._v(" "),t("p",[s._v("다른 모듈을 사용하기 위해서는 "),t("code",[s._v("Peer Dependencies")]),s._v(" 또는 "),t("code",[s._v("Dependencies")]),s._v(" 선언한 뒤 "),t("code",[s._v("import")]),s._v(" 해서 사용한다")])])}),[],!1,null,null,null);a.default=e.exports}}]);