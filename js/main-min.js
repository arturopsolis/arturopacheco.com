let btnContacto=document.getElementById("btn-contacto");document.addEventListener("scroll",(t=>{console.log(this.scrollY),this.scrollY<176?btnContacto.classList.add("hidden"):this.scrollY>176&&this.scrollY<1398?(btnContacto.classList.remove("hidden"),btnContacto.style.backgroundPosition="0px center"):this.scrollY>1398&&this.scrollY<1686?(btnContacto.classList.remove("hidden"),btnContacto.style.backgroundPosition="-100px center"):(this.scrollY>1686&&this.scrollY<2800||this.scrollY>2800)&&(btnContacto.classList.remove("hidden"),btnContacto.style.backgroundPosition="-200px center")}));