import{r as l,R as e,W as I,A as te}from"./chunk-19c1a2bd.js";import{G as ne,U as R,s as d,c,g as f,C as V,B as q,F as W,r as m,a as p,b as h,A as ae,d as re,v as oe,e as L,W as ie,f as se,h as le,M as ce,i as me}from"./chunk-31319f41.js";import{u as U,a as A,M as de,b as G,c as _,d as Z,e as Q,I as S,T as ue,f as pe,g as T,h as H,L as y,i as he,O as K,j as X,k as ge,l as fe,S as be,R as Ee,m as E,n as we,o as ye,p as ve,q as xe,P as Ce,F as $e}from"./chunk-f316eabd.js";import{s as ke,a as Ie,b as Se,c as Ne,d as j}from"./chunk-0f0e246a.js";import{g as O,s as Pe}from"./chunk-7a2a1854.js";import"./chunk-4e43f09b.js";function x(t){return ne({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(t)}const Ae=R`

  to{
    max-height: 9rem;
    overflow: visible;
  }
`,Be=d.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 1.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({fill:t})=>`0px 0px 15px -10px ${t}`};
  border-radius: 0.25rem;
  border: ${({fill:t})=>`1px solid ${c(.7,t)}`};
  background: ${({fill:t})=>`linear-gradient(to right, ${c(.6,t)} 0% , var(--background) 30%, ${c(.9,t)}100%)`};
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .iconAndNameContainer {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    .iconContainer {
      .iconItem {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${({fill:t})=>t};
      }
    }
    .nameContainer {
      margin-left: 0.25rem;
      width: 100%;
      overflow: auto;
      span {
        font-size: 1rem;
        font-weight: 500;
        padding-left: 0.5rem;
        text-align: center;
      }
    }
  }
  .actionsContainer {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    button {
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem;
      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
      &.showItemBtn {
        background: ${c(.6,f.blue)};
        svg {
          fill: var(--blue);
        }
      }
      &.sendItemBtn {
        margin-left: 0.5rem;
        background: ${c(.6,f.green)};
        svg {
          fill: var(--green);
        }
      }
    }
  }
`,F=d.div`
  display: ${({shouldDisplay:t})=>t?"flex":"none"};
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  margin-top: -0.25rem;
  border-radius: 0 0 0.25rem 0.25rem;
  width: 95%;
  height: 100%;
  max-height: 0rem;
  overflow: hidden;
  background: ${({fill:t})=>t?c(.8,t):"none"};
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
  ${({shouldDisplay:t})=>t&&V`
      animation: ${Ae} 0.3s ease-in forwards;
    `}

  padding: ${({shouldDisplay:t})=>t?"1rem":"0"};
  padding-top: 0.5rem;
  img,
  video {
    display: inline-block;
    z-index: 1;
    height: 100%;
  }
  audio {
    filter: ${({fill:t})=>`drop-shadow(0px 0px 5px ${t})`};
  }
  div.itemPreviewDocument {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    font-size: 1.25rem;

    .itemPreviewIcon {
      width: 3rem;
      height: 3rem;
    }
  }

  textarea {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    opacity: 1;
    cursor: auto;
  }
`;function v({Icon:t,name:r,item:o,fill:n}){const[a,u]=l.exports.useState(),[i,s]=l.exports.useState(!1),{getItemFromStorage:B}=U(),{isPremium:C}=A();async function D(){if(a){s(!i);return}s(!0);const b=await B(o.id);if(!b){I.error("Item n\xE3o encontrado, algo deu errado.");return}u(b)}async function $(){const b=await O(o.id);if(!(b!=null&&b.data)){I.error("Item vazio, envio cancelado",{theme:"colored"});return}o.type==="mensagens"?ke(o):o.type==="audios"?Ie(o,void 0,C):o.type==="medias"?Se(o):o.type==="docs"&&Ne(o)}return e.createElement(e.Fragment,null,e.createElement(Be,{fill:n},e.createElement("div",{className:"iconAndNameContainer"},e.createElement("div",{className:"iconContainer"},e.createElement(t,{className:"iconItem"})),e.createElement("div",{className:"nameContainer"},e.createElement("span",null,r))),e.createElement("div",{className:"actionsContainer"},e.createElement("button",{className:"showItemBtn",type:"button",onClick:D},e.createElement(q,null)),e.createElement("button",{className:"sendItemBtn",type:"button",onClick:$},e.createElement(W,null)))),a&&(a.data?e.createElement(F,{fill:n,shouldDisplay:i},a.type==="mensagens"?e.createElement("textarea",{defaultValue:a.data,id:`msgPreview${a.id}`,disabled:!0}):e.createElement(de,{base64:a.data})):e.createElement(F,{fill:n,shouldDisplay:i},"Item Vazio")),!a&&e.createElement(F,{fill:n,shouldDisplay:i},"Carregando..."))}const De=d.div`
  width: 100%;
  padding-bottom: 2rem;
  .titleIndex {
    margin: 0 auto;
    text-align: center;
  }
  .inputSearch {
    margin: 0.5rem 0;
  }
`;function Fe(){const{mensagensIndex:t}=G(),{audiosIndex:r}=_(),{mediasIndex:o}=Z(),{docsIndex:n}=Q(),[a,u]=l.exports.useState("");return e.createElement(De,null,e.createElement(S,{value:a,onChange:i=>u(i.target.value)}),t.length>0&&e.createElement(e.Fragment,null,e.createElement("h2",{className:"titleIndex"},"Mensagens"),t.map((i,s)=>m(`${s} - ${i.name}`).toLowerCase().includes(m(a).toLowerCase())&&e.createElement(v,{key:i.id,fill:p(i.type),Icon:h(i.type),name:`${s} - ${i.name}`,item:i}))),r.length>0&&e.createElement(e.Fragment,null,e.createElement("h2",{className:"titleIndex"},"\xC1udios"),r.map((i,s)=>m(`${s} - ${i.name}`).toLowerCase().includes(m(a).toLowerCase())&&e.createElement(v,{key:i.id,fill:p(i.type),Icon:h(i.type),name:`${s} - ${i.name}`,item:i}))),o.length>0&&e.createElement(e.Fragment,null,e.createElement("h2",{className:"titleIndex"},"M\xEDdias"),o.map((i,s)=>m(`${s} - ${i.name}`).toLowerCase().includes(m(a).toLowerCase())&&e.createElement(v,{key:i.id,fill:p(i.type),Icon:h(i.type),name:`${s} - ${i.name}`,item:i}))),n.length>0&&e.createElement(e.Fragment,null,e.createElement("h2",{className:"titleIndex"},"Documentos"),n.map((i,s)=>m(`${s} - ${i.name}`).toLowerCase().includes(m(a).toLowerCase())&&e.createElement(v,{key:i.id,fill:p(i.type),Icon:h(i.type),name:`${s} - ${i.name}`,item:i}))),t.length===0&&r.length===0&&o.length===0&&n.length===0&&e.createElement("div",{className:"noItemContainer"},e.createElement("h2",null,"Nenhum item cadastrado, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const Me=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background: ${({fill:t})=>`linear-gradient(to right, ${c(.6,t)} 0% , var(--background) 30%, ${c(.9,t)}100%)`};
  box-shadow: ${({fill:t})=>`0px 0px 15px -10px ${t}`};
  border: ${({fill:t})=>`1px solid ${c(.7,t)}`};
  padding: 0.5rem;

  &:last-of-type {
    border-radius: 0 0 0.25rem 0.25rem;
  }
  .delayAndNameContainer {
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    display: grid;
    grid-template-columns: 6.5rem 1fr;
    align-items: center;
    .delayIndicatorAndNumber {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
      .delayIconContainer {
        margin-right: 0.25rem;
        .delayIcon {
          fill: ${({fill:t})=>t};
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .iconTypeAndNameContainer {
      display: flex;
      align-items: center;
      overflow: auto;
      max-width: 100%;
      .iconTypeContainer {
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        .iconType {
          fill: ${({fill:t})=>t};
          width: 1.5rem;
          height: 1.5rem;
        }
      }
      span {
        font-size: 1rem;
        font-weight: 500;
        padding: 0 0.5rem;
        text-align: center;
        width: 85%;
      }
    }
  }
  .sendFromHereBtn {
    background: ${({fill:t})=>c(.9,t)};
    border: 1px solid ${({fill:t})=>t};
    box-shadow: ${({fill:t})=>`0px 0px 5px ${t}`};
    display: grid;
    place-items: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    .sendFromHereBtnIcon {
      width: 1.25rem;
      height: 1.25rem;
      fill: ${({fill:t})=>t};
    }
  }
`;function Le({item:t,index:r,handleSendFromHere:o}){const{isPremium:n}=A(),a=Math.floor(t.delay/1e3/60),u=Math.floor(t.delay/1e3%60),i=h(t.type);return e.createElement(Me,{fill:p(t.type)},e.createElement("div",{className:"delayAndNameContainer"},e.createElement("div",{className:"delayIndicatorAndNumber"},e.createElement("div",{className:"delayIconContainer"},e.createElement(ae,{className:"delayIcon"})),a>0&&`${a} min e `," ",u," segs"),e.createElement("div",{className:"iconTypeAndNameContainer"},e.createElement("div",{className:"iconTypeContainer"},e.createElement(i,{className:"iconType"})),e.createElement("span",null,t.name))),r>0&&e.createElement(ue,{title:"Enviar a partir daqui, sem enviar os itens anteriores. O item atual ser\xE1 enviado imediatamente."},e.createElement("button",{type:"button",className:"sendFromHereBtn",onClick:o,disabled:!n},e.createElement(re,{className:"sendFromHereBtnIcon"}))))}const Te=R`

  to{
    max-height: 100%;
    overflow: visible;
  }
`,He=d.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 1.5rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${({fill:t})=>`0px 0px 15px -10px ${t}`};
  border-radius: 0.25rem;
  border: ${({fill:t})=>`1px solid ${c(.7,t)}`};
  background: ${({fill:t})=>`linear-gradient(to right, ${c(.6,t)} 0% , var(--background) 30%, ${c(.9,t)}100%)`};
  padding: 0.5rem 0;
  margin: 0.25rem 0;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .iconAndNameContainer {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    position: relative;
    max-width: 100%;
    overflow-wrap: break-word;
    overflow: auto;
    word-wrap: break-word;
    hyphens: auto;
    .iconContainer {
      .iconItem {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${({fill:t})=>t};
      }
    }
    .nameContainer {
      margin-left: 0.25rem;
      width: 100%;
      overflow: auto;
      span {
        font-size: 1rem;
        font-weight: 500;
        padding-left: 0.5rem;
        text-align: center;
      }
    }
  }
  .actionsContainer {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
    button {
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem;
      svg {
        height: 1.25rem;
        width: 1.25rem;
      }
      &.showItemBtn {
        background: ${c(.6,f.blue)};
        svg {
          fill: var(--blue);
        }
      }
      &.sendItemBtn {
        margin-left: 0.5rem;
        background: ${c(.6,f.green)};
        svg {
          fill: var(--green);
        }
      }
    }
  }
`,M=d.div`
  display: ${({shouldDisplay:t})=>t?"flex":"none"};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: -0.25rem;
  margin-bottom: 1rem;
  border-radius: 0 0 0.25rem 0.25rem;
  width: 95%;
  max-height: 0rem;
  overflow: hidden;
  background: var(--shape);
  box-shadow: 0px 2px 10px -5px black;
  transition: max-height 0.3s ease-in-out;
  ${({shouldDisplay:t})=>t&&V`
      animation: ${Te} 0.3s ease-in forwards;
    `}
`;function Oe({Icon:t,name:r,item:o,fill:n}){const{getNameFromIndex:a}=U(),[u,i]=l.exports.useState(),[s,B]=l.exports.useState(0),[C,D]=l.exports.useState(!1),{isPremium:$,responseData:b}=A();l.exports.useEffect(()=>{if(!o.data)return;const w=o.data.reduce((k,P)=>k+P.delay,0);B(w)},[o.data]);async function J(){if(D(!C),!u){if(!o.data||o.data.length===0){i([]);return}i(o.data.map(w=>{const k=oe(),P=a(w.id,w.type);return{...w,...P&&{name:P},indexId:k,isOpen:!1}}))}}async function Y(){if(!$){I.error("Funis est\xE3o habilitados somente na vers\xE3o Premium!"),I.error(b);return}j(o,0)}const z=Math.floor(s/1e3/60),ee=Math.floor(s/1e3%60);return e.createElement(e.Fragment,null,e.createElement(He,{fill:n},e.createElement("div",{className:"iconAndNameContainer"},e.createElement("div",{className:"iconContainer"},e.createElement(t,{className:"iconItem"})),e.createElement("div",{className:"nameContainer"},e.createElement("span",null,!$&&"DISPONIVEL NA VERS\xC3O PREMIUM"," ",r," -",z>0&&`${z} min e `," ",ee," seg"))),e.createElement("div",{className:"actionsContainer"},e.createElement("button",{className:"showItemBtn",type:"button",onClick:J},e.createElement(q,null)),e.createElement("button",{className:"sendItemBtn",type:"button",onClick:Y,disabled:!$},e.createElement(W,null)))),u&&(u.length>0?e.createElement(M,{fill:n,shouldDisplay:C},u.map((w,k)=>e.createElement(Le,{key:w.indexId,item:w,index:k,handleSendFromHere:()=>{if(!$){I.error("Funis est\xE3o habilitados somente na vers\xE3o Premium!"),I.error(b);return}j(o,k)}}))):e.createElement(M,{fill:n,shouldDisplay:C},"Funil Vazio")),!u&&e.createElement(M,{fill:n,shouldDisplay:C},"Carregando..."))}const ze=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* grid-area: content; */
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: var(--shape);
  position: relative;
  padding: 0 0.25rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
  #funnelWrapper {
    width: 100%;
    padding-bottom: 2rem;
  }
  .noFunnelContainer {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 5rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dashboardBtn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-title);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 1rem;

      transition: background 0.2s;

      background: ${L(.15,f.purple)};
      box-shadow: 0px 0px 15px var(--veryperi);

      &:hover {
        background: var(--veryperi);
      }

      .iconHeaderButton {
        fill: white;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`;function je(){const{funnelsIndex:t}=pe(),[r,o]=l.exports.useState("");return e.createElement(ze,null,t.filter(n=>n.data).length>0?e.createElement(e.Fragment,null,e.createElement(S,{value:r,onChange:n=>o(n.target.value)}),e.createElement("div",{id:"funnelWrapper"},t.map((n,a)=>n.data&&n.data.length>0&&m(`${a} - ${n.name}`).toLowerCase().includes(m(r).toLowerCase())&&e.createElement(Oe,{key:n.id,fill:p(n.type),Icon:h(n.type),name:`${a} - ${n.name}`,item:n})))):e.createElement("div",{className:"noFunnelContainer"},e.createElement("h2",null,"Nenhum funil cadastrado, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const Re=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-area: content;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: var(--shape);
  position: relative;
  padding: 0 0.25rem;
  #menuSection {
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--shape);
    align-items: center;
    justify-content: space-evenly;
    padding: 0.25rem 0;

    a {
      text-decoration: none;
      display: grid;
      place-items: center;
      width: 100%;

      & + a {
        padding-left: 0.25rem;
      }
    }
  }
  .noItemContainer {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 5rem;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dashboardBtn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-title);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 1rem;

      transition: background 0.2s;

      background: ${L(.15,f.purple)};
      box-shadow: 0px 0px 15px var(--veryperi);

      &:hover {
        background: var(--veryperi);
      }

      .iconHeaderButton {
        fill: white;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
`,Ve=d.div`
  border: 1px solid ${({fill:t})=>t&&c(.7,t)};
  width: 100%;
  height: 3rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({isActive:t,fill:r})=>t&&!!r?c(.8,r):c(.7,f.gray3)};

  transition: filter 0.2s;
  box-shadow: 0px 0px 20px -10px ${({fill:t})=>t&&c(.1,t)};
  &:hover {
    filter: brightness(0.9);
    background: ${({fill:t})=>t&&c(.8,t)};
  }
  .insideIcon {
    width: 50%;
    height: 50%;
    fill: var(--text-title);
    fill: ${({isActive:t,fill:r})=>t&&!!r&&r};
  }
`;function N({fill:t,isActive:r,Icon:o}){return e.createElement(Ve,{isActive:!!r,fill:t},e.createElement(o,{className:"insideIcon"}))}function qe(){const t=T(),[r,o]=l.exports.useState("all"),n=H();return l.exports.useEffect(()=>{var s;const a=(s=t==null?void 0:t.pathname)==null?void 0:s.match(/^\/popup\/items\/(.*)$/);if(!a)return n("/popup/items/all");const[u,i]=a;return o(i||"all")},[t]),e.createElement(Re,null,e.createElement("section",{id:"menuSection"},e.createElement(y,{to:g.all},e.createElement(N,{Icon:he,isActive:r==="all",fill:f.red})),e.createElement(y,{to:g.mensagens},e.createElement(N,{Icon:h("mensagens"),isActive:r==="mensagens",fill:p("mensagens")})),e.createElement(y,{to:g.audios},e.createElement(N,{Icon:h("audios"),isActive:r==="audios",fill:p("audios")})),e.createElement(y,{to:g.medias},e.createElement(N,{Icon:h("medias"),isActive:r==="medias",fill:p("medias")})),e.createElement(y,{to:g.docs},e.createElement(N,{Icon:h("docs"),isActive:r==="docs",fill:p("docs")}))),e.createElement(K,null))}const We=d.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;function Ue(){const{docsIndex:t}=Q(),[r,o]=l.exports.useState("");return e.createElement(We,null,e.createElement(S,{value:r,onChange:n=>o(n.target.value)}),t.length>0?t.map((n,a)=>m(`${a} - ${n.name}`).toLowerCase().includes(m(r).toLowerCase())&&e.createElement(v,{key:n.id,fill:p(n.type),Icon:h(n.type),name:`${a} - ${n.name}`,item:n})):e.createElement("div",{className:"noItemContainer"},e.createElement("h2",null,"Nenhum documento cadastrado, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const Ge=d.div``;function _e(){const t=H();return l.exports.useEffect(()=>{t("/popup",{replace:!0})},[]),e.createElement(Ge,null,e.createElement(y,{to:"/popup/funnels"},e.createElement("h1",null,"LoginPopup")))}const Ze=d.div`
  width: 100%;
  height: 100%;
  background: var(--shape);
  padding: 0.25rem;
  grid-area: menus;
  #btnCategoryContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0.25rem;
    button {
      width: 10rem;
      height: 2rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      background: var(--background);

      &#itemsCategoryBtn {
        border: 1px solid var(--veryperi);
        &.activeCategory {
          background: var(--veryperi);
          color: white;
        }
      }
      &#funnelsCategoryBtn {
        border: 1px solid var(--yellow);
        &.activeCategory {
          background: var(--yellow);
          color: white;
        }
      }
    }
  }
