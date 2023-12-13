function correctVB(W) {
	//Get fillColor for activeLayer.kind = SOLIDFILL
	var ref = new ActionReference();
	ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
	var layerDesc = executeActionGet(ref);
	var adjList = layerDesc.getList(stringIDToTypeID('adjustment'));
	var FILL_COLOR_SHAPE = adjList.getObjectValue(0).getObjectValue(stringIDToTypeID('color'));

	// Set FILL_COLOR_SHAPE as stroke fill and set width as W
	var idsetd = charIDToTypeID( "setd" );
		var desc = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
			var ref_Target = new ActionReference();
			var idcontentLayer = stringIDToTypeID( "contentLayer" );
			var idOrdn = charIDToTypeID( "Ordn" );
			var idTrgt = charIDToTypeID( "Trgt" );
			ref_Target.putEnumerated( idcontentLayer, idOrdn, idTrgt );
		desc.putReference( idnull, ref_Target );
		var idT = charIDToTypeID( "T   " );
			var desc_idT = new ActionDescriptor();
			var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
				var desc_idstrokeStyle = new ActionDescriptor();
				var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
					var desc_idstrokeStyleContent = new ActionDescriptor();
					var idClr = charIDToTypeID( "Clr " );
					var idRGBC = charIDToTypeID( "RGBC" );
					desc_idstrokeStyleContent.putObject( idClr, idRGBC, FILL_COLOR_SHAPE );
				var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
				desc_idstrokeStyle.putObject( idstrokeStyleContent, idsolidColorLayer, desc_idstrokeStyleContent );
				
				var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc_idstrokeStyle.putUnitDouble( idstrokeStyleLineWidth, idPxl, W );
				
				var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
				desc_idstrokeStyle.putInteger( idstrokeStyleVersion, 2 );
				var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
				desc_idstrokeStyle.putBoolean( idstrokeEnabled, true );
			var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
			desc_idT.putObject( idstrokeStyle, idstrokeStyle, desc_idstrokeStyle );
		var idshapeStyle = stringIDToTypeID( "shapeStyle" );
		desc.putObject( idT, idshapeStyle, desc_idT );
	executeAction( idsetd, desc, DialogModes.NO );
}

var parentSet = app.activeDocument.layerSets[0];
var list_layers = parentSet.artLayers;
var size = list_layers.length;

var W = 1.0;

for (var i=0; i < size; i++){
	app.activeDocument.activeLayer = list_layers[i];
	//alert(app.activeDocument.activeLayer.name);
	if (list_layers[i].kind == LayerKind.SOLIDFILL){		
		correctVB(W);
	}
}