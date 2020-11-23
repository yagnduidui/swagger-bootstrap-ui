(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{386:function(e,v,_){"use strict";_.r(v);var n=_(42),r=Object(n.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"_1-0-产品介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-产品介绍"}},[e._v("#")]),e._v(" 1.0 产品介绍")]),e._v(" "),_("p",[_("code",[e._v("Knife4jCloud")]),e._v("是一款独立部署的中间件,基于"),_("code",[e._v("Spring Boot 2.2.0.RELEASE")]),e._v("+"),_("code",[e._v("Mybatis 3.5")]),e._v("进行开发.")]),e._v(" "),_("p",[e._v("将目前开源的"),_("code",[e._v("Knife4j")]),e._v("进行整合,通过云平台对"),_("code",[e._v("OpenAPI v2")]),e._v("的Swagger文档进行云端聚合,在线对Swagger文档进行渲染和调试,非常灵活方便,特别是在微服务盛行的今天,对于使用Swagger的开发者来说,是一款非常轻巧、方便、简单、易用的产品.")]),e._v(" "),_("p",[e._v("产品的主要优势：")]),e._v(" "),_("p",[_("strong",[e._v("1).跨语言")])]),e._v(" "),_("p",[e._v("使用Swagger的开发者都知道,OpenAPI是一套标准的规范,在不同的语言中都有相应的实现方式,包括Java、Node、Python、.Net等语言,使用范围非常广泛,特别是Java体系下Spring的生态非常完善,Springfox组件提供了对OpenAPI的支持,将SpringMVC接口和Swagger紧密的联系了起来,方便开发者进行接口的调试")]),e._v(" "),_("p",[e._v("也正是因为这种原因,Knife4j目前经历近3年的发展,OpenAPI2.0版本已经越来越成熟,Java的开发者集成Knife4j非常方便,但是其他语言目前想要使用Knife4j都会有一些难度,需要更改相关的代码才能做到集成,使用上很麻烦")]),e._v(" "),_("p",[e._v("Knife4jCloud平台作为独立的平台,不管是提供OpenAPI的接口还是提供Swagger的JSON,都可以通过在平台上简单操作,即可情况将OpenAPIV2的结构在Knife4j的Ui上展示出来.")]),e._v(" "),_("p",[_("strong",[e._v("2).微服务模式下自动聚合")])]),e._v(" "),_("p",[e._v("在目前的Knife4j技术交流群中,经常会碰到各个开发者询问如何在Spring Cloud的微服务技术架构下聚合Swagger文档,有的人聚合成功了,有的人聚合失败了")]),e._v(" "),_("p",[e._v("究其原因,Spring Cloud技术架构发展相当迅速,部分开发人员无暇去通过调试底层代码的方式来解决碰到的问题,特别是Swagger文档的聚合一般都是通过网关的特性进行聚合,而微服务架构的网关从"),_("code",[e._v("Zuul")]),e._v("到"),_("code",[e._v("Spring Cloud Gateway")]),e._v("的迭代,都是发展惊人的,新版本的迭代必然会碰到版本兼容的问题,网关的迭代,每一次的迭代新增了那些特性,删除了那些特性,大部分情况下,我们是不会去看迭代日志的.升级就完事了.这也是为什么有人成功,有人失败")]),e._v(" "),_("p",[e._v("那么,通过现象看本质,我们碰到的问题到底是什么?")]),e._v(" "),_("p",[e._v("1、网关版本升级,导致请求Swagger接口失败,或者丢失某个属性")]),e._v(" "),_("p",[e._v("2、网关配置不正确,调试转发失败")]),e._v(" "),_("p",[e._v("3、等等...")]),e._v(" "),_("p",[e._v("我们在Spring Boot单体架构下,引入Swagger文档如此简单,为什么在Spring Cloud的体现这么麻烦?聚合代码写了一大堆,还要调试为何失败,不同的版本有不同的要求.等等")]),e._v(" "),_("p",[e._v("那么,Knife4jCloud是如何解决这些问题的呢?")]),e._v(" "),_("p",[e._v("1、Knife4jCloud把Swagger的特性全部抽象出来,全部放在平台里来做,他充当的也是一个网关的角色,但是是自己扩展实现的,扩展的目的只有一个,就是可以在平台中进行调试")]),e._v(" "),_("p",[e._v("2、Knife4jCloud中会把每一个Swagger文档作为一个服务实例，微服务的IP、端口、Swagger-JSONNeri都会保存在平台中")]),e._v(" "),_("p",[e._v("这样在平台中,对于Swagger文档可以进行任意聚合,和微服务彻底拜拜了~~")]),e._v(" "),_("p",[_("strong",[e._v("3).个性化配置")])]),e._v(" "),_("p",[e._v("Knife4jCloud产品本身是拥有用户的角色的,开发者可以将平台部署在和实际同一个网络环境中,对外的Swagger文档可以通过Knife4jCloud做到网络隔离")]),e._v(" "),_("p",[e._v("对于每一份Swagger文档页可以做到是否登录后可看,文档是否可以调试等等个性化的配置都可以在平台中进行操作")]),e._v(" "),_("comment-comment")],1)}),[],!1,null,null,null);v.default=r.exports}}]);