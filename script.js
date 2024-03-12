// Get all the countries from Asia continent /region using Filter function

// const request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all');
// request.send();
// request.onload=function (){
//     var countryData=JSON.parse(this.response);
//     const asia=countryData.filter((element)=>{
//         if(element.region==='Asia'){
//             return element.name;
//         }
//     })
//     console.log(asia);
// // }



// //Get all the countries with a population of less than 2 lakhs using Filter function

// const request=new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all');
// request.send();
// request.onload=function(){
//     const pop_data = JSON.parse(this.response);
//     const pop = pop_data.filter((value)=>
//     {
        
//         if(value.population<200000){
//            return value
//         }

//     });
//     console.log(pop)
// }



// Print the following details name, capital, flag, using forEach function


// const request = new XMLHttpRequest();
// request.open('GET','https://restcountries.com/v3.1/all');
// request.send();
// request.onload = function(){
//     const info = JSON.parse(this.response);
//     const name_capital_flag = info.forEach((value)=>{
//         console.log(value.name,value.capital,value.flag)

//     });
        

// }


//Print the total population of countries using reduce function



// const request = new XMLHttpRequest();
// request.open('GET',"https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function(){
//     const tot_pop = JSON.parse(this.response);
//     const population = tot_pop.reduce((acc,value)=>{
//         return acc+value.population;
//     },0);
//     console.log(population);
// }




//Print the country that uses US dollars as currency.


// const getUSDollar = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  
//     xhr.responseType = "json";
  
//     xhr.onload = () => {
  
//       const data = xhr.response;
//       const datas = data.filter((value) => {
//         for (var i in value.currencies.name.USD) {
//           if (i === "Unites States Dollar") {
//             return true;
//           }
//         }
//       }).map((value) => value.name);
//       console.log(datas);
//     }
//     xhr.send();
//   };
  
//   getUSDollar();


























