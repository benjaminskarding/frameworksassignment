const n="fbef4eb2-3a30-48ba-a6fd-da318f12c807",a="https://v2.api.noroff.dev",o=`${a}/auth`,c=`${o}/login`,A=`${o}/register`,I=`${o}/create-api-key`,t=`${a}/social`,r=`${t}/posts`,_=`${t}/profiles`;localStorage.getItem("accessToken");function p(){const e=new Headers({"Content-Type":"application/json"});e.append("X-Noroff-API-Key",n);const s=localStorage.getItem("accessToken");return s&&e.append("Authorization",`Bearer ${s}`),e}export{I as A,c as a,A as b,r as c,_ as d,p as h};