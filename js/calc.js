//Grab page
let pageID = document.querySelectorAll("input");

let traditionalID = [];
let odysseyID = [];
pageID.forEach(e => {
  if (e.id.includes("traditional")) {
    traditionalID.push(e);
  } else if(e.id.includes("Odyssey")){
    odysseyID.push(e);
  }else{

  }
});
//add onchange listeners
traditionalID.forEach(e => {
  if (e.disabled == false) {
    document.getElementById(e.id).addEventListener("change", f => {
      pageUpdate();
    });
  }else{
    document.getElementById(e.id).classList.add("disab")
  }
});
odysseyID.forEach(e => {
  if (e.disabled == false) {
    document.getElementById(e.id).addEventListener("change", f => {
      pageUpdate();
    });
  }else{
    document.getElementById(e.id).classList.add("disab")
  }
});

//Update the page
let pageUpdate = function() {
  let traditionalLifeSpan = traditionalID[0];
  let traditionalSystemWatts = traditionalID[1];
  let traditionalCostOfLamp = traditionalID[2];
  let traditionalCostperReplacement = traditionalID[3];
  let traditionalElectricityUser = traditionalID[4];
  let traditionalCurrentPrice = traditionalID[5];
  let traditionalElectricityCost = traditionalID[6];
  let traditonalNumberOfLamps = traditionalID[7];
  let traditionalEquivalentLed = traditionalID[8];
  let traditionalEstimatedLampLife = traditionalID[9];
  let traditionalTotalLightSpend = traditionalID[10];
  let traditionalNumberOfLuminaires = traditionalID[11];
  let traditionalTotalSystemWatts = traditionalID[12];
  let traditionalDailyUsage = traditionalID[13];
  let traditionalDaysinMonth = traditionalID[14];
  let traditionalCostOfLuminaire = traditionalID[15];
  let traditionalkWhUsedperMonth = traditionalID[16];
  let traditionalElectricityCost2 = traditionalID[17];
  let traditionalMaintenanceCost = traditionalID[18];
  let traditionalCO2Tax = traditionalID[19];
  let traditionalKwHElectricityUsedYear = traditionalID[20];
  let traditionalElectricityCostYear = traditionalID[21];
  let traditionalMaintenanceCostYear = traditionalID[22];
  let traditionalCO2Tax2 = traditionalID[23];
  let traditionalTotalCostLast = traditionalID[24];
  let traditionalCO2Output = traditionalID[28];

  let odysseyLifeSpan = odysseyID[0];
  let odysseySystemWatts = odysseyID[1];
  let odysseyCostOfLamp = odysseyID[2];
  let odysseyCostperReplacement = odysseyID[3];
  let odysseyElectricityUser = odysseyID[4];
  let odysseyCurrentPrice = odysseyID[5];
  let odysseyElectricityCost = odysseyID[6];
  let odysseyNumberOfLamps = odysseyID[7];
  let odysseyEquivalentLed = odysseyID[8];
  let odysseyEstimatedLampLife = odysseyID[9];
  let odysseyTotalLightSpend = odysseyID[10];
  let odysseyNumberOfLuminaires = odysseyID[11];
  let odysseyTotalSystemWatts = odysseyID[12];
  let odysseyDailyUsage = odysseyID[13];
  let odysseyDaysinMonth = odysseyID[14];
  let odysseyCostOfLuminaire = odysseyID[15];
  let odysseykWhUsedperMonth = odysseyID[16];
  let odysseyElectricityCost2 = odysseyID[17];
  let odysseyMaintenanceCost = odysseyID[18];
  let odysseyCO2Tax = odysseyID[19];
  let odysseyKwHElectricityUsedYear = odysseyID[20];
  let odysseyElectricityCostYear = odysseyID[21];
  let odysseyMaintenanceCostYear = odysseyID[22];
  let odysseyCO2Tax2 = odysseyID[23];
  let odysseyTotalCostLast = odysseyID[24];
  let odysseySavingsBySwitching = odysseyID[25];
  let odysseyPercentageReduction = odysseyID[26];
  let odysseyPayBack = odysseyID[27];
  let odysseyCO2Output = odysseyID[28];
  let odysseyCO2YearlySavings = odysseyID[29];
  let odysseyCO2Reduction = odysseyID[30];

  traditionalElectricityUser.value =
    (traditionalSystemWatts.value * odysseyLifeSpan.value) / 1000;
  let ElectricityCost =
    traditionalElectricityUser.value * traditionalCurrentPrice.value;
  traditionalElectricityCost.value = ElectricityCost.toFixed(2);
  let lampNumber = odysseyLifeSpan.value / traditionalLifeSpan.value;
  traditonalNumberOfLamps.value = lampNumber.toFixed(1);

  let EquivLED =
    parseFloat(traditionalCostOfLamp.value) +
    parseFloat(traditionalCostperReplacement.value) *
      parseFloat(traditonalNumberOfLamps.value);
  traditionalEquivalentLed.value = EquivLED.toFixed(2);
  let lampLife =
    traditionalLifeSpan.value /
    (traditionalDailyUsage.value * traditionalDaysinMonth.value * 12);
  traditionalEstimatedLampLife.value = lampLife.toFixed(2);
  let totalLightingSpend =
    (parseFloat(traditionalCostOfLamp.value) +
      parseFloat(traditionalCostperReplacement.value)) *
      parseFloat(traditonalNumberOfLamps.value) +
    parseFloat(traditionalElectricityCost.value);
  parseFloat(traditionalCostperReplacement.value) +
    parseFloat(traditionalCostOfLamp.value) *
      parseFloat(traditonalNumberOfLamps.value) +
    parseFloat(traditionalElectricityCost.value);

  traditionalTotalLightSpend.value = totalLightingSpend.toFixed(2);
  traditionalTotalSystemWatts.value =
    traditionalSystemWatts.value * traditionalNumberOfLuminaires.value;
  let costOfLumin =
    parseFloat(traditionalEquivalentLed.value) *
    parseFloat(traditionalNumberOfLuminaires.value);
  traditionalCostOfLuminaire.value = parseFloat(costOfLumin.toFixed(2));
  traditionalkWhUsedperMonth.value =
    (parseFloat(traditionalTotalSystemWatts.value) *
      parseFloat(traditionalDailyUsage.value) *
      parseFloat(traditionalDaysinMonth.value)) /
    1000;
  let tradCost =
    traditionalCurrentPrice.value * traditionalkWhUsedperMonth.value;
  traditionalElectricityCost2.value = tradCost.toFixed(2);
  let lampList =
    odysseyLifeSpan.value /
    (odysseyDailyUsage.value * odysseyDaysinMonth.value * 12);
  odysseyEstimatedLampLife.value = lampList.toFixed(2);
  let maintCost = parseFloat(costOfLumin.toFixed(2) / lampList.toFixed(2)) / 12;
  traditionalMaintenanceCost.value = Math.round(maintCost * 100) / 100;
  let kwheeee = traditionalkWhUsedperMonth.value * 12;
  traditionalKwHElectricityUsedYear.value = kwheeee.toFixed(2)

  let CO2Output = (0.54522 * traditionalKwHElectricityUsedYear.value) / 1000;

  traditionalCO2Output.value = CO2Output.toFixed(2);
    let co34896 = CO2Output.toFixed(2) * 16;
  traditionalCO2Tax2.value = co34896.toFixed(2)
  let co3874rjgrf = traditionalCO2Tax2.value / 12;
  traditionalCO2Tax.value = co3874rjgrf.toFixed(2)

  let yearCost =
    traditionalKwHElectricityUsedYear.value * traditionalCurrentPrice.value;
  traditionalElectricityCostYear.value = yearCost.toFixed(2);
  let mainenCost = traditionalCostOfLuminaire.value / lampList.toFixed(2);
  traditionalMaintenanceCostYear.value = mainenCost.toFixed(2);

  let tradTotal =
    (parseFloat(traditionalElectricityCostYear.value) +
      parseFloat(traditionalMaintenanceCostYear.value) +
      parseFloat(traditionalCO2Tax2.value)) *
      parseFloat(odysseyEstimatedLampLife.value) +
    parseFloat(traditionalCostOfLuminaire.value);
  traditionalTotalCostLast.value = tradTotal.toFixed(2);

  odysseyElectricityUser.value =
    (parseInt(odysseySystemWatts.value) * parseInt(odysseyLifeSpan.value)) /
    1000;
  let cost = odysseyElectricityUser.value * odysseyCurrentPrice.value;
  odysseyElectricityCost.value = cost.toFixed(2);
  odysseyNumberOfLamps.value = 1;
  odysseyEquivalentLed.value =
    parseFloat(odysseyCostOfLamp.value) +
    parseFloat(odysseyCostperReplacement.value) * 1;
  let lightSpend =
    odysseyEquivalentLed.value * 1 + parseFloat(odysseyElectricityCost.value);
  odysseyTotalLightSpend.value = lightSpend.toFixed(2);
  odysseyTotalSystemWatts.value =
    parseFloat(odysseySystemWatts.value) *
    parseFloat(odysseyNumberOfLuminaires.value);
  odysseyCostOfLuminaire.value =
    parseFloat(odysseyEquivalentLed.value) *
    parseFloat(odysseyNumberOfLuminaires.value);

  odysseykWhUsedperMonth.value =
    (parseFloat(odysseyTotalSystemWatts.value) *
      parseFloat(odysseyDailyUsage.value) *
      parseFloat(odysseyDaysinMonth.value)) /
    1000;
  let eleCost =
    parseFloat(odysseykWhUsedperMonth.value) *
    parseFloat(odysseyCurrentPrice.value);
  odysseyElectricityCost2.value = eleCost.toFixed(2);
  let hekww = parseFloat(odysseykWhUsedperMonth.value) * 12;
  odysseyKwHElectricityUsedYear.value = hekww.toFixed(2)

  let oCO2Output =
    (0.54522 * parseFloat(odysseyKwHElectricityUsedYear.value)) / 1000;
  odysseyCO2Output.value = oCO2Output.toFixed(2);
  let co2fhjf = parseFloat(odysseyCO2Output.value) * 16
  odysseyCO2Tax2.value = co2fhjf.toFixed(2);
  let co2fiohsdgf = parseFloat(odysseyCO2Tax2.value) * 12;
  odysseyCO2Tax.value = co2fiohsdgf.toFixed(2)
  let yeCost =
    parseFloat(odysseyKwHElectricityUsedYear.value) *
    parseFloat(odysseyCurrentPrice.value);
  odysseyElectricityCostYear.value = yeCost.toFixed(2);

  let oddTotal =
    (parseFloat(odysseyElectricityCostYear.value) +
      parseFloat(odysseyCO2Tax2.value)) *
      parseFloat(odysseyEstimatedLampLife.value) +
    parseFloat(odysseyCostOfLuminaire.value);

  odysseyTotalCostLast.value = oddTotal.toFixed(2);
  let switched = tradTotal.toFixed(2) - oddTotal.toFixed(2);

  let yearlySav =
    parseFloat(traditionalElectricityCostYear.value) +
    parseFloat(traditionalMaintenanceCostYear.value) +
    parseFloat(traditionalCO2Tax2.value) -
    parseFloat(odysseyElectricityCostYear.value) -
    parseFloat(odysseyCO2Tax2.value);

  odysseySavingsBySwitching.value = switched.toFixed(2);
  let percenRed = (oddTotal / tradTotal) * 100;
  odysseyPercentageReduction.value = percenRed.toFixed(2);
  let PABB = parseFloat(odysseyCostOfLuminaire.value) / yearlySav;
  odysseyPayBack.value = PABB.toFixed(2);
  let yearlyCO2 =
    (0.54522 *
      (parseInt(traditionalKwHElectricityUsedYear.value) -
        parseInt(odysseyKwHElectricityUsedYear.value))) /
    1000;

  odysseyCO2YearlySavings.value = yearlyCO2.toFixed(2);
  let CO2Ou =
    (parseFloat(odysseyCO2Output.value) /
      parseFloat(traditionalCO2Output.value)) *
    100;
  odysseyCO2Reduction.value = CO2Ou.toFixed(2);
  document.getElementById("ourCurrentW").innerHTML = odysseyTotalSystemWatts.value+"W";
  document.getElementById("trWattage").innerHTML = traditionalTotalSystemWatts.value+"W";
};
pageUpdate();
document.getElementById("customTrad").innerHTML = `
                 <input
                  type="text"
                  class="form-control float-left"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value="High Pressure Sodium"
                  style="width:100%;"
                />
  `
document.getElementById("odyCustom").innerHTML = `
               <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value="Odyssey Installation"
                />
`