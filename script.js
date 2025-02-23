
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

    function abonnement(element) {
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

//section 5, la quiz: tester vos connaissance
let choix_vrai1 = document.getElementById("vrai1");
let choix_faux1 = document.getElementById("faux1");
let choix_vrai2 = document.getElementById("vrai2");
let choix_faux2 = document.getElementById("faux2");
let choix_vrai3 = document.getElementById("vrai3");
let choix_faux3 = document.getElementById("faux3");
let score_final = document.getElementById("score_final");
let nbr = 0;

function gestion_des_reponses(choix_vrai, choix_faux, text) {
    choix_vrai.addEventListener('click', function(){
        choix_vrai.classList.add('incorrect');
        choix_vrai.textContent = text;
        choix_faux.style.display = "none";
        affichage_score_final();
    });
    choix_faux.addEventListener('click', () => {
        choix_vrai.classList.add('correct');
        choix_vrai.textContent = text;
        choix_faux.style.display = "none";
        nbr++;
        affichage_score_final();
    });
}

gestion_des_reponses(choix_vrai1, choix_faux1, "Faux ! Chez Quatre Pattes, 85% des dons sont directement  utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.");
gestion_des_reponses(choix_vrai2, choix_faux2, "Faux ! Nous accueillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !");
gestion_des_reponses(choix_vrai3, choix_faux3, "Faux ! Les besoins sont immenses et constants Chaque don est précieux pour sauver plus d’animaux");


function affichage_score_final(){
    score_final.classList.add('score_final');
    score_final.innerHTML = "le nombre des bonnes réponses est : " + nbr;
}