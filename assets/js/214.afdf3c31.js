(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{573:function(a,t,v){"use strict";v.r(t);var e=v(27),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"단위테스트-unit-test"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단위테스트-unit-test"}},[a._v("#")]),a._v(" 단위테스트 (Unit Test)")]),a._v(" "),v("p",[a._v("단위테스트는 버그를 찾기위한 방법이 아니다.\n하나의 기능에 대해 알고 있고있는 입력값을 제공하면 알고 있고있는 결과값이 출력되는지 확인하는 것이다.")]),a._v(" "),v("p",[a._v("즉, 각각의 단위들이 개별적으로 작동하는지 조사하는 것이다.")]),a._v(" "),v("h2",{attrs:{id:"단위테스트-가이드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단위테스트-가이드"}},[a._v("#")]),a._v(" 단위테스트 가이드")]),a._v(" "),v("h3",{attrs:{id:"add-get-메소드와-같이-상호-의존적인-경우의-테스트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#add-get-메소드와-같이-상호-의존적인-경우의-테스트"}},[a._v("#")]),a._v(" Add / Get 메소드와 같이 상호 의존적인 경우의 테스트")]),a._v(" "),v("p",[a._v("상호 의존적인 메소드를 분리하여 테스트하기는 어렵다.")]),a._v(" "),v("blockquote",[v("p",[a._v("Get을 하려면 Add한 결과가 필요하며, Add한 뒤 확인을 하려면 Get이 구현되어 있어야 한다.")])]),a._v(" "),v("p",[a._v("이런 메소드를 단위테스트할 때 완전한 독립성을 얻으려면 내부를 노출해야 한다.\n내부 구현을 드러내서 테스트를 하는 것은 바람직하지 않다.\n추후 내부 구현이 바뀌게 되면 의존하는 모든 테스트 케이스를 변경해야 하기 때문이다.")]),a._v(" "),v("p",[a._v("따라서 서로 의존적인(고립되어 있지 않은) 메소드를 일부로 고립시켜서 테스트하지 않는 것이 좋다.")]),a._v(" "),v("p",[a._v("다만 테스트 케이스 작성을 논리적 순서에 따라 진행하는 것이 중요하다.\n(작성 순서상 테스트되지 않은 메소드를 가져와서 사용하는 등의...)")]),a._v(" "),v("h3",{attrs:{id:"단위-테스트-케이스의-이름은-명확하고-일관되게-테스트의-의미를-반영해야-한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단위-테스트-케이스의-이름은-명확하고-일관되게-테스트의-의미를-반영해야-한다"}},[a._v("#")]),a._v(" 단위 테스트 케이스의 이름은 명확하고 일관되게 테스트의 의미를 반영해야 한다")]),a._v(" "),v("p",[a._v("테스트 케이스의 이름은 항상 테스트의 의도가 무엇인지 반영해야 한다.\n클래스나 메소드의 이름을 변경해야 하는 경우가 생길 때 테스트 케이스들의 이름이 영향을 받지 않도록 해야한다.")]),a._v(" "),v("p",[a._v("테스트 메소드 이름에 한글을 사용하는 것도 좋은 방법이다. ("),v("code",[a._v("test<테스트대상메소드>_조건_실행_결과")]),a._v(")")]),a._v(" "),v("h3",{attrs:{id:"제대로-동작하지-않는-테스트-케이스는-제거한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#제대로-동작하지-않는-테스트-케이스는-제거한다"}},[a._v("#")]),a._v(" 제대로 동작하지 않는 테스트 케이스는 제거한다")]),a._v(" "),v("p",[a._v("중복 되거나 업무 변경등의 이유로 더 이상 제대로 동작하지 않는 테스트 케이스는 제거한다.")]),a._v(" "),v("h3",{attrs:{id:"모든-상황에-대한-테스트-케이스를-만들-필요는-없다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#모든-상황에-대한-테스트-케이스를-만들-필요는-없다"}},[a._v("#")]),a._v(" 모든 상황에 대한 테스트 케이스를 만들 필요는 없다")]),a._v(" "),v("p",[a._v("요구사항에 맞는 현재 필요한 기능에 대한 테스트만 만든다.")]),a._v(" "),v("p",[a._v("물론 추가로 필요하거나 검증이 필요한 테스트의 경우 추가 하여야 한다.")]),a._v(" "),v("h3",{attrs:{id:"여러개의-실패하는-테스트-케이스를-한번에-만들지-않는다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#여러개의-실패하는-테스트-케이스를-한번에-만들지-않는다"}},[a._v("#")]),a._v(" 여러개의 실패하는 테스트 케이스를 한번에 만들지 않는다")]),a._v(" "),v("p",[a._v("작성하고 있는 하나의 클래스에 대해서는 하나의 실패하는 테스트만 유지해야 한다.")]),a._v(" "),v("p",[a._v("해당 실패를 성공시킨 이후, 다음 테스트 케이스를 작성해야 한다.")]),a._v(" "),v("h3",{attrs:{id:"하나의-테스트-케이스는-단위-기능-중-하나의-시나리오만-테스트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#하나의-테스트-케이스는-단위-기능-중-하나의-시나리오만-테스트"}},[a._v("#")]),a._v(" 하나의 테스트 케이스는 단위 기능 중 하나의 시나리오만 테스트")]),a._v(" "),v("p",[a._v("매개변수를 가지는 함수의 반환값을 검증하는 테스트를 작성한다면 다음과 같은 경우가 존재할 수 있다")]),a._v(" "),v("ol",[v("li",[a._v("첫 번째 파라미터가 널 값일 경우 예외 객체를 반환해야 한다")]),a._v(" "),v("li",[a._v("두 번째 파라미터가 널 값일 경우 예외 객체를 반환해야 한다")]),a._v(" "),v("li",[a._v("두 개의 파라미터 모두가 널 값일 경우 예외 객체를 반환해야 한다")]),a._v(" "),v("li",[a._v("파라미터가 정상 범위 안일 경우 작업 실행 후 결과 값을 반환해야 한다")])]),a._v(" "),v("p",[a._v("이를 하나의 테스트 케이스에 작성하지 않고, 분리하여 작성한다면 코드 수정 및 리팩토링시 효과적이다")]),a._v(" "),v("h3",{attrs:{id:"불필요한-검증-구문을-작성하지-않는다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#불필요한-검증-구문을-작성하지-않는다"}},[a._v("#")]),a._v(" 불필요한 검증 구문을 작성하지 않는다")]),a._v(" "),v("p",[a._v("단위 내의 모든 것에 대해 검증 구문을 작성하는 대신 테스트하려고 하는 하나의 시나리오에 집중해야 한다.\n테스트케이스 실행을 통해서 문제점을 특정하여 검증해야 하기 때문이다.")]),a._v(" "),v("p",[a._v("여러 가지를 검증해야 한다면 테스트 케이스를 나누어야 한다.")]),a._v(" "),v("h3",{attrs:{id:"각-테스트는-독립적이어야-한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#각-테스트는-독립적이어야-한다"}},[a._v("#")]),a._v(" 각 테스트는 독립적이어야 한다")]),a._v(" "),v("p",[a._v("다른 테스트에 의존적인 테스트를 작성하면 안된다.\n이러한 테스트들은 테스트의 근본적 실패 원인을 추적과 유지보수가 어렵다.")]),a._v(" "),v("p",[a._v("테스트 조건을 설정하기 위해서 @Before/@After과 같은 JUnit의 애노테이션을 사용하고,\n보다 많은 설정이 필요한 경우라면 테스트 클래스를 분리해야 한다.")]),a._v(" "),v("h3",{attrs:{id:"모든-외부-서비스와-상태들에-테스트-더블을-사용해라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#모든-외부-서비스와-상태들에-테스트-더블을-사용해라"}},[a._v("#")]),a._v(" 모든 외부 서비스와 상태들에 테스트 더블을 사용해라")]),a._v(" "),v("p",[a._v("파일 입출력, 네트워크, 데이터베이스, 콘솔 등을 사용하는 경우\n테스트 구문 실행 순서에 따라 테스트 결과가 달라지거나 외부자원의 조건에 따라 결과가 달라진다.")]),a._v(" "),v("h3",{attrs:{id:"시스템-설정-파일에-관한-단위-테스트를-작성하지-않는다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#시스템-설정-파일에-관한-단위-테스트를-작성하지-않는다"}},[a._v("#")]),a._v(" 시스템 설정 파일에 관한 단위 테스트를 작성하지 않는다")]),a._v(" "),v("p",[a._v("시스템 설정은 단위 테스트의 범위가 아니다. (설정값은 별도의 설정 파일로 분리된다)")]),a._v(" "),v("h3",{attrs:{id:"예상된-예외-사항을-테스트하는-단위-테스트-코드를-작성하라"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#예상된-예외-사항을-테스트하는-단위-테스트-코드를-작성하라"}},[a._v("#")]),a._v(" 예상된 예외 사항을 테스트하는 단위 테스트 코드를 작성하라")]),a._v(" "),v("p",[a._v("예상되는 예외상황을 검증할 때는 try/catch 구문대신 Junit이 지원하는 "),v("code",[a._v("expected")]),a._v("를 사용하라")]),a._v(" "),v("h3",{attrs:{id:"정적-변수를-테스트-클래스에-사용하지-않아야-한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#정적-변수를-테스트-클래스에-사용하지-않아야-한다"}},[a._v("#")]),a._v(" 정적 변수를 테스트 클래스에 사용하지 않아야 한다")]),a._v(" "),v("p",[a._v("테스트들 간의 독립성을 유지하기 위해 정적 변수를 사용하지 않아야 한다.\n어쩔 수 없이 사용해야 하는 경우라면 테스트 케이스마다 초기화해서 사용해야 한다.")]),a._v(" "),v("h3",{attrs:{id:"private-method에-대한-테스트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#private-method에-대한-테스트"}},[a._v("#")]),a._v(" private method에 대한 테스트")]),a._v(" "),v("p",[a._v("소스의 코드의 핵심적인 부분은 그것이 private 가시성이라도 테스트할 필요가 있다.")]),a._v(" "),v("p",[a._v("물론 많은 이견도 있다.\n특히 TDD를 하는 경우 private method는 테스트를 통과한 상태에서 리팩토링을 통해 자연스럽게 생성되는 부분이므로,\n테스트 커버리지에 포함된다고 볼 수도 있다.")]),a._v(" "),v("h3",{attrs:{id:"임의의-입력값을-넣으면-안된다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#임의의-입력값을-넣으면-안된다"}},[a._v("#")]),a._v(" 임의의 입력값을 넣으면 안된다")]),a._v(" "),v("p",[a._v("임의의 값(예를 들어 랜덤 값)을 사용한 테스트는 단위 테스트가 지향하는 명확한 입출력 검증과는 거리가 멀다")]),a._v(" "),v("p",[a._v("물론, 임의의 값을 사용하는 기능의 테스트를 작성하지 않아야 한다는 의미는 아니다.(난수 생성 조건 제어)")]),a._v(" "),v("h3",{attrs:{id:"flakiness-될-때도-있고-안될때도-있는-edge-case-에-유의해야-한다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flakiness-될-때도-있고-안될때도-있는-edge-case-에-유의해야-한다"}},[a._v("#")]),a._v(" Flakiness (될 때도 있고 안될때도 있는 edge case)에 유의해야 한다")]),a._v(" "),v("ul",[v("li",[a._v("시간에 의존적인 테스트")]),a._v(" "),v("li",[a._v("네트워크에 접근하는 테스트")]),a._v(" "),v("li",[a._v("랜덤에 의존하는 테스트")]),a._v(" "),v("li",[a._v("멀티스레딩을 사용하는 로직에 대한 테스트")]),a._v(" "),v("li",[a._v("운영체제에 따른 차이")]),a._v(" "),v("li",[a._v("부동소수점 자릿수 처리")]),a._v(" "),v("li",[a._v("정수 크기")]),a._v(" "),v("li",[a._v("기본 문자셋")])]),a._v(" "),v("h3",{attrs:{id:"테스트-케이스를-우선-작성해-본다"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#테스트-케이스를-우선-작성해-본다"}},[a._v("#")]),a._v(" 테스트 케이스를 우선 작성해 본다")]),a._v(" "),v("p",[a._v("디버깅 전 실패하는 테스트케이스를 우선 작성해본다.\n기존에 작성한 테스트케이스에 문제가 있는지 확인을 할 필요가 있다.")]),a._v(" "),v("p",[a._v("리팩토링 하기 전 코드를 깨보고 테스트케이스가 정상인지 확인해본다. (mutation testing)\n제대로 작동하는 테스트케이스가 존재해야 리팩토링이 가능하기 때문이다.")]),a._v(" "),v("h2",{attrs:{id:"mocking"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mocking"}},[a._v("#")]),a._v(" Mocking")]),a._v(" "),v("p",[a._v("검증할 클래스가 외부 자원에 종속성이 있는 경우 외부 자원을 Mocking 하여 사용할 수 있다.")]),a._v(" "),v("h3",{attrs:{id:"모의-객체의-구분"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#모의-객체의-구분"}},[a._v("#")]),a._v(" 모의 객체의 구분")]),a._v(" "),v("p",[a._v("테스트 더블은 영화의 대역을 말하는 Stunt Double이라는 용어로 부터 왔다.")]),a._v(" "),v("p",[a._v("Gerard Meszaros가 분류하고 마틴 파울러가 소개한 테스트 더블의 분류 네 가지는 다음과 같다.")]),a._v(" "),v("ul",[v("li",[a._v("Dummy: 전달되기만 하고 실제 사용되지는 않는다. 보통 파라미터 리스트를 채우는데에 사용된다.")]),a._v(" "),v("li",[a._v("Fake: 동작하는 구현이 있다. 하지만 운영시에는 사용할 수 없는 간단한 형태이다.")]),a._v(" "),v("li",[a._v("Stub: 테스트시 호출이 되면 미리 준비된 답변으로 응답하는데, 테스트시에 프로그램된 것 이외의 것에 대해서는 응답하지 않는다. 스텁은 호출에 대한 정보를 기록할 수도 있을 것이다.")]),a._v(" "),v("li",[a._v("Mock: 수신하기를 기대하는 호출의 명세(specification)인 예측으로 미리 프로그램 된 객체이다.")])]),a._v(" "),v("p",[a._v("물론 사람마다 분류방법은 다르고, 실제 사용할 때 엄밀히 구분하지 않고 Mock 이라는 용어로 통칭하는 경우가 많다.")]),a._v(" "),v("h3",{attrs:{id:"언제-mock-객체를-만들-것인가"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#언제-mock-객체를-만들-것인가"}},[a._v("#")]),a._v(" 언제 Mock 객체를 만들 것인가")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("테스트 작성을 위한 환경구축이 어려운 경우")]),a._v(" "),v("ul",[v("li",[a._v("환경구축에 시간이 걸리는 경우: DBMS 설치, 웹서버, FTP 서버가 필요한 경우 ...")]),a._v(" "),v("li",[a._v("특정 모듈을 아직 사용할 수 없어서(개발이 덜 되었다거나) 환경 구축이 되지 않는 경우")])])]),a._v(" "),v("li",[v("p",[a._v("테스트가 특정 경우나 순간에 의존적인 경우")]),a._v(" "),v("ul",[v("li",[a._v("네트워크 Timeout 처리를 구현하는 경우, 특정 시도에 예외 발생을 유도하려면 Mocking이 필요하다.")]),a._v(" "),v("li",[a._v("파일 I/O 작업이 있을 때 데이터가 부정확한 처리를 하는 경우를 처리하는 문제")])])]),a._v(" "),v("li",[v("p",[a._v("테스트 시간이 오래 걸리는 경우")]),a._v(" "),v("ul",[v("li",[a._v("특정 모듈 호출시 호출 및 처리 시간이 많이 걸리는 경우")])])])]),a._v(" "),v("h3",{attrs:{id:"obvious-abuses"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#obvious-abuses"}},[a._v("#")]),a._v(" Obvious abuses")]),a._v(" "),v("h4",{attrs:{id:"using-partial-mock"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#using-partial-mock"}},[a._v("#")]),a._v(" Using partial Mock")]),a._v(" "),v("p",[a._v("Dependency를 Totally Real / Totally Fake 둘 중 하나가 안전하다.\n실제 의존객체와 Mock 객체를 섞어 쓰면 문제 발생가능성이 높다.")]),a._v(" "),v("h4",{attrs:{id:"partially-mocking-out-parts-of-your-subject"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#partially-mocking-out-parts-of-your-subject"}},[a._v("#")]),a._v(" Partially mocking out parts of your subject")]),a._v(" "),v("p",[a._v("테스트되어야 할 부분을 테스트 더블 객체로 테스트하면 안된다")]),a._v(" "),v("p",[a._v("큰 모듈이 있다고 할 때, 모듈 내부에서도 서로 의존하고 있는 코드가 다수 존재할 수 있고,\n이를 피해 테스트하기 위해 모듈 내부 부분을 Mocking 한다면 제대로 된 테스트 결과를 얻을 수 없다.")]),a._v(" "),v("h4",{attrs:{id:"replacing-some-not-all-of-your-dependencies"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#replacing-some-not-all-of-your-dependencies"}},[a._v("#")]),a._v(" Replacing some(not all) of your dependencies")]),a._v(" "),v("p",[a._v("지나치게 많은 Mock 객체를 피하기 위해 일부를 실제 의존객체로 변경하면 테스트 케이스에 문제가 발생할 수 있다.")]),a._v(" "),v("p",[a._v("얼마나 많이 Mocking을 하는지가 중요한게 아니라, 해당 객체를 왜 Mocking 하는지가 중요하다.")]),a._v(" "),v("h3",{attrs:{id:"less-obvious-abuses"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#less-obvious-abuses"}},[a._v("#")]),a._v(" Less obvious abuses")]),a._v(" "),v("h4",{attrs:{id:"mocking-out-3rd-party-code"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mocking-out-3rd-party-code"}},[a._v("#")]),a._v(" Mocking out 3rd-party code")]),a._v(" "),v("p",[a._v("서드파티 라이브러리에 너무나 많은 SetUp이 필요하거나\n라이브러리 업데이트로 인해 기존 코드가 모두 변하는 경우는 Mocking하기 어렵다.")]),a._v(" "),v("p",[a._v("Mocking 대신 Wrapping하여 의도한 요청과 결과만을 사용하면 된다.\n(3rd-party 라이브러리의 안정성은 해당 라이브러리 테스트코드에 맡겨야 한다)")]),a._v(" "),v("h4",{attrs:{id:"tangling-logic-and-delegation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tangling-logic-and-delegation"}},[a._v("#")]),a._v(" Tangling logic and delegation")]),a._v(" "),v("p",[a._v("Logic을 테스트하거나, Relationships을 테스트 하거나 둘 중 하나를 택해야 한다.\n동시에 둘다 테스트하여 결과를 얻기는 어렵다. (혼재된 수준의 추상화)")]),a._v(" "),v("p",[a._v("functions shold do or delegate, but not both")]),a._v(" "),v("h4",{attrs:{id:"mocking-dependencies-halfway-down-the-stack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mocking-dependencies-halfway-down-the-stack"}},[a._v("#")]),a._v(" Mocking dependencies halfway down the stack")]),a._v(" "),v("p",[a._v("단위테스트의 경우 바로 인접 레이어를 Mocking해야 하고 테스트할 데이터의 경우 작고 명확해야 한다.")]),a._v(" "),v("p",[a._v("회귀 테스트의 경우 외부와 접하는 레이어(External system)를 Mocking해서 시행해야 한다.")]),a._v(" "),v("h3",{attrs:{id:"questionable-uses"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#questionable-uses"}},[a._v("#")]),a._v(" Questionable uses")]),a._v(" "),v("h4",{attrs:{id:"mocking-in-tests-of-existing-code"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mocking-in-tests-of-existing-code"}},[a._v("#")]),a._v(" Mocking in tests of existing code")]),a._v(" "),v("p",[a._v("테스트에 필요한 계층이 있는 value object의 경우 생성하려 할 때 많은 의존관계가 필요할 때가 있다,\n대신 객체를 Mocking 하여 테스트를 진행할 수 있다. (객체 자체에 대한 테스트가 아닌경우)")]),a._v(" "),v("h4",{attrs:{id:"enableing-highly-layered-designs"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#enableing-highly-layered-designs"}},[a._v("#")]),a._v(" Enableing highly layered designs")]),a._v(" "),v("p",[a._v("테스트를 진행하다 보면 코드를 잘게 쪼게게 된다. (물론 작다고 합쳐져 있는 코드보다 반드시 좋은것은 아니다)")]),a._v(" "),v("p",[a._v("이 경우 외부 의존성이 강한 하위 레이어에(DB 처리 레이어) 수정이 발생하면,\n상위 레이어의 테스트가 모두 깨지는 경우가 발생할 수도 있다.")]),a._v(" "),v("p",[a._v("그런 경우 인접 레이어를 Mocking 했다면, 테스트코드에는 문제가 발생하지 않을 수 있다.")]),a._v(" "),v("h4",{attrs:{id:"relying-too-heavily-on-call-verification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#relying-too-heavily-on-call-verification"}},[a._v("#")]),a._v(" Relying too heavily on call verification")]),a._v(" "),v("p",[a._v("테스트가 지나치게 테스트 케이스의 검증구문에 의존하는 경우,\n사실은 코드의 책임이 제대로 분리되지 않았을 가능성이 크다.")]),a._v(" "),v("p",[a._v("반드시 확인해야 하는 입출력에 대해 확인하는 것이 중요하다.")])])}),[],!1,null,null,null);t.default=s.exports}}]);