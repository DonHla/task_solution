
'use strict';

let money = +prompt("Ваш бюджет на месяц?","30000"); // спрашивает бюджет в месяц,
let time = prompt("Введите дату и время в формате YYYY-MM-DD", "YYYY-MM-DD"); // спрашивает дату; 
 
console.log(money);
console.log(time);

let expensesName = prompt("Введите обязательную статью расходов в этом месяце","ЖКХ"); 
let expensesOne = +prompt("Во сколько обойдется?", "2000");  

let staymoney = money - expensesOne;

console.log(expensesName);
console.log(expensesOne);

expensesName = prompt("Введите обязательную статью расходов в этом месяце","ЖКХ"); 
expensesOne = +prompt("Во сколько обойдется?", "2000");  

staymoney = money - expensesOne;

console.log(expensesName);
console.log(expensesOne);

 alert("Ваш бюджет в день: " + staymoney/30 );

 let appData = {
     money : money, // бюджет
     timeData : time, // дата-время
     expenses : {
          expensesName : expensesOne
          }, // расходы
     optionalExpenses : 0,// необязательные расходы
     income : 0, // дополнительный доход
     savings : false // сбережения
};