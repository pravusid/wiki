(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{408:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-config"}},[s._v("#")]),s._v(" Git Config")]),s._v(" "),a("h2",{attrs:{id:"overall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overall"}},[s._v("#")]),s._v(" overall")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/pravusid/sys-config/blob/main/.gitconfig",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/pravusid/sys-config/blob/main/.gitconfig"),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("ref: "),a("a",{attrs:{href:"https://johngrib.github.io/wiki/git-alias/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://johngrib.github.io/wiki/git-alias/"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"git-diff-with-delta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-with-delta"}},[s._v("#")]),s._v(" git diff with delta")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dandavison/delta",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/dandavison/delta"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[core]\n    pager = delta\n\n[delta]\n    plus-color = "#012800"\n    minus-color = "#340001"\n    syntax-theme = Nord\n\n[interactive]\n    diffFilter = delta --color-only\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"include-includeif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-includeif"}},[s._v("#")]),s._v(" include / includeIf")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_common\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:~/Documents/private/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_private\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:~/Documents/work/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_work\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"multiple-ssh-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multiple-ssh-keys"}},[s._v("#")]),s._v(" multiple ssh-keys")]),s._v(" "),a("p",[a("code",[s._v("~/.ssh/config")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host github-private\n    HostName github.com\n    User git\n    IdentityFile ~/.ssh/id_rsa_private\n\nHost github-work\n    HostName github.com\n    User git\n    IdentityFile ~/.ssh/id_rsa_work\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("code",[s._v(".git/config")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[remote "orgin"]\n    url = git@github-work:{GithubID}/{RepositoryName}.git\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);