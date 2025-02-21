
//section2: pour afficher le montant de don et combien de fois l'utilisateur veut faire de don
let montant_de_don= "";
let duree = "";

function give(element) {
    document.querySelectorAll('.div_child').forEach(div => {
        div.classList.remove('select_div1');
    });
    element.classList.add('select_div1');

    montant_de_don = element.querySelector(".p1").textContent;
    console.log(montant_de_don)
    affichage();
}

    function abounnement(element) {
        document.querySelectorAll('.div_don').forEach(div => {
            div.classList.remove('select_div2');
        });
        element.classList.add('select_div2');

        duree = element.querySelector("p").textContent;
        console.log(montant_de_don);
        affichage();
    }
function affichage() {
        let div_affichage = document.getElementById("faire_un_don");
        if ( montant_de_don && duree) {
            div_affichage.textContent = `Faire un don de ${montant_de_don}/${duree}`;
        } else {
            div_affichage.textContent = "Faire un don";
        }
}

//section4: pour changer l'image et le text
document.addEventListener('DOMContentLoaded', function(){
    console.log("dom est la");
    let bigDiv = document.getElementById("sec4_big_img");
    let p_1 = document.getElementById("sec4_p1");
    let p_2 = document.getElementById("sec4_p2");
    let p_3 = document.getElementById("sec4_p3");

    document.getElementById("div_Luna").addEventListener('click', function(){
        bigDiv.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(images/ImageDeLuna.jpg)';
        p_1.textContent = "Luna";
        p_2.textContent = "Trouvée dans la rue avec une patte cassée, Luna a été soignée et retrouvé sa joie de vivre. Elle coule maintenant des jours  heureux dans sa nouvelle famille.";
        p_3.textContent = "Janvier 2024";
    });
    document.getElementById("div_Oscar").addEventListener('click', function(){
        bigDiv.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(images/ImagedeOscar.jpg)';
        p_1.textContent = "Oscar";
        p_2.textContent = "Abandonné dans une foret, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux.";
        p_3.textContent = "Mars 2024";
    });
    document.getElementById("div_Max").addEventListener('click', function(){
        bigDiv.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(images/ImagedeMax.jpg)';
        p_1.textContent = "Max";
        p_2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo aut alias, dignissimos odio fugit quisquam architecto assumenda! Dicta sequi ab fugit delectus.";
        p_3.textContent = "juin 2024";
    });
});

//section 5 de la quiz: tester vos connaissance