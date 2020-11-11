let conversionTypes = {
  Length: [
    "Meter",
    "Kilometer",
    "Centimeter",
    "Millimeter",
    "Micrometer",
    "Nanometer",
    "Mile",
    "Yard",
    "Foot",
    "Inch"
  ],
  Time: ["Second", "Minute", "Hour", "Day", "Month", "Year"],
  Mass: [
    "Ounce",
    "Pound",
    "Stone",
    "US Ton",
    "Imperial Ton",
    "Microgram",
    "Milligram",
    "Gram",
    "Kilogram",
    "Metric Ton"
  ]
};

function removeOptions(selectElement) {
  var i,
    L = selectElement.options.length - 1;
  for (i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}

window.onload = updateTypes();
function updateTypes() {
  var convType = document.getElementById("conv-type").value;
  var type1 = document.getElementById("type-1");
  var type2 = document.getElementById("type-2");
  //Erase previous type options
  removeOptions(type1);
  removeOptions(type2);

  //Update type options
  for (var x in conversionTypes[convType]) {
    var option = document.createElement("option");
    option.text = conversionTypes[convType][x];
    type1.add(option);
    var option = document.createElement("option");
    option.text = conversionTypes[convType][x];
    type2.add(option);
  }
  calculateResult();
}

function calculateResult() {
  var convType = document.getElementById("conv-type").value;
  var typeFrom = document.getElementById("type-1").value;
  var typeTo = document.getElementById("type-2").value;
  var inputFrom = document.getElementById("input1").value;
  var inputTo = document.getElementById("input2");

  if (convType == "Length") {
    var result = Number(inputFrom);
    if (typeFrom != "Meter") {
      //Convert to Meter
      switch (typeFrom) {
        case "Kilometer":
          result /= 0.001;
          break;
        case "Centimeter":
          result /= 100;
          break;
        case "Millimeter":
          result /= 1000;
          break;
        case "Micrometer":
          result /= 1e6;
          break;
        case "Nanometer":
          result /= 1e9;
          break;
        case "Mile":
          result /= 0.000621371;
          break;
        case "Yard":
          result /= 1.09361;
          break;
        case "Foot":
          result /= 3.28084;
          break;
        case "Inch":
          result /= 39.3701;
          break;
      }
    }

    switch (typeTo) {
      case "Kilometer":
        result *= 0.001;
        break;
      case "Centimeter":
        result *= 100;
        break;
      case "Millimeter":
        result *= 1000;
        break;
      case "Micrometer":
        result *= 1e6;
        break;
      case "Nanometer":
        result *= 1e9;
        break;
      case "Mile":
        result *= 0.000621371;
        break;
      case "Yard":
        result *= 1.09361;
        break;
      case "Foot":
        result *= 3.28084;
        break;
      case "Inch":
        result *= 39.3701;
        break;
    }
  } else if (convType == "Time") {
    var result = Number(inputFrom);
    if (typeFrom != "Second") {
      //Convert to Seconds
      switch (typeFrom) {
        case "Year":
          result *= 31557600;
          break;
        case "Month":
          result *= 2629800;
          break;
        case "Day":
          result *= 86400;
          break;
        case "Hour":
          result *= 3600;
          break;
        case "Minute":
          result *= 60;
          break;
      }
    }
    switch (typeTo) {
      case "Minute":
        result /= 60;
        break;
      case "Hour":
        result /= 3600;
        break;
      case "Day":
        result /= 86400;
        break;
      case "Month":
        result /= 2629800;
        break;
      case "Year":
        result /= 31557600;
        break;
    }
  } else if (convType == "Mass") {
    var result = Number(inputFrom);
    if (typeFrom != "Ounce") {
      //Convert to Ounce
      switch (typeFrom) {
        case "Pound":
          result *= 16;
          break;
        case "Stone":
          result *= 224;
          break;
        case "US Ton":
          result *= 32000;
          break;
        case "Imperial Ton":
          result *= 35840;
          break;
        case "Microgram":
          result /= 2.835e7;
          break;
        case "Milligram":
          result /= 28349.5;
          break;
        case "Gram":
          result /= 28.3495;
          break;
        case "Kilogram":
          result *= 35.274;
          break;
        case "Metric Ton":
          result *= 35274;
          break;
      }
    }
    switch (typeTo) {
      case "Pound":
        result /= 16;
        break;
      case "Stone":
        result /= 224;
        break;
      case "US Ton":
        result /= 32000;
        break;
      case "Imperial Ton":
        result /= 35840;
        break;
      case "Microgram":
        result *= 2.835e7;
        break;
      case "Milligram":
        result *= 28349.5;
        break;
      case "Gram":
        result *= 28.3495;
        break;
      case "Kilogram":
        result /= 35.274;
        break;
      case "Metric Ton":
        result /= 35274;
        break;
    }
  }
  inputTo.value = result;
}
