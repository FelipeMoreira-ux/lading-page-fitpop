(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{281:function(t,e,n){"use strict";var o=n(16),i=n(45),r=n(87),a=n(146),s=n(145);o({target:"Promise",stat:!0},{allSettled:function(t){var e=this,n=r.f(e),o=n.resolve,c=n.reject,d=a((function(){var n=i(e.resolve),r=[],a=0,c=1;s(t,(function(t){var i=a++,s=!1;r.push(void 0),c++,n.call(e,t).then((function(t){s||(s=!0,r[i]={status:"fulfilled",value:t},--c||o(r))}),(function(t){s||(s=!0,r[i]={status:"rejected",reason:t},--c||o(r))}))})),--c||o(r)}));return d.error&&c(d.value),n.promise}})},369:function(t,e,n){"use strict";n.r(e);n(15),n(281),n(132),n(7);var o=n(34),i=n(4),r=n(74);e.default=(t={})=>{const{gmcMerchantId:e,dialogPosition:n}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const a=({name:t,params:a})=>{if("confirmation"===t&&a.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let s,c,d,l;const u=decodeURIComponent(a.json);if(u)try{s=JSON.parse(u)}catch(t){}if(s){const{buyers:e}=s;e&&e[0]&&(c=e[0].main_email);const n=s.shipping_lines&&s.shipping_lines[0];if(n&&n.delivery_time){let e=n.delivery_time.days;n.posting_deadline&&(e+=n.delivery_time.days),n.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}c||(c=r.a.getCustomer().main_email),d||(d=o.$ecomConfig.get("country_code")),l||(l=t(14));const p=[],m=[],f={merchant_id:e,order_id:a.number||a.id,email:c,delivery_country:d,estimated_delivery_date:l.getFullYear()+"-".concat((l.getMonth()+1).toString().padStart(2,"0"),"-")+l.getDate().toString().padStart(2,"0"),opt_in_style:n||"CENTER_DIALOG"};if(s&&s.items)for(let t=0;t<s.items.length&&t<=4;t++)p.push(Object(i.g)({url:"/products/".concat(s.items[t].product_id,".json")}).then(({data:t})=>{t.gtin&&t.gtin.forEach(t=>{m.includes(t)||m.push(t)})}).catch(console.error));Promise.allSettled(p).then(()=>{m.length&&(f.products=m.map(t=>({gtin:t}))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(f)}))})}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);
//# sourceMappingURL=62a8d5af949d3c9d6baf.js.map