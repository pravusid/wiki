(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{247:function(t,e,s){"use strict";s.r(e);var a=s(0),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git에서-ssh-프로토콜로-전송-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git에서-ssh-프로토콜로-전송-설정"}},[t._v("#")]),t._v(" Git에서 SSH 프로토콜로 전송 설정")]),t._v(" "),s("h2",{attrs:{id:"비대칭키-생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비대칭키-생성"}},[t._v("#")]),t._v(" 비대칭키 생성")]),t._v(" "),s("ol",[s("li",[t._v("Git bash를 연다")]),t._v(" "),s("li",[s("code",[t._v('ssh-keygen -t rsa -b 4096 -C "your@email.com"')]),t._v(" 이메일을 넣고 다음 내용을 입력한다.")]),t._v(" "),s("li",[t._v("public/private rsa key 쌍이 생성된다.")]),t._v(" "),s("li",[t._v('"Enter a file in which to save the key,"에서 '),s("code",[t._v("Enter")]),t._v("를 누르면 "),s("code",[t._v("~/.ssh")]),t._v("에 저장된다.")]),t._v(" "),s("li",[s("code",[t._v("Enter passphrase (empty for no passphrase): [Type a passphrase]")]),t._v(" 에서 비밀번호를 사용할 수 있다.")])]),t._v(" "),s("h2",{attrs:{id:"github-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-설정"}},[t._v("#")]),t._v(" Github 설정")]),t._v(" "),s("ol",[s("li",[t._v("Settings")]),t._v(" "),s("li",[t._v("SSH and GPG keys")]),t._v(" "),s("li",[t._v("SSH keys")]),t._v(" "),s("li",[t._v("New SSH key를 눌러 public key를 입력한다.")])]),t._v(" "),s("h2",{attrs:{id:"사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용"}},[t._v("#")]),t._v(" 사용")]),t._v(" "),s("p",[t._v("최초 사용시 콘솔에서 "),s("code",[t._v("push")]),t._v(", "),s("code",[t._v("pull")]),t._v(" 작업을 해서 known_hosts에 github를 등록한다.")]),t._v(" "),s("h2",{attrs:{id:"권한오류"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#권한오류"}},[t._v("#")]),t._v(" 권한오류")]),t._v(" "),s("p",[s("code",[t._v("github sign_and_send_pubkey: signing failed: agent refused operation")]),t._v(" 오류 발생시")]),t._v(" "),s("p",[s("code",[t._v(".ssh")]),t._v(" 경로의 private key 권한을 "),s("code",[t._v("400")]),t._v("으로 설정한다")])])}),[],!1,null,null,null);e.default=_.exports}}]);