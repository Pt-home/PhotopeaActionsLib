var ref = new ActionReference();
ref.putEnumerated( charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") ); 
var desc = executeActionGet(ref)
var convertDesc = new ActionDescriptor();
convertDesc.putObject( stringIDToTypeID("object"), stringIDToTypeID("object"), desc );
var jsonDesc = executeAction( stringIDToTypeID("convertJSONdescriptor"), convertDesc, DialogModes.NO );
alert(jsonDesc.getString(stringIDToTypeID("json") ));