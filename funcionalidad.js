
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
        "Visión Ser responsable, profesional y honesto, llegar a tener una empresa de las importantes, buen padre de familia, todo bajo los valores y principios y mi Misión es Ser un universitario comprometido y ayudar en el bienestar social mediante la educación actuando con integridad y responsabilidad.";

        panelImage.src =
        "capo.png";
    }

    if(part === "puerta1"){

        changeImage("puerta1izq.png");

        title.innerHTML =
        "PUERTA DELANTERA";

        description.innerHTML =
        "Principios son Respeto: Continuar respetando a mis padres, hermanos y a los mayores en general, así como a todas las personas,Humildad: Seguir con humildad aun cuando culmine mis estudios, así como al momento de tener mi negocio y cualquier otro objetivo y otra meta que cumpla,Responsabilidad: Cumpliendo con todo lo que se me asigne, tanto como en la vida de estudiante, en lo laboral, en lo familiar y en cualquier actividad asignada y mis Valores son Honestidad: Cumplir a cabalidad con todo y nunca caer en algo deshonesto,Sinceridad: Continuar diciendo la verdad sea como sea,Confianza: Nunca perder la confianza que me han dado todas las personas.";

        panelImage.src =
        "puerta1izq.png";
    }

    if(part === "puerta2"){

        changeImage("puerta2izq.png");

        title.innerHTML =
        "PUERTA TRASERA";

        description.innerHTML =
         <ul>
            <li>Ciudadana</li>
            <li>Espiritual</li>
            <li>Sociocultural</li>
            <li>Intelectual</li>
            <li>Física</li>
            <li>Emocional</li>
            <li>Trabajo</li>
            <li>Financiera</li>
            <li>Familia</li>
</ul>

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
        "01	Aprobar mis estudios universitarios	 Jun2026,  02 Ser más responsable y disciplinado May2026,03	Ahorrar dinero para mi futuro Jun2026, 04 Obtener experiencia laboral Jun2026,05 Continuar la universidad Feb2027,06	Empezar mi negocio propio Sep2028,07 Cierre de Pensum Nov2030,08 Tener una empresa estable Ene2030";

        panelImage.src =
        "baul.png";
    }

}

function closePanel(){

    panel.classList.remove("active");

    changeImage("carro2.png");

}
