function correctVB(W, TOL, NUM) {
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
	
	// =====================rasterizeLayer===================
	var idrasterizeLayer = stringIDToTypeID( "rasterizeLayer" );
    var desc_idrasterizeLayer = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref_idnull.putEnumerated( idLyr, idOrdn, idTrgt );
    desc_idrasterizeLayer.putReference( idnull, ref_idnull );
	executeAction( idrasterizeLayer, desc_idrasterizeLayer, DialogModes.NO );

	// ===================Rastr Mask for Transparency===============
    var idMk = charIDToTypeID( "Mk  " );
    var desc_idMk = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var idChnl = charIDToTypeID( "Chnl" );
    desc_idMk.putClass( idNw, idChnl );
    var idAt = charIDToTypeID( "At  " );
        var desc_idAt = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idMsk = charIDToTypeID( "Msk " );
        desc_idAt.putEnumerated( idChnl, idChnl, idMsk );
    desc_idMk.putReference( idAt, desc_idAt );
    var idUsng = charIDToTypeID( "Usng" );
    var idUsrM = charIDToTypeID( "UsrM" );
    var idTrns = charIDToTypeID( "Trns" );
    desc_idMk.putEnumerated( idUsng, idUsrM, idTrns );
    executeAction( idMk, desc_idMk, DialogModes.NO );
	
	// ===================Select from mask==================
    var idsetd = charIDToTypeID( "setd" );
    var desc_idsetd = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref_idnull.putProperty( idChnl, idfsel );
    desc_idsetd.putReference( idnull, ref_idnull );
    var idT = charIDToTypeID( "T   " );
        var ref_idT = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref_idT.putEnumerated( idChnl, idOrdn, idTrgt );
    desc_idsetd.putReference( idT, ref_idT );
    executeAction( idsetd, desc_idsetd, DialogModes.NO );
	
	// =====================Select to Path=================
    var idMk = charIDToTypeID( "Mk  " );
    var desc_idMk = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        ref_idnull.putClass( idPath );
    desc_idMk.putReference( idnull, ref_idnull );
    var idFrom = charIDToTypeID( "From" );
        var ref_idFrom = new ActionReference();
        var idcsel = charIDToTypeID( "csel" );
        var idfsel = charIDToTypeID( "fsel" );
        ref_idFrom.putProperty( idcsel, idfsel );
    desc_idMk.putReference( idFrom, ref_idFrom );
    var idTlrn = charIDToTypeID( "Tlrn" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc_idMk.putUnitDouble( idTlrn, idPxl, TOL );
    executeAction( idMk, desc_idMk, DialogModes.NO );
	
	// =======================================================
	var idslct = charIDToTypeID( "slct" );
    var desc_idslct = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idRGB = charIDToTypeID( "RGB " );
        ref_idnull.putEnumerated( idChnl, idChnl, idRGB );
    desc_idslct.putReference( idnull, ref_idnull );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc_idslct.putBoolean( idMkVs, false );
	executeAction( idslct, desc_idslct, DialogModes.NO );
	
	// ==================Delete activeLayer===============
    var idDlt = charIDToTypeID( "Dlt " );
    var desc_idDlt = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref_idnull.putEnumerated( idLyr, idOrdn, idTrgt );
    desc_idDlt.putReference( idnull, ref_idnull );
    var idLyrI = charIDToTypeID( "LyrI" );
        var list_idLyrI = new ActionList();
        list_idLyrI.putInteger( NUM );
    desc_idDlt.putList( idLyrI, list_idLyrI );
    executeAction( idDlt, desc_idDlt, DialogModes.NO );
	
	// =======================Make Fill Layer=================
    var idMk = charIDToTypeID( "Mk  " );
    var desc_idMk = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref_idnull = new ActionReference();
        var idcontentLayer = stringIDToTypeID( "contentLayer" );
        ref_idnull.putClass( idcontentLayer );
    desc_idMk.putReference( idnull, ref_idnull );
    var idUsng = charIDToTypeID( "Usng" );
        var desc_idUsng = new ActionDescriptor();
        var idType = charIDToTypeID( "Type" );
            var desc_idType = new ActionDescriptor();
            var idClr = charIDToTypeID( "Clr " );                
            var idRGBC = charIDToTypeID( "RGBC" );
            desc_idType.putObject( idClr, idRGBC, FILL_COLOR_SHAPE );
        var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
        desc_idUsng.putObject( idType, idsolidColorLayer, desc_idType );
    var idcontentLayer = stringIDToTypeID( "contentLayer" );
    desc_idMk.putObject( idUsng, idcontentLayer, desc_idUsng );
    executeAction( idMk, desc_idMk, DialogModes.NO );
	
}

//*********************MAIN LOOP****************************
function correctVBLoop(W, TOL){
	var parentSet = app.activeDocument.layerSets[0];
	var list_layers = parentSet.artLayers;
	var size = list_layers.length;
	
	var i = 0;
	while (i < size){
		app.activeDocument.activeLayer = list_layers[i];
		//alert(app.activeDocument.activeLayer.name);
		if (list_layers[i].kind == LayerKind.SOLIDFILL){		
			correctVB(W, TOL, i);
		}
		i++;
	}

	// ======================Move Last Layer Back??==============
	var idmove = charIDToTypeID( "move" );
		var desc_idmove = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
			var ref_idnull = new ActionReference();
			var idLyr = charIDToTypeID( "Lyr " );
			var idOrdn = charIDToTypeID( "Ordn" );
			var idTrgt = charIDToTypeID( "Trgt" );
			ref_idnull.putEnumerated( idLyr, idOrdn, idTrgt );
		desc_idmove.putReference( idnull, ref_idnull );
		var idT = charIDToTypeID( "T   " );
			var ref_idT = new ActionReference();
			var idLyr = charIDToTypeID( "Lyr " );
			var idOrdn = charIDToTypeID( "Ordn" );
			var idBack = charIDToTypeID( "Back" );
			ref_idT.putEnumerated( idLyr, idOrdn, idBack );
		desc_idmove.putReference( idT, ref_idT );
	executeAction( idmove, desc_idmove, DialogModes.NO );
	
}

//==================    MAIN SCRIPT   ========================= 

var strokeWidth = 1.0;
var toleranceSelectToPath = 1.0;

correctVBLoop(strokeWidth, toleranceSelectToPath);