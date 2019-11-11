(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{375:function(t,r,a){"use strict";a.r(r);var e=a(0),i=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-boot-프로젝트-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-프로젝트-생성"}},[t._v("#")]),t._v(" Spring Boot 프로젝트 생성")]),t._v(" "),a("h2",{attrs:{id:"최초-프로젝트-생성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#최초-프로젝트-생성"}},[t._v("#")]),t._v(" 최초 프로젝트 생성")]),t._v(" "),a("h3",{attrs:{id:"빌드툴과-버전-선택"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빌드툴과-버전-선택"}},[t._v("#")]),t._v(" 빌드툴과 버전 선택")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://start.spring.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://start.spring.io"),a("OutboundLink")],1),t._v("에서 프로젝트 생성 Wizard를 실행할 수 있다.")])]),t._v(" "),a("li",[a("p",[t._v("빌드툴은 Gradle, Spring Boot 1.5.4버전을 선택하였다")])])]),t._v(" "),a("h3",{attrs:{id:"프로젝트에-포함할-의존패키지-선택"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트에-포함할-의존패키지-선택"}},[t._v("#")]),t._v(" 프로젝트에 포함할 의존패키지 선택")]),t._v(" "),a("p",[t._v("필요에의해 추가 제거한다.")]),t._v(" "),a("ul",[a("li",[t._v("Web : 스프링부트 기본 패키지")]),t._v(" "),a("li",[t._v("AOP")]),t._v(" "),a("li",[t._v("Security")]),t._v(" "),a("li",[t._v("DevTools")]),t._v(" "),a("li",[t._v("Rest Repositories")]),t._v(" "),a("li",[t._v("Thymeleaf : 템플릿 엔진")]),t._v(" "),a("li",[t._v("JPA : 자바 ORM 표준기술 - hibernate사용예정")]),t._v(" "),a("li",[t._v("MySQL : db는 MariaDB사용, hibernate사용할 때 필요없으면 이건 삭제")]),t._v(" "),a("li",[t._v("lombok : getter/setter 간소화 지원 라이브러리, 다른용도는 찾아봐야...")])]),t._v(" "),a("h3",{attrs:{id:"배포형식은-jar-or-war"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배포형식은-jar-or-war"}},[t._v("#")]),t._v(" 배포형식은 JAR or WAR")]),t._v(" "),a("ul",[a("li",[t._v("배포형식을 JAR로 선택하면 구동시 WAS없어도 되고 (사실 내장되어있음) 테스트 할때 서버가동 대신 app실행으로 시작 가능하다 (사실 서버실행)")]),t._v(" "),a("li",[t._v("실행방법 (평범한 상황에서 다 되는지 테스트 해봐야 함)\n"),a("ul",[a("li",[t._v("Run as - Spring Boot App")]),t._v(" "),a("li",[t._v("gradle - Tasks quick launcher")]),t._v(" "),a("li",[t._v("$ gradle bootRun")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("Spring Tool Suite를 사용중이라면 Server탭 옆의 Boot Dashboard를 활용해서 run server를 수행할 수 있다.")])]),t._v(" "),a("h2",{attrs:{id:"프로젝트-기초-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로젝트-기초-설정"}},[t._v("#")]),t._v(" 프로젝트 기초 설정")]),t._v(" "),a("h3",{attrs:{id:"패키지-구분"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#패키지-구분"}},[t._v("#")]),t._v(" 패키지 구분")]),t._v(" "),a("ul",[a("li",[t._v("패키지 구분은 root, web, service, domain으로 한다\n"),a("ul",[a("li",[t._v("root : 프로젝트 설정이 들어갈 예정 (~Application.java 파일)")]),t._v(" "),a("li",[t._v("web : 컨트롤러")]),t._v(" "),a("li",[t._v("service : 서비스 영역")]),t._v(" "),a("li",[t._v("domain : Entity")])])])]),t._v(" "),a("h3",{attrs:{id:"기본설정-talsist-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본설정-talsist-java"}},[t._v("#")]),t._v(" 기본설정 (Talsist.java)")]),t._v(" "),a("blockquote",[a("p",[t._v("프로젝트를 생성하면 기본적으로 @SpringBootApplication 어노테이션이 붙어있다.")])]),t._v(" "),a("ul",[a("li",[t._v("@SpringBootApplication은 스프링부트 기본설정 3종 신기가 한 번에 적용되어 있는 것이다\n"),a("ul",[a("li",[t._v("@Configuration")]),t._v(" "),a("li",[t._v("@EnableAutoConfiguration")]),t._v(" "),a("li",[t._v("@ComponentScan")])])])]),t._v(" "),a("h3",{attrs:{id:"application-properties-yml-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-properties-yml-설정"}},[t._v("#")]),t._v(" application.properties(yml) 설정")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html"),a("OutboundLink")],1),t._v(" 참고")])])}),[],!1,null,null,null);r.default=i.exports}}]);