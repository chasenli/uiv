webpackJsonp([18],{158:function(s,a,t){var l=t(0)(t(180),t(209),null,null);s.exports=l.exports},180:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={components:{"alert-examples":{template:'<div class="markdown-live-example"><alert type="success"><b>Well done!</b> You successfully read this important alert message.</alert>\n<alert type="info"><b>Heads up!</b> This alert needs your attention, but it\'s not super important.</alert>\n<alert type="warning"><b>Warning!</b> Better check yourself, you\'re not looking too good.</alert>\n<alert type="danger"><b>Oh snap!</b> Change this and that and try again.</alert>\n\x3c!-- alert-examples.vue --\x3e</div>'},"alert-dismissible":{template:'<div class="markdown-live-example">\n  <section>\n    <alert type="warning" v-if="show" :dismissible="true" @dismissed="show = false">\n      <b>Warning!</b> Better check yourself, you\'re not looking too good.\n    </alert>\n    <alert v-for="(item, index) in alerts" :dismissible="true" :key="item.key" @dismissed="alerts.splice(index, 1)">\n      <b>Heads up!</b> This alert needs your attention, but it\'s not super important.\n    </alert>\n    <hr/>\n    <btn type="primary" @click="addDismissibleAlert()">Add Dismissible Alert</btn>\n  </section>\n</div>',data:function(){return{show:!0,alerts:[]}},methods:{addDismissibleAlert:function(){this.alerts.push({key:(new Date).getTime()})}}},"alert-auto-dismissing":{template:'<div class="markdown-live-example">\n  <section>\n    <alert v-for="(item, index) in alerts" :duration="duration" :key="item.key" @dismissed="alerts.splice(index, 1)">\n      This alert <b>will dismiss after {{duration}}ms</b>.\n    </alert>\n    <hr/>\n    <btn type="primary" @click="addAutoDismissAlert()">Add Auto Dismiss Alert</btn>\n  </section>\n</div>',data:function(){return{alerts:[],duration:2e3}},methods:{addAutoDismissAlert:function(){this.alerts.push({key:(new Date).getTime()})}}},"alert-with-collapse":{template:'<div class="markdown-live-example">\n  <section>\n    <btn type="primary" @click="show = !show">Toggle Collapsing Alert</btn>\n    <hr/>\n    <collapse v-model="show">\n      <alert type="warning" :dismissible="true" @dismissed="show = false">This alert <b>will collapse on open / close</b>.</alert>\n    </collapse>\n  </section>\n</div>',data:function(){return{show:!0}}}}}},209:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("markdown-wrapper",[t("h1",{attrs:{id:"alert"}},[s._v("Alert "),t("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("blockquote",[t("p",[s._v("Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.")])]),s._v(" "),t("h2",{attrs:{id:"examples"}},[s._v("Examples "),t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Wrap any text or HTML in "),t("code",{pre:!0},[s._v("<alert>")]),s._v(" and use one of the four alert types ("),t("code",{pre:!0},[s._v("success")]),s._v(" / "),t("code",{pre:!0},[s._v("info")]),s._v(" / "),t("code",{pre:!0},[s._v("warning")]),s._v(" / "),t("code",{pre:!0},[s._v("danger")]),s._v(") for basic alert messages.")]),s._v(" "),t("alert-examples",{ref:"alert-examples"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Well done!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" You successfully read this important alert message."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Heads up!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" This alert needs your attention, but it's not super important."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Warning!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" Better check yourself, you're not looking too good."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"danger"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Oh snap!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" Change this and that and try again."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- alert-examples.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"dismissible"}},[s._v("Dismissible "),t("a",{staticClass:"header-anchor",attrs:{href:"#dismissible","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Use "),t("code",{pre:!0},[s._v("dismissible")]),s._v(" to allow user to dismiss alerts.")]),s._v(" "),t("alert-dismissible",{ref:"alert-dismissible"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dismissible")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("dismissed")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show = false"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Warning!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" Better check yourself, you're not looking too good.\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(item, index) in alerts"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dismissible")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.key"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("dismissed")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alerts.splice(index, 1)"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("Heads up!"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(" This alert needs your attention, but it's not super important.\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("hr")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"addDismissibleAlert()"')]),s._v(">")]),s._v("Add Dismissible Alert"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alerts")]),s._v(": []\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      addDismissibleAlert () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alerts.push({"),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("().getTime()})\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- alert-dismissible.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"auto-dismissing"}},[s._v("Auto Dismissing "),t("a",{staticClass:"header-anchor",attrs:{href:"#auto-dismissing","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("p",[s._v("Use "),t("code",{pre:!0},[s._v("duration")]),s._v(" in milliseconds to auto dismiss alert. It can be used together with "),t("code",{pre:!0},[s._v("dismissible")]),s._v(".")]),s._v(" "),t("alert-auto-dismissing",{ref:"alert-auto-dismissing"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(item, index) in alerts"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":duration")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"duration"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"item.key"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("dismissed")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"alerts.splice(index, 1)"')]),s._v(">")]),s._v("\n      This alert "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("will dismiss after {{duration}}ms"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v(".\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("hr")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"addAutoDismissAlert()"')]),s._v(">")]),s._v("Add Auto Dismiss Alert"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("alerts")]),s._v(": [],\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n      }\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      addAutoDismissAlert () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".alerts.push({"),t("span",{attrs:{class:"hljs-attr"}},[s._v("key")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("().getTime()})\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- alert-auto-dismissing.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"use-with-collapse"}},[s._v("Use with Collapse "),t("a",{staticClass:"header-anchor",attrs:{href:"#use-with-collapse","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("alert-with-collapse",{ref:"alert-with-collapse"}),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show = !show"')]),s._v(">")]),s._v("Toggle Collapsing Alert"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("btn")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("hr")]),s._v("/>")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"warning"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":dismissible")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" @"),t("span",{attrs:{class:"hljs-attr"}},[s._v("dismissed")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"show = false"')]),s._v(">")]),s._v("This alert "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("will collapse on open / close"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("b")]),s._v(">")]),s._v("."),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("alert")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("collapse")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("section")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- alert-with-collapse.vue --\x3e")]),s._v("\n")])]),s._v(" "),t("h1",{attrs:{id:"api-reference"}},[s._v("API Reference "),t("a",{staticClass:"header-anchor",attrs:{href:"#api-reference","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h2",{attrs:{id:"alertvue"}},[t("a",{attrs:{href:"https://github.com/wxsms/uiv/tree/master/src/components/alert/Alert.vue"}},[s._v("Alert.vue")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#alertvue","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("h3",{attrs:{id:"props"}},[s._v("Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Type")]),s._v(" "),t("th",[s._v("Default")]),s._v(" "),t("th",[s._v("Required")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("dismissible")])]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Show dismiss button in alert.")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("type")])]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("info")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Alert type (success, info, warning, danger).")])]),s._v(" "),t("tr",[t("td",[t("code",{pre:!0},[s._v("duration")])]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Dismiss after milliseconds, use 0 to prevent self-closing.")])])])])]),t("h3",{attrs:{id:"slots"}},[s._v("Slots "),t("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("default")])]),s._v(" "),t("td",[s._v("The alert body.")])])])])]),t("h3",{attrs:{id:"events"}},[s._v("Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[s._v("🔗")])]),s._v(" "),t("div",{staticClass:"table-responsive"},[t("table",{staticClass:"table table-bordered table-hover"},[t("thead",[t("tr",[t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("Params")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[s._v("dismissed")])]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("Fire after the alert dismissed. Note: you have to hide / destroy the alert using "),t("code",{pre:!0},[s._v("v-if")]),s._v(" / "),t("code",{pre:!0},[s._v("v-show")]),s._v(" / "),t("code",{pre:!0},[s._v("v-for")]),s._v(" manually due to child components can't change state of parent component.")])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=18.1f68a040edd683959fe7.js.map