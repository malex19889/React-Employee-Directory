(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),r=n.n(a),c=n(12),o=n.n(c),l=(n(23),n(24),n(13)),i=n(14),u=n(17),m=n(16);var d=function(e){return Object(s.jsx)("ul",{className:"list-unstyled row",children:e.results.map((function(e,t){return Object(s.jsxs)("li",{className:"media shadow-sm p-3 mb-5 bg-white rounded border border-secondary col-md-6",children:[Object(s.jsx)("img",{src:e.picture.large,className:"mr-3",alt:e.name.first}),Object(s.jsxs)("div",{className:"media-body ",children:[Object(s.jsx)("h5",{className:"mt-0 mb-1",children:e.name.first+" "+e.name.last}),Object(s.jsxs)("p",{children:["Phone: ",e.phone]}),Object(s.jsxs)("p",{children:["email: ",e.email]}),Object(s.jsxs)("p",{children:["location: ",e.location.city,", ",e.location.state,", (",e.location.country,")"]})]})]},t)}))})};var h=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(s.jsx)("h1",{className:"navbar-brand",children:"Directory"}),Object(s.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(s.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search by name",name:"search",list:"employees",onChange:e.handleInputChange,"aria-label":"Search"}),Object(s.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})})},j=n(15),b=n.n(j),p=function(){return b()({method:"get",url:"https://randomuser.me/api/?results=120",responseType:"json"})},y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={sort:"",employees:[],sortedEmployees:[]},e.employeeData=function(){p().then((function(t){return e.setState({employees:t.data.results,sortedEmployees:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=e.state.employees,s=t.target.value;if(""===s)e.setState({sortedEmployees:n});else{var a=n.filter((function(e){return e.name.first.toLowerCase().includes(s.toLowerCase())}));e.setState({sortedEmployees:a})}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.employeeData()}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(h,{handleInputChange:this.handleInputChange}),Object(s.jsx)(d,{results:this.state.sortedEmployees})]})}}]),n}(a.Component);var f=function(){return Object(s.jsx)(y,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};n(42);o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.ff5d85c6.chunk.js.map