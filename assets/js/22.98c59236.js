(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{225:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sql-예제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-예제"}},[s._v("#")]),s._v(" SQL 예제")]),s._v(" "),t("h2",{attrs:{id:"페이징-paging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#페이징-paging"}},[s._v("#")]),s._v(" 페이징 (Paging)")]),s._v(" "),t("h3",{attrs:{id:"오라클-oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오라클-oracle"}},[s._v("#")]),s._v(" 오라클 (Oracle)")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ROWNUM rnum\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" username\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" member m\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ROWNUM "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ?\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" rnum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ?\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" member\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" :page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" :size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" :size "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 시작위치, 가져올 row 숫자")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" member\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" :size "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" :page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" :size\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" createdAt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@ROWNUM")]),s._v(" :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@ROWNUM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" rnum\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" member"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@ROWNUM")]),s._v(" :"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" x\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" createdAt\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" :page "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" :size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" :size\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[s._v("#")]),s._v(" PostgreSQL")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" member\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 가져올 row 숫자, 시작위치")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"paging-with-offset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#paging-with-offset"}},[s._v("#")]),s._v(" Paging with OFFSET")]),s._v(" "),t("p",[s._v("일반적으로 데이터베이스의 인덱스는 B+Tree 자료구조를 사용한다.\n효율적인 위치 탐색이 가능하고 Leaf node끼리 연결되어 있으므로 범위 검색도 수행할 수 있다.")]),s._v(" "),t("p",[s._v("그러나 OFFSET은 순차적으로 탐색(OFFSET n 이면 n까지 탐색한 다음 앞의 n개를 버림)하므로 실행시간이 선형으로 증가한다.")]),s._v(" "),t("p",[s._v("따라서 페이징을 한다면 순서가 있는 key를 기반으로(인덱스가 적용된) 범위를 지정해야 한다.\n이 경우 leaf node 위치 탐색("),t("code",[s._v("O(log n)")]),s._v(")을 두 번 수행하는 것이므로 일정한 시간을 보장할 수 있다.")]),s._v(" "),t("h2",{attrs:{id:"검색"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#검색"}},[s._v("#")]),s._v(" 검색")]),s._v(" "),t("h3",{attrs:{id:"in-clause-with-null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-clause-with-null"}},[s._v("#")]),s._v(" "),t("code",[s._v("IN")]),s._v(" Clause with NULL")]),s._v(" "),t("p",[t("code",[s._v("IN")]),s._v("문은 "),t("code",[s._v("col = val1 or col = val2 or col = val3")]),s._v("의 형태로 해석되기 때문에 "),t("code",[s._v("val = NULL")]),s._v("의 형태가 되는 "),t("code",[s._v("NULL")]),s._v("을 사용할 수 없다.")]),s._v(" "),t("p",[t("code",[s._v("NOT IN")]),s._v("의 경우도 동일하다.")]),s._v(" "),t("h3",{attrs:{id:"like"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[s._v("#")]),s._v(" LIKE")]),s._v(" "),t("p",[s._v("LIKE 연산자를 사용하여 검색을 하는 경우 인덱스를 사용하기 위해서는 전방 일치검색을 해야한다. ("),t("code",[s._v("LIKE '단어%'")]),s._v(")")]),s._v(" "),t("h2",{attrs:{id:"데이터-입력"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#데이터-입력"}},[s._v("#")]),s._v(" 데이터 입력")]),s._v(" "),t("h3",{attrs:{id:"예제-자료-입력시-fk-제약조건-검사피하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#예제-자료-입력시-fk-제약조건-검사피하기"}},[s._v("#")]),s._v(" 예제 자료 입력시 FK 제약조건 검사피하기")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" foreign_key_checks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 입력할 내용 ...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" foreign_key_checks "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"update-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-join"}},[s._v("#")]),s._v(" Update Join")]),s._v(" "),t("h3",{attrs:{id:"my-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#my-sql"}},[s._v("#")]),s._v(" My sql")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("\n  emp e "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INNER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" dept d\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deptno\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);