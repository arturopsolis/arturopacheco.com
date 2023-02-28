
let btnContacto = document.getElementById("btn-contacto");

document.addEventListener('scroll',(event) => {

        // handle scroll event
        console.log(this.scrollY);

        if( this.scrollY < 176 ){
            btnContacto.classList.add("hidden");
            
        }else if(this.scrollY > 176 && this.scrollY < 1398){
            btnContacto.classList.remove("hidden");
            btnContacto.style.backgroundPosition = "0px center";

        }else if(this.scrollY > 1398 && this.scrollY < 1686){
            btnContacto.classList.remove("hidden");
            btnContacto.style.backgroundPosition = "-100px center";

        }else if(this.scrollY > 1686 && this.scrollY < 2800){
            btnContacto.classList.remove("hidden");
            btnContacto.style.backgroundPosition = "-200px center";
        }
        else if(this.scrollY > 2800){
            btnContacto.classList.remove("hidden");
            btnContacto.style.backgroundPosition = "-200px center";
        }



        
    }
);