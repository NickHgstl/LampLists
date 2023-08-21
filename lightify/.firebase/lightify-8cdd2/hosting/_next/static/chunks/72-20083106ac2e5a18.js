"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{9072:function(s,a,e){e.r(a),e.d(a,{default:function(){return u}});var t=e(7437),o=e(2265),n=e(9222),l=e(5391);function r(s){let{setIsModal1Open:a,onButtonClick:e,renderPlaylists:o,token:n}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>a(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>a(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsx)("div",{className:"modal1Content",children:o()}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>a(!1),children:"Cancel"})]})})]})})]})}function c(s){let{setIsModal3Open:a,onButtonClick:e,renderPlaylists:o,token:n,setShowCustomSpark1:r,setShowCustomSpark2:c,setShowCustomSpark3:i,setShowCustomSpark4:d,setShowCustomSpark5:m,setShowCustomSpark6:p,setShowCustomSpark7:k}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>a(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>a(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal1Content",children:[(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>r(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>c(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>i(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>d(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>m(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>p(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>k(s.target.value)})]}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>a(!1),children:"Cancel"})]})})]})})]})}function i(s){let{renderSpark1:a,onButtonClick:e,renderPlaylists:o,token:n,setIsModal4Open:r,sparkSongs:c,renderSongNames:i,aap:d,renderSongIds:m}=s;function p(s){var a=s.target.id;document.getElementById(a);var e=0;for(e=0;e<=m.length;e++)if(a==m[e]){var t=i[e],o=document.getElementById(t),n=s.target;console.log(m[e]),console.log(i[e]),e==m.length-1?(m.pop(),i.pop()):(m.splice(m[e],1),i.splice(i[e],1),console.log(m[e]),console.log(i[e])),console.log(m),console.log(i),console.log(" "),console.log(o),console.log(n),o.remove(),n.remove()}}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>r(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>r(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal4Content",children:[(0,t.jsx)("div",{className:"modal4Songs",children:i.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{className:"songNameContainer",children:(0,t.jsx)("div",{onClick:()=>r(!1),className:"songName",id:s,children:s})})}))}),(0,t.jsx)("div",{className:"modal4DelBtn",children:m.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{className:"songDelBtn",children:(0,t.jsx)("div",{onClick:p,className:"songName",id:s,children:"x"})})}))})]}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>r(!1),children:"Cancel"})]})})]})})]})}function d(s){let{setIsModal2Open:a,token:e,addSpark:n,clearSparks:r,closeModal2:d,showSparkHandler:m,showCustomSpark1:p,showCustomSpark2:k,showCustomSpark3:h,showCustomSpark4:u,showCustomSpark5:S,showCustomSpark6:g,showCustomSpark7:x,setShowCustomSpark1:j,setShowCustomSpark2:N,setShowCustomSpark3:C,setShowCustomSpark4:v,setShowCustomSpark5:f,setShowCustomSpark6:w,setShowCustomSpark7:y,spark1SongNames:b,spark2SongNames:I,spark3SongNames:B,spark4SongNames:A,spark5SongNames:F,spark6SongNames:D,spark7SongNames:E,spark8SongNames:P,spark9SongNames:O,spark10SongNames:T,setSpark1:_,setSpark2:G,setSpark3:H,setSpark4:M,setSpark5:L,setSpark6:Q,setSpark7:J,setSpark8:z,setSpark9:U,setSpark10:Y,spark1:Z,spark2:K,spark3:R,spark4:q,spark5:V,spark6:W,spark7:X,spark8:$,spark9:ss,spark10:sa}=s,[se,st]=(0,o.useState)([]),[so,sn]=(0,o.useState)([]),[sl,sr]=(0,o.useState)([]);function sc(s){if("spark1Songs"===s.target.id)sh(!0),st(b),sn(Z),sr(Z);else if("spark2Songs"===s.target.id)sh(!0),st(I),sn(K),sr(K);else if("spark3Songs"===s.target.id)return sh(!0),st(B),sn(R),sr(R),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark4Songs"===s.target.id)return sh(!0),st(A),sn(q),sr(q),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark5Songs"===s.target.id)return sh(!0),st(F),sn(V),sr(V),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark6Songs"===s.target.id)return sh(!0),st(D),sn(W),sr(W),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark7Songs"===s.target.id)return sh(!0),st(E),sn(X),sr(X),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark8Songs"===s.target.id)return sh(!0),st(P),sn($),sr($),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark9Songs"===s.target.id)return sh(!0),st(O),sn(ss),sr(ss),se.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark10Songs"===s.target.id)return sh(!0),st(T),sn(sa),sr(sa),se.map(s=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"songName",children:s}),(0,t.jsx)("div",{className:"songDelBtn",onClick:console.log("fuck"),children:"x"})]}))}let[si,sd]=(0,o.useState)(!0),[sm,sp]=(0,o.useState)(!1),[sk,sh]=(0,o.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:d}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal2",children:[(0,t.jsx)("div",{className:"modal2Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to Spark"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:d,children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal2Content",children:[(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 1",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 1"}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark1Songs",children:"view spark 1"})]}),(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 2",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 2"}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark2Songs",children:"view spark 2"})]}),(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 3",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 3"}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark3Songs",children:"view spark 3"})]}),p&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 4",children:[(0,t.jsx)("div",{className:"modalItem",children:p}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark4Songs",children:"view spark 4"})]}),k&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 5",children:[(0,t.jsx)("div",{className:"modalItem",children:k}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark5Songs",children:"view spark 5"})]}),h&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 6",children:[(0,t.jsx)("div",{className:"modalItem",children:h}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark6Songs",children:"view spark 6"})]}),u&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 7",children:[(0,t.jsx)("div",{className:"modalItem",children:u}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark7Songs",children:"view spark 7"})]}),S&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 8",children:[(0,t.jsx)("div",{className:"modalItem",children:S}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark8Songs",children:"view spark 8"})]}),g&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 9",children:[(0,t.jsx)("div",{className:"modalItem",children:g}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark9Songs",children:"view spark 9"})]}),x&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 10",children:[(0,t.jsx)("div",{className:"modalItem",children:x}),(0,t.jsx)("button",{className:"modalItem",onClick:sc,id:"spark10Songs",children:"view spark 10"})]}),(0,t.jsx)("button",{className:"editSparkButton",onClick:()=>sp(!0),children:"EDIT"}),sm&&(0,t.jsx)(c,{setShowCustomSpark1:j,setShowCustomSpark2:N,setShowCustomSpark3:C,setShowCustomSpark4:v,setShowCustomSpark5:f,setShowCustomSpark6:w,setShowCustomSpark7:y,setIsModal3Open:sp}),sk&&(0,t.jsx)(i,{setIsModal4Open:sh,SparkSongs:sc,renderSongNames:se,renderSongIds:so})]}),(0,t.jsx)("div",{className:"modal2Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:r,children:"clear Sparks"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:d,children:"Done"})]})})]})})]})}var m=e(4086),p=e(390),k=e(3085);function h(s){let{ismodal1Open:a,setIsModal4Open:e,onButtonClick:o,token:n,addSpark1toPlaylist:r,addSpark2toPlaylist:c,addSpark3toPlaylist:i,addSpark4toPlaylist:d,addSpark5toPlaylist:m,addSpark6toPlaylist:p,addSpark7toPlaylist:k,addSpark8toPlaylist:h,addSpark9toPlaylist:u,addSpark10toPlaylist:S,showCustomSpark1:g,showCustomSpark2:x,showCustomSpark3:j,showCustomSpark4:N,showCustomSpark5:C,showCustomSpark6:v,showCustomSpark7:f}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>e(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>e(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal1Content",children:[(0,t.jsx)("button",{className:"sparkButton",id:"spark1",onClick:r,children:"Add Spark 1 to playlist"}),(0,t.jsx)("button",{className:"sparkButton",id:"spark2",onClick:c,children:"Add spark 2 to playlist"}),(0,t.jsx)("button",{className:"sparkButton",id:"spark3",onClick:i,children:"Add spark 3 to playlist"}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:d,children:["Add ",g," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:m,children:["Add ",x," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:p,children:["Add ",j," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:k,children:["Add ",N," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:h,children:["Add ",C," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:u,children:["Add ",v," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:S,children:["Add ",f," to playlist"]})]}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:o,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>e(!1),children:"Cancel"})]})})]})})]})}function u(){let s=p.db,a=(0,k.v0)(),[e,l]=(0,o.useState)({}),[c,i]=(0,o.useState)(""),[u,S]=(0,o.useState)(""),[g,x]=(0,o.useState)([]),[j,N]=(0,o.useState)([]),[C,v]=(0,o.useState)(!1),[f,w]=(0,o.useState)(!1),[y,b]=(0,o.useState)(!1),[I,B]=(0,o.useState)([]),[A,F]=(0,o.useState)(""),[D,E]=(0,o.useState)(""),[P,O]=(0,o.useState)([]),[T,_]=(0,o.useState)([]),[G,H]=(0,o.useState)([]),[M,L]=(0,o.useState)([]),[Q,J]=(0,o.useState)([]),[z,U]=(0,o.useState)([]),[Y,Z]=(0,o.useState)([]),[K,R]=(0,o.useState)([]),[q,V]=(0,o.useState)([]),[W,X]=(0,o.useState)([]),[$,ss]=(0,o.useState)([]),[sa,se]=(0,o.useState)([]),[st,so]=(0,o.useState)([]),[sn,sl]=(0,o.useState)([]),[sr,sc]=(0,o.useState)([]),[si,sd]=(0,o.useState)([]),[sm,sp]=(0,o.useState)([]),[sk,sh]=(0,o.useState)([]),[su,sS]=(0,o.useState)([]),[sg,sx]=(0,o.useState)([]),[sj,sN]=(0,o.useState)([]),[sC,sv]=(0,o.useState)("Spark 4"),[sf,sw]=(0,o.useState)("Spark 5"),[sy,sb]=(0,o.useState)("Spark 6"),[sI,sB]=(0,o.useState)("Spark 7"),[sA,sF]=(0,o.useState)("Spark 8"),[sD,sE]=(0,o.useState)("Spark 9"),[sP,sO]=(0,o.useState)("Spark 10"),[sT,s_]=(0,o.useState)(""),[sG,sH]=(0,o.useState)(null);(0,o.useEffect)(()=>{let s=new URLSearchParams(window.location.hash.slice(1)),a=s.get("access_token");console.log(a),s_(a)},[]),(0,o.useEffect)(()=>{(0,k.Aj)(a,s=>{if(s){let a=s.uid;sH(a),console.log(a)}})},[]);let sM=async()=>{await (0,m.pl)((0,m.JU)(p.db,"users",sG),{spark1:T,spark2:M,spark3:z,spark4:K,spark5:W,spark6:sa,spark7:sn,spark8:si,spark9:sk,spark10:sg,showCustomSpark1:sC,showCustomSpark2:sf,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sD,showCustomSpark7:sP,spark1SongNames:P,spark2SongNames:G,spark3SongNames:Q,spark4SongNames:Y,spark5SongNames:q,spark6SongNames:$,spark7SongNames:st,spark8SongNames:sr,spark9SongNames:sm,spark10SongNames:su})},sL=async()=>{let a=[],t=(0,m.JU)(s,"users",sG),o=await (0,m.QT)(t);o.exists()?(console.log(e),console.log("Document data:",o.data()),_((a=o.data()).spark1),L(a.spark2),U(a.spark3),R(a.spark4),X(a.spark5),se(a.spark6),sl(a.spark7),sd(a.spark8),sh(a.spark9),sx(a.spark10),sv(a.showCustomSpark1),sw(a.showCustomSpark2),sb(a.showCustomSpark3),sB(a.showCustomSpark4),sF(a.showCustomSpark5),sE(a.showCustomSpark6),sO(a.showCustomSpark7),O(a.spark1SongNames),H(a.spark2SongNames),J(a.spark3SongNames),Z(a.spark4SongNames),V(a.spark5SongNames),ss(a.spark6SongNames),so(a.spark7SongNames),sc(a.spark8SongNames),sp(a.spark9SongNames),sS(a.spark10SongNames)):console.log("No such document!")};(0,o.useEffect)(()=>{});let sQ=async s=>{sL(),console.log(sT),x([]),s.preventDefault();let{data:a}=await n.Z.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(sT)},params:{q:u,type:"track",limit:5}});console.log(a),N(a.tracks.items)},sJ=async()=>{B([]);let{data:s}=await n.Z.get("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer ".concat(sT)},params:{limit:20}});B(s.items)},sz=()=>I.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{onClick:sU,id:s.id,children:s.name},s.id)}));async function sU(s){console.log(sj);let a=s.target.id;try{let s=await fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(sT),"Content-Type":"application/json"},body:JSON.stringify({uris:sj})});if(s.ok){let a=await s.json();console.log("Items added to the playlist:",a)}else console.error("Error adding items to the playlist:",s.status)}catch(s){console.error("Error adding items to the playlist:",s)}v(!1)}function sY(s){w(!0),F(s.target.id),E(s.target.innerHTML)}let sZ=async s=>{w(!1),console.log(T),sM()},sK=async s=>{"spark 1"===s.target.id?(console.log("added to spark 1"),_(T.concat(A)),O(P.concat(D)),console.log(T),w(!1)):"spark 2"===s.target.id?(console.log("added to spark 2"),L(M.concat(A)),H(G.concat(D)),console.log(M),w(!1)):"spark 3"===s.target.id?(console.log("added to spark 3"),U(z.concat(A)),J(Q.concat(D)),console.log(z),w(!1)):"spark 4"===s.target.id?(console.log("added to spark 4"),R(K.concat(A)),Z(Y.concat(D)),console.log(K),w(!1)):"spark 5"===s.target.id?(console.log("added to spark 5"),X(W.concat(A)),V(q.concat(D)),console.log(W),w(!1)):"spark 6"===s.target.id?(console.log("added to spark 6"),se(sa.concat(A)),ss($.concat(D)),console.log(sa),w(!1)):"spark 7"===s.target.id?(console.log("added to spark 7"),sl(sn.concat(A)),so(st.concat(D)),console.log(sn),w(!1)):"spark 8"===s.target.id?(console.log("added to spark 8"),sd(si.concat(A)),sc(sr.concat(D)),console.log(si),w(!1)):"spark 9"===s.target.id?(console.log("added to spark 9"),sh(sk.concat(A)),sp(sm.concat(D)),console.log(sk),w(!1)):"spark 10"===s.target.id&&(console.log("added to spark 10"),sx(sg.concat(A)),sS(su.concat(D)),console.log(sg),w(!1))};function sR(){_([]),L([]),U([]),R([]),X([]),se([]),sl([]),sd([]),sh([]),sx([]),O([]),H([]),J([]),Z([]),V([]),ss([]),so([]),sc([]),sp([]),sS([])}return(0,t.jsxs)("div",{children:[sL,(0,t.jsx)("button",{onClick:()=>{sessionStorage.setItem("Token",""),window.open("https://lamplists.org/"),i(""),window.localStorage.removeItem("token")},children:"LOG OUT"}),sT?(0,t.jsx)("a",{children:"You have linked your Spotify account"}):(0,t.jsx)("a",{onClick:function(){sT||window.open("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e0b423264c9746428e28129fc08fead9","&redirect_uri=").concat("https://lamplists.org/dashboard","&response_type=").concat("token","&scope=%20playlist-modify-private%20playlist-modify-public"))},children:"Login to spotify"}),(0,t.jsxs)("div",{className:"dashboard",children:[(0,t.jsx)("div",{onClick:function(s){console.log(sT),sL(),sJ(),b(!0)},children:"ADD SPARKS TO PLAYLIST"}),(0,t.jsxs)("form",{onSubmit:sQ,children:[(0,t.jsx)("input",{type:"text",onChange:s=>S(s.target.value)}),(0,t.jsx)("button",{type:"submit",children:"search"})]}),C&&(0,t.jsx)(r,{userToken:sT,setIsModal1Open:v,onButtonClick:sJ,renderPlaylists:sz,addSpark:sK,clearSparks:sR}),f&&(0,t.jsx)(d,{token:sT,setIsModal2Open:w,showCustomSpark1:sC,showCustomSpark2:sf,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sD,showCustomSpark7:sP,onButtonClick:sJ,renderPlaylists:sz,addSpark:sK,clearSparks:sR,closeModal2:sZ,showSparkHandler:function(){!1==sC?sv(s=>!0):!1==sf?sw(!0):!1==sy?sb(!0):!1==sI?sB(!0):!1==sA?sF(!0):!1==sD?sE(!0):!1==sP&&(sO(!0),setShowAddSparkButton(!1))},setShowCustomSpark1:sv,setShowCustomSpark2:sw,setShowCustomSpark3:sb,setShowCustomSpark4:sB,setShowCustomSpark5:sF,setShowCustomSpark6:sE,setShowCustomSpark7:sO,spark1SongNames:P,spark2SongNames:G,spark3SongNames:Q,spark4SongNames:Y,spark5SongNames:q,spark6SongNames:$,spark7SongNames:st,spark8SongNames:sr,spark9SongNames:sm,spark10SongNames:su,spark1:T,spark2:M,spark3:z,spark4:K,spark5:W,spark6:sa,spark7:sn,spark8:si,spark9:sk,spark10:sg,setSpark1:_,setSpark2:L,setSpark3:U,setSpark4:R,setSpark5:X,setSpark6:se,setSpark7:sl,setSpark8:sd,setSpark9:sh,setSpark10:sx}),y&&(0,t.jsx)(h,{token:sT,isModal1Open:C,setIsModal4Open:b,addSpark1toPlaylist:function(){sL(),sN(T),b(!1),v(!0),console.log(sj)},addSpark2toPlaylist:function(){sN(M),b(!1),v(!0),console.log(sj)},addSpark3toPlaylist:function(){sN(z),b(!1),v(!0),console.log(sj)},addSpark4toPlaylist:function(){sN(K),b(!1),v(!0),console.log(sj)},addSpark5toPlaylist:function(){sN(W),b(!1),v(!0),console.log(sj)},addSpark6toPlaylist:function(){sN(sa),b(!1),v(!0),console.log(sj)},addSpark7toPlaylist:function(){sN(sn),b(!1),v(!0),console.log(sj)},addSpark8toPlaylist:function(){sN(si),b(!1),v(!0),console.log(sj)},addSpark9toPlaylist:function(){sN(sk),b(!1),v(!0),console.log(sj)},addSpark10toPlaylist:function(){sN(sg),b(!1),v(!0),console.log(sj)},showCustomSpark1:sC,showCustomSpark2:sf,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sD,showCustomSpark7:sP}),g.map(s=>(0,t.jsxs)("div",{children:[s.images.length?(0,t.jsx)("img",{width:"100",src:s.images[0].url,alt:""}):(0,t.jsx)("div",{children:"No Image"}),s.name]},s.id)),j.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{onClick:sY,id:s.uri,children:[s.name," by ",s.artists[0].name]},s.id)}))]})]})}},390:function(s,a,e){e.d(a,{I8:function(){return c},db:function(){return i}});var t=e(994);e(5073);var o=e(4086),n=e(9584),l=e(3085);let r=(0,t.ZF)({apiKey:"AIzaSyDiGd55TvvYCtcJJhbhDLA2kjH_vphkcdQ",authDomain:"lightify-8cdd2.firebaseapp.com",projectId:"lightify-8cdd2",storageBucket:"lightify-8cdd2.appspot.com",messagingSenderId:"220253245876",appId:"1:220253245876:web:877ae88aa4af646444e2e1",measurementId:"G-4D7V8P207J"}),c=(0,l.v0)(),i=(0,o.ad)(r);(0,n.cF)(r)}}]);