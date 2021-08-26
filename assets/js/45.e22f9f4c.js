(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{407:function(e,t,a){"use strict";a.r(t);var s=a(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-명령어"}},[e._v("#")]),e._v(" Git 명령어")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com/book/ko/v2/Git의-기초-수정하고-저장소에-저장하기"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("git이 인식하는 파일 상태는 다음과 같다")]),e._v(" "),a("ul",[a("li",[e._v("new file("),a("code",[e._v("A")]),e._v(")")]),e._v(" "),a("li",[e._v("modified("),a("code",[e._v("M")]),e._v(")")]),e._v(" "),a("li",[e._v("unmodified")]),e._v(" "),a("li",[e._v("untracked("),a("code",[e._v("??")]),e._v(")")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" status -s\n M README               "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 내용 변경했으나 Staged에 추가 하지 않음")]),e._v("\nMM Rakefile             "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 변경점을 Staged에 추가하고, 이후 추가로 변경함")]),e._v("\nA  lib/git.rb           "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 새로 추가되어 추적하지 않던 파일을 Staged에 등록하여 추적함")]),e._v("\nM  lib/simplegit.rb     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 내용을 변경하고 Staged에 추가함")]),e._v("\n?? LICENSE.txt          "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 아직 추적하지 않는 파일")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Working Directory 각 파일들은 상태에 따라 다음에 위치한다")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Tracked")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Commited (스냅샷에 포함됨 == 이후 커밋에서 unmodified로 시작)")])]),e._v(" "),a("li",[a("p",[e._v("Staged (Staging Area, Changes to be committed)")]),e._v(" "),a("ul",[a("li",[e._v("modified")]),e._v(" "),a("li",[e._v("new file")]),e._v(" "),a("li",[e._v("deleted")]),e._v(" "),a("li",[e._v("renamed")]),e._v(" "),a("li",[a("code",[e._v("...")])])])]),e._v(" "),a("li",[a("p",[e._v("UnStaged (Changes not staged for commit)")]),e._v(" "),a("ul",[a("li",[e._v("modified")]),e._v(" "),a("li",[e._v("new file")]),e._v(" "),a("li",[e._v("deleted")]),e._v(" "),a("li",[e._v("renamed")]),e._v(" "),a("li",[a("code",[e._v("...")])])])]),e._v(" "),a("li",[a("p",[e._v("Unmodified")])])])]),e._v(" "),a("li",[a("p",[e._v("Untracked")])]),e._v(" "),a("li",[a("p",[e._v("Ignored ("),a("code",[e._v(".gitignore")]),e._v(")")])])]),e._v(" "),a("h2",{attrs:{id:"ignore-untracking-remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignore-untracking-remove"}},[e._v("#")]),e._v(" Ignore / Untracking / Remove")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("파일을 인덱스에서 삭제: Staging Area에서만 제거하고 워킹 디렉토리에 있는 파일은 지우지 않고 남겨둠")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git rm -r --cached <directory>")])]),e._v(" "),a("li",[a("code",[e._v("git rm --cached <filename>")])])])])]),e._v(" "),a("h2",{attrs:{id:"add-staging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-staging"}},[e._v("#")]),e._v(" Add / Staging")]),e._v(" "),a("ul",[a("li",[e._v("Staging: "),a("code",[e._v("git add <filename>")])]),e._v(" "),a("li",[e._v("Staging All: "),a("code",[e._v("git add .")])])]),e._v(" "),a("h2",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),a("ul",[a("li",[e._v("Staging Area의 파일 커밋(메시지 포함): "),a("code",[e._v("git commit -m '<message>'")])]),e._v(" "),a("li",[e._v("Staging Area의 데이터를 마지막 커밋에 추가: "),a("code",[e._v("git commit --amend")])]),e._v(" "),a("li",[e._v("Tracking 파일 전체를 Staging 생략하고 커밋: "),a("code",[e._v("git commit -a")])])]),e._v(" "),a("h2",{attrs:{id:"tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[e._v("#")]),e._v(" Tag")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("목록")]),e._v(" "),a("ul",[a("li",[e._v("태그 목록: "),a("code",[e._v("git tag")])]),e._v(" "),a("li",[e._v("태그 검색: "),a("code",[e._v("git tag -l '검색어'")]),e._v(" i.e. "),a("code",[e._v("git tag -l 'v1.4.2.*'")])])])]),e._v(" "),a("li",[a("p",[e._v("생성")]),e._v(" "),a("ul",[a("li",[e._v("Lightweight 태그 붙이기: "),a("code",[e._v("git tag <tag>")])]),e._v(" "),a("li",[e._v("이전 커밋에 태그 붙이기: "),a("code",[e._v("git tag <tag> <commit_checksum>")])]),e._v(" "),a("li",[e._v("Annotated 태그 붙이기: "),a("code",[e._v("git tag -a <tag> -m '<message>'")])]),e._v(" "),a("li",[e._v("서명한 태그 붙이기: "),a("code",[e._v("git tag -s <tag> -m '<message>'")])])])]),e._v(" "),a("li",[a("p",[e._v("검증")]),e._v(" "),a("ul",[a("li",[e._v("서명한 태그 검증: "),a("code",[e._v("git tag -v [태그 이름]")]),e._v(" (서명자의 공개키가 Keyring에 있어야 함)")])])]),e._v(" "),a("li",[a("p",[e._v("삭제")]),e._v(" "),a("ul",[a("li",[e._v("태그 삭제: "),a("code",[e._v("git tag -d <tag>")])])])])]),e._v(" "),a("h2",{attrs:{id:"log-reflog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-reflog"}},[e._v("#")]),e._v(" Log / Reflog")]),e._v(" "),a("ul",[a("li",[e._v("reflog 출력: "),a("code",[e._v("git reflog")])]),e._v(" "),a("li",[e._v("reflog 남기기: "),a("code",[e._v("git update-ref")])])]),e._v(" "),a("h2",{attrs:{id:"reset-revert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-revert"}},[e._v("#")]),e._v(" Reset / Revert")]),e._v(" "),a("ul",[a("li",[e._v("Unstaging: "),a("code",[e._v("git reset HEAD <filename>")])])]),e._v(" "),a("h2",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" Merge")]),e._v(" "),a("p",[e._v("development 브랜치를 main 브랜치로 merge")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge development\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("merge는 "),a("code",[e._v("--ff")]),e._v("(fast foward)가 기본 설정이다")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("git merge --no-ff")])]),e._v(" "),a("ul",[a("li",[e._v("ff가 가능하더라도 3-way-merge 실행")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("git merge --squash")])]),e._v(" "),a("ul",[a("li",[e._v("대상 브랜치로부터 merge할 내용만 반영하고 merge는 실행하지 않음")]),e._v(" "),a("li",[e._v("즉, 대상 브랜치의 모든 변경점을 하나로 합쳐서 병합할 브랜치 HEAD에 반영함")])])])]),e._v(" "),a("p",[e._v("merge시 발생하는 conflict 해결")]),e._v(" "),a("ul",[a("li",[e._v("수동")]),e._v(" "),a("li",[a("code",[e._v("git mergetool")])])]),e._v(" "),a("h2",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[e._v("#")]),e._v(" Rebase")]),e._v(" "),a("p",[a("code",[e._v("RE-BASE")]),e._v("는 커밋의 부모커밋을 변경한다는 개념이다")]),e._v(" "),a("p",[e._v("즉, A 브랜치로부터 생성된 B브랜치에서 작업 이후 A브랜치를 대상으로 rebase를 실행한다면,\nB브랜치를 생성한 A브랜치의 커밋 이후, A 브랜치에서 발생한 변경점을 B브랜치에 적용한다는 것이다")]),e._v(" "),a("p",[e._v("(A브랜치의 마지막 커밋을 B브랜치의 생성지점으로 변경).")]),e._v(" "),a("p",[a("code",[e._v("git rebase main development")])]),e._v(" "),a("p",[e._v("또는")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch development\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("실행 결과는 다음과 같다")]),e._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("Before                              After\nA---B---C---F---G (main)            A---B---C---F---G (main)\n         \\                                           \\\n          D---E (HEAD development)                   D'---E' (HEAD development)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("rebase 진행도중 conflict가 발생한다면, merge시 conflict 해결과 같은 방법을 적용한 뒤")]),e._v(" "),a("p",[a("code",[e._v("git rebase --continue")]),e._v(" 명령어를 입력한다")]),e._v(" "),a("p",[e._v("이후 development 브랜치는 main 브랜치로 이동하여 "),a("code",[e._v("FF")]),e._v(" 가능하므로")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge development\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"대화형-rebase-git-rebase-i-수정을-시작할-커밋-직전커밋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#대화형-rebase-git-rebase-i-수정을-시작할-커밋-직전커밋"}},[e._v("#")]),e._v(" 대화형 rebase: "),a("code",[e._v("git rebase -i <수정을_시작할_커밋_직전커밋>")])]),e._v(" "),a("p",[e._v("명령을 실행하면 커밋 로그가 날짜순 오름차순으로 기록된 에디터가 실행되고 아래의 명령을 지정할 수 있다.")]),e._v(" "),a("ul",[a("li",[e._v("pick: 해당 커밋 사용")]),e._v(" "),a("li",[e._v("reword: 커밋 메시지 변경")]),e._v(" "),a("li",[e._v("edit: 커밋 메시지 및 내용 변경")]),e._v(" "),a("li",[e._v("squash: 커밋을 직전 커밋과 합친다")]),e._v(" "),a("li",[e._v("fixup: 커밋을 직전 커밋과 합치지만 메시지는 합치지 않는다(직전 커밋의 메시지만 남긴다)")]),e._v(" "),a("li",[e._v("drop: 커밋 히스토리에서 해당 커밋을 삭제함")])]),e._v(" "),a("p",[e._v("해당 커밋에 적용할 명령을 쓴 뒤 에디터를 저장하고 나가면 작업을 수행할 수 있다")]),e._v(" "),a("p",[e._v("필요한 작업을 모두 수행하였다면 ["),a("code",[e._v("git commit --amend")]),e._v("], "),a("code",[e._v("git rebase --continue")]),e._v(" 실행")]),e._v(" "),a("h3",{attrs:{id:"git-rebase-interactive-autosquash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-interactive-autosquash"}},[e._v("#")]),e._v(" "),a("code",[e._v("git rebase --interactive --autosquash")])]),e._v(" "),a("p",[e._v("작업이 모두 끝나고 커밋 히스토리를 정리할 계획을 갖고 있다면 미리 squash나 fixup 할 커밋에 메시지를 표기해둘 수 있다")]),e._v(" "),a("p",[e._v("커밋 메시지 접두사로 "),a("code",[e._v("squash!")]),e._v(" 또는 "),a("code",[e._v("fixup!")]),e._v("을 사용한다면\n대화형 rebase가 실행됨과 동시에 해당 커밋들은 squash와 fixup 상태인 것을 볼 수 있다.")]),e._v(" "),a("h3",{attrs:{id:"git-rebase-onto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase-onto"}},[e._v("#")]),e._v(" "),a("code",[e._v("git rebase --onto")])]),e._v(" "),a("p",[e._v("기본 rebase 명령어")]),e._v(" "),a("ul",[a("li",[e._v("지정한 브랜치의 도달할 수 있는 마지막 커밋 -> 현재 브랜치(HEAD 위치 브랜치)의 "),a("strong",[e._v("base로")]),e._v(" 설정한다")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://womanonrails.com/git-rebase-onto",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://womanonrails.com/git-rebase-onto"),a("OutboundLink")],1)]),e._v(" "),a("h4",{attrs:{id:"onto-with-2-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onto-with-2-args"}},[e._v("#")]),e._v(" "),a("code",[e._v("--onto")]),e._v(" with 2 args")]),e._v(" "),a("p",[e._v("2개의 인자를 사용하는 onto rebase 명령어")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git rebase --onto <newparent_commit> <oldparent_commit>")])]),e._v(" "),a("li",[a("code",[e._v("newparent_commit")]),e._v(" -> "),a("code",[e._v("oldparent_commit.child ~ HEAD")]),e._v("의 "),a("strong",[e._v("base로")]),e._v(" 설정한다")]),e._v(" "),a("li",[e._v("세 번째 인자로 현재 브랜치를 사용하면, 2개의 인자를 사용한 것과 동일하게 작동한다")])]),e._v(" "),a("p",[a("code",[e._v("git rebase --onto F D")]),e._v(" == "),a("code",[e._v("git rebase --onto F D my-branch")])]),e._v(" "),a("p",[e._v("실행 결과는 다음과 같다")]),e._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("Before                                    After\nA---B---C---F---G (branch)                A---B---C---F---G (branch)\n         \\                                             \\\n          D---E---H---I (HEAD my-branch)                E'---H'---I' (HEAD my-branch)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h4",{attrs:{id:"onto-with-3-args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onto-with-3-args"}},[e._v("#")]),e._v(" "),a("code",[e._v("--onto")]),e._v(" with 3 args")]),e._v(" "),a("p",[e._v("3개의 인자를 사용하는 onto rebase 명령어")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git rebase --onto <newparent_commit> <oldparent_commit> <until_commit>")])]),e._v(" "),a("li",[e._v("브랜치(2개의 인자 사용시) 대신 커밋이 세 번째 인자로 전달하고, 브랜치의 base가 아닌 해당 커밋 hierarchy base가 변경된다")]),e._v(" "),a("li",[a("code",[e._v("oldparent_commit.child ~ until_commit")]),e._v(" 범위로 새로운 detached 커밋 hierarchy가 생성하고 "),a("code",[e._v("newparent_commit")]),e._v(" 커밋을 base로 삼는다")])]),e._v(" "),a("p",[a("code",[e._v("git rebase --onto F D H")])]),e._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[e._v("Before                                    After\nA---B---C---F---G (branch)                A---B---C---F---G (branch)\n         \\                                        |    \\\n          D---E---H---I (HEAD my-branch)          |     E'---H' (HEAD)\n                                                   \\\n                                                    D---E---H---I (my-branch)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h3",{attrs:{id:"rebase를-통한-원격-작업-예시"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase를-통한-원격-작업-예시"}},[e._v("#")]),e._v(" rebase를 통한 원격 작업 예시")]),e._v(" "),a("p",[e._v("작업시작을 위한 명령")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch develop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull --rebase"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("preserve origin develop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch -c feature-foobar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 작업을 한다")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("원격 저장소에 업데이트 된 내용이 있을 수 있으므로 우선 동기화하고 rebase 실행")]),e._v(" "),a("blockquote",[a("p",[e._v("push 이후에는 rebase 하지 않는다")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch develop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull --rebase"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("preserve\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" switch feature-foobar\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase develop\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("rebase 이후에는 PR 생성")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin feature-foobar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# PR & 코드 리뷰 ...")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("또는 직접 merge 실행")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge --no-ff feature-foobar main\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("과정이 끝나면 branch는 닫는다")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch --delete feature-foobar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# PR시 branch 삭제하거나 직접 삭제")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --delete origin feature-foobar\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"branch-checkout-switch-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch-checkout-switch-restore"}},[e._v("#")]),e._v(" Branch / Checkout (Switch & Restore)")]),e._v(" "),a("ul",[a("li",[e._v("로컬 브랜치 목록: "),a("code",[e._v("git branch")])]),e._v(" "),a("li",[e._v("원격 브랜치 목록: "),a("code",[e._v("git branch -r")])]),e._v(" "),a("li",[e._v("전체 브랜치 목록: "),a("code",[e._v("git branch -a")])]),e._v(" "),a("li",[e._v("브랜치 삭제: "),a("code",[e._v("git branch --delete(-d) <branch>")])]),e._v(" "),a("li",[e._v("브랜치 (강제)삭제: "),a("code",[e._v("git branch -D <branch>")])]),e._v(" "),a("li",[e._v("브랜치 이름 변경: "),a("code",[e._v("git branch -m <before> <after>")])]),e._v(" "),a("li",[e._v("병합된 로컬 브랜치 모두 삭제: "),a("code",[e._v('git branch --merged | egrep -v "(^\\*|main|development|제외할브랜치)" | xargs git branch -d')])])]),e._v(" "),a("blockquote",[a("p",[e._v("git 2.23 버전부터 checkout 명령이 switch, restore 명령으로 분리되었다")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/docs/git-switch",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com/docs/git-switch"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("브랜치 전환: "),a("code",[e._v("git switch <branch>")])]),e._v(" "),a("li",[e._v("브랜치 생성: "),a("code",[e._v("git switch -c <branch> [from-commit]")])]),e._v(" "),a("li",[e._v("HEAD 이동 (detach): "),a("code",[e._v("git switch -d [<start-point>]")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/docs/git-restore",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com/docs/git-restore"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("되돌리기(unstaged 파일 변경점 되돌리기): "),a("code",[e._v("git restore <filename>")])]),e._v(" "),a("li",[e._v("되돌리기(staged -> unstaged): "),a("code",[e._v("git restore --staged <filename>")])])]),e._v(" "),a("h2",{attrs:{id:"remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[e._v("#")]),e._v(" Remote")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("생성한 브랜치 원격 저장소 최초 커밋시 push")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git push --set-upstream <remote> <branch>")])]),e._v(" "),a("li",[a("code",[e._v("git push -u <remote> <branch>")])])])]),e._v(" "),a("li",[a("p",[e._v("원격 저장소 브랜치와 연결")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git branch --set-upstream-to <remote>/<branch>")])]),e._v(" "),a("li",[e._v("alias "),a("code",[e._v("git branch -u <remote>/<branch>")])])])])]),e._v(" "),a("h3",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[e._v("#")]),e._v(" Fetch")]),e._v(" "),a("p",[e._v("remote에서 데이터 가져오기(local에 반영하지는 않음): "),a("code",[e._v("git fetch")])]),e._v(" "),a("p",[e._v("remote에서 삭제한 branch 로컬 반영(로컬에서도 브랜치 삭제): "),a("code",[e._v("git fetch --all(-a) --prune(-p)")])]),e._v(" "),a("ul",[a("li",[e._v("update all remote references ("),a("code",[e._v("--all")]),e._v(")")]),e._v(" "),a("li",[e._v("drop deleted ones ("),a("code",[e._v("--prune")]),e._v(")")])]),e._v(" "),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[e._v("#")]),e._v(" Pull")]),e._v(" "),a("p",[a("code",[e._v("git pull")])]),e._v(" "),a("p",[a("code",[e._v("git pull --rebase")])]),e._v(" "),a("h3",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[e._v("#")]),e._v(" Push")]),e._v(" "),a("h4",{attrs:{id:"remote-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-branch"}},[e._v("#")]),e._v(" Remote Branch")]),e._v(" "),a("p",[e._v("branch push")]),e._v(" "),a("p",[a("code",[e._v("git push <remote> <branch>")])]),e._v(" "),a("p",[e._v("branch 삭제")]),e._v(" "),a("p",[a("code",[e._v("git push --delete origin feature-foobar")])]),e._v(" "),a("p",[a("code",[e._v("git push origin :<branch>")])]),e._v(" "),a("blockquote",[a("p",[e._v("alias "),a("code",[e._v("[empty-localbranch]:[remotebranch]")]),e._v(" === 비어있는 localbranch(empty reference)를 원격의 remotebranch로 push")])]),e._v(" "),a("h4",{attrs:{id:"remote-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-tag"}},[e._v("#")]),e._v(" Remote Tag")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Remote에 태그 Push: "),a("code",[e._v("git push <origin> <태그이름>")])])]),e._v(" "),a("li",[a("p",[e._v("Remote에 없는 태그 모두 Push: "),a("code",[e._v("git push origin --tags")])])]),e._v(" "),a("li",[a("p",[e._v("Remote 태그 삭제")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("git push --delete origin tagname")])]),e._v(" "),a("li",[a("code",[e._v("git push origin :tagname")])])])])]),e._v(" "),a("h2",{attrs:{id:"gitignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[e._v("#")]),e._v(" "),a("code",[e._v(".gitignore")])]),e._v(" "),a("ul",[a("li",[e._v("아무것도 없는 라인이나, "),a("code",[e._v("#")]),e._v("로 시작하는 라인은 무시")]),e._v(" "),a("li",[e._v("프로젝트 전체에 적용되는 표준 Glob 패턴을 사용")]),e._v(" "),a("li",[e._v("슬래시("),a("code",[e._v("/")]),e._v(")로 시작하면 하위 디렉토리에 적용되지(Recursivity) 않음")]),e._v(" "),a("li",[e._v("디렉토리는 슬래시("),a("code",[e._v("/")]),e._v(")를 끝에 사용하는 것으로 표현")]),e._v(" "),a("li",[e._v("느낌표("),a("code",[e._v("!")]),e._v(")로 시작하는 패턴의 파일은 무시하지 않음")])]),e._v(" "),a("h2",{attrs:{id:"특정-기록-완전-삭제-데이터-손상-위험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#특정-기록-완전-삭제-데이터-손상-위험"}},[e._v("#")]),e._v(" 특정 기록 완전 삭제 (데이터 손상 위험)")]),e._v(" "),a("blockquote",[a("p",[e._v("파일 이동이 있었다면, 파일이 존재했던 모든 경로의 기록을 삭제 해야함")])]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" filter-branch --force --index-filter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'git rm --cached --ignore-unmatch <URL_TO_FILE_OR_DIR>'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --prune-empty --tag-name-filter "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" -- --all\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("git repo 정리")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf .git/refs/original/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reflog expire --expire"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("now --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" gc --prune"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("now\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" gc --aggressive --prune"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("now\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("원격 저장소 반영")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --all --force\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);