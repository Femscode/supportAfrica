const covid19ImpactEstimator = (data) => data;

// export default covid19ImpactEstimator;

function datagoestimate() {
    this.input =  {
    region: {
        name:"Africa",
        avgAge:19.7,
        avgDailyIncomeInUSD:5,
        avgDailyIncomePopulation:0.71 },
        periodType:document.getElementById('data-period-type').value,
        timetoElapse:document.getElementById('data-time-to-elapse').value,
        reportedCases:document.getElementById('data-reported-cases').value,
        population:document.getElementById('data-population').value,
        totalHospitalBeds:document.getElementById('data-total-hospital-beds').value
        }
    this.output = {
    data:{
      totalHospitalBeds:35,
      reportedCases:694 
    },
    impact:{
        currentlyInfected : input.reportedCases * 10,
        
           },
    severalImpact:{
        currentlyInfected : input.reportedCases * 50,
    }
}   
output.impact.infectionByRequestedTime = Math.floor(output.impact.currentlyInfected * (Math.pow(2,input.timetoElapse/3)))
// output.impact.infectionByRequestedTime = input.population - (output.impact.currentlyInfected * (Math.pow(2,input.timetoElapse/3)))
// alert(output.impact.infectionByRequestedTime)
output.severalImpact.infectionByRequestedTime = Math.floor(output.severalImpact.currentlyInfected * (Math.pow(2,input.timetoElapse/3)))
output.severalImpact.severalCasesByRequestedTime = Math.floor((15/100) * output.severalImpact.infectionByRequestedTime)
output.severalImpact.hospitalBedsRequired = Math.floor((35 / 100) * output.severalImpact.severalCasesByRequestedTime)
output.severalImpact.hospitalBedsByRequestedTime = output.severalImpact.hospitalBedsRequired - input.totalHospitalBeds
//challenge 3
output.severalImpact.casesForICUByRequestedTime = Math.floor((5/100) * output.severalImpact.infectionByRequestedTime)
output.severalImpact.casesForVentilatorsByRequestedTime = Math.floor((2/100) * output.severalImpact.infectionByRequestedTime)
output.severalImpact.dollarsInFlight = Math.floor(output.severalImpact.infectionByRequestedTime * 0.65 * 1.5 * input.timetoElapse)
document.getElementById('show').style.visibility = 'visible';
document.getElementById('show').innerHTML = "<h2>The Result of the Estimate of the covid-19 infection   </h2>"+output.impact.currentlyInfected+"<br>"+
"The impact of the infection by the specified time : "+ output.impact.infectionByRequestedTime+"<br>"
+"The several impact of the infection by the specified time : "+output.severalImpact.infectionByRequestedTime+"<br>"
+"The total Hospital beds by the specified time : "+output.severalImpact.hospitalBedsByRequestedTime+"<br>"
+"The total several impact cases for ICU is : "+output.severalImpact.casesForICUByRequestedTime+"<br>"
+"The total several impact cases for ventilator : "+output.severalImpact.casesForVentilatorsByRequestedTime+"<br>"
+"The total several impact cases for dollar in flight : " +output.severalImpact.dollarsInFlight

    
}   
document.getElementById("data-go-estimate").addEventListener("click", function(event){
event.preventDefault();
});