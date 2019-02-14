'use strict';

let money = +prompt("Ваш бюджет на месяц?","30000"), // спрашивает бюджет в месяц,
     time = prompt("Введите дату и время в формате YYYY-MM-DD", "YYYY-MM-DD"); // спрашивает дату; 
 
console.log(money);
console.log(time);

let appData = {
     budget: money, // бюджет
     expenses: {}, // расходы
     optionalExpenses: {},// необязательные расходы
     income: [], // дополнительный доход
     timeData: time, // дата-время
     savings: false // сбережения
};

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


appData.moneyPerDay = appData.budget/30

 alert("Ваш бюджет в день: " + appData.moneyPerDay );
 
if(appData.moneyPerDay < 100){
     console.log("Минимальный уровень достатка");
     alert("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
     console.log("Средний уровень достатка");
     alert("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
     console.log("Высокий уровень достатка"); 
     alert("Высокий уровень достатка");
}else {
     console.log("Произошла ошибка");
     alert("Произошла ошибка");

}


 