"use strict";(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[3398],{3935:(e,n,t)=>{t.d(n,{A:()=>b});t(6540);var r=t(53),a=t(5215),s=t(5358),l=t(877),i=t(3230),o=t(5225);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(4848);function d(e){let{href:n,children:t}=e;return(0,u.jsx)(s.A,{href:n,className:(0,r.A)("card padding--lg",c.cardContainer),children:t})}function m(e){let{href:n,icon:t,title:a,description:s}=e;return(0,u.jsxs)(d,{href:n,children:[(0,u.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",c.cardTitle),title:a,children:[t," ",a]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",c.cardDescription),title:s,children:s})]})}function f(e){let{item:n}=e;const t=(0,a.Nr)(n);return t?(0,u.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,i.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function h(e){let{item:n}=e;const t=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(n.docId??void 0);return(0,u.jsx)(m,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(h,{item:n});case"category":return(0,u.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function v(e){let{className:n}=e;const t=(0,a.$S)();return(0,u.jsx)(b,{items:t.items,className:n})}function b(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(v,{...e});const s=(0,a.d1)(n);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:s.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(p,{item:e})},n)))})}},3956:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(6540),a=t(1141),s=t(9680),l=t(4848);var i=t(5358);var o=t(53),c=t(1062),u=t(4549);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function m(e){return!!e&&("SUMMARY"===e.tagName||m(e.parentElement))}function f(e,n){return!!e&&(e===n||f(e.parentElement,n))}function h(e){let{summary:n,children:t,...a}=e;const s=(0,c.A)(),i=(0,r.useRef)(null),{collapsed:h,setCollapsed:p}=(0,u.u)({initialState:!a.open}),[v,b]=(0,r.useState)(a.open),g=r.isValidElement(n)?n:(0,l.jsx)("summary",{children:n??"Details"});return(0,l.jsxs)("details",{...a,ref:i,open:v,"data-collapsed":h,className:(0,o.A)(d.details,s&&d.isBrowser,a.className),onMouseDown:e=>{m(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;m(n)&&f(n,i.current)&&(e.preventDefault(),h?(p(!1),b(!0)):p(!0))},children:[g,(0,l.jsx)(u.N,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),b(!e)},children:(0,l.jsx)("div",{className:d.collapsibleContent,children:t})})]})}const p={details:"details_b_Ee"},v="alert alert--info";function b(e){let{...n}=e;return(0,l.jsx)(h,{...n,className:(0,o.A)(v,p.details,n.className)})}var g=t(5225);function x(e){return(0,l.jsx)(g.A,{...e})}const j={containsTaskList:"containsTaskList_mC6p"};const A={img:"img_ev3q"};var y=t(9141);const N={Head:a.A,Details:function(e){const n=r.Children.toArray(e.children),t=n.find((e=>r.isValidElement(e)&&"summary"===e.type)),a=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return(0,l.jsx)(b,{...e,summary:t,children:a})},code:function(e){return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,l.jsx)("code",{...e}):(0,l.jsx)(s.A,{...e})},a:function(e){return(0,l.jsx)(i.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:(n=e.className,(0,o.A)(n,n?.includes("contains-task-list")&&j.containsTaskList))});var n},img:function(e){return(0,l.jsx)("img",{loading:"lazy",...e,className:(n=e.className,(0,o.A)(n,A.img))});var n},h1:e=>(0,l.jsx)(x,{as:"h1",...e}),h2:e=>(0,l.jsx)(x,{as:"h2",...e}),h3:e=>(0,l.jsx)(x,{as:"h3",...e}),h4:e=>(0,l.jsx)(x,{as:"h4",...e}),h5:e=>(0,l.jsx)(x,{as:"h5",...e}),h6:e=>(0,l.jsx)(x,{as:"h6",...e}),admonition:y.A,mermaid:()=>null}},5323:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8453),a=t(5447),s=t(4848);function l(e){let{children:n}=e;return(0,s.jsx)(r.xA,{components:a.A,children:n})}},8793:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var r=t(53),a=t(1507);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848);const i="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,r.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:i,linkActiveClassName:o})})}},1507:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(6540),a=t(6957);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function i(e){const n=e.getBoundingClientRect();return n.top===n.bottom?i(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>i(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,r.useRef)(void 0),t=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=o(i,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}var d=t(5358),m=t(4848);function f(e){let{toc:n,className:t,linkClassName:r,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const h=r.memo(f);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...f}=e;const p=(0,a.p)(),v=c??p.tableOfContents.minHeadingLevel,b=d??p.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:b});return u((0,r.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:b}}),[i,o,v,b])),(0,m.jsx)(h,{toc:g,className:t,linkClassName:i,...f})}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(53);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(53),s=t(4245),l=t(6347),i=t(6494),o=t(2814),c=t(5167),u=t(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:t,groupId:a}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??p;return f({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,v.A)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(n))}},6057:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var r=t(53),a=t(3230),s=t(1141),l=t(4848);function i(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var u=t(8630),d=t(9141);function m(e){let{className:n}=e;return(0,l.jsx)(d.A,{type:"caution",title:(0,l.jsx)(i,{}),className:(0,r.A)(n,u.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},8453:(e,n,t)=>{t.d(n,{RP:()=>s,xA:()=>i});var r=t(6540);const a=r.createContext({});function s(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:s(e),r.createElement(a.Provider,{value:i},n)}}}]);
//# sourceMappingURL=3398.9d810fa5.js.map