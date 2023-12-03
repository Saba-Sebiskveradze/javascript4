// დავალება 1
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html", "css");
console.log(array.length);
array.shift();
array.pop();
console.log(array);
// დავალება 2
let array1 = ["ფორთოხალი", "ბანანი", "მსხალი"]
console.log(array1.length);
array1.push("ვაშლი", "ანანასი")
array1.unshift("საზამთრო");
console.log(array1.length);
array1.splice(2, 0, "მანგო");
array1.shift();
array1.pop();
console.log(array1.length);
// დავალება 3
let array2 = [1, 2, 3, 4, 5];
array2.splice(3, 0, 'a', 'b', 'c');
console.log(array2);
// დავალება 4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
array3.forEach(function (number) {
  sum += number;
});
console.log(sum);
// დავალება 5
for (let i = 100; i >= 1; i--) {
    console.log(i);
}
// დავალება 6
let array4 = [2, 15, 10, 24];
array4.splice(2, 1);
console.log(array4);
// დავალება 7
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array5.map(number => number / 3);
console.log(newArray);
// დავალება 8
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredLanguages = languages.filter(word => word.length > 3);
console.log(filteredLanguages);
// დავალება 9
let words = ['madrid', 'rome', 'milan', 'berlin'];
let filteredWords = words.filter(word => word.includes('m') || word.includes('n'));
console.log(filteredWords);
// დავალება 10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let resultArray = arr1.concat(arr2, arr3);
console.log(resultArray);
// დავალება 11
let arr = [-1, -2, -3, 4];

let hasPositiveNumber = arr.some(number => number > 0);

if (hasPositiveNumber) {
  console.log("არის");
} else {
  console.log("არ არის");
}
// დავალება 12
let array6 = [23, 45, 32, 5, 87, 7, 3, 98];
array6.sort((a, b) => b - a);
let minNumber = array6.shift();
console.log(array6);
console.log(minNumber);
// დავალება 13
function getinfo() {
    let nameuser = 'anna';
    console.log(nameuser);//სახელს ამ შემთხვევაში ანას
    function userinfo() {
        let info = `user name is ${nameuser}`;
        console.log(info);// სტრინგ მიუმატებს სახელს
    }
    userinfo();
    console.log(info);//ერორს
}


console.log(nameuser);//ერორს
getinfo();