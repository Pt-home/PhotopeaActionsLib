//Version 2023-06-14

////////////////////////////////////FILTRES////////////////////////////////

var filtersDB = {
    "ColourPencil":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "ClrP"],
              "attrs":["Pncl", "StrP", "PprB"]
             },
    "Cutout":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Ct  "],
              "attrs":["NmbL", "EdgS", "EdgF"]
             },
    "DryBrush":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "DryB"],
              "attrs":["BrsS", "BrsD", "Txtr"]
             },
    "FilmGrain":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "FlmG"],
              "attrs":["Grn ", "HghA", "Intn"]
             },
    "Fresco":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Frsc"],
              "attrs":["BrsS", "BrsD", "Txtr"]
             },
    "PaletteKnife":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "PltK"],
              "attrs":["StrS", "StDt", "Sftn"]
             },
    "PlasticWrap":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "PlsW"],
              "attrs":["HghS", "Dtl ", "Smth"]
             },
    "PosterEdges":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "PstE"],
              "attrs":["EdgT", "EdgI", "Pstr"]
             },
    "Watercolor":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Wtrc"],
              "attrs":["BrsD", "ShdI", "Txtr"]
             },
    "GlowingEdges":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "GlwE"],
              "attrs":["EdgW", "EdgB", "Smth"]
             },
    "DiffuseGlow":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "DfsG"],
              "attrs":["Grns", "GlwA", "ClrA"]
             },
    "OceanRipple":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "OcnR"],
              "attrs":["RplS", "RplM"]
             },
    "Craquelure":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Crql"],
              "attrs":["CrcS", "CrcD", "CrcB"]
             },
    "MosaicTiles":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "MscT"],
              "attrs":["TlSz", "GrtW", "LghG"]
             },
    "Patchwork":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Ptch"],
              "attrs":["SqrS", "Rlf "]
             },
    "StainedGlass":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "StnG"],
              "attrs":["ClSz", "BrdT", "LghI"]
             },
    "AccentedEdges":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "AccE"],
              "attrs":["EdgW", "EdgB", "Smth"]
             },
    "AngledStrokes":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "AngS"],
              "attrs":["DrcB", "StrL", "Shrp"]
             },
    "Crosshatch":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Crsh"],
              "attrs":["StrL", "Shrp", "Strg"]
             },
    "DarkStrokes":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "DrkS"],
              "attrs":["Blnc", "BlcI", "WhtI"]
             },
    "InkOutlines":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "InkO"],
              "attrs":["StrL", "DrkI", "LghI"]
             },
    "Spatter":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Spt "],
              "attrs":["SprR", "Smth"]
             },
    "Sumi_e":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Smie"],
              "attrs":["StrW", "StrP", "Cntr"]
             },
    "ChalkAndCharcoal":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "ChlC"],
              "attrs":["ChrA", "ChlA", "StrP"]
             },
    "Charcoal":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Chrc"],
              "attrs":["ChAm", "Dtl ", "LgDr"]
             },
    "Chrome":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Chrm"],
              "attrs":["Dtl ", "Smth"]
             },
    "NotePaper":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "NtPr"],
              "attrs":["ImgB", "Grns", "Rlf "]
             },
    "Photocopy":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Phtc"],
              "attrs":["Dtl ", "Drkn"]
             },
    "Reticulation":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Rtcl"],
              "attrs":["Dnst", "BlcL", "WhtL"]
             },
    "Stamp":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Stmp"],
              "attrs":["LgDr", "Smth"]
             },
    "TornEdges":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "TrnE"],
              "attrs":["ImgB", "Smth", "Cntr"]
             },
    "WaterPaper":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "WtrP"],
              "attrs":["FbrL", "Brgh", "Cntr"]
             },
    "SmudgeStick":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "SmdS"],
              "attrs":["StrL", "HghA", "Intn"]
             },
    "Sponge":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Spng"],
              "attrs":["BrsS", "Dfnt", "Smth"]
             },
    "PaintDaubs":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "PntD"],
              "attrs":["Sz  ", "Shrp", "BrsT+BrsT"]
             },
    "SprayedStrokes":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "SprS"],
              "attrs":["StrL", "SprR", "SDir+StrD"]
             },
    "BasRelief":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "BsRl"],
              "attrs":["Dtl ", "Smth", "LghD+LghD"]
             },
    "GraphicPen":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "GraP"],
              "attrs":["StrL", "LgDr", "SDir+StrD"]
             },
    "HalftonePattern":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "HlfS"],
              "attrs":["HlSz", "Cntr", "ScrT+ScrT"]
             },
    "Plaster":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Plst"],
              "attrs":["ImgB", "Smth", "LghP+LghP"]
             },
    "Grain":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Grn "],
              "attrs":["Intn", "Cntr", "Grnt+Grnt"]
             },
    "RoughPastels":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "RghP"],
              "attrs":["StrL", "StDt", "TxtT+TxtT", "Scln", "Rlf ", "LghD+LghD", "InvT"]
             },
    "Underpainting":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Undr"],
              "attrs":["BrsS", "TxtC", "TxtT+TxtT", "Scln", "Rlf ", "LghD+LghD", "InvT"]
             },
    "Glass":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Gls "],
              "attrs":["Dstr", "Smth", "TxtT+TxtT", "Scln", "InvT"]
             },
    "ConteCrayon":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "CntC"],
              "attrs":["FrgL", "BckL", "TxtT+TxtT", "Scln", "Rlf ", "LghD+LghD", "InvT"]
             },
    "Texturizer":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "Txtz"],
              "attrs":["TxtT+TxtT", "Scln", "Rlf ", "LghD+LghD", "InvT"]
             },
    "NeonGlow":{
              "action":"GEfc",
              "eFGal":["GEfk", "GEft", "NGlw"],
              "attrs":["Sz  ", "Brgh", "Clr "]
             },    
    "SharpenEdges":{
              "action":"ShrE",
              "eFGal":[],
              "attrs":[]
             },
    "FindEdges":{
              "action":"FndE",
              "eFGal":[],
              "attrs":[]
             },
    "Solarize":{
              "action":"Slrz",
              "eFGal":[],
              "attrs":[]
             },
    "Despeckle":{
              "action":"Dspc",
              "eFGal":[],
              "attrs":[]
             },
    "Fragment":{
              "action":"Frgm",
              "eFGal":[],
              "attrs":[]
             },
    "Average":{
              "action":"Avrg",
              "eFGal":[],
              "attrs":[]
             },
    "Blur":{
              "action":"Blr ",
              "eFGal":[],
              "attrs":[]
             },
    "BlurMore":{
              "action":"BlrM",
              "eFGal":[],
              "attrs":[]
             },
    "Sharpen":{
              "action":"Shrp",
              "eFGal":[],
              "attrs":[]
             },
    "SharpenMore":{
              "action":"ShrM",
              "eFGal":[],
              "attrs":[]
             },
    "Clouds":{
              "action":"Clds",
              "eFGal":[],
              "attrs":[]
             },
    "DifferenceClouds":{
              "action":"DfrC",
              "eFGal":[],
              "attrs":[]
             },
    "Crystallize":{
              "action":"Crst",
              "eFGal":[],
              "attrs":["ClSz"]
             },
    "Pointillize":{
              "action":"Pntl",
              "eFGal":[],
              "attrs":["ClSz"]
             },
    "Twirl":{
              "action":"Twrl",
              "eFGal":[],
              "attrs":["Angl"]
             },
    "Pinch":{
              "action":"Pnch",
              "eFGal":[],
              "attrs":["Amnt"]
             },
    "DustAndScratches":{
              "action":"DstS",
              "eFGal":[],
              "attrs":["Rds ", "Thsh"]
             },
    "Emboss":{
              "action":"Embs",
              "eFGal":[],
              "attrs":["Angl", "Hght", "Amnt"]
             },
    "ColorHalftone":{
              "action":"ClrH",
              "eFGal":[],
              "attrs":["Rds ", "Ang1", "Ang2", "Ang3", "Ang4"]
             },
    "GaussianBlur":{
              "action":"GsnB",
              "eFGal":[],
              "attrs":["Rds #Pxl"]
             },
    "SurfaceBlur":{
              "action":"surfaceBlur",
              "eFGal":[],
              "attrs":["Rds #Pxl", "Thsh"]
             },
    "Median":{
              "action":"Mdn ",
              "eFGal":[],
              "attrs":["Rds #Pxl"]
             },
    "Mosaic":{
              "action":"Msc ",
              "eFGal":[],
              "attrs":["ClSz#Pxl"]
             },
    "HighPass":{
              "action":"HghP",
              "eFGal":[],
              "attrs":["Rds #Pxl"]
             },
    "UnsharpMask":{
              "action":"UnsM",
              "eFGal":[],
              "attrs":["Amnt#Prc", "Rds #Pxl", "Thsh"]
             },
    "BoxBlur":{
              "action":"boxblur",
              "eFGal":[],
              "attrs":["Rds #Pxl"]
             },
    "MotionBlur":{
              "action":"MtnB",
              "eFGal":[],
              "attrs":["Angl", "Dstn#Pxl"]
             },
    "PolarCoordinates":{
              "action":"Plr ",
              "eFGal":[],
              "attrs":["Cnvr+Cnvr"]
             },
    "Ripple":{
              "action":"Rple",
              "eFGal":[],
              "attrs":["Amnt", "RplS+RplS"]
             },
    "Spherize":{
              "action":"Sphr",
              "eFGal":[],
              "attrs":["Amnt", "SphM+SphM"]
             },
    "ZigZag":{
              "action":"ZgZg",
              "eFGal":[],
              "attrs":["Amnt", "NmbR", "ZZTy+ZZTy"]
             },
    "AddNoise":{
              "action":"AdNs",
              "eFGal":[],
              "attrs":["Dstr+Dstr", "Nose#Prc", "Mnch", "FlRs"]
             },
    "Mezzotint":{
              "action":"Mztn",
              "eFGal":[],
              "attrs":["MztT+MztT"]
             },
    "Fibers":{
              "action":"Fbrs",
              "eFGal":[],
              "attrs":["Vrnc", "Strg", "RndS"]
             },
    "Diffuse":{
              "action":"Dfs ",
              "eFGal":[],
              "attrs":["Md  +DfsM", "FlRs"]
             },
    "TraceContour":{
              "action":"TrcC",
              "eFGal":[],
              "attrs":["Lvl ", "Edg +CntE"]
             },
    "Wind":{
              "action":"Wnd ",
              "eFGal":[],
              "attrs":["WndM+WndM", "Drct+Drct"]
             },
    "Offset":{
              "action":"Ofst",
              "eFGal":[],
              "attrs":["Hrzn", "Vrtc", "Fl  +FlMd"]
             },
    "RadialBlur":{
              "action":"RdlB",
              "eFGal":[],
              "attrs":["Amnt", "BlrM+BlrM", "Cntr"]
             },
    "LensFlare":{
              "action":"LnsF",
              "eFGal":[],
              "attrs":["Brgh", "FlrC", "Lns +Lns "]
             },
    "OilPaint":{
              "action":"oilPaint",
              "eFGal":[],
              "attrs":[]
             },
    "Minimum":{
              "action":"Mnm ",
              "eFGal":[],
              "attrs":[]
             },
    "Maximum":{
              "action":"Mxm ",
              "eFGal":[],
              "attrs":[]
             },
    "Wave":{
              "action":"Wave",
              "eFGal":[],
              "attrs":["Wvtp+Wvtp", "NmbG", "WLMn", "WLMx", "AmMn", "AmMx", "SclH", "SclV", "UndA+UndA", "RndS"]
             },
    "FourierTransform":{
              "action":"dDFT",
              "eFGal":[],
              "attrs":[]
             },
    "InverseFourierTransform":{
              "action":"iDFT",
              "eFGal":[],
              "attrs":[]
             },
    "Kaleidoscope":{
              "action":"Kale",
              "eFGal":[],
              "attrs":["Mirr", "MRot"]
             },
    "ColorToAlpha":{
              "action":"Ctoa",
              "eFGal":[],
              "attrs":["Trsp#Prc", "Opct#Prc", "Clr "]
             },
    "Shear":{
              "action":"Shr ",
              "eFGal":[],
              "attrs":[]
             },
    "NormalMap":{
              "action":"lightFilterGradient",
              "eFGal":[],
              "attrs":["blur", "textureScale", "Scl ", "Dtl "]
             },
    "SmartSharpen": {
              "action":   "smartSharpen",
              "eFGal":[],
              "attrs": ["Amnt#Prc", "Rds #Pxl"]
             },
    "Repeat": {
              "action":   "Rept",
              "eFGal":[],
              "attrs": ["Scl #Prc", "Rsft#Prc", "SpcX#Prc", "SpcY#Prc", "SpcC", "Angl"]
             },
    "Dither": {
              "action":   "Dthr",
              "eFGal":[],
              "attrs": ["Plte", "Mthd"]
             },
    "Particles": {
              "action":   "Part",
              "eFGal":[],
              "attrs": ["Cont", "Size", "Dpth", "Brgh", "Clr ", "Time", "Turb", "Blnk", "Fall", "RndS"]
             },
    "ReduceNoise": {
              "action":   "denoise",
              "eFGal":[],
              "attrs": ["ClNs#Prc", "Shrp#Prc", "removeJPEGArtifact", "Amnt", "EdgF"]
             },
    "CameraRaw": {
              "action":   "Adobe Camera Raw Filter",
              "eFGal":[],
              "attrs": ["Temp", "Tint", "Ex12", "Cr12", "Vibr", "Strt"]
             },
    "HSB/HSL": {
              "action":   "HsbP",
              "eFGal":[],
              "attrs": ["Inpt+ClrS", "Otpt+ClrS"]
             },
    "LensBlur": {
              "action":   "Bokh",
              "eFGal":[],
              "attrs": ["BkDi+BtDi", "BkDc+BtDc", "BkDp", "BkDs","BkIs+BtIs", "BkIb", "BkIc", "BkIr", "BkSb", "BkSt", "BkNa", "BkNt+BtNt", "BkNm"]
             },
    "LensCorrection": {
              "action":   "LnCr",
              "eFGal":[],
              "attrs": ["LnIa", "LnSi"]
             },
    "TextureDilation": {
              "action":   "Dila",
              "eFGal":[],
              "attrs": ["Crop#Pxl", "Rds #Pxl"]
             }
    
};

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function applyReduceDenoise(arr){
  var iddenoise = stringIDToTypeID( "denoise" );
    var desc = new ActionDescriptor();
    var idClNs = charIDToTypeID( "ClNs" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idClNs, idPrc, arr[0] );
    var idShrp = charIDToTypeID( "Shrp" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idShrp, idPrc, arr[1] );
    var idremoveJPEGArtifact = stringIDToTypeID( "removeJPEGArtifact" );
    desc.putBoolean( idremoveJPEGArtifact, arr[2] );
    var idchannelDenoise = stringIDToTypeID( "channelDenoise" );
        var list_channelDenoise = new ActionList();
            var desc_channelDenoise = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref_idChannel = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idCmps = charIDToTypeID( "Cmps" );
                ref_idChannel.putEnumerated( idChnl, idChnl, idCmps );
            desc_channelDenoise.putReference( idChnl, ref_idChannel );
            var idAmnt = charIDToTypeID( "Amnt" );
            desc_channelDenoise.putInteger( idAmnt, arr[3] );
            var idEdgF = charIDToTypeID( "EdgF" );
            desc_channelDenoise.putInteger( idEdgF, arr[4] );
        var idchannelDenoiseParams = stringIDToTypeID( "channelDenoiseParams" );
        list_channelDenoise.putObject( idchannelDenoiseParams, desc_channelDenoise );
            var desc_channelDenoise = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref_idChannel = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idRd = charIDToTypeID( "Rd  " );
                ref_idChannel.putEnumerated( idChnl, idChnl, idRd );
            desc_channelDenoise.putReference( idChnl, ref_idChannel );
            var idAmnt = charIDToTypeID( "Amnt" );
            desc_channelDenoise.putInteger( idAmnt, 0 );
        var idchannelDenoiseParams = stringIDToTypeID( "channelDenoiseParams" );
        list_channelDenoise.putObject( idchannelDenoiseParams, desc_channelDenoise );
            var desc_channelDenoise = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref_idChannel = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idGrn = charIDToTypeID( "Grn " );
                ref_idChannel.putEnumerated( idChnl, idChnl, idGrn );
            desc_channelDenoise.putReference( idChnl, ref_idChannel );
            var idAmnt = charIDToTypeID( "Amnt" );
            desc_channelDenoise.putInteger( idAmnt, 0 );
        var idchannelDenoiseParams = stringIDToTypeID( "channelDenoiseParams" );
        list_channelDenoise.putObject( idchannelDenoiseParams, desc_channelDenoise );
            var desc_channelDenoise = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref_idChannel = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idBl = charIDToTypeID( "Bl  " );
                ref_idChannel.putEnumerated( idChnl, idChnl, idBl );
            desc_channelDenoise.putReference( idChnl, ref_idChannel );
            var idAmnt = charIDToTypeID( "Amnt" );
            desc_channelDenoise.putInteger( idAmnt, 0 );
        var idchannelDenoiseParams = stringIDToTypeID( "channelDenoiseParams" );
        list_channelDenoise.putObject( idchannelDenoiseParams, desc_channelDenoise );
    desc.putList( idchannelDenoise, list_channelDenoise );
    var idpreset = stringIDToTypeID( "preset" );
    desc.putString( idpreset, "Default" );
executeAction( iddenoise, desc, DialogModes.NO );
}

