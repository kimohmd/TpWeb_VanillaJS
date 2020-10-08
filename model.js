
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

  
function Drawing(){
	this.shapes = new Array();

	this.getShapes = function() {
		return this.shapes;
	}.bind(this) ;

	this.addShape = function(shape) {
		this.shapes.push(shape);
  }.bind(this) ;

  this.removeShape = function(id){
    this.shapes.splice(id,1);
};

};



function Shape(linewidth,color) {

	this.linewidth = linewidth;
	this.color = color;
}



function Rectangle(x, y, height, width,linewidth, color){
  Shape.call(this, linewidth, color);
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
	
};
Rectangle.prototype = new Shape();




function Line(x1, y1, x2, y2, linewidth, color){
  Shape.call(this, linewidth, color);
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;

};
Line.prototype = new Shape();
