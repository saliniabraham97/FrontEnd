function main() {
    let yearData = {};

    var createPerYearData=(year, total)=>yearData[year] = total;

    function createPerYearData(year, total) {
      yearData[year] = total;
    }
  
    // function printReport() {
    //   console.log("Print Report");
    // }

    var printReport=()=>{console.log(`Print Report`)}
  
    var calculateTotalTillDate=(perYearBalance)=>{
        let total = 0;
      for (let i = 0; i < perYearBalance.length; i++) {
        total += perYearBalance[i];
      }
      return total;
    }
    // function calculateTotalTillDate(perYearBalance) {
    //   let total = 0;
    //   for (let i = 0; i < perYearBalance.length; i++) {
    //     total += perYearBalance[i];
    //   }
    //   return total;
    // }
  var adjustTotalOfYear=(year, adjustmentFactor)=>yearData[year] *= adjustmentFactor;
    // function adjustTotalOfYear(year, adjustmentFactor) {
    //   yearData[year] *= adjustmentFactor;
    // }
    //Do not modify the code after this
    return {
      createPerYearData,
      printReport,
      calculateTotalTillDate,
      adjustTotalOfYear
    };
  }

  var counter=(function(){
    var count=0;
    return{
        increment:function(){
        count++;
    },
        getCount:function(){
            return count;
        }
    }   
  })();


  