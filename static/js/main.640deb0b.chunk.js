(this["webpackJsonpreact-table-tutorial"]=this["webpackJsonpreact-table-tutorial"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(8),c=n.n(l),d=(n(15),n(5)),i=n(7),u=n(3),s=n(10),o=(n(16),n(9)),j=n(0),m=function(e){var t=e.contact,n=e.handleEditClick,a=e.handleDeleteClick;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.fullName}),Object(j.jsx)("td",{children:t.address}),Object(j.jsx)("td",{children:t.phoneNumber}),Object(j.jsx)("td",{children:t.email}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),Object(j.jsx)("button",{type:"button",onClick:function(){return a(t.id)},children:"Delete"})]})]})},b=function(e){var t=e.editFormData,n=e.handleEditFormChange,a=e.handleCancelClick;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"Enter a name...",name:"fullName",value:t.fullName,onChange:n})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"Enter an address...",name:"address",value:t.address,onChange:n})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"Enter a phone number...",name:"phoneNumber",value:t.phoneNumber,onChange:n})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"email",required:"required",placeholder:"Enter an email...",name:"email",value:t.email,onChange:n})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"submit",children:"Save"}),Object(j.jsx)("button",{type:"button",onClick:a,children:"Cancel"})]})]})},h=function(){var e=Object(a.useState)(o),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({fullName:"",address:"",phoneNumber:"",email:""}),c=Object(u.a)(l,2),h=c[0],p=c[1],O=Object(a.useState)({fullName:"",address:"",phoneNumber:"",email:""}),x=Object(u.a)(O,2),f=x[0],N=x[1],C=Object(a.useState)(null),y=Object(u.a)(C,2),v=y[0],g=y[1],q=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(i.a)({},h);a[t]=n,p(a)},E=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(i.a)({},f);a[t]=n,N(a)},k=function(e,t){e.preventDefault(),g(t.id);var n={fullName:t.fullName,address:t.address,phoneNumber:t.phoneNumber,email:t.email};N(n)},D=function(){g(null)},w=function(e){var t=Object(d.a)(n),a=n.findIndex((function(t){return t.id===e}));t.splice(a,1),r(t)};return Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:v,fullName:f.fullName,address:f.address,phoneNumber:f.phoneNumber,email:f.email},a=Object(d.a)(n);a[n.findIndex((function(e){return e.id===v}))]=t,r(a),g(null)},children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Address"}),Object(j.jsx)("th",{children:"Phone Number"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e){return Object(j.jsx)(a.Fragment,{children:v===e.id?Object(j.jsx)(b,{editFormData:f,handleEditFormChange:E,handleCancelClick:D}):Object(j.jsx)(m,{contact:e,handleEditClick:k,handleDeleteClick:w})})}))})]})}),Object(j.jsx)("h2",{children:"Add a Contact"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(s.a)(),fullName:h.fullName,address:h.address,phoneNumber:h.phoneNumber,email:h.email},a=[].concat(Object(d.a)(n),[t]);r(a)},children:[Object(j.jsx)("input",{type:"text",name:"fullName",required:"required",placeholder:"Enter a name...",onChange:q}),Object(j.jsx)("input",{type:"text",name:"address",required:"required",placeholder:"Enter an addres...",onChange:q}),Object(j.jsx)("input",{type:"text",name:"phoneNumber",required:"required",placeholder:"Enter a phone number...",onChange:q}),Object(j.jsx)("input",{type:"email",name:"email",required:"required",placeholder:"Enter an email...",onChange:q}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"fullName":"Jenny Chan","address":"3 waterfoot road","phoneNumber":"333-962-7516","email":"jenny.chan@email.com"},{"id":2,"fullName":"Jessica warren","address":"4 tall town","phoneNumber":"011-211-7516","email":"jessica.warren@email.com"},{"id":3,"fullName":"Tony Frank","address":"11 lesly road","phoneNumber":"788-962-7516","email":"tony.frank@email.com"},{"id":4,"fullName":"Jeremy Clark","address":"333 miltown manor","phoneNumber":"011-962-111","email":"jeremy.clark@email.com"},{"id":5,"fullName":"Raymond Edwards","address":"99 blue acres","phoneNumber":"3231-962-7516","email":"raymon.edwards@email.com"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.640deb0b.chunk.js.map