var nameActionSet = "A";
var nameAction = "B";
var numberStep = 2;

function doActionStep(nameActionSet, nameAction, numberStep) {
    // =================How many actions in set?=========================
    var actionReference = new ActionReference();
    actionReference.putName(charIDToTypeID("Actn"), nameAction);
    actionReference.putName(charIDToTypeID("ASet"), nameActionSet);
    var actionDescriptor = executeActionGet(actionReference);
    
    var count = actionDescriptor.getInteger(charIDToTypeID("NmbC"));
    //alert(count);
    
    // =========================Copy action============================
    var idDplc = charIDToTypeID( "Dplc" );
        var desc = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref = new ActionReference();
            var idActn = charIDToTypeID( "Actn" );
            ref.putName( idActn, nameAction );
            var idASet = charIDToTypeID( "ASet" );
            ref.putName( idASet,  nameActionSet);
        desc.putReference( idnull, ref );
    executeAction( idDplc, desc, DialogModes.NO );
    
    // =========================Crop action============================
    
    var i = 1;
    var deleter = 1;
    while (count > 1){
    	if (i != numberStep){
    		var idDlt = charIDToTypeID( "Dlt " );
    			var descDlt = new ActionDescriptor();
    			var idnull = charIDToTypeID( "null" );
    				var refDlt = new ActionReference();
    				var idCmnd = charIDToTypeID( "Cmnd" );
    				refDlt.putIndex( idCmnd, deleter );
    				var idActn = charIDToTypeID( "Actn" );
    				refDlt.putName( idActn, nameAction + " copy" );
    				var idASet = charIDToTypeID( "ASet" );
    				refDlt.putName( idASet, nameActionSet );
    			descDlt.putReference( idnull, refDlt );
            executeAction( idDlt, descDlt, DialogModes.NO );
    		
    		count --;
    	} else {
    		deleter = 2;
    	}	
    	i++;
    }
    // =========================Do croped copy=========================
    doAction(nameAction + " copy", nameActionSet);
    
    // =========================Delete copy============================
    var idDlt = charIDToTypeID( "Dlt " );
        var desc = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref = new ActionReference();
            var idActn = charIDToTypeID( "Actn" );
            ref.putName( idActn, nameAction + " copy" );
            var idASet = charIDToTypeID( "ASet" );
            ref.putName( idASet, nameActionSet );
        desc.putReference( idnull, ref );
    executeAction( idDlt, desc, DialogModes.NO );

}