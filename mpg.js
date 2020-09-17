var floatMiles, floatGallons, floatMPG;
     floatMiles = parseFloat(prompt("Enter miles driven")).toFixed(2);
     floatGallons = parseFloat(prompt("Enter gallons of gas used")).toFixed(2);
     floatMPG = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMPG);
