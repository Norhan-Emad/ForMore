"use strict";(self.webpackChunkForMore=self.webpackChunkForMore||[]).push([[770],{7770:(h,s,o)=>{o.r(s),o.d(s,{BrandComponent:()=>u});var c=o(6814),a=o(310),t=o(4769),d=o(9862);let l=(()=>{class e{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com/api/v1/"}showBrand(){return this._HttpClient.get(this.baseUrl+"brands")}static#t=this.\u0275fac=function(i){return new(i||e)(t.LFG(d.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function m(e,r){if(1&e&&(t.TgZ(0,"div",6)(1,"div",7)(2,"header"),t._UZ(3,"img",8),t.TgZ(4,"div",9)(5,"h4",10),t._uU(6),t.ALo(7,"cuttext"),t.qZA(),t.TgZ(8,"p",11),t._uU(9,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque officiis perferendis soluta nobis esse distinctio nostrum at amet unde fugiat."),t.qZA()()()()()),2&e){const n=r.$implicit;t.xp6(3),t.Q6J("src",n.image,t.LSH),t.xp6(3),t.Oqu(t.xi3(7,2,n.name,2))}}function p(e,r){if(1&e&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div",4),t.YNc(4,m,10,5,"div",5),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.BrandObject)}}let u=(()=>{class e{constructor(n){this._BrandService=n,this.BrandObject=[]}ngOnInit(){this._BrandService.showBrand().subscribe({next:n=>{console.log(n.data),this.BrandObject=n.data},error:n=>{console.log(n)}})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(l))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-brand"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","py-5",4,"ngIf"],[1,"py-5"],[1,"category"],[1,"container-fluid"],[1,"row"],["class","col-lg-3 col-md-4 col-sm-6 py-3",4,"ngFor","ngForOf"],[1,"col-lg-3","col-md-4","col-sm-6","py-3"],[1,"card","text-start"],["alt","image","width","100%","height","300px",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","colorPer"],[1,"card-text","text-muted"]],template:function(i,g){1&i&&t.YNc(0,p,5,1,"section",0),2&i&&t.Q6J("ngIf",g.BrandObject.length>0)},dependencies:[c.ez,c.sg,c.O5,a.r],encapsulation:2})}return e})()}}]);