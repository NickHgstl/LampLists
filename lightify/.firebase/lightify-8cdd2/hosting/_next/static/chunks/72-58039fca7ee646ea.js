"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{9072:function(s,a,e){e.r(a),e.d(a,{default:function(){return u}});var t=e(7437),o=e(2265),n=e(9222),l=e(5391);function r(s){let{setIsModal1Open:a,onButtonClick:e,renderPlaylists:o,token:n}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>a(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>a(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsx)("div",{className:"modal1Content",children:o()}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>a(!1),children:"Cancel"})]})})]})})]})}function c(s){let{setIsModal3Open:a,onButtonClick:e,renderPlaylists:o,token:n,setShowCustomSpark1:r,setShowCustomSpark2:c,setShowCustomSpark3:i,setShowCustomSpark4:d,setShowCustomSpark5:m,setShowCustomSpark6:p,setShowCustomSpark7:k}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>a(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>a(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal1Content",children:[(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>r(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>c(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>i(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>d(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>m(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>p(s.target.value)}),(0,t.jsx)("input",{placeholder:"Enter new name for Spark",onChange:s=>k(s.target.value)})]}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>a(!1),children:"Cancel"})]})})]})})]})}function i(s){let{renderSpark1:a,onButtonClick:e,renderPlaylists:o,token:n,setIsModal4Open:r,sparkSongs:c,renderSongNames:i,aap:d}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>r(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>r(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsx)("div",{className:"modal1Content",children:i.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{onClick:()=>r(!1),className:"songName",children:s})}))}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:e,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>r(!1),children:"Cancel"})]})})]})})]})}function d(s){let{setIsModal2Open:a,token:e,addSpark:n,clearSparks:r,closeModal2:d,showSparkHandler:m,showCustomSpark1:p,showCustomSpark2:k,showCustomSpark3:h,showCustomSpark4:u,showCustomSpark5:S,showCustomSpark6:g,showCustomSpark7:x,setShowCustomSpark1:j,setShowCustomSpark2:N,setShowCustomSpark3:C,setShowCustomSpark4:v,setShowCustomSpark5:w,setShowCustomSpark6:f,setShowCustomSpark7:y,spark1SongNames:b,spark2SongNames:I,spark3SongNames:B,spark4SongNames:A,spark5SongNames:F,spark6SongNames:P,spark7SongNames:D,spark8SongNames:E,spark9SongNames:O,spark10SongNames:T}=s,[G,_]=(0,o.useState)([]);function H(s){if("spark1Songs"===s.target.id)return U(!0),_(b),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark2Songs"===s.target.id)return U(!0),_(I),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark3Songs"===s.target.id)return U(!0),_(B),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark4Songs"===s.target.id)return U(!0),_(A),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark5Songs"===s.target.id)return U(!0),_(F),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark6Songs"===s.target.id)return U(!0),_(P),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));if("spark7Songs"===s.target.id)return U(!0),_(D),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark8Songs"===s.target.id)return U(!0),_(E),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark9Songs"===s.target.id)return U(!0),_(O),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}));else if("spark10Songs"===s.target.id)return U(!0),_(T),console.log(G),G.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"songName",children:s})}))}let[L,M]=(0,o.useState)(!0),[Q,z]=(0,o.useState)(!1),[J,U]=(0,o.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:d}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal2",children:[(0,t.jsx)("div",{className:"modal2Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to Spark"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:d,children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal2Content",children:[(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 1",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 1"}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark1Songs",children:"view spark 1"})]}),(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 2",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 2"}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark2Songs",children:"view spark 2"})]}),(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 3",children:[(0,t.jsx)("div",{className:"modalItem",children:"Spark 3"}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark3Songs",children:"view spark 3"})]}),p&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 4",children:[(0,t.jsx)("div",{className:"modalItem",children:p}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark4Songs",children:"view spark 4"})]}),k&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 5",children:[(0,t.jsx)("div",{className:"modalItem",children:k}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark5Songs",children:"view spark 5"})]}),h&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 6",children:[(0,t.jsx)("div",{className:"modalItem",children:h}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark6Songs",children:"view spark 6"})]}),u&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 7",children:[(0,t.jsx)("div",{className:"modalItem",children:u}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark7Songs",children:"view spark 7"})]}),S&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 8",children:[(0,t.jsx)("div",{className:"modalItem",children:S}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark8Songs",children:"view spark 8"})]}),g&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 9",children:[(0,t.jsx)("div",{className:"modalItem",children:g}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark9Songs",children:"view spark 9"})]}),x&&(0,t.jsxs)("div",{className:"modalItemContainer",onClick:n,id:"spark 10",children:[(0,t.jsx)("div",{className:"modalItem",children:x}),(0,t.jsx)("button",{className:"modalItem",onClick:H,id:"spark10Songs",children:"view spark 10"})]}),(0,t.jsx)("button",{className:"editSparkButton",onClick:()=>z(!0),children:"EDIT"}),Q&&(0,t.jsx)(c,{setShowCustomSpark1:j,setShowCustomSpark2:N,setShowCustomSpark3:C,setShowCustomSpark4:v,setShowCustomSpark5:w,setShowCustomSpark6:f,setShowCustomSpark7:y,setIsModal3Open:z}),J&&(0,t.jsx)(i,{setIsModal4Open:U,renderSpark1:()=>{},SparkSongs:H,renderSongNames:G})]}),(0,t.jsx)("div",{className:"modal2Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:r,children:"clear Sparks"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:d,children:"Done"})]})})]})})]})}var m=e(4086),p=e(390),k=e(3085);function h(s){let{ismodal1Open:a,setIsModal4Open:e,onButtonClick:o,token:n,addSpark1toPlaylist:r,addSpark2toPlaylist:c,addSpark3toPlaylist:i,addSpark4toPlaylist:d,addSpark5toPlaylist:m,addSpark6toPlaylist:p,addSpark7toPlaylist:k,addSpark8toPlaylist:h,addSpark9toPlaylist:u,addSpark10toPlaylist:S,showCustomSpark1:g,showCustomSpark2:x,showCustomSpark3:j,showCustomSpark4:N,showCustomSpark5:C,showCustomSpark6:v,showCustomSpark7:w}=s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"darkBG",onClick:()=>e(!1)}),(0,t.jsx)("div",{className:"centered",children:(0,t.jsxs)("div",{className:"modal1",children:[(0,t.jsx)("div",{className:"modal1Header",children:(0,t.jsx)("h5",{className:"heading",children:"Add to playlist"})}),(0,t.jsx)("button",{className:"closeBtn",onClick:()=>e(!1),children:(0,t.jsx)(l.eSQ,{style:{marginBottom:"-3px"}})}),(0,t.jsxs)("div",{className:"modal1Content",children:[(0,t.jsx)("button",{className:"sparkButton",id:"spark1",onClick:r,children:"Add Spark 1 to playlist"}),(0,t.jsx)("button",{className:"sparkButton",id:"spark2",onClick:c,children:"Add spark 2 to playlist"}),(0,t.jsx)("button",{className:"sparkButton",id:"spark3",onClick:i,children:"Add spark 3 to playlist"}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:d,children:["Add ",g," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:m,children:["Add ",x," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:p,children:["Add ",j," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:k,children:["Add ",N," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:h,children:["Add ",C," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:u,children:["Add ",v," to playlist"]}),(0,t.jsxs)("button",{className:"sparkButton",id:"spark3",onClick:S,children:["Add ",w," to playlist"]})]}),(0,t.jsx)("div",{className:"modal1Actions",children:(0,t.jsxs)("div",{className:"actionsContainer",children:[(0,t.jsx)("button",{className:"deleteBtn",onClick:o,children:"Delete"}),(0,t.jsx)("button",{className:"cancelBtn",onClick:()=>e(!1),children:"Cancel"})]})})]})})]})}function u(){let s=p.db,a=(0,k.v0)(),[e,l]=(0,o.useState)({}),[c,i]=(0,o.useState)(""),[u,S]=(0,o.useState)(""),[g,x]=(0,o.useState)([]),[j,N]=(0,o.useState)([]),[C,v]=(0,o.useState)(!1),[w,f]=(0,o.useState)(!1),[y,b]=(0,o.useState)(!1),[I,B]=(0,o.useState)([]),[A,F]=(0,o.useState)(""),[P,D]=(0,o.useState)(""),[E,O]=(0,o.useState)([]),[T,G]=(0,o.useState)([]),[_,H]=(0,o.useState)([]),[L,M]=(0,o.useState)([]),[Q,z]=(0,o.useState)([]),[J,U]=(0,o.useState)([]),[Y,Z]=(0,o.useState)([]),[R,q]=(0,o.useState)([]),[K,V]=(0,o.useState)([]),[W,X]=(0,o.useState)([]),[$,ss]=(0,o.useState)([]),[sa,se]=(0,o.useState)([]),[st,so]=(0,o.useState)([]),[sn,sl]=(0,o.useState)([]),[sr,sc]=(0,o.useState)([]),[si,sd]=(0,o.useState)([]),[sm,sp]=(0,o.useState)([]),[sk,sh]=(0,o.useState)([]),[su,sS]=(0,o.useState)([]),[sg,sx]=(0,o.useState)([]),[sj,sN]=(0,o.useState)([]),[sC,sv]=(0,o.useState)("Spark 4"),[sw,sf]=(0,o.useState)("Spark 5"),[sy,sb]=(0,o.useState)("Spark 6"),[sI,sB]=(0,o.useState)("Spark 7"),[sA,sF]=(0,o.useState)("Spark 8"),[sP,sD]=(0,o.useState)("Spark 9"),[sE,sO]=(0,o.useState)("Spark 10"),[sT,sG]=(0,o.useState)(""),[s_,sH]=(0,o.useState)(null);(0,o.useEffect)(()=>{let s=new URLSearchParams(window.location.hash.slice(1)),a=s.get("access_token");console.log(a),sG(a)},[]),(0,o.useEffect)(()=>{(0,k.Aj)(a,s=>{if(s){let a=s.uid;sH(a),console.log(a)}})},[]);let sL=async()=>{await (0,m.pl)((0,m.JU)(p.db,"users",s_),{spark1:T,spark2:L,spark3:J,spark4:R,spark5:W,spark6:sa,spark7:sn,spark8:si,spark9:sk,spark10:sg,showCustomSpark1:sC,showCustomSpark2:sw,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sP,showCustomSpark7:sE,spark1SongNames:E,spark2SongNames:_,spark3SongNames:Q,spark4SongNames:Y,spark5SongNames:K,spark6SongNames:$,spark7SongNames:st,spark8SongNames:sr,spark9SongNames:sm,spark10SongNames:su})},sM=async()=>{let a=[],t=(0,m.JU)(s,"users",s_),o=await (0,m.QT)(t);o.exists()?(console.log(e),console.log("Document data:",o.data()),G((a=o.data()).spark1),M(a.spark2),U(a.spark3),q(a.spark4),X(a.spark5),se(a.spark6),sl(a.spark7),sd(a.spark8),sh(a.spark9),sx(a.spark10),sv(a.showCustomSpark1),sf(a.showCustomSpark2),sb(a.showCustomSpark3),sB(a.showCustomSpark4),sF(a.showCustomSpark5),sD(a.showCustomSpark6),sO(a.showCustomSpark7),O(a.spark1SongNames),H(a.spark2SongNames),z(a.spark3SongNames),Z(a.spark4SongNames),V(a.spark5SongNames),ss(a.spark6SongNames),so(a.spark7SongNames),sc(a.spark8SongNames),sp(a.spark9SongNames),sS(a.spark10SongNames)):console.log("No such document!")};(0,o.useEffect)(()=>{});let sQ=async s=>{sT||alert("LOG IN TO SPOTIFY FIRST"),N([]),s.preventDefault();let{data:a}=await n.Z.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(sT)},params:{q:u,type:"artist",limit:5}});x(a.artists.items)},sz=async s=>{sM(),console.log(sT),x([]),s.preventDefault();let{data:a}=await n.Z.get("https://api.spotify.com/v1/search",{headers:{Authorization:"Bearer ".concat(sT)},params:{q:u,type:"track",limit:5}});console.log(a),N(a.tracks.items)},sJ=async()=>{B([]);let{data:s}=await n.Z.get("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer ".concat(sT)},params:{limit:20}});B(s.items)},sU=()=>I.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{onClick:sY,id:s.id,children:s.name},s.id)}));async function sY(s){console.log(sj);let a=s.target.id;try{let s=await fetch("https://api.spotify.com/v1/playlists/".concat(a,"/tracks"),{method:"POST",headers:{Authorization:"Bearer ".concat(sT),"Content-Type":"application/json"},body:JSON.stringify({uris:sj})});if(s.ok){let a=await s.json();console.log("Items added to the playlist:",a)}else console.error("Error adding items to the playlist:",s.status)}catch(s){console.error("Error adding items to the playlist:",s)}v(!1)}function sZ(s){f(!0),F(s.target.id),D(s.target.innerHTML),console.log(E)}let sR=async s=>{f(!1),console.log(T),sL()},sq=async s=>{"spark 1"===s.target.id?(console.log("added to spark 1"),G(T.concat(A)),O(E.concat(P)),console.log(T),f(!1)):"spark 2"===s.target.id?(console.log("added to spark 2"),M(L.concat(A)),H(_.concat(P)),console.log(L)):"spark 3"===s.target.id?(console.log("added to spark 3"),U(J.concat(A)),z(Q.concat(P)),console.log(J)):"spark 4"===s.target.id?(console.log("added to spark 4"),q(R.concat(A)),Z(Y.concat(P)),console.log(R)):"spark 5"===s.target.id?(console.log("added to spark 5"),X(W.concat(A)),V(K.concat(P)),console.log(W)):"spark 6"===s.target.id?(console.log("added to spark 6"),se(sa.concat(A)),ss($.concat(P)),console.log(sa)):"spark 7"===s.target.id?(console.log("added to spark 7"),sl(sn.concat(A)),so(st.concat(P)),console.log(sn)):"spark 8"===s.target.id?(console.log("added to spark 8"),sd(si.concat(A)),sc(sr.concat(P)),console.log(si)):"spark 9"===s.target.id?(console.log("added to spark 9"),sh(sk.concat(A)),sp(sm.concat(P)),console.log(sk)):"spark 10"===s.target.id&&(console.log("added to spark 10"),sx(sg.concat(A)),sS(su.concat(P)),console.log(sg))};function sK(){G([]),M([]),U([]),q([]),X([]),se([]),sl([]),sd([]),sh([]),sx([]),O([]),H([]),z([]),Z([]),V([]),ss([]),so([]),sc([]),sp([]),sS([])}return(0,t.jsxs)("div",{children:[sM,(0,t.jsx)("button",{onClick:()=>{sessionStorage.setItem("Token",""),window.open("https://lightify-8cdd2.web.app/"),i(""),window.localStorage.removeItem("token")},children:"LOG OUT"}),sT?(0,t.jsx)("a",{children:"You have linked your Spotify account"}):(0,t.jsx)("a",{onClick:function(){sT||window.open("".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e0b423264c9746428e28129fc08fead9","&redirect_uri=").concat("https://lamplists.org/dashboard","&response_type=").concat("token","&scope=%20playlist-modify-private%20playlist-modify-public"))},children:"Login to spotify"}),(0,t.jsxs)("div",{className:"dashboard",children:[(0,t.jsx)("div",{onClick:function(s){console.log(sT),sM(),sJ(),b(!0)},children:"ADD SPARKS TO PLAYLIST"}),(0,t.jsxs)("form",{onSubmit:sQ,className:"search",children:[(0,t.jsx)("input",{type:"text",onChange:s=>S(s.target.value)}),(0,t.jsx)("button",{type:"submit",children:"search"})]}),(0,t.jsxs)("form",{onSubmit:sz,children:[(0,t.jsx)("input",{type:"text",onChange:s=>S(s.target.value)}),(0,t.jsx)("button",{type:"submit",children:"search"})]}),C&&(0,t.jsx)(r,{userToken:sT,setIsModal1Open:v,onButtonClick:sJ,renderPlaylists:sU,addSpark:sq,clearSparks:sK}),w&&(0,t.jsx)(d,{token:sT,setIsModal2Open:f,showCustomSpark1:sC,showCustomSpark2:sw,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sP,showCustomSpark7:sE,onButtonClick:sJ,renderPlaylists:sU,addSpark:sq,clearSparks:sK,closeModal2:sR,showSparkHandler:function(){!1==sC?sv(s=>!0):!1==sw?sf(!0):!1==sy?sb(!0):!1==sI?sB(!0):!1==sA?sF(!0):!1==sP?sD(!0):!1==sE&&(sO(!0),setShowAddSparkButton(!1))},setShowCustomSpark1:sv,setShowCustomSpark2:sf,setShowCustomSpark3:sb,setShowCustomSpark4:sB,setShowCustomSpark5:sF,setShowCustomSpark6:sD,setShowCustomSpark7:sO,spark1SongNames:E,spark2SongNames:_,spark3SongNames:Q,spark4SongNames:Y,spark5SongNames:K,spark6SongNames:$,spark7SongNames:st,spark8SongNames:sr,spark9SongNames:sm,spark10SongNames:su}),y&&(0,t.jsx)(h,{token:sT,isModal1Open:C,setIsModal4Open:b,addSpark1toPlaylist:function(){sM(),sN(T),b(!1),v(!0),console.log(sj)},addSpark2toPlaylist:function(){sN(L),b(!1),v(!0),console.log(sj)},addSpark3toPlaylist:function(){sN(J),b(!1),v(!0),console.log(sj)},addSpark4toPlaylist:function(){sN(R),b(!1),v(!0),console.log(sj)},addSpark5toPlaylist:function(){sN(W),b(!1),v(!0),console.log(sj)},addSpark6toPlaylist:function(){sN(sa),b(!1),v(!0),console.log(sj)},addSpark7toPlaylist:function(){sN(sn),b(!1),v(!0),console.log(sj)},addSpark8toPlaylist:function(){sN(si),b(!1),v(!0),console.log(sj)},addSpark9toPlaylist:function(){sN(sk),b(!1),v(!0),console.log(sj)},addSpark10toPlaylist:function(){sN(sg),b(!1),v(!0),console.log(sj)},showCustomSpark1:sC,showCustomSpark2:sw,showCustomSpark3:sy,showCustomSpark4:sI,showCustomSpark5:sA,showCustomSpark6:sP,showCustomSpark7:sE}),g.map(s=>(0,t.jsxs)("div",{children:[s.images.length?(0,t.jsx)("img",{width:"100",src:s.images[0].url,alt:""}):(0,t.jsx)("div",{children:"No Image"}),s.name]},s.id)),j.map(s=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{onClick:sZ,id:s.uri,children:[s.name," by ",s.artists[0].name]},s.id)}))]})]})}},390:function(s,a,e){e.d(a,{I8:function(){return c},db:function(){return i}});var t=e(994);e(5073);var o=e(4086),n=e(9584),l=e(3085);let r=(0,t.ZF)({apiKey:"AIzaSyDiGd55TvvYCtcJJhbhDLA2kjH_vphkcdQ",authDomain:"lightify-8cdd2.firebaseapp.com",projectId:"lightify-8cdd2",storageBucket:"lightify-8cdd2.appspot.com",messagingSenderId:"220253245876",appId:"1:220253245876:web:877ae88aa4af646444e2e1",measurementId:"G-4D7V8P207J"}),c=(0,l.v0)(),i=(0,o.ad)(r);(0,n.cF)(r)}}]);