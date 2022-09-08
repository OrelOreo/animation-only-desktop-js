const titreSpans = document.querySelectorAll('h1 span'); // Séléction des balises dans le fichier HTML
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle')
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');   // Séléction des balises dans le fichier HTML FIN

window.addEventListener('load',() =>{ //Attente d'évènement lors du chargement de la page
    const TL = gsap.timeline({paused:true}); // Variable contenant une  TL de la libraire JS 
    TL
    .staggerFrom(titreSpans, 1,{top:-50,opacity:0,ease:"power2.out"},0.3) // Décalage des Spans de -50 en haut avec opacity de 0, animation lente vers la fin
    .staggerFrom(btns, 1,{opacity:0,top:-50,ease:"power2.out"},0.3, '-=1') // Décalage des btns de -50 en haut avec opacity de 0, animation lente vers la fin avec décalage d'une seconde avec les autres boutons
    .from(l1,1,{width:0,ease:"power2.out"},'-=2') // Décalage de ligne.1 , animation lente vers la fin avec de 2s avec l'autre ligne
    .from(l2,1,{width:0,ease:"power2.out"},'-=2') // Décalage de ligne.2 , animation lente vers la fin avec de 2s avec l'autre ligne
    .from(logo,1,{transform:"scale(0)",ease:"power2.out"},'-=2') // Animation d'une seconde du logo avec un petit agrandissement
    .staggerFrom(medias, 0.4,{right:-200,ease:"power2.out"},0.3, '-=1'); //Décalage des médias de -200 à droite et animation de droite jusqu'à la position initial

    TL.play(); // Activation des animations
})