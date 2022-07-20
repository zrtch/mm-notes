"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[784],{7825:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-7bd3de6f","path":"/node/toolkit.html","title":"常用工具包","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"nvm","slug":"nvm","children":[]},{"level":2,"title":"nrm","slug":"nrm","children":[]},{"level":2,"title":"nodemon","slug":"nodemon","children":[]},{"level":2,"title":"npm-check-updates","slug":"npm-check-updates","children":[]},{"level":2,"title":"yalc","slug":"yalc","children":[]},{"level":2,"title":"pm2","slug":"pm2","children":[]}],"git":{"updatedTime":1658321253000},"filePathRelative":"node/toolkit.md"}')},1539:(s,n,a)=>{a.r(n),a.d(n,{default:()=>W});var l=a(6252);const e=(0,l.uE)('<h1 id="常用工具包" tabindex="-1"><a class="header-anchor" href="#常用工具包" aria-hidden="true">#</a> 常用工具包</h1><blockquote><p>只介绍安装方法和常用命令，具体可点击其 github 查看详情</p></blockquote><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><p><code>node</code> 版本管理工具</p><p>安装前，需要将已安装的 <code>nodejs</code> 进行卸载</p><h4 id="安装和设置-windows" tabindex="-1"><a class="header-anchor" href="#安装和设置-windows" aria-hidden="true">#</a> 安装和设置 - Windows</h4>',6),i={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Windows 下载地址"),c=(0,l.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 设置 node 镜像</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm node_mirror https://npmmirror.com/mirrors/node/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 设置 npm 镜像</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm npm_mirror https://npmmirror.com/mirrors/npm/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装和设置-mac" tabindex="-1"><a class="header-anchor" href="#安装和设置-mac" aria-hidden="true">#</a> 安装和设置 - Mac</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash</span></span>\n<span class="line"><span style="color:#6A9955;"># OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">curl -o- https://gitee.com/mirrors/nvm/raw/v0.37.2/install.sh | bash</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在 ~/.zshrc 中配置</span></span>\n<span class="line"><span style="color:#569CD6;">export</span><span style="color:#D4D4D4;"> NVM_DIR=</span><span style="color:#CE9178;">&quot;</span><span style="color:#9CDCFE;">$HOME</span><span style="color:#CE9178;">/.nvm&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">[ -s </span><span style="color:#CE9178;">&quot;</span><span style="color:#9CDCFE;">$NVM_DIR</span><span style="color:#CE9178;">/nvm.sh&quot;</span><span style="color:#D4D4D4;"> ] &amp;&amp; </span><span style="color:#D7BA7D;">\\.</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#9CDCFE;">$NVM_DIR</span><span style="color:#CE9178;">/nvm.sh&quot;</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># This loads nvm</span></span>\n<span class="line"><span style="color:#D4D4D4;">[ -s </span><span style="color:#CE9178;">&quot;</span><span style="color:#9CDCFE;">$NVM_DIR</span><span style="color:#CE9178;">/bash_completion&quot;</span><span style="color:#D4D4D4;"> ] &amp;&amp; </span><span style="color:#D7BA7D;">\\.</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;</span><span style="color:#9CDCFE;">$NVM_DIR</span><span style="color:#CE9178;">/bash_completion&quot;</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># This loads nvm bash_completion</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 使配置生效</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看 nvm 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm version</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 安装最新版的 node</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm install latest</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 安装指定版本的 node</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm install [版本号]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 卸载指定版本的 node</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm uninstall [版本号]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看已安装的 node 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm ls</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换到指定的 node 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm use [版本号]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 设置默认 node 版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">nvm </span><span style="color:#DCDCAA;">alias</span><span style="color:#D4D4D4;"> default [版本号]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5),r={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},o=(0,l.Uk)("Github - Mac"),d={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},t=(0,l.Uk)("Github - Windows"),v={href:"https://npmmirror.com/mirrors/node/",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("node 版本目录"),u=(0,l.uE)('<h2 id="nrm" tabindex="-1"><a class="header-anchor" href="#nrm" aria-hidden="true">#</a> nrm</h2><p><code>npm registry</code> 管理工具，能够查看和切换当前使用的 <code>registry</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm install -g nrm</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看所有 registry</span></span>\n<span class="line"><span style="color:#D4D4D4;">nrm ls</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换 registry</span></span>\n<span class="line"><span style="color:#D4D4D4;">nrm use yarn</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 添加自定义 registry</span></span>\n<span class="line"><span style="color:#D4D4D4;"> nrm add [别名] [registry 地址]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),b={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},D=(0,l.Uk)("Github"),h=(0,l.uE)('<h2 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon" aria-hidden="true">#</a> nodemon</h2><p>用于监视 <code>node.js</code> 中当前应用程序的任何更改并自动重启服务器</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm install -g nodemon</span></span>\n<span class="line"><span style="color:#6A9955;">#OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm install --save-dev nodemon</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 启动项目</span></span>\n<span class="line"><span style="color:#D4D4D4;">nodemon [入口文件]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),y={href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("Github"),k=(0,l.uE)('<h2 id="npm-check-updates" tabindex="-1"><a class="header-anchor" href="#npm-check-updates" aria-hidden="true">#</a> npm-check-updates</h2><p>更新 package.json 中的依赖包</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm install -g npm-check-updates</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 检查所有依赖包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu</span></span>\n<span class="line"><span style="color:#6A9955;"># 检查指定包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu axios</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 直接升级所有依赖包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu -u</span></span>\n<span class="line"><span style="color:#6A9955;"># 升级指定包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu -u axios</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 询问升级依赖包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu -i</span></span>\n<span class="line"><span style="color:#6A9955;"># 升级指定包版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu -i axios</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 指定版本范围</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu --target minor</span></span>\n<span class="line"><span style="color:#6A9955;"># OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">ncu --target patch</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),A={href:"https://github.com/tjunnone/npm-check-updates",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("Github"),_=(0,l.uE)('<h2 id="yalc" tabindex="-1"><a class="header-anchor" href="#yalc" aria-hidden="true">#</a> yalc</h2><p><code>npm</code> 包调试工具，可配合 <code>nodemon</code> 做自动化</p><blockquote><p>在本地将 npm 包模拟发布，将发布后的资源存放在全局，再通过 <code>yalc</code> 命令将包添加至对应项目中</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm i yalc -g</span></span>\n<span class="line"><span style="color:#6A9955;">#OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn global add yalc</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 发布</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc publish</span></span>\n<span class="line"><span style="color:#6A9955;"># OR 快速更新所有依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc push</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 添加依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc add [my-package]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 链接</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc link</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 更新依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc update</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 移除依赖</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc remove [my-package]</span></span>\n<span class="line"><span style="color:#6A9955;"># 移除所有依赖并还原</span></span>\n<span class="line"><span style="color:#D4D4D4;">yalc remove --all</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),f={href:"https://github.com/wclr/yalc",target:"_blank",rel:"noopener noreferrer"},C=(0,l.Uk)("Github"),x=(0,l.uE)('<h2 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h2><p><code>node</code> 进程管理工具，提供了进程监控、负载均衡、内存监控、日志管理、服务管理等功能</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm install pm2 -g</span></span>\n<span class="line"><span style="color:#6A9955;">#OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn global add pm2</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 启动应用</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 start [入口文件]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看 pm2 管理的所有应用列表</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 list</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看指定应用的所有信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 show [id]</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 show [name]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 停止应用</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 stop [id]</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 stop [name]</span></span>\n<span class="line"><span style="color:#6A9955;"># 停止所有应用</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 stop all</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 重启应用</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 restart [id]</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 restart [name]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看日志</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 logs</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 logs [id]</span></span>\n<span class="line"><span style="color:#D4D4D4;">pm2 logs [name]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),w={href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"},q=(0,l.Uk)("Github"),R={},W=(0,a(3744).Z)(R,[["render",function(s,n){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[e,(0,l._)("p",null,[(0,l._)("a",i,[p,(0,l.Wm)(a)])]),c,(0,l._)("p",null,[(0,l._)("a",r,[o,(0,l.Wm)(a)])]),(0,l._)("p",null,[(0,l._)("a",d,[t,(0,l.Wm)(a)])]),(0,l._)("p",null,[(0,l._)("a",v,[m,(0,l.Wm)(a)])]),u,(0,l._)("p",null,[(0,l._)("a",b,[D,(0,l.Wm)(a)])]),h,(0,l._)("p",null,[(0,l._)("a",y,[g,(0,l.Wm)(a)])]),k,(0,l._)("p",null,[(0,l._)("a",A,[E,(0,l.Wm)(a)])]),_,(0,l._)("p",null,[(0,l._)("a",f,[C,(0,l.Wm)(a)])]),x,(0,l._)("p",null,[(0,l._)("a",w,[q,(0,l.Wm)(a)])])])}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,l]of n)a[s]=l;return a}}}]);