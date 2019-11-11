(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{297:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-virtual-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-virtual-machine"}},[a._v("#")]),a._v(" Java Virtual Machine")]),a._v(" "),t("h2",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[a._v("#")]),a._v(" JVM")]),a._v(" "),t("p",[a._v("자바 가상 머신은 자바 바이트 코드를 실행하는 환경이다. 자바 바이트코드는 자바와 기계어 사이의 중간 언어이다.\n자바 바이트코드는 JVM이 해석하므로 플랫폼 의존적이지 않다.")]),a._v(" "),t("h2",{attrs:{id:"jvm-특징"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-특징"}},[a._v("#")]),a._v(" JVM 특징")]),a._v(" "),t("ul",[t("li",[a._v("스택 기반의 가상 머신: 대표적인 컴퓨터 아키텍처인 인텔 x86 아키텍처나 ARM 아키텍처와 같은 하드웨어가 레지스터 기반으로 동작하는 데 비해 JVM은 스택 기반으로 동작한다.")]),a._v(" "),t("li",[a._v("심볼릭 레퍼런스: 기본 자료형(primitive data type)을 제외한 모든 타입(클래스와 인터페이스)을 명시적인 메모리 주소 기반의 레퍼런스가 아니라 심볼릭 레퍼런스를 통해 참조한다.")]),a._v(" "),t("li",[a._v("가비지 컬렉션(garbage collection): 클래스 인스턴스는 사용자 코드에 의해 명시적으로 생성되고 가비지 컬렉션에 의해 자동으로 파괴된다.")]),a._v(" "),t("li",[a._v("기본 자료형을 명확하게 정의하여 플랫폼 독립성 보장: C/C++ 등의 전통적인 언어는 플랫폼에 따라 int 형의 크기가 변한다. JVM은 기본 자료형을 명확하게 정의하여 호환성을 유지하고 플랫폼 독립성을 보장한다.")]),a._v(" "),t("li",[a._v("네트워크 바이트 오더(network byte order): 자바 클래스 파일은 네트워크 바이트 오더를 사용한다. 인텔 x86 아키텍처가 사용하는 리틀 엔디안이나, RISC 계열 아키텍처가 주로 사용하는 빅 엔디안 사이에서 플랫폼 독립성을 유지하려면 고정된 바이트 오더를 유지해야 하므로 네트워크 전송 시에 사용하는 바이트 오더인 네트워크 바이트 오더를 사용한다. 네트워크 바이트 오더는 빅 엔디안이다.")])]),a._v(" "),t("h2",{attrs:{id:"바이트코드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#바이트코드"}},[a._v("#")]),a._v(" 바이트코드")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://d2.naver.com/helloworld/1230",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://d2.naver.com/helloworld/1230"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("자바 소스코드를 자바 바이트 코드로 컴파일 하면 자바 클래스 파일이 생성된다.\n바이트코드는 바이너리 파일이므로 이를 읽기 위해서 disassembler를 사용할 수 있다.")]),a._v(" "),t("h3",{attrs:{id:"메소드-바이트코드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메소드-바이트코드"}},[a._v("#")]),a._v(" 메소드 바이트코드")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" aload_0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" getfield #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Field admin:Lcom/nhn/user/UserAdmin;")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" aload_1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" invokevirtual #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//Method com/nhn/user/UserAdmin.addUser:(Ljava/lang/String;)V")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("바이트코드는 "),t("code",[a._v("위치: 바이트코드 명령어(OpCode) #피연산자")]),a._v("로 구성된다.")]),a._v(" "),t("p",[a._v("바이트 코드 명령어는 1 바이트의 바이트 번호로 표현되므로 OpCode는 최대 256개가 된다.")]),a._v(" "),t("p",[a._v("OpCode들은 "),t("code",[a._v("aload_0 = 0x2a, getfield = 0xb4, invokevirtual = 0xb6")]),a._v("로 표현되며\n위의 코드를 실제로 보면 "),t("code",[a._v("2a b4 00 0f 2b b6 00 17 57 b1")]),a._v(" 와 같이 표기된다")]),a._v(" "),t("p",[a._v("피연산자가 필요없는 OpCode는 바로 다음 바이트가 다음 명령어의 OpCode가 되지만, 피연산자가 필요한 경우 다음 바이트는 피연산자가 위치한다.\n위의 경우 "),t("code",[a._v("getfield")]),a._v("와 "),t("code",[a._v("invokevirtual")]),a._v("은 각각 2바이트의 피연산자를 가지며(피연산 명령어의 위치), 따라서 다음 OpCode와의 간격이 2바이트가 된다.")]),a._v(" "),t("h3",{attrs:{id:"클래스-바이트코드"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#클래스-바이트코드"}},[a._v("#")]),a._v(" 클래스 바이트코드")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassFile")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\nu4 magic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스 파일 구분자, 항상 0xCAFEBABE임")]),a._v("\nu2 minor_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" u2 major_version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 버전정보; 하위호환성 유지가 중요함")]),a._v("\nu2 constant_pool_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" cp_info constant_pool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("constant_pool_count"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 상수 풀 정보")]),a._v("\nu2 access_flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스 modifier 정보")]),a._v("\nu2 this_class"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" u2 super_class"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// this, super에 해당하는 클래스의 상수풀 내의 인덱스")]),a._v("\nu2 interfaces_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" u2 interfaces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("interfaces_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스가 구현한 인터페이스 개수와, 인터페이스에 대한 상수풀 내의 인덱스")]),a._v("\nu2 fields_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" field_info fields"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("fields_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스 필드 개수와 정보")]),a._v("\nu2 methods_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" method_info methods"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("methods_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스의 메소드 개수와 정보")]),a._v("\nu2 attributes_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" attribute_info attributes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("attributes_count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 클래스내의 속성 개수와 정보")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Compiled")]),a._v(" from "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"UserService.java"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nhn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserService")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SourceFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"UserService.java"')]),a._v("\nminor version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nmajor version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Constant")]),a._v(" pool"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// com/nhn/service/UserService")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Asciz")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("nhn"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("service"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// java/lang/Object")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Asciz")]),a._v(" java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Asciz")]),a._v(" admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ... 후략")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br")])]),t("h2",{attrs:{id:"jvm-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-구조"}},[a._v("#")]),a._v(" JVM 구조")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/pravusid/TIL/master/Java/img/jvm-struct.png",alt:"JVM"}})]),a._v(" "),t("p",[a._v("Class Loader가 컴파일된 자바 바이트코드를 Runtime Data Area에 불러오고 Execution Engine이 바이트코드를 실행한다.")]),a._v(" "),t("h3",{attrs:{id:"class-loader-클래스-로더"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-loader-클래스-로더"}},[a._v("#")]),a._v(" Class Loader(클래스 로더)")]),a._v(" "),t("p",[a._v("자바는 런타임에 클래스를 처음으로 참조할 때 해당 클래스를 로드하고 링크하는데, JVM의 클래스 로더가 동적로드를 담당한다.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("계층 구조")]),a._v(" "),t("ul",[t("li",[a._v("클래스 로더끼리 부모-자식 관계를 이루어 계층 구조로 생성된다")]),a._v(" "),t("li",[a._v("최상위 클래스 로더는 부트스트랩 클래스 로더(Bootstrap Class Loader)")])])]),a._v(" "),t("li",[t("p",[a._v("위임 모델")]),a._v(" "),t("ul",[t("li",[a._v("계층 구조를 바탕으로 클래스 로더끼리 로드를 위임하는 구조로 동작한다")])])]),a._v(" "),t("li",[t("p",[a._v("가시성(visibility) 제한")]),a._v(" "),t("ul",[t("li",[a._v("하위 클래스 로더는 상위 클래스 로더의 클래스를 찾을 수 있지만, 상위 클래스 로더는 하위 클래스 로더의 클래스를 찾을 수 없다")])])]),a._v(" "),t("li",[t("p",[a._v("언로드 불가")]),a._v(" "),t("ul",[t("li",[a._v("클래스 로더는 클래스를 로드할 수는 있지만 언로드할 수는 없다")]),a._v(" "),t("li",[a._v("언로드 대신, 현재 클래스 로더를 삭제하고 새로운 클래스 로더를 생성할 수 있다")])])])]),a._v(" "),t("p",[a._v("각 클래스 로더는 로드된 클래스들을 보관하는 네임스페이스(namespace)를 갖는다.\n클래스를 로드할 때 이미 로드된 클래스인지 확인하기 위해 네임스페이스에 보관된 FQCN(Fully Qualified Class Name)을 기준으로 클래스를 찾는다.\n비록 FQCN이 같더라도 네임스페이스가 다르면(다른 클래스 로더가 로드한 클래스) 다른 클래스로 간주한다.")]),a._v(" "),t("p",[a._v("로더가 클래스 로드를 요청받으면, 이전에 로드된 클래스인지 클래스 로더 캐시를 확인하고, 없으면 상위 클래스 로더를 거슬러 올라가며 확인한다.\n부트스트랩 클래스 로더까지 확인해도 없으면 요청받은 클래스 로더가 파일 시스템에서 해당 클래스를 찾는다.")]),a._v(" "),t("p",[a._v("클래스 로더 위임모델의 계층은 다음과 같다")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("부트스트랩 클래스 로더")]),a._v(" "),t("ul",[t("li",[a._v("JVM을 기동할 때 생성되며, Object 클래스들을 비롯하여 자바 API들을 로드한다")]),a._v(" "),t("li",[a._v("다른 클래스 로더와 달리 자바가 아니라 네이티브 코드로 구현되어 있다")])])]),a._v(" "),t("li",[t("p",[a._v("익스텐션 클래스 로더(Extension Class Loader)")]),a._v(" "),t("ul",[t("li",[a._v("기본 자바 API를 제외한 확장 클래스들을 로드한다. 다양한 보안 확장 기능 등을 여기에서 로드하게 된다.")]),a._v(" "),t("li",[a._v("부트스트랩 클래스 로더와 익스텐션 클래스 로더는 JVM 자체의 구성 요소들을 로드하는 것이라 할 수 있다")])])]),a._v(" "),t("li",[t("p",[a._v("시스템 클래스 로더(System Class Loader)")]),a._v(" "),t("ul",[t("li",[a._v("시스템 클래스 로더는 애플리케이션의 클래스들을 로드한다")]),a._v(" "),t("li",[a._v("사용자가 지정한 $CLASSPATH 내의 클래스들을 로드한다.")])])]),a._v(" "),t("li",[t("p",[a._v("사용자 정의 클래스 로더(User-Defined Class Loader)")]),a._v(" "),t("ul",[t("li",[a._v("애플리케이션 사용자가 직접 코드 상에서 생성해서 사용하는 클래스 로더이다.")])])])]),a._v(" "),t("p",[a._v("웹 애플리케이션 서버(WAS)와 같은 프레임워크는 웹 애플리케이션들, 엔터프라이즈 애플리케이션들이 서로 독립적으로 동작하게 하기 위해 사용자 정의 클래스 로더를 사용한다.")]),a._v(" "),t("p",[a._v("클래스 로더가 아직 로드되지 않은 클래스를 찾으면, 다음과 같은 과정을 거쳐 클래스를 로드하고 링크하고 초기화한다.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("로드")]),a._v(" "),t("ul",[t("li",[a._v("클래스를 파일에서 가져와서 JVM의 메모리에 로드한다")])])]),a._v(" "),t("li",[t("p",[a._v("검증(Verifying)")]),a._v(" "),t("ul",[t("li",[a._v("읽어 들인 클래스가 자바 언어 명세(Java Language Specification) 및 JVM 명세에 명시된 대로 잘 구성되어 있는지 검사한다")]),a._v(" "),t("li",[a._v("클래스 로드의 전 과정 중에서 가장 복잡하고 시간이 많이 걸린다")])])]),a._v(" "),t("li",[t("p",[a._v("준비(Preparing)")]),a._v(" "),t("ul",[t("li",[a._v("클래스가 필요로 하는 메모리를 할당하고, 클래스에서 정의된 필드, 메소드, 인터페이스들을 나타내는 데이터 구조를 준비한다")])])]),a._v(" "),t("li",[t("p",[a._v("분석(Resolving)")]),a._v(" "),t("ul",[t("li",[a._v("클래스의 상수 풀 내 모든 심볼릭 레퍼런스를 다이렉트 레퍼런스로 변경한다")])])]),a._v(" "),t("li",[t("p",[a._v("초기화")]),a._v(" "),t("ul",[t("li",[a._v("클래스 변수들을 적절한 값으로 초기화한다. (static initializer들을 수행하고, static 필드들을 설정된 값으로 초기화)")])])])]),a._v(" "),t("h3",{attrs:{id:"runtime-data-area"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runtime-data-area"}},[a._v("#")]),a._v(" Runtime Data Area")]),a._v(" "),t("p",[a._v("런타임 데이터 영역은 JVM이라는 프로그램이 운영체제 위에서 실행되면서 할당받는 메모리 영역이다.")]),a._v(" "),t("ul",[t("li",[a._v("런타임 데이터 영역은 6개의 영역")]),a._v(" "),t("li",[a._v("쓰레드별 생성: PC 레지스터(PC Register), JVM 스택(JVM Stack), 네이티브 메소드 스택(Native Method Stack)")]),a._v(" "),t("li",[a._v("모든 쓰레드 공유: 힙(Heap), 메소드 영역(Method Area), 런타임 상수 풀(Runtime Constant Pool)")])]),a._v(" "),t("h4",{attrs:{id:"pc-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pc-register"}},[a._v("#")]),a._v(" PC Register")]),a._v(" "),t("p",[a._v("각 Thread마다 하나씩 존재하며 현재 수행중인 Java Virtual Machine Instruction의 주소를 갖는다.")]),a._v(" "),t("p",[a._v("PC Register는 Native Pointer 혹은 Method Bytecode 값을 가지며, Native Method를 수행할 경우 JVM을 거치지 않고 API를 통해 바로 수행한다.")]),a._v(" "),t("h4",{attrs:{id:"jvm-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-stack"}},[a._v("#")]),a._v(" JVM Stack")]),a._v(" "),t("p",[a._v("JVM 스택은 각 Thread마다 하나씩 존재하며 Thread가 시작될 때 생성된다. Stack Frame이라는 구조체를 저장하는 스택이다.\n예외 발생 시 printStackTrace() 등의 메소드로 보여주는 Stack Trace의 각 라인은 하나의 스택 프레임을 표현한다.")]),a._v(" "),t("h5",{attrs:{id:"스택-프레임-stack-frame"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#스택-프레임-stack-frame"}},[a._v("#")]),a._v(" 스택 프레임 (Stack Frame)")]),a._v(" "),t("p",[a._v("JVM 내에서 메소드가 수행될 때마다 하나의 스택 프레임이 생성되어 해당 스레드의 JVM 스택에 추가되고 메소드가 종료되면 스택 프레임이 제거된다.\n각 스택 프레임은 Local Variable Array, Operand Stack, 현재 실행 중인 메소드가 속한 클래스의 런타임 상수 풀에 대한 레퍼런스를 갖는다.\n지역 변수 배열, 피연산자 스택의 크기는 컴파일 시에 결정되기 때문에 스택 프레임의 크기도 메소드에 따라 크기가 고정된다.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("지역 변수 배열 (Local Variable Array)")]),a._v(" "),t("ul",[t("li",[a._v("index 0은 메소드가 속한 클래스 인스턴스의 this 레퍼런스")]),a._v(" "),t("li",[a._v("index 1부터는 메소드에 전달된 파라미터들이 저장됨")]),a._v(" "),t("li",[a._v("메소드 파라미터 이후에는 메소드의 지역 변수들이 저장됨")])])]),a._v(" "),t("li",[t("p",[a._v("피연산자 스택 (Operand Stack)")]),a._v(" "),t("ul",[t("li",[a._v("각 메소드는 피연산자 스택과 지역 변수 배열 사이에서 데이터를 교환하고, 다른 메소드 호출 결과를 추가하거나(push) 꺼낸다(pop)")]),a._v(" "),t("li",[a._v("피연산자 스택 공간이 얼마나 필요한지는 컴파일할 때 결정할 수 있으므로, 피연산자 스택의 크기도 컴파일 시에 결정된다")])])]),a._v(" "),t("li",[t("p",[a._v("메소드가 속한 클래스 런타임 상수풀 레퍼런스")])])]),a._v(" "),t("h4",{attrs:{id:"native-method-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-method-stack"}},[a._v("#")]),a._v(" Native method stack")]),a._v(" "),t("p",[a._v("코드가 아닌 실제 실행할 수 있는 기계어로 작성된 프로그램을 실행시키는 영역이다.\nJAVA가 아닌 다른 언어로 작성된 코드를 위한 공간이다. JAVA Native Interface를 통해 바이트 코드로 전환하여 저장하게 된다.\n일반 프로그램처럼 커널이 스택을 잡아 독자적으로 프로그램을 실행시키는 영역이다. 이 부분을 통해 C code를 실행시켜 Kernel에 접근할 수 있다.")]),a._v(" "),t("h4",{attrs:{id:"heap-힙-영역"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heap-힙-영역"}},[a._v("#")]),a._v(" Heap (힙 영역)")]),a._v(" "),t("p",[a._v("생성된 객체와 배열을 저장하는 가상 메모리 공간이다.")]),a._v(" "),t("p",[a._v("힙은 세 부분으로 나눌 수 있다")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Permanent Generation")]),a._v(" "),t("ul",[t("li",[a._v("생성된 객체 정보의 주소값이 저장된 공간이다")]),a._v(" "),t("li",[a._v("Class loader에 의해 load되는 Class, Method 등에 대한 Meta 정보가 저장되는 영역이고 JVM에 의해 사용된다")]),a._v(" "),t("li",[a._v("Reflection을 사용하여 동적으로 클래스가 로딩되는 경우에 사용된다")])])]),a._v(" "),t("li",[t("p",[a._v("New/Young 영역")]),a._v(" "),t("ul",[t("li",[a._v("Eden : 객체들이 최초로 생성되는 공간")]),a._v(" "),t("li",[a._v("Survivor 0 / 1 : Eden에서 참조되는 객체들이 저장되는 공간")])])]),a._v(" "),t("li",[t("p",[a._v("Old 영역")]),a._v(" "),t("ul",[t("li",[a._v("New area에서 일정 시간 참조된, 살아남은 객체들이 저장되는 공간")]),a._v(" "),t("li",[a._v("Eden영역에 객체가 가득차게 되면 첫번째 GC(minor GC)가 발생한다")]),a._v(" "),t("li",[a._v("Eden영역에 있는 값들을 Survivor 1 영역에 복사하고 이 영역을 제외한 나머지 영역의 객체를 삭제한다")])])])]),a._v(" "),t("h4",{attrs:{id:"method-area-class-area-static-area"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-area-class-area-static-area"}},[a._v("#")]),a._v(" Method Area (Class area / Static area)")]),a._v(" "),t("p",[a._v("클래스 정보를 처음 메모리 공간에 올릴 때 초기화되는 대상을 저장하기 위한 메모리 공간.\nJVM이 읽어 들인 각각의 클래스와 인터페이스에 대한 런타임 상수 풀, 필드와 메소드 정보, Static 변수, 메소드의 바이트코드 등을 보관한다.")]),a._v(" "),t("p",[a._v("이 공간에는 "),t("strong",[a._v("Runtime Constant Pool")]),a._v("이라는 별도의 관리 영역도 함께 존재한다.\n클래스 파일 포맷에서 constant_pool 테이블에 해당하는 영역이다.")]),a._v(" "),t("p",[a._v("각 클래스와 인터페이스의 상수뿐만 아니라, 메소드와 필드에 대한 모든 레퍼런스까지 담고 있는 테이블이다.\n즉, 어떤 메소드나 필드를 참조할 때 JVM은 런타임 상수 풀을 통해 해당 메소드나 필드의 실제 메모리상 주소를 찾아서 참조한다.")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Field Information: 멤버변수의 이름, 데이터 타입, 접근 제어자에 대한 정보")])]),a._v(" "),t("li",[t("p",[a._v("Method Information: 메소드의 이름, 리턴타입, 매개변수, 접근제어자에 대한 정보")])]),a._v(" "),t("li",[t("p",[a._v("Type Information")]),a._v(" "),t("ul",[t("li",[a._v("Class, Interface 구분")]),a._v(" "),t("li",[a._v("Type의 속성, 전체 이름")]),a._v(" "),t("li",[a._v("Super Class의 전체 이름 (Interface 이거나 Object인 경우 제외)")])])])]),a._v(" "),t("h3",{attrs:{id:"execution-engine-실행-엔진"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execution-engine-실행-엔진"}},[a._v("#")]),a._v(" Execution Engine(실행 엔진)")]),a._v(" "),t("p",[a._v("클래스 로더를 통해 JVM 내의 런타임 데이터 영역에 배치된 바이트코드는 실행 엔진에 의해 실행된다.\n실행 엔진은 자바 바이트코드를 명령어 단위로 읽어서 기계가 실행할 수 있는 형태로 변경하여 실행한다.")]),a._v(" "),t("p",[a._v("이 때 인터프리터, JIT 두 가지 방식을 사용하게 된다.")]),a._v(" "),t("h4",{attrs:{id:"interpreter-인터프리터"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interpreter-인터프리터"}},[a._v("#")]),a._v(" Interpreter(인터프리터)")]),a._v(" "),t("p",[a._v("인터프리터 방식은 자바 바이트 코드를 명령어 단위로 하나씩 읽어서 실행한다.")]),a._v(" "),t("p",[a._v("하나씩 해석하고 실행하기 때문에 바이트코드 하나하나의 해석은 빠른 대신 인터프리팅 결과의 실행은 느리다는 단점을 가지고 있다.\n흔히 얘기하는 인터프리터 언어의 단점을 그대로 가진다고 볼 수 있다.")]),a._v(" "),t("p",[a._v("바이트코드라는 '언어'는 기본적으로 인터프리터 방식으로 동작한다.")]),a._v(" "),t("h4",{attrs:{id:"jit-just-in-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jit-just-in-time"}},[a._v("#")]),a._v(" JIT(Just-In-Time)")]),a._v(" "),t("p",[a._v("인터프리터 방식의 단점을 보완하기 위해 도입된 JIT 컴파일러이다.\n인터프리터 방식으로 실행하다가 적절한 시점에 바이트코드 전체를 컴파일하여 네이티브 코드로 변경하고,\n이후에는 해당 더 이상 인터프리팅 하지 않고 네이티브 코드로 직접 실행하는 방식이다.\n네이티브 코드는 캐시에 보관하기 때문에 한 번 컴파일된 코드는 빠르게 수행하게 된다.")]),a._v(" "),t("p",[a._v("JIT 컴파일러를 통하면 바이트코드를 인터프리팅하는 것보다 오래걸리므로, 한 번만 실행되는 코드라면 컴파일하지 않고 인터프리팅하는 것이 유리하다.\n따라서 JIT 컴파일러를 사용하는 JVM들은 내부적으로 해당 메소드가 얼마나 자주 수행되는지 체크하고, 일정 정도를 넘을 때에만 컴파일을 수행한다.")]),a._v(" "),t("h4",{attrs:{id:"garbage-collector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collector"}},[a._v("#")]),a._v(" Garbage collector")]),a._v(" "),t("p",[a._v("Java에서는 개발자가 프로그램 코드로 메모리를 명시적으로 해제하지 않기 때문에\n가비지 컬렉터(Garbage Collector)가 더 이상 필요 없는 (쓰레기) 객체를 찾아 지우는 작업을 한다.")])])}),[],!1,null,null,null);s.default=n.exports}}]);