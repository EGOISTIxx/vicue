(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[976],{709:function(a,b,c){"use strict";c.d(b,{A:function(){return w}});var d=c(9499),e=c(4730);c(7294);var f=c(2125),g=f.ZP.div.withConfig({displayName:"SLayout__MainLayout",componentId:"sc-1vw5c8k-0"})(["padding:2rem;min-height:100vh;"]),h=f.ZP.div.withConfig({displayName:"SHeader__HeaderWrapper",componentId:"sc-oob6j5-0"})(["padding:1rem 1rem 1rem 0;"]),i=c(1664),j=c.n(i),k=c(1163),l=c(5114),m=(0,f.ZP)(l.Z).withConfig({displayName:"SBreadcrumb__StyledBreadcrumb",componentId:"sc-1k3mn5c-0"})(["margin:1.5rem 0;"]),n=c(5893),o=function(a){var b=a.breadcrumb;return(0,k.useRouter)(),(0,n.jsxs)(m,{children:[(0,n.jsx)(m.Item,{children:(0,n.jsx)(j(),{href:"/",children:"Главная "})}),null==b?void 0:b.map(function(a){var b=a.href,c=a.title;return(0,n.jsx)(m.Item,{children:b?(0,n.jsx)(j(),{href:b,children:c}):c},"".concat(c,":").concat(b))})]})},p=c(4731),q=p.Z.Search,r=(0,f.ZP)(q).withConfig({displayName:"SSearch__StyledSearch",componentId:"sc-2ch7jo-0"})(["width:100%;"]),s=function(a){var b=a.handleSearch;return(0,n.jsx)(r,{placeholder:"Введите название пива",size:"large",enterButton:"Найти",onSearch:b})},t=function(a){var b=a.breadcrumb,c=a.isHiddenSearch,d=a.handleSearch;return(0,n.jsxs)(h,{children:[!c&&(0,n.jsx)(s,{handleSearch:d}),(0,n.jsx)(o,{breadcrumb:b})]})},u=["children"];function v(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var w=function(a){var b=a.children,c=(0,e.Z)(a,u);return(0,n.jsxs)(g,{children:[(0,n.jsx)(t,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?v(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):v(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({isHiddenSearch:!1},c)),b]})}},1696:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return x},default:function(){return y}});var d=c(7294),e=c(1163),f=c(709),g=c(5675),h=c.n(g),i=c(2125),j=i.ZP.div.withConfig({displayName:"SBeer__BeerWrapper",componentId:"sc-4e5yd-0"})(["display:flex;column-gap:2rem;"]),k=i.ZP.div.withConfig({displayName:"SBeer__ImageWrapper",componentId:"sc-4e5yd-1"})(["width:300px;height:600px;& > *{width:300px !important;height:600px !important;}"]),l=i.ZP.div.withConfig({displayName:"SBeer__EmptyImage",componentId:"sc-4e5yd-2"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#6b7280;"]),m=i.ZP.div.withConfig({displayName:"SBeer__InfoWrapper",componentId:"sc-4e5yd-3"})(["display:flex;flex-direction:column;row-gap:2rem;"]),n=i.ZP.h1.withConfig({displayName:"SBeer__InfoTitle",componentId:"sc-4e5yd-4"})(["color:#ffffff;font-weight:500;text-transform:uppercase;"]),o=i.ZP.span.withConfig({displayName:"SBeer__InfoTagline",componentId:"sc-4e5yd-5"})(["color:#8f8f8f;font-weight:500;font-size:0.9rem;text-transform:none;"]),p=i.ZP.span.withConfig({displayName:"SBeer__InfoDescription",componentId:"sc-4e5yd-6"})(["color:#ffffff;font-size:1.5rem;"]),q=i.ZP.span.withConfig({displayName:"SBeer__InfoABVW",componentId:"sc-4e5yd-7"})(["color:#ffffff;font-size:1rem;"]),r=i.ZP.span.withConfig({displayName:"SBeer__InfoFoodPairing",componentId:"sc-4e5yd-8"})(["color:#ffffff;font-size:1rem;"]),s=i.ZP.div.withConfig({displayName:"SBeer__ResidualInformationWrapper",componentId:"sc-4e5yd-9"})(["display:flex;align-items:center;& > :first-child{color:#8f8f8f;font-size:0.9rem;text-transform:none;}"]),t=c(5893),u=function(a){var b=a.beer,c=b.image_url,d=b.name,e=b.description,f=b.tagline,g=b.abv,i=b.food_pairing;return(0,t.jsxs)(j,{children:[(0,t.jsx)(k,{children:null!==c?(0,t.jsx)(h(),{src:c,alt:d,width:300,height:600}):(0,t.jsx)(l,{children:"Empty image"})}),(0,t.jsxs)(m,{children:[(0,t.jsxs)(n,{children:[d," ",(0,t.jsx)(o,{children:f})]}),(0,t.jsx)(p,{children:e}),(0,t.jsxs)(s,{children:[(0,t.jsx)(q,{children:"ABV:\xa0"}),(0,t.jsxs)(q,{children:[g,"%"]})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)(r,{children:"Food pairing:\xa0"}),(0,t.jsx)(r,{children:i.join(", ")})]})]})]})},v=(0,d.memo)(u),w=function(a){var b=a.beerData,c=(0,e.useRouter)(),g=(0,d.useMemo)(function(){return[{title:c.query.beer}]},[c.query.beer]);return console.log(b),(0,t.jsx)(f.A,{isHiddenSearch:!0,breadcrumb:g,children:(0,t.jsx)(v,{beer:b[0]})})},x=!0,y=w},5844:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[beer]/[id]",function(){return c(1696)}])}},function(a){a.O(0,[767,774,888,179],function(){var b;return a(a.s=5844)}),_N_E=a.O()}])