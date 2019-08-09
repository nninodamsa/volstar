(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(163);var n=a(7),r=a.n(n),c=a(0),o=a.n(c),i=a(156),s=a(154),l=(a(147),function(){return o.a.createElement("section",{className:"container banner",style:{background:"url(img/bg.jpg)"}},o.a.createElement("div",{className:"banner-logo item"},o.a.createElement("img",{src:"img/logo-big.png",alt:"Volstar"})),o.a.createElement("div",{className:"banner-slogan item"},o.a.createElement("h1",null,"Soluciones de almacenamiento de energía"),o.a.createElement("h2",null,"Desarrollo de soluciones customizadas")))}),d=function(){return o.a.createElement("section",{className:"about"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"item about1"},o.a.createElement("div",{className:"title color-white"},"QUIENES SOMOS"),o.a.createElement("div",{className:"subtitle color-white"},"VOLSTAR se encuentra conformada por un grupo de empresarios del Occidente de México"),o.a.createElement("p",{className:"color-white"},"Con más de 20 años de trayectoria, creando empresas exitosas que han trascendido a nivel nacional, siendo consideradas algunas de ellas como modelos industriales gracias a la innovación aplicada en sus productos y procesos, logrando certificaciones ante normas internacionales como empresas incluyentes y socialmente responsables."),o.a.createElement("p",{className:"color-white"},"Es esta visión lo que lleva a este grupo de empresarios a crear en el año de 2018, VOLSTAR, con el propósito de proveer energía eléctrica mediante soluciones innovadoras y personalizadas que contribuyan a la reducción en los costos de sus clientes y a la preservación de los recursos naturales no renovables.")),o.a.createElement("div",{className:"item about2"},o.a.createElement("div",{className:"bg-green"}),o.a.createElement("div",{className:"img-about"},o.a.createElement("img",{src:"img/img-about.jpg",alt:"Sobre Volstar"})))))},m=(a(177),a(151)),u=a(157),p=a.n(u),h=a(148),v=function(e){var t=e.title,a=e.icon,n=e.text,r=e.bg,c=e.classorder,i=e.link;return o.a.createElement("div",{className:c+" item",style:{backgroundColor:r}},o.a.createElement(h.a,{to:i},o.a.createElement("div",{className:"title color-dark"},t," "),o.a.createElement("div",{className:"icon-area color-dark"},o.a.createElement(p.a,{iconSet:m,size:60,icon:a,color:"#000"})),o.a.createElement("div",{className:"text color-dark"},n)))},g=a(161),E=function(){return o.a.createElement("div",{className:"mision container"},o.a.createElement("div",{className:"item main"},o.a.createElement("div",{className:"subtitle color-white"},"Misión"),o.a.createElement("p",{className:"color-white"},"Proveer energía eléctrica mediante soluciones customizadas e innovadoras, apoyando el desarrollo de nuevas tecnologías encaminadas al cuidado y preservación de los recursos naturales y medio ambiente; la administración de proyectos contribuyendo a la reducción de costos con sus clientes, cuidando no afectar a los grupos de interés y generando ganancias para los accionistas.")),o.a.createElement("div",{className:"item aside"},o.a.createElement("div",{className:"subtitle color-white"},"visión"),o.a.createElement("p",{className:"color-white"},"Ser reconocidos por nuestros clientes como líder en Latinoamérica de soluciones tecnológicas personalizadas para la administración de energía eléctrica, diseñando e implementado propuestas autosustentables.")),o.a.createElement("div",{className:"item aside"},o.a.createElement("div",{className:"subtitle color-white"},"valores"),o.a.createElement("ul",{className:"color-white"},o.a.createElement("li",null,"Innovación"),o.a.createElement("li",null,"Integridad"),o.a.createElement("li",null,"Empatía"),o.a.createElement("li",null,"Adaptabilidad"),o.a.createElement("li",null,"Profesionalismo"),o.a.createElement("li",null,"Búsqueda de la Excelencia"),o.a.createElement("li",null,"Desarrollo Humano"))))},f=a(164),M=a.n(f);a.d(t,"default",function(){return z});var z=function(e){function t(t){var a;return(a=e.call(this,t)||this).cleanState=function(){a.setState({nombre:"",telefono:"",correo:"",asunto:"",interes:"",mensaje:""})},a.sendEmail=function(e){e.preventDefault();var t=" Nombre: "+a.state.nombre+" <br/> Teléfono: "+a.state.telefono+" <br/> Correo: "+a.state.correo+" <br/> Asunto: "+a.state.asunto+" <br/> Área de Interes: "+a.state.interes+" <br/> Mensaje: "+a.state.mensaje;M.a.post("https://www.damsa.com.mx/WebSiteCore/WebApiEnvioDeCorreo/api/Correos",{Id_Sistema:"SITIO_CONTACTO",De:"noreply@damsa.com.mx",Para:"nnino@damsa.com.mx",Copia:"nnino@damsa.com.mx",CopiaOculta:"nnino@damsa.com.mx",Asunto:"Correo enviado desde el formulario de contacto",Msg:t}).then(function(e){document.getElementById("res-contacto").innerHTML="Su email fue enviado"}).catch(function(e){document.getElementById("res-contacto").innerHTML="Ocurrio un error. Intente más tarde"}),a.cleanState()},a.handleInputChange=function(e){var t,n=e.target,r=n.value,c=n.name;a.setState(((t={})[c]=r,t)),console.log(r)},a.state={nombre:"",telefono:"",correo:"",asunto:"",interes:"",mensaje:""},a}return r()(t,e),t.prototype.render=function(){var e=this.state,t=e.nombre,a=e.telefono,n=e.correo,r=e.mensaje,c=t.length>0&&a.length>0&&n.length>0&&r.length>0,m=this.state;return o.a.createElement(i.a,null,o.a.createElement(s.a,{title:"Inicio",keywords:["gatsby","application","react"]}),o.a.createElement(l,null),o.a.createElement(d,null),o.a.createElement("div",{className:"areas container"},o.a.createElement(v,{bg:"#74a332",link:"/sistema-es48",classorder:"",title:"",icon:"tower",text:"telecomunicaciones"}),o.a.createElement(v,{bg:"#7daf38",link:"#",classorder:"main",title:"áreas de aplicación",icon:"golf-cart",text:"movilidad"}),o.a.createElement(v,{bg:"#8bc13f",link:"#",classorder:"",title:"",icon:"forklift",text:"movilidad industrial"})),o.a.createElement(g.a,{sendEmail:this.sendEmail,handleInputChange:this.handleInputChange,stateValues:m,enabled:c}),o.a.createElement(E,null))},t}(o.a.Component)},148:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(150);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},151:function(e){e.exports={IcoMoonType:"selection",icons:[{icon:{paths:["M923.824 411.827h-55.652v-233.74c0-55.238-44.936-100.174-100.174-100.174h-233.174c-74.154 0-140.174 49.794-160.52 121.088l-98.972 346.389h-74.986v-434.085c0-18.446-14.958-33.392-33.392-33.392s-33.39 14.946-33.39 33.392v701.217h-100.174c-18.434-0.002-33.392 14.944-33.392 33.39s14.958 33.392 33.392 33.392h133.566c18.434 0 33.392-14.946 33.392-33.392v-100.174h66.782v66.782c0 73.652 59.912 133.566 133.566 133.566 62.106 0 114.286-42.658 129.17-100.174h231.4c14.884 57.516 67.066 100.174 129.17 100.174 73.652 0 133.566-59.912 133.566-133.566v-300.519c-0.004-55.24-44.94-100.174-100.178-100.174zM400.695 879.304c-36.826 0-66.782-29.956-66.782-66.782s29.956-66.782 66.782-66.782 66.782 29.956 66.782 66.782-29.956 66.782-66.782 66.782zM801.39 431.391l-66.782 66.782v-186.522c0-18.446-14.958-33.392-33.392-33.392s-33.392 14.946-33.392 33.392v233.74h-323.033l8.040-28.142 114.646-76.426v37.786c0 18.446 14.958 33.392 33.392 33.392s33.392-14.946 33.392-33.392c0-57.78 0-109.246 0-166.956 0-18.446-14.958-33.392-33.392-33.392s-33.392 14.946-33.392 33.392v48.914l-86.318 57.542 57.362-200.77c12.216-42.772 51.806-72.642 96.304-72.642h233.174c18.412 0 33.392 14.98 33.392 33.392v253.302zM890.432 879.304c-36.826 0-66.782-29.956-66.782-66.782s29.956-66.782 66.782-66.782 66.782 29.956 66.782 66.782-29.956 66.782-66.782 66.782z"],attrs:[{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["forklift"]},attrs:[{}],properties:{order:39,id:10,name:"forklift",prevSize:32,code:59650},setIdx:0,setId:4,iconIdx:0},{icon:{paths:["M152 480c24.203 0 46.109-9.711 62.297-25.305l88.805 44.398c-0.445 3.617-1.102 7.172-1.102 10.906 0 49.625 40.375 90 90 90s90-40.375 90-90c0-13.852-3.406-26.82-9.023-38.555l120.469-120.469c11.734 5.617 24.703 9.023 38.555 9.023 49.625 0 90-40.375 90-90 0-9.344-1.836-18.18-4.492-26.656l104.672-78.484c14.281 9.539 31.398 15.141 49.82 15.141 49.625 0 90-40.375 90-90s-40.375-90-90-90-90 40.375-90 90c0 9.344 1.836 18.18 4.492 26.656l-104.672 78.484c-14.281-9.539-31.398-15.141-49.82-15.141-49.625 0-90 40.375-90 90 0 13.852 3.406 26.82 9.023 38.555l-120.469 120.469c-11.734-5.617-24.703-9.023-38.555-9.023-24.203 0-46.109 9.711-62.297 25.305l-88.805-44.398c0.445-3.617 1.102-7.172 1.102-10.906 0-49.625-40.375-90-90-90s-90 40.375-90 90 40.375 90 90 90zM152 480z","M994 964h-32v-634c0-16.578-13.422-30-30-30h-120c-16.578 0-30 13.422-30 30v634h-60v-454c0-16.578-13.422-30-30-30h-120c-16.578 0-30 13.422-30 30v454h-60v-214c0-16.578-13.422-30-30-30h-120c-16.578 0-30 13.422-30 30v214h-60v-334c0-16.578-13.422-30-30-30h-120c-16.578 0-30 13.422-30 30v334h-32c-16.578 0-30 13.422-30 30s13.422 30 30 30h964c16.578 0 30-13.422 30-30s-13.422-30-30-30zM994 964z"],attrs:[{},{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["statistics"]},attrs:[{},{}],properties:{order:30,id:9,name:"statistics",prevSize:32,code:59648},setIdx:0,setId:4,iconIdx:1},{icon:{paths:["M185.437 520.829c-67.992-68-105.438-158.399-105.438-254.555 0-96.164 37.445-186.563 105.438-254.555 15.625-15.625 40.945-15.625 56.57 0 15.625 15.617 15.625 40.945 0 56.57-52.883 52.883-82.008 123.195-82.008 197.985s29.125 145.102 82.008 197.985c15.625 15.625 15.625 40.953 0 56.57-15.617 15.617-40.945 15.617-56.57 0zM864.602 266.274c0 74.789-29.125 145.102-82.008 197.985-15.625 15.625-15.625 40.953 0 56.57 15.617 15.617 40.945 15.617 56.563 0 68-68 105.445-158.399 105.445-254.555 0-96.164-37.445-186.563-105.438-254.555-15.625-15.625-40.953-15.625-56.57 0-15.625 15.617-15.625 40.945 0 56.57 52.883 52.883 82.008 123.195 82.008 197.985zM304.015 435.977c15.625 15.625 40.945 15.625 56.57 0 15.617-15.617 15.617-40.945 0-56.563-30.219-30.227-46.859-70.406-46.859-113.141s16.641-82.914 46.859-113.133c15.617-15.625 15.617-40.945 0-56.57-15.625-15.617-40.945-15.617-56.57 0-45.328 45.328-70.289 105.602-70.289 169.703 0 64.109 24.961 124.375 70.289 169.703zM664.016 435.977c15.617 15.625 40.945 15.625 56.563 0 45.336-45.328 70.297-105.602 70.297-169.703 0-64.109-24.961-124.375-70.289-169.703-15.625-15.625-40.953-15.617-56.57 0-15.617 15.625-15.625 40.945 0 56.57 30.219 30.219 46.859 70.398 46.859 113.133s-16.641 82.914-46.859 113.133c-15.625 15.625-15.625 40.953 0 56.57zM868.055 966.063c9.898 19.742 1.922 43.781-17.828 53.688-19.656 9.859-43.734 2.016-53.688-17.82l-65.164-129.938h-438.149l-65.172 129.93c-9.898 19.75-33.938 27.727-53.688 17.82-19.742-9.898-27.719-33.938-17.82-53.688l298.196-594.524c-37.18-20.414-62.438-59.938-62.438-105.258 0-66.172 53.828-120 120-120 66.164 0 119.992 53.828 119.992 120 0 45.32-25.258 84.844-62.438 105.258zM472.297 266.274c0 21.039 16.336 38.289 36.984 39.844 1-0.078 2.008-0.117 3.016-0.117 1.016 0 2.023 0.039 3.023 0.117 20.648-1.555 36.977-18.813 36.977-39.844 0-22.055-17.945-40-40-40s-40 17.945-40 40zM512.297 435.219l-74.805 149.141h149.617zM691.25 791.993l-64.016-127.633h-229.867l-64.016 127.633zM691.25 791.993z"],attrs:[{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["tower"]},attrs:[{}],properties:{order:31,id:8,name:"tower",prevSize:32,code:59649},setIdx:0,setId:4,iconIdx:2},{icon:{paths:["M685.689 140.884c14.054-30.414 28.317-60.619 43.209-92.712-164.867-69.429-325.539-66.073-479.080 25.38-148.506 88.307-229.052 222.55-249.818 395.388 35.239 3.146 68.59 6.083 101.941 8.81 18.249-261.145 306.871-461.461 583.748-336.866z","M1016.682 424.682c-33.141 5.663-66.073 11.537-100.473 17.41 17.829 119.56-6.922 227.374-79.917 321.764-72.575 93.97-169.901 145.57-288.832 158.784 2.937 33.771 5.873 66.702 8.6 99.634 248.979-8.81 515.787-258.837 460.622-597.592z","M100.473 549.696c-31.673 2.727-64.604 5.663-97.536 8.39 7.761 208.706 189.828 443.631 464.397 465.865 2.937-33.771 5.873-66.912 8.6-99.004-214.789-35.868-339.174-160.253-375.461-375.251z","M836.712 263.381c25.59 33.141 45.307 69.639 60.619 109.912 31.883-11.537 63.346-23.073 96.277-35.029-37.966-101.102-99.843-181.648-187.731-244.784-19.507 27.897-38.805 55.166-58.731 83.692 33.98 24.961 64.185 53.278 89.565 86.209z","M560.465 805.807v-40.063c34.19-6.502 67.331-20.136 97.116-40.692l28.527 28.527c10.697 10.488 27.688 10.488 38.385 0l29.575-29.575c10.488-10.697 10.488-27.688 0-38.385l-28.946-28.946c20.136-29.785 33.351-62.926 39.644-96.907h41.112c14.893 0 27.058-12.166 27.058-27.058v-41.951c0-14.893-12.166-27.058-27.058-27.058h-41.322c-6.502-33.98-19.927-66.702-40.063-96.277l29.366-29.366c10.488-10.697 10.488-27.688 0-38.385l-29.995-29.785c-10.697-10.488-27.688-10.488-38.385 0l-29.366 29.366c-29.575-20.136-62.507-33.561-96.487-40.063v-41.322c0-14.893-12.166-27.058-27.058-27.058h-41.951c-14.893 0-27.058 12.166-27.058 27.058v41.112c-33.98 6.293-67.122 19.717-96.907 39.853l-28.736-28.527c-10.697-10.488-27.688-10.488-38.385 0l-29.575 29.785c-10.488 10.697-10.488 27.688 0 38.385l28.527 28.527c-20.556 29.785-33.98 62.926-40.483 97.116h-40.063c-14.893 0-27.058 12.166-27.058 27.058v41.951c0 14.893 12.166 27.058 27.058 27.058h39.853c6.502 34.4 19.927 67.751 40.273 97.536l-27.688 28.317c-10.488 10.697-10.488 27.688 0 38.385l29.575 29.575c10.697 10.488 27.688 10.488 38.385 0l28.107-28.107c29.995 20.346 63.346 33.771 97.746 40.273v39.853c0 14.893 12.166 27.058 27.058 27.058h41.951c15.102-0.21 27.268-12.376 27.268-27.268zM413.217 610.944c-54.536-54.536-54.746-143.053-0.21-197.589s143.053-54.746 197.589-0.21 54.746 143.053 0.21 197.589c-54.327 54.536-142.843 54.746-197.589 0.21z"],attrs:[{},{},{},{},{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["settings"]},attrs:[{},{},{},{},{}],properties:{order:33,id:6,name:"settings",prevSize:32,code:59651},setIdx:0,setId:4,iconIdx:3},{icon:{paths:["M626.719 220.609c70.188-70.18 184.375-70.18 254.563 0 5.852 5.859 13.531 8.789 21.211 8.789 7.672 0 15.352-2.93 21.211-8.789 11.719-11.711 11.719-30.711 0-42.43-93.578-93.57-245.836-93.57-339.414 0-11.711 11.719-11.711 30.711 0 42.43 11.719 11.711 30.719 11.711 42.43 0zM626.719 220.609z","M669.148 263.039c-11.719 11.711-11.711 30.703 0 42.422s30.711 11.711 42.422 0c11.336-11.336 26.406-17.57 42.43-17.57s31.094 6.234 42.43 17.57c5.852 5.859 13.531 8.789 21.211 8.789 7.672 0 15.352-2.93 21.211-8.789 11.711-11.711 11.711-30.711 0-42.422-22.664-22.672-52.797-35.148-84.852-35.148s-62.188 12.477-84.852 35.148zM669.148 263.039z","M954 497.891h-170v-120c0-16.57-13.43-30-30-30s-30 13.43-30 30v120h-654c-38.602 0-70 31.398-70 70v280c0 38.594 31.398 70 70 70h884c38.602 0 70-31.406 70-70v-280c0-38.602-31.398-70-70-70zM150 677.891c-16.57 0-30-13.438-30-30 0-16.57 13.43-30 30-30s30 13.43 30 30c0 16.563-13.43 30-30 30zM270 677.891c-16.57 0-30-13.438-30-30 0-16.57 13.43-30 30-30s30 13.43 30 30c0 16.563-13.43 30-30 30zM390 677.891c-16.57 0-30-13.438-30-30 0-16.57 13.43-30 30-30s30 13.43 30 30c0 16.563-13.43 30-30 30zM390 677.891z"],attrs:[{},{},{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["router"]},attrs:[{},{},{}],properties:{order:34,id:5,name:"router",prevSize:32,code:59652},setIdx:0,setId:4,iconIdx:4},{icon:{paths:["M341.86 355.522c5.898 7.844 14.898 11.977 24.008 11.977 6.281 0 12.617-1.969 18.016-6.031 13.25-9.961 15.914-28.781 5.953-42.023-19.828-26.375-30.75-59.062-30.75-92.054 0-35.289 12.32-69.765 34.687-97.062 10.5-12.82 8.625-31.734-4.195-42.242-12.82-10.5-31.734-8.625-42.242 4.195-31.133 38-48.281 85.984-48.281 135.109 0 45.93 15.203 91.429 42.805 128.132zM341.86 355.522z","M277.751 448.053c6.656 0 13.352-2.203 18.914-6.727 12.867-10.453 14.812-29.359 4.359-42.219-39.336-48.383-60.992-109.367-60.992-171.718 0-65.234 23.461-128.367 66.070-177.773 10.82-12.547 9.422-31.5-3.133-42.328-12.547-10.82-31.5-9.422-42.328 3.125-52 60.297-80.64 137.359-80.64 216.984 0 76.094 26.437 150.523 74.445 209.578 5.93 7.297 14.578 11.078 23.305 11.078zM277.751 448.053z","M665.468 227.39c0 32.992-10.914 65.687-30.75 92.054-9.961 13.25-7.297 32.062 5.953 42.023 5.398 4.062 11.734 6.031 18.016 6.031 9.109 0 18.109-4.133 24.008-11.977 27.601-36.703 42.805-82.211 42.805-128.132 0-49.125-17.141-97.109-48.281-135.109-10.508-12.82-29.414-14.695-42.242-4.195-12.812 10.508-14.695 29.414-4.187 42.234 22.367 27.312 34.68 61.781 34.68 97.070zM665.468 227.39z","M784.523 227.39c0 62.351-21.656 123.336-60.992 171.718-10.461 12.859-8.508 31.766 4.359 42.219 5.562 4.523 12.258 6.727 18.914 6.727 8.719 0 17.375-3.789 23.305-11.086 48.008-59.047 74.445-133.476 74.445-209.578 0-79.625-28.641-156.679-80.64-216.976-10.828-12.555-29.781-13.953-42.336-3.125-12.547 10.82-13.945 29.773-3.125 42.328 42.609 49.406 66.070 112.539 66.070 177.773zM784.523 227.39z","M794.445 963.974h-84.258l-153.367-653.701c29.469-15.922 49.539-47.101 49.539-82.883 0-51.898-42.226-94.125-94.125-94.125s-94.125 42.226-94.125 94.125c0 35.789 20.070 66.961 49.539 82.883l-153.367 653.701h-84.094c-16.578 0-30.016 13.437-30.016 30.016 0 16.57 13.437 30.008 30.016 30.008h564.256c16.578 0 30.016-13.437 30.016-30.008 0-16.578-13.437-30.016-30.016-30.016zM591.883 722.537l-114.773-68.429 86.789-50.851zM512.234 193.296c18.805 0 34.101 15.297 34.101 34.094 0 18.805-15.297 34.101-34.101 34.101-18.797 0-34.094-15.297-34.094-34.101 0-18.797 15.297-34.094 34.094-34.094zM512.234 383.054l37.312 159.039-86.515 50.695zM437.75 700.529l140.492 83.758-185.945 109.992zM392.375 963.974l224.937-133.054 31.211 133.054zM392.375 963.974z"],attrs:[{},{},{},{},{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["signal-tower"]},attrs:[{},{},{},{},{}],properties:{order:35,id:4,name:"signal-tower",prevSize:32,code:59653},setIdx:0,setId:4,iconIdx:5},{icon:{paths:["M767.965 0.213l-132.79-0.213c-149.185 0-245.595 98.913-245.595 252.008v116.192h-133.514c-11.537 0-20.88 9.353-20.88 20.891v168.35c0 11.537 9.353 20.88 20.88 20.88h133.514v424.8c0 11.537 9.343 20.88 20.88 20.88h174.198c11.537 0 20.88-9.353 20.88-20.88v-424.8h156.109c11.537 0 20.88-9.343 20.88-20.88l0.064-168.35c0-5.54-2.205-10.845-6.115-14.765s-9.236-6.125-14.776-6.125h-156.163v-98.498c0-47.342 11.282-71.375 72.952-71.375l89.453-0.032c11.527 0 20.869-9.353 20.869-20.88v-156.322c0-11.516-9.332-20.859-20.848-20.88z"],attrs:[{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["facebook-logo"]},attrs:[{}],properties:{order:36,id:3,name:"facebook-logo",prevSize:32,code:59654},setIdx:0,setId:4,iconIdx:6},{icon:{paths:["M1024 622.668v378.579h-219.476v-353.224c0-88.733-31.745-149.29-111.188-149.29-60.645 0-96.735 40.811-112.612 80.288-5.79 14.113-7.28 33.757-7.28 53.512v368.714h-219.55c0 0 2.957-598.246 0-660.229h219.529v93.585c-0.445 0.7-1.024 1.455-1.443 2.133h1.443v-2.133c29.167-44.922 81.255-109.095 197.845-109.095 144.447-0.002 252.733 94.363 252.733 297.16zM124.235 22.755c-75.108 0-124.235 49.265-124.235 114.050 0 63.373 47.705 114.133 121.321 114.133h1.467c76.562 0 124.177-50.75 124.177-114.133-1.443-64.785-47.615-114.050-122.73-114.050zM13.039 1001.247h219.467v-660.229h-219.467v660.229z"],attrs:[{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["linkedin-logo"]},attrs:[{}],properties:{order:37,id:2,name:"linkedin-logo",prevSize:32,code:59655},setIdx:0,setId:4,iconIdx:7},{icon:{paths:["M1000.891 634.578c-15.523-28.852-38.148-53.875-65.859-75.203l-74.5-57.336-122.695-387.195c-11.914-37.586-46.398-62.844-85.813-62.844h-458.086c-49.625 0-90.008 40.375-90.008 90.008v432.023h-73.93c-16.57 0-30 13.43-30 30v160.016c0 5.273 1.359 10.234 3.75 14.539 8.914-19.625 21.273-37.352 36.32-52.398 32.219-32.219 76.719-52.148 125.867-52.148s93.648 19.93 125.867 52.148 52.148 76.719 52.148 125.867c0 9.531-0.758 18.883-2.195 28 99.516 0 199.047 0.008 298.406 0.008-1.438-9.125-2.195-18.477-2.195-28.008 0-49.148 19.93-93.648 52.148-125.867s76.719-52.148 125.867-52.148c49.148 0 93.648 19.93 125.867 52.148s52.148 76.719 52.148 125.867c0 9.531-0.758 18.883-2.195 28.008h2.195c16.57 0 30-13.438 30-30.008v-123.453c0-33.797-8.273-64.461-23.109-92.023zM584.852 820.055h-158.898v-216.023c0-16.57-13.43-30-30-30h-232.016v-432.023c0-16.547 13.461-30 30-30h458.086c13.547 0 24.508 8.031 28.609 20.961l94.656 298.695-97.406-84.977 4.953-4.953c11.719-11.711 11.719-30.711 0.008-42.43-11.719-11.711-30.711-11.719-42.43 0l-54.25 54.234c-11.719 11.719-11.719 30.711-0.008 42.43 5.859 5.859 13.539 8.789 21.219 8.789 7.672 0 15.352-2.93 21.211-8.781l6.758-6.766 111.914 97.633zM584.852 820.055z","M165.938 734.047c-65.172 0-118.008 52.844-118.008 118.008 0 65.172 52.836 118.008 118.008 118.008s118.008-52.836 118.008-118.008c0-65.164-52.844-118.008-118.008-118.008zM165.938 882.063c-16.523 0-30-13.477-30-30.008 0-16.523 13.477-30 30-30s30 13.477 30 30c0 16.531-13.477 30.008-30 30.008zM165.938 882.063z","M815.984 734.047c-65.172 0-118.008 52.844-118.008 118.008 0 65.172 52.836 118.008 118.008 118.008s118.008-52.836 118.008-118.008c0-65.164-52.844-118.008-118.008-118.008zM815.984 882.063c-16.523 0-30-13.477-30-30.008 0-16.523 13.477-30 30-30s30 13.477 30 30c0 16.531-13.477 30.008-30 30.008zM815.984 882.063z","M225.602 306.016c-0.508 0-1.016 0.031-1.531 0.039v207.977h91.539v-118.008c0-49.625-40.375-90.008-90.008-90.008zM225.602 306.016z"],attrs:[{},{},{},{}],isMulticolor:!1,isMulticolor2:!1,grid:16,tags:["golf-cart"]},attrs:[{},{},{},{}],properties:{order:38,id:1,name:"golf-cart",prevSize:32,code:59656},setIdx:0,setId:4,iconIdx:8}],height:1024,metadata:{name:"icomoon"},preferences:{showGlyphs:!0,showQuickUse:!0,showQuickUse2:!0,showSVGs:!0,fontPref:{prefix:"icon-",metadata:{fontFamily:"icomoon"},metrics:{emSize:1024,baseline:6.25,whitespace:50},embed:!1},imagePref:{prefix:"icon-",png:!0,useClassSelector:!0,color:0,bgColor:16777215,classSelector:".icon"},historySize:50,showCodes:!0,gridSize:16}}},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Volstar"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var n=a(155),r=a(0),c=a.n(r),o=a(4),i=a.n(o),s=a(159),l=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title,s=n.data.site,d=t||s.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Volstar",description:"SOLUCIONES DE ALMACENAMIENTO DE ENERGÍA.",author:"@damsa"}}}}},156:function(e,t,a){"use strict";var n=a(152),r=a(0),c=a.n(r),o=a(4),i=a.n(o),s=a(148),l=a(151),d=a(157),m=a.n(d),u=(a(147),function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"logo-header"},c.a.createElement(s.a,{to:"/"},c.a.createElement("img",{src:"img/logo-big.png",alt:"Volstar"}))),c.a.createElement("div",{className:"menu"},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/volstarenergia/"},c.a.createElement(m.a,{iconSet:l,size:18,color:"#fff",icon:"facebook-logo"})),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/volstar/?viewAsMember=true"},c.a.createElement(m.a,{iconSet:l,size:18,color:"#fff",icon:"linkedin-logo"}))))});u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""};var p=u,h=(a(158),function(e){var t=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("div",null,c.a.createElement("main",null,t),c.a.createElement("footer",{className:"color-dark"},"© ",(new Date).getFullYear(),", Volstar")))},data:n})});h.propTypes={children:i.a.node.isRequired};t.a=h},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(147),function(e){var t=e.idinput,a=e.text,n=e.handleInputChange,c=e.valor;return r.a.createElement("div",{className:"item"},r.a.createElement("input",{name:t,placeholder:a,value:c,onChange:n}))}),o=function(e){var t=e.idinput,a=e.text,n=e.handleInputChange,c=e.valor;return r.a.createElement("div",{className:"item"},r.a.createElement("textarea",{name:t,placeholder:a,value:c,onChange:n}))},i=function(e){var t=e.text,a=e.enabled;return r.a.createElement("div",{className:"item"},r.a.createElement("button",{className:"btn",disabled:!a},t))};t.a=function(e){var t=e.sendEmail,a=e.handleInputChange,n=e.enabled,s=e.stateValues;return console.log(s),r.a.createElement("section",{className:"contact container"},r.a.createElement("div",{className:"title color-white"},"contáctanos"),r.a.createElement("form",{id:"formul",onSubmit:t},r.a.createElement(c,{idinput:"nombre",text:"Nombre",valor:s.nombre,handleInputChange:a}),r.a.createElement(c,{idinput:"telefono",text:"Teléfono",valor:s.telefono,handleInputChange:a}),r.a.createElement(c,{idinput:"correo",text:"Correo",valor:s.correo,handleInputChange:a}),r.a.createElement(c,{idinput:"asunto",text:"Asunto",valor:s.asunto,handleInputChange:a}),r.a.createElement(o,{idinput:"mensaje",text:"Mensaje",valor:s.mensaje,handleInputChange:a}),r.a.createElement("div",{className:"item col-right"},r.a.createElement(c,{idinput:"interes",text:"Segmento de interés",valor:s.interes,handleInputChange:a}),r.a.createElement(i,{idinput:"button",type:"submit",text:"Enviar",enabled:n}),r.a.createElement("div",{id:"res-contacto",className:"color-white"}))))}},177:function(e,t,a){"use strict";a(178)("link",function(e){return function(t){return e(this,"a","href",t)}})},178:function(e,t,a){var n=a(11),r=a(19),c=a(20),o=/"/g,i=function(e,t,a,n){var r=String(c(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-0e949869c3429d9e2c34.js.map