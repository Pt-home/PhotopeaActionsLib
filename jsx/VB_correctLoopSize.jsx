function correctSize(PLUS) {
	var idTrnf = charIDToTypeID( "Trnf" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref.putEnumerated( idPath, idOrdn, idTrgt );
    desc.putReference( idnull, ref );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
        var desc_Ofst = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_Ofst.putUnitDouble( idHrzn, idPxl, 0.000000 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_Ofst.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc.putObject( idOfst, idOfst, desc_Ofst );
    var idWdth = charIDToTypeID( "Wdth" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idWdth, idPrc, 100.0 + PLUS );
    var idHght = charIDToTypeID( "Hght" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idHght, idPrc, 100.0 + PLUS );
    var idLnkd = charIDToTypeID( "Lnkd" );
    desc.putBoolean( idLnkd, true );
	executeAction( idTrnf, desc, DialogModes.NO );
}

var parentSet = app.activeDocument.layerSets[0];
var list_layers = parentSet.artLayers;
var size = list_layers.length;
var PLUS = 3.0;

for (var i=0; i < size; i++){
	app.activeDocument.activeLayer = list_layers[i];
	//alert(app.activeDocument.activeLayer.name);
	if (list_layers[i].kind == LayerKind.SOLIDFILL){		
		correctSize(PLUS);
	}
}