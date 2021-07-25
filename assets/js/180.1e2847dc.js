(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{539:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"rust-package-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rust-package-module"}},[s._v("#")]),s._v(" Rust Package, Module")]),s._v(" "),t("p",[s._v("프로젝트가 커지면 코드를 여러 개의 파일과 모듈로 나누어 관리해야 한다.")]),s._v(" "),t("p",[s._v("범위(scope)란 일종의 중첩된 컨텍스트로, 특정 범위안에 작성된 코드는 그 범위 내에서만 유효한 여러 이름을 사용한다.")]),s._v(" "),t("p",[s._v("러스트는 코드의 구조를 관리하기 위한 기능을 제공한다.\n이러한 기능을 합쳐서 모듈 시스템이라고 부르며 다음 개념들이 포함된다.")]),s._v(" "),t("ul",[t("li",[s._v("패키지: 크레이트를 빌드, 테스트, 공유할 수 있는 카고의 기능")]),s._v(" "),t("li",[s._v("크레이트: 라이브러리나 실행파일을 생성하는 모듈의 트리")]),s._v(" "),t("li",[s._v("모듈과 use: 코드의 구조와 범위, 그리고 경로의 접근성을 제어하는 기능")]),s._v(" "),t("li",[s._v("경로(path): 구조체, 함수 혹은 모듈 등의 이름을 결정하는 방식")])]),s._v(" "),t("h2",{attrs:{id:"패키지와-크레이트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패키지와-크레이트"}},[s._v("#")]),s._v(" 패키지와 크레이트")]),s._v(" "),t("p",[s._v("크레이트는 하나의 바이너리 혹은 라이브러리이다.\n크레이트 루트(root)는 러스트 컴파일러가 컴파일을 시작해서 크레이트의 루트 모듈을 만들어내는 소스파일이다.")]),s._v(" "),t("p",[s._v("패키지는 이 크레이트를 빌드하는 방법을 서술하는 "),t("code",[s._v("Cargo.toml")]),s._v(" 파일을 갖는다.")]),s._v(" "),t("p",[s._v("패키지에 포함할 수 있는 아이템을 결정하는 데는 몇 가지 규칙이 있다.")]),s._v(" "),t("ul",[t("li",[s._v("패키지는 하나 이상의 라이브러리 크레이트를 포함하거나 아예 포함하지 않을 수 있다.")]),s._v(" "),t("li",[s._v("또한 바이너리 크레이트도 원하는 만큼 포함할 수 있지만, 최소한 하나의 (라이브러리 or 바이너리)크레이트는 포함해야 한다.")])]),s._v(" "),t("p",[t("code",[s._v("cargo new")]),s._v(" 명령을 실행하면 "),t("code",[s._v("Cargo.toml")]),s._v(" 파일을 생성하며 패키지를 만들어 낸다.")]),s._v(" "),t("p",[s._v("이 경우 "),t("code",[s._v("src/main.rs")]),s._v(" 파일이 패키지와 같은 이름을 갖는 바이너리 크레이트 루트가 된다.")]),s._v(" "),t("p",[s._v("마찬가지로 "),t("code",[s._v("src/lib.rs")]),s._v(" 파일이 있으면 패키지와 같은 이름의 라이브러리 크레이트를 포함한다고 판단하며 해당파일을 크레이트 루트로 인식한다.")]),s._v(" "),t("p",[s._v("어떤 패키지에 "),t("code",[s._v("src/main.rs")]),s._v(" 파일과 "),t("code",[s._v("src/lib.rs")]),s._v(" 파일이 모두 있다면 라이브러리와 바이너리 크레이트를 모두 가진다는 것이며 두 크레이트 이름 모두 패키지 이름과 같다.")]),s._v(" "),t("p",[s._v("패키지의 "),t("code",[s._v("src/bin/")]),s._v(" 디렉토리에 파일을 분산해서 여러개의 바이너리 크레이트를 추가할 수도 있는데, 이때 각 디렉토리의 파일은 별도의 바이너리 크레이트가 된다.")]),s._v(" "),t("h2",{attrs:{id:"모듈을-이용한-범위와-접근성-제어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#모듈을-이용한-범위와-접근성-제어"}},[s._v("#")]),s._v(" 모듈을 이용한 범위와 접근성 제어")]),s._v(" "),t("p",[s._v("모듈(module)은 크레이트의 코드를 그룹화해서 가독성과 재사용성을 향상하는 방법이다.\n또한 외부의 코드가 사용할 수 있는지(public), 사용할 수 없는지(private)를 결정하기도 한다.")]),s._v(" "),t("p",[s._v("레스토랑 예제를 살펴보자.")]),s._v(" "),t("p",[s._v("레스토랑 구조는 접객(front of house)과 지원(back of house)로 구분한다.")]),s._v(" "),t("p",[s._v("먼저 "),t("code",[s._v("cargo new --lib restaurant")]),s._v(" 명령으로 라이브러리를 생성하고, 다음 내용으로 "),t("code",[s._v("src/lib.rs")]),s._v(" 파일을 작성한다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("front_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("seat_at_table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("serving")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("take_order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("serve_order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("take_payment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("먼저 "),t("code",[s._v("mod")]),s._v(" 키워드를 사용해 모듈을 정의한 뒤 모듈의 이름을 지정한다. 모듈 안에는 다른 모듈을 정의할 수 있다.")]),s._v(" "),t("p",[t("code",[s._v("src/main.rs")]),s._v("와 "),t("code",[s._v("src/lib.rs")]),s._v(" 파일을 크레이트 루트라고 부른다고 했다.\n그 이유는 이 두파일의 콘덴츠가 "),t("code",[s._v("crate")]),s._v("라는 이름의 모듈로 구성되며, 이 모듈은 module tree라고 부르는 크레이트의 모듈구조에서 루트역할을 하기 때문이다.")]),s._v(" "),t("h2",{attrs:{id:"경로를-이용해-모듈-트리의-아이템-참조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#경로를-이용해-모듈-트리의-아이템-참조"}},[s._v("#")]),s._v(" 경로를 이용해 모듈 트리의 아이템 참조")]),s._v(" "),t("p",[s._v("경로는 크게 두 가지 형태이다")]),s._v(" "),t("ul",[t("li",[s._v("absolute path: 크레이트 이름이나 "),t("code",[s._v("crate")]),s._v(" 리터럴을 이용해 크레이트 루트부터 시작하는 경로")]),s._v(" "),t("li",[s._v("relative apth: 현재 모듈로부터 시작하며 "),t("code",[s._v("self")]),s._v(", "),t("code",[s._v("super")]),s._v(" 혹은 현재 모듈의 식별자를 이용한다")])]),s._v(" "),t("p",[s._v("절대 및 상대 경로는 하나 혹은 그 이상의 식별자로 구성되며 각 식별자는 이중 콜론("),t("code",[s._v("::")]),s._v(")으로 구분한다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("front_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eat_at_restaurant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 절대경로")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("crate")]),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("front_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 상대경로")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("front_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("러스트에서 접근성이 동작하는 방식은 모든 아이템(함수, 메소드, 구조체, 열거자, 모듈, 상수 ...)은 비공개이고,\n부모 모듈의 아이템들은 자식 모듈의 비공개 아이템을 사용할 수 없지만 자식 모듈의 아이템은 부모 모듈의 아이템을 사용할 수 있다.")]),s._v(" "),t("h3",{attrs:{id:"pub-키워드로-경로-공개"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pub-키워드로-경로-공개"}},[s._v("#")]),s._v(" pub 키워드로 경로 공개")]),s._v(" "),t("p",[s._v("앞의 코드에서 "),t("code",[s._v("hosting")]),s._v(" 모듈과 하위의 아이템은 비공개이므로 "),t("code",[s._v("pub")]),s._v(" 키워드를 사용해야 한다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"super로-시작하는-상대경로"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#super로-시작하는-상대경로"}},[s._v("#")]),s._v(" super로 시작하는 상대경로")]),s._v(" "),t("p",[s._v("상대경로는 "),t("code",[s._v("super")]),s._v(" 키워드를 이용해 부모 모듈로부터 시작할 수도 있다")]),s._v(" "),t("p",[t("code",[s._v("super")]),s._v(" 키워드를 사용하면 나중에 코드를 다른 모듈로 이동해도 수정해야 할 코드를 최소화 할 수 있다.")]),s._v(" "),t("h3",{attrs:{id:"구조체와-열거자-공개"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#구조체와-열거자-공개"}},[s._v("#")]),s._v(" 구조체와 열거자 공개")]),s._v(" "),t("p",[t("code",[s._v("pub")]),s._v(" 키워드를 사용했을 때 구조체는 공개되지만 구조체의 필드는 여전히 비공개 상태이다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("back_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("Breakfast")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" toast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    seasonal_fruit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("반면 열거자를 공개하면 모든 열거값은 공개된다")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("back_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[s._v("Appetizer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Soup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Salad")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eat_at_restaurant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" order1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("back_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Appetizer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Soup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" order2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("back_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Appetizer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Salad")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"use-키워드로-경로를-범위로-가져오기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-키워드로-경로를-범위로-가져오기"}},[s._v("#")]),s._v(" "),t("code",[s._v("use")]),s._v(" 키워드로 경로를 범위로 가져오기")]),s._v(" "),t("p",[t("code",[s._v("use")]),s._v(" 키워드와 경로를 추가하면 마치 해당 모듈을 크레이트 루트에 정의한 것처럼 그 범위에서 유효한 이름이된다.")]),s._v(" "),t("p",[t("code",[s._v("use")]),s._v(" 키워드에 상대경로를 지정하려면 현재 범위의 이름부터 시작하는 대신 "),t("code",[s._v("self")]),s._v(" 키워드를 이용한 경로를 사용해야 한다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("front_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("front_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eat_at_restaurant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"관용적인-경로-사용하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#관용적인-경로-사용하기"}},[s._v("#")]),s._v(" 관용적인 경로 사용하기")]),s._v(" "),t("p",[s._v("일반적으로 경로 불러오기는 모듈수준까지 이루어진다.")]),s._v(" "),t("p",[s._v("구조체 열거자 혹은 다른 아이템은 전체 경로를 사용하는 것이 관례이다.")]),s._v(" "),t("h2",{attrs:{id:"as-키워드로-새로운-이름-부여"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-키워드로-새로운-이름-부여"}},[s._v("#")]),s._v(" "),t("code",[s._v("as")]),s._v(" 키워드로 새로운 이름 부여")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoResult")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("function1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Result")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("function2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("->")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoResult")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"pub-use-키워드로-이름-다시-내보내기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pub-use-키워드로-이름-다시-내보내기"}},[s._v("#")]),s._v(" "),t("code",[s._v("pub use")]),s._v(" 키워드로 이름 다시 내보내기")]),s._v(" "),t("p",[t("code",[s._v("use")]),s._v(" 키워드를 이용해 범위로 이름을 가져오면 이 이름은 새 범위에서 비공개 이름이 된다.")]),s._v(" "),t("p",[t("code",[s._v("pub use")]),s._v(" 키워드로 아이템을 현재 범위로 가져올 뿐만 아니라 다른 범위로 내보낼 수 있다.")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("front_of_house")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("crate")]),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("front_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"외부-패키지의-사용"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#외부-패키지의-사용"}},[s._v("#")]),s._v(" 외부 패키지의 사용")]),s._v(" "),t("p",[s._v("프로젝트에서 "),t("code",[s._v("rand")]),s._v(" 패키지를 사용하려면 "),t("code",[s._v("Cargo.toml")]),s._v(" 파일에 다음 코드를 추가한다")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("dependencies")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("rand")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.5.5"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("의존성이 추가되면 카고는 의존성 패키지를 "),t("code",[s._v("https://crates.io/")]),s._v("에서 내려받는다")]),s._v(" "),t("h3",{attrs:{id:"중첩-경로로-use-목록-정리"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#중첩-경로로-use-목록-정리"}},[s._v("#")]),s._v(" 중첩 경로로 "),t("code",[s._v("use")]),s._v(" 목록 정리")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),s._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("cmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Ordering")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("중첩된 경로를 이용해 위 아이템을 한 줄의 코드로 가져올 수 있다")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("cmp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Ordering")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"glob-연산자"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glob-연산자"}},[s._v("#")]),s._v(" glob 연산자")]),s._v(" "),t("p",[s._v("어떤 경로의 공개 아이템을 모두 현재 범위로 가져오려면 glob 연산자 "),t("code",[s._v("*")]),s._v("를 사용해서 경로를 지정한다")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("std"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("collections"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"모듈을-다른-파일로-분리하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#모듈을-다른-파일로-분리하기"}},[s._v("#")]),s._v(" 모듈을 다른 파일로 분리하기")]),s._v(" "),t("p",[s._v("모듈의 크기가 커지면 별도의 파일로 분리하는 것이 좋다.")]),s._v(" "),t("p",[t("code",[s._v("src/lib.rs")])]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("front_of_house")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("crate")]),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),s._v("front_of_house"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("eat_at_restaurant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hosting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")])]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("code",[s._v("src/front_of_house.rs")])]),s._v(" "),t("p",[s._v("모듈의 이름만 선언되어 있으면 본문을 모듈이름과 같은 파일에서 가져온다")]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s._v("hosting")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("src/front_of_house/hosting.rs")])]),s._v(" "),t("div",{staticClass:"language-rs line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-rs"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pub")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("add_to_waitlist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);