function applyOilPaint(arr) {
    var idOP = stringIDToTypeID( "oilPaint" );
    var descOP = new ActionDescriptor();
    var idlightingOn = stringIDToTypeID( "lightingOn" );
    descOP.putBoolean( idlightingOn, arr[4] );
    var idstylization = stringIDToTypeID( "stylization" );
    descOP.putDouble( idstylization, arr[0] );
    var idbrushScale = stringIDToTypeID( "brushScale" );
    descOP.putDouble( idbrushScale,  arr[2] );
    var idmicroBrush = stringIDToTypeID( "microBrush" );
    descOP.putDouble( idmicroBrush,  arr[3]  );
    var idLghD = charIDToTypeID( "LghD" );
    descOP.putInteger( idLghD, arr[6] );
    var idspecularity = stringIDToTypeID( "specularity" );
    descOP.putDouble( idspecularity, arr[5] );
    var idcleanliness = stringIDToTypeID( "cleanliness" );
    descOP.putDouble( idcleanliness, arr[1] );

    executeAction( idOP, descOP, DialogModes.NO );
}

function applyMinMax(action, arr) {
    
    var idMM = charIDToTypeID( action );
    var descMM = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    descMM.putUnitDouble( idRds, idPxl, arr[0] );
    var idpreserveShape = stringIDToTypeID( "preserveShape" );
    var idpreserveShape = stringIDToTypeID( "preserveShape" );
    if (arr[1] == "Rndn"){
       var idpS = charIDToTypeID( "Rndn" );
    } else {
       var idpS = stringIDToTypeID( "squareness" );
    }
    descMM.putEnumerated( idpreserveShape, idpreserveShape, idpS );
    
    executeAction( idMM, descMM, DialogModes.NO );
}

function applyShear(arr){
  var idShr = charIDToTypeID( "Shr " );
  var desc = new ActionDescriptor();
    
    var idShrP = charIDToTypeID( "ShrP" );
    var listW = new ActionList();
    var idPnt = charIDToTypeID( "Pnt " );
    for (var p = 0; p < arr[0].length; p++){
        var desc1 = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        desc1.putDouble( idHrzn, arr[0][p][0] );
        var idVrtc = charIDToTypeID( "Vrtc" );
        desc1.putDouble( idVrtc, arr[0][p][1] );
        listW.putObject( idPnt, desc1 );
    }
    desc.putList( idShrP, listW );
  
    var idShrS = charIDToTypeID( "ShrS" );
    desc.putInteger( idShrS, 0 );
    var idShrE = charIDToTypeID( "ShrE" );
    desc.putInteger( idShrE, arr[0].length - 1);
    
    var idUndA = charIDToTypeID( "UndA" );
    var idUndA = charIDToTypeID( "UndA" );
    var idWrpA = charIDToTypeID( arr[1] );
    desc.putEnumerated( idUndA, idUndA, idWrpA );
    
  executeAction( idShr, desc, DialogModes.NO );  
  
}
  
function applyPPFilter(filterName, arr) {

    dict = filtersDB[filterName];

    if (dict.action == "denoise"){
      applyReduceDenoise(arr);
      return;
    }

    if (dict.action == "oilPaint"){
      applyOilPaint(arr);
      return;
    }

    if (dict.action == "Mxm " || dict.action == "Mnm ") {
      applyMinMax(dict.action, arr);
      return;
    }

    if (dict.action == "Shr "){
      applyShear(arr);
      return;
    }
  
    if (dict.action.length == 4) {
        var idAction = charIDToTypeID( dict.action );
    } else {
        var idAction = stringIDToTypeID( dict.action );
    }
  
    var desc = new ActionDescriptor(); 
  
    if (dict.eFGal.length == 3) {
        var e0 = charIDToTypeID( dict.eFGal[0] );
        var e1 = charIDToTypeID( dict.eFGal[1] );
        var e2 = charIDToTypeID( dict.eFGal[2] );
        desc.putEnumerated(e0, e1, e2);
    }

    for (var k = 0; k < dict.attrs.length; k++) {
      
      if (dict.attrs[k] == "FlRs" || dict.attrs[k] == "RndS") {
        var v = Date.now();
      } else {
        var v = arr[k];
      }

      if (dict.attrs[k] == "Clr ") {

        var idClr = charIDToTypeID( "Clr " );
        var descClr = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        descClr.putDouble( idRd,  v[0] );
        var idGrn = charIDToTypeID( "Grn " );
        descClr.putDouble( idGrn, v[1] );
        var idBl = charIDToTypeID( "Bl  " );
        descClr.putDouble( idBl,  v[2] );
        var idRGBC = charIDToTypeID( "RGBC" );
        desc.putObject( idClr, idRGBC, descClr );
        
      } else if (dict.action == "lightFilterGradient"  && dict.attrs[k] == "Dtl " ) {

        var idDtl = charIDToTypeID( "Dtl " );
        var list1 = new ActionList();
        list1.putDouble( v[0] );
        list1.putDouble( v[1] );
        list1.putDouble( v[2] );
        desc.putList( idDtl, list1 );        
        
      } else if ((dict.attrs[k] == "Cntr" && dict.action == "RdlB" ) || dict.attrs[k] == "FlrC") {
        
        var idCntr = charIDToTypeID( dict.attrs[k] );
        var descPnt = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        descPnt.putDouble( idHrzn,  v[0] );
        var idVrtc = charIDToTypeID( "Vrtc" );
        descPnt.putDouble( idVrtc,  v[1] );
        var idPnt  = charIDToTypeID( "Pnt " );
        desc.putObject( idCntr, idPnt, descPnt ); 
        
      } else if (dict.attrs[k].indexOf("#") != -1)  {
        
        var pair =  dict.attrs[k].split("#");       
        var e_arg1 = charIDToTypeID( pair[0]);
        var e_arg2 = charIDToTypeID( pair[1]);
        desc.putUnitDouble( e_arg1, e_arg2, v );
        
      } else if (dict.attrs[k].indexOf("+") != -1)  {
        
        var pair =  dict.attrs[k].split("+");       
        var e_arg1 = charIDToTypeID( pair[0]);
        var e_arg2 = charIDToTypeID( pair[1]);
        desc.putEnumerated( e_arg1, e_arg2, v );
        
      } else {
        
        var e = charIDToTypeID( dict.attrs[k] );
        
        if (Number.isInteger(v)) {
           desc.putInteger( e, v )
        } else if (isFloat(v)) {
           desc.putDouble( e, v )
        } else {
           desc.putBoolean( e, v )
        }
        
      } 
      
    }
 
    executeAction( idAction, desc, DialogModes.NO );
}

//applyPPFilter("ColourPencil", [4, 8, 25]);
//applyPPFilter("Cutout", [5, 2, 4]);
//applyPPFilter("DryBrush", [8, 7, 2]);
//applyPPFilter("FilmGrain", [4, 0, 10]);
//applyPPFilter("Fresco", [2, 8, 1]);
//applyPPFilter("PaletteKnife", [25, 3, 0]);
//applyPPFilter("PlasticWrap", [15, 9, 7]);
//applyPPFilter("PosterEdges", [3, 2, 1]);
//applyPPFilter("Watercolor", [9, 1, 1]);
//applyPPFilter("GlowingEdges", [1, 16, 15]);
//applyPPFilter("DiffuseGlow", [6, 16, 15]);
//applyPPFilter("OceanRipple", [9, 9]);
//applyPPFilter("Craquelure", [15, 6, 9]);
//applyPPFilter("MosaicTiles", [55, 8, 5]);
//applyPPFilter("Patchwork", [9, 9]);
//applyPPFilter("StainedGlass", [24, 4, 3]);
//applyPPFilter("AccentedEdges", [2, 30, 5]);
//applyPPFilter("AngledStrokes", [2, 30, 5]);
//applyPPFilter("Crosshatch", [9, 6, 1]);
//applyPPFilter("DarkStrokes", [5, 6, 2]);
//applyPPFilter("InkOutlines", [4, 14, 12]);
//applyPPFilter("Sumi_e", [5, 4, 5]);
//applyPPFilter("ChalkAndCharcoal", [6, 6, 1]);
//applyPPFilter("Charcoal", [1, 5, 50]);
//applyPPFilter("Chrome", [7, 4]);
//applyPPFilter("NotePaper", [22, 10, 11]);
//applyPPFilter("Photocopy", [2, 2]);
//applyPPFilter("Reticulation", [12, 40, 5]);
//applyPPFilter("Stamp", [7, 4]);
//applyPPFilter("TornEdges", [25, 11, 17]);
//applyPPFilter("WaterPaper", [15, 60, 80]);
//applyPPFilter("SmudgeStick", [2, 0, 10]);
//applyPPFilter("Sponge", [2, 12, 5]);
//applyPPFilter("Spatter", [10, 5]);
//applyPPFilter("SprayedStrokes", [10, 5, "SDRD"]);//"SDRD", "SDHz", "SDLD", "SDVt"
//applyPPFilter("PaintDaubs", [8, 7, "BrSm"]); //"BrSm", "BrsL", "BrDR", "BrsW", "BrbW", "BrSp"
//applyPPFilter("Spatter", [10, 5, "SDHz"]); //"SDRD", "SDHz", "SDLD", "SDVt"
//applyPPFilter("BasRelief", [13, 3, "LDBt"]); //"LDBt", "LDBL", "LDLf", "LDTL", "LDTp", "LDTR", "LDRg", "LDBR"
//applyPPFilter("GraphicPen", [15, 50, "SDRD"]); //"SDRD", "SDHz", "SDLD", "SDVt"
//applyPPFilter("HalftonePattern", [1, 5, "ScrD"]); // "ScrC", "ScrD", "ScrL"
//applyPPFilter("Plaster", [20, 2, "LPLf"]); // "LPBt", "LPBL", "LPLf", "LPTL", "LPTp", "LPTR", "LPRg", "LPBR"
//applyPPFilter("Grain", [40, 50, "GrnR"]); //"GrnR", "GrSf", "GrSr", "GrnC", "GrCn", "GrnE", "GrSt", "GrnH", "GrnV", "GrSp"
//applyPPFilter("RoughPastels", [6, 4, "TxCa", 100, 20, "LDBt", false]); //"TxBl", "TxCa TxFr", "TxTL", "TxBr", "TxBu", "TxSt" // "LDBt", "LDBL", "LDLf", "LDTL", "LDTp", "LDTR", "LDRg", "LDBR"
//applyPPFilter("Underpainting", [6, 4, "TxCa", 100, 20, "LDBt", true]); //"TxBl", "TxCa TxFr", "TxTL", "TxBr", "TxBu", "TxSt" // "LDBt", "LDBL", "LDLf", "LDTL", "LDTp", "LDTR", "LDRg", "LDBR"
//applyPPFilter("Glass", [6, 4, "TxCa", 100, true]); //"TxBl", "TxCa TxFr", "TxTL", "TxBr", "TxBu", "TxSt"
//applyPPFilter("ConteCrayon", [11, 7, "TxCa", 100, 20, "LDBt", false]); //"TxBl", "TxCa TxFr", "TxTL", "TxBr", "TxBu", "TxSt" // "LDBt", "LDBL", "LDLf", "LDTL", "LDTp", "LDTR", "LDRg", "LDBR"
//applyPPFilter("Texturizer", ["TxCa", 100, 20, "LDBt", true]); //"TxBl", "TxCa TxFr", "TxTL", "TxBr", "TxBu", "TxSt" // "LDBt", "LDBL", "LDLf", "LDTL", "LDTp", "LDTR", "LDRg", "LDBR"
//applyPPFilter("NeonGlow", [-15, 15, [255.0, 128.0, 0.0] ]); //[255.0, 128.0, 0.0] - RGB color


