"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[709],{4234:(s,n,e)=>{e.r(n),e.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-6dcf6fe2","path":"/node/npm.html","title":"npm 相关","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"镜像相关","slug":"镜像相关","children":[]},{"level":2,"title":"查看已安装的依赖包","slug":"查看已安装的依赖包","children":[]},{"level":2,"title":"查看依赖包的安装路径","slug":"查看依赖包的安装路径","children":[]},{"level":2,"title":"清除缓存","slug":"清除缓存","children":[]},{"level":2,"title":"导航到 npm 的相关页面","slug":"导航到-npm-的相关页面","children":[{"level":3,"title":"打开文档","slug":"打开文档","children":[]},{"level":3,"title":"打开 GitHub repo","slug":"打开-github-repo","children":[]},{"level":3,"title":"打开 GitHub issues","slug":"打开-github-issues","children":[]}]},{"level":2,"title":"脚本命令相关","slug":"脚本命令相关","children":[]}],"git":{"updatedTime":1658321253000},"filePathRelative":"node/npm.md"}')},1550:(s,n,e)=>{e.r(n),e.d(n,{default:()=>p});var a=e(6252);const l=[(0,a.uE)('<h1 id="npm-相关" tabindex="-1"><a class="header-anchor" href="#npm-相关" aria-hidden="true">#</a> npm 相关</h1><h2 id="镜像相关" tabindex="-1"><a class="header-anchor" href="#镜像相关" aria-hidden="true">#</a> 镜像相关</h2><p>设置淘宝镜像</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm config </span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;"> registry https://registry.npmmirror.com</span></span>\n<span class="line"><span style="color:#6A9955;"># yarn</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn config </span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;"> registry https://registry.npmmirror.com</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看镜像源地址</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm config get registry</span></span>\n<span class="line"><span style="color:#6A9955;"># yarn</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn config get registry</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看已安装的依赖包" tabindex="-1"><a class="header-anchor" href="#查看已安装的依赖包" aria-hidden="true">#</a> 查看已安装的依赖包</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 当前项目</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm list --depth 0</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 全局</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm list -g --depth 0</span></span>\n<span class="line"><span style="color:#6A9955;"># yarn</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn global list --depth=0</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看依赖包的安装路径" tabindex="-1"><a class="header-anchor" href="#查看依赖包的安装路径" aria-hidden="true">#</a> 查看依赖包的安装路径</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 当前项目</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm root</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 全局</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm root -g</span></span>\n<span class="line"><span style="color:#6A9955;"># yarn</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn global dir</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清除缓存" tabindex="-1"><a class="header-anchor" href="#清除缓存" aria-hidden="true">#</a> 清除缓存</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm cache clean -f</span></span>\n<span class="line"><span style="color:#6A9955;"># OR</span></span>\n<span class="line"><span style="color:#D4D4D4;">yarn cache clean</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导航到-npm-的相关页面" tabindex="-1"><a class="header-anchor" href="#导航到-npm-的相关页面" aria-hidden="true">#</a> 导航到 npm 的相关页面</h2><h3 id="打开文档" tabindex="-1"><a class="header-anchor" href="#打开文档" aria-hidden="true">#</a> 打开文档</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 在浏览器中打开当前项目的文档</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm docs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在浏览器中打开指定 npm 包的文档</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm docs [package-name]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开-github-repo" tabindex="-1"><a class="header-anchor" href="#打开-github-repo" aria-hidden="true">#</a> 打开 GitHub repo</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 在浏览器中打开当前项目的 GitHub repo</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm repo</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在浏览器中打开指定 npm 包的 GitHub repo</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm repo [package-name]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开-github-issues" tabindex="-1"><a class="header-anchor" href="#打开-github-issues" aria-hidden="true">#</a> 打开 GitHub issues</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># 在浏览器中打开当前项目的 GitHub issues</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm bugs</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;"># 在浏览器中打开指定 npm 包的 GitHub issues</span></span>\n<span class="line"><span style="color:#D4D4D4;">npm bugs [package-name]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本命令相关" tabindex="-1"><a class="header-anchor" href="#脚本命令相关" aria-hidden="true">#</a> 脚本命令相关</h2><p>执行顺序：并行执行 <code>&amp;</code>，继发执行 <code>&amp;&amp;</code></p><p>例 1：<code>npm run script1.js &amp; npm run script2.js</code></p><p>例 2：<code>npm run script1.js &amp;&amp; npm run script2.js</code></p><p>获取当前正在运行的脚本名称 <code>process.env.npm_lifecycle_event</code></p>',24)],i={},p=(0,e(3744).Z)(i,[["render",function(s,n){return(0,a.wg)(),(0,a.iD)("div",null,l)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const e=s.__vccOpts||s;for(const[s,a]of n)e[s]=a;return e}}}]);