(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{458:function(t,n,s){"use strict";s.r(n);var a=s(33),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-命令清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令清单"}},[t._v("#")]),t._v(" Git 命令清单")]),t._v(" "),s("h2",{attrs:{id:"_1-新建-git-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建-git-仓库"}},[t._v("#")]),t._v(" 1. 新建 git 仓库")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前目录新建一个 Git 仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个目录，将其初始化为 Git 仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载一个项目和它的整个代码历史")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[t._v("#")]),t._v(" 2. 配置")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前的Git配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交代码时的用户信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名称"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"邮箱地址"')]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-向暂存区添加-删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-向暂存区添加-删除文件"}},[t._v("#")]),t._v(" 3. 向暂存区添加 / 删除文件")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件或指定目录到暂存区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径 / 目录路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加所有文件到暂存区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 停止追踪指定文件并保留在工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除工作区文件并且提交到暂存区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-代码提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-代码提交"}},[t._v("#")]),t._v(" 4. 代码提交")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("提交信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend -m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("提交信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-分支"}},[t._v("#")]),t._v(" 5. 分支")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支和远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，但依然停留在当前分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，并切换到该分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向指定commit")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，与指定的远程分支建立追踪关系")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --track "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个空白分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支，并更新工作区")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到上一个分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -dr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote/分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_6-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-标签"}},[t._v("#")]),t._v(" 6. 标签")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有 tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据当前 commit 创建一个 tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据指定 commit 创建一个 tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地 tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程 tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 tag 信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交指定tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --tags\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向某个tag")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"_7-查看信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看信息"}},[t._v("#")]),t._v(" 7. 查看信息")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示变更的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的版本历史")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示commit历史，以及每次commit发生变更的文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 搜索提交历史，根据关键词")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -S "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("keyword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个文件的版本历史，包括文件改名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --follow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" whatchanged "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件相关的每一次diff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示过去5次提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -5 --pretty --oneline\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有提交过的用户，按提交次数排序")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" shortlog -sn\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定文件是什么人在什么时间修改过")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" blame "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示暂存区和工作区的差异")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示工作区与当前分支最新 commit 之间的差异")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示今天你写了多少行代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" --shortstat "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@{0 day ago}"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的最近几次提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),s("h2",{attrs:{id:"_8-提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-提交"}},[t._v("#")]),t._v(" 8. 提交")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库的所有变动")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个远程仓库的信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加一个新的远程仓库，并命名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传本地指定分支到远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强行推送当前分支到远程仓库，即使有冲突")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --force\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有分支到远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --all\n")])])]),s("h2",{attrs:{id:"_9-撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-撤销"}},[t._v("#")]),t._v(" 9. 撤销")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件路径"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置暂存区与工作区，与上一次 commit 保持一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --keep "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂时将未提交的变化移除，稍后再移入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop\n")])])]),s("p",[s("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址：阮一峰 -- 常用 Git 命令清单"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);