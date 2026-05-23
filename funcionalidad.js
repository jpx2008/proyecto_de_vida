
const panel =
document.getElementById("panel");

const car =
document.getElementById("car");

const title =
document.getElementById("title");

const description =
document.getElementById("description");

const panelImage =
document.getElementById("panelImage");

function changeImage(newImage){

    car.classList.add("fade");

    setTimeout(()=>{

        car.src = newImage;

        car.classList.remove("fade");

    },300);

}

function showInfo(part){

    panel.classList.add("active");

    if(part === "capo"){

        changeImage("capo.png");

        title.innerHTML = "CAPÓ";

        description.innerHTML =
        "Puertas deportivas con diseño aerodinámico y apertura premium.";

        panelImage.src =
        "capo.png";
    }

    if(part === "puerta1"){

        changeImage("puerta1izq.png");

        title.innerHTML =
        "PUERTA DELANTERA";

        description.innerHTML =
        "Puertas deportivas con diseño aerodinámico y apertura premium.";

        panelImage.src =
        "puerta1izq.png";
    }

    if(part === "puerta2"){

        changeImage("puerta2izq.png");

        title.innerHTML =
        "PUERTA TRASERA";

        description.innerHTML =
        "Amplio espacio interior con acabados deportivos.";

        panelImage.src =
        "puerta2izq.png";
    }

    if(part === "puerta3"){

        changeImage("puerta3dere.png");

        title.innerHTML =
        "PUERTA DERECHA";

        description.innerHTML =
        "Sistema de apertura suave y materiales premium.";

        panelImage.src =
        "puerta3dere.png";
    }

    if(part === "puerta4"){

        changeImage("puerta4dere.png");

        title.innerHTML =
        "PUERTA TRASERA DERECHA";

        description.innerHTML =
        "Comodidad y estilo en cada detalle.";

        panelImage.src =
        "puerta4dere.png";
    }

    if(part === "baul"){

        changeImage("baul.png");

        title.innerHTML = "BAÚL";

        description.innerHTML =
        "Gran capacidad de almacenamiento ideal para viajes y uso diario.";

        panelImage.src =
        "baul.png";
    }

}

function closePanel(){

    panel.classList.remove("active");

    changeImage("carro2.png");

}
