"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[103],{6255:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-6c94be79",path:"/software/mac.html",title:"Mac 平台",lang:"zh-CN",frontmatter:{sidebarDepth:2},excerpt:"",headers:[{level:2,title:"Homebrew",slug:"homebrew",children:[]},{level:2,title:"iTerm2",slug:"iterm2",children:[{level:3,title:"配色方案",slug:"配色方案",children:[]},{level:3,title:"Fig",slug:"fig",children:[]}]},{level:2,title:"效率神器 Alfred",slug:"效率神器-alfred",children:[]},{level:2,title:"Mac 微信功能拓展",slug:"mac-微信功能拓展",children:[]},{level:2,title:"IINA",slug:"iina",children:[]},{level:2,title:"eZip",slug:"ezip",children:[]},{level:2,title:"腾讯柠檬清理",slug:"腾讯柠檬清理",children:[]},{level:2,title:"截图神器 IShot",slug:"截图神器-ishot",children:[]},{level:2,title:"超级右键 iRightMouse",slug:"超级右键-irightmouse",children:[]},{level:2,title:"翻译软件 Bob",slug:"翻译软件-bob",children:[]},{level:2,title:"菜单栏图标管理 Hidden Bar",slug:"菜单栏图标管理-hidden-bar",children:[]},{level:2,title:"音量管理 BackgroundMusic",slug:"音量管理-backgroundmusic",children:[]},{level:2,title:"窗口管理神器 Rectangle",slug:"窗口管理神器-rectangle",children:[]}],filePathRelative:"software/mac.md",git:{updatedTime:1657461749e3}}},3861:(n,s,e)=>{e.r(s),e.d(s,{default:()=>On});var a=e(6252);const l=(0,a.uE)('<h1 id="mac-平台" tabindex="-1"><a class="header-anchor" href="#mac-平台" aria-hidden="true">#</a> Mac 平台</h1><h2 id="homebrew" tabindex="-1"><a class="header-anchor" href="#homebrew" aria-hidden="true">#</a> Homebrew</h2><p>Mac 上安装命令行程序最好的工具</p><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">/bin/bash -c </span><span style="color:#CE9178;">&quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>常用命令</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 更新 Homebrew</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew update</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看已安装的包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew list</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看可更新的包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew outdated</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 更新所有包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew upgrade</span></span>\n<span class="line"><span style="color:#6A9955;"># 更新指定包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew upgrade git</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看包的详细信息</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew info git</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 清理所有包的旧版本</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew cleanup</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看可清理的旧版本包</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew cleanup -n</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>切换镜像</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 切换 brew.git</span></span>\n<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;$(brew --repo)&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换 homebrew-core.git</span></span>\n<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;$(brew --repo)/Library/Taps/homebrew/homebrew-core&quot;</span></span>\n<span class="line"><span style="color:#D4D4D4;">git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 刷新</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew update</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换 homebrew-bottles</span></span>\n<span class="line"><span style="color:#6A9955;"># 查看当前 shell</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$SHELL</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># Bash 版本</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; ~/.bash_profile</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.bash_profile</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># Zsh 版本</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; ~/.zshrc</span></span>\n<span class="line"><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;"> ~/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',9),r=(0,a.Uk)("切换镜像详细可查看"),p={href:"https://developer.aliyun.com/mirror/homebrew?spm=a2c6h.13651102.0.0.e40a1b11ZkPX9D",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("阿里云 Homebrew 镜像"),o=(0,a.Uk)("其他教程 "),c={href:"https://gitee.com/cunkai/HomebrewCN",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("Homebrew 国内安装脚本"),b={href:"https://github.com/ineo6/homebrew-install",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("Homebrew 安装教程"),u={href:"https://github.com/Homebrew",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("Github"),d={href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("软件官网"),g=(0,a.uE)('<h2 id="iterm2" tabindex="-1"><a class="header-anchor" href="#iterm2" aria-hidden="true">#</a> iTerm2</h2><p>Mac 上最好用的终端</p><ol><li>支持子窗口</li><li>自动补全</li><li>查看粘贴历史</li><li>自定义配置项</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 查看所有的 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">cat /etc/shells</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看当前窗口使用的 shell</span></span>\n<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">$SHELL</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 查看系统用户默认的 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">cat /etc/passwd | grep sh</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 切换系统默认 shell</span></span>\n<span class="line"><span style="color:#D4D4D4;">chsh -s /bin/zsh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',4),D={href:"https://github.com/gnachman/iTerm2",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("Github"),f={href:"https://www.iterm2.com",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("软件官网"),w=(0,a._)("h3",{id:"配色方案",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#配色方案","aria-hidden":"true"},"#"),(0,a.Uk)(" 配色方案")],-1),A={href:"https://github.com/mbadolato/iTerm2-Color-Schemes",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("iTerm2-Color-Schemes"),v={href:"https://github.com/MartinSeeler/iterm2-material-design",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("iterm2-material-design"),C=(0,a.uE)('<h3 id="fig" tabindex="-1"><a class="header-anchor" href="#fig" aria-hidden="true">#</a> Fig</h3><p>终端自动补全命令提示工具</p><ul><li>支持近 300 多种 <code>CLI</code> 工具的补全提示，如 <code>cd git brew npm yarn</code></li><li>支持插件</li><li>支持自定义补全规范</li></ul><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">brew install --cask fig</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在 <code>vscode</code> 中使用，需修改 <code>editor.accessibilitySupport</code> 为 <code>&quot;off&quot;</code></p>',6),W={href:"https://github.com/withfig/autocomplete",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Github"),B={href:"https://fig.io/",target:"_blank",rel:"noopener noreferrer"},M=(0,a.Uk)("软件官网"),S=(0,a._)("h2",{id:"效率神器-alfred",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#效率神器-alfred","aria-hidden":"true"},"#"),(0,a.Uk)(" 效率神器 Alfred")],-1),H=(0,a._)("ol",null,[(0,a._)("li",null,"定位文件、打开文件"),(0,a._)("li",null,"打开网址、书签、App"),(0,a._)("li",null,"自定义搜索"),(0,a._)("li",null,"查看剪贴板历史"),(0,a._)("li",null,[(0,a.Uk)("计算器、查词典、运行 "),(0,a._)("code",null,"shell"),(0,a.Uk)(" 命令")])],-1),T={href:"https://www.alfredapp.com",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("软件官网"),O=(0,a.uE)('<h2 id="mac-微信功能拓展" tabindex="-1"><a class="header-anchor" href="#mac-微信功能拓展" aria-hidden="true">#</a> Mac 微信功能拓展</h2><ol><li>消息防撤回</li><li>免认证登录与多开</li><li>消息处理增强(表情导出、二维码识别等)</li></ol><p>安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 安装 WeChatTweak-CLI</span></span>\n<span class="line"><span style="color:#D4D4D4;">brew install sunnyyoung/repo/wechattweak-cli</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 安装 Tweak</span></span>\n<span class="line"><span style="color:#D4D4D4;">sudo wechattweak-cli --install</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 卸载</span></span>\n<span class="line"><span style="color:#D4D4D4;">sudo wechattweak-cli --uninstall</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',4),q={href:"https://github.com/Sunnyyoung/WeChatTweak-macOS",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("Github"),z=(0,a._)("h2",{id:"iina",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#iina","aria-hidden":"true"},"#"),(0,a.Uk)(" IINA")],-1),G=(0,a._)("p",null,"视频播放器",-1),R=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁、美观，契合 macOS 设计风格"),(0,a._)("li",null,"功能强大，设置以播放体验为中心"),(0,a._)("li",null,"支持鼠标和触控板手势"),(0,a._)("li",null,"在线字幕、缩略图预览、画中画等")],-1),F={href:"https://github.com/iina/iina",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("Github"),Z={href:"https://iina.io/",target:"_blank",rel:"noopener noreferrer"},$=(0,a.Uk)("软件官网"),P=(0,a._)("h2",{id:"ezip",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ezip","aria-hidden":"true"},"#"),(0,a.Uk)(" eZip")],-1),Q=(0,a._)("p",null,"专为 macOS 而设计的压缩软件",-1),X=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁、美观，完美兼容 Mojave"),(0,a._)("li",null,"支持超过 20 种压缩格式"),(0,a._)("li",null,"批量文件加密")],-1),j={href:"https://ezip.awehunt.com",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("软件官网"),J=(0,a._)("h2",{id:"腾讯柠檬清理",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#腾讯柠檬清理","aria-hidden":"true"},"#"),(0,a.Uk)(" 腾讯柠檬清理")],-1),K=(0,a._)("ol",null,[(0,a._)("li",null,"界面简洁清新"),(0,a._)("li",null,"支持垃圾清理、文件查重、软件卸载"),(0,a._)("li",null,"支持微信、QQ、XCode、Sketch 深度扫描清理")],-1),V={href:"https://lemon.qq.com",target:"_blank",rel:"noopener noreferrer"},nn=(0,a.Uk)("软件官网"),sn=(0,a._)("h2",{id:"截图神器-ishot",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#截图神器-ishot","aria-hidden":"true"},"#"),(0,a.Uk)(" 截图神器 IShot")],-1),en=(0,a._)("ol",null,[(0,a._)("li",null,"区域截图、窗口截图、多窗口截图、延时截图、长截图、滚动截图"),(0,a._)("li",null,"快速标注(矩形、圆形、横线、箭头、画笔、马赛克、文字标记、序号标签、局部高亮)"),(0,a._)("li",null,"支持截图导圆角、阴影调节"),(0,a._)("li",null,"贴图、取色")],-1),an={href:"https://www.better365.cn/ishot.html",target:"_blank",rel:"noopener noreferrer"},ln=(0,a.Uk)("软件官网"),rn={href:"https://apps.apple.com/cn/app/ishot-%E6%88%AA%E5%9B%BE-%E5%BD%95%E5%B1%8F-2020%E5%85%A8%E6%96%B0%E9%AB%98%E5%BA%A6/id1485844094",target:"_blank",rel:"noopener noreferrer"},pn=(0,a.Uk)("App Store"),on=(0,a._)("h2",{id:"超级右键-irightmouse",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#超级右键-irightmouse","aria-hidden":"true"},"#"),(0,a.Uk)(" 超级右键 iRightMouse")],-1),cn=(0,a._)("ol",null,[(0,a._)("li",null,"多种格式的右键新建文件"),(0,a._)("li",null,"快速移动文件"),(0,a._)("li",null,"常用目录设置"),(0,a._)("li",null,"快速打开终端、vscode 等")],-1),tn={href:"https://www.better365.cn/irightmouse.html",target:"_blank",rel:"noopener noreferrer"},bn=(0,a.Uk)("软件官网"),hn={href:"https://apps.apple.com/cn/app/irightmouse-%E8%B6%85%E7%BA%A7%E5%8F%B3%E9%94%AE/id1497428978",target:"_blank",rel:"noopener noreferrer"},un=(0,a.Uk)("App Store"),mn=(0,a._)("h2",{id:"翻译软件-bob",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#翻译软件-bob","aria-hidden":"true"},"#"),(0,a.Uk)(" 翻译软件 Bob")],-1),dn=(0,a._)("ol",null,[(0,a._)("li",null,"支持划词、截图、输入翻译"),(0,a._)("li",null,"支持翻译多开"),(0,a._)("li",null,"自动识别语种"),(0,a._)("li",null,"可自定义插件")],-1),_n={href:"https://github.com/ripperhe/Bob",target:"_blank",rel:"noopener noreferrer"},gn=(0,a.Uk)("Github"),Dn={href:"https://ripperhe.gitee.io/bob",target:"_blank",rel:"noopener noreferrer"},kn=(0,a.Uk)("软件官网"),fn=(0,a._)("h2",{id:"菜单栏图标管理-hidden-bar",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#菜单栏图标管理-hidden-bar","aria-hidden":"true"},"#"),(0,a.Uk)(" 菜单栏图标管理 Hidden Bar")],-1),yn=(0,a._)("ol",null,[(0,a._)("li",null,"简单易用、支持全局快捷键"),(0,a._)("li",null,"免费开源、支持中文")],-1),wn={href:"https://github.com/dwarvesf/hidden",target:"_blank",rel:"noopener noreferrer"},An=(0,a.Uk)("Github"),En={href:"https://apps.apple.com/cn/app/hidden-bar/id1452453066",target:"_blank",rel:"noopener noreferrer"},vn=(0,a.Uk)("App Store"),Un=(0,a._)("h2",{id:"音量管理-backgroundmusic",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#音量管理-backgroundmusic","aria-hidden":"true"},"#"),(0,a.Uk)(" 音量管理 BackgroundMusic")],-1),Cn=(0,a._)("ol",null,[(0,a._)("li",null,"背景音乐管理"),(0,a._)("li",null,"设置各个应用程序的音量"),(0,a._)("li",null,"录制系统音频")],-1),Wn={href:"https://github.com/kyleneideck/BackgroundMusic",target:"_blank",rel:"noopener noreferrer"},xn=(0,a.Uk)("Github"),Bn=(0,a._)("h2",{id:"窗口管理神器-rectangle",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#窗口管理神器-rectangle","aria-hidden":"true"},"#"),(0,a.Uk)(" 窗口管理神器 Rectangle")],-1),Mn={href:"https://github.com/rxhanson/Rectangle",target:"_blank",rel:"noopener noreferrer"},Sn=(0,a.Uk)("Github"),Hn={href:"https://rectangleapp.com/",target:"_blank",rel:"noopener noreferrer"},Tn=(0,a.Uk)("软件官网"),Ln={},On=(0,e(3744).Z)(Ln,[["render",function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[l,(0,a._)("p",null,[r,(0,a._)("a",p,[i,(0,a.Wm)(e)])]),(0,a._)("ul",null,[(0,a._)("li",null,[o,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",c,[t,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",b,[h,(0,a.Wm)(e)])])])])]),(0,a._)("p",null,[(0,a._)("a",u,[m,(0,a.Wm)(e)]),(0,a._)("a",d,[_,(0,a.Wm)(e)])]),g,(0,a._)("p",null,[(0,a._)("a",D,[k,(0,a.Wm)(e)]),(0,a._)("a",f,[y,(0,a.Wm)(e)])]),w,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",A,[E,(0,a.Wm)(e)])]),(0,a._)("li",null,[(0,a._)("a",v,[U,(0,a.Wm)(e)])])]),C,(0,a._)("p",null,[(0,a._)("a",W,[x,(0,a.Wm)(e)]),(0,a._)("a",B,[M,(0,a.Wm)(e)])]),S,H,(0,a._)("p",null,[(0,a._)("a",T,[L,(0,a.Wm)(e)])]),O,(0,a._)("p",null,[(0,a._)("a",q,[I,(0,a.Wm)(e)])]),z,G,R,(0,a._)("p",null,[(0,a._)("a",F,[N,(0,a.Wm)(e)]),(0,a._)("a",Z,[$,(0,a.Wm)(e)])]),P,Q,X,(0,a._)("p",null,[(0,a._)("a",j,[Y,(0,a.Wm)(e)])]),J,K,(0,a._)("p",null,[(0,a._)("a",V,[nn,(0,a.Wm)(e)])]),sn,en,(0,a._)("p",null,[(0,a._)("a",an,[ln,(0,a.Wm)(e)]),(0,a._)("a",rn,[pn,(0,a.Wm)(e)])]),on,cn,(0,a._)("p",null,[(0,a._)("a",tn,[bn,(0,a.Wm)(e)]),(0,a._)("a",hn,[un,(0,a.Wm)(e)])]),mn,dn,(0,a._)("p",null,[(0,a._)("a",_n,[gn,(0,a.Wm)(e)]),(0,a._)("a",Dn,[kn,(0,a.Wm)(e)])]),fn,yn,(0,a._)("p",null,[(0,a._)("a",wn,[An,(0,a.Wm)(e)]),(0,a._)("a",En,[vn,(0,a.Wm)(e)])]),Un,Cn,(0,a._)("p",null,[(0,a._)("a",Wn,[xn,(0,a.Wm)(e)])]),Bn,(0,a._)("p",null,[(0,a._)("a",Mn,[Sn,(0,a.Wm)(e)]),(0,a._)("a",Hn,[Tn,(0,a.Wm)(e)])])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);