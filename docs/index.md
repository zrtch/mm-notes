---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 茂茂物语
  text: Mao Mao 的成长之路
  tagline: 知识是进步的阶梯，争取每天都有知识点更新
  image:
    src: /logo.png
    alt: 茂茂物语
  actions:
    - text: 前端物语
      link: /fe/es6/
    - text: 前端导航
      link: /nav
      theme: alt
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
      theme: alt
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
  - icon: 💡
    title: 奇淫技巧
    details: 各种各样的奇淫技巧<br />配合 CV 大法来解决疑难杂症
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
