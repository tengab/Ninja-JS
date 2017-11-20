var birthday = new Date(1984, 7, 28, 22, 02, 00);
var momsBirthday = new Date(1984, 7, 28, 22, 02, 00);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getTime());


if(birthday.getTime() == momsBirthday.getTime()){

    console.log("birthdays are equal");

} else {
    console.log("birthdays are not equal");

}