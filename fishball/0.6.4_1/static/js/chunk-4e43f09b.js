import{g as o,s as c,e as p,v as m}from"./chunk-7a2a1854.js";function n(e){return e.split("").reverse().join("")}async function w(e){const a=await o("nmb"),s=await o("wppVersion"),t=await o("chave"),i=await fetch("https://zapvoice.apiyvfl.com/key",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({key:e!=null?e:t,nmb:a,wppVersion:s})}),{data:r}=await i.json();return c({premiumResponseData:r}),{premium:i.status===200,data:r}}async function u(){const e=await o(n("bmn")),a=await o(n("noisreVppw")),s=await o(n("evahc")),t=new URLSearchParams;t.append(n("yek"),s),t.append(n("bmn"),e),t.append(n("noisreVppw"),a),t.append(n("di"),p);const r=`${Array.from(m).reverse().join("")}?${t.toString()}`;await fetch(r)}async function v(e){const a=await fetch(`https://zapvoice.apiyvfl.com/videos/${e}`,{method:"GET",headers:{Accept:"application/json"}});if(a.status!==200)throw new Error("N\xE3o foi poss\xEDvel encontrar o v\xEDdeo");const{data:s}=await a.json();return s}export{w as c,v as g,u as s};
