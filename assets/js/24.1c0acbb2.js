(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{386:function(s,a,t){"use strict";t.r(a);var e=t(27),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"oracle-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-db"}},[s._v("#")]),s._v(" ORACLE DB")]),s._v(" "),t("h2",{attrs:{id:"sys-계정-접속"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sys-계정-접속"}},[s._v("#")]),s._v(" sys 계정 접속")]),s._v(" "),t("p",[s._v("sqlplus/as sysdba로 로그인 하는 경우에는 system 계정 비밀번호 파일을 사용하거나 OS 인증을 사용한다.")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("C:￦"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sqlplus"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nolog\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" conn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" sysdba\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" system identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("새로운 암호 지정"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" sys identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("새로운 암호 지정"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"계정이-잠겨있을-경우"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#계정이-잠겨있을-경우"}},[s._v("#")]),s._v(" 계정이 잠겨있을 경우")]),s._v(" "),t("p",[s._v("락(lock)을 풀어주기 위해서는 DBA 권한을 가진 사용자 계정으로 접속을 해야한다. sys 혹은 system 계정으로 로그인 한다.")]),s._v(" "),t("p",[s._v("SCOTT 사용자의 계정의 락(lock)을 해제한다 : "),t("code",[s._v("SQL>alter user scott account unlock;")])]),s._v(" "),t("p",[s._v("비밀번호 변경 "),t("code",[s._v("SQL> alter user scott identified by [새로운 암호]")])]),s._v(" "),t("h2",{attrs:{id:"테이블-스페이스-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#테이블-스페이스-생성"}},[s._v("#")]),s._v(" 테이블 스페이스 생성")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tablespace_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndatafile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/oracle/oradata/orcl/[file_name].dbf'")]),s._v("\nsize "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" DATAFILE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'데이터파일경로'")]),s._v(" AUTOEXTEND "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NEXT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("M MAXSIZE UNLIMITED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" DATAFILE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'데이터파일경로'")]),s._v(" resize "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("M"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"유저-생성-및-테이블-quota-부여"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#유저-생성-및-테이블-quota-부여"}},[s._v("#")]),s._v(" 유저 생성 및 테이블 QUOTA 부여")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nIDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLESPACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tablespace_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMPORARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLESPACE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEMP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nQUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tableA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nQUOTA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("M "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tableB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nQUOTA UNLIMITED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 참조")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- QUOTA UNLIMITED 옵션을 줄 경우 무제한 사용가능,")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- QUOTA 0M 의 경우 해당 테이블스페이스에는 테이블만 생성가능")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- Quota 정보 확인")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" dba_ts_quotas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 무제한 사용권한을 부여")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" unlimited "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 특정 테이블스페이스에 대한 Quota 제거")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" test quota unlimited "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" test_tablespace"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"유저-권한"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#유저-권한"}},[s._v("#")]),s._v(" 유저 권한")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dba "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 모든 권한 주기")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 데이터베이스에 접근할 수 있는 권한")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" LINK "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" MATERIALIZED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PUBLIC")]),s._v(" SYNONYM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" ROLE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SEQUENCE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SYNONYM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 테이블을 생성할 수 있는 권한")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ANY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 테이블을 제거할 수 있는 권한")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TYPE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SEQUENCE\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" 유저명"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"백업과-복원"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#백업과-복원"}},[s._v("#")]),s._v(" 백업과 복원")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("백업(Export)")]),s._v(" "),t("ul",[t("li",[s._v("system계정으로 전체 백업\n"),t("code",[s._v(">exp userid=system/비밀번호@ORCL full=y file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("system 계정으로 scott 계정에 있는 DB백업\n"),t("code",[s._v(">exp userid=system/비밀번호@ORCL owner=scott file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("scott계정으로 자신의 모든 데이타 백업\n"),t("code",[s._v(">exp userid=scott/비밀번호@ORCL file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("scott계정으로 emp테이블만 백업\n"),t("code",[s._v(">exp userid=scott/비밀번호@ORCL file=c:\\dump.dmp tables=emp or tables=(emp,dept)")])])])]),s._v(" "),t("li",[t("p",[s._v("복원(Import)")]),s._v(" "),t("ul",[t("li",[s._v("system계정으로 전체 복원\n"),t("code",[s._v(">imp system/비밀번호@ORCL file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("system 계정으로 scott 계정에 있는 DB복원\n"),t("code",[s._v(">imp system/비밀번호@ORCL fromuser=scott touser=scott file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("scott계정으로 자신의 모든 데이타 복원\n"),t("code",[s._v(">imp scott/비밀번호@ORCL file=c:\\dump.dmp")])]),s._v(" "),t("li",[s._v("복원하고자하는 DB에 같은 이름의 Object가 있을때,오류를 무시하고 건너 띄고 싶을때 ignore 옵션사용\n"),t("code",[s._v(">imp 아이디/비밀번호@ORCL file=c:\\dump.dmp ignore=y")])]),s._v(" "),t("li",[s._v("system계정으로 들어가 scott에서 Export한 데이터를 tiger에게 Import\n"),t("code",[s._v(">imp system/비밀번호@ORCL fromuser=scott touser=tiger file=c:\\dump.dmp")])])])])]),s._v(" "),t("h2",{attrs:{id:"제약조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#제약조건"}},[s._v("#")]),s._v(" 제약조건")]),s._v(" "),t("ul",[t("li",[s._v("제약조건\n"),t("ul",[t("li",[s._v("NN : not null")]),s._v(" "),t("li",[s._v("PK : primary key")]),s._v(" "),t("li",[s._v("FK : foreign key")]),s._v(" "),t("li",[s._v("UK : unique (후보키)")]),s._v(" "),t("li",[s._v("CK : check")])])])]),s._v(" "),t("p",[s._v("테이블 생성 후, 레코드 입력시 데이터의 중복이 발생할 수 있음")]),s._v(" "),t("p",[s._v("해결책) 데이터를 무조건 받아들이는 것이 아니라, 컬럼에 까다로운 제한을 걸어놓을 수 있다. 이렇게 컬럼에 지정할 수 있는 제한, 제약사항을 제약조건이라 한다.\n데이터 중복을 허용하지 않겠다 라는 제약조건 unique")]),s._v(" "),t("h2",{attrs:{id:"오라클-db-개요"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오라클-db-개요"}},[s._v("#")]),s._v(" 오라클 DB 개요")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("데이터형")]),s._v(" "),t("ul",[t("li",[s._v("문자 : CHAR, VARCHAR2, CLOB")]),s._v(" "),t("li",[s._v("숫자 : NUMBER")]),s._v(" "),t("li",[s._v("날짜 : DATE, TIMESTAMP")]),s._v(" "),t("li",[s._v("기타 : BFILE, BLOB")])])]),s._v(" "),t("li",[t("p",[s._v("DDL(Database Definition Lang)")]),s._v(" "),t("ul",[t("li",[s._v("CREATE / REPLACE (ALTER가 안되는 경우에 지원)\n"),t("ul",[t("li",[s._v("TABLE : 데이터형, 제약조건")]),s._v(" "),t("li",[s._v("SEQUENCE : START WITH, INCREMENT BY, CYCLE|NOCYCLE, CACHE|NOCACHE")]),s._v(" "),t("li",[s._v("VIEW : 가상테이블\n"),t("ul",[t("li",[s._v("단순뷰")]),s._v(" "),t("li",[s._v("복합뷰(JOIN, SUBQUERY)")]),s._v(" "),t("li",[s._v("보안, 쿼리문장 단순화")])])]),s._v(" "),t("li",[s._v("INDEX : 검색속도 최적화")]),s._v(" "),t("li",[s._v("PROCEDURE : 반복수행, 여러개의 SQL문장을 동시처리")]),s._v(" "),t("li",[s._v("FUNCTION : 결과 값")]),s._v(" "),t("li",[s._v("PACKAGE : 관련성 있는 것을 모아놓음")]),s._v(" "),t("li",[s._v("TRIGGER")])])]),s._v(" "),t("li",[s._v("DROP")]),s._v(" "),t("li",[s._v("ALTER")]),s._v(" "),t("li",[s._v("TRUNCATE : 데이터 잘라내기(구조는 유지하고 자료만 삭제)")]),s._v(" "),t("li",[s._v("RENAME : table, column 이름 변경")])])]),s._v(" "),t("li",[t("p",[s._v("DML(Database Manipulation Lang)")]),s._v(" "),t("ul",[t("li",[s._v("SELECT\n"),t("ul",[t("li",[s._v("출력 조건\n"),t("ul",[t("li",[s._v("WHERE")]),s._v(" "),t("li",[s._v("GROUP BY ~ HAVING")]),s._v(" "),t("li",[s._v("ORDER BY")])])]),s._v(" "),t("li",[s._v("JOIN : ANSI JOIN / ORACLE JOIN\n"),t("ul",[t("li",[s._v("INNER JOIN (null은 처리못함)\n"),t("ul",[t("li",[s._v("EQUI_JOIN : JOIN~USING, NATURAL JOIN : =")]),s._v(" "),t("li",[s._v("NON EQUI_JOIN : = 이외 (비교, 논리연산 등...)")])])]),s._v(" "),t("li",[s._v("OUTER JOIN\n"),t("ul",[t("li",[s._v("LEFT OUTER JOIN : "),t("code",[s._v("A.col = B.col(+)")])]),s._v(" "),t("li",[s._v("RIGHT OUTER JOIN : "),t("code",[s._v("(+)A.col = B.col")])]),s._v(" "),t("li",[s._v("FULL OUTER JOIN")])])])])]),s._v(" "),t("li",[s._v("SUBQUERY\n"),t("ul",[t("li",[s._v("단일행")]),s._v(" "),t("li",[s._v("다중행 : ANY/SOME, ALL, IN(특정 값들)")]),s._v(" "),t("li",[s._v("다중칼럼 : WHERE (empno, job)")]),s._v(" "),t("li",[s._v("COLUMN(스칼라 서브쿼리), TABLE 조건 위치에 사용")])])]),s._v(" "),t("li",[s._v("연산자\n"),t("ul",[t("li",[s._v("산술연산")]),s._v(" "),t("li",[s._v("논리연산")]),s._v(" "),t("li",[s._v("비교연산")]),s._v(" "),t("li",[s._v("IN")]),s._v(" "),t("li",[s._v("BETWEEN ~ AND ( >= AND <= )")]),s._v(" "),t("li",[s._v("LIKE : _(한 글자) %(여러글자)")]),s._v(" "),t("li",[s._v("NOT")]),s._v(" "),t("li",[s._v("NULL : IS NULL / IS NOT NULL")]),s._v(" "),t("li",[s._v("EXIST")])])])])]),s._v(" "),t("li",[s._v("INSERT\n"),t("ul",[t("li",[s._v("INSERT")]),s._v(" "),t("li",[s._v("INSERT ALL")])])]),s._v(" "),t("li",[s._v("DELETE")]),s._v(" "),t("li",[s._v("UPDATE")]),s._v(" "),t("li",[s._v("UNION, UNION ALL(합집합), INTERSECT(교집합), MINUS(차집합)")]),s._v(" "),t("li",[s._v("MERGE")])])]),s._v(" "),t("li",[t("p",[s._v("DCL(Database Control Lang)")]),s._v(" "),t("ul",[t("li",[s._v("GRANT")]),s._v(" "),t("li",[s._v("REVOKE")])])]),s._v(" "),t("li",[t("p",[s._v("TCL")]),s._v(" "),t("ul",[t("li",[s._v("COMMIT")]),s._v(" "),t("li",[s._v("ROLLBACK")])])])]),s._v(" "),t("h2",{attrs:{id:"오라클-내장함수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#오라클-내장함수"}},[s._v("#")]),s._v(" 오라클 내장함수")]),s._v(" "),t("ul",[t("li",[s._v("숫자관련\n"),t("ul",[t("li",[s._v("ROUND() : 반올림")]),s._v(" "),t("li",[s._v("TRUNC() : 버림")]),s._v(" "),t("li",[s._v("CEIL() : 올림")]),s._v(" "),t("li",[s._v("MOD() : 나머지")])])]),s._v(" "),t("li",[s._v("문자관련\n"),t("ul",[t("li",[s._v("SUBSTR() : 문자 분해")]),s._v(" "),t("li",[s._v("INSTR() : 문자 위치 확인")]),s._v(" "),t("li",[s._v("RPAD()")])])]),s._v(" "),t("li",[s._v("변환함수\n"),t("ul",[t("li",[s._v("TO_CHAR() : 문자로 변환(시간출력에 주로 사용)")]),s._v(" "),t("li",[s._v("TO_DATE()")])])]),s._v(" "),t("li",[s._v("날짜함수\n"),t("ul",[t("li",[s._v("SYSDATE")]),s._v(" "),t("li",[s._v("MONTHS_BETWEEN")]),s._v(" "),t("li",[s._v("ADD_MONTH")])])]),s._v(" "),t("li",[s._v("기타함수\n"),t("ul",[t("li",[s._v("DECODE, CASE -> 조건문 : Trigger, Procedure에 쓰임")]),s._v(" "),t("li",[s._v("NVL : Null 값이면 대체")]),s._v(" "),t("li",[s._v("CASE")])])]),s._v(" "),t("li",[s._v("집합함수\n"),t("ul",[t("li",[s._v("COUNT()")]),s._v(" "),t("li",[s._v("MAX()")]),s._v(" "),t("li",[s._v("SUM()")]),s._v(" "),t("li",[s._v("AVG()")]),s._v(" "),t("li",[s._v("RANK()")]),s._v(" "),t("li",[s._v("ROLLUP()")]),s._v(" "),t("li",[s._v("CUBE()")])])])]),s._v(" "),t("h2",{attrs:{id:"join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[s._v("#")]),s._v(" join")]),s._v(" "),t("p",[s._v("정규화에 의해 분리된 테이블을 마치 하나처럼 보여주는 쿼리")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("inner join :\njoin대상이 되는 테이블에 공통된 레코드만 가져온다")])]),s._v(" "),t("li",[t("p",[s._v("outer join :\njoin쿼리 수행시 반드시 모두 가져올 레코드를 보유한 테이블을 명시할 수 있어서, 공통되지 않은 레코드도 조회가 가능하다")])])]),s._v(" "),t("h2",{attrs:{id:"테이블-조회"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#테이블-조회"}},[s._v("#")]),s._v(" 테이블 조회")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" user_tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"oracle-to-java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle-to-java"}},[s._v("#")]),s._v(" Oracle to Java")]),s._v(" "),t("ul",[t("li",[s._v("CLOB\n"),t("ul",[t("li",[s._v("8i, 9i : InputStream")]),s._v(" "),t("li",[s._v("10g, 11g, 12C : String")])])]),s._v(" "),t("li",[s._v("NUMBER\n"),t("ul",[t("li",[s._v("NUMBER : int, double, long")]),s._v(" "),t("li",[s._v("NUMBER(4) : int")]),s._v(" "),t("li",[s._v("NUMBER(7,2) : double")])])]),s._v(" "),t("li",[s._v("DATE, TIMESTAMP : Date(java.util), TimeStamp")]),s._v(" "),t("li",[s._v("BFILE, BLOB : ~ 4Gb : InputStream")])]),s._v(" "),t("h2",{attrs:{id:"pl-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pl-sql"}},[s._v("#")]),s._v(" PL/SQL")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("PL : 프로시저 제작 언어 : SQL 사용하면 PL/SQL")]),s._v(" "),t("ul",[t("li",[s._v("PROCEDURE")]),s._v(" "),t("li",[s._v("FUNCTION")]),s._v(" "),t("li",[s._v("PACKAGE")]),s._v(" "),t("li",[s._v("TRIGGER")]),s._v(" "),t("li",[s._v("INDEX")])])]),s._v(" "),t("li",[t("p",[s._v("쿼리 문장이 복잡 (JOIN, SUBQUERY) : VIEW")])]),s._v(" "),t("li",[t("p",[s._v("검색속도 최적화 : Index(rowid)")])]),s._v(" "),t("li",[t("p",[s._v("PROCEDURE : 절차적 중복이 많은 경우")])]),s._v(" "),t("li",[t("p",[s._v("선언부 : 변수선언")]),s._v(" "),t("ul",[t("li",[s._v("DELCARE")]),s._v(" "),t("li",[s._v("스칼라 변수 :  no NUMBER, name VARCHAR2(10) ...")]),s._v(" "),t("li",[s._v("참조 변수\n"),t("ul",[t("li",[s._v("ename -> emp.ename%TYPE(0)")]),s._v(" "),t("li",[s._v("emp -> emp%ROWTYPE -> VO")]),s._v(" "),t("li",[s._v("RECORD : 사용자 지정(필요한 데이터) : RECORD(ename,dname...)")]),s._v(" "),t("li",[s._v("CURSOR : ResultSet")])])])])]),s._v(" "),t("li",[t("p",[s._v("구현부 : SQL 문장")]),s._v(" "),t("ul",[t("li",[s._v("BEGIN\n"),t("ul",[t("li",[t("code",[s._v("SELECT ename,job INTO vename,vjob FROM emp")])]),s._v(" "),t("li",[s._v("DBMS_OUTPUT.PUT_LINE(vename) : System.out.print")]),s._v(" "),t("li",[s._v("제어문, 연산자 : "),t("code",[s._v("IF, IF~ELSE, IF~ELSIF, WHILE, FOR, LOOP")])])])]),s._v(" "),t("li",[s._v("END;")])])]),s._v(" "),t("li",[t("p",[s._v("예외처리부 : EXCEPTION")])]),s._v(" "),t("li",[t("p",[s._v("SQLPLUS에서 입력받기 (scan)")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" serveroutput "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("\nACCEPT pempno PROMPT "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'사번:'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 변수에 대입 (:=&pempno ), 사용 (&pempno)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);