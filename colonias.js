function change(linea, codigo){
    alcaldia = document.getElementById(linea);
    colonia = document.getElementById(codigo);
    descripcion = document.getElementById(descripcion);
    colonia.value ="";
    colonia.innerHTML = "";
    if(alcaldia.value == "Colchones"){
    var optionArray = ["|","INTENSSE IND|INTENSSE IND",
                              "KEN 2 IND|KEN 2 IND",
                              "NATIVE IND|NATIVE IND",
                              "NATIVE MAT|NATIVE MAT",
                              "TEO IND|TEO IND",
                              "TEO MAT|TEO MAT",
                              "TUTTI FRUT M|TUTTI FRUT M",
                              "VERANO R IND|VERANO R IND",
                              "VERANO R MAT|VERANO R MAT",
                              "ALTITUD IND|ALTITUD IND",
                              "ATHENAS IND|ATHENAS IND",
                              "ASPEN MAT|ASPEN MAT",
                              "COMFORT E IN|COMFORT E IN",
                              "GALERY IND|GALERY IND",
                              "GALERY M|GALERY M",
                              "HOTELERO IND|HOTELERO IND",
                              "HOTELERO MAT|HOTELERO MAT",
                              "IBIZA IND|IBIZA IND",
                              "NOTTINGHAM I|NOTTINGHAM I",
                              "ROMA MEL MAT|ROMA MEL MAT"];
    } else if(alcaldia.value == "Camas"){
    var optionArray = ["|","A31|A31",
                              "BSINV4CHO|BSINV4CHO",
                              "BSKSV4CHO|BSKSV4CHO",
                              "BSMAV4CHO|BSMAV4CHO",
                              "CATRE 505|CATRE 505",
                              "CATRE 507|CATRE 507",
                              "CORETA IND|CORETA IND",
                              "DANUBIO I AZ|DANUBIO I AZ",
                              "DANUBIO IND|DANUBIO IND",
                              "DANUBIO MT A|DANUBIO MT A",
                              "DANUBIO MT C|DANUBIO MT C",
                              "ECUADOR MT|ECUADOR MT",
                              "LIT ALEXA M|LIT ALEXA M",
                              "SEVILLA MT G|SEVILLA MT G",
                              "SEVILLA MT R|SEVILLA MT R",
                              "SHIPS AHOY I|SHIPS AHOY I",
                              "SINALOENSE I|SINALOENSE I"];                              
    } else if(alcaldia.value == "Bicicletas"){
    var optionArray = ["|","BRONCO R-12|BRONCO R-12",
                              "COUNTRY R-24|COUNTRY R-24",
                              "CRUISER R-26|CRUISER R-26",
                              "CUTY R12|CUTY R12",
                              "CUTY R16|CUTY R16",
                              "EVERGREEN-16|EVERGREEN-16",
                              "EVERGREEN-20|EVERGREEN-20",
                              "HUNTER R-16|HUNTER R-16",
                              "LONDON R700|LONDON R700",
                              "MAGNUM 26|MAGNUM 26",
                              "RADAR R-26|RADAR R-26",
                              "SPYRO R-16|SPYRO R-16",
                              "SPYRO R-20|SPYRO R-20",
                              "SUPERBRONCCO|SUPERBRONCCO",
                              "SWEET GIRL16|SWEET GIRL16",
                              "SWEETGIRLR20|SWEETGIRLR20",
                              "TITAN R12|TITAN R12",
                              "TITAN-26|TITAN-26",
                              "TROYA R16|TROYA R16",
                              "TROYA R20|TROYA R20"];                           
    } else if(alcaldia.value == "Enseres"){
    var optionArray = ["|","AUTOMATICO|AUTOMATICO",
                              "CYCLONE|CYCLONE",
                              "STANDAR|STANDAR",
                              "507|507",
                              "5071|5071",
                              "FREAL 2020|FREAL 2020",
                              "LMV 2025|LMV 2025",
                              "OP-1006|OP-1006",
                              "VP-00018TG|VP-00018TG",
                              "VWB-1016|VWB-1016",
                              "BAT DELUXE|BAT DELUXE",
                              "BAT ESPERANZ|BAT ESPERANZ",
                              "BAT MILAN JU|BAT MILAN JU",
                              "NI-E250TRGZA|NI-E250TRGZA",
                              "NI-E500CRAZA|NI-E500CRAZA",
                              "NI-E650CRBZA|NI-E650CRBZA",
                              "NI-M250TPZA|NI-M250TPZA",
                              "NI-M300TAZA|NI-M300TAZA",
                              "BIKM-300PB|BIKM-300PB",
                              "BIKM-800 IN|BIKM-800 IN",
                              "FILTRO BLIST|FILTRO BLIST",
                              "HV-120 KG3|HV-120 KG3",
                              "HV-120KG2|HV-120KG2",
                              "KIT FILTRO|KIT FILTRO",
                              "LKM-4510 PR|LKM-4510 PR",
                              "LKM-5510 V/V|LKM-5510 V/V",
                              "PKK-350 R|PKK-350 R",
                              "PKK-380 SA|PKK-380 SA",
                              "PKK-550 SR|PKK-550 SR",
                              "PKK-750SA|PKK-750SA",
                              "WD-12K/WD-16|WD-12K/WD-16",
                              "BAT ECKO 8PZ|BAT ECKO 8PZ",
                              "EKCO 7L|EKCO 7L",
                              "EKCO 8L|EKCO 8L",
                              "PRESTO 15L|PRESTO 15L",
                              "PRESTO 21L|PRESTO 21L",
                              "VASCONIA3NEG|VASCONIA3NEG",
                              "VASCONIA3ROJ|VASCONIA3ROJ",
                              "20WMCOREB|20WMCOREB",
                              "2523|2523",
                              "4108-13|4108-13",
                              "4126-13|4126-13",
                              "450-10|450-10",
                              "4655-813|4655-813",
                              "6662-13|6662-13",
                              "BLSTKAG-BPB|BLSTKAG-BPB",
                              "BLSTKAG-RPB|BLSTKAG-RPB",
                              "BLSTKAG-WPB|BLSTKAG-WPB",
                              "BLSTVB-POO|BLSTVB-POO",
                              "BPST02B00013|BPST02B00013",
                              "BRLY07-R00|BRLY07-R00",
                              "BRLY07-S00|BRLY07-S00",
                              "BVSTDCDW12B|BVSTDCDW12B",
                              "CKSTSM2885|CKSTSM2885",
                              "FPSTHB2600W|FPSTHB2600W",
                              "FPSTPP7310|FPSTPP7310",
                              "GCSTBS4801L|GCSTBS4801L",
                              "GCSTBS4801P|GCSTBS4801P",
                              "GCSTBS4801P|GCSTBS4801P",
                              "GCSTBS4801S|GCSTBS4801S",
                              "GCSTBS4801T|GCSTBS4801T",];                            
    } else if(alcaldia.value == "Electronica"){ 
    var optionArray = ["|","SC-AKX110PN|SC-AKX110PN",
                              "SC-CMAX100LM|SC-CMAX100LM",
                              "SC-CMAX50LMK|SC-CMAX50LMK",
                              "TC-43FS510X|TC-43FS510X",
                              "TC-50GX500X|TC-50GX500X",
                              "TC-55GX500X|TC-55GX500X",
                              "49LK5750PUA|49LK5750PUA",
                              "55UM7400PUA|55UM7400PUA",
                              "CM1560|CM1560",
                              "DP-132|DP-132",
                              "FST-GTK371P|FST-GTK371P",
                              "IP-4211BK|IP-4211BK",
                              "MCS-9930BT|MCS-9930BT",
                              "MHD-1686|MHD-1686",
                              "MSA-5815|MSA-5815",
                              "MSA-6108|MSA-6108",
                              "MSA-6112|MSA-6112",
                              "MSA-6510|MSA-6510",
                              "MSA-7816|MSA-7816",
                              "MSA-7908BTE|MSA-7908BTE",
                              "MSA-7908ND|MSA-7908ND",
                              "MSA-7912BTE|MSA-7912BTE",
                              "MSA-8015|MSA-8015",
                              "TRI-1002|TRI-1002",
                              "HYLED4021NIM|HYLED4021NIM",
                              "HYLED5014N4K|HYLED5014N4K"];                           
    } else if(alcaldia.value == "Linea blanca"){
    var optionArray = ["|","CHM15BPL1|CHM15BPL1",
                              "CHM5BPL2|CHM5BPL2",
                              "CM5041B|CM5041B",
                              "CM5041N|CM5041N",
                              "CM5041SI|CM5041SI",
                              "CM7631I|CM7631I",
                              "CM7641B|CM7641B",
                              "CM7641L|CM7641L",
                              "CM7641N|CM7641N",
                              "CM8041B|CM8041B",
                              "CM8041N|CM8041N",
                              "CM8041SI|CM8041SI",
                              "CM8042I|CM8042I",
                              "DEM7673CFIX|DEM7673CFIX",
                              "EM5022BAPN0|EM5022BAPN0",
                              "EM5030BAIS0|EM5030BAIS0",
                              "EM5031BAPB0|EM5031BAPB0",
                              "EM5032BAPS0|EM5032BAPS0",
                              "EM5040BAIB0|EM5040BAIB0",
                              "EM5040BAIN0|EM5040BAIN0",
                              "EM5040BAIN0|EM5040BAIN0",
                              "EM5043BFIS0|EM5043BFIS0",
                              "EM5046CAIX0|EM5046CAIX0",
                              "EM7622BAPS0|EM7622BAPS0",
                              "EM7622BAPS0|EM7622BAPS0",
                              "EM7641BAIN0|EM7641BAIN0",
                              "EM7641BAIS0|EM7641BAIS0",
                              "LMA70213CBAB|LMA70213CBAB",
                              "LMA70214VBAB|LMA70214VBAB",
                              "LMA72215CBAB|LMA72215CBAB",
                              "LMA78112CBAB|LMA78112CBAB",
                              "LMA79113VBAB|LMA79113VBAB",
                              "LMD8124PBAB0|LMD8124PBAB0",
                              "MA07641|MA07641",
                              "MA08041S|MA08041S",
                              "RMS510IAMRE0|RMS510IAMRE0",
                              "RMS510IVMRE0|RMS510IVMRE0",
                              "SME26N5MNBBP|SME26N5MNBBP",
                              "SMG26N5MNBAB|SMG26N5MNBAB",
                              "WEM7640BAIN0|WEM7640BAIN0",
                              "WEM7659CFIS0|WEM7659CFIS0",
                              "EI3020BAPS0|EI3020BAPS0",
                              "EI3030BAPN0|EI3030BAPN0",
                              "EI3032BAPL0|EI3032BAPL0",
                              "EI3032BAPN0|EI3032BAPN0",
                              "EI5020BAPB0|EI5020BAPB0",
                              "EI5020BAPN|EI5020BAPN",
                              "PIG5101LO|PIG5101LO",
                              "PIG5101NN0|PIG5101NN0",
                              "PIG5101S0|PIG5101S0",
                              "PSI45BB|PSI45BB",
                              "WEI3025BAIN0|WEI3025BAIN0",
                              "LEA46102VBAB|LEA46102VBAB",
                              "LIQ1220B0|LIQ1220B0",
                              "LRE15M|LRE15M",
                              "LRE16V0|LRE16V0",
                              "LRE18V0|LRE18V0",
                              "LRE21M|LRE21M",
                              "SEG26N5MNBAB|SEG26N5MNBAB",
                              "EK-24N MARSE|EK-24N MARSE",
                              "EK-501F|EK-501F",
                              "EK-501FB|EK-501FB",
                              "EK-501G|EK-501G",
                              "EKE-505F INN|EKE-505F INN",
                              "LCK60|LCK60",
                              "LDK-1600S|LDK-1600S",
                              "LR-2213P|LR-2213P",
                              "LRK-410J|LRK-410J",
                              "RR63D6WGX|RR63D6WGX",
                              "WSA1302P|WSA1302P",
                              "DFR-1610DMX|DFR-1610DMX",
                              "DFR-32210GMD|DFR-32210GMD",
                              "DFR-9010DMX|DFR-9010DMX",
                              "DWF-DG1B386C|DWF-DG1B386C",
                              "DWF-DG362ARR|DWF-DG362ARR",
                              "KOR-1N0AS|KOR-1N0AS",
                              "KOR-660S|KOR-660S",
                              "KOR-660W|KOR-660W",
                              "KOR-661W|KOR-661W",
                              "NN-SB636WRUH|NN-SB636WRUH",];                          
    
};
for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    colonia.options.add(newOption);
  };
}


function change2(codigo, descripcion){
    colonia = document.getElementById(codigo);
    descripcion = document.getElementById(descripcion);
    descripcion.value ="";
    descripcion.innerHTML = "";
    if(colonia.value == "INTENSSE IND"){
    var optionArray = ["Colchon intensse individual restonic|Colchon intensse individual restonic "];
    } else if(colonia.value == "KEN 2 IND"){
    var optionArray = ["Colchon ken restonic individual|Colchon ken restonic individual "];                              
    }else if(colonia.value == "NATIVE IND"){
    var optionArray = ["Colchon native restonic individual|Colchon native restonic individual  "];                              
    }else if(colonia.value == "NATIVE MAT"){
    var optionArray = ["Colchon native restonic matrimonial|Colchon native restonic matrimonial"];                              
    }else if(colonia.value == "TEO IND"){
    var optionArray = ["Colchon mimo restonic individual|Colchon mimo restonic individual "];                              
    }else if(colonia.value == "TEO MAT"){
    var optionArray = ["Colchon mimo restonic matrimonial|Colchon mimo restonic matrimonial "];                              
    }else if(colonia.value == "TUTTI FRUT M"){
    var optionArray = ["Colchon tuttifrutti matrimonial|Colchon tuttifrutti matrimonial"];                              
    }else if(colonia.value == "TUTTI FRUT M"){
    var optionArray = ["Colchon verano restonic individual|Colchon verano restonic individual "];                              
    }else if(colonia.value == "VERANO R MAT"){
    var optionArray = ["Colchon verano restonic matrimonial|Colchon verano restonic matrimonial"];                              
    }else if(colonia.value == "ALTITUD IND"){
    var optionArray = ["Colchon altitud wendy individual|Colchon altitud wendy individual "];                              
    }else if(colonia.value == "ATHENAS IND"){
    var optionArray = ["Colchon athenas wendy individual|Colchon athenas wendy individual"];                              
    }else if(colonia.value == "ASPEN MAT"){
    var optionArray = ["Colchon aspen america matrimonial|Colchon aspen america matrimonial"];                              
    }else if(colonia.value == "COMFORT E IN"){
    var optionArray = ["Colchon comfort america individual|Colchon comfort america individual "];                              
    }else if(colonia.value == "GALERY IND"){
    var optionArray = ["Colchon galery america individual|Colchon galery america individual "];                              
    }else if(colonia.value == "GALERY M"){
    var optionArray = ["Colchon galery america matrimonial|Colchon galery america matrimonial"];                              
    }else if(colonia.value == "HOTELERO IND"){
    var optionArray = ["Colchon hotelero america individual|Colchon hotelero america individual "];                              
    }else if(colonia.value == "HOTELERO MAT"){
    var optionArray = ["Colchon hotelero america matrimonial|Colchon hotelero america matrimonial "];                              
    }else if(colonia.value == "IBIZA IND"){
    var optionArray = ["Colchon ibiza america individual|Colchon ibiza america individual"];                              
    }else if(colonia.value == "NOTTINGHAM I"){
    var optionArray = ["Colchon nottinghman therapedic individual|Colchon nottinghman therapedic individual "];                              
    }else if(colonia.value == "ROMA MEL MAT"){
    var optionArray = ["Colchon roma poliuretanos matrimonial|Colchon roma poliuretanos matrimonial"];                              
    }else if(colonia.value == "A31"){
    var optionArray = ["CAMA DE ARCO INDIVIDUAL TUBO 3|CAMA DE ARCO INDIVIDUAL TUBO 3"];                              
    }else if(colonia.value == "BSINV4CHO"){
    var optionArray = ["Base individual madera vinipiel marca camacho|Base individual madera vinipiel marca camacho"];                              
    }else if(colonia.value == "BSKSV4CHO"){
    var optionArray = ["Base kinsai madera vinipiel marca camacho|Base kinsai madera vinipiel marca camacho"];                              
    }else if(colonia.value == "BSMAV4CHO"){
    var optionArray = ["Base matrimonial de madera vinipiel marca camacho|Base matrimonial de madera vinipiel marca camacho"];                              
    }else if(colonia.value == "CATRE 505"){
    var optionArray = ["Catre cajon ancho 76 cm con colchon marca jaco|Catre cajon ancho 76 cm con colchon marca jaco"];                              
    }else if(colonia.value == "CATRE 507"){
    var optionArray = ["Catre supremo lona alta marca jaco|Catre supremo lona alta marca jaco"];                              
    }else if(colonia.value == "CORETA IND"){
    var optionArray = ["Cama infantil coreta individual marca jaco|Cama infantil coreta individual marca jaco"];                              
    }else if(colonia.value == "DANUBIO I AZ"){
    var optionArray = ["Cama danubio individual azul marca jaco|Cama individual azul marca jaco"];                              
    }else if(colonia.value == "DANUBIO IND"){
    var optionArray = ["Cama danubio individual cafe marca jaco|Cama danubio individual cafe marca jaco"];                              
    }else if(colonia.value == "DANUBIO MT A"){
    var optionArray = ["Cama danubio matrimonial azul marca jaco|Cama danubio matrimonial azul marca jaco"];                              
    }else if(colonia.value == "DANUBIO MT C"){
    var optionArray = ["Cama danubio matrimonial café marca jaco|Cama danubio matrimonial café marca jaco"];                              
    }else if(colonia.value == "ECUADOR MT"){
    var optionArray = ["Litera ecuador matrimonial chocolate/naranja marca jaco|Litera ecuador matrimonial chocolate/naranja marca jaco"];                              
    }else if(colonia.value == "LIT ALEXA M"){
    var optionArray = ["Litera alexa mixta naranja/chocolate marca jaco|Litera alexa mixta naranja/chocolate marca jaco"];                              
    }else if(colonia.value == "SEVILLA MT G"){
    var optionArray = ["Cama sevilla matrimonial aluminio marca jaco|Cama sevilla matrimonial aluminio marca jaco"];                              
    }else if(colonia.value == "SEVILLA MT R"){
    var optionArray = ["Cama sevilla matrimonial roja marca jaco|Cama sevilla matrimonial roja marca jaco"];                              
    }else if(colonia.value == "SHIPS AHOY I"){
    var optionArray = ["Cama infantil indivodual ships ahoy marca jaco|Cama infantil indivodual ships ahoy marca jaco"];                              
    }else if(colonia.value == "SINALOENSE I"){
    var optionArray = ["Litera sinaloense individual multicolor marca jaco|Litera sinaloense individual multicolor marca jaco"];
    }else if(colonia.value == "BRONCO R-12"){
    var optionArray = ["BICICLETAS BRONCO MARCA MERCURIO RODADA-12|BICICLETAS BRONCO MARCA MERCURIO RODADA-12"];                              
    }else if(colonia.value == "COUNTRY R-24"){
    var optionArray = ["BICICLETA COUNTRY MARCA MERCURIO RODADA-24 6 VELOCIDADES|BICICLETA COUNTRY MARCA MERCURIO RODADA-24 6 VELOCIDADES"];                              
    }else if(colonia.value == "CRUISER R-26"){
    var optionArray = ["Bicicleta cruiser marca mercurio rodada-26 1 velocidad|Bicicleta cruiser marca mercurio rodada-26 1 velocidad"];                              
    }else if(colonia.value == "CUTY R12"){
    var optionArray = ["Bicicleta cuty marca mercurio rodada-12 con muñeca|Bicicleta cuty marca mercurio rodada-12 con muñeca"];                              
    }else if(colonia.value == "CUTY R16"){
    var optionArray = ["Bicicleta cuty marca mercurio  niña rodada-16 1 velocidad|Bicicleta cuty marca mercurio  niña rodada-16 1 velocidad"];                              
    }else if(colonia.value == "EVERGREEN-16"){
    var optionArray = ["Bicicleta evergreen marca mercurio rodada-16 niña 1 velocidad|Biciclera evergreen marca mercurio rodada-16 niña 1 velocidad"];                              
    }else if(colonia.value == "EVERGREEN-20"){
    var optionArray = ["Bicicleta evergreen marca mercurio rodada-20|Bicicleta evergreen marca mercurio rodada-20"];                              
    }else if(colonia.value == "HUNTER R-16"){
    var optionArray = ["Bicicleta hunter marca mercurio rodada-16|Bicicleta hunter marca mercurio rodada-16"];                              
    }else if(colonia.value == "LONDON R700"){
    var optionArray = ["Bicicleta london marca mercurio 1 velocidad|Bicicleta london marca mercurio 1 velocidad"];                              
    }else if(colonia.value == "MAGNUM 26"){
    var optionArray = ["Triciclo magnum marca mercurio rodada-26 amarillo|Triciclo magnum marca mercurio rodada-26 amarillo"];                              
    }else if(colonia.value == "RADAR R-26"){
    var optionArray = ["Bicleta radar marca mercurio rodada-26 18 velocidades|Bicleta radar marca mercurio rodada-26 18 velocidades"];                              
    }else if(colonia.value == "SPYRO R-16"){
    var optionArray = ["Bicicleta spyro marca mercurio rodada-16 1velocidad|Bicicleta spyro marca mercurio rodada-16 1velocidad"];                              
    }else if(colonia.value == "SPYRO R-20"){
    var optionArray = ["Bicicleta spyro marca mercurio rodada-20 1 velocidad|Bicicleta spyro marca mercurio rodada-20 1 velocidad"];                              
    }else if(colonia.value == "SUPERBRONCCO"){
    var optionArray = ["Bicicleta superbroncco marca mercurio cromada rodada-20 1velocidad|Bicicleta superbroncco marca mercurio cromada rodada-20 1velocidad"];                              
    }else if(colonia.value == "SWEET GIRL16"){
    var optionArray = ["Bicicleta sweet girl marca mercurio rodad-16 niña|Bicicleta sweet girl marca mercurio rodad-16 niña"];                              
    }else if(colonia.value == "SWEETGIRLR20"){
    var optionArray = ["Bicicleta sweet girl marca mercurio rodada-20 1velocidad niña|Bicicleta sweet girl marca mercurio rodada-20 1velocidad niña"];                              
    }else if(colonia.value == "TITAN R12"){
    var optionArray = ["Bicicleta tintan marca mercurio rodada-12 1velocidad infantil|Bicicleta tintan marca mercurio rodada-12 1velocidad infantil"];                              
    }else if(colonia.value == "TITAN-26"){
    var optionArray = ["Triciclo titan marca mercurio rodada-26|Triciclo titan marca mercurio rodada-26"];                              
    }else if(colonia.value == "TROYA R16"){
    var optionArray = ["Bicicleta troya marca mercurio rodada-16 1 velocidad|Bicicleta troya marca mercurio rodada-16 1 velocidad"];                              
    }else if(colonia.value == "TROYA R20"){
    var optionArray = ["Bicicleta troya marca mercurio 1 velocidad|Bicicleta troya marca mercurio 1 velocidad"];                              
    }else if(colonia.value == "NI-E250TRGZA"){
    var optionArray = ["Plancha panasonic vapor|plancha panasonic vapor"];                              
    }else if(colonia.value == "NI-E500CRAZA"){
    var optionArray = ["Plancha panasonic verde de vapor|plancha panasonic verde de vapor"];                              
    }else if(colonia.value == "NI-E650CRBZA"){
    var optionArray = ["Plancha vapor panasonic cerami|plancha vapor panasonic cerami"];                              
    }else if(colonia.value == "NI-M250TPZA"){
    var optionArray = ["Plancha panasonic rosa de vapor|plancha panasonic rosa de vapor"];                              
    }else if(colonia.value == "NI-M300TAZA"){
    var optionArray = ["Plancha panasonic azul de vapor|plancha panasonic azul de vapor"];                              
    }else if(colonia.value == "BIKM-300PB"){
    var optionArray = ["Batidora de inmersion koblenz|batidora de inmersion koblenz"];                              
    }else if(colonia.value == "BIKM-800 IN"){
    var optionArray = ["Batidora koblenz inmersion 800watts|batidora koblenz inmersion 800watts"];                              
    }else if(colonia.value == "FILTRO BLIST"){
    var optionArray = ["Filtro blister marca koblenz multiusos 3 pza|filtro blister marca koblenz multiusos 3 pza"];                              
    }else if(colonia.value == "HV-120 KG3"){
    var optionArray = ["Aspiradora koblenz manual portatil 3k|aspiradora koblenz manual portatil 3k"];                              
    }else if(colonia.value == "HV-120KG2"){
    var optionArray = ["Aspiradora manual koblenz|aspiradora manual koblenz"];                              
    }else if(colonia.value == "KIT FILTRO"){
    var optionArray = ["Kit filtro plisado koblenz|kit filtro plisado koblenz"];                              
    }else if(colonia.value == "LKM-4510 PR"){
    var optionArray = ["Licuadora koblenz vaso de plastico 10 velocidades|licuadora koblenz vaso de plastico 10 velocidades"];                              
    }else if(colonia.value == "LKM-5510 V/V"){
    var optionArray = ["Combo lic lkm-5510+ vaso de vidrio marca koblenz|combo lic lkm-5510+ vaso de vidrio marca koblenz"];                              
    }else if(colonia.value == "PKK-350 R"){
    var optionArray = ["Plancha koblenz rosa con blanco|plancha koblenz rosa con blanco"];                              
    }else if(colonia.value == "PKK-380 SA"){
    var optionArray = ["Plancha koblenz verde con blanco|plancha koblenz verde con blanco"];                              
    }else if(colonia.value == "PKK-550 SR"){
    var optionArray = ["Plancha koblenz rosa o blanco|plancha koblenz rosa o blanco"];                              
    }else if(colonia.value == "PKK-750SA"){
    var optionArray = ["Plancha koblenz vapor turquesa|plancha koblenz vapor turquesa"];                              
    }else if(colonia.value == "WD-12K/WD-16"){
    var optionArray = ["Filtro koblenz plisado para aspiradora wd-12k/wd-1|filtro koblenz plisado para aspiradora wd-12k/wd-1"];                              
    }else if(colonia.value == "BAT ECKO 8PZ"){
    var optionArray = ["Batidora ecko 8piezas negra|batidora ecko 8piezas negra"];                              
    }else if(colonia.value == "EKCO 7L"){
    var optionArray = ["Olla ecko express 7litros |olla ecko express 7litros "];                              
    }else if(colonia.value == "EKCO 8L"){
    var optionArray = ["Olla ecko express clasica tradicional 8litros|olla ecko express clasica tradicional 8litros"];                              
    }else if(colonia.value == "PRESTO 15L"){
    var optionArray = ["Olla ecko de presion 15 litros|olla ecko de presion 15 litros"];                              
    }else if(colonia.value == "PRESTO 21L"){
    var optionArray = ["Olla ecko de presion 21 litros|olla ecko de presion 21 litros"];                              
    }else if(colonia.value == "VASCONIA3NEG"){
    var optionArray = ["Juego ecko de 3 sarten vasconia negro|juego ecko de 3 sarten vasconia negro"];                              
    }else if(colonia.value == "VASCONIA3ROJ"){
    var optionArray = ["Juego ecko de 3 sarten vasconia rojo|juego ecko de 3 sarten vasconia rojo"];                              
    }else if(colonia.value == "20WMCOREB"){
    var optionArray = ["Combo oster 3 licuadora,plancha,cafetera +1 jarrra|combo oster 3 licuadora,plancha,cafetera +1 jarrra"];                              
    }else if(colonia.value == "2523"){
    var optionArray = ["Esquim / fuente de sodas oster|esquim / fuente de sodas oster"];                              
    }else if(colonia.value == "4108-13"){
    var optionArray = ["Licuadora oster 10velocidades vaso plastico|licuadora oster 10v vaso plastico"];                              
    }else if(colonia.value == "4126-13"){
    var optionArray = ["Licuadora oster 2velocidades vaso vidrio roja|licuadora oster 2velocidades vaso vidrio roja"];                              
    }else if(colonia.value == "450-10"){
    var optionArray = ["Licuadora oster cromada 1 velocidad vaso de vidrio|licuadora oster cromada 1 velocidad vaso de vidrio"];                              
    }else if(colonia.value == "4655-813"){
    var optionArray = ["Licuadora oster cromada 3velocidades vaso de vidrio|licuadora oster cromada 3velocidades vaso de vidrio"];                              
    }else if(colonia.value == "6662-13"){
    var optionArray = ["Licuadora oster vaso de plastico 10 velocidades|licuadora oster vaso de plastico 10 velocidades"];                              
    }else if(colonia.value == "BLSTKAG-BPB"){
    var optionArray = ["Licuadora oster 2 velocidades vaso de vidrio negra|licuadora oster 2 velocidades vaso de vidrio negra"];                              
    }else if(colonia.value == "BLSTKAG-RPB"){
    var optionArray = ["Licuadora oster 2 velocidades vaso de vidrio roja|licuadora oster 2 velocidades vaso de vidrio roja"];                              
    }else if(colonia.value == "BLSTKAG-WPB"){
    var optionArray = ["Licuadora oster 2 velocidades vaso de vidrio blanca|licuadora oster 2 velocidades vaso de vidrio blanca"];                              
    }
    else if(colonia.value == "BLSTVB-POO"){
    var optionArray = ["Licuadora oster 2 caballos fuerza negra|licuadora oster 2 caballos fuerza negra"];                              
    }
    else if(colonia.value == "BPST02B00013"){
    var optionArray = ["Licuadora oster negra 1 velocidad vidrio profesional|licuadora oster negra 1 velocidad vidrio profesional"];                              
    }else if(colonia.value == "BRLY07-R00"){
    var optionArray = ["Licuadora oster reversible roja|licuadora oster reversible roja "];                              
    }else if(colonia.value == "BRLY07-S00"){
    var optionArray = ["Licuadora oster reversible plata|licuadora oster reversible plata"];                              
    }
    else if(colonia.value == "BVSTDCDW12B"){
    var optionArray = ["Cafetera oster 12 tazas negra|cafetera oster 12 tazas negra"];                              
    }else if(colonia.value == "CKSTSM2885"){
    var optionArray = ["Sandwichera oster compacta negra|sandwichera oster compacta negra"];                              
    }else if(colonia.value == "FPSTHB2600W"){
    var optionArray = ["Batidora oster blanca plastico blanca|batidora oster blanca plastico blanca"];                              
    }else if(colonia.value == "FPSTPP7310"){
    var optionArray = ["Palomera oster roja|palomera oster roja"];                              
    }else if(colonia.value == "GCSTBS4801L"){
    var optionArray = ["Plancha oster de vapor negra con azul|plancha oster de vapor negra con azul"];                              
    }else if(colonia.value == "GCSTBS4801P"){
    var optionArray = ["Plancha oster de vapor negra con rosa|plancha oster de vapor negra con rosa"];                              
    }else if(colonia.value == "GCSTBS4801R"){
    var optionArray = ["Plancha oster de vapor roja|plancha oster de vapor roja"];                              
    }else if(colonia.value == "GCSTBS4801S"){
    var optionArray = ["Plancha de vapor oster gris con negro|plancha de vapor oster gris con negro"];                              
    }else if(colonia.value == "GCSTBS4801T"){
    var optionArray = ["Plancha oster de vapor negro con verde agua|plancha oster de vapor negro con verde agua"];                              
    }else if(colonia.value == "AUTOMATICO"){
    var optionArray = ["Extractor automatico cromado turmix|extractor automatico cromado turmix"];                              
    }else if(colonia.value == "CYCLONE"){
    var optionArray = ["Extractor de jugos turmix beige cyclon|extractor de jugos turmix beige cyclon"];                              
    }else if(colonia.value == "STANDAR"){
    var optionArray = ["Extractor de jugos turmix beige standar|extractor de jugos turmix beige standar"];                              
    }
    else if(colonia.value == "507"){
    var optionArray = ["Licuadoira man con plastico y vidrio 7 velocidades|licuadoira man con plastico y vidrio 7 velocidades"];                              
    }
    else if(colonia.value == "5071"){
    var optionArray = ["Licuadora man 7 velocidades vaso de plastico|licuadora man 7 velocidades vaso de plastico"];                              
    }
    else if(colonia.value == "FREAL 2020"){
    var optionArray = ["Ventilador man 20|ventilador man 20"];                              
    }
    else if(colonia.value == "LMV 2025"){
    var optionArray = ["Licuadora man de vidrio 2 velolicidades cromado con negro|licuadora man de vidrio 2 velolicidades cromado con negro"];                              
    }
    else if(colonia.value == "OP-1006"){
    var optionArray = ["Olla de presion man acero inoxidable 6l|olla de presion man acero inoxidable 6l"];                              
    }
    else if(colonia.value == "VP-00018TG"){
    var optionArray = ["Ventilador de pedestal man 18|ventilador de pedestal man 18"];                              
    }
    else if(colonia.value == "VWB-1016"){
    var optionArray = ["Ventilador de pared man 16 3 velocidades|ventilador de pared man 16 3 velocidades"];                              
    }
    else if(colonia.value == "BAT DELUXE"){
    var optionArray = ["Bateria deluxe de 13 piezas|bateria deluxe de 13 piezas"];                              
    }
    else if(colonia.value == "BAT ESPERANZ"){
    var optionArray = ["Bateria esperanza 12 piezas acero inoxidable|bateria esperanza 12 piezas acero inoxidable"];                              
    }
    else if(colonia.value == "BAT MILAN JU"){
    var optionArray = ["Bateria milan 12 piezas|bateria milan 12 piezas"];                              
    }
    else if(colonia.value == "SC-AKX110PN"){
    var optionArray = ["Mini componente panasonic bluetooth 3300w|mini componente panasonic bluetooth 3300w"];                              
    }
    else if(colonia.value == "SC-CMAX100LM"){
    var optionArray = ["Sistema de bocina 6600 watts bluetoot|sistema de bocina 6600 watts bluetoot"];                              
    }
    else if(colonia.value == "SC-CMAX50LMK"){
    var optionArray = ["Sistema de bocina 3300w bluetooth|sistema de bocina 3300w bluetooth"];                              
    }
    else if(colonia.value == "TC-43FS510X"){
    var optionArray = ["Pantalla panasonic 43 smart tv|pantalla panasonic 43 smart tv"];                              
    }
    else if(colonia.value == "TC-50GX500X"){
    var optionArray = ["Pantalla panasonic 50 smart uhd|pantalla panasonic 50 smart uhd"];                              
    }
    else if(colonia.value == "TC-55GX500X"){
    var optionArray = ["Pantalla 55 4k hdr smart tv|pantalla 55 4k hdr smart tv"];                              
    }
    else if(colonia.value == "49LK5750PUA"){
    var optionArray = ["Pantalla lg 49 hdr smart tv|pantalla lg 49 hdr smart tv"];                              
    }
    else if(colonia.value == "55UM7400PUA"){
    var optionArray = ["Pantalla lg 55 uhd smart tv 4k|pantalla lg 55 uhd smart tv 4k"];                              
    }else if(colonia.value == "CM1560"){
    var optionArray = ["Dvd lg usb multi formato|dvd lg usb multi formato"];                              
    }
    else if(colonia.value == "FST-GTK371P"){
    var optionArray = ["Sistema bocina sony 4600 usb ipod|sistema bocina sony 4600 usb ipod"];                              
    }
    else if(colonia.value == "IP-4211BK"){
    var optionArray = ["Cargador portatil usb|cargador portatil usb"];                              
    }
    else if(colonia.value == "MCS-9930BT"){
    var optionArray = ["Autoestereo mitzu bluetooth|autoestereo mitzu bluetooth"];                              
    }
    else if(colonia.value == "MSA-5815"){
    var optionArray = ["Bocina mitzu 25,000w led 15 |bocina mitzu 25,000w led 15 "];                              
    }
    else if(colonia.value == "MSA-6108"){
    var optionArray = ["Bocina mitzu 8 6500w pmpo bt|bocina mitzu 8 6500w pmpo bt"];                              
    }
    else if(colonia.value == "MSA-6112"){
    var optionArray = ["Bocina robson 13600 w rec 12|bocina robson 13600 w rec 12"];                              
    }
    else if(colonia.value == "MSA-6510"){
    var optionArray = ["Bafle recargable 2x6.5 5500w|bafle recargable 2x6.5 5500w"];                              
    }
    else if(colonia.value == "MSA-7816"){
    var optionArray = ["Bafle prof recarg 15 26900w|bafle prof recarg 15 26900w"];                              
    }
    else if(colonia.value == "MSA-7908BTE"){
    var optionArray = ["Bafle amplio inalambrico 6500w 8|bafle amplio inalambrico 6500w 8"];                              
    }
    else if(colonia.value == "MSA-7908ND"){
    var optionArray = ["Bafle profesional recargable 8 5500w bluetooth|bafle profesional recargable 8 5500w bluetooth"];                              
    }
    else if(colonia.value == "MSA-7912BTE"){
    var optionArray = ["Bocina mitzu 18000w led 12|bocina mitzu 18000w led 12"];                              
    }
    else if(colonia.value == "MSA-8015"){
    var optionArray = ["Bocina kaiser 15 12,000w inb|bocina kaiser 15 12,000w inb"];                              
    }
    else if(colonia.value == "TRI-1002"){
    var optionArray = ["Pedestal para bafle 45k|pedestal para bafle 45k"];                              
    }
    else if(colonia.value == "HYLED4021NIM"){
    var optionArray = ["Pantalla hyundai led 40 smart bluetooth|pantalla hyundai led 40 smart bluetooth"];                              
    }
    else if(colonia.value == "HYLED5014N4K"){
    var optionArray = ["Pantalla 50 4k smart blutooth|pantalla 50 4k smart blutooth"];                              
    }
    else if(colonia.value == "CHM15BPL1"){
    var optionArray = ["Congelador horizontal mabe blanco 15|congelador horizontal mabe blanco 15"];                              
    }
    else if(colonia.value == "CHM5BPL2"){
    var optionArray = ["Congelador horizontal 5 pies cubicos blanco|congelador horizontal 5 pies cubicos blanco"];                              
    }
    else if(colonia.value == "CM5041B"){
    var optionArray = ["Campana purificadora mabe 49.8cm blanca|campana purificadora mabe 49.8cm blanca"];                              
    }
    else if(colonia.value == "CM5041N"){
    var optionArray = ["Campana purificadora mabe 49.8cm negra|campana purificadora mabe 49.8cm negra"];                              
    }
    else if(colonia.value == "CM5041SI"){
    var optionArray = ["Campana de empotre 50 cm inoxidable|campana de empotre 50 cm inoxidable"];                              
    }
    else if(colonia.value == "CM7631I"){
    var optionArray = ["Campana purificadora mabe 76 cm inoxidable|campana purificadora mabe 76 cm inoxidable"];                              
    }
    else if(colonia.value == "CM7641B"){
    var optionArray = ["Campana purificadora mabe 76 cm blanca|campana purificadora mabe 76 cm blanca"];                              
    }
    else if(colonia.value == "CM7641L"){
    var optionArray = ["Campana purificadora mabe 75.8 cm bisque|campana purificadora mabe 75.8 cm bisque"];                              
    }
    else if(colonia.value == "CM7641N"){
    var optionArray = ["Campana purificadora de pared 76 cm negra|campana purificadora de pared 76 cm negra"];                              
    }
    else if(colonia.value == "CM8041B"){
    var optionArray = ["Campana purificadora mabe 80 cm blanca|campana purificadora mabe 80 cm blanca"];                              
    }
    else if(colonia.value == "CM8041N"){
    var optionArray = ["Campana purificadora mabe 80 cm negra|campana purificadora mabe 80 cm negra"];                              
    }
    else if(colonia.value == "CM8041SI"){
    var optionArray = ["Campana purificadora mabe 80 cm inoxidable|campana purificadora mabe 80 cm inoxidable"];                              
    }
    else if(colonia.value == "CM8042I"){
    var optionArray = ["Campana purificadora mabe 79.8 cm acero inoxidable|campana purificadora mabe 79.8 cm acero inoxidable"];                              
    }
    else if(colonia.value == "DEM7673CFIX"){
    var optionArray = ["Estufa piso 76 cm electrica acero inoxidable|estufa piso 76 cm electrica acero inoxidable"];                              
    }
    else if(colonia.value == "EM5022BAPN0"){
    var optionArray = ["Estufa mabe 50 cm gas negra|estufa mabe 50 cm gas negra"];                              
    }
    else if(colonia.value == "EM5030BAIS0"){
    var optionArray = ["Estufa mabe 50 cm plata electrica|estufa mabe 50 cm plata electrica"];                              
    }
    else if(colonia.value == "EM5031BAPB0"){
    var optionArray = ["Estufa mabe 50 cm gas blanca|estufa mabe 50 cm gas blanca"];                              
    }
    else if(colonia.value == "EM5032BAPS0"){
    var optionArray = ["Estufa mabe 50 cm plata electrica|estufa mabe 50 cm plata electrica"];                              
    }
    else if(colonia.value == "EM5040BAIB0"){
    var optionArray = ["Estufa mabe 20 blanca electrica|estufa mabe 20 blanca electrica"];                              
    }
    else if(colonia.value == "EM5040BAIN0"){
    var optionArray = ["Estufa mabe 50 cm mabe negra gas|estufa mabe 50 cm mabe negra gas"];                              
    }
    else if(colonia.value == "EM5041BAIS0"){
    var optionArray = ["Estufa mabe 20 plata gas acero inoxidable|estufa mabe 20 plata gas acero inoxidable"];                              
    }
    else if(colonia.value == "EM5043BFIS0"){
    var optionArray = ["Estufa mabe 20 plata mercury|estufa mabe 20 plata mercury"];                              
    }
    else if(colonia.value == "EM5046CAIX0"){
    var optionArray = ["Estufa mabe 76 cm gas plata|estufa mabe 76 cm gas plata"];                              
    }
    else if(colonia.value == "EM7622BAPS0"){
    var optionArray = ["Estufa de piso 30 gas blanca|estufa de piso 30 gas blanca"];                              
    }
    else if(colonia.value == "EM7641BAIN0"){
    var optionArray = ["Estufa mabe 30 negra gas encendido electrico|estufa mabe 30 negra gas encendido electrico"];                              
    }
    else if(colonia.value == "EM7641BAIS0"){
    var optionArray = ["Estufa mabe 76 cm gas plata encendido electrico|estufa mabe 76 cm gas plata encendido electrico"];                              
    }
    else if(colonia.value == "LMA70214VBAB"){
    var optionArray = ["Lavadora automatica mabe 20 kg blanca|lavadora automatica mabe 20 kg blanca"];                              
    }
    else if(colonia.value == "LMA70213CBAB"){
    var optionArray = ["Lavadora autatica mabe 20kg blanca aqua save|lavadora autatica mabe 20kg blanca aqua save"];                              
    }
    else if(colonia.value == "LMA72215CBAB"){
    var optionArray = ["Lavadora automatica mabe 22kg blanca|lavadora automatica mabe 22kg blanca"];                              
    }
    else if(colonia.value == "LMA78112CBAB"){
    var optionArray = ["Lavadora automatica mabe 18 kg blanca|lavadora automatica mabe 18 kg blanca"];                              
    }
    else if(colonia.value == "LMA79113VBAB"){
    var optionArray = ["Lavadora automatica mabe 19k blanca tapa de vidrio|lavadora automatica mabe 19k blanca tapa de vidrio"];                              
    }
    else if(colonia.value == "LMD8124PBAB0"){
    var optionArray = ["Lavadora automatica mabe 2 tannques 18 kg blanca|lavadora automatica mabe 2 tannques 18 kg blanca"];                              
    }
    else if(colonia.value == "MA07641"){
    var optionArray = ["Campana purificadora de pared 76 cm grafito|campana purificadora de pared 76 cm grafito"];                              
    }
    else if(colonia.value == "MA08041S"){
    var optionArray = ["Campana purificadora mabe 80 cm acero inoxidable|campana purificadora mabe 80 cm acero inoxidable"];                              
    }
    else if(colonia.value == "RMS510IAMRE0"){
    var optionArray = ["Refrigerador mabe 510 l platino con despachador de agua|refrigerador mabe 510 l platino con despachador de agua"];                              
    }
    else if(colonia.value == "RMS510IVMRE0"){
    var optionArray = ["Refrigerador mabe 510 l sin despachador platinum|refrigerador mabe 510 l sin despachador platinum"];                              
    }
    else if(colonia.value == "SME26N5MNBBP"){
    var optionArray = ["Secadora electrica 20 kg blanca|secadora electrica 20 kg blanca"];                              
    }
    else if(colonia.value == "SMG26N5MNBAB"){
    var optionArray = ["Secadora de gas blanca mabe|secadora de gas blanca mabe"];                              
    }
    else if(colonia.value == "WEM7640BAIN0"){
    var optionArray = ["Estufa mabe 76 cm negra gas encendido electrico|estufa mabe 76 cm negra gas encendido electrico"];                              
    }
    else if(colonia.value == "WEM7659CFIS0"){
    var optionArray = ["Estufa mabe 76 cm gas encendido electrico plata|estufa mabe 76 cm gas encendido electrico plata"];                              
    }
    else if(colonia.value == "EI3020BAPS0"){
    var optionArray = ["Estufa iem de 76 cm plata gas encendido electrico|estufa iem de 76 cm plata gas encendido electrico"];                              
    }
    else if(colonia.value == "EI3030BAPN0"){
    var optionArray = ["Estufa iem 30 cm negra gas encendido electrico|estufa iem 30 cm negra gas encendido electrico"];                              
    }
    else if(colonia.value == "EI3032BAPL0"){
    var optionArray = ["Estufa iem gas encendido electronico aluminio|estufa iem gas encendido electronico aluminio"];                              
    }
    else if(colonia.value == "EI3032BAPN0"){
    var optionArray = ["Estufa iem 30 gas encendido electrico|estufa iem 30 gas encendido electrico"];                              
    }
    else if(colonia.value == "EI5020BAPB0"){
    var optionArray = ["Estufa iem 20 endido de cerillo blanca|estufa iem 20 endido de cerillo blanca"];                              
    }
    else if(colonia.value == "EI5020BAPN"){
    var optionArray = ["Estufa iem 20 encendido de cerillo negra|estufa iem 20 encendido de cerillo negra"];                              
    }
    else if(colonia.value == "PIG5101LO"){
    var optionArray = ["Estufa iem 20 gas encendido electrico negra|estufa iem 20 gas encendido electrico negra"];                              
    }
    else if(colonia.value == "PIG5101NN0"){
    var optionArray = ["Estufa iem 20 eco gas negra encendido de cerillo|estufa iem 20 eco gas negra encendido de cerillo"];                              
    }
    else if(colonia.value == "PIG5101S0"){
    var optionArray = ["Estufa iem 20 encendido electrico plata con gabinete|estufa iem 20 encendido electrico plata con gabinete"];                              
    }
    else if(colonia.value == "PSI45BB"){
    var optionArray = ["Parrilla iem economica 45 cm negra|parrilla iem economica 45 cm negra"];                              
    }
    else if(colonia.value == "WEI3025BAIN0"){
    var optionArray = ["Estufa iem 30 negra encendido manua gas|estufa iem 30 negra encendido manua gas"];                              
    }
    else if(colonia.value == "LEA46102VBAB"){
    var optionArray = ["Lavadora easy automatica 16 kg blanca|lavadora easy automatica 16 kg blanca"];                              
    }
    else if(colonia.value == "LIQ1220B0"){
    var optionArray = ["Lavadora easy automatica 12 kg blanca|lavadora easy automatica 12 kg blanca"];                              
    }
    else if(colonia.value == "LRE15M"){
    var optionArray = ["Lavadora easy automatica 15 kg manual morada|lavadora easy automatica 15 kg manual morada"];                              
    }
    else if(colonia.value == "LRE16V0"){
    var optionArray = ["Lavadora red easy automatica 16 kg manual verde|lavadora red easy automatica 16 kg manual verde"];                              
    }
    else if(colonia.value == "LRE18V0"){
    var optionArray = ["Lavadora red easy automatica 18 kg manual verde|lavadora red easy automatica 18 kg manual verde"];                              
    }
    else if(colonia.value == "LRE21M"){
    var optionArray = ["Lavadora red easy automatica 21 kg manual morado|lavadora red easy automatica 21 kg manual morado"];                              
    }
    else if(colonia.value == "SEG26N5MNBAB"){
    var optionArray = ["Secadora easy gas 20 kg blanca|secadora easy gas 20 kg blanca"];                              
    }
    else if(colonia.value == "EK-24N MARSE"){
    var optionArray = ["Estufa koblenz 30 negra electrica|estufa koblenz 30 negra electrica"];                              
    }
    else if(colonia.value == "EK-501F"){
    var optionArray = ["Estufa koblenz 30 niza acero inoxidable|estufa koblenz 30 niza acero inoxidable"];                              
    }
    else if(colonia.value == "EK-501FB"){
    var optionArray = ["Estufa koblenz 30 monza acero inoxidable|estufa koblenz 30 monza acero inoxidable"];                              
    }
    else if(colonia.value == "EK-501G"){
    var optionArray = ["Estufa koblenz 30 acero inoxidable|estufa koblenz 30 acero inoxidable"];                              
    }
    else if(colonia.value == "EKE-505F INN"){
    var optionArray = ["Estufa koblenz 30 plata electrica|estufa koblenz 30 plata electrica"];                              
    }
    else if(colonia.value == "LCK60"){
    var optionArray = ["Lavadora koblenz compacta 6kg|lavadora koblenz compacta 6kg"];                              
    }
    else if(colonia.value == "LDK-1600S"){
    var optionArray = ["Lavadora koblenz 2 tinas 16kg|lavadora koblenz 2 tinas 16kg"];                              
    }
    else if(colonia.value == "LR-2213P"){
    var optionArray = ["Lavadora zoraya 22k plata|lavadora zoraya 22k plata"];                              
    }
    else if(colonia.value == "LRK-410J"){
    var optionArray = ["Lavadora koblenz jazmin 15k|lavadora koblenz jazmin 15k"];                              
    }
    else if(colonia.value == "RR63D6WGX"){
    var optionArray = ["Refrigerador hisense 178.3l plata con despachador de agua|refrigerador hisense 178.3l plata con despachador de agua"];                              
    }
    else if(colonia.value == "WSA1302P"){
    var optionArray = ["Lavadora hisense 2 tinas 13k|lavadora hisense 2 tinas 13k"];                              
    }
    else if(colonia.value == "DFR-1610DMX"){
    var optionArray = ["Refrigerador winia 440.90l plata|refrigerador winia 440.90l plata"];                              
    }
    else if(colonia.value == "DFR-32210GMD"){
    var optionArray = ["Refrigerador daewoo 321.5 l plata con despachador de agua|refrigerador daewoo 321.5 l plata con despachador de agua"];                              
    }
    else if(colonia.value == "DFR-9010DMX"){
    var optionArray = ["Refrigerador daewoo 252l plata|refrigerador daewoo 252l plata"];                              
    }
    else if(colonia.value == "DWF-DG1B386C"){
    var optionArray = ["Lavadora automatica 19 kg blanco con plata|lavadora automatica 19 kg blanco con plata"];                              
    }
    else if(colonia.value == "DWF-DG362ARR"){
    var optionArray = ["Lavadora daewoo 18 kg roja|lavadora daewoo 18 kg roja"];                              
    }
    else if(colonia.value == "KOR-1N0AS"){
    var optionArray = ["Horno daewoo 1.1 plata|horno daewoo 1.1 plata"];                              
    }
    else if(colonia.value == "KOR-660S"){
    var optionArray = ["Horno daewo 7 pies plata|horno daewo 7 pies plata"];                              
    }
    else if(colonia.value == "KOR-660W"){
    var optionArray = ["Horno daewo 7 pies blanco|horno daewo 7 pies blanco"];                              
    }
    else if(colonia.value == "KOR-661W"){
    var optionArray = ["Horno daewoo 0.7 blanco|horno daewoo 0.7 blanco"];                              
    }; 

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    descripcion.options.add(newOption);
  };     
}