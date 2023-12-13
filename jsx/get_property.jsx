var actionReference = new ActionReference();
//actionReference.putIndex(charIDToTypeID("Сmnd"), 3);
//actionReference.putName(charIDToTypeID("Actn"), "B");
//actionReference.putName(charIDToTypeID("ASet"), "A");

var idcontentLayer = stringIDToTypeID( "contentLayer" );
var idOrdn = charIDToTypeID( "Ordn" );
var idTrgt = charIDToTypeID( "Trgt" );
actionReference.putEnumerated( idcontentLayer, idOrdn, idTrgt );

answer = "";

var actionDescriptor = executeActionGet(actionReference);

answer = "";

var count = actionDescriptor.count;
for (var i = 0; i < count; i++) {
  var key = actionDescriptor.getKey(i);
  var typeID = actionDescriptor.getType(key);
  var value = null;

  // Получение значения свойства
  switch (typeID) {
    case DescValueType.BOOLEANTYPE:
      value = actionDescriptor.getBoolean(key);
      break;
    case DescValueType.DOUBLETYPE:
      value = actionDescriptor.getDouble(key);
      break;
    case DescValueType.INTEGERTYPE:
      value = actionDescriptor.getInteger(key);
      break;
    case DescValueType.STRINGTYPE:
      value = actionDescriptor.getString(key);
      break;
    case DescValueType.LISTTYPE:
      value = actionDescriptor.getList(key);
      break;
    case DescValueType.OBJECTTYPE:
      value = actionDescriptor.getObjectValue(key);
      break;
    case DescValueType.REFERENCETYPE:
      value = actionDescriptor.getReference(key);
      break;
    case DescValueType.ENUMERATEDTYPE:
      value = actionDescriptor.getEnumerationValue(key);
      break;
    case DescValueType.ALIASTYPE:
      value = actionDescriptor.getPath(key);
      break;
    case DescValueType.RAWTYPE:
      value = actionDescriptor.getData(key);
      break;
  }

  // Печать значения свойства
  var keyString = typeIDToCharID(key);
  var typeString = typeID.toString();
  var valueString = (value == null) ? "null" : value.toString();
  answer = answer + "\n" + keyString + "->" + typeString + " = " + value;
}
//alert(answer);
alert(actionDescriptor.toStream());
