
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



  Drawing.prototype.updateShapeList = function(shape){

    var list = document.getElementById('shapeList');
    var li = document.createElement('li');
    var id = list.childNodes.length;
    var bouton = document.createElement('button');
    var span = document.createElement('span');

    bouton.setAttribute('id', id);
    bouton.setAttribute('class','btn btn-default')
    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    bouton.appendChild(span);

    bouton.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    li.appendChild(bouton);

    if (shape instanceof Rectangle){
        li.appendChild(document.createTextNode('Rectangle' +'('+ shape.x+','+shape.y+','+shape.width+','+shape.height+')'));

    } else if(shape instanceof Line){
        li.appendChild(document.createTextNode('Ligne' +'('+  shape.x1 +','+shape.y1 +','+shape.x2+','+shape.y2+')'));
    }

    li.setAttribute('id', 'li'+id);
    li.setAttribute('class', 'list-group-item');

    list.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){

    var li = document.getElementById('li'+id);

    var pos = $(li).index();

    li.remove();

    this.removeShape(pos);

    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawing.paint(ctx);
};