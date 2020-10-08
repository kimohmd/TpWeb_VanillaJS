
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getShapes());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function (shape) {
      // now fill the canvas
      shape.paint(ctx);
    });
  };


Shape.prototype.paint = function(ctx) {
    ctx.beginPath();
   
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.linewidth;
  };

  Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx) ;
    
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  };


Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this, ctx) ;
    
    
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  };