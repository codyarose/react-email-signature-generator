(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(0),o=n.n(l),r=n(91),c=n.n(r),i=n(2),m=n(95),s=n(13),d=n(17);function u(e){var t=document.getElementById(e).innerHTML,n=document.createElement("input"),a=document.getElementsByTagName("body")[0];a.appendChild(n),n.setAttribute("value",t),n.select(),document.execCommand("copy"),a.removeChild(n)}var p=Object(l.createContext)(),b=function(e){var t=e.children,n=Object(l.useState)({control:"templates",template:"template1",collection:[]}),a=Object(d.a)(n,2),r=a[0],c=a[1];return o.a.createElement(p.Provider,{value:{data:r,changeControl:function(e){c(Object(s.a)({},r,{control:e.target.value}))},changeTemplate:function(e){c(Object(s.a)({},r,{template:e.target.value}))},saveToCollection:function(e){c(Object(s.a)({},r,{collection:[].concat(Object(m.a)(r.collection),[e])}))},copyItem:function(e){u(e.id),e.addEventListener("mouseleave",function(){setTimeout(function(){e.dataset.copy="copy"},200)}),e.dataset.copy="copied!",e.style="",e.offsetWidth,e.style.animation="copied 1s forwards"}}},t)},g=function(){return Object(l.useContext)(p)},f=n(33),h=Object(l.createContext)(),E=function(e){var t=e.children,n=Object(l.useState)({portrait:"",logo:"",firstName:"",lastName:"",jobTitle:"",department:"",companyName:"",officePhone:"",mobilePhone:"",websiteUrl:"",emailAddress:"",address:"",socialLinkedin:"",socialFacebook:"",socialTwitter:"",socialInstagram:"",accentColor:"#000",socialColor:"#000"}),a=Object(d.a)(n,2),r=a[0],c=a[1];return o.a.createElement(h.Provider,{value:{data:r,updateInfo:function(e){c(Object(s.a)({},r,Object(f.a)({},e.target.name,e.target.value)))},updateAccentColor:function(e){c(Object(s.a)({},r,{accentColor:e}))},updateSocialColor:function(e){c(Object(s.a)({},r,{socialColor:e}))}}},t)},y=function(){return Object(l.useContext)(h)};function k(){var e=Object(a.a)(["\n\tdisplay: flex;\n\tmargin-bottom: 0.5rem;\n\t& > input {\n\t\tmargin-right: 0.5rem;\n\t}\n"]);return k=function(){return e},e}var v=function(e){var t=e.name,n=e.checked,a=e.onChange,l=e.label;return o.a.createElement(x,null,o.a.createElement("input",{type:"radio",name:t,value:t,checked:n===t,onChange:a,id:t}),o.a.createElement("label",{htmlFor:t},l))},x=i.b.div(k());function C(){var e=Object(a.a)(["\n\tfont-size: 0.875rem;\n\tmargin-bottom: 1.5rem;\n\ttext-align: center;\n"]);return C=function(){return e},e}var w=function(e){var t=e.children;return o.a.createElement(S,null,t)},S=i.b.p(C());function A(){var e=Object(a.a)(["\n\tanimation: flipdown 0.2s ease both;\n"]);return A=function(){return e},e}var j=function(){var e=g(),t=e.data,n=e.changeTemplate;return o.a.createElement(z,null,o.a.createElement(w,null,"Pick a template"),[{label:"Template One",name:"template1"},{label:"Template Two",name:"template2"}].map(function(e){return o.a.createElement(v,{label:e.label,name:e.name,checked:t.template,onChange:n,key:e.name})}))},z=i.b.form(A());function P(){var e=Object(a.a)(["\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0.5rem;\n\ttransition: all 0.2s ease-in-out;\n\tpointer-events: none;\n\topacity: 0.5;\n"]);return P=function(){return e},e}function O(){var e=Object(a.a)(["\n\twidth: 100%;\n\tfont-family: 'Roboto Mono', monospace;\n\theight: 30px;\n\tpadding: 0.5rem 0 0.5rem 0.5rem;\n\tmargin-bottom: 3rem;\n\tfont-size: 1.25rem;\n\tbackground: transparent;\n\tcolor: #e8e8e8;\n\tborder: none;\n\tborder-bottom: 2px solid #e8e8e8;\n\tbox-shadow: none;\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:focus {\n\t\toutline: none;\n\t}\n\t&:focus + label,\n\t&:valid + label {\n\t\ttop: -0.75rem;\n\t\ttransform: scale(0.8);\n\t\tleft: 0;\n\t}\n"]);return O=function(){return e},e}function F(){var e=Object(a.a)(["\n\tposition: relative;\n"]);return F=function(){return e},e}var T=function(e){var t=e.value,n=e.onBlur,a=e.name,l=e.label;return o.a.createElement(L,null,o.a.createElement(I,{type:"text",required:!0,defaultValue:t,onBlur:n,name:a,key:a}),o.a.createElement(N,{htmlFor:a},l))},L=i.b.div(F()),I=i.b.input(O()),N=i.b.label(P());function W(){var e=Object(a.a)(["\n\tposition: relative;\n\toverflow: hidden;\n\topacity: 1;\n\ttransition: all 0.3s ease-in-out;\n\ttransform: translate(0, 0);\n\tpadding-top: 1rem;\n\tz-index: 2;\n\tmax-height: 1000px;\n"]);return W=function(){return e},e}function U(){var e=Object(a.a)(["\n\tdisplay: block;\n\tmargin: 0;\n\tcursor: pointer;\n"]);return U=function(){return e},e}function M(){var e=Object(a.a)(["\n\tposition: absolute;\n\tmargin-top: 12px;\n\tright: 0;\n\t&::before,\n\t&::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: #fff;\n\t\twidth: 2px;\n\t\theight: 7px;\n\t\ttransition: transform 0.1s ease-out;\n\t}\n\t&::before {\n\t\ttransform: translate(-100%, 0) rotate(45deg);\n\t}\n\t&::after {\n\t\ttransform: translate(100%, 0) rotate(-45deg);\n\t}\n"]);return M=function(){return e},e}function B(){var e=Object(a.a)(["\n\tposition: absolute;\n\tcursor: pointer;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1;\n\topacity: 0;\n\tmargin: 0;\n\t&:checked {\n\t\t& ~ section {\n\t\t\tmargin-top: 0;\n\t\t\tmax-height: 0;\n\t\t\topacity: 0;\n\t\t\ttransform: translate(0, 50%);\n\t\t}\n\t\t& ~ span {\n\t\t\t&::before {\n\t\t\t\ttransform: translate(100%, 0) rotate(45deg);\n\t\t\t}\n\t\t\t&::after {\n\t\t\t\ttransform: translate(-100%, 0) rotate(-45deg);\n\t\t\t}\n\t\t}\n\t}\n"]);return B=function(){return e},e}function D(){var e=Object(a.a)(["\n\twidth: 100%;\n\tposition: relative;\n\tmargin-bottom: 1.5rem;\n"]);return D=function(){return e},e}var H=function(e){var t=e.title,n=e.children;return o.a.createElement(R,null,o.a.createElement(J,{type:"checkbox",defaultChecked:!0}),o.a.createElement(Y,null),o.a.createElement(X,null,t),o.a.createElement(_,null,n))},R=i.b.article(D()),J=i.b.input(B()),Y=i.b.span(M()),X=i.b.h3(U()),_=i.b.section(W()),q={default:[{label:"Portrait URL",name:"portrait"},{label:"Logo URL",name:"logo"},{label:"First name",name:"firstName"},{label:"Last name",name:"lastName"},{label:"Job title",name:"jobTitle"},{label:"Department",name:"department"},{label:"Company name",name:"companyName"},{label:"Website URL",name:"websiteUrl"}],contact:[{label:"Office phone",name:"officePhone"},{label:"Mobile phone",name:"mobilePhone"},{label:"Email address",name:"emailAddress"},{label:"Address",name:"address"}],social:[{label:"Facebook",name:"socialFacebook"},{label:"Twitter",name:"socialTwitter"},{label:"LinkedIn",name:"socialLinkedin"},{label:"Instagram",name:"socialInstagram"}]};function G(){var e=Object(a.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tanimation: flipdown 0.2s ease both;\n"]);return G=function(){return e},e}var V=function(){var e=y(),t=e.data,n=e.updateInfo;return o.a.createElement(K,null,o.a.createElement(w,null,"Enter the info you'd like to be displayed in your signature"),q.default.map(function(e){return o.a.createElement(T,{label:e.label,name:e.name,value:t[e.name],onBlur:n,key:e.name})}),o.a.createElement(H,{title:"Contact Info"},q.contact.map(function(e){return o.a.createElement(T,{label:e.label,name:e.name,value:t[e.name],onBlur:n,key:e.name})})),o.a.createElement(H,{title:"Social Media"},q.social.map(function(e){return o.a.createElement(T,{label:e.label,name:e.name,value:t[e.name],onBlur:n,key:e.name})})))},K=i.b.div(G()),Q=n(94);function Z(){var e=Object(a.a)(["\n\tposition: fixed;\n\tz-index: 2;\n"]);return Z=function(){return e},e}function $(){var e=Object(a.a)(["\n\tpadding: 0.5rem 0;\n\tz-index: 2;\n\topacity: ",";\n\tvisibility: ",";\n\ttransition: all 0.2s ease-in-out;\n\tmax-height: 0;\n\t","\n"]);return $=function(){return e},e}function ee(){var e=Object(a.a)(["\n\tpointer-events: none;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 0.75rem;\n\twidth: 100%;\n\theight: 2rem;\n\tborder-radius: 2px;\n\tbackground: ",";\n"]);return ee=function(){return e},e}function te(){var e=Object(a.a)(["\n\twidth: 100%;\n\tmax-width: 5rem;\n\tpadding: 5px;\n\tmargin-top: 1rem;\n\tbackground: #fff;\n\tborder-radius: 1px;\n\tbox-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);\n\tcursor: pointer;\n"]);return te=function(){return e},e}function ne(){var e=Object(a.a)(["\n\tposition: relative;\n\tmargin-bottom: 1rem;\n"]);return ne=function(){return e},e}var ae=function(e){var t=e.title,n=e.onChange,a=e.currentColor,r=Object(l.useState)(!1),c=Object(d.a)(r,2),i=c[0],m=c[1];return o.a.createElement(le,null,t&&o.a.createElement("label",{htmlFor:t},t),o.a.createElement(oe,{onClick:function(){return m(!i)}},o.a.createElement(re,{setColor:a},i&&"close")),o.a.createElement(ce,{show:i},o.a.createElement(ie,{onClick:function(){return m(!1)}}),o.a.createElement(Q.ChromePicker,{color:a,onChange:function(e){return n(e.hex)}})))},le=i.b.div(ne()),oe=i.b.div(te()),re=i.b.div(ee(),function(e){return e.setColor}),ce=i.b.div($(),function(e){return e.show?"1":"0"},function(e){return e.show?"visible":"hidden"},function(e){return e.show&&"\n\t\tmax-height: 1000px;\n\t"}),ie=i.b.div(Z());function me(){var e=Object(a.a)(["\n\tanimation: flipdown 0.2s ease both;\n"]);return me=function(){return e},e}var se=function(){var e=y(),t=e.updateAccentColor,n=e.updateSocialColor,a=e.data;return o.a.createElement(de,null,o.a.createElement(w,null,"Use the color pickers to match your branding"),o.a.createElement(ae,{title:"Accent Color",onChange:t,currentColor:a.accentColor}),o.a.createElement(ae,{title:"Social Icons Color",onChange:n,currentColor:a.socialColor}))},de=i.b.form(me());function ue(){var e=Object(a.a)(["\n\toutline: none;\n\tborder: 1px solid transparent;\n\tbackground-color: ",";\n\tcolor: ",";\n\tfont-family: inherit;\n\tpadding: 0.5rem 1rem;\n\tmargin-bottom: 1rem;\n\tcursor: pointer;\n\ttransition: color 0.1s ease-out, border-color 0.1s ease-out,\n\t\tbackground-color 0.1s ease-out;\n\t&:hover {\n\t\tbackground-color: #696284;\n\t\t","\n\t}\n\t&:active {\n\t\tbackground-color: #504a65;\n\t}\n"]);return ue=function(){return e},e}var pe=function(e){var t=e.onClick,n=e.children;return o.a.createElement(ge,{onClick:t},n)},be=function(e){var t=e.onClick,n=e.children;return o.a.createElement(ge,{secondary:!0,onClick:t},n)},ge=i.b.button(ue(),function(e){return e.secondary?"#fff":"#504a65"},function(e){return e.secondary?"#504a65":"#fff"},function(e){return e.secondary?"color: #fff":null});function fe(){var e=Object(a.a)(["\n\tposition: relative;\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\tbackground-color: #fff;\n\tpadding: 1rem;\n\tmargin-bottom: 0.5rem;\n\tborder-radius: 5px;\n\toverflow: hidden;\n\t& > * {\n\t\ttext-align: left;\n\t\ttransform: scale(.75);\n\t}\n\t&::before {\n\t\tposition: absolute;\n\t\tcontent: attr(data-copy);\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #504a65;\n\t\tfont-size: 2rem;\n\t\tfont-family: 'Roboto Mono', monospace;\n\t\tbackground-color: rgba(255, 255, 255, 0.75);\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s ease-out;\n\t\tpointer-events: none;\n\t\tz-index: 1;\n\t}\n\t&:hover::before {\n\t\topacity: 1;\n\t}\n\t& + textarea {\n\t\topacity: 0;\n\t\theight: 0;\n\t}\n\t@keyframes copied {\n\t\t0% {\n\t\t\tbox-shadow: 0 0 10px #fff;\n\t\t}\n\t\t100% {\n\t\t\tbox-shadow: 0 0 0 transparent;\n\t\t}\n\t}\n"]);return fe=function(){return e},e}function he(){var e=Object(a.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tanimation: flipdown 0.2s ease both;\n"]);return he=function(){return e},e}var Ee=function(){var e=g(),t=e.data,n=e.saveToCollection,a=e.copyItem;return o.a.createElement(l.Fragment,null,o.a.createElement(w,null,"You can add multiple versions of the signature you've created to the collection below"),o.a.createElement(be,{secondary:!0,onClick:function(){return n(document.getElementById("signatureMarkup").innerHTML)}},"Add current signature"),o.a.createElement(ye,null,t.collection.length<1?o.a.createElement("span",null,"you haven't added any items yet!"):t.collection.map(function(e,t){return o.a.createElement(ke,{id:"collectionItem".concat(t),onClick:function(e){return a(e.currentTarget)},dangerouslySetInnerHTML:{__html:e},"data-copy":"copy html",key:t})})))},ye=i.b.div(he()),ke=i.b.button(fe()),ve=function(){var e,t=g().data;return"templates"===t.control?e=o.a.createElement(j,null):"info"===t.control?e=o.a.createElement(V,null):"styles"===t.control?e=o.a.createElement(se,null):"collection"===t.control&&(e=o.a.createElement(Ee,null)),e};function xe(){var e=Object(a.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 1rem;\n\t& > div {\n\t\tposition: relative;\n\t\tflex: 1;\n\t\ttext-align: center;\n\t}\n\tinput[type='radio'] {\n\t\tposition: absolute;\n\t\ttop: auto;\n\t\toverflow: hidden;\n\t\tclip: rect(1px 1px 1px 1px);\n\t\tclip: rect(1px, 1px, 1px, 1px);\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\twhite-space: nowrap;\n\t\t&:checked + label::before {\n\t\t\ttransform: translateY(0);\n\t\t\topacity: 1;\n\t\t\ttransition: transform 0.1s ease-out;\n\t\t}\n\t}\n\tlabel {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tpadding: 0.5rem;\n\t\ttransition: background-color 0.1s ease-in-out;\n\t\tuser-select: none;\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: rgba(232, 232, 232, 0.1);\n\t\t}\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\t\t\ttransform: translateY(300%);\n\t\t\twidth: 100%;\n\t\t\theight: 2px;\n\t\t\tbackground-color: #e8e8e8;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity 0.2s ease-out, transform 0.2s ease-out;\n\t\t}\n\t}\n"]);return xe=function(){return e},e}function Ce(){var e=Object(a.a)(["\n\tgrid-area: form;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 2rem 2.5rem 2rem 2rem;\n\tcolor: #e8e8e8;\n\tbackground-color: #504a65;\n\toverflow-y: scroll;\n\tscrollbar-width: none;\n\t-ms-overflow-style: none;\n\t&::-webkit-scrollbar {\n\t\twidth: 0;\n\t\theight: 0;\n\t}\n"]);return Ce=function(){return e},e}var we=function(){var e=g(),t=e.data,n=e.changeControl;return o.a.createElement(Se,null,o.a.createElement(Ae,null,["templates","info","styles","collection"].map(function(e){return o.a.createElement(v,{label:e,name:e,checked:t.control,onChange:n,key:e})})),o.a.createElement(ve,null))},Se=i.b.article(Ce()),Ae=i.b.div(xe());function je(){var e=Object(a.a)(["\n\tmargin-bottom: 8rem;\n\ttext-align: center;\n\tfont-size: 14px;\n\th1 {\n\t\tfont-size: 45px;\n\t\tmargin: 1rem 0 0;\n\t}\n"]);return je=function(){return e},e}var ze=function(){return o.a.createElement(Pe,null,o.a.createElement("h1",null,"React Signature Generator"),o.a.createElement("p",null,"Use the panel on the left to customize your signature, then click the button below to copy the HTML"))},Pe=i.b.div(je()),Oe=function(){var e=y().data;return o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalAlign:"top"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("img",{width:"130",src:e.portrait?e.portrait:"https://api.adorable.io/avatars/face/eyes1/nose5/mouth6/504A65",alt:"Portrait",role:"presentation",style:{maxWidth:"130px",display:"block"}}))),e.logo&&o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{height:"24"})),o.a.createElement("tr",null,o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("img",{width:"130",src:e.logo?e.logo:"https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-3.png",alt:"Logo",role:"presentation",style:{maxWidth:"130px",display:"block"}})))),o.a.createElement("tr",null,o.a.createElement("td",{height:"24"})),(e.socialFacebook||e.socialInstagram||e.socialLinkedin||e.socialTwitter)&&o.a.createElement("tr",null,o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",display:"inline-block"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{textAlign:"center"}},e.socialFacebook&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialFacebook),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon.png",alt:"facebook",color:e.socialColor,style:{backgroundColor:e.socialAnchor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialTwitter&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialTwitter),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon.png",alt:"twitter",color:e.socialColor,style:{backgroundColor:e.socialAnchor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialLinkedin&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialLinkedin),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon.png",alt:"linkedin",color:e.socialColor,style:{backgroundColor:e.socialAnchor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialInstagram&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialInstagram),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon.png",alt:"instagram",color:e.socialColor,style:{backgroundColor:e.socialAnchor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})))))))))),o.a.createElement("td",{width:"46"}),o.a.createElement("td",{style:{padding:"0px",verticalAlign:"middle"}},o.a.createElement("h3",{color:"#000000",style:{margin:"0px",fontSize:"18px",color:"rgb(0, 0, 0)"}},o.a.createElement("span",null,e.firstName?e.firstName:"John"),o.a.createElement("span",null,"\xa0"),o.a.createElement("span",null,e.lastName?e.lastName:"Smith")),e.jobTitle&&o.a.createElement("p",{color:"#000000",fontSize:"medium",style:{margin:"0px",color:"rgb(0, 0, 0)",fontSize:"14px",lineHeight:"22px"}},o.a.createElement("span",null,e.jobTitle)),(e.department||e.companyName)&&o.a.createElement("p",{color:"#000000",fontSize:"medium",style:{margin:"0px",fontWeight:"500",color:"rgb(0, 0, 0)",fontSize:"14px",lineHeight:"22px"}},o.a.createElement("span",null,e.department),e.department&&e.companyName&&o.a.createElement("span",null,"\xa0|\xa0"),o.a.createElement("span",null,e.companyName)),o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",width:"100%"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{height:"24"})),o.a.createElement("tr",null,o.a.createElement("td",{height:"1",color:e.accentColor,direction:"horizontal",style:{width:"100%",borderBottom:"1px solid ".concat(e.accentColor),borderLeft:"none",display:"block"}})),o.a.createElement("tr",null,o.a.createElement("td",{height:"16"})))),(e.officePhone||e.mobilePhone||e.emailAddress||e.websiteUrl||e.address)&&o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,(e.officePhone||e.mobilePhone)&&o.a.createElement("tr",{height:"25",style:{verticalAlign:"middle"}},o.a.createElement("td",{width:"30",style:{verticalAlign:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalAlign:"bottom"}},o.a.createElement("span",{color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor,width:"11px"}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon.png",color:e.accentColor,alt:"Phone icon",style:{width:"12px",display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px",color:"rgb(0, 0, 0)"}},o.a.createElement("a",{href:"tel:".concat(e.officePhone),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.officePhone)),e.officePhone&&e.mobilePhone&&o.a.createElement("span",null,"\xa0|\xa0"),o.a.createElement("a",{href:"tel:".concat(e.mobilePhone),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.mobilePhone)))),e.emailAddress&&o.a.createElement("tr",{height:"25",style:{verticalAlign:"middle"}},o.a.createElement("td",{width:"30",style:{verticalAlign:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalAlign:"bottom"}},o.a.createElement("span",{color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor,width:"11px"}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon.png",color:e.accentColor,alt:"Email icon",style:{width:"12px",display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("a",{href:"mailto:".concat(e.emailAddress),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.emailAddress)))),e.websiteUrl&&o.a.createElement("tr",{height:"25",style:{verticalAlign:"middle"}},o.a.createElement("td",{width:"30",style:{verticalAlign:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalAlign:"bottom"}},o.a.createElement("span",{color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor,width:"11px"}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon.png",color:e.accentColor,alt:"Website URL icon",style:{width:"12px",display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("a",{href:"https://".concat(e.websiteUrl),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.websiteUrl)))),e.address&&o.a.createElement("tr",{height:"25",style:{verticalAlign:"middle"}},o.a.createElement("td",{width:"30",style:{verticalAlign:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalAlign:"bottom"}},o.a.createElement("span",{color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor,width:"11px"}},o.a.createElement("img",{src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon.png",color:e.accentColor,alt:"Address icon",style:{width:"12px",display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("span",{color:"#000000",style:{fontSize:"12px",color:"rgb(0, 0, 0)"}},o.a.createElement("span",null,e.address)))))),o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{height:"16"})))),o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalAlign:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{height:"24"}))))))))},Fe=function(){var e=y().data;return o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",minWidth:"450px"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement("img",{width:"130",src:e.portrait?e.portrait:"https://api.adorable.io/avatars/face/eyes1/nose5/mouth6/504A65",alt:"Potrait",role:"presentation",style:{maxWidth:"130px",display:"inline-block"}}))),o.a.createElement("tr",null,o.a.createElement("td",{height:"10"})),o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("td",null,o.a.createElement("h3",{color:"#000000",style:{margin:"0px",fontSize:"18px",color:"rgb(0, 0, 0)"}},o.a.createElement("span",null,e.firstName?e.firstName:"John"),o.a.createElement("span",null,"\xa0"),o.a.createElement("span",null,e.lastName?e.lastName:"Smith")),e.jobTitle&&o.a.createElement("p",{color:"#000000",fontSize:"medium",style:{margin:"0px",color:"rgb(0, 0, 0)",fontSize:"14px",lineHeight:"22px"}},o.a.createElement("span",null,e.jobTitle)),(e.department||e.companyName)&&o.a.createElement("p",{color:"#000000",fontSize:"medium",style:{margin:"0px",fontWeight:"500",color:"rgb(0, 0, 0)",fontSize:"14px",lineHeight:"22px"}},o.a.createElement("span",null,e.department),e.department&&e.companyName&&o.a.createElement("span",null,"\xa0|\xa0"),o.a.createElement("span",null,e.companyName)))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",width:"100%"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{height:"30"})),o.a.createElement("tr",null,o.a.createElement("td",{height:"1",color:e.accentColor,direction:"horizontal",style:{width:"100%",borderBottom:"1px solid ".concat(e.accentColor),borderLeft:"none",display:"block"}})),o.a.createElement("tr",null,o.a.createElement("td",{height:"30"})))),o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",width:"100%"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{verticalSpacing:"middle"}},o.a.createElement("td",null,o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,(e.officePhone||e.mobilePhone)&&o.a.createElement("tr",{height:"25",style:{verticalSpacing:"middle"}},o.a.createElement("td",{width:"30",style:{verticalSpacing:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalSpacing:"bottom"}},o.a.createElement("span",{width:"11",color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor}},o.a.createElement("img",{width:"12",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png",color:e.accentColor,alt:"Phone icon",style:{display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px",color:"rgb(0, 0, 0)"}},o.a.createElement("a",{href:"tel:".concat(e.officePhone),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.officePhone))," ","|"," ",o.a.createElement("a",{href:"tel:".concat(e.mobilePhone),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.mobilePhone)))),e.emailAddress&&o.a.createElement("tr",{height:"25",style:{verticalSpacing:"middle"}},o.a.createElement("td",{width:"30",style:{verticalSpacing:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalSpacing:"bottom"}},o.a.createElement("span",{width:"11",color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor}},o.a.createElement("img",{width:"12",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png",color:e.accentColor,alt:"Email icon",style:{display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("a",{href:"mailto:".concat(e.emailAddress),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.emailAddress)))),e.websiteUrl&&o.a.createElement("tr",{height:"25",style:{verticalSpacing:"middle"}},o.a.createElement("td",{width:"30",style:{verticalSpacing:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalSpacing:"bottom"}},o.a.createElement("span",{width:"11",color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor}},o.a.createElement("img",{width:"12",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png",color:e.accentColor,alt:"Website URL icon",style:{display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("a",{href:"https://".concat(e.websiteUrl),color:"#000000",style:{textDecoration:"none",color:"rgb(0, 0, 0)",fontSize:"12px"}},o.a.createElement("span",null,e.websiteUrl)))),e.address&&o.a.createElement("tr",{height:"25",style:{verticalSpacing:"middle"}},o.a.createElement("td",{width:"30",style:{verticalSpacing:"middle"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{verticalSpacing:"bottom"}},o.a.createElement("span",{width:"11",color:e.accentColor,style:{display:"block",backgroundColor:e.accentColor}},o.a.createElement("img",{width:"12",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png",color:e.accentColor,alt:"Address icon",style:{display:"block",backgroundColor:e.accentColor}}))))))),o.a.createElement("td",{style:{padding:"0px"}},o.a.createElement("span",{color:"#000000",style:{fontSize:"12px",color:"rgb(0, 0, 0)"}},o.a.createElement("span",null,e.address))))))),o.a.createElement("td",{width:"15"}),o.a.createElement("td",{style:{textAlign:"right"}},o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",width:"100%"}},o.a.createElement("tbody",null,e.logo&&o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{width:"130",src:e.logo?e.logo:"https://pngimage.net/wp-content/uploads/2018/06/logo-placeholder-png-3.png",alt:"Logo",role:"presentation",style:{maxWidth:"130px",display:"inline-block"}}))),o.a.createElement("tr",null,o.a.createElement("td",{height:"10"}))),(e.socialFacebook||e.socialInstagram||e.socialLinkedin||e.socialTwitter)&&o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",display:"inline-block"}},o.a.createElement("tbody",null,o.a.createElement("tr",{style:{textAlign:"right"}},e.socialFacebook&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialFacebook),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{height:"24",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png",alt:"facebook",color:e.socialColor,style:{backgroundColor:e.socialColor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialTwitter&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialTwitter),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{height:"24",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png",alt:"twitter",color:e.socialColor,style:{backgroundColor:e.socialColor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialLinkedin&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialLinkedin),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{height:"24",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png",alt:"linkedin",color:e.socialColor,style:{backgroundColor:e.socialColor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"})),e.socialInstagram&&o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,o.a.createElement("a",{href:"https://".concat(e.socialInstagram),color:e.socialColor,style:{display:"inline-block",padding:"0px",backgroundColor:e.socialColor}},o.a.createElement("img",{height:"24",src:"https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png",alt:"instagram",color:e.socialColor,style:{backgroundColor:e.socialColor,maxWidth:"135px",display:"block"}}))),o.a.createElement("td",{width:"5"}))))))))))))),o.a.createElement("table",{cellPadding:"0",cellSpacing:"0",style:{verticalSpacing:"-webkit-baseline-middle",fontSize:"medium",fontFamily:"Arial",width:"100%"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{height:"30"})),o.a.createElement("tr",null,o.a.createElement("td",{height:"1",color:e.accentColor,direction:"horizontal",style:{width:"100%",borderBottom:"1px solid ".concat(e.accentColor),borderLeft:"none",display:"block"}})),o.a.createElement("tr",null,o.a.createElement("td",{height:"30"}))))))))};function Te(){var e=Object(a.a)(["\n\tmargin-bottom: 3rem;\n"]);return Te=function(){return e},e}var Le=function(){var e=g().data;return o.a.createElement(l.Fragment,null,o.a.createElement(Ie,{id:"signatureMarkup"},function(){switch(e.template){case"template1":return o.a.createElement(Oe,null);case"template2":return o.a.createElement(Fe,null);default:return o.a.createElement(Oe,null)}}()),o.a.createElement(pe,{onClick:function(){return u("signatureMarkup")}},"Copy HTML"))},Ie=i.b.article(Te());function Ne(){var e=Object(a.a)(["\n\tpadding: 1rem 3rem;\n\tgrid-area: canvas;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]);return Ne=function(){return e},e}var We=function(){return o.a.createElement(Ue,null,o.a.createElement(ze,null),o.a.createElement(Le,null))},Ue=i.b.article(Ne());function Me(){var e=Object(a.a)(["\n\twidth: 100%;\n\theight: 100vh;\n\tbackground-color: #fff;\n\tmargin: 0 auto;\n\tdisplay: grid;\n\tgrid-template-columns: 415px 3fr;\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas:\n\t\t'form canvas'\n"]);return Me=function(){return e},e}var Be=function(){return o.a.createElement(De,null,o.a.createElement(E,null,o.a.createElement(b,null,o.a.createElement(we,null),o.a.createElement(We,null))))},De=i.b.main(Me());function He(){var e=Object(a.a)(["\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t\tfont-family: 'Roboto Mono', monospace;\n\t\t}\n\t\t@keyframes flipdown {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t\ttransform-origin: top center;\n\t\t\t\ttransform: rotateX(-90deg);\n\t\t\t}\n\t\t\t90% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\ttransform-origin: top center;\n\t\t\t\ttransform: rotateX(0deg);\n\t\t\t}\n\t\t}\n\t"]);return He=function(){return e},e}c.a.render(o.a.createElement(function(){var e=Object(i.a)(He());return o.a.createElement(o.a.Fragment,null,o.a.createElement(e,null),o.a.createElement(Be,null))},null),document.getElementById("root"))},98:function(e,t,n){e.exports=n(269)}},[[98,1,2]]]);
//# sourceMappingURL=main.c9cbfa4c.chunk.js.map