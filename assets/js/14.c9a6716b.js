(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{384:function(a,r,t){"use strict";t.r(r);var e=t(28),s=Object(e.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"aws-rds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws-rds"}},[a._v("#")]),a._v(" AWS RDS")]),a._v(" "),t("p",[a._v("관계형 데이터베이스 서비스")]),a._v(" "),t("h2",{attrs:{id:"설정-for-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설정-for-mysql"}},[a._v("#")]),a._v(" 설정 (for MySQL)")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-1-parameters-related-to-performance/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-1-parameters-related-to-performance/"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-2-parameters-related-to-replication/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-2-parameters-related-to-replication/"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-3-parameters-related-to-security-operational-manageability-and-connectivity-timeout/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://aws.amazon.com/blogs/database/best-practices-for-configuring-parameters-for-amazon-rds-for-mysql-part-3-parameters-related-to-security-operational-manageability-and-connectivity-timeout/"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"dump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dump"}},[a._v("#")]),a._v(" dump")]),a._v(" "),t("p",[a._v("To export db from RDS")]),a._v(" "),t("p",[t("code",[a._v("mysqldump -h rds.host.name -u remote_user_name -p remote_db > remote_db.sql")])]),a._v(" "),t("p",[a._v("To import db on RDS")]),a._v(" "),t("p",[t("code",[a._v("mysql -h rds.host.name -u remote_user_name -p remote_db < remote_db.sql")])]),a._v(" "),t("h2",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),t("h3",{attrs:{id:"문자-인코딩-관련"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#문자-인코딩-관련"}},[a._v("#")]),a._v(" 문자 인코딩 관련")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("최초 인코딩셋이 latin1이므로 RDS 대시보드 파라미터 그룹으로 들어감")])]),a._v(" "),t("li",[t("p",[a._v("새로운 파라미터 그룹을 생성하고 character set 관련 항목을 utf8로 변경")])]),a._v(" "),t("li",[t("p",[a._v("인스턴스에 새 파라미터 그룹 적용후 리부팅")])]),a._v(" "),t("li",[t("p",[a._v("확인: "),t("code",[a._v("show variables like 'c%';")])])]),a._v(" "),t("li",[t("p",[a._v("기존에 생성된 database의 문자열셋을 변경함")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARACTER")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'utf8'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'utf8_general_ci'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])])])])])}),[],!1,null,null,null);r.default=s.exports}}]);