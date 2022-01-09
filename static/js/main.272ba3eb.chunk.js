(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",button:"ContactList_button__1RuFy"}},19:function(t,e,n){},2:function(t,e,n){t.exports={formTitle:"Form_formTitle__1O0NU",form:"Form_form__cvyS-",label:"Form_label__1eFym",input:"Form_input__28m9x",button:"Form_button__2GsM6"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(12),c=n.n(a),s=n(1),r=n.n(s),o=(n(19),n(14)),i=n(4),l=n(5),u=n(8),m=n(7),h=(n(20),n(13)),b=n(6),d=n.n(b),p=n(2),j=n.n(p),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.inputId=d.a.generate(),t.handleInputChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({contacts:[],name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:j.a.formTitle,children:"Phonebook"}),Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{className:j.a.label,htmlFor:this.inputId,children:["Name",Object(f.jsx)("input",{className:j.a.input,id:this.inputId,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(f.jsxs)("label",{className:j.a.label,htmlFor:this.inputId,children:["Number",Object(f.jsx)("input",{className:j.a.input,id:this.inputId,value:this.state.number,onChange:this.handleInputChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(f.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})]})}}]),n}(s.Component),_=O,g=n(11),x=n.n(g),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{children:[t.name,": ",t.number,Object(f.jsx)("button",{className:x.a.button,onClick:function(){return n(t.id)},children:"Delete contact"})]},t.id)}))})},C=n(9),y=n.n(C),F=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:y.a.wrapper,children:Object(f.jsxs)("label",{className:y.a.label,children:["Find contacts by name:",Object(f.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})})},N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:"",filter:""},t.addContact=function(e,n){var a={id:d.a.generate(),name:e,number:n};t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase())?alert("".concat(e," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[a])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);this.setState({contacts:e})}},{key:"render",value:function(){var t=this.state.filter.toLocaleLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_,{onSubmit:this.addContact}),this.state.contacts.length>0&&Object(f.jsx)(v,{contacts:e,onDeleteContact:this.deleteContact}),this.state.contacts.length>1&&Object(f.jsx)(F,{value:this.state.filter,onChange:this.changeFilter})]})}}]),n}(s.Component),S=N;c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.querySelector("#root"))},9:function(t,e,n){t.exports={input:"Filter_input__2DoVp",label:"Filter_label__3DcZT",wrapper:"Filter_wrapper__IqOjQ"}}},[[30,1,2]]]);
//# sourceMappingURL=main.272ba3eb.chunk.js.map