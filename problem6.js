/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

// write your code here

var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++)
{
  currentSalary += currentSalary * 0.05;
}

console.log(currentSalary.toFixed(2));
