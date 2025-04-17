"use strict";(self.webpackChunkinterslavic_fun=self.webpackChunkinterslavic_fun||[]).push([[8072],{5537:(e,n,s)=>{s.d(n,{A:()=>f});var o=s(6540),a=s(4164),l=s(5627),r=s(6347),t=s(372),i=s(604),d=s(1861),c=s(8749);function j(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return j(e).map((e=>{let{props:{value:n,label:s,attributes:o,default:a}}=e;return{value:n,label:s,attributes:o,default:a}}))}(s);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function u(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const a=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function v(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=h(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[d,j]=m({queryString:s,groupId:a}),[v,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(s);return[a,(0,o.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),x=(()=>{const e=d??v;return u({value:e,tabValues:l})?e:null})();(0,t.A)((()=>{x&&i(x)}),[x]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),j(e),p(e)}),[j,p,l]),tabValues:l}}var p=s(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=s(4848);function b(e){let{className:n,block:s,selectedValue:o,selectValue:r,tabValues:t}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,s=i.indexOf(n),a=t[s].value;a!==o&&(d(n),r(a))},j=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{i.push(e)},onKeyDown:j,onClick:c,...l,className:(0,a.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":o===n}),children:s??n},n)}))})}function y(e){let{lazy:n,children:s,selectedValue:l}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function z(e){const n=v(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,k.jsx)(b,{...n,...e}),(0,k.jsx)(y,{...n,...e})]})}function f(e){const n=(0,p.A)();return(0,k.jsx)(z,{...e,children:j(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>t});var o=s(6540);const a={},l=o.createContext(a);function r(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(l.Provider,{value:n},e.children)}},8839:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>j,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"learn/simple-grammar/level-2","title":"\xdarove\u0148 2","description":"Gender, nouns, adjectives, verbs","source":"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/simple-grammar/level-2.md","sourceDirName":"learn/simple-grammar","slug":"/learn/simple-grammar/level-2","permalink":"/cs/learn/simple-grammar/level-2","draft":false,"unlisted":false,"editUrl":"https://github.com/medzuslovjansky/medzuslovjansky.github.io/edit/main/i18n/cs/docusaurus-plugin-content-docs/current/learn/simple-grammar/level-2.md","tags":[],"version":"current","lastUpdatedBy":"Yaroslav Serhieiev","lastUpdatedAt":1744871799000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"license":"republish","author":"Jan van Steenbergen","origin":"http://steen.free.fr/interslavic/slovianto2.html","description":"Gender, nouns, adjectives, verbs"},"sidebar":"learnSidebar","previous":{"title":"\xdarove\u0148 1","permalink":"/cs/learn/simple-grammar/level-1"},"next":{"title":"Panslovansk\xe1 \u0161tafeta","permalink":"/cs/learn/misc/pan-slavic-relay"}}');var a=s(4848),l=s(8453);s(5537),s(9329);const r={sidebar_position:2,license:"republish",author:"Jan van Steenbergen",origin:"http://steen.free.fr/interslavic/slovianto2.html",description:"Gender, nouns, adjectives, verbs"},t="\xdarove\u0148 2",i={},d=[{value:"Rod",id:"rod",level:2},{value:"Podstatn\xe1 jm\xe9na",id:"podstatn\xe1-jm\xe9na",level:3},{value:"P\u0159\xeddavn\xe1 jm\xe9na",id:"p\u0159\xeddavn\xe1-jm\xe9na",level:3},{value:"Slovesa",id:"slovesa",level:2},{value:"P\u0159\xedtomn\xfd \u010das",id:"p\u0159\xedtomn\xfd-\u010das",level:3},{value:"Minul\xfd \u010das",id:"minul\xfd-\u010das",level:3},{value:"Budouc\xed \u010das",id:"budouc\xed-\u010das",level:3},{value:"Podmi\u0148ovac\xed zp\u016fsob",id:"podmi\u0148ovac\xed-zp\u016fsob",level:3},{value:"Rozkazovac\xed zp\u016fsob",id:"rozkazovac\xed-zp\u016fsob",level:3},{value:"Sloveso b\xfdt&quot;",id:"sloveso-b\xfdt",level:3},{value:"Uk\xe1zkov\xfd text",id:"uk\xe1zkov\xfd-text",level:2},{value:"Na\u0161e vesnice",id:"na\u0161e-vesnice",level:3}];function c(e){const n={a:"a",abbr:"abbr",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{CustomAfterSection:s,CustomBeforeSection:o,MDSimpleGrammar1:r,MDSimpleGrammar2:t,MDSimpleGrammar3:i,MDSimpleGrammar4:d,MDSimpleGrammar5:c,TransliteratorElement:j}=n;return s||h("CustomAfterSection",!0),o||h("CustomBeforeSection",!0),r||h("MDSimpleGrammar1",!0),t||h("MDSimpleGrammar2",!0),i||h("MDSimpleGrammar3",!0),d||h("MDSimpleGrammar4",!0),c||h("MDSimpleGrammar5",!0),j||h("TransliteratorElement",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\xfarove\u0148-2",children:"\xdarove\u0148 2"})}),"\n",(0,a.jsxs)(n.p,{children:["V ",(0,a.jsx)(n.a,{href:"/cs/learn/simple-grammar/level-1",children:(0,a.jsx)(n.strong,{children:"\xdarovni 1"})})," jste se nau\u010dili \u0159adu forem, kter\xe9 m\u016f\u017eete pou\u017e\xedt, abyste se stali srozumiteln\xfdmi pro Slovany na velmi z\xe1kladn\xed \xfarovni. Tento jazyk je v\u0161ak velmi primitivn\xed a v\u016fbec neodpov\xedd\xe1 bohatstv\xed slovansk\xfdch jazyk\u016f. Tak\u017ee, pokud jste na tuto v\xfdzvu, zde jsou n\u011bkter\xe9 dal\u0161\xed n\xe1stroje, kter\xe9 m\u016f\u017eete pou\u017e\xedt k tomu, aby ",(0,a.jsx)(j,{children:"Slovianto"})," vypadal a zn\u011bl mnohem p\u0159irozen\u011bji."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\xdarove\u0148 2"})," se od ",(0,a.jsx)(n.strong,{children:"\xdarove\u0148 1"})," li\u0161\xed dv\u011bma zp\u016fsoby:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Dozv\xedte se o genderu ve slovansk\xe9m jazyce a jak jej pou\u017e\xedvat v ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",children:"Slovianto"}),","]}),"\n",(0,a.jsx)(n.li,{children:"Nau\u010d\xedte se spojovat slovesa."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rod",children:"Rod"}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsxs)(n.p,{children:["V\u011bt\u0161ina evropsk\xfdch jazyk\u016f m\xe1 gramatick\xfd rod \u2013 angli\u010dtina je jednou z m\xe1la v\xfdjimek. Nen\xed v\xedc ne\u017e logick\xe9, \u017ee slova ozna\u010duj\xedc\xed mu\u017ee jsou v\u017edy mu\u017esk\xe9ho rodu a slova ozna\u010duj\xedc\xed \u017eeny jsou v\u017edy \u017eensk\xe9ho rodu. My\u0161lenka gramatick\xe9ho rodu je v\u0161ak takov\xe1, \u017ee ",(0,a.jsx)(n.em,{children:"ka\u017ed\xe9"})," podstatn\xe9 jm\xe9no m\xe1 rod, i kdy\u017e mezi t\xedmto rodem a v\xfdznamem slova neexistuje \u017e\xe1dn\xe1 logick\xe1 souvislost. Ve francouz\u0161tin\u011b je nap\u0159\xedklad ",(0,a.jsxs)(n.span,{className:"notranslate",translate:"no",lang:"fr",children:["l",(0,a.jsx)(n.strong,{children:"e"})," vin"]})," \u201ev\xedno\u201c mu\u017esk\xe9ho rodu a ",(0,a.jsxs)(n.span,{className:"notranslate",translate:"no",lang:"fr",children:["l",(0,a.jsx)(n.strong,{children:"a"})," bi\xe8re"]})," \u201epivo\u201c je \u017eensk\xe9ho rodu. V n\u011bm\u010din\u011b je ",(0,a.jsxs)(n.span,{className:"notranslate",translate:"no",lang:"de",children:[(0,a.jsx)(n.strong,{children:"der"})," Wein"]})," \u201ev\xedno\u201c tak\xe9 mu\u017esk\xe9ho rodu, ale ",(0,a.jsxs)(n.span,{className:"notranslate",translate:"no",lang:"de",children:[(0,a.jsx)(n.strong,{children:"das"})," Bier"]})," \u201epivo\u201c je st\u0159edn\xedho rodu. Rod podstatn\xe9ho jm\xe9na ovliv\u0148uje nejen \u010dlen, ale tak\xe9 p\u0159\xeddavn\xe1 jm\xe9na, p\u0159ivlast\u0148ovac\xed z\xe1jmena a dal\u0161\xed slova, kter\xe1 toto podstatn\xe9 jm\xe9no modifikuj\xed. Francouz\u0161tina m\xe1 ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",lang:"fr",children:"un bon vin froid"})," \u201ejedno dobr\xe9 studen\xe9 v\xedno\u201c, ale ",(0,a.jsxs)(n.span,{className:"notranslate",translate:"no",lang:"fr",children:["un",(0,a.jsx)(n.strong,{children:"e"})," bon",(0,a.jsx)(n.strong,{children:"ne"})," bi\xe8re froid",(0,a.jsx)(n.strong,{children:"e"})]})," \u201ejedno dobr\xe9 vychlazen\xe9 pivo\u201c."]}),"\n",(0,a.jsxs)(n.p,{children:["V\u0161echny slovansk\xe9 jazyky maj\xed t\u0159i rody: mu\u017esk\xfd, \u017eensk\xfd a st\u0159edn\xed. Na prvn\xed \xfarovni ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",children:"Slovianto"})," nehraje pohlav\xed roli, proto\u017ee pro komunikaci na t\xe9 nejz\xe1kladn\u011bj\u0161\xed \xfarovni nen\xed podstatn\xe9. Mal\xe9 d\u011bti \u010dasto d\u011blaj\xed chyby s pohlav\xedm, ale p\u0159esto je lze pochopit. Co\u017e nic nem\u011bn\xed na tom, \u017ee ",(0,a.jsx)(j,{children:"dobry \u017eena"})," \u201ehodn\xe1 \u017eena\u201c zn\xed neohraban\u011b, proto\u017ee ",(0,a.jsx)(j,{children:"\u017eena"})," je \u017eensk\xe9ho rodu a koncovka ",(0,a.jsx)(n.code,{children:"-y"})," je mu\u017esk\xe9ho rodu. M\u016f\u017eete ud\u011blat sv\u016fj ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",children:"Slovianto"})," vzhled a zvuk mnohem p\u0159irozen\u011bj\u0161\xed, pokud vezmete v \xfavahu i pohlav\xed. Stanoven\xed rodu podstatn\xe9ho jm\xe9na nen\xed v\u016fbec t\u011b\u017ek\xe9, proto\u017ee t\xe9m\u011b\u0159 ve v\u0161ech p\u0159\xedpadech sta\u010d\xed pohled na slovo zn\xe1t jeho rod, co\u017e znamen\xe1, \u017ee nen\xed t\u0159eba se rod u\u010dit samostatn\u011b."]}),"\n",(0,a.jsx)(n.h3,{id:"podstatn\xe1-jm\xe9na",children:"Podstatn\xe1 jm\xe9na"}),"\n",(0,a.jsx)(n.p,{children:"Chcete-li zjistit, zda je slovo mu\u017esk\xe9ho, \u017eensk\xe9ho nebo st\u0159edn\xedho rodu, sta\u010d\xed se pod\xedvat na koncovku:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Mu\u017esk\xe1 slova v\u017edy kon\u010d\xed na souhl\xe1sku:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"mu\u017e"})," \u201emu\u017e\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"syn"})," \u201esyn\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"dom"})," \u201ed\u016fm\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Slova na ",(0,a.jsx)(n.code,{children:"-a"})," jsou \u017eensk\xe9ho rodu:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"\u017eena"})," \u201e\u017eena, man\u017eelka\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"du\u0161a"})," \u201edu\u0161e\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"voda"})," \u201evoda\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Slova na ",(0,a.jsx)(n.code,{children:"-o"})," a ",(0,a.jsx)(n.code,{children:"-e"})," jsou st\u0159edn\xed t\u0159\xeddy:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"slovo"})," \u201eslovo\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"d\u011bte"})," \u201ed\xedt\u011b\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"morje"})," \u201emo\u0159e\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Existuje tak\xe9 skupina slov \u017eensk\xe9ho rodu kon\u010d\xedc\xedch na souhl\xe1sku. Obecn\u011b si pamatujte, \u017ee v\u011bt\u0161ina z nich jsou slova kon\u010d\xedc\xed na ",(0,a.jsx)(n.code,{children:"-ost"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"kost"})," \u201ekost\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"velikost"})," \u201evelikost\u201c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Existuje n\u011bkolik v\xfdjimek, ale v tuto chv\xedli se jich nemus\xedte ob\xe1vat."}),"\n",(0,a.jsxs)(n.p,{children:["Na prvn\xed \xfarovni jste se nau\u010dili, \u017ee mno\u017en\xe9 \u010d\xedslo je ",(0,a.jsx)(n.code,{children:"-i"}),". To funguje dob\u0159e pro podstatn\xe1 jm\xe9na mu\u017esk\xe9ho a \u017eensk\xe9ho rodu, av\u0161ak v p\u0159\xedpad\u011b podstatn\xfdch jmen st\u0159edn\xedho rodu je lep\u0161\xed m\xedsto toho pou\u017e\xedt ",(0,a.jsx)(n.code,{children:"-a"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"slovo"})," \u2192 ",(0,a.jsx)(j,{children:"slova"})," \u201eslov\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"d\u011bte"})," \u2192 ",(0,a.jsx)(j,{children:"d\u011bta"})," \u201ed\u011bti\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"morje"})," \u2192 ",(0,a.jsx)(j,{children:"morja"})," \u201emo\u0159e\u201c"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"p\u0159\xeddavn\xe1-jm\xe9na",children:"P\u0159\xeddavn\xe1 jm\xe9na"}),"\n",(0,a.jsxs)(n.p,{children:["Nejen podstatn\xe1 jm\xe9na maj\xed rod, tot\xe9\u017e plat\xed pro p\u0159\xeddavn\xe1 jm\xe9na a podobn\xe9 modifik\xe1tory. Stejn\u011b jako ve francouz\u0161tin\u011b a n\u011bm\u010din\u011b maj\xed slovansk\xe9 jazyky ",(0,a.jsx)(n.em,{children:"genderovou dohodu"}),". To znamen\xe1, \u017ee kdy\u017e je podstatn\xe9 jm\xe9no mu\u017esk\xe9ho rodu doprov\xe1zeno p\u0159\xeddavn\xfdm jm\xe9nem, toto p\u0159\xeddavn\xe9 jm\xe9no nab\xfdv\xe1 tvar mu\u017esk\xe9ho rodu, podstatn\xe9 jm\xe9no \u017eensk\xe9ho rodu m\xe1 tvar p\u0159\xeddavn\xe9ho jm\xe9na atd. ",(0,a.jsx)(j,{children:"Dobry \u017eena"})," p\u016fsob\xed pon\u011bkud d\u011btinsky a neohraban\u011b, proto\u017ee kombinuje podstatn\xe9 jm\xe9no \u017eensk\xe9ho rodu s mu\u017esk\xe9 p\u0159\xeddavn\xe9 jm\xe9no. Pamatujte tedy na n\xe1sleduj\xedc\xed v\u011bci:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Mu\u017esk\xe1 koncovka je ",(0,a.jsx)(n.code,{children:"-y"})," nebo ",(0,a.jsx)(n.code,{children:"-i"}),". Toto je tvar uveden\xfd ve slovn\xedku:"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(j,{children:"dobry mu\u017e"})," \u201edobr\xfd \u010dlov\u011bk\u201c"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u017eensk\xfd konec je ",(0,a.jsx)(n.code,{children:"-a"}),":"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(j,{children:"dobra \u017eena"})," \u201ehodn\xe1 \u017eena\u201c"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Neutr\xe1ln\xed konec je ",(0,a.jsx)(n.code,{children:"-e"}),":"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(j,{children:"dobre d\u011bte"})," \u201ehodn\xe9 d\xedt\u011b\u201c"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Pro v\u0161echna pohlav\xed je mno\u017en\xe9 \u010d\xedslo ",(0,a.jsx)(n.code,{children:"-e"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"dobre mu\u017ei"})," \u201edob\u0159\xed mu\u017ei\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"dobre \u017eeni"})," \u201ehodn\xe1 \u017eena\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"dobre d\u011bta"})," \u201ehodn\xe9 d\u011bti\u201c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Tot\xe9\u017e plat\xed pro p\u0159\xeddavn\xe1 jm\xe9na, plat\xed tak\xe9 pro p\u0159ivlast\u0148ovac\xed, ukazovac\xed, vzta\u017en\xe1, neur\u010dit\xe1 z\xe1jmena a tak\xe9 pro \u010d\xedsla."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["P\u0159ivlast\u0148ovac\xed z\xe1jmena ",(0,a.jsx)(j,{children:"moj"})," \u201em\u016fj\u201c, ",(0,a.jsx)(j,{children:"tvoj"})," \u201ev\xe1\u0161, v\xe1\u0161\u201c, ",(0,a.jsx)(j,{children:"na\u0161"})," \u201en\xe1\u0161\u201c, ",(0,a.jsx)(j,{children:"va\u0161"})," \u201ev\xe1\u0161 (",(0,a.jsx)(n.abbr,{title:"mno\u017en\xe9 \u010d\xedslo",children:"m.\u010d."}),")\u201c, ",(0,a.jsx)(j,{children:"svoj"})," \u201evlastn\xed\u201c a ",(0,a.jsx)(j,{children:"\u010dij"})," \u201ejeho\u017e\u201c maj\xed stejn\xe9 koncovky jako p\u0159\xeddavn\xe1 jm\xe9na (krom\u011b mu\u017esk\xe9ho rodu): ",(0,a.jsx)(j,{children:"moj"})," (",(0,a.jsx)(n.abbr,{title:"mu\u017esk\xfd rod",children:"m.r."}),"), ",(0,a.jsx)(j,{children:"moja"})," (",(0,a.jsx)(n.abbr,{title:"\u017eensk\xfd rod",children:"\u017e.r."}),"), ",(0,a.jsx)(j,{children:"moje"})," (",(0,a.jsx)(n.abbr,{title:"st\u0159edn\xed rod",children:"s.r."}),"), ",(0,a.jsx)(j,{children:"moje"})," (",(0,a.jsx)(n.abbr,{title:"mno\u017en\xe9 \u010d\xedslo",children:"m.\u010d."}),"). ). Tot\xe9\u017e plat\xed pro t\xe1zac\xed z\xe1jmeno ",(0,a.jsx)(j,{children:"koj"})," \u201ekter\xfd\u201c:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"moj mu\u017e"})," \u201em\u016fj man\u017eel\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"tvoja \u017eena"})," \u201eva\u0161e \u017eena\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"na\u0161e d\u011bte"})," \u201ena\u0161e d\xedt\u011b\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"koje prijatelji"})," \u201ekte\u0159\xed p\u0159\xe1tel\xe9\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["P\u0159ivlast\u0148ovac\xed z\xe1jmena t\u0159et\xed osoby (",(0,a.jsx)(j,{children:"jego"})," \u201ejeho, jeho\u201c, ",(0,a.jsx)(j,{children:"jej"})," \u201eona\u201c, ",(0,a.jsx)(j,{children:"jih"})," \u201ejejich\u201c) se nem\u011bn\xed (je to proto, \u017ee tato slova nejsou striktn\u011b p\u0159ivlast\u0148ovac\xedmi z\xe1jmeny, ale doslova n\u011bco znamenaj\xed jako \u201ejeho\u201c atd.):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"jego \u017eena"})," \u201ejeho \u017eena\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"jih prijatelji"})," \u201ejejich p\u0159\xe1tel\xe9\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Ukazovac\xed z\xe1jmeno ",(0,a.jsx)(j,{children:"toj"})," m\xe1 tvary ",(0,a.jsx)(j,{children:"ta"})," (",(0,a.jsx)(n.abbr,{title:"\u017eensk\xfd rod",children:"\u017e.r."}),"), ",(0,a.jsx)(j,{children:"to"})," (",(0,a.jsx)(n.abbr,{title:"st\u0159edn\xed rod",children:"s.r."}),") a ",(0,a.jsx)(j,{children:"te"})," (",(0,a.jsx)(n.abbr,{title:"mno\u017en\xe9 \u010d\xedslo",children:"m.\u010d."}),"), m\xedsto ",(0,a.jsxs)(n.em,{children:["*",(0,a.jsx)(j,{children:"toja"}),", *@@ 83..."]})," (tot\xe9\u017e samoz\u0159ejm\u011b plat\xed pro ",(0,a.jsx)(j,{children:"tutoj"})," a ",(0,a.jsx)(j,{children:"tamtoj"}),"):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"toj mu\u017e"})," \u201etento mu\u017e\u201c"]}),"\n",(0,a.jsx)(n.li,{children:"@87 \u201eta \u017eena\u201c"}),"\n",(0,a.jsx)(n.li,{children:"@88 \u201etoto d\xedt\u011b\u201c"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"te prijatelji"})," \u201etito p\u0159\xe1tel\xe9\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Vzta\u017en\xe9 z\xe1jmeno ",(0,a.jsx)(j,{children:"ktory"})," se chov\xe1 jako p\u0159\xeddavn\xe9 jm\xe9no:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"\u017eena, ktora \u010dita"})," \u201e\u017eena, kter\xe1 \u010dte\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"d\u011bte, ktore ja vid\u011bl"})," \u201ed\xedt\u011b, kter\xe9 jsem vid\u011bl\u201c"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u010c\xedslo ",(0,a.jsx)(j,{children:"jedin"})," \u201ejedna\u201c m\xe1 tvary ",(0,a.jsx)(j,{children:"jedna"})," (",(0,a.jsx)(n.abbr,{title:"\u017eensk\xfd rod",children:"\u017e.r."}),") a ",(0,a.jsx)(j,{children:"jedno"})," (",(0,a.jsx)(n.abbr,{title:"st\u0159edn\xed rod",children:"s.r."}),"):"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"jedin mu\u017e"})," \u201ejeden mu\u017e\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"jedna \u017eena"})," \u201ejedna \u017eena\u201c"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(j,{children:"jedno d\u011bte"})," \u201etoto d\xedt\u011b\u201c"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"slovesa",children:"Slovesa"}),"\n",(0,a.jsx)(n.h3,{id:"p\u0159\xedtomn\xfd-\u010das",children:"P\u0159\xedtomn\xfd \u010das"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsxs)(n.p,{children:["V ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",children:"Slovianto"})," \xfarovni 1 jste se nau\u010dili, \u017ee p\u0159\xedtomn\xfd \u010das se tvo\u0159\xed p\u0159id\xe1n\xedm koncovky ",(0,a.jsx)(n.code,{children:"-(e)t"})," ke kmeni: ",(0,a.jsx)(j,{children:"ja d\u011bla-t"}),' "d\u011bl\xe1m", ',(0,a.jsx)(j,{children:"vy prosi-t"}),' "pros\xedte", ',(0,a.jsx)(j,{children:"oni nes-et"}),' "nesou". Slovansk\xe9mu uchu to v\u0161ak zn\xed nep\u0159irozen\u011b, proto\u017ee v\u0161echny slovansk\xe9 jazyky sklo\u0148uj\xed sv\xe1 slovesa pro osobu a \u010d\xedslo. Chcete-li ud\u011blat lep\u0161\xed dojem, je mo\u017en\xe9 hodn\u011b z\xedskat t\xedm, \u017ee se tak\xe9 nau\u010d\xedte n\u011bkter\xe9 z t\u011bchto osobn\xedch konc\u016f.']}),"\n",(0,a.jsxs)(n.p,{children:["Tak\u017ee je \u010das zapomenout na koncovku ",(0,a.jsx)(n.code,{children:"-t"}),"! M\xedsto toho si zapamatujte n\xe1sleduj\xedc\xed koncovky: ",(0,a.jsx)(n.code,{children:"-m"}),", ",(0,a.jsx)(n.code,{children:"-\u0161"}),", ",(0,a.jsx)(n.code,{children:"-\xd8"}),"  (bez koncovky) v prvn\xed, druh\xe9 a t\u0159et\xed osob\u011b jednotn\xe9ho \u010d\xedsla a ",(0,a.jsx)(n.code,{children:"-mo"}),", ",(0,a.jsx)(n.code,{children:"-te"}),", ",(0,a.jsx)(n.code,{children:"-ut"}),"  v prvn\xed, druh\xe9 a t\u0159et\xed osob\u011b mno\u017en\xe9ho \u010d\xedsla. Kdy\u017e kmen kon\u010d\xed samohl\xe1skou, vlo\u017ete ",(0,a.jsx)(n.code,{children:"-j-"})," p\u0159ed koncovku ",(0,a.jsx)(n.code,{children:"-ut"}),". Kdy\u017e kmen kon\u010d\xed souhl\xe1skou, vlo\u017ete ",(0,a.jsx)(n.code,{children:"-e-"})," p\u0159ed zb\xfdvaj\xedc\xed koncovky. N\u011bkter\xe9 p\u0159\xedklady naleznete v tabulce vpravo."]}),"\n",(0,a.jsxs)(n.p,{children:["Koncovku ",(0,a.jsx)(n.code,{children:"-\u0161"})," a osobn\xed z\xe1jmeno ",(0,a.jsx)(j,{children:"ty"})," pou\u017eijte pouze pro rodinu, p\u0159\xe1tele, d\u011bti atd. V ostatn\xedch p\u0159\xedpadech oslovujte osoby ve druh\xe9 osob\u011b mno\u017en\xe9ho \u010d\xedsla (",(0,a.jsx)(j,{children:"vy"}),", ",(0,a.jsx)(n.code,{children:"-te"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"minul\xfd-\u010das",children:"Minul\xfd \u010das"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsxs)(n.p,{children:["V minul\xe9m \u010dase nejsou slovesa spojov\xe1na s osobou. Jsou v\u0161ak konjugov\xe1ny pro pohlav\xed. M\u016f\u017ee se to zd\xe1t zvl\xe1\u0161tn\xed, ale vysv\u011btlen\xed je docela jednoduch\xe9: tvar ",(0,a.jsx)(j,{children:"d\u011blal"})," je ve skute\u010dnosti p\u0159\xed\u010dest\xed, co\u017e znamen\xe1 n\u011bco jako \u201eud\u011blal\u201c, a proto souhlas\xed s p\u0159edm\u011btem v rodu a \u010d\xedsle, ale ne osobn\u011b. Formul\xe1\u0159e jsou ty, kter\xe9 jsou uvedeny v tabulce vpravo."]}),"\n",(0,a.jsx)(n.h3,{id:"budouc\xed-\u010das",children:"Budouc\xed \u010das"}),"\n",(0,a.jsxs)(n.p,{children:["Budouc\xed \u010das vznik\xe1 spojen\xedm budouc\xedho \u010dasu slovesa ",(0,a.jsx)(j,{children:"byti"})," \u201eb\xfdt\u201c s infinitivem. Tvary jsou stejn\xe9, jako kdyby bylo sloveso ",(0,a.jsx)(j,{children:"*bud-ti"})," konjugov\xe1no v p\u0159\xedtomn\xe9m \u010dase: ",(0,a.jsx)(j,{children:"ja budem d\u011blati"}),", ",(0,a.jsx)(j,{children:"ty bude\u0161 d\u011blati"}),", ",(0,a.jsx)(j,{children:"on bude d\u011blati"}),",  atd."]}),"\n",(0,a.jsx)(n.h3,{id:"podmi\u0148ovac\xed-zp\u016fsob",children:"Podmi\u0148ovac\xed zp\u016fsob"}),"\n",(0,a.jsxs)(n.p,{children:["Podmi\u0148ovac\xed zp\u016fsob je tvo\u0159en p\u0159id\xe1n\xedm \u010d\xe1stice ",(0,a.jsx)(j,{children:"by"})," k minul\xe9mu \u010dasu, a proto podl\xe9h\xe1 dohod\u011b pohlav\xed: ",(0,a.jsx)(j,{children:"ja by d\u011blal"})," \u201ej\xe1 (",(0,a.jsx)(n.abbr,{title:"mu\u017esk\xfd rod",children:"m.r."}),") bych ud\u011blal/ud\u011blal\u201c, ",(0,a.jsx)(j,{children:"ty by d\u011blala"})," \u201ety (",(0,a.jsx)(n.abbr,{title:"\u017eensk\xfd rod",children:"\u017e.r."}),") by ud\u011blali/ud\u011blali\u201c, ",(0,a.jsx)(j,{children:"my by d\u011blali"})," \u201eud\u011blali bychom/ud\u011blali\u201c."]}),"\n",(0,a.jsx)(n.h3,{id:"rozkazovac\xed-zp\u016fsob",children:"Rozkazovac\xed zp\u016fsob"}),"\n",(0,a.jsx)(i,{}),"\n",(0,a.jsxs)(n.p,{children:["Krom\u011b rozkazovac\xedho zp\u016fsobu, kter\xfd jste se ji\u017e nau\u010dili (2. osoba mno\u017en\xe9ho \u010d\xedsla), existuj\xed tak\xe9 rozkazovac\xed zp\u016fsoby pro 2. osobu jednotn\xe9ho \u010d\xedsla a 1. osobu mno\u017en\xe9ho \u010d\xedsla. Koncovky jsou ",(0,a.jsx)(n.code,{children:"-j"})," (",(0,a.jsx)(n.abbr,{title:"2 sg.",children:"2 sg."}),"), ",(0,a.jsx)(n.code,{children:"-jmo"})," (",(0,a.jsx)(n.abbr,{title:"1 pl.",children:"1 pl."}),") a ",(0,a.jsx)(n.code,{children:"-jte"})," (",(0,a.jsx)(n.abbr,{title:"2 pl.",children:"2 pl."}),") po samohl\xe1sce a ",(0,a.jsx)(n.code,{children:"-i"})," (",(0,a.jsx)(n.abbr,{title:"2 sg.",children:"2 sg."}),"), ",(0,a.jsx)(n.code,{children:"-imo"})," (",(0,a.jsx)(n.abbr,{title:"1 pl.",children:"1 pl."})," ) a ",(0,a.jsx)(n.code,{children:"-ite"})," (",(0,a.jsx)(n.abbr,{title:"2 pl.",children:"2 pl."}),") po souhl\xe1sce. ",(0,a.jsx)(j,{children:"d\u011blajte"})," tedy znamen\xe1 \u201ed\u011blat!\u201c a m\u016f\u017ee b\xfdt zam\u011b\u0159en na v\xedce lid\xed najednou, ale tak\xe9 slou\u017e\xed jako zdvo\u0159ilej\u0161\xed forma jednotn\xe9ho \u010d\xedsla, zat\xedmco ",(0,a.jsx)(j,{children:"d\u011blaj"})," by se m\u011blo pou\u017e\xedvat pouze pro p\u0159\xe1tele, rodinu a d\u011bti. ",(0,a.jsx)(j,{children:"D\u011blajmo"})," znamen\xe1: \u201eUd\u011blejme to\u201c."]}),"\n",(0,a.jsx)(n.h3,{id:"sloveso-b\xfdt",children:'Sloveso b\xfdt"'}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsxs)(n.p,{children:["Proto\u017ee v\u0161e v\xfd\u0161e uveden\xe9 tak\xe9 ovliv\u0148uje jedin\xe9 nepravideln\xe9 sloveso v ",(0,a.jsx)(n.span,{className:"notranslate",translate:"no",children:"Slovianto"}),", ",(0,a.jsx)(j,{children:"byti"}),"  \u201eb\xfdt\u201c, zde je jeho \xfapln\xe1 konjugace."]}),"\n",(0,a.jsx)(n.h2,{id:"uk\xe1zkov\xfd-text",children:"Uk\xe1zkov\xfd text"}),"\n",(0,a.jsxs)(c,{children:[(0,a.jsx)(n.h3,{id:"na\u0161e-vesnice",children:"Na\u0161e vesnice"}),(0,a.jsx)(n.p,{children:"Ze v\u0161ech mo\u017en\xfdch m\xedst, kde lid\xe9 \u017eij\xed, to, kter\xe9 miluji nejv\xedc, je mal\xe1 vesnice daleko od hluku m\u011bsta s jeho malou komunitou. Nem\xe1 p\u0159elidn\u011bn\xe9 byty, jen mal\xe9 d\u0159ev\u011bn\xe9 chatky. Je to jednoduch\xe9 a malebn\xe9 m\xedsto k \u017eivotu s obyvateli, jejich\u017e tv\xe1\u0159e jsou zn\xe1m\xe9 jako kv\u011btiny v na\u0161\xed zahrad\u011b. Je to odlehl\xfd sv\u011bt s n\u011bkolika lidmi, \xfazce spojen\xfdmi jako mravenci v mraveni\u0161ti nebo v\u010dely v \xfalu nebo ovce v ov\u010dinci nebo jepti\u0161ky v kl\xe1\u0161te\u0159e nebo n\xe1mo\u0159n\xedci na lodi \u2013 kde ka\u017ed\xfd ka\u017ed\xe9ho zn\xe1 a ka\u017ed\xfd je v\u0161emi zn\xe1m\xfd, kde se ka\u017ed\xfd zaj\xedm\xe1 o ka\u017ed\xe9ho a ka\u017ed\xfd m\u016f\u017ee doufat, \u017ee ostatn\xed se o n\u011bj zaj\xedmaj\xed."}),(0,a.jsx)(n.p,{children:"Jak p\u0159\xedjemn\xe9 by bylo pono\u0159it se do tohoto srde\u010dn\xe9ho pocitu l\xe1sky a nezn\xe1m\xfdch zvyk\u016f, setkat se a b\xfdt p\u0159\xe1teli se v\u0161emi t\u011bmito jedine\u010dn\xfdmi lidmi kolem n\xe1s! Stejn\u011b jako budeme zn\xe1t v\u0161echna z\xe1kout\xed a z\xe1kruty stinn\xfdch ulic a slunn\xfdch luk, kter\xe9 denn\u011b m\xedj\xedme. Mal\xe9 soci\xe1ln\xed skupin\u011b, kterou je venkovsk\xe1 spole\u010dnost, vd\u011b\u010d\xed poezie a pr\xf3za nejv\xedce. Dlouh\xe1, rozta\u017een\xe1 ulice, vinouc\xed se za p\u011bkn\xe9ho tepl\xe9ho dne, k\u0159i\u017euj\xedc\xed velkou, \u0161irokou silnici plnou aut a kamion\u016f. Cht\u011bl bys se mnou cestovat, mil\xfd \u010dten\xe1\u0159i? Cesta nebude dlouh\xe1. Za\u010dneme na konci \xfadol\xed a odtud budeme pokra\u010dovat do kopce."})]}),"\n",(0,a.jsx)(s,{})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9329:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var o=s(4164);const a={tabItem:"tabItem_Ymn6"};var l=s(4848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:s,children:n})}}}]);
//# sourceMappingURL=48385690.08d526f1.js.map