//applyPPFilter("SharpenEdges");
//applyPPFilter("FindEdges");
//applyPPFilter("Solarize");
//applyPPFilter("Despeckle");
//applyPPFilter("Fragment");
//applyPPFilter("Average");
//applyPPFilter("Blur");
//applyPPFilter("BlurMore");
//applyPPFilter("Sharpen");
//applyPPFilter("SharpenMore");
//applyPPFilter("Clouds");
//applyPPFilter("DifferenceClouds");
//applyPPFilter("Crystallize", [10]);
//applyPPFilter("Pointillize", [20]);
//applyPPFilter("Twirl", [-20]);
//applyPPFilter("Pinch", [20]);
//applyPPFilter("DustAndScratches", [10, 20]);
//applyPPFilter("Emboss", [2, 10, 15]);
//applyPPFilter("ColorHalftone", [2, 10, 15, 105, 45]);
//applyPPFilter("GaussianBlur", [20.0]);
//applyPPFilter("SurfaceBlur", [75.0, 150]);
//applyPPFilter("Median", [10.0]);
//applyPPFilter("Mosaic", [10.0]);
//applyPPFilter("HighPass", [10.0]);
//applyPPFilter("UnsharpMask", [100.0, 4.0, 20]);
//applyPPFilter("BoxBlur", [10.0]);
//applyPPFilter("MotionBlur", [-45, 20.0]);
//applyPPFilter("PolarCoordinates", ["RctP"]);//"RctP", "PlrR"
//applyPPFilter("Ripple", [100, "Mdm"]);//"Sml", "Mdm", "Lrg"
//applyPPFilter("Spherize", [50, "Nrml"]);//"Nrml", "HrzO", "VrtO"
//applyPPFilter("ZigZag", [-20, 50, "ArnC"]);//"ArnC", "OtFr", "PndR"
//applyPPFilter("AddNoise", ["Unfr", 50, true]);//"Gsn", "Unfr"
//applyPPFilter("Mezzotint", ["FnDt"]);//"FnDt", "MdmD", "GrnD", "CrsD", "ShrL", "MdmL", "LngL", "ShSt", "MdmS", "LngS"
//applyPPFilter("Fibers", [10, 20]);
//applyPPFilter("Diffuse", ["anisotropic"]);//"Nrml", "DrkO", "LghO", "anisotropic"
//applyPPFilter("TraceContour", [100, "Lwr"]);//"Lwr", "Upr"
//applyPPFilter("Wind", ["Wnd", "Left"]);//"Wnd", "Blst", "Stgr"//"Left", "Rght"
//applyPPFilter("Offset", [500, -600, "Rpt"]);//"Rpt", "Bckg", "Wrp"
//applyPPFilter("RadialBlur", [50, "Zm", [0.5, 0.5] ]);//"Spn", "Zm"////[0.5, 0.5] - point of center, x and y as 0.0...1.0 
//applyPPFilter("LensFlare", [10, [0.5, 0.5],  "Nkn1"]);//[0.5, 0.5] - point of center, x and y as 0.0...1.0//"Zm", "Nkn", "Nkn1", "PnVs"
//applyPPFilter("OilPaint", [1.0, 2.0, 3.0, 4.0, true, 5.0, 45]);
//applyPPFilter("Minimum", [10.0, "squareness"]);//"squareness", "Rndn"
//applyPPFilter("Maximum", [10.0, "Rndn"]);//"squareness", "Rndn"
//applyPPFilter("Wave", ["WvSn", 3, 90, 180, 3, 80, 80, 70, "WrpA"]);//"WvSn", "WvTr", "WvSq"//"WrpA", "RptE"
//applyPPFilter("FourierTransform");
//applyPPFilter("InverseFourierTransform");
//applyPPFilter("Kaleidoscope", [3, 30]);
//applyPPFilter("ColorToAlpha", [50.0, 60.0, [0.0, 0.0, 0.0] ]);//[255.0, 128.0, 0.0] - RGB color
//applyPPFilter("Shear", [  [ [0,0], [10, 45], [-20, 90], [0, 128] ], "WrpA"  ]); // [ [x1,y1], [x2, y2], [x3, y3], ... ] - list of points //"WrpA", "RptE" 
//applyPPFilter("NormalMap", [0.1, 1.0, -1.0, [0.75, 0.75, 0.75]]);//2-d parametr: percents, 0.0...2.0, 3-d parametr: 1.0 (Inverse) or -1.0 (no Inverse, last list: percents, 0.0...1.0
//applyPPFilter("SmartSharpen", [210.0,  21.0]);
//applyPPFilter("Repeat", [50.0,  -50.0, 20.0, 0.0, true, 60]);
//applyPPFilter("Dither", [1,  1]); //Palette: 0-3, method: 0-2
//applyPPFilter("Particles", [10, 8, 100, 800, [255.0, 128.0, 0.0], 0.2, 15, true, true]); //[255.0, 128.0, 0.0] - RGB color
//applyPPFilter("ReduceNoise", [5.0,  10.0, true, 50, 15]);//As in PhotoShop: Reduce color noise and Sharpen details - percents, remove JPEG Artifact - true/false, Strength and Preserve details - integer (two last parametrs you see in Photopea)

//applyPPFilter("CameraRaw", [10, 20, -0.5, 10, -25, 10]);
//applyPPFilter("HSB/HSL", ["RGBC", "HSLC"]);

//applyPPFilter("LensBlur", ["BeIn", "BeCm", 0, false, "BeS3", 10.0, 20, 30, 40.0, 50, 60, "BeNu", true]);
//applyPPFilter("LensBlur", ["BeIt", "BeCm", 10, true, "BeS6", 20.0, 30, 40, 50.0, 60, 70, "BeNg", false]);
//applyPPFilter("LensBlur", ["BeIt", "BeCt", 10, false, "BeS8", 20.0, 30, 40, 50.0, 60, 70, "BeNg", false]);
//applyPPFilter("LensCorrection", [15, 85]); 

//applyPPFilter("TextureDilation", [5, 1]); //CHECKED

////////////////////////////////////ACTIONS////////////////////////////////


var actionsDB = {
    "Invert": {
              "action":   "Invr",
              "attrs":    [],
              "defaults": []
             },
    "Desaturate": {
              "action":   "Dstt",
              "attrs":    [],
              "defaults": []
             },
    "AutoTone": {
              "action":   "Lvls",
              "attrs":    ["Auto"],
              "defaults": [true]
             },
    "AutoContrast": {
              "action":   "Lvls",
              "attrs":    ["AuCo"],
              "defaults": [true]
             },
    "AutoColor": {
              "action":   "Lvls",
              "attrs":    ["autoBlackWhite", "autoNeutrals"],
              "defaults": [true,              true]
             },
    "BrightnessContrast": {
              "action":   "BrgC",
              "attrs":    ["Brgh", "Cntr", "useLegacy"],
              "defaults": [-25,     25,     false]
             },
    "Vibrance": {
              "action":   "vibrance",
              "attrs":    ["vibrance", "Strt"],
              "defaults": [-75,        40]
             },
    "Posterize": {
              "action":   "Pstr",
              "attrs":    ["Lvls"],
              "defaults": [4]
             },
    "Threshold": {
              "action":   "Thrs",
              "attrs":    ["Lvl "],
              "defaults": [127]
             },
    "BlackAndWhite": {
              "action":   "BanW",
              "attrs":    ["presetKind+presetKindType","Rd  ","Yllw","Grn ","Cyn ","Bl  ","Mgnt", "useTint", "tintColor"],
              "defaults": ["presetKindCustom",         40,    85,    204,   60,    20,     80,     true,      [112.0,66.0,20.0]]
             },
    "PhotoFilter": {
              "action":   "photoFilter",
              "attrs":    ["Clr ",               "Dnst", "PrsL"],
              "defaults": [[112.0, 66.0, 20.0],  50,      true]
             },
    "Exposure": {
              "action":   "Exps",
              "attrs":    ["presetKind+presetKindType", "Exps", "Ofst", "gammaCorrection"],
              "defaults": ["presetKindCustom",          0.1,    -0.05,  1.3]
             },
    "MatchColor": {
              "action":   "matchColor",
              "attrs":    ["Lght", "ClrR", "Fade", "neutralizeColor", "fsel", "noReference"],
              "defaults": [120,    100,    0,      false,             true,   true]
             },
    "ColorBalance": {
              "action":   "ClrB",
              "attrs":    ["ShdL",     "MdtL",     "HghL",     "PrsL"],
              "defaults": [[10,0,-10], [10,0,-10], [-10,0,10], false]
             },
    "HueSaturation": {
              "action":   "HStr",
              "attrs":    ["presetKind+presetKindType", "Clrz", "Adjs"],
              "defaults": ["presetKindCustom",          false,   [-30,  50, -30]]
             },
    "Crop": {
              "action":   "crop",
              "attrs":    ["Dlt "],
              "defaults": [true]
             },
    "Trim": {
              "action":   "trim",
              "attrs":    ["trimBasedOn+trimBasedOn", "Top ", "Btom", "Left", "Rght"],
              "defaults": ["Trns",                    true,   true,   true,   true]
             },
    "Fade": {
              "action":   "fade",
              "attrs":    ["Opct#Prc", "Md  +BlnM"],
              "defaults": [50.0,        "Ovrl"]
             },
    "FlattenImage": {
              "action":   "flattenImage",
              "attrs":    [],
              "defaults": []
             },
    "ImageSizePx": {
              "action":   "imageSize",
              "attrs":    ["Wdth#Pxl", "Hght#Pxl", "Rslt#Rsl", "Intr+Intp"],
              "defaults": [500.0,      500.0,      72.0,       "Bcbc"]
             },
    "ImageSize%": {
              "action":   "imageSize",
              "attrs":    ["Wdth#Prc", "Hght#Prc", "Rslt#Rsl", "Intr+Intp"],
              "defaults": [50.0,       50.0,       72.0,       "Bcbc"]
             },
    "CanvasSizePx": {
              "action":   "canvasSize",
              "attrs":    ["Wdth#Pxl", "Hght#Pxl", "Hrzn+HrzL", "Vrtc+VrtL", "Rltv"],
              "defaults": [500.0,      500.0,      "Cntr",      "Cntr",      false]
             },
    "CanvasSize%": {
              "action":   "canvasSize",
              "attrs":    ["Wdth#Prc", "Hght#Prc", "Hrzn+HrzL", "Vrtc+VrtL", "Rltv"],
              "defaults": [50.0,      50.0,        "Cntr",      "Cntr",      false]
             },
    "RevealAll": {
              "action":   "revealAll",
              "attrs":    [],
              "defaults": []
             },
    "Duplicate": {
              "action":   "Dplc",
              "attrs":    [],
              "defaults": []
             },
    "ApplyImage": {
              "action":   "applyImageEvent",
              "attrs":    ["Chnl+Chnl", "Invr", "Clcl+Clcn", "Opct#Prc", "PrsT"],
              "defaults": []
             },
    "ChannelMixer": {
              "action":   "channelMixer",
              "attrs":    [],
              "defaults": []
             },
    "ShadowsHighlights": {
              "action":   "adaptCorrect",
              "attrs":    [],
              "defaults": []
             },
    "Levels": {
              "action":   "levels",
              "attrs":    [],
              "defaults": []
             },
    "Curves": {
              "action":   "curves",
              "attrs":    [],
              "defaults": []
             },
    "AutoAlign": {
              "action":   "autoAlign",
              "attrs":    [],
              "defaults": []
             },
    "GroupLayers": {
              "action":   "group",
              "attrs":    [],
              "defaults": []
             },
    "ReplaceColor": {
              "action":   "replaceColor",
              "attrs":    ["Fzns", "Mnm ", "Mxm ", "H   ", "Strt", "Lght"],
              "defaults": []
             },
    "Rasterize": {
              "action":   "rasterizeLayer",
              "attrs":    [],
              "defaults": []
             },
    "DefinePattern": {
              "action":   "definePattern",
              "attrs":    [],
              "defaults": []
             },
    "RasterizeLayerStyle": {
              "action":   "rasterizeLayer",
              "attrs":    ["What+rasterizeItem"],
              "defaults": ["layerStyle"]
             }
  
}

function definePattern() {
  var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refNull = new ActionReference();
        var idPtrn = charIDToTypeID( "Ptrn" );
        refNull.putClass( idPtrn );
    desc.putReference( idnull, refNull );
    var idUsng = charIDToTypeID( "Usng" );
        var refUsng = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idfsel = charIDToTypeID( "fsel" );
        refUsng.putProperty( idPrpr, idfsel );
        var idDcmn = charIDToTypeID( "Dcmn" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        refUsng.putEnumerated( idDcmn, idOrdn, idTrgt );
    desc.putReference( idUsng, refUsng );
    var idNm = charIDToTypeID( "Nm  " );
    desc.putString( idNm, "New");
  executeAction( idMk, desc, DialogModes.NO );
}

function applyCurves (arr){
	var idCrvs = charIDToTypeID( "curves" );
    var desc = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idAdjs = charIDToTypeID( "Adjs" );
        var listAdjs = new ActionList();
            var descListAdjs = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var refChannel = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idCmps = charIDToTypeID( "Cmps" );
                refChannel.putEnumerated( idChnl, idChnl, idCmps );
            descListAdjs.putReference( idChnl, refChannel );
            var idCrv = charIDToTypeID( "Crv " );
                var listCrv = new ActionList();
				
				for (var i=0; i<arr.length; i++) {
					var descPoint = new ActionDescriptor();
						var idHrzn = charIDToTypeID( "Hrzn" );
						descPoint.putDouble( idHrzn, arr[i][0] );
						var idVrtc = charIDToTypeID( "Vrtc" );
						descPoint.putDouble( idVrtc, arr[i][1] );
					var idPnt = charIDToTypeID( "Pnt " );
					listCrv.putObject( idPnt, descPoint );
				}
				
            descListAdjs.putList( idCrv, listCrv );
        var idCrvA = charIDToTypeID( "CrvA" );
        listAdjs.putObject( idCrvA, descListAdjs );
    desc.putList( idAdjs, listAdjs );
	executeAction( idCrvs, desc, DialogModes.NO );
}

function applyLevels (arr) {
	var idLvls = charIDToTypeID( "levels" );
    var desc = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID( "presetKind" );
    var idpresetKindType = stringIDToTypeID( "presetKindType" );
    var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
    desc.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
    var idAdjs = charIDToTypeID( "Adjs" );
        var listAdjs = new ActionList();
            var descAdjs = new ActionDescriptor();
            var idChnl = charIDToTypeID( "Chnl" );
                var ref = new ActionReference();
                var idChnl = charIDToTypeID( "Chnl" );
                var idChnl = charIDToTypeID( "Chnl" );
                var idCmps = charIDToTypeID( "Cmps" );
                ref.putEnumerated( idChnl, idChnl, idCmps );
            descAdjs.putReference( idChnl, ref );
            var idInpt = charIDToTypeID( "Inpt" );
                var listInpt = new ActionList();
                listInpt.putInteger( arr[0][0] );
                listInpt.putInteger( arr[0][2] );
            descAdjs.putList( idInpt, listInpt );
			      var idGmm = charIDToTypeID( "Gmm " );
            descAdjs.putDouble( idGmm, arr[0][1] );
            var idOtpt = charIDToTypeID( "Otpt" );
                var listOtpt = new ActionList();
                listOtpt.putInteger( arr[1][0] );
                listOtpt.putInteger( arr[1][1]  );
            descAdjs.putList( idOtpt, listOtpt );
        var idLvlA = charIDToTypeID( "LvlA" );
        listAdjs.putObject( idLvlA, descAdjs );
    desc.putList( idAdjs, listAdjs );
	executeAction( idLvls, desc, DialogModes.NO );
}

function applyShadowsHighlights(arr) {
	var idadaptCorrect = stringIDToTypeID( "adaptCorrect" );
  var desc = new ActionDescriptor();
	listObj = ["sdwM", "hglM"];
	for (var i=0; i<listObj.length; i++){
        var idObj = charIDToTypeID( listObj[i] );
        var deskObj = new ActionDescriptor();
        var idAmnt = charIDToTypeID( "Amnt" );
        var idPrc = charIDToTypeID( "#Prc" );
        deskObj.putUnitDouble( idAmnt, idPrc, arr[i][0] );
        var idWdth = charIDToTypeID( "Wdth" );
        var idPrc = charIDToTypeID( "#Prc" );
        deskObj.putUnitDouble( idWdth, idPrc, arr[i][1] );
        var idRds = charIDToTypeID( "Rds " );
        deskObj.putInteger( idRds, arr[i][2] );
        var idadaptCorrectTones = stringIDToTypeID( "adaptCorrectTones" );
        desc.putObject( idObj, idadaptCorrectTones, deskObj );
  }
	var idBlcC = charIDToTypeID( "BlcC" );
  desc.putDouble( idBlcC, arr[2] );
  var idWhtC = charIDToTypeID( "WhtC" );
  desc.putDouble( idWhtC, arr[3] );
  var idCntr = charIDToTypeID( "Cntr" );
  desc.putInteger( idCntr, arr[4] );
  var idClrC = charIDToTypeID( "ClrC" );
  desc.putInteger( idClrC, arr[5] );
  executeAction( idadaptCorrect, desc, DialogModes.NO );
}

function applyChannelMixer(arr) {   
	var idChnM = charIDToTypeID( "channelMixer" );
  var desc = new ActionDescriptor();
  var idpresetKind = stringIDToTypeID( "presetKind" );
  var idpresetKindType = stringIDToTypeID( "presetKindType" );
  var idpresetKindCustom = stringIDToTypeID( "presetKindCustom" );
  desc.putEnumerated( idpresetKind, idpresetKindType, idpresetKindCustom );
  
  var idMnch = charIDToTypeID( "Mnch" );
  	
  if (arr[0] == "Gray") {
	  listCh = ["Gry "];
    desc.putBoolean( idMnch, true );
	} else {
	  listCh = ["Rd  ", "Grn ", "Bl  "];
    desc.putBoolean( idMnch, false );
	}
	
  for (var i=1; i<=listCh.length; i++){
	    var idCh = charIDToTypeID( listCh[i-1] );
        var descCh = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        var idPrc = charIDToTypeID( "#Prc" );
        descCh.putUnitDouble( idRd, idPrc, arr[i][0] );
        var idGrn = charIDToTypeID( "Grn " );
        var idPrc = charIDToTypeID( "#Prc" );
        descCh.putUnitDouble( idGrn, idPrc, arr[i][1] );
        var idBl = charIDToTypeID( "Bl  " );
        var idPrc = charIDToTypeID( "#Prc" );
        descCh.putUnitDouble( idBl, idPrc, arr[i][2] );
        var idCnst = charIDToTypeID( "Cnst" );
        var idPrc = charIDToTypeID( "#Prc" );
        descCh.putUnitDouble( idCnst, idPrc, arr[i][3] );
        var idChMx = charIDToTypeID( "ChMx" );
        desc.putObject( idCh, idChMx, descCh );
    }   
  
  executeAction( idChnM, desc, DialogModes.NO );
}

function applyDuplicate() {
    var idDplc = charIDToTypeID( "Dplc" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idDcmn = charIDToTypeID( "Dcmn" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrst = charIDToTypeID( "Frst" );
        ref.putEnumerated( idDcmn, idOrdn, idFrst );
    desc.putReference( idnull, ref );
   executeAction( idDplc, desc, DialogModes.NO );
}

function applyImage(arr) {
  var idAppI = charIDToTypeID( "applyImageEvent" );
    var desc = new ActionDescriptor();
    var idWith = charIDToTypeID( "With" );
        var descWith = new ActionDescriptor();
        var idT = charIDToTypeID( "T   " );
            var refT = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idChnl = charIDToTypeID( "Chnl" );
            var idRGB = charIDToTypeID( arr[0] );
            refT.putEnumerated( idChnl, idChnl, idRGB );
            var idLyr = charIDToTypeID( "Lyr " );
            var idOrdn = charIDToTypeID( "Ordn" );
            var idMrgd = charIDToTypeID( "Mrgd" );
            refT.putEnumerated( idLyr, idOrdn, idMrgd );
        descWith.putReference( idT, refT );
        var idInvr = charIDToTypeID( "Invr" );
        descWith.putBoolean( idInvr, arr[1] );
        var idClcl = charIDToTypeID( "Clcl" );
        var idClcn = charIDToTypeID( "Clcn" );
        var idBlend = charIDToTypeID( arr[2] );
        descWith.putEnumerated( idClcl, idClcn, idBlend );
        var idOpct = charIDToTypeID( "Opct" );
        var idPrc = charIDToTypeID( "#Prc" );
        descWith.putUnitDouble( idOpct, idPrc, arr[3] );
        var idPrsT = charIDToTypeID( "PrsT" );
        descWith.putBoolean( idPrsT, arr[4] );
    var idClcl = charIDToTypeID( "Clcl" );
    desc.putObject( idWith, idClcl, descWith );
    executeAction( idAppI, desc, DialogModes.NO );
}

function applyPPAction(actionName, arr) {

    arr = arr || false;

    dict = actionsDB[actionName];
    
    if (dict.action == "definePattern"){
      definePattern();
      return;
    }
  
    if (dict.action == "group"){
      groupActiveLayers();
      return;
    }
  
    if (dict.action == "autoAlign"){
      align("ADSContent");
      return;
    }

    if (dict.action == "curves"){
      applyCurves(arr);
      return;
    }

    if (dict.action == "levels"){
      applyLevels(arr);
      return;
    }

    if (dict.action == "adaptCorrect"){
      applyShadowsHighlights(arr);
      return;
    }

    if (dict.action == "channelMixer"){
      applyChannelMixer(arr);
      return;
    }
  
    if (dict.action == "Dplc"){
      applyDuplicate();
      return;
    }

    if (dict.action == "applyImageEvent"){
      applyImage(arr);
      return;
    }

    if (dict.action.length == 4) {
        var idAction = charIDToTypeID( dict.action );
    } else {
        var idAction = stringIDToTypeID( dict.action );
    }
  
    var desc = new ActionDescriptor(); 
  
    for (var k = 0; k < dict.attrs.length; k++) {
      
//    if (dict.attrs[k] == "FlRs" || dict.attrs[k] == "RndS") {
//        var v = Date.now();
//    } else {
      if (arr) {
         var v = arr[k];
      } else {
         var v = dict.defaults[k];
      }

      if (["Mnm ",  "Mxm "].indexOf(dict.attrs[k]) != -1) {

        if (dict.attrs[k].length == 4) {
            var e = charIDToTypeID( dict.attrs[k] );
        } else {
            var e = stringIDToTypeID( dict.attrs[k] );
        }

        var idClr = charIDToTypeID( e );
        
        var descClr = new ActionDescriptor();
        var idRd = charIDToTypeID( "Lmnc" );
        descClr.putDouble( idRd,  v[0] );
        var idGrn = charIDToTypeID( "A   " );
        descClr.putDouble( idGrn, v[1] );
        var idBl = charIDToTypeID( "B   " );
        descClr.putDouble( idBl,  v[2] );
        var idRGBC = charIDToTypeID( "LbCl" );
        desc.putObject( idClr, idRGBC, descClr );
        
      } else if (["Clr ", "tintColor"].indexOf(dict.attrs[k]) != -1) {

        if (dict.attrs[k].length == 4) {
            var e = charIDToTypeID( dict.attrs[k] );
        } else {
            var e = stringIDToTypeID( dict.attrs[k] );
        }

        var idClr = charIDToTypeID( e );
        
        var descClr = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        descClr.putDouble( idRd,  v[0] );
        var idGrn = charIDToTypeID( "Grn " );
        descClr.putDouble( idGrn, v[1] );
        var idBl = charIDToTypeID( "Bl  " );
        descClr.putDouble( idBl,  v[2] );
        var idRGBC = charIDToTypeID( "RGBC" );
        desc.putObject( idClr, idRGBC, descClr );
        
      } else if (["ShdL", "MdtL", "HghL"].indexOf(dict.attrs[k]) != -1) {

        var e = charIDToTypeID( dict.attrs[k] );
        
        var list3 = new ActionList();
        list3.putInteger( v[0] );
        list3.putInteger( v[1] );
        list3.putInteger( v[2] );
        desc.putList( e, list3 );
        
      } else if (["Adjs"].indexOf(dict.attrs[k]) != -1) {

        if (dict.attrs[k].length == 4) {
            var e = charIDToTypeID( dict.attrs[k] );
        } else {
            var e = stringIDToTypeID( dict.attrs[k] );
        }

        var idAdjs = charIDToTypeID( e );
        
        var list3 = new ActionList();
        var descList = new ActionDescriptor();
        var idH = charIDToTypeID(    "H   " );
        descList.putInteger( idH,    v[0] );
        var idStrt = charIDToTypeID( "Strt" );
        descList.putInteger( idStrt, v[1] );
        var idLght = charIDToTypeID( "Lght" );
        descList.putInteger( idLght, v[2] );
        var idHsttwo = charIDToTypeID( "Hst2" );
        list3.putObject( idHsttwo, descList );
        desc.putList( idAdjs, list3 );
        
      } else if (dict.attrs[k].indexOf("#") != -1)  {
        
        var pair =  dict.attrs[k].split("#");       
        var e_arg1 = charIDToTypeID( pair[0]);
        var e_arg2 = charIDToTypeID( pair[1]);
        desc.putUnitDouble( e_arg1, e_arg2, v );
        
      } else if (dict.attrs[k].indexOf("+") != -1)  {
        
        var pair =  dict.attrs[k].split("+");
        
        if (pair[0].length == 4) {
            var e_arg1 = charIDToTypeID( pair[0]);
        } else {
            var e_arg1 = stringIDToTypeID( pair[0] );
        }

        if (pair[1].length == 4) {
            var e_arg2 = charIDToTypeID( pair[1]);
        } else {
            var e_arg2 = stringIDToTypeID( pair[1] );
        }
        
        desc.putEnumerated( e_arg1, e_arg2, v );
        
      } else {
       
        if (dict.attrs[k].length == 4) {
            var e = charIDToTypeID( dict.attrs[k] );
        } else {
            var e = stringIDToTypeID( dict.attrs[k] );
        }
        
        if (Number.isInteger(v)) {
           desc.putInteger( e, v )
        } else if (isFloat(v)) {
           desc.putDouble( e, v )
        } else {
           desc.putBoolean( e, v )
        }
        
      } 
      
    }
 
    executeAction( idAction, desc, DialogModes.NO );
}

//applyPPAction("Invert");
//applyPPAction("Desaturate");
//applyPPAction("AutoTone");
//applyPPAction("AutoContrast");
//applyPPAction("AutoColor");
//applyPPAction("BrightnessContrast", [100, -100, false]);
//applyPPAction("BrightnessContrast");
//applyPPAction("Vibrance", [50, -25]);
//applyPPAction("Vibrance");
//applyPPAction("Posterize");
//applyPPAction("Posterize", [6]);
//applyPPAction("Threshold");
//applyPPAction("Threshold", [50]);
//applyPPAction("BlackAndWhite");// Sepia as default
//applyPPAction("BlackAndWhite", ["presetKindCustom", 40, 30, 70, 60, 20, 5, true,  [255.0, 128.0, 0.0] ]);//"presetKindCustom" NO CHANGE! Colors order: R Y G C Bl M; tint on/off - true/false; tint color - list, in RGB format; last color list needfull!  
//applyPPAction("BlackAndWhite", ["presetKindCustom", 40, 85, 204, 60, 20, 80, false, [0.0, 0.0, 0.0] ]);//"presetKindCustom" NO CHANGE! Colors order: R Y G C Bl M; tint on/off - true/false; tint color - list, in RGB format; last color list needfull!
//applyPPAction("PhotoFilter");
//applyPPAction("PhotoFilter", [[127.0, 0.0, 127.0], 50, true]);//Color - list, in RGB format
//applyPPAction("Exposure");
//applyPPAction("Exposure", ["presetKindCustom", -0.1, 0.05, -0.5]); //"presetKindCustom" NO CHANGE! 
//applyPPAction("MatchColor");
//applyPPAction("MatchColor", [50,  50,  25, true, true, true]);
//applyPPAction("ColorBalance");
//applyPPAction("ColorBalance", [[10,0,-10], [10,0,-10], [-10,0,10], false]);
//applyPPAction("HueSaturation");
//applyPPAction("HueSaturation", ["presetKindCustom", true, [-10,0,10]]);//"presetKindCustom" NO CHANGE! true/false - colorize
//applyPPAction("Crop");
//applyPPAction("Trim");
//applyPPAction("Trim", ["Trns", true, true, true, true]);//"Trns", "topLeftPixelColor", "bottomRightPixelColor"
//applyPPAction("Fade");
//applyPPAction("Fade", [30.0, "Scrn"]);
//applyPPAction("FlattenImage");

//applyPPAction("ImageSizePx", [300.0, 300.0, 96.0, "Bcbc"]);
//applyPPAction("ImageSizePx", [400.0, 500.0, 96.0, "Blnr"]);
//applyPPAction("ImageSizePx", [600.0, 480.0, 72.0, "Nrst"]);
//applyPPAction("ImageSize%", [75.0, 75.0, 96.0, "Bcbc"]);
//applyPPAction("ImageSize%", [90.0, 100.0, 96.0, "Blnr"]);
//applyPPAction("ImageSize%", [60.0, 80.0, 72.0, "Nrst"]);

//applyPPAction("CanvasSizePx", [500.0, 500.0,  "Cntr", "Cntr", false]);
//applyPPAction("CanvasSizePx", [1000.0, 600.0, "Rght", "Btom", false]);
//applyPPAction("CanvasSize%", [400.0, 400.0,   "Cntr", "Cntr", false]);
//applyPPAction("CanvasSize%", [150.0, 150.0,   "Left", "Top ", true]);

//applyPPAction("RevealAll");
//applyPPAction("Duplicate");

//applyPPAction("ApplyImage", ["RGB ", true, "Mltp", 50.0, true]);

//applyPPAction("ReplaceColor");//CHECKED!!!

//applyPPAction("ChannelMixer", ["Gray", [0.0, 100.0, 0.0, 40.0] ]);
//applyPPAction("ChannelMixer", ["RGB",  [60.0, 180.0, -110.0, 40.0], [-100.0, 5.0, 105.0, -35.0], [-40.0, 50.0, -20.0, 50.0] ]);

//applyPPAction("ShadowsHighlights", [ [15.0, 70.0, 55], [15.0, 75.0, 15], 0.1, 0.1, -80, -5]);

//applyPPAction("Levels", [ [30, 0.75, 200], [40, 240] ]);

//applyPPAction("Curves", [ [0,0], [85, 60], [150, 165], [255, 255] ]);
//applyPPAction("Curves");

//applyPPAction("AutoAlign");

//applyPPAction("ReplaceColor", [ 70, [80.0, -3.0, 76.0], [80.0, -3.0, 76.0], -50, 10, 5]);
//applyPPAction("ReplaceColor", [ 70, [25.0, -3.0, 23.0], [80.0, 7.0, 75.0], 30, -40, 25]);

//applyPPAction("GroupLayers");

//applyPPAction("DefinePattern");

//applyPPAction("Rasterize");
//applyPPAction("RasterizeLayerStyle");

////////////////////////////////////ACTIVE LAYER////////////////////////////////

function returnNumberLayer(attr) {
  var layerCount = app.activeDocument.layers.length;
  //var currentLayerIndex = currentLayer.itemIndex;
  if (Number.isInteger(attr)) {
    if (attr < 1 || attr > layerCount ) {
      attr = 1;
    }
  } else if (attr == "First") {
    attr = 1;
  } else if (attr == "Last") {
    attr = layerCount;
  } else if (attr == "Up") {
      if (currentLayerIndex != 1) {
        attr = currentLayerIndex - 1;
      } else {
        attr = 1;
      }
  } else if (attr == "Down") {
    if (currentLayerIndex != layerCount) {
        attr = currentLayerIndex - 1;
      } else {
        attr = layerCount;
      }
  }

  return attr;
}

function changeActiveLayer(attr) {

  var number = returnNumberLayer(attr);
  
  //  ActionReference Layer
  var ALReference = new ActionReference();
  ALReference.putIndex(charIDToTypeID('Lyr '), number);

  // ActionDescriptor change active layer
  var layerDescriptor = new ActionDescriptor();
  layerDescriptor.putReference(charIDToTypeID('null'), ALReference);
  layerDescriptor.putBoolean(charIDToTypeID('MkVs'), false);

  // change active layer
  executeAction(charIDToTypeID('slct'), layerDescriptor, DialogModes.NO)
}

function moveActiveLayer(attr) {

  if (attr == "First") {
    attr = "Back"
  } else if (attr == "Last") {
    attr = "Frnt"
  } else if (attr == "Up") {
    attr = "Nxt "
  } else if (attr == "Down") {
    attr = "Prvs"
  } else {
    attr = "Back"
  }
  var idmove = charIDToTypeID( "move" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refL = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        refL.putEnumerated( idLyr, idOrdn, idTrgt );
    desc.putReference( idnull, refL );
    var idT = charIDToTypeID( "T   " );
        var refT = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idNxt = charIDToTypeID( attr );
        refT.putEnumerated( idLyr, idOrdn, idNxt );
    desc.putReference( idT, refT );
  executeAction( idmove, desc, DialogModes.NO );
  
}

function groupActiveLayers(groupName){

  var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refNull = new ActionReference();
        var idlayerSection = stringIDToTypeID( "layerSection" );
        refNull.putClass( idlayerSection );
    desc.putReference( idnull, refNull );
    var idFrom = charIDToTypeID( "From" );
        var refFrom = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        refFrom.putEnumerated( idLyr, idOrdn, idTrgt );
    executeAction( idMk, desc, DialogModes.NO );
}

//changeActiveLayer(3);
//changeActiveLayer("First");
//changeActiveLayer("Last");

//moveActiveLayer("First");
//moveActiveLayer("Last");
//moveActiveLayer("Down");
//moveActiveLayer("Up");

//groupActiveLayers();

////////////////////////////////////SELECTIONS////////////////////////////////

function select(command, arr) {
  
  var id = null;
  var desc = new ActionDescriptor();
  
  command = command.toLowerCase()

  if (command == "colorrange"){

    var idClrR = charIDToTypeID( "colorRange" );
    var desc = new ActionDescriptor();
    var idcolorModel = stringIDToTypeID( "colorModel" );
    desc.putInteger( idcolorModel, 0 );
  
    if (arr[0] == "SampledColors") {
      var idMnm = charIDToTypeID( "Mnm " );
          var descMnm = new ActionDescriptor();
          var idLmnc = charIDToTypeID( "Lmnc" );
          descMnm.putDouble( idLmnc, arr[2][0] );
          var idA = charIDToTypeID( "A   " );
          descMnm.putDouble( idA, arr[2][1] );
          var idB = charIDToTypeID( "B   " );
          descMnm.putDouble( idB, arr[2][2] );
      var idLbCl = charIDToTypeID( "LbCl" );
      desc.putObject( idMnm, idLbCl, descMnm );
      var idMxm = charIDToTypeID( "Mxm " );
          var descMxm = new ActionDescriptor();
          var idLmnc = charIDToTypeID( "Lmnc" );
          descMxm.putDouble( idLmnc, arr[3][0] );
          var idA = charIDToTypeID( "A   " );
          descMxm.putDouble( idA, arr[3][1] );
          var idB = charIDToTypeID( "B   " );
          descMxm.putDouble( idB, arr[3][2] );
      var idLbCl = charIDToTypeID( "LbCl" );
      desc.putObject( idMxm, idLbCl, descMxm );
      var idFzns = charIDToTypeID( "Fzns" );
      desc.putInteger( idFzns, arr[1] );
      var idInvr = charIDToTypeID( "Invr" );
      desc.putBoolean( idInvr, arr[4] );
      
    } else if (arr[0] == "Shdw") {
      
      var idClrs = charIDToTypeID( "Clrs" );
      var idClrs = charIDToTypeID( "Clrs" );
      var idShdw = charIDToTypeID( arr[0] );
      desc.putEnumerated( idClrs, idClrs, idShdw );
      var idshadowsFuzziness = stringIDToTypeID( "shadowsFuzziness" );
      desc.putInteger( idshadowsFuzziness,  arr[1] );
      var idshadowsUpperLimit = stringIDToTypeID( "shadowsUpperLimit" );
      desc.putInteger( idshadowsUpperLimit, arr[2] );
      var idInvr = charIDToTypeID( "Invr" );
      desc.putBoolean( idInvr, arr[3] );
    
    } else if (arr[0] == "Mdtn") {
      
      var idClrs = charIDToTypeID( "Clrs" );
      var idClrs = charIDToTypeID( "Clrs" );
      var idMdtn = charIDToTypeID( arr[0] );
      desc.putEnumerated( idClrs, idClrs, idMdtn );
      var idmidtonesFuzziness = stringIDToTypeID( "midtonesFuzziness" );
      desc.putInteger( idmidtonesFuzziness,  arr[1]);
      var idmidtonesLowerLimit = stringIDToTypeID( "midtonesLowerLimit" );
      desc.putInteger( idmidtonesLowerLimit, arr[2] );
      var idmidtonesUpperLimit = stringIDToTypeID( "midtonesUpperLimit" );
      desc.putInteger( idmidtonesUpperLimit, arr[3] );
      var idInvr = charIDToTypeID( "Invr" );
      desc.putBoolean( idInvr, arr[4] );
    
    } else if (arr[0] == "Hghl") {
      
      var idClrs = charIDToTypeID( "Clrs" );
      var idClrs = charIDToTypeID( "Clrs" );
      var idHghl = charIDToTypeID( arr[0] );
      desc.putEnumerated( idClrs, idClrs, idHghl );
      var idhighlightsFuzziness = stringIDToTypeID( "highlightsFuzziness" );
      desc.putInteger( idhighlightsFuzziness,   arr[1] );
      var idhighlightsLowerLimit = stringIDToTypeID( "highlightsLowerLimit" );
      desc.putInteger( idhighlightsLowerLimit,  arr[2] );
      var idInvr = charIDToTypeID( "Invr" );
      desc.putBoolean( idInvr, arr[3] );
    }
    
    
    executeAction( idClrR, desc, DialogModes.NO );
    
  } else if (["grow", "similar"].indexOf(command) != -1) {
    
      var idAction = charIDToTypeID( command );
      var idnull = charIDToTypeID( "null" );
          var ref = new ActionReference();
          var idChnl = charIDToTypeID( "Chnl" );
          var idfsel = charIDToTypeID( "fsel" );
          ref.putProperty( idChnl, idfsel );
      desc.putReference( idnull, ref);
      var idTlrn = charIDToTypeID( "Tlrn" );
      desc.putInteger( idTlrn, arr[0] );
      var idAntA = charIDToTypeID( "AntA" );
      desc.putBoolean( idAntA, arr[1] );
      executeAction( idAction, desc, DialogModes.NO ); 
    
  } else if (['expand', 'contract', 'smoothness', 'feather', "border"].indexOf(command) != -1) {
      
      if (['expand', 'contract'].indexOf(command) != -1) {
        var keyBy = "By  ";
      } else if (['smoothness', 'feather'].indexOf(command) != -1) {
        var keyBy = "Rds ";
      } else {
        var keyBy = "Wdth";
      }
    
		  id = stringIDToTypeID(command);
      var idBy = charIDToTypeID( keyBy );
      var idPxl = charIDToTypeID( "#Pxl" );
      desc.putUnitDouble( idBy, idPxl, arr[0]);
      var idselectionModifyEffectAtCanvasBounds = stringIDToTypeID( "selectionModifyEffectAtCanvasBounds" );
      desc.putBoolean( idselectionModifyEffectAtCanvasBounds, arr[1] );
		  executeAction(id, desc, DialogModes.NO); 
    
  } else if (command == 'inverse') {
		  id = stringIDToTypeID('inverse');
		  executeAction(id, undefined, DialogModes.NO); 
  } else if (command == 'delete') {
		  id = charIDToTypeID('Dlt ');
		  executeAction(id, undefined, DialogModes.NO); 
  } else if (command == 'alllayers') {
      id = stringIDToTypeID( "selectAllLayers" );     
      executeAction( id, desc, DialogModes.NO );
  }  else {
	    if (command == 'deselect'){
			var key = "None";
		  } else {
			var key = "Al  ";
		  }
		  var idsetd = charIDToTypeID( "setd" );
		  var idnull = charIDToTypeID( "null" );
			var ref = new ActionReference();
			var idChnl = charIDToTypeID( "Chnl" );
			var idfsel = charIDToTypeID( "fsel" );
			ref.putProperty( idChnl, idfsel );
		  desc.putReference( idnull, ref );
  		var idT = charIDToTypeID( "T   " );
  		var idOrdn = charIDToTypeID( "Ordn" );
  		var idKey = charIDToTypeID( key );
  		desc.putEnumerated( idT, idOrdn, idKey );
    
  		executeAction( idsetd, desc, DialogModes.NO );      
  }
}

//select("Inverse"); 
//select("Deselect");
//select("All");
//select("Delete");
//select("AllLayers");
//select("NoLayers"); #CHECKED
//select("Expand",     [1.0, true]);
//select("Contract",   [1.0, true]);
//select("Smoothness", [1.0, true]);
//select("Feather",    [1.0, true]);
//select("Border",     [1.0, true]);
//select("Similar",    [1.0, true]);
//select("Grow",       [1.0, true]);
//select("ColorRange", ["SampledColors", 100, [100.0, 0.0, 0.0], [100.0, 0.0, 0.0], true]);
//select("ColorRange", ["Shdw", 10, 50, true]);
//select("ColorRange", ["Mdtn", 50, 50, 100, true]);
//select("ColorRange", ["Hghl", 10, 50, true]);

function saveSelection(nameSelection) {
    var idDplc = charIDToTypeID( "Dplc" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref.putProperty( idChnl, idfsel );
    desc.putReference( idnull, ref );
    var idNm = charIDToTypeID( "Nm  " );
    desc.putString( idNm, nameSelection );
    executeAction( idDplc, desc, DialogModes.NO );
}

function loadSelection(nameSelection) {
    var idsetd = charIDToTypeID( "setd" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref1.putProperty( idChnl, idfsel );
    desc.putReference( idnull, ref1 );
    var idT = charIDToTypeID( "T   " );
        var ref2 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        ref2.putName( idChnl, nameSelection );
    desc.putReference( idT, ref2 );
    executeAction( idsetd, desc, DialogModes.NO );
}

//saveSelection("B");
//loadSelection("B");

function selectTool(tool, arr){
    if (tool=="Ellipse") {
	     var toolChar = "Elps";
       var antABool = arr[3];
	  } else {
	     var toolChar = "Rctn";
       var antABool = true;
	  }
	
    var idsetd = charIDToTypeID( "setd" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref.putProperty( idChnl, idfsel );
    desc.putReference( idnull, ref );
    var idT = charIDToTypeID( "T   " );
        var desc_idT = new ActionDescriptor();
        var idTop = charIDToTypeID( "Top " );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idTop, idPxl, arr[0][1] );
        var idLeft = charIDToTypeID( "Left" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idLeft, idPxl, arr[0][0] );
        var idBtom = charIDToTypeID( "Btom" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idBtom, idPxl, arr[1][1] );
        var idRght = charIDToTypeID( "Rght" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idRght, idPxl, arr[1][1] );
    var idTool = charIDToTypeID( toolChar );
    desc.putObject( idT, idTool, desc_idT );
    var idFthr = charIDToTypeID( "Fthr" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc.putUnitDouble( idFthr, idPxl, arr[2] );
    var idAntA = charIDToTypeID( "AntA" );
    desc.putBoolean( idAntA, antABool );
	executeAction( idsetd, desc, DialogModes.NO );
}

//selectTool("Rectangle", [ [10, 50], [40, 150], 3.0]);
//selectTool("Ellipse",   [ [10, 50], [40, 150], 5.0, true]);

function selectMagicWand(arr) {
    var idsetd = charIDToTypeID( "setd" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref.putProperty( idChnl, idfsel );
    desc.putReference( idnull, ref );
    var idT = charIDToTypeID( "T   " );
        var desc_idT = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idHrzn, idPxl, arr[0][0] );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        desc_idT.putUnitDouble( idVrtc, idPxl, arr[0][1]);
    var idPnt = charIDToTypeID( "Pnt " );
    desc.putObject( idT, idPnt, desc_idT );
    var idTlrn = charIDToTypeID( "Tlrn" );
    desc.putInteger( idTlrn, arr[1] );
    var idAntA = charIDToTypeID( "AntA" );
    desc.putBoolean( idAntA, arr[2] );
    var idCntg = charIDToTypeID( "Cntg" );
    desc.putBoolean( idCntg, arr[3] );
    executeAction( idsetd, desc, DialogModes.NO );
}

//selectMagicWand([ [3, 5], 20, true, false]); //[x, y] - point on image, tolerancy - integer, anti-alias - true/false, contiguous - true/false

function selectToPath(tlrn) {
    var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refNull = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        refNull.putClass( idPath );
    desc.putReference( idnull, refNull );
    var idFrom = charIDToTypeID( "From" );
        var refFrom = new ActionReference();
        var idcsel = charIDToTypeID( "csel" );
        var idfsel = charIDToTypeID( "fsel" );
        refFrom.putProperty( idcsel, idfsel );
    desc.putReference( idFrom, refFrom );

    tlrn = tlrn || 1.0;
    var idTlrn = charIDToTypeID( "Tlrn" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc.putUnitDouble( idTlrn, idPxl, tlrn );
    executeAction( idMk, desc, DialogModes.NO );
}

//selectToPath();
//selectToPath(5.0);

function pathToSelect() {
    var idsetd = charIDToTypeID( "setd" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refNull = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        refNull.putProperty( idChnl, idfsel );
    desc.putReference( idnull, refNull );
    var idT = charIDToTypeID( "T   " );
        var refT = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idWrPt = charIDToTypeID( "WrPt" );
        refT.putProperty( idPath, idWrPt );
    desc.putReference( idT, refT );    
    executeAction( idsetd, desc, DialogModes.NO );
}

//pathToSelect();

//////////////////////////////////Path////////////////////////////////////

function fillPath(arr) {
  arr = arr || false;
  
  if (arr) {
    fgColor(arr[0], arr[1], arr[2]);
  }
  
  var idFl = charIDToTypeID( "fill" );
    var desc233 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref37 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idWrPt = charIDToTypeID( "WrPt" );
        ref37.putProperty( idPath, idWrPt );
    desc233.putReference( idnull, ref37 );
    var idWhPt = charIDToTypeID( "WhPt" );
    desc233.putBoolean( idWhPt, true );
  executeAction( idFl, desc233, DialogModes.NO );
}

function strokePathWithBrush(arr) {
  var idStrk = charIDToTypeID( "stroke" );
    var desc1992 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref463 = new ActionReference();
        var idPath = charIDToTypeID( "Path" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
    ref463.putEnumerated( idPath, idOrdn, idTrgt );
    desc1992.putReference( idnull, ref463 );
    var idUsng = charIDToTypeID( "Usng" );
    var idPbTl = charIDToTypeID( arr[0] );
    desc1992.putClass( idUsng, idPbTl );
    var idPrs = charIDToTypeID( "Prs " );
    desc1992.putBoolean( idPrs, arr[1] );
  executeAction( idStrk, desc1992, DialogModes.NO );
}

//fillPath();
//fillPath([127.0, 0.0, 127.0]);

//strokePathWithBrush(["PbTl", true]); //1-st parameter - tool name; 2-nd parameter - simulate pressure - true/false;

//TOOLS NAMES:
//"AbTl"  airbrushTool*
//"ABTl"  artBrushTool
//"SETl"  backgroundEraserTool
//"BlTl"  blurTool
//"BrTl"  burnInTool
//"ClTl"  cloneStampTool
//"DdTl"  dodgeTool
//"ErTl"  eraserTool
//"GrTl"  gradientTool*
//"HBTl"  historyBrushTool
//"MgEr"  magicEraserTool*
//"PbTl"  paintbrush Tool
//"PaTl"  patternStampTool
//"PcTl"  pencilTool
//"SrTl"  saturationTool
//"ShTl"  sharpenTool
//"SmTl"  smudgeTool
//"Spng"  sponge
//"spotHealingBrushTool" spotHealingBrushTool
//"magicStampTool"  healTool
//"colorReplacementBrushTool" colorReplacementBrushTool
//"quickSelectTool" quickSelectTool

///////////////////////////////////Mask///////////////////////////////////

function makeMask(type, param) {
    
    var idMk = charIDToTypeID( "Mk  " );
    var desc = new ActionDescriptor();

    if (type == "Clipping") {
      
      var idGrpL = charIDToTypeID( "groupEvent" );
      var descGrpl = new ActionDescriptor();
      var idnull = charIDToTypeID( "null" );
        var refT = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        refT.putEnumerated( idLyr, idOrdn, idTrgt );
      descGrpl.putReference( idnull, refT );
      executeAction( idGrpL, descGrpl, DialogModes.NO );
      return
      
    } else if (type == "Vector") {
      
      var idnull = charIDToTypeID( "null" );
      var refPath = new ActionReference();
      var idPath = charIDToTypeID( "Path" );
      refPath.putClass( idPath );
      desc.putReference( idnull, refPath );
      
    } else {
      
      var idNw = charIDToTypeID( "Nw  " );
      var idChnl = charIDToTypeID( "Chnl" );
      desc.putClass( idNw, idChnl );
      
    }
      
    var idAt = charIDToTypeID( "At  " );
        var ref = new ActionReference();

        if (type == "Vector") {
          var idPath = charIDToTypeID( "Path" );
          var idPath = charIDToTypeID( "Path" );
          var idvectorMask = stringIDToTypeID( "vectorMask" );
          ref.putEnumerated( idPath, idPath, idvectorMask );
        } else {
          var idChnl = charIDToTypeID( "Chnl" );
          var idChnl = charIDToTypeID( "Chnl" );
          var idMsk = charIDToTypeID( "Msk " );
          ref.putEnumerated( idChnl, idChnl, idMsk );
        }
  
    desc.putReference( idAt, ref);

    var idUsng = charIDToTypeID( "Usng" );
  
    if (param == "Path") {
         var refTrgt = new ActionReference();
         var idPath = charIDToTypeID( "Path" );
         var idOrdn = charIDToTypeID( "Ordn" );
         var idTrgt = charIDToTypeID( "Trgt" );
         refTrgt.putEnumerated( idPath, idOrdn, idTrgt );
         desc.putReference( idUsng, refTrgt );
    } else if (type == "Vector") {
         var idvectorMaskEnabled = stringIDToTypeID( "vectorMaskEnabled" );
         var idParam = charIDToTypeID( param );
         desc.putEnumerated( idUsng, idvectorMaskEnabled, idParam );
    } else {
         var idUsrM = charIDToTypeID( "UsrM" );
         var idParam = charIDToTypeID( param );
         desc.putEnumerated( idUsng, idUsrM, idParam );
    }
      
    executeAction( idMk, desc, DialogModes.NO );
}

//makeMask("Raster", "RvlA");
//makeMask("Raster", "HdAl");
//makeMask("Raster", "RvlS");
//makeMask("Raster", "HdSl");
//makeMask("Raster", "Trns");

//makeMask("Vector", "RvlA");
//makeMask("Vector", "HdAl");
//makeMask("Vector", "Path");//CHECKED

//makeMask("Clipping");

////////////////////////////////////COLORS////////////////////////////////

function getRGB(r, g, b) {
  var clr = new SolidColor();
  clr.rgb.red = r;
  clr.rgb.green = g;
  clr.rgb.blue = b;

  return clr
}

function fgColor(r, g, b) {
    app.foregroundColor = getRGB(r, g, b);  
}

function bgColor(r, g, b) {
    app.backgroundColor = getRGB(r, g, b);  
}

//fgColor(255, 0, 0);
//bgColor(255, 255, 0);

////////////////////////////////////FILL//////////////////////////////////////

var fillDB = {
    "MagicReplace": {
              "type":   "aiHeal",
              "defaults": [100.0, "Nrml", true]
             },
    "Foreground": {
              "type":   "FrgC",
              "defaults": [100.0, "Nrml", true]
             },
    "Background": {
              "type":   "BckC",
              "defaults": [100.0, "Nrml", true]
             },
    "ContentAware": {
              "type":   "contentAware",
              "defaults": [100.0, "Nrml", true]
             },
    "Pattern": {
              "type":   "Ptrn",
              "defaults": [100.0, "Nrml", true, "Default/orangeslices"]
             }
}

function applyFill(actionName, arr){

    dict = fillDB[actionName];
    
    var param;
    if (!Array.isArray(arr)) {
      if (arr) {
          param = arr;
      }
      arr = dict.defaults;
    }

    if (dict.type.length == 4) {
        var idType = charIDToTypeID( dict.type );
    } else {
        var idType = stringIDToTypeID( dict.type );
    }
  
    var desc = new ActionDescriptor(); 
    
    var idFl = charIDToTypeID( "fill" );
    var desc = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idFrgC = stringIDToTypeID( idType );
    desc.putEnumerated( idUsng, idFlCn, idFrgC );
  
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idOpct, idPrc, arr[0] );
  
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    if (arr[1].length == 4){
      var idBlend = charIDToTypeID( arr[1] );
    } else {
      var idBlend = stringIDToTypeID( arr[1] );
    }
    desc.putEnumerated( idMd, idBlnM, idBlend);
    var idPrsT = charIDToTypeID( "PrsT" );
    desc.putBoolean( idPrsT, arr[2] );
  
    if (param) {  
      var idTxt =  charIDToTypeID( "prmt" );
      desc.putString( idTxt, param );
    }
  
    if (idType == "contentAware") {  
      var idAW =  stringIDToTypeID( "contentAwareColorAdaptationFill" );
      desc.putBoolean( idAW, true );
    }
  
    if (idType == "Ptrn") {  
      var idPtrn = charIDToTypeID( "Ptrn" );
      var descPtrn = new ActionDescriptor();
      var idNm = charIDToTypeID( "Nm  " );
      descPtrn.putString( idNm, arr[3] );
      var idIdnt = charIDToTypeID( "Idnt" );
      descPtrn.putString( idIdnt, "0" );
      desc.putObject( idPtrn, idPtrn, descPtrn );
    }
  
  executeAction( idFl, desc, DialogModes.NO ); 
}

function applyStroke(arr) {  
  var idStrk = charIDToTypeID( "stroke" );
    var desc = new ActionDescriptor();
    var idWdth = charIDToTypeID( "Wdth" );
    desc.putInteger( idWdth, arr[0] );
    var idLctn = charIDToTypeID( "Lctn" );
    var idStrL = charIDToTypeID( "StrL" );
    var idCntr = charIDToTypeID( arr[1] );
    desc.putEnumerated( idLctn, idStrL, idCntr );
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idOpct, idPrc, arr[2] );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idOvrl = charIDToTypeID( arr[3] );
    desc.putEnumerated( idMd, idBlnM, idOvrl );
    var idClr = charIDToTypeID( "Clr " );
        var descClr = new ActionDescriptor();
        var idRd = charIDToTypeID( "Rd  " );
        descClr.putDouble( idRd, arr[5][0] );
        var idGrn = charIDToTypeID( "Grn " );
        descClr.putDouble( idGrn, arr[5][1] );
        var idBl = charIDToTypeID( "Bl  " );
        descClr.putDouble( idBl, arr[5][2] );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc.putObject( idClr, idRGBC, descClr );
    var idPrsT = charIDToTypeID( "PrsT" );
    desc.putBoolean( idPrsT, arr[4] );
  executeAction( idStrk, desc, DialogModes.NO );
}
//applyFill("MagicReplace", "sword");
//applyFill("MagicReplace");
//applyFill("Foreground");
//applyFill("Foreground", [50.0, "Dfrn", false]);
//applyFill("Background");
//applyFill("Foreground", [30.0, "Ovrl", true]);
//applyFill("ContentAware");

//applyFill("Pattern");
//applyFill("Pattern", [30.0, "Ovrl", true, "Default/multihorizontalstripe"]); 

//applyStroke([30, "Cntr", 50.0, "Ovrl", true, [255.0, 0.0, 0.0] ]);
////////////////////////////////////TRANSFORMS////////////////////////////////

function imageTransform(command, param){
    id_dict = {"Rotate": "rotateEventEnum",
               "FlipH":  "flip",
               "FlipV":  "flip"
              };
    
    var id = charIDToTypeID( id_dict[command] );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref = new ActionReference();
        var idDcmn = charIDToTypeID( "Dcmn" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idFrst = charIDToTypeID( "Frst" );
        ref.putEnumerated( idDcmn, idOrdn, idFrst );
    desc.putReference( idnull, ref );
    if (command == "Rotate"){
        var idAngl = charIDToTypeID( "Angl" );
        var idAng = charIDToTypeID( "#Ang" );
        desc.putUnitDouble( idAngl, idAng, param );
    } else {
        if (command == "FlipH") {
          var keyAxis = "Hrzn";
        } else {
          var keyAxis = "Vrtc";
        }
        var idAxis = charIDToTypeID( "Axis" );
        var idOrnt = charIDToTypeID( "Ornt" );
        var idkeyAxis = charIDToTypeID( keyAxis );
        desc.putEnumerated( idAxis, idOrnt, idkeyAxis );
    }
    
    executeAction( id, desc, DialogModes.NO );
}

//imageTransform("FlipH");
//imageTransform("FlipV");
//imageTransform("Rotate", 90);
//imageTransform("Rotate", -90);
//imageTransform("Rotate", 180);
//imageTransform("Rotate", 45);

function freeTransform(transT, arr){

    var idTrnf = charIDToTypeID( "transform" );
    points = {
	  "LeftTop":     "Qcs0",
    "RightTop":    "Qcs1",
	  "RightBottom": "Qcs2",
	  "LeftBottom":  "Qcs3",
	  "TopSide":     "Qcs4",
	  "RightSide":   "Qcs5",
	  "BottomSide":  "Qcs6",
	  "LeftSide":    "Qcs7",
	  "Average":     "Qcsa"
	  }
	  Q = points[arr[0]];
	
    var desc = new ActionDescriptor();
	
    var idnull = charIDToTypeID( "null" );
        var refT = new ActionReference();
        
        if (transT == "Layer") {
          var idLyr = charIDToTypeID( "Lyr " );
          var idOrdn = charIDToTypeID( "Ordn" );
          var idTrgt = charIDToTypeID( "Trgt" );
          refT.putEnumerated( idLyr, idOrdn, idTrgt );
        } else if (transT == "Select") {
          var idChnl = charIDToTypeID( "Chnl" );
          var idfsel = charIDToTypeID( "fsel" );
          refT.putProperty( idChnl, idfsel );
        } else if (transT == "WorkPath") {
          var idPath = charIDToTypeID( "Path" );
          var idWrPt = charIDToTypeID( "WrPt" );
          refT.putProperty( idPath, idWrPt );
        }
    
    desc.putReference( idnull, refT );
    
	  var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQ = charIDToTypeID( Q );
    desc.putEnumerated( idFTcs, idQCSt, idQ );
	
    var idOfst = charIDToTypeID( "Ofst" );
        var descOfst = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idPxl = charIDToTypeID( "#Pxl" );
        descOfst.putUnitDouble( idHrzn, idPxl, 0.000000 );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idPxl = charIDToTypeID( "#Pxl" );
        descOfst.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc.putObject( idOfst, idOfst, descOfst );
	
    var idWdth = charIDToTypeID( "Wdth" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idWdth, idPrc, arr[1] );
    var idHght = charIDToTypeID( "Hght" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc.putUnitDouble( idHght, idPrc, arr[2] );
    
	var idSkew = charIDToTypeID( "Skew" );
        var descSkew = new ActionDescriptor();
        var idHrzn = charIDToTypeID( "Hrzn" );
        var idAng = charIDToTypeID( "#Ang" );
        descSkew.putUnitDouble( idHrzn, idAng, arr[4] );
        var idVrtc = charIDToTypeID( "Vrtc" );
        var idAng = charIDToTypeID( "#Ang" );
        descSkew.putUnitDouble( idVrtc, idAng, arr[5] );
        var idPnt = charIDToTypeID( "Pnt " );
    desc.putObject( idSkew, idPnt, descSkew );
    
	var idAngl = charIDToTypeID( "Angl" );
    var idAng = charIDToTypeID( "#Ang" );
    desc.putUnitDouble( idAngl, idAng, arr[3] );
    var idIntr = charIDToTypeID( "Intr" );
    var idIntp = charIDToTypeID( "Intp" );
    var idBcbc = charIDToTypeID( "Bcbc" );
    desc.putEnumerated( idIntr, idIntp, idBcbc );

    executeAction( idTrnf, desc, DialogModes.NO );
}

//freeTransform("Layer", ["Average", 50.0, 60.0, 0.0, 0.0, 0.0]);
//freeTransform("Layer", ["LeftTop", 100.0, 100.0, 40.0, 0.0, 0.0]);
//freeTransform("Layer", ["RightSide", 100.0, 100.0, 0.0, 20.0, 30.0]);

//freeTransform("Select", ["Average", 50.0, 60.0, 0.0, 0.0, 0.0]);
//freeTransform("Select", ["LeftTop", 100.0, 100.0, 40.0, 0.0, 0.0]);
//freeTransform("Select", ["RightSide", 100.0, 100.0, 0.0, 20.0, 30.0]);

//freeTransform("WorkPath", ["Average", 50.0, 60.0, 0.0, 0.0, 0.0]);
//freeTransform("WorkPath", ["LeftTop", 100.0, 100.0, 40.0, 0.0, 0.0]);
//freeTransform("WorkPath", ["RightSide", 100.0, 100.0, 0.0, 20.0, 30.0]);

function align(idAlign, isCanvas){
  
    var idAlgn = charIDToTypeID( "align" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref376 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref376.putEnumerated( idLyr, idOrdn, idTrgt );
    desc.putReference( idnull, ref376 );
    var idUsng = charIDToTypeID( "Usng" );
    var idADSt = charIDToTypeID( "ADSt" );
    var idAD = charIDToTypeID( idAlign );
    desc.putEnumerated( idUsng, idADSt, idAD );

    var idalignToCanvas = stringIDToTypeID( "alignToCanvas" );

    if (idAlign == "ADSContent"){      
      desc.putBoolean( idalignToCanvas, true );
      var idAply = charIDToTypeID( "Aply" );
      var idprojection = stringIDToTypeID( "projection" );
      var idAuto = charIDToTypeID( "Auto" );
      desc.putEnumerated( idAply, idprojection, idAuto );
      var idvignette = stringIDToTypeID( "vignette" );
      desc.putBoolean( idvignette, false );
      var idradialDistort = stringIDToTypeID( "radialDistort" );
      desc.putBoolean( idradialDistort, false );
    } else {
      desc.putBoolean( idalignToCanvas, isCanvas );
    }
    
    executeAction( idAlgn, desc, DialogModes.NO );
}

//align("AdCH", false); //"AdLf", "AdCH", "AdRg", "AdTp", "AdCV", "AdBt" - align kind, true/false - align to canvas
//align("AdCV", false); //"AdLf", "AdCH", "AdRg", "AdTp", "AdCV", "AdBt" - align kind, true/false - align to canvas
//align("AdBt", true); //"AdLf", "AdCH", "AdRg", "AdTp", "AdCV", "AdBt" - align kind, true/false - align to canvas
//align("AdRg", true); //"AdLf", "AdCH", "AdRg", "AdTp", "AdCV", "AdBt" - align kind, true/false - align to canvas

//align("ADSContent") - Auto-Align;

////////////////////////////////////DO ACTIONS////////////////////////////////

function doActionStep(nameAction, nameActionSet, numberStep) {
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

//doAction("B", "A");//do Action "B" in Action Set "A"
//doActionStep("B", "A");//do first step from Action "B" in Action Set "A" 
//doActionStep("B", "A", 2);//do  step number 2 from Action "B" in Action Set "A"

//////////////////////////////LAYER STYLES////////////////////////////////
var styleDB = {
  "ColorOverlay": {
    "kind":   "SoFi",
    "attrs":    ["Md  +BlnM", "Clr ",                "Opct#Prc"],
    "defaults": ["Nrml",      [127.0, 127.0, 127.0], 50.0]
    },
  "PatternOverlay": {
    "kind":   "patternFill",
    "attrs":    ["Md  +BlnM", "Opct#Prc", "Ptrn",                 "Angl#Ang", "Scl #Prc", "Algn", "phase"],
    "defaults": ["Nrml",      50.0,       "Default/orangeslices", 0.0,         120.0,      false,  [0.0, 0.0] ]
    },
  "StrokeColor": {
    "kind":   "FrFX",
    "attrs":    ["Styl+FStl", "Md  +BlnM", "Opct#Prc", "Sz  #Pxl", "overprint", "Clr "],
    "defaults": ["CtrF",      "Nrml",      50.0,       10,         true,        [255.0, 0.0, 0.0] ]
    },
  "StrokePattern": {
    "kind":   "FrFX",
    "attrs":    ["Styl+FStl", "Md  +BlnM", "Opct#Prc", "Sz  #Pxl", "overprint", "Ptrn",                 "Angl#Ang", "Scl #Prc", "Lnkd", "phase"],
    "defaults": ["CtrF",      "Nrml",      50.0,       10,         true,        "Default/orangeslices", 0.0,         100.0,      false,  [0.0, 0.0] ]
    },
  "DropShadow": {
    "kind":   "DrSh",
    "attrs":    ["Md  +BlnM", "Clr ",     "Opct#Prc", "uglg", "lagl#Ang", "Dstn#Pxl", "Ckmt#Pxl", "blur#Pxl", "TrnS",   "Nose#Prc", "AntA", "layerConceals", "Cntn"],
    "defaults": ["Mltp", [0.0, 0.0, 95.0], 75.0,      false,  45.0,       10.0,       5.0,        20.0,       "Linear", 25.0,       true,   true,            false]
    },
  "InnerShadow": {
    "kind":   "IrSh",
    "attrs":    ["Md  +BlnM", "Clr ",     "Opct#Prc", "uglg", "lagl#Ang", "Dstn#Pxl", "Ckmt#Pxl", "blur#Pxl", "TrnS",  "Nose#Prc", "AntA"],
    "defaults": ["Mltp", [0.0, 0.0, 95.0], 75.0,      false,  45.0,       10.0,       5.0,        20.0,       "Linear", 25.0,       true]
    },
  "OuterGlow": {
    "kind":   "OrGl",
    "attrs":    ["Md  +BlnM",         "Clr ", "Opct#Prc", "Nose#Prc", "GlwT+BETE", "Ckmt#Pxl", "blur#Pxl", "TrnS",   "ShdN#Prc", "Inpr#Prc", "AntA"],
    "defaults": ["Scrn", [255.0, 255.0, 0.0], 75.0,       60.0,       "SfBL",       25.0,      20.0,       "Linear", 65.0,      50.0,       true]
    },
  "InnerGlow": {
    "kind":   "IrGl",
    "attrs":    ["Md  +BlnM",         "Clr ", "Opct#Prc", "Nose#Prc", "GlwT+BETE", "glwS+IGSr", "Ckmt#Pxl", "blur#Pxl", "TrnS",  "ShdN#Prc", "Inpr#Prc", "AntA"],
    "defaults": ["Scrn", [255.0, 255.0, 0.0], 75.0,       60.0,       "SfBL",      "SrcE",      25.0,      20.0,        "Linear", 65.0,      50.0,       true]
    },
  "Satin": {
    "kind":   "ChFX",
    "attrs":    ["Md  +BlnM",         "Clr ", "Opct#Prc",  "lagl#Ang", "Dstn#Pxl", "blur#Pxl", "MpgS",   "Invr", "AntA"],
    "defaults": ["Scrn", [255.0, 255.0, 0.0], 75.0,        60.0,        25.0,      50.0,       "Linear", false, true]
  },
  "BevelAndEmboss": {
    "kind":   "ebbl",
    "attrs":    ["bvlS+BESl", "bvlT+bvlT", "bvlD+BESs", "srgR#Prc", "blur#Pxl", "Sftn#Pxl", "lagl#Ang", "Lald#Ang", "uglg", "TrnS",  "hglM+BlnM",   "hglC",                "hglO#Prc", "sdwM+BlnM", "sdwC",         "sdwO#Prc",     "antialiasGloss"],
    "defaults": ["OtrB",      "SfBL",      "Out ",       100.0,      5.0,       20.0,       60.0,        30.0,      false,  "Linear", "Scrn",            
[255.0, 255.0, 255.0], 75.0,       "Mltp",      [0.0, 0.0, 0.0], 75.0,          true]
  },
  "BevelAndEmbossCon": {
    "kind":   "ebbl",
    "attrs":    ["bvlS+BESl", "bvlT+bvlT", "bvlD+BESs", "srgR#Prc", "blur#Pxl", "Sftn#Pxl", "lagl#Ang", "Lald#Ang", "uglg", "TrnS",  "hglM+BlnM",   "hglC",                "hglO#Prc", "sdwM+BlnM", "sdwC",         "sdwO#Prc",     "antialiasGloss", "MpgS", "AntA", "Inpr#Prc"],
    "defaults": ["OtrB",      "SfBL",      "Out ",       100.0,      5.0,       20.0,       60.0,        30.0,      false,  "Linear", "Scrn",            
[255.0, 255.0, 255.0], 75.0,       "Mltp",      [0.0, 0.0, 0.0], 75.0,          true,             "Cone", true,   60.0]
  },
  "BevelAndEmbossTex": {
    "kind":   "ebbl",
    "attrs":    ["bvlS+BESl", "bvlT+bvlT", "bvlD+BESs", "srgR#Prc", "blur#Pxl", "Sftn#Pxl", "lagl#Ang", "Lald#Ang", "uglg", "TrnS",  "hglM+BlnM",   "hglC",                "hglO#Prc", "sdwM+BlnM", "sdwC",         "sdwO#Prc",     "antialiasGloss", "Ptrn",                 "Scl #Prc", "textureDepth#Prc", "InvT", "Algn", "phase"],
    "defaults": ["OtrB",      "SfBL",      "Out ",       100.0,      5.0,       20.0,       60.0,        30.0,      false,  "Linear", "Scrn",            
[255.0, 255.0, 255.0], 75.0,       "Mltp",      [0.0, 0.0, 0.0], 75.0,          true,             "Default/orangeslices", 100.0,      100.0,              false,  false,  [0.0, 0.0]]
  },
  "BevelAndEmbossConTex": {
    "kind":   "ebbl",
    "attrs":    ["bvlS+BESl", "bvlT+bvlT", "bvlD+BESs", "srgR#Prc", "blur#Pxl", "Sftn#Pxl", "lagl#Ang", "Lald#Ang", "uglg", "TrnS",  "hglM+BlnM",   "hglC",                "hglO#Prc", "sdwM+BlnM", "sdwC",         "sdwO#Prc",     "antialiasGloss", "MpgS", "AntA", "Inpr#Prc", "Ptrn",                 "Scl #Prc", "textureDepth#Prc", "InvT", "Algn", "phase"],
    "defaults": ["OtrB",      "SfBL",      "Out ",       100.0,      5.0,       20.0,       60.0,        30.0,      false,  "Linear", "Scrn",            
[255.0, 255.0, 255.0], 75.0,       "Mltp",      [0.0, 0.0, 0.0], 75.0,          true,             "Cone", true,   60.0,      "Default/orangeslices", 100.0,      100.0,              false,  false,  [0.0, 0.0]]
  },
  "3D": {
    "kind":   "St3D",
    "attrs":    ["Md  +BlnM",         "Clr ", "Opct#Prc", "uglg", "Angl#Ang", "Dstn#Pxl", "Srnk#Prc", "lagl#Ang", "Lald#Ang", "Drkn#Prc"],
    "defaults": ["Nrml",   [255.0, 0.0, 0.0], 75.0,       false,   45.0,       15.0,      8.0,        25.0,       15.0,       25.0]
  }
}

function applyStyle(actionName, arr) {

    arr = arr || false;

    dict = styleDB[actionName];

    var idsetd = charIDToTypeID( "setd" );
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var refStyle = new ActionReference();
        var idPrpr = charIDToTypeID( "Prpr" );
        var idLefx = charIDToTypeID( "Lefx" );
        refStyle.putProperty( idPrpr, idLefx );
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        refStyle.putEnumerated( idLyr, idOrdn, idTrgt );
    desc.putReference( idnull, refStyle );
    var idT = charIDToTypeID( "T   " );
        var descT = new ActionDescriptor();
        var idScl = charIDToTypeID( "Scl " );
        var idPrc = charIDToTypeID( "#Prc" );
        descT.putUnitDouble( idScl, idPrc, 100.000000 );

        if (dict.kind.length == 4) {
        var idStyle = charIDToTypeID( dict.kind );
          } else {
        var idStyle = stringIDToTypeID( dict.kind );
          }

        var idStyleType = charIDToTypeID( idStyle );

        var descStyleType = new ActionDescriptor();
            var idenab = charIDToTypeID( "enab" );
            descStyleType.putBoolean( idenab, true );
            var idpresent = stringIDToTypeID( "present" );
            descStyleType.putBoolean( idpresent, true );

            if (["StrokeColor", "StrokePattern"].indexOf(actionName) != -1) {
                if (actionName == "StrokePattern") {
                 var v = "Ptrn";
                } else {
                 var v = "SClr";
                }
                var idPntT = charIDToTypeID( "PntT" );
                var idFrFl = charIDToTypeID( "FrFl" );
                var idSClr = charIDToTypeID( v );
                descStyleType.putEnumerated( idPntT, idFrFl, idSClr );
            }             
  
            for (var k = 0; k < dict.attrs.length; k++) {
              
              if (arr) {
                 var v = arr[k];
              } else {
                 var v = dict.defaults[k];
              }
                           
              if (["TrnS", "MpgS"].indexOf(dict.attrs[k]) != -1) {

                var idTrnS = charIDToTypeID( dict.attrs[k] );
                            
                var descTrnS = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                descTrnS.putString( idNm, v );
                var idShpC = charIDToTypeID( "ShpC" );
                descStyleType.putObject( idTrnS, idShpC, descTrnS );
              
              }  else if (dict.attrs[k] == "phase") {
                var idphase = stringIDToTypeID( dict.attrs[k] );
                var descP = new ActionDescriptor();
                var idHrzn = charIDToTypeID( "Hrzn" );
                descP.putDouble( idHrzn, v[0] );
                var idVrtc = charIDToTypeID( "Vrtc" );
                descP.putDouble( idVrtc, v[1] );
                var idPnt = charIDToTypeID( "Pnt " );
                descStyleType.putObject( idphase, idPnt, descP ); 
              
              } else if (dict.attrs[k] == "Ptrn") {
                
                var idPtrn = charIDToTypeID( "Ptrn" );
                var descPtrn = new ActionDescriptor();
                var idNm = charIDToTypeID( "Nm  " );
                descPtrn.putString( idNm, v );
                var idIdnt = charIDToTypeID( "Idnt" );
                descPtrn.putString( idIdnt, "0" );
                descStyleType.putObject( idPtrn, idPtrn, descPtrn );
                
              } else if (["Clr ", "hglC", "sdwC"].indexOf(dict.attrs[k]) != -1) {
        
                if (dict.attrs[k].length == 4) {
                    var e = charIDToTypeID( dict.attrs[k] );
                } else {
                    var e = stringIDToTypeID( dict.attrs[k] );
                }
        
                var idClr = charIDToTypeID( e );
                
                var descClr = new ActionDescriptor();
                var idRd = charIDToTypeID( "Rd  " );
                descClr.putDouble( idRd,  v[0] );
                var idGrn = charIDToTypeID( "Grn " );
                descClr.putDouble( idGrn, v[1] );
                var idBl = charIDToTypeID( "Bl  " );
                descClr.putDouble( idBl,  v[2] );
                var idRGBC = charIDToTypeID( "RGBC" );
                descStyleType.putObject( idClr, idRGBC, descClr );
                
              } else if (dict.attrs[k].indexOf("#") != -1)  {
                
                var pair =  dict.attrs[k].split("#");       
                var e_arg1 = charIDToTypeID( pair[0]);
                var e_arg2 = charIDToTypeID( pair[1]);
                descStyleType.putUnitDouble( e_arg1, e_arg2, v );
                
              } else if (dict.attrs[k].indexOf("+") != -1)  {
                
                var pair =  dict.attrs[k].split("+");
                
                if (pair[0].length == 4) {
                    var e_arg1 = charIDToTypeID( pair[0]);
                } else {
                    var e_arg1 = stringIDToTypeID( pair[0] );
                }
        
                if (pair[1].length == 4) {
                    var e_arg2 = charIDToTypeID( pair[1]);
                } else {
                    var e_arg2 = stringIDToTypeID( pair[1] );
                }
                
                descStyleType.putEnumerated( e_arg1, e_arg2, v );
                
              } else {
               
                if (dict.attrs[k].length == 4) {
                    var e = charIDToTypeID( dict.attrs[k] );
                } else {
                    var e = stringIDToTypeID( dict.attrs[k] );
                }
                
                if (Number.isInteger(v)) {
                   descStyleType.putInteger( e, v )
                } else if (isFloat(v)) {
                   descStyleType.putDouble( e, v )
                } else {
                   descStyleType.putBoolean( e, v )
                }
                
              } 
              
            }

            if (actionName == "BevelAndEmboss") {
              var iduseShape = stringIDToTypeID( "useShape" );
              descStyleType.putBoolean( iduseShape, false  );
              var iduseTexture = stringIDToTypeID( "useTexture" );
              descStyleType.putBoolean( iduseTexture, false );
            }
            if (actionName == "BevelAndEmbossTex") {
              var iduseShape = stringIDToTypeID( "useShape" );
              descStyleType.putBoolean( iduseShape, false  );
              var iduseTexture = stringIDToTypeID( "useTexture" );
              descStyleType.putBoolean( iduseTexture, true );
            }
            if (actionName == "BevelAndEmbossCon") {
              var iduseShape = stringIDToTypeID( "useShape" );
              descStyleType.putBoolean( iduseShape, true  );
              var iduseTexture = stringIDToTypeID( "useTexture" );
              descStyleType.putBoolean( iduseTexture, false );
            }
            if (actionName == "BevelAndEmbossConTex") {
              var iduseShape = stringIDToTypeID( "useShape" );
              descStyleType.putBoolean( iduseShape, true  );
              var iduseTexture = stringIDToTypeID( "useTexture" );
              descStyleType.putBoolean( iduseTexture, true );
            }
    descT.putObject( idStyleType, idStyleType, descStyleType );
    var idLefx = charIDToTypeID( "Lefx" );
    desc.putObject( idT, idLefx, descT );
  
  executeAction( idsetd, desc, DialogModes.NO );    
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

//applyStyle("StrokeColor");
//applyStyle("StrokeColor", ["OutF", "Mltp", 80.0, 3, true, [128.0, 192.0, 0.0] ]);
//1-st parameter: "OutF", "CtrF", "InsF" - position; 
//2-nd parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//3-th parameter: opacity in percents; 4-th parameter: width stroke in pixels; 5-th parameter: true/false - overprint
//6-th parameter: color RGB;

//applyStyle("StrokePattern");
//applyStyle("StrokePattern", ["OutF",  "Scrn", 70.0, 20, true, "Default/orangeslices", 60.0, 120.0, false,  [10.0, 10.0] ]);
//1-st parameter: "OutF", "CtrF", "InsF" - position; 
//2-nd parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//3-rd parameter: opacity in percents, 4-th parameter: width stroke in pixels; 5-th parameter: true/false - overprint;
//6-td parameter: pattern name; 7-th parameter: angle in degrees;
//8-th parameter: scale in percents; 9-th parameter: true/false - align with layer;
//10-th parameter: [OffX, OffY] - offset

//applyStyle("ColorOverlay");
//applyStyle("ColorOverlay", ["Ovrl", [0.0, 0.0, 255.0], 80.0]);
//"Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode 

//applyStyle("PatternOverlay");
//applyStyle("PatternOverlay",  ["Dfrn", 90.0, "Default/smalldots", 45.0, 110.0,  false,  [10.0, 10.0] ]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: opacity in percents, 3-rd parameter: pattern name; 4-th parameter: angle in degrees;
//5-th parameter: scale in percents; 6-th parameter: true/false - align with layer;
//7-th parameter: [OffX, OffY] - offset

//applyStyle("DropShadow");
//applyStyle ("DropShadow", ["Mltp", [0.0, 0.0, 0.0], 80.0, false, 45.0,  20.0, 10.0, 40.0, "Gaussian", 15.0, true, true, false]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 
//4-th parameter: true/false - use global angle; 5-th parameter: angle in degrees;
//6-th parameter: distance in pixels; 7-th parameter: spread in percents; 8-th parameter: size in pixels; 
//9-th parameter: contour name; 10-th parameter: noise in percents; 11-th parameter: true/false - anti-alias;
//12-th parameter: true/false - knockout drop shadow; 13-th parameter: true/false - continuos

//applyStyle("InnerShadow");
//applyStyle("InnerShadow", ["Mltp", [0.0, 0.0, 0.0], 80.0, false, 45.0,  20.0, 10.0, 40.0, "Cone - Inverted", 15.0, true]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 
//4-th parameter: true/false - use global angle; 5-th parameter: angle in degrees;
//6-th parameter: distance in pixels; 7-th parameter: spread in percents; 8-th parameter: size in pixels; 
//9-th parameter: contour name; 10-th parameter: noise in percents; 11-th parameter: true/false - anti-alias;

//applyStyle("OuterGlow");
//applyStyle("OuterGlow", ["SftL", [255.0, 0.0, 0.0], 90.0, 50.0, "PrBL", 20.0, 40.0, "Cone - Asymmetrical", 50.0, 35.0, true]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 4-th parameter: noise in percents; 5-th parameter: "SfBL", "PrBL" - technique;
//6-th parameter: spread in percents; 7-th parameter: size in pixels; 
//8-th parameter: contour name; 9-th parameter: range in percents; 10-th parameter: jitter in percents; 11-th parameter: true/false - anti-alias;

//applyStyle("InnerGlow");
//applyStyle("InnerGlow", ["Scrn", [255.0, 0.0, 0.0], 90.0, 50.0, "SfBL", "SrcC", 20.0, 40.0, "Cove - Deep", 50.0, 35.0, true]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 4-th parameter: noise in percents; 
//5-th parameter: "SfBL", "PrBL" - technique; 6-th parameter: "SrcC", "SrcE" - source;
//7-th parameter: spread in percents; 8-th parameter: size in pixels; 
//9-th parameter: contour name; 10-th parameter: range in percents; 11-th parameter: jitter in percents; 12-th parameter: true/false - anti-alias;

//applyStyle("Satin");
//applyStyle("Satin", ["Ovrl", [0.0, 255.0, 0.0], 80.0,  135.0, 15.0,  30.0, "Half Round", true, true]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 
//4-th parameter: angle in degrees; 5-th parameter: distance in pixels; 6-th parameter: size in pixels;
//7-th parameter: contour name; 8-th parameter: true/false - invert; 9-th parameter: true/false - anti-alias;

//applyStyle("BevelAndEmboss");
//applyStyle("BevelAndEmboss", ["PlEb", "SfBL", "In  " , 95.0, 5.0, 15.0, 45.0, 15.0, false, "Cone", "Scrn", [255.0, 0.0, 0.0], 80.0, "Mltp", [0.0, 0.0, 0.0], 70.0, true]);
//1-st parameter: "OtrB", "InrB", "Embs", "PlEb", "strokeEmboss" - style (stroke emboss no worked without bevel contour add!);
//2-nd parameter: "SfBL", "PrBL", "Slmt" - technique; 3-rd parameter: "In  ", "Out ": Up/Down; 
//4-th parameter: depth in percents; 5-th parameter: size in pixels; 6-th parameter: soften in pixels;
//7-th parameter: lighting angle in degrees; 8-th parameter: altitude angle in degrees; 9-th parameter: true/false - use global angle;
//10-th parameter: contour name;
//11-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode highlights;
//12-nd parameter: color highlights in RGB; 13-rd parameter: opacity highlights in percents;
//14-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode shadows;
//15-nd parameter: color shadows in RGB; 16-rd parameter: opacity shadows in percents;
//17-th parameter: true/false - anti-alias gloss;

//applyStyle("BevelAndEmbossCon");
//applyStyle("BevelAndEmbossCon", ["PlEb", "SfBL", "In  " , 95.0, 5.0, 15.0, 45.0, 15.0, false, "Cone", "Scrn", [255.0, 0.0, 0.0], 80.0, "Mltp", [0.0, 0.0, 0.0], 70.0, true, "Gaussian", true,   40.0]);
//1-st parameter: "OtrB", "InrB", "Embs", "PlEb", "strokeEmboss" - style (stroke emboss no worked without bevel contour add!);
//2-nd parameter: "SfBL", "PrBL", "Slmt" - technique; 3-rd parameter: "In  ", "Out ": Up/Down; 
//4-th parameter: depth in percents; 5-th parameter: size in pixels; 6-th parameter: soften in pixels;
//7-th parameter: lighting angle in degrees; 8-th parameter: altitude angle in degrees; 9-th parameter: true/false - use global angle;
//10-th parameter: contour name;
//11-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode highlights;
//12-nd parameter: color highlights in RGB; 13-rd parameter: opacity highlights in percents;
//14-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode shadows;
//15-nd parameter: color shadows in RGB; 16-rd parameter: opacity shadows in percents;
//17-th parameter: true/false - anti-alias gloss;
//18-th parameter: contour name;
//19-th parameter: true/false - anti-alias;
//20-th parameter: range in percentes;

//applyStyle("BevelAndEmbossTex");
//applyStyle("BevelAndEmbossTex", ["Embs", "SfBL", "Out " , 400.0, 30.0, 15.0, 45.0, 15.0, false, "Cone", "Scrn", [255.0, 0.0, 0.0], 80.0, "Mltp", [0.0, 0.0, 0.0], 70.0, true, "Default/smalldots", 15.0,  100.0,  true, false,  [10.0, 10.0]]);
//1-st parameter: "OtrB", "InrB", "Embs", "PlEb", "strokeEmboss" - style (stroke emboss no worked without bevel contour add!);
//2-nd parameter: "SfBL", "PrBL", "Slmt" - technique; 3-rd parameter: "In  ", "Out ": Up/Down; 
//4-th parameter: depth in percents; 5-th parameter: size in pixels; 6-th parameter: soften in pixels;
//7-th parameter: lighting angle in degrees; 8-th parameter: altitude angle in degrees; 9-th parameter: true/false - use global angle;
//10-th parameter: contour name;
//11-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode highlights;
//12-nd parameter: color highlights in RGB; 13-rd parameter: opacity highlights in percents;
//14-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode shadows;
//15-nd parameter: color shadows in RGB; 16-rd parameter: opacity shadows in percents;
//17-th parameter: true/false - anti-alias gloss;
//18-th parameter: pattern name; 19-th parameter: scale in percents; 20-th parameter: depth in percents;
//21-th parameter: true/false - invert; 22-th parameter: true/false - align with layer; 23-th parameter: [OffX, OffY] - offset

//applyStyle("BevelAndEmbossConTex");
//applyStyle("BevelAndEmbossConTex", ["PlEb", "SfBL", "In  " , 95.0, 5.0, 15.0, 45.0, 15.0, false, "Cone", "Scrn", [255.0, 0.0, 0.0], 80.0, "Mltp", [0.0, 0.0, 0.0], 70.0, true, "Gaussian", true, 40.0, "Default/smalldots", 215.0,  100.0,  true, false,  [10.0, 10.0] ]);
//1-st parameter: "OtrB", "InrB", "Embs", "PlEb", "strokeEmboss" - style (stroke emboss no worked without bevel contour add!);
//2-nd parameter: "SfBL", "PrBL", "Slmt" - technique; 3-rd parameter: "In  ", "Out ": Up/Down; 
//4-th parameter: depth in percents; 5-th parameter: size in pixels; 6-th parameter: soften in pixels;
//7-th parameter: lighting angle in degrees; 8-th parameter: altitude angle in degrees; 9-th parameter: true/false - use global angle;
//10-th parameter: contour name;
//11-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode highlights;
//12-nd parameter: color highlights in RGB; 13-rd parameter: opacity highlights in percents;
//14-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode shadows;
//15-nd parameter: color shadows in RGB; 16-rd parameter: opacity shadows in percents;
//17-th parameter: true/false - anti-alias gloss;
//18-th parameter: contour name; 19-th parameter: true/false - anti-alias; 20-th parameter: range in percentes;
//21-th parameter: pattern name; 22-th parameter: scale in percents; 23-th parameter: depth in percents;
//24-th parameter: true/false - invert; 25-th parameter: true/false - align with layer; 26-th parameter: [OffX, OffY] - offset

//applyStyle("3D");
//applyStyle("3D", ["Mltp", [0.0, 0.0, 172.0], 75.0,  false, 135.0, 20.0, 10.0, 30.0, 60.0, 15.0]);
//1-st parameter: "Nrml", "Dslv", "Drkn", "Mltp", "CBrn", "linearBurn", "darkerColor", "Lghn", "Scrn", "CDdg", "linearDodge", "lighterColor", "Ovrl", "SftL", "HrdL", "vividLight", "linearLight", "pinLight", "hardMix", "Dfrn", "Xclu", "blendSubtraction", "blendDivide", "H", "Strt", "Clr", "Lmns" - blend mode;
//2-nd parameter: color RGB; 3-rd parameter: opacity in percents; 4-th parameter: true/false - use global angle;
//5-th parameter: angle in degrees; 6-th parameter: distance in pixels; 7-th parameter: shrink in percents;
//8-th parameter: lighting angle in degrees; 9-th parameter: altitude angle in degrees; 10-th parameter: darken in percents;

//CONTOURS NAMES:
//"Linear", "Cone", "Cone - Asymmetrical", "Cone - Inverted",  "Cove - Deep",  "Cove - Shallow",
//"Gaussian", "Guassian - Inverse",  "Half Round",  "Log",  "Notched Slope",  "Notched Slope - Rounded",
//"Peaks",  "Ring",  "Ring - Double",  "Ring - Triple",  "Rolling Slope - Ascending",  "Rolling Slope - Descending",
//"Rounded Slope", "Rounded Steps",  "Sawtooth 1",  "Sawtooth 2",  "Shallow Slope - Valley",  "Shallow Slope - Valleys",
//"Steep Slope - Jagged",  "Steep Slope - Rolling",  "Steps",  "Terraced",  "Valley - High",  "Valley - Low"

//PATTERNS NAMES:
//"Default/orangeslices", "Default/pat02", "Default/pat03", "Default/pat04", "Default/pat06", 
//"Default/smalldots", "Default/multihorizontalstripe", "Default/metal-grid-5", "Default/pat05"

////////////////////////////////// Delete /////////////////////////////////////

function deleteSelection() {
    var idDlt = charIDToTypeID( "Dlt " );
    executeAction( idDlt, undefined, DialogModes.NO );
}

/////////////////////////////////Export to Web////////////////////////////////

function exportForWeb(ftype, arr){
  var param = new ExportOptionsSaveForWeb();

  if (ftype.toLowerCase() == "png"){
    param.format = SaveDocumentType.PNG;
    var ext = ".png"; 
  }
  if (ftype.toLowerCase() == "jpg"){
    param.format = SaveDocumentType.JPEG;
    var ext = ".jpg"; 
  }
  if (ftype.toLowerCase() == "gif"){
    param.format = SaveDocumentType.COMPUSERVEGIF;
    var ext = ".gif"; 
  }
  
  param.PNG8 = false;

  arr = arr || false;
  if (arr) {
    if (ftype.toLowerCase() == "jpg"){ 
      param.transparency = false;
    } else {
      param.transparency = arr[1]
    }
    param.quality = arr[0];
  } else {
    param.transparency = true;
    param.quality = 100;
  }   
  
  var exportName = app.activeDocument.name.split(".")[0] + ext;
  app.activeDocument.exportDocument(new File(exportName),ExportType.SAVEFORWEB, param );
}

//exportForWeb("PNG");
//exportForWeb("PNG", [50, false]);

//exportForWeb("GIF");
//exportForWeb("GIF", [50, false]);

//exportForWeb("JPG");
//exportForWeb("JPG", [50]);

//////////////////////// User code part //////////////////////////////////////
