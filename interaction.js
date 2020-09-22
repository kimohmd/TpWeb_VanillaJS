
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.startX =0;
  this.startY = 0;
  this.endX = 0 ;
  this.endY = 0 ;
  this.isPressed = false;
	// Developper les 3 fonctions gérant les événements
  this.maFctGerantLaPression = function (evt) {

    if(!this.isPressed){
    this.isPressed = true;
    this.startX = getMousePosition(canvas,evt).x;
    this.startY = getMousePosition(canvas,evt).y;
    
    //console.log("startX : "+ this.startX + "startY : "+this.startY  + "endX : "+ this.endX + "endY : "+this.endY);
    }
  }.bind(this) ;

  this.maFctGerantLeDeplacement = function (evt) {
    if(this.isPressed){
      this.endX = getMousePosition(canvas,evt).x;
      this.endY = getMousePosition(canvas,evt).y;
    
      //console.log("startX : "+ this.startX + "startY : "+this.startY  + "endX : "+ this.endX + "endY : "+this.endY);
    }
  }.bind(this) ;

  this.maFctGerantLeRelachement = function (evt) {
    if(this.isPressed){
      this.endX = getMousePosition(canvas,evt).x;
      this.endY = getMousePosition(canvas,evt).y;
      
      this.isPressed = false;
      //console.log("startX : "+ this.startX + "startY : "+this.startY  + "endX : "+ this.endX + "endY : "+this.endY);
    }
  }.bind(this) ;

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
