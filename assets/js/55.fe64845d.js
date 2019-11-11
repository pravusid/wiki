(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{303:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"java-persistence-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-persistence-api"}},[t._v("#")]),t._v(" Java Persistence API")]),t._v(" "),s("p",[t._v("JPA(Java Persistence API)는 자바진영의 ORM(Object Relational Mapping) 기술표준이다.")]),t._v(" "),s("p",[t._v("객체지향 언어와 관계형 데이터베이스는 목적이 다르기 때문에 둘을 함께 사용하는 상황에서는 패러다임 불일치가 발생할 수 밖에 없다.\nJPA는 패러다임 불일치 문제를 간편하게 해소해 주고 객체지향 모델링을 유지하도록 돕는다.")]),t._v(" "),s("p",[t._v("과거 엔터프라이즈 자바 빈즈의 복잡성 문제로 부터 Hibernate가 탄생했고 하이버네이트를 토대로 자바 표준 ORM인 JPA가 탄생했다.")]),t._v(" "),s("p",[t._v("JPA는 자바 애플리케이션과 JDBC사이에서 동작한다.")]),t._v(" "),s("h2",{attrs:{id:"jpa-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jpa-시작"}},[t._v("#")]),t._v(" JPA 시작")]),t._v(" "),s("p",[t._v("JPA와 하이버네이트를 사용하기 위해서는 다음의 라이브러리를 사용한다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("hibernate-core")]),t._v(" ("),s("code",[t._v("hibernate-jpa-2.1-api")]),t._v(" 포함)")])]),t._v(" "),s("h3",{attrs:{id:"기본설정-persistence-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본설정-persistence-xml"}},[t._v("#")]),t._v(" 기본설정 : "),s("code",[t._v("persistence.xml")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.jboss.org/hibernate/orm/5.2/userguide/html_single/Hibernate_User_Guide.html"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8" ?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("persistence")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://xmlns.jcp.org/xml/ns/persistence"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://xmlns.jcp.org/xml/ns/persistence\n             http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 영속성유닛 등록 / transaction-type 설정 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("persistence-unit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("unitname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.hibernate.jpa.HibernatePersistenceProvider"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- @Entity 등록 --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("kr.pravusid.domain.User"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("kr.pravusid.domain.Board"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 필수속성 --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.persistence.jdbc.driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.h2.Driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.persistence.jdbc.url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jdbc:h2:mem:mydb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.persistence.jdbc.user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javax.persistence.jdbc.password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.dialect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.hibernate.dialect.H2Dialect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 스키마 자동생성 --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.hbm2ddl.auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("create-drop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 기본키 생성 전략: 기본은 false --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.id.new_generator_mappings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 선택사항 --\x3e")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.show_sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.format_sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("property")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hibernate.use_sql_comments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("persistence-unit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("persistence")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br")])]),s("p",[t._v("설정파일은 "),s("code",[t._v("classpath:META-INF/persistence.xml")]),t._v("에 위치하면 자동으로 인식된다.")]),t._v(" "),s("p",[s("code",[t._v("persistence-unit")]),t._v("에서는 "),s("code",[t._v('transaction-type="JTA||RESOURCE_LOCAL"')]),t._v("을 명시할 수 있다.")]),t._v(" "),s("p",[s("code",[t._v("javax.persistence.jdbc")]),t._v("에서는 데이터베이스 접속 설정을 한다.")]),t._v(" "),s("p",[s("code",[t._v("hibernate.dialect")]),t._v("에서는 특정 DBMS에 종속되지 않고 다양한 DBMS활용을 위한 Dialect(방언)을 명시한다.")]),t._v(" "),s("p",[t._v("기타 "),s("code",[t._v("hibernate")]),t._v(" 설정에서는 개발 편의나 디버깅을 위한 옵션을 제공한다.")]),t._v(" "),s("h4",{attrs:{id:"hibernate-hbm2ddl-auto-속성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hibernate-hbm2ddl-auto-속성"}},[t._v("#")]),t._v(" hibernate.hbm2ddl.auto 속성")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("create")]),t._v(": 기존 테이블 삭제 후 생성")]),t._v(" "),s("li",[s("code",[t._v("create-drop")]),t._v(": create 속성에 종료시 drop")]),t._v(" "),s("li",[s("code",[t._v("update")]),t._v(": 변경사항만 수정한다")]),t._v(" "),s("li",[s("code",[t._v("validate")]),t._v(": 매핑정보를 비교해 차이가 있으면 경고 출력 후 application을 실행하지 않는다.")])]),t._v(" "),s("h2",{attrs:{id:"영속성-관리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영속성-관리"}},[t._v("#")]),t._v(" 영속성 관리")]),t._v(" "),s("h3",{attrs:{id:"entitymanagerfactory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entitymanagerfactory"}},[t._v("#")]),t._v(" EntityManagerFactory")]),t._v(" "),s("ul",[s("li",[t._v("EntityManagerFactory는 보통 하나를 생성하여 공유한다.")]),t._v(" "),s("li",[t._v("생성될 때 커넥션풀도 생성한다.")]),t._v(" "),s("li",[t._v("Thread safe 하다.")])]),t._v(" "),s("h3",{attrs:{id:"entitymanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entitymanager"}},[t._v("#")]),t._v(" EntityManager")]),t._v(" "),s("ul",[s("li",[t._v("EntityManager는 EntityManagerFactory로 부터 생성한다.")]),t._v(" "),s("li",[t._v("EntityManager는 연결이 실제로 필요한 시점까지 커넥션을 획득하지 않는다.")]),t._v(" "),s("li",[t._v("EntityManager는 Thread safe하지 않다.")])]),t._v(" "),s("h3",{attrs:{id:"영속성-컨텍스트-persistence-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트-persistence-context"}},[t._v("#")]),t._v(" 영속성 컨텍스트 (Persistence context)")]),t._v(" "),s("p",[t._v("Java 내에서 데이터베이스 계층(persistence layer)과 동기화하는 Entity 저장환경이라고 볼 수 있다.")]),t._v(" "),s("h4",{attrs:{id:"영속성-컨텍스트와-관련한-entity의-생명주기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트와-관련한-entity의-생명주기"}},[t._v("#")]),t._v(" 영속성 컨텍스트와 관련한 Entity의 생명주기")]),t._v(" "),s("ul",[s("li",[t._v("비영속(transient): 영속성 컨텍스트와 전혀 관계가 없는 상태")]),t._v(" "),s("li",[t._v("영속(managed): 영속성 컨텍스트에 저장된 상태\n"),s("ul",[s("li",[t._v("영속화 : "),s("code",[t._v("em.persist({Object});")])]),t._v(" "),s("li",[s("code",[t._v("em.find()")]),t._v("나 JPQL을 사용해서 조회한 엔티티도 영속성 컨텍스트에 의해 관리된다.")])])]),t._v(" "),s("li",[t._v("준영속/분리됨(detached): 영속성 컨텍스트에 저장되었다 분리된 상태\n"),s("ul",[s("li",[t._v("특정 Entity를 준영속 상태로: "),s("code",[t._v("em.detach({Object})")])]),t._v(" "),s("li",[t._v("영속성 컨텍스트를 완전히 초기화(영속성 컨텍스트의 모든 엔티티를 준영속 상태로): "),s("code",[t._v("em.clear()")])]),t._v(" "),s("li",[t._v("영속성 컨텍스트를 종료한다(영속성 컨텍스트의 모든 엔티티를 준영속 상태로): "),s("code",[t._v("em.close()")])])])]),t._v(" "),s("li",[t._v("삭제(removed): 영속성 컨텍스트에서 삭제된 상태\n"),s("ul",[s("li",[t._v("제거: "),s("code",[t._v("em.remove({Object})")])])])])]),t._v(" "),s("h4",{attrs:{id:"영속성-컨텍스트의-특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트의-특징"}},[t._v("#")]),t._v(" 영속성 컨텍스트의 특징")]),t._v(" "),s("ul",[s("li",[t._v("영속성 컨텍스트는 엔티티를 식별자 값(@Id)으로 구분한다. 따라서 영속상태는 반드시 식별자 값이 있어야 한다.")]),t._v(" "),s("li",[t._v("영속성 컨텍스트는 "),s("code",[t._v("flush()")]),t._v("를 하는 순간 데이터베이스에 저장된다. (영속성 컨텍스트와 데이터베이스를 동기화)\n"),s("ul",[s("li",[t._v("Flush가 호출 되는 경우\n"),s("ul",[s("li",[s("code",[t._v("em.flush()")]),t._v("를 호출시 플러시: 사용빈도 낮음")]),t._v(" "),s("li",[t._v("트랜잭션 커밋시 플러시 자동호출")]),t._v(" "),s("li",[t._v("JPQL 쿼리 실행시 플러시 자동호출")])])]),t._v(" "),s("li",[t._v("플러시 옵션("),s("code",[t._v("em.setFlushMode({Option}")]),t._v("))\n"),s("ul",[s("li",[s("code",[t._v("FlushModeType.AUTO")]),t._v(": 기본값")]),t._v(" "),s("li",[s("code",[t._v("FlushModeType.COMMIT")]),t._v(": 커밋할 때만 플러시")])])])])]),t._v(" "),s("li",[t._v("영속성 컨텍스트의 장점\n"),s("ul",[s("li",[t._v("1차 캐시: 영속상태의 엔티티는 이곳에 저장된다. 1차 캐시의 키는 식별자 값이다. 엔티티 조회를 시도하면 우선 1차 캐시에서 찾고 없다면 데이터베이스를 조회한다.")]),t._v(" "),s("li",[t._v("동일성 보장: 동일한 식별자로 조회한 엔티티 인스턴스는 조회 시점과 관계없이 동일성(identity)을 보장한다. - (영속성 컨텍스트에 포함된 상태)")]),t._v(" "),s("li",[t._v("트랜잭션을 지원하는 쓰기 지연: 트랜잭션 상황에서 1차 캐시의 Entity 수정에 대응되는 쿼리를 모아두고 트랜잭션 커밋시 한번에 처리한다.")]),t._v(" "),s("li",[t._v("변경 감지: 엔티티의 변경사항을 데이터베이스에 자동으로 반영하는 기능. 엔티티를 영속성 컨텍스트에 보관할 때 최초상태가 스냅샷으로 저장된다. 플러시 시점에 스냅샷과 엔티티를 비교하여 변경점을 찾는다.\n"),s("ul",[s("li",[t._v("변경 감지 과정\n"),s("ul",[s("li",[t._v("트랜잭션을 커밋하면 flush가 호출된다")]),t._v(" "),s("li",[t._v("현재 Entity들과 snapshot을 비교하여 변경된 Entity를 찾는다.")]),t._v(" "),s("li",[t._v("변경된 Entity가 있으면 수정쿼리를 생성하여 쓰기 지연 저장소에 보낸다.")]),t._v(" "),s("li",[t._v("쓰기지연 저장소의 SQL을 데이터베이스로 보낸다.")]),t._v(" "),s("li",[t._v("데이터베이스 트랜잭션을 커밋한다.")])])]),t._v(" "),s("li",[t._v("변경 감지 이점\n"),s("ul",[s("li",[t._v("수정 쿼리가 항상 같다 (바인딩 데이터만 다르다)")]),t._v(" "),s("li",[t._v("따라서 데이터베이스는 이전에 파싱된 쿼리를 재사용할 수 있다.")]),t._v(" "),s("li",[t._v("전체 필드를 사용해서 수정쿼리를 같게 만들지 않고 변경점만 반영하려면 "),s("code",[t._v("@DynamicUpdate")]),t._v(" 어노테이션을 사용한다.")])])])])]),t._v(" "),s("li",[t._v("지연 로딩: 실제 객체 대신 프록시 객체를 불러두고 해당객체가 실제 사용될 때 영속성 컨텍스트에 해당 데이터를 불러오는 방법이다.")])])])]),t._v(" "),s("h4",{attrs:{id:"준영속-상태의-특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#준영속-상태의-특징"}},[t._v("#")]),t._v(" 준영속 상태의 특징")]),t._v(" "),s("ul",[s("li",[t._v("영속성 컨텍스트가 관리하지 않으므로, 영속성 상태의 기능인 1차캐시, 쓰기지연, 변경감지, 지연로딩 등이 동작하지 않는다.")]),t._v(" "),s("li",[t._v("준영속 상태는 영속상태에서 분리되었기 때문에 식별자 값을 가지고 있다.")]),t._v(" "),s("li",[t._v("지연로딩을 사용할 수 없다.")]),t._v(" "),s("li",[s("code",[t._v("merge()")]),t._v("를 호출하여 준영속 인스턴스를 다시 영속성 컨텍스트에 병합할 수 있다. "),s("code",[t._v("merge()")]),t._v("는 비영속을 영속 컨텍스트에 병합하는 기능도 있다.")])]),t._v(" "),s("h2",{attrs:{id:"객체-매핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체-매핑"}},[t._v("#")]),t._v(" 객체 매핑")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@Entity")]),t._v(" : 매핑 대상이 되는 클래스를 알려준다")]),t._v(" "),s("li",[s("code",[t._v("@Table")]),t._v(" : Entity와 매핑되는 테이블을 알려준다. 생략시 클래스 이름(Entity 이름)을 테이블 이름으로 매핑한다.")])]),t._v(" "),s("h3",{attrs:{id:"기본키-매핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본키-매핑"}},[t._v("#")]),t._v(" 기본키 매핑")]),t._v(" "),s("p",[s("code",[t._v("@Id")]),t._v(" : Entity 클래스의 필드를 테이블의 Primary Key와 매핑한다. @Id가 사용된 필드를 식별자 필드라 한다.")]),t._v(" "),s("h4",{attrs:{id:"기본키-직접할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본키-직접할당"}},[t._v("#")]),t._v(" 기본키 직접할당")]),t._v(" "),s("p",[t._v("적용 가능 타입 : 기본형(primary type), wrapper형, String, Date, BigDecimal, BigInteger")]),t._v(" "),s("h4",{attrs:{id:"기본키-자동생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본키-자동생성"}},[t._v("#")]),t._v(" 기본키 자동생성")]),t._v(" "),s("p",[t._v("DMBS마다 지원방식이 다르므로 사용에 유의, ("),s("code",[t._v("@GeneratedValue(strategy = {전략명}")]),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("AUTO: DBMS에 따라 자동으로 방식을 선택한다 (Oracle:SEQUENCE, MYSQL:IDENTITY ...)")]),t._v(" "),s("li",[t._v("IDENTITY: 기본키 생성을 DBMS에 위임 (MYSQL AUTO_INCREMENT 해당),\n영속상태를 위해서는 식별자가 필요하므로 트랜잭션을 지원하는 쓰기지연에 사용할 수 없음.\n(데이터베이스에 Entity 저장하여 식별자 획득 후 영속성 컨텍스트에 저장함)"),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenerationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IDENTITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("li",[t._v("SEQUENCE: 데이터베이스 시퀀스를 사용하여 기본키 할당 (오라클...)"),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SequenceGenerator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{NAME}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sequenceName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{데이터베이스의 시퀀스}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" allocationSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenerationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SEQUENCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" generator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{NAME}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("allocationSize 기본값은 50인데 이는 시퀀스에 접근하는 수를 줄이기 위해서이다.\nallocationSize 크기만큼 JPA가 메모리에서 식별자를 할당하고 INSERT를 일괄 진행하는 형태이다.")])])]),t._v(" "),s("li",[t._v("TABLE: 키 생성 테이블 사용"),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@TableGenerator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{NAME}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{TABLE_NAME}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkColumnValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER_SEQ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" allocationSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GenerationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IDENTITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" generator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{NAME}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ul",[s("li",[t._v("Table 전략은 키 조회, 키 증가시 각각 DB에 접근하는 단점이 있다 (2회)")])])])]),t._v(" "),s("h3",{attrs:{id:"필드와-컬럼-매핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#필드와-컬럼-매핑"}},[t._v("#")]),t._v(" 필드와 컬럼 매핑")]),t._v(" "),s("h4",{attrs:{id:"column"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#column"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Column")])]),t._v(" "),s("p",[t._v("필드를 컬럼에 매핑한다. 대소문자를 구분하는 DB에서는 생략하지 말고 명시해야한다.\n생략시 필드명이 컬럼명에 매핑되고 camelcase의 경우 snakecase로 변환된다")]),t._v(" "),s("p",[t._v("속성 정리")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("속성")]),t._v(" "),s("th",[t._v("기능")]),t._v(" "),s("th",[t._v("기본값")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("필드와 매핑할 테이블의 컬럼이름")]),t._v(" "),s("td",[t._v("객체의 필드 이름")])]),t._v(" "),s("tr",[s("td",[t._v("table")]),t._v(" "),s("td",[t._v("하나의 엔티티를 두 개 이상의 테이블에 매핑")]),t._v(" "),s("td",[t._v("현재 매핑 테이블")])]),t._v(" "),s("tr",[s("td",[t._v("precision, scale")]),t._v(" "),s("td",[t._v("DDL 생성시 소수 포함 전체 자릿수, 소수의 자릿수 지정. BigDecimal 에서 사용")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("nullable")]),t._v(" "),s("td",[t._v("DDL 생성시 not null 제약조건")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("unique")]),t._v(" "),s("td",[t._v("DDL 생성시, 한 컬럼에 Unique 제약조건시, 두 개 이상은 @Table에서 지정")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("length")]),t._v(" "),s("td",[t._v("문자 길이 제약조건, String에 사용")]),t._v(" "),s("td",[t._v("255")])]),t._v(" "),s("tr",[s("td",[t._v("columnDefinition")]),t._v(" "),s("td",[t._v("DDL 생성시 옵션 직접 기입")]),t._v(" "),s("td")])])]),t._v(" "),s("h4",{attrs:{id:"enumerated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enumerated"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Enumerated")])]),t._v(" "),s("p",[t._v("자바 enum과 매핑할 때 사용.\n기본값은 enum의 순서가 저장되는 ORDINAL이나 값 변경 추적이 불가하므로 STRING 사용이 권장됨")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("EnumType.ORDINAL")]),t._v(": enum 순서를 데이터베이스에 저장 (기본 값)")]),t._v(" "),s("li",[s("code",[t._v("EnumType.STRING")]),t._v(": enum 이름을 데이터베이스에 저장")])]),t._v(" "),s("h4",{attrs:{id:"temporal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#temporal"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Temporal")])]),t._v(" "),s("p",[t._v("날짜 타입(java.util.Date, java.util.Calendar) 매핑시 사용\n"),s("code",[t._v("@Temporal")]),t._v(" 생략 시 timestamp(datetime)과 매핑 됨")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("TemporalType.DATE")]),t._v(": (날짜) 데이터베이스 date 타입과 매핑")]),t._v(" "),s("li",[s("code",[t._v("TemporalType.TIME")]),t._v(": (시각) 데이터베이스 time 타입과 매핑")]),t._v(" "),s("li",[s("code",[t._v("TemporalType.TIMESTAMP")]),t._v(": (날짜와 시각) 데이터베이스 timestamp 타입과 매핑")])]),t._v(" "),s("h4",{attrs:{id:"lob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lob"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Lob")])]),t._v(" "),s("p",[t._v("BLOB, CLOB 타입 매핑")]),t._v(" "),s("ul",[s("li",[t._v("CLOB과 매핑되는 Java Type: String, Char[], java.sql.CLOB")]),t._v(" "),s("li",[t._v("BLOB과 매핑되는 Java Type: byte[], java.sql.BLOB")])]),t._v(" "),s("h4",{attrs:{id:"transient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transient"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Transient")])]),t._v(" "),s("p",[t._v("해당 필드를 데이터베이스와 매핑하지 않는다 (저장, 조회 둘다 하지 않는다)")]),t._v(" "),s("h4",{attrs:{id:"access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Access")])]),t._v(" "),s("p",[t._v("JPA가 Entity에 접근하는 방식을 지정한다")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("AccessType.FIELD")]),t._v(": 필드에 직접 접근 (private여도 접근함)")]),t._v(" "),s("li",[s("code",[t._v("AccessType.PROPERTY")]),t._v(": getter로 접근")])]),t._v(" "),s("p",[s("code",[t._v("@Access")]),t._v("를 명시 하지 않으면 "),s("code",[t._v("@Id")]),t._v("의 위치에 따라 달라진다.\n(변수에 위치: FIELD, getter에 위치: PROPERTY)")]),t._v(" "),s("h2",{attrs:{id:"연관관계-매핑-기초"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#연관관계-매핑-기초"}},[t._v("#")]),t._v(" 연관관계 매핑 기초")]),t._v(" "),s("h3",{attrs:{id:"단방향-연관관계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단방향-연관관계"}},[t._v("#")]),t._v(" 단방향 연관관계")]),t._v(" "),s("h4",{attrs:{id:"다대일-n-1-단방향-관계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다대일-n-1-단방향-관계"}},[t._v("#")]),t._v(" 다대일(N:1) 단방향 관계")]),t._v(" "),s("h2",{attrs:{id:"다양한-연관관계-매핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다양한-연관관계-매핑"}},[t._v("#")]),t._v(" 다양한 연관관계 매핑")]),t._v(" "),s("h2",{attrs:{id:"고급-매핑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#고급-매핑"}},[t._v("#")]),t._v(" 고급 매핑")]),t._v(" "),s("h2",{attrs:{id:"프록시와-연관관계-관리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#프록시와-연관관계-관리"}},[t._v("#")]),t._v(" 프록시와 연관관계 관리")]),t._v(" "),s("h2",{attrs:{id:"값-타입"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#값-타입"}},[t._v("#")]),t._v(" 값 타입")]),t._v(" "),s("h2",{attrs:{id:"객체지향-쿼리언어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#객체지향-쿼리언어"}},[t._v("#")]),t._v(" 객체지향 쿼리언어")])])}),[],!1,null,null,null);a.default=e.exports}}]);