import{_ as l}from"./index-f7af34a6.js";import{R as a,S as i,W as c,m as o}from"./@vue-2f237c7b.js";const p={name:"TextField",props:["type","label","density","hideDetails","placeholder","appendIcon","prependIcon","prependInnerIcon"],mounted(){},methods:{updateValue(n){this.$emit("update:modelValue",n.target.value)}}},r={class:"text_field"};function _(n,u,e,s,f,d){const t=a("v-text-field");return i(),c("div",r,[o(t,{variant:"solo",type:e.type?e.type:"text",label:e.label?e.label:void 0,density:e.density?e.density:"default","hide-details":e.hideDetails?e.hideDetails:!1,placeholder:e.placeholder?e.placeholder:void 0,"append-icon":e.appendIcon?e.appendIcon:void 0,"prepend-icon":e.prependIcon?e.prependIcon:void 0,"prepend-inner-icon":e.prependInnerIcon?e.prependInnerIcon:void 0,onInput:d.updateValue},null,8,["type","label","density","hide-details","placeholder","append-icon","prepend-icon","prepend-inner-icon","onInput"])])}const I=l(p,[["render",_]]);export{I as T};
