import{H as r}from"./index.908bd4d2.js";import{u as d,j as e,l as m,a as o,n as l,r as s,F as a,O as u,b as p}from"./index.f65fc578.js";import{t as f}from"./top.61adeb18.js";const h=()=>{const t=d();return e("div",{className:"left_menu",children:m.map(n=>o("div",{className:"left_menu_line left_padding",onClick:()=>{t(n.to,{replace:!1})},children:[n.name,e("span",{children:n.smallName})]},l()))})};const _=()=>(s.exports.useEffect(()=>{const t=document.querySelector(".to_top");window.addEventListener("scroll",()=>{document.documentElement.scrollTop>300?t.style.opacity="1":t.style.opacity="0"}),t.style.opacity="0"},[]),o(a,{children:[e("div",{className:"to_top",onClick:()=>{window.scrollTo(0,0)},children:e("img",{src:f,alt:""})}),e("div",{className:"middle_content middle_padding",children:e(u,{})})]}));const g=t=>{if(t){let n=document.getElementById(t);n&&n.scrollIntoView()}},x=()=>{const[t,n]=s.exports.useState([]),i=p();return s.exports.useEffect(()=>{n([...document.querySelectorAll(".compontent_title")])},[i]),e("div",{className:"right_content right_padding",children:t.map(c=>e("div",{className:"right_menu_line",onClick:()=>g(c.id),children:c.innerHTML},l()))})};const w=()=>o(a,{children:[e(r,{}),o("div",{className:"main_content flex_between",children:[e(h,{}),e(_,{}),e(x,{})]})]});export{w as default};