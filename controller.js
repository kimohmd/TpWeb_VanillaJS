
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


	this.onInteractionStart = function (DnD){
		this.currLineWidth = document.getElementById("spinnerWidth").value;
		this.currColour =  document.getElementById("colour").value;
		var line  = document.getElementById("butLine");
        var rect  = document.getElementById("butRect");

        if (line.checked){
        	this.currEditingMode = editingMode.line;
		}
        else if (rect.checked){
        	this.currEditingMode = editingMode.rect;
		}
	
	}.bind(this);

	this.onInteractionUpdate= function (DnD){
		switch (this.currEditingMode) {
			case editingMode.rect: {
				  this.currentShape= new Rectangle(DnD.startX, DnD.startY, DnD.endY - DnD.startY, DnD.endX-DnD.startX, this.currLineWidth, this.currColour);
				  drawing.paint(ctx, canvas);
				  this.currentShape.paint(ctx, canvas);
				  break;
			  }
			  case editingMode.line:{
				  this.currentShape= new Line(DnD.startX, DnD.startY, DnD.endX, DnD.endY, this.currLineWidth, this.currColour);
				  drawing.paint(ctx, canvas);
				  this.currentShape.paint(ctx, canvas);
				  break;
			  }}

	}.bind(this);

	this.onInteractionEnd= function (DnD){

		drawing.addShape(this.currentShape);
		console.log(this.currentShape);
		drawing.paint(ctx, canvas);
	}.bind(this);


};