`,Qe=d.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto 1fr 2rem;
  grid-template-areas:
    'header'
    'menus'
    'content'
    'copyright';
`,Ke=d.div`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  background: var(--header-background);
  /* background: var(--veryperi); */
  width: 100%;
  height: 100%;
  #logoAndUsername {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    span {
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      margin-top: 0.5rem;
    }
    img {
      width: 5rem;
      height: auto;
      filter: drop-shadow(0px 5px 15px black);
    }
  }

  button.dashboardBtn {
    padding: 0.25rem;
    border: none;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 15px -5px black;
    transition: background 0.2s;

    background: ${L(.15,f.purple)};
    box-shadow: 0px 0px 15px var(--veryperi);

    &:hover {
      background: var(--veryperi);
    }

    .iconHeaderButton {
      fill: white;
      width: 1.75rem;
      height: 1.75rem;
    }
    span {
      color: white;
      font-weight: 800;
    }
  }
  #containerSwitchDarkMode {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    transform: translateX(-0.5rem);
    filter: opacity(0.5);
    transition: filter 0.2s;
    &:hover {
      filter: opacity(1);
    }
    span {
      font-weight: 700;
      font-size: 0.75rem;
      text-align: center;
      color: white;
    }
  }
`;function Xe(){const{isDarkTheme:t,setIsDarkTheme:r}=X(),{isPremium:o,responseData:n}=A();return e.createElement(Ke,null,e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>{chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"}},e.createElement(x,{className:"iconHeaderButton"}),e.createElement("span",null,"Painel de Controle")),e.createElement("div",{id:"logoAndUsername"},e.createElement("img",{className:"popupLogo",src:t?ge:fe,alt:"ZapVoice Logo"}),e.createElement("span",null,o?`(PRO)${String(n)}`:n&&e.createElement("a",{target:"_blank",href:`http://web.whatsapp.com/send?phone=5514991238006&amp;text=Estou com o Erro: ${String(n)}, pode me ajudar?`,rel:"noreferrer"},String(n),e.createElement("br",null),"Clique Aqui para suporte"))),e.createElement("div",{id:"containerSwitchDarkMode"},e.createElement("span",null," MODO ",t?"DARK":"LIGHT"),e.createElement(be,{id:"switchDarkMode",checked:t,onClick:()=>r(!t)})))}const Je=d.div`
  grid-area: copyright;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--text-subtitle);
  background: var(--shape);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  span.nameAndVersion {
    font-size: 0.7rem;
    font-weight: 700;
  }
  span.copyrightWarning {
    font-size: 0.6rem;
  }
  .btnFooter {
    position: absolute;
    border-radius: 0.25rem;
    font-weight: 900;
    padding: 0 0.5rem;
    top: 0;
    bottom: 0;
    border: 1px solid var(--yellow);
    color: var(--text-title);
    background: ${c(.4,f.yellow)};
    &.btnFooterSuporte {
      left: 1rem;
    }
    &.btnFooterSugestoes {
      right: 1rem;
    }
  }
`;function Ye(){const[t,r]=l.exports.useState(""),[o,n]=l.exports.useState("");return l.exports.useEffect(()=>{const a=chrome!=null&&chrome.runtime?chrome.runtime.getManifest():{version_name:"Local Development",version:"Local Development"};r(a.version_name||a.version)},[]),l.exports.useEffect(()=>{(async()=>{const u=await O("wppVersion"),i=chrome!=null&&chrome.runtime?chrome.runtime.id:"localExtensionId",s=new URLSearchParams;s.append("version",t),s.append("wppVersion",u),s.append("extensionId",i),n(s.toString())})().catch(console.error)},[t]),e.createElement(Je,null,e.createElement("span",{className:"nameAndVersion"},"ZAPVOICE - v",t),e.createElement("span",{className:"copyrightWarning"},"Copyright \xA9 2022 ZapVoice - Todos os direitos reservados"),e.createElement("button",{type:"button",className:"btnFooter btnFooterSuporte",onClick:()=>{const a=`https://zapvoice.com.br/suporte?${o}`;chrome!=null&&chrome.tabs?chrome.tabs.create({url:a}):window.open(a,"_blank")}},"Suporte"),e.createElement("button",{type:"button",className:"btnFooter btnFooterSugestoes",onClick:()=>{const a=`https://zapvoice.com.br/sugestoes?${o}`;chrome!=null&&chrome.tabs?chrome.tabs.create({url:a}):window.open(a,"_blank")}},"Sugest\xF5es"))}function et(){const t=T(),r=H(),[o,n]=l.exports.useState("items");return l.exports.useEffect(()=>{O("lastPathStored").then(a=>{if(a!=null&&a.includes("items"))n("items");else if(a!=null&&a.includes("funnels"))n("funnels");else{r("/popup/items",{replace:!0});return}r(a,{replace:!0})})},[]),l.exports.useEffect(()=>{var u;const a=(u=t==null?void 0:t.pathname)!=null&&u.includes("funnels")?"funnels":"items";return n(a)},[t]),e.createElement(Qe,null,e.createElement(Xe,null),e.createElement(Ze,null,e.createElement("div",{id:"btnCategoryContainer"},e.createElement(y,{to:"/popup/items"},e.createElement("button",{type:"button",id:"itemsCategoryBtn",className:o==="items"?"activeCategory":""},"Itens \xDAnicos")),e.createElement(y,{to:"/popup/funnels"},e.createElement("button",{type:"button",id:"funnelsCategoryBtn",className:o==="funnels"?"activeCategory":""},"Funis Autom\xE1ticos")))),e.createElement(K,null),e.createElement(Ye,null))}const tt=d.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;function nt(){const{mensagensIndex:t}=G(),[r,o]=l.exports.useState("");return e.createElement(tt,null,e.createElement(S,{value:r,onChange:n=>o(n.target.value)}),t.length>0?t.map((n,a)=>m(`${a} - ${n.name}`).toLowerCase().includes(m(r).toLowerCase())&&e.createElement(v,{key:n.id,fill:p(n.type),Icon:h(n.type),name:`${a} - ${n.name}`,item:n})):e.createElement("div",{className:"noItemContainer"},e.createElement("h2",null,"Nenhuma mensagem cadastrado, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const at=d.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;function rt(){const{audiosIndex:t}=_(),[r,o]=l.exports.useState("");return e.createElement(at,null,e.createElement(S,{value:r,onChange:n=>o(n.target.value)}),t.length>0?t.map((n,a)=>m(`${a} - ${n.name}`).toLowerCase().includes(m(r).toLowerCase())&&e.createElement(v,{key:n.id,fill:p(n.type),Icon:h(n.type),name:`${a} - ${n.name}`,item:n})):e.createElement("div",{className:"noItemContainer"},e.createElement("h2",null,"Nenhum \xE1udio cadastrado, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const ot=d.div`
  width: 100%;
  padding-bottom: 2rem;
  .inputSearch {
    margin: 0.5rem 0;
  }
`;function it(){const{mediasIndex:t}=Z(),[r,o]=l.exports.useState("");return e.createElement(ot,null,e.createElement(S,{value:r,onChange:n=>o(n.target.value)}),t.length>0?t.map((n,a)=>m(`${a} - ${n.name}`).toLowerCase().includes(m(r).toLowerCase())&&e.createElement(v,{key:n.id,fill:p(n.type),Icon:h(n.type),name:`${a} - ${n.name}`,item:n})):e.createElement("div",{className:"noItemContainer"},e.createElement("h2",null,"Nenhuma m\xEDdia cadastrada, clique no bot\xE3o para abrir o dashboard"),e.createElement("button",{type:"button",className:"dashboardBtn",onClick:()=>chrome!=null&&chrome.runtime?chrome.runtime.openOptionsPage():window.location.href="dashboard.html"},e.createElement(x,{className:"iconHeaderButton"}),"Abrir o Dashboard")))}const g={all:"/popup/items/all",mensagens:"/popup/items/mensagens",audios:"/popup/items/audios",medias:"/popup/items/medias",docs:"/popup/items/docs"};function st(){const t=T();return l.exports.useEffect(()=>{t.pathname!=="/"&&t.pathname!=="/popup"&&Pe({lastPathStored:t.pathname})},[t]),e.createElement(Ee,null,e.createElement(E,{path:"/",element:e.createElement(_e,null)}),e.createElement(E,{path:"/popup",element:e.createElement(et,null)},e.createElement(E,{path:"/popup/items",element:e.createElement(qe,null)},e.createElement(E,{path:g.all,element:e.createElement(Fe,null)}),e.createElement(E,{path:g.mensagens,element:e.createElement(nt,null)}),e.createElement(E,{path:g.audios,element:e.createElement(rt,null)}),e.createElement(E,{path:g.medias,element:e.createElement(it,null)}),e.createElement(E,{path:g.docs,element:e.createElement(Ue,null)})),e.createElement(E,{path:"/popup/funnels",element:e.createElement(je,null)})))}const lt=ie`
html{
  display: flex;
  align-items: center;
  justify-content: center;
}
body{
  width: 450px;
  height:600px;
}
#root{
  max-width: 450px;
  margin: 0 auto;
}
`;function ct(){we();const{isDarkTheme:t}=X();return chrome!=null&&chrome.tabs&&l.exports.useEffect(()=>{chrome.tabs.query({url:"https://web.whatsapp.com/*",currentWindow:!0},r=>{r.length>0&&r[0].id?chrome.tabs.update(r[0].id,{highlighted:!0,selected:!0}):chrome.tabs.create({url:"https://web.whatsapp.com"})}),chrome.runtime.onMessage.addListener((r,o,n)=>{})}),e.createElement(ye,null,e.createElement(ve,null,e.createElement(te,{theme:t?"dark":"light",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0,position:"top-center",autoClose:2e3}),e.createElement(se,null),e.createElement(le,{isDarkTheme:t}),e.createElement(lt,null),e.createElement(st,null)))}ce.setAppElement("#root");me.createRoot(document.getElementById("root")).render(e.createElement(e.StrictMode,null,e.createElement(xe,null,e.createElement(Ce,null,e.createElement($e,null,e.createElement(ct,null))))));
