(self.webpackChunkrenci_covid_19_site=self.webpackChunkrenci_covid_19_site||[]).push([[834],{8506:function(e,n,t){"use strict";t.d(n,{Zb:function(){return a},eW:function(){return s},Ol:function(){return l},cS:function(){return b}});var r=t(5697),o=t.n(r),i=t(3494),a=i.default.div.withConfig({displayName:"card__Card",componentId:"sc-5um1e-0"})((function(e){var n=e.theme,t=e.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 1rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(t?n.color.primary.dark:n.color.white)+";\n    color: "+(t?n.color.white:n.color.primary.dark)+";\n    opacity: "+(t?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:o().node.isRequired,elevate:o().bool.isRequired},a.defaultProps={elevate:!0};var l=i.default.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-2zmgu6-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.primary.dark+";\n    background: linear-gradient(-30deg, "+n.color.primary.light+"22 0%, "+n.color.white+" 100%);\n    background-color: "+n.color.primary.light+"11;\n    border-bottom: 1px solid "+n.color.primary.light+"66;\n    font-weight: bold;\n    position: relative;\n    font-size: 150%;\n    min-height: 3.5rem;\n    padding: "+n.padding.small+";\n    // padding-bottom: 0;\n"}));l.propTypes={fgColor:o().string.isRequired,bgColor:o().string.isRequired,children:o().node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var c=t(7294),d=i.default.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"sc-1qtn8s4-0"})((function(e){return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    background-color: inherit;\n"}));d.propTypes={fgColor:o().string.isRequired,bgColor:o().string.isRequired},d.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(e){var n=e.children,t=(e.image,e.style);return c.createElement(d,{style:t},n)},u=i.default.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-c9reo7-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:o().string.isRequired,bgColor:o().string.isRequired,children:o().node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};var m=t(7457),f=t(2037),p=i.default.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-1tvw03g-0"})(["position:relative;margin-top:5rem;"]),g=i.default.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-1tvw03g-1"})((function(e){var n=e.theme;return"\n    display: flex;\n    border-radius: "+n.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+n.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+n.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+m.Dx+" {\n        color: "+n.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=i.default.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-1tvw03g-2"})((function(e){var n=e.topPadding;return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    padding-top: calc(3 * "+n+"px / 4);\n    background-color: inherit;\n"})),b=function(e){var n=e.title,t=e.children,r=e.noBody,o=(0,c.useRef)(),i=(0,c.useState)(0),l=i[0],d=i[1],s=(0,f.Lm)().windowWidth;return(0,c.useEffect)((function(){d(o.current.scrollHeight)}),[s]),c.createElement(p,null,c.createElement(g,{ref:o},c.createElement(m.Dx,null,n)),r?c.createElement("div",{style:{minHeight:"100px"}}):c.createElement(a,null,c.createElement(h,{topPadding:l},t)))};t(645)},645:function(e,n,t){"use strict";t.d(n,{C:function(){return c}});var r=t(7294),o=t(8506),i=t(9027),a=t(7457),l=t(3617),c=function(e){var n=e.data.frontmatter;return r.createElement(o.Zb,{key:(0,i.kebabCase)(n.title),style:{flex:"1 0 315px",minHeight:"470px",maxWidth:"600px"}},r.createElement(o.Ol,null,n.title),r.createElement(o.eW,{style:{display:"flex",flexDirection:"column",alignContent:"space-between"}},r.createElement("div",{dangerouslySetInnerHTML:{__html:n.blurb},style:{flex:"1"}}),r.createElement("br",null),r.createElement(a.nv,{center:!0},r.createElement(l.Qj,{to:n.path},"Read More"))))}},1402:function(e,n,t){"use strict";t.r(n);var r=t(7294),o=t(3494),i=t(7667),a=t(5056),l=t(2037),c=t(7457),d=t(8506),s=t(3617),u=t(8789),m=t(9027),f=o.default.div.withConfig({displayName:"resources__ResourceButtons",componentId:"sc-12pr1w6-0"})((function(e){return"\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding-bottom: "+e.theme.padding.normal+";\n"})),p=(0,o.default)(u.z).withConfig({displayName:"resources__ResourceButton",componentId:"sc-12pr1w6-1"})((function(e){var n=e.theme,t=e.active;return"\n    display: block;\n    padding: 0.5rem 1rem;\n    margin: 0.5rem;\n    border-radius: 4px;\n    "+(void 0!==t&&t?"background-color: "+n.color.primary.main+";":"background-color: "+n.color.darkgrey+";")+"\n    @media (max-width: 798px) {\n        width: 100%;\n    }\n"})),g=o.default.div.withConfig({displayName:"resources__Resource",componentId:"sc-12pr1w6-2"})((function(e){var n=e.theme;return"\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 1rem;\n    padding-bottom: "+n.padding.normal+";\n    &:not(:last-child) {\n        border-bottom: 1px solid "+n.color.lightgrey+";\n    }\n    @media (max-width: 798px) {\n        flex-direction: column;\n    }\n"})),h=o.default.div.withConfig({displayName:"resources__ResourceInfo",componentId:"sc-12pr1w6-3"})((function(e){return"\n    flex: 1;\n    padding-right: "+e.theme.padding.normal+";\n"})),b=(0,o.default)(c.X6).withConfig({displayName:"resources__ResourceTitle",componentId:"sc-12pr1w6-4"})(["text-align:left;@media (max-width:798px){text-align:center;}"]),y=o.default.div.withConfig({displayName:"resources__ResourceSource",componentId:"sc-12pr1w6-5"})((function(e){var n=e.theme;return"\n    color: "+n.color.darkgrey+";\n    @media (max-width: 798px) {\n        margin-bottom: "+n.padding.normal+";\n    }\n"}));n.default=function(){var e=(0,l.YS)(),n=(0,r.useState)(-1),t=n[0],o=n[1],u=(0,r.useState)(-1),v=u[0],w=u[1],x=(0,r.useState)(!1),C=x[0],k=x[1];(0,r.useLayoutEffect)((function(){C&&setTimeout((function(){return k(!1)}),250)}),[C]);var _=function(e){return function(n){w(e),k(!0),setTimeout((function(){return o(e)}),250)}};return r.createElement(i.JH,null,r.createElement(a.p,{title:"COVID-19 Resources",description:"",keywords:""}),r.createElement(d.cS,{title:"COVID-19 Resources"},r.createElement(c.nv,null,"The resources listed below have proven to be of interest at RENCI as we discuss the progression of COVID-19 and and its impact on research and our society. We have collected them here in case they are interesting to others also, although we do not take credit for or endorse the information within these links in any way.")),r.createElement(f,{role:"tablist"},r.createElement(p,{onClick:_(-1),active:-1===v},"ALL (",e.reduce((function(e,n){return e+n.resources.length}),0),")"),e.map((function(e,n){return r.createElement(p,{key:e.title+"_button",role:"tab","aria-controls":"resources-"+n,"aria-selected":v===n,onClick:_(n),active:v===n,disabled:v===n},e.title," (",e.resources.length,")")}))),r.createElement("section",{id:"resource-list",style:{opacity:C?0:1,transform:"translate3d("+(C?"0, 2rem, 0":"0, 0, 0")+")",transition:"transform 250ms ease-out, opacity 250ms"}},e.map((function(e,n){var o=e.title,i=e.resources;return[-1,n].includes(t)&&r.createElement(d.Zb,{key:o,name:(0,m.kebabCase)(o),role:"tabpanel","aria-labelledby":"resources-"+n},r.createElement(d.Ol,null,o),r.createElement(d.eW,null,i.map((function(e){return r.createElement(g,{key:e.title},r.createElement(h,null,r.createElement(b,null,e.title),r.createElement(y,null,"Source: ",e.source||"-")),r.createElement(s.bd,{to:e.url},"View"))}))))}))))}},8981:function(e){e.exports={kebabCase:function(e){return e.toLowerCase().replace(/ +/g,"-")}}},9027:function(e,n,t){"use strict";var r=t(8981);t.o(r,"kebabCase")&&t.d(n,{kebabCase:function(){return r.kebabCase}})}}]);
//# sourceMappingURL=component---src-pages-resources-js-11d6e9a01ef6b6d8c1ef.js.map