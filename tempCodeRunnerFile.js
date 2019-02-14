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