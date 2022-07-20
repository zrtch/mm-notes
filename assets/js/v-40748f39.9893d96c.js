"use strict";(self.webpackChunkmm_notes=self.webpackChunkmm_notes||[]).push([[35],{5805:(s,a,n)=>{n.r(a),n.d(a,{data:()=>l});const l=JSON.parse('{"key":"v-40748f39","path":"/utils/regexp.html","title":"常用正则","lang":"zh-CN","frontmatter":{"sidebarDepth":2},"excerpt":"","headers":[{"level":2,"title":"验证相关","slug":"验证相关","children":[{"level":3,"title":"是否是金额（精确到分）","slug":"是否是金额-精确到分","children":[]},{"level":3,"title":"是否是手机号","slug":"是否是手机号","children":[]},{"level":3,"title":"是否是邮箱号","slug":"是否是邮箱号","children":[]},{"level":3,"title":"是否是 QQ 号","slug":"是否是-qq-号","children":[]},{"level":3,"title":"是否是链接地址","slug":"是否是链接地址","children":[]},{"level":3,"title":"是否是身份证号码","slug":"是否是身份证号码","children":[]},{"level":3,"title":"是否为 16 进制颜色","slug":"是否为-16-进制颜色","children":[]}]},{"level":2,"title":"格式相关","slug":"格式相关","children":[{"level":3,"title":"344 格式手机号","slug":"_344-格式手机号","children":[]},{"level":3,"title":"隐藏手机号中间 4 位","slug":"隐藏手机号中间-4-位","children":[]}]}],"git":{"updatedTime":1658321253000},"filePathRelative":"utils/regexp.md"}')},2188:(s,a,n)=>{n.r(a),n.d(a,{default:()=>t});var l=n(6252);const p=(0,l._)("h1",{id:"常用正则",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#常用正则","aria-hidden":"true"},"#"),(0,l.Uk)(" 常用正则")],-1),o={href:"https://juejin.cn/post/6844903501034684430",target:"_blank",rel:"noopener noreferrer"},e=(0,l.Uk)("JS 正则表达式完整教程"),r=(0,l.uE)('<h2 id="验证相关" tabindex="-1"><a class="header-anchor" href="#验证相关" aria-hidden="true">#</a> 验证相关</h2><h3 id="是否是金额-精确到分" tabindex="-1"><a class="header-anchor" href="#是否是金额-精确到分" aria-hidden="true">#</a> 是否是金额（精确到分）</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">0</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">*</span><span style="color:#CE9178;">))(</span><span style="color:#D7BA7D;">\\.</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{1,2}</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">?</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D16969;">/</span><span style="color:#CE9178;">(?:</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]([</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">?</span><span style="color:#CE9178;">(?:</span><span style="color:#D7BA7D;">\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1,2}</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">?</span><span style="color:#DCDCAA;">$</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(?:</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">(?:</span><span style="color:#D16969;">0</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">{1}</span><span style="color:#DCDCAA;">$</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(?:</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">](?:[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">])</span><span style="color:#D7BA7D;">?</span><span style="color:#DCDCAA;">$</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否是手机号" tabindex="-1"><a class="header-anchor" href="#是否是手机号" aria-hidden="true">#</a> 是否是手机号</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">1\\d</span><span style="color:#D7BA7D;">{10}</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">1</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">3-9</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{9}</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否是邮箱号" tabindex="-1"><a class="header-anchor" href="#是否是邮箱号" aria-hidden="true">#</a> 是否是邮箱号</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">-+.</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">*</span><span style="color:#D16969;">@\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">-.</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">*\\.</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">-.</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\w</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">*</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A9955;">/**</span></span>\n<span class="line"><span style="color:#6A9955;"> * 参考 MDN</span></span>\n<span class="line"><span style="color:#6A9955;"> * https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email#basic_validation</span></span>\n<span class="line"><span style="color:#6A9955;"> */</span></span>\n<span class="line"><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z0-9.!#$%&amp;&#39;*+/=?^_`{|}~-</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+</span><span style="color:#D16969;">@</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z0-9</span><span style="color:#CE9178;">](?:[</span><span style="color:#D16969;">a-zA-Z0-9-</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{0,61}</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z0-9</span><span style="color:#CE9178;">])</span><span style="color:#D7BA7D;">?</span><span style="color:#CE9178;">(?:</span><span style="color:#D7BA7D;">\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z0-9</span><span style="color:#CE9178;">](?:[</span><span style="color:#D16969;">a-zA-Z0-9-</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{0,61}</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z0-9</span><span style="color:#CE9178;">])</span><span style="color:#D7BA7D;">?</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">*</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否是-qq-号" tabindex="-1"><a class="header-anchor" href="#是否是-qq-号" aria-hidden="true">#</a> 是否是 QQ 号</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1}</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4,11}</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="是否是链接地址" tabindex="-1"><a class="header-anchor" href="#是否是链接地址" aria-hidden="true">#</a> 是否是链接地址</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">https</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">http</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">:</span><span style="color:#D7BA7D;">\\/\\/</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">A-Za-z0-9-_</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">A-Za-z0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">[</span><span style="color:#D7BA7D;">\\/</span><span style="color:#D16969;">=</span><span style="color:#D7BA7D;">\\?</span><span style="color:#D16969;">%\\-&amp;_~`@[</span><span style="color:#D7BA7D;">\\]\\&#39;</span><span style="color:#D16969;">:+!</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">*</span><span style="color:#CE9178;">([^</span><span style="color:#D16969;">&lt;&gt;</span><span style="color:#D7BA7D;">\\&quot;\\&quot;</span><span style="color:#CE9178;">])</span><span style="color:#D7BA7D;">*</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="是否是身份证号码" tabindex="-1"><a class="header-anchor" href="#是否是身份证号码" aria-hidden="true">#</a> 是否是身份证号码</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{5}</span><span style="color:#CE9178;">(?:</span><span style="color:#D16969;">18</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">19</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">20</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{2}</span><span style="color:#CE9178;">(?:</span><span style="color:#D16969;">0</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">10</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">11</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">12</span><span style="color:#CE9178;">)(?:</span><span style="color:#D16969;">0</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-2</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">30</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">31</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">\\dXx</span><span style="color:#CE9178;">]</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="是否为-16-进制颜色" tabindex="-1"><a class="header-anchor" href="#是否为-16-进制颜色" aria-hidden="true">#</a> 是否为 16 进制颜色</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">#</span><span style="color:#D7BA7D;">?</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">a-fA-F0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{6}</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-fA-F0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{3}</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="格式相关" tabindex="-1"><a class="header-anchor" href="#格式相关" aria-hidden="true">#</a> 格式相关</h2><h3 id="_344-格式手机号" tabindex="-1"><a class="header-anchor" href="#_344-格式手机号" aria-hidden="true">#</a> 344 格式手机号</h3><ul><li>从左到右</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#CE9178;">(</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#DCDCAA;">\\B</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span></span>\n<span class="line"><span style="color:#6A9955;">// 例：</span></span>\n<span class="line"><span style="color:#CE9178;">&#39;15512341234&#39;</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#CE9178;">(</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#DCDCAA;">\\B</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;$1 &#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从右到左</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">\\B</span><span style="color:#CE9178;">(?=(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">+</span><span style="color:#DCDCAA;">\\b</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span></span>\n<span class="line"><span style="color:#6A9955;">// 例：</span></span>\n<span class="line"><span style="color:#CE9178;">&#39;15512341234&#39;</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">\\B</span><span style="color:#CE9178;">(?=(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">+</span><span style="color:#DCDCAA;">\\b</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39; &#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏手机号中间-4-位" tabindex="-1"><a class="header-anchor" href="#隐藏手机号中间-4-位" aria-hidden="true">#</a> 隐藏手机号中间 4 位</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">;</span><span style="color:#D16969;">/</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span></span>\n<span class="line"><span style="color:#6A9955;">// 例：</span></span>\n<span class="line"><span style="color:#CE9178;">&#39;15512341234&#39;</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">replace</span><span style="color:#D4D4D4;">(</span><span style="color:#D16969;">/</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{4}</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;$1****$2&#39;</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',23),c={},t=(0,n(3744).Z)(c,[["render",function(s,a){const n=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[p,(0,l._)("p",null,[(0,l._)("a",o,[e,(0,l.Wm)(n)])]),r])}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,l]of a)n[s]=l;return n}}}]);