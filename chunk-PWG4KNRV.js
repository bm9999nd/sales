import{A as v,C as s,E as e,F as i,G as y,L as x,N as k,P as l,R as C,S as p,V as w,W as _,Y as m,Z as u,ba as I,c as P,da as F,ea as E,ia as S,l as h,s as f,v as n,w as b}from"./chunk-7Q7TVZLS.js";var O=o=>[o,"IDR","symbol","1.0","id-ID"];function L(o,a){if(o&1&&(e(0,"li")(1,"div",4),y(2,"img",5),i(),e(3,"div",6)(4,"div")(5,"code"),l(6),i(),e(7,"h3"),l(8),i(),e(9,"small"),l(10),i()(),e(11,"div",7)(12,"div",8),l(13),m(14,"currency"),i(),e(15,"div",8),l(16),m(17,"currency"),i(),e(18,"div",8),l(19),m(20,"currency"),i()()()()),o&2){let t=a.$implicit;n(2),k("alt",t.nama),s("src",t.img,f),n(4),p(" # ",t.pack_code," ",t.pcs_code," "),n(2),C(" ",t.nama," "),n(2),C(" ",t.kategori," "),n(2),s("hidden",t.pack_harga==null||t.pack_harga==0||t.pack_harga==""),n(),p(" Pack: ",u(14,15,_(33,O,t.pack_harga))," /",t.pack_unit," "),n(2),s("hidden",t.pcs_harga==null||t.pcs_harga==0||t.pcs_harga==""),n(),p(" Pcs: ",u(17,21,_(35,O,t.pcs_harga))," /",t.pcs_unit," "),n(2),s("hidden",t.sat_harga==null||t.sat_harga==0||t.sat_harga==""),n(),p(" Ecer: ",u(20,27,_(37,O,t.sat_harga))," /",t.sat_unit," ")}}var D=(()=>{let a=class a{constructor(g){this.app=g,this.items=[],this.filtered=[]}ngOnInit(){return P(this,null,function*(){this.items=this.app.items,this.filtered=this.app.items,this.app.itemLoaded.subscribe(()=>{this.items=this.app.items,this.filtered=this.app.items})})}filterList(g){let c=g.target.value.toLowerCase(),M=this.items.filter(d=>d.pack_code?.includes(c)||d.pcs_code?.includes(c)||d.kategori?.toLowerCase().includes(c)||d.nama?.toLowerCase().includes(c));this.filtered=M}tracker(g,r){return r}};a.\u0275fac=function(r){return new(r||a)(b(S))},a.\u0275cmp=h({type:a,selectors:[["app-items"]],standalone:!0,features:[w],decls:5,vars:2,consts:[[1,"ctl-group"],["type","search","placeholder","cari nama/barcode",3,"change"],[1,"list-group"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"grid-1"],["loading","lazy",3,"src","alt"],[1,"grid-2"],[1,"grid-3"],[3,"hidden"]],template:function(r,c){r&1&&(e(0,"div",0)(1,"input",1),x("change",function(d){return c.filterList(d)}),i()(),e(2,"div",2)(3,"ul"),v(4,L,21,39,"li",3),i()()),r&2&&(n(4),s("ngForOf",c.filtered)("ngForTrackBy",c.tracker))},dependencies:[E,I,F],styles:["html[_ngcontent-%COMP%]{overflow:hidden;max-width:100vw;max-height:100vh}body[_ngcontent-%COMP%]{width:-webkit-fill-available;height:-webkit-fill-available}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{background-color:#fff;color:#000;font-family:system-ui}div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{-webkit-user-select:none}*[_ngcontent-%COMP%]:has( > input[_ngcontent-%COMP%]:focus)   label[_ngcontent-%COMP%]{font-weight:bolder}*[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;flex-direction:column}*[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{transition:all .2s ease-in-out}*[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1 1 auto;padding:.5rem;border:0;border-bottom:1px solid silver;background-color:#fff;color:#000}*[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{font-style:italic}*[_ngcontent-%COMP%]:has( > label[_ngcontent-%COMP%],  > input)[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{transition:all 1s ease;outline:1px solid silver;animation:_ngcontent-%COMP%_bg-blink 1.5s ease infinite}@keyframes _ngcontent-%COMP%_bg-blink{0%{outline-color:#0000}50%{outline-color:silver}to{outline-color:#0000}}button[_ngcontent-%COMP%]{padding:.5rem;cursor:pointer}.btn-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}*[_ngcontent-%COMP%]:has( > input[type=radio][_ngcontent-%COMP%],  > input[type=checkbox])[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%]:has( > input[type=radio][_ngcontent-%COMP%],  > input[type=checkbox])[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:#000;color:#fff}*[_ngcontent-%COMP%]:has( > input[type=radio][_ngcontent-%COMP%],  > input[type=checkbox])[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:-webkit-fill-available;padding:.5rem;text-align:center;cursor:pointer;-webkit-user-select:auto;border:1px solid silver;display:flex;justify-content:center;align-items:center}a[_ngcontent-%COMP%]{padding:.5rem;text-decoration:none;border-inline-end:1px solid gainsboro}a[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#dcdcdc}a[_ngcontent-%COMP%]:active, a.active[_ngcontent-%COMP%]{color:#fff;background-color:#000}.d-grid[_ngcontent-%COMP%]{display:grid}.d-flex[_ngcontent-%COMP%]{display:flex}.d-none[_ngcontent-%COMP%]{display:none}.hide[_ngcontent-%COMP%]{transition:opacity 1s ease;opacity:0;z-index:-1}.is-negative[_ngcontent-%COMP%]{color:#dc143c}.is-positive[_ngcontent-%COMP%]{color:green}.modal[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%], .modal.content[_ngcontent-%COMP%]{position:absolute;width:-webkit-fill-available;height:-webkit-fill-available;top:0;left:0}.overlay[_ngcontent-%COMP%]{z-index:1;background-color:#00000080}.modal[_ngcontent-%COMP%]{overflow:hidden}.modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:1.5rem}.modal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{z-index:2;position:absolute;background-color:#fff;border:1px solid silver;border-radius:.5rem;max-width:80vw;max-height:80vh;padding:1rem}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{margin-block:0}.ctl-group[_ngcontent-%COMP%]{margin-bottom:0!important}.list-group[_ngcontent-%COMP%]{overflow:auto;position:absolute;width:-webkit-fill-available;height:-webkit-fill-available}.list-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-inline:0}.list-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-block:.5rem;padding-block:.5rem;border-bottom:1px solid silver;display:flex;grid-auto-flow:column;gap:.5rem}.list-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-width:100px;max-width:100px;min-height:100px;max-height:100px;border:1px solid silver}.list-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .grid-1[_ngcontent-%COMP%]{width:fit-content}"]});let o=a;return o})();export{D as ItemsComponent};
