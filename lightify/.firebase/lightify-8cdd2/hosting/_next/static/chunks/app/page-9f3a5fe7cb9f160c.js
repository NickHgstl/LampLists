(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8423:function(e,s,n){Promise.resolve().then(n.bind(n,3451))},3451:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return u}});var t=n(7437),r=n(4033),o=n(2265);n(9072);var a=n(390),c=n(3085);function u(){let e=new c.hJ,s=(0,r.useRouter)();return(0,o.useEffect)(()=>{sessionStorage.getItem("Token")&&s.push("/dashboard")}),(0,t.jsx)("div",{className:"Home",children:(0,t.jsxs)("header",{className:"title_container",children:[(0,t.jsx)("h1",{className:"title",children:"LampLists"}),(0,t.jsx)("button",{onClick:n=>{n.preventDefault(),(0,c.rh)(a.I8,e).then(e=>{console.log(e.user),sessionStorage.setItem("Token",e.user.accessToken),s.push("/dashboard")}).catch(e=>{alert(e.message)})},children:"SIGN UP WITH GOOGLE"})]})})}},4033:function(e,s,n){e.exports=n(8165)}},function(e){e.O(0,[929,358,315,598,72,971,596,744],function(){return e(e.s=8423)}),_N_E=e.O()}]);