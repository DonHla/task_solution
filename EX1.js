'use strict';

let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?","30000"); // спрашивает бюджет в месяц,
     time = prompt("Введите дату и время в формате YYYY-MM-DD", "YYYY-MM-DD"); // спрашивает дату; 
  
     //isNaN возвращает true, если переменная не числовая
     while(isNaN(money) || money == "" || money == null ) {
          money = +prompt("Ваш бюджет на месяц?","30000"); // спрашивает бюджет в месяц
     }
}

start();

console.log(money);
console.log(time);

let appData = {
     budget: money, // бюджет
     expenses: {}, // расходы
     optionalExpenses: {},// необязательные расходы
     income: [], // дополнительный доход
     timeData: time, // дата-время
     savings: true // сбережения
};



// let i=0;
// while (i<2){
// let  a = prompt("Введите обязательную статью расходов в этом месяце","ЖКХ"), 
//      b = +prompt("Во сколько обойдется?", "2000");  
//  console.log(a);
//  console.log(b);
//  if ((typeof(a))==='string' && (typeof(a)) != null  
//  && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
//       console.log("done");
//       appData.expenses[a] = b; // ключ значение
//  } else {
//  }
// i++;
// };

// let i=0;
// do {
//      let  a = prompt("Введите обязательную статью расходов в этом месяце","ЖКХ"), 
//      b = +prompt("Во сколько обойдется?", "2000");  
//  console.log(a);
//  console.log(b);
//  if ((typeof(a))==='string' && (typeof(a)) != null  
//  && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
//       console.log("done");
//       appData.expenses[a] = b; // ключ значение
//  } else {
//  }
//      i++;
// } while ( i< 2);

function chooseExpensenses () {
     for (let i=0; i < 2; i++){
          let a = prompt("Введите обязательную статью расходов в этом месяце","ЖКХ"), 
              b = +prompt("Во сколько обойдется?", "2000");  
          console.log(a);
          console.log(b);
          if ((typeof(a))==='string' && (typeof(a)) != null  
          && (typeof(b)) != null && a != "" && b != "" && a.length < 50) {
               console.log("done");
               appData.expenses[a] = b; // ключ значение
          } else {
          }
     }
}

chooseExpensenses();

function detectDayBudget(budg){
     appData.moneyPerDay = (budg/30).toFixed(2); // возвращает строковое значение
     alert("Ваш бюджет в день: " + appData.moneyPerDay );
}

detectDayBudget(appData.budget);

function detectLevel(moneyToDay) {
 
     if(moneyToDay < 100){
          console.log("Минимальный уровень достатка");
          alert("Минимальный уровень достатка");
     }else if (moneyToDay > 100 && moneyToDay < 2000){
          console.log("Средний уровень достатка");
          alert("Средний уровень достатка");
     } else if (moneyToDay > 2000){
          console.log("Высокий уровень достатка"); 
          alert("Высокий уровень достатка");
     }else {
          console.log("Произошла ошибка");
          alert("Произошла ошибка");
     
     } 
} 

detectLevel(appData.moneyPerDay);


function checkSavings() {
    if (appData.savings == true) {
         let save =  +prompt("Какова сумма накоплений?", "50000"),
             percent = +prompt("Под какой процент?", "12");

          appData.mothIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: "+ appData.mothIncome);
    } 
}
 
checkSavings();

function chooseOptExpenses() {
     for (let i=1; i<4 ; i++){
          let optExpenses = prompt("Статья необязательных расходов?","Поход в клуб")
     appData.optionalExpenses[i] = optExpenses; // ключ значение     
     }
}

chooseOptExpenses();