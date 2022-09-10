export const persianNumber = (number, separation = false) => {
   const persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
   const english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

   const arrayNumber = number.split("");
   let persianNumberArray = [];
   arrayNumber.forEach((n) => {
      persianNumberArray.push(persian[english.findIndex((item) => item === n)]);
   });
   let changedNumber = "";
   let arrayChangedNumber = [];
   if (separation) {
      for (let i = 1; i <= persianNumberArray.length; i++) {
         arrayChangedNumber.unshift(persianNumberArray[persianNumberArray.length - i]);
         if (i % 3 === 0 && i !== persianNumberArray.length) {
            arrayChangedNumber.unshift(",");
         }
         changedNumber = arrayChangedNumber.join("");
      }
   } else {
      changedNumber = persianNumberArray.join("");
   }
   return changedNumber;
};
