module.exports = function toReadable(number) {
    const num1 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
      };
      const num2 = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        15: "fifteen",
        18: "eighteen",
      };
      const num3 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
      };
    
      let num0 = number.toString().split("");
      let answer;
      if (num0.length == 1) {
        for (let key in num1) {
          if (key == number) {
            answer = num1[key];
          }
        }
      } else if (num0.length == 2) {
        if (
          (13 >= Number(num0.join("")) && Number(num0.join("")) >= 10) ||
          Number(num0.join("") == 18) ||
          Number(num0.join("") == 15)
        ) {
          for (let key in num2) {
            if (key == num0.join("")) {
              answer = num2[key];
            }
          }
        } else if (19 >= Number(num0.join("")) && Number(num0.join("")) >= 14) {
          for (let key in num1) {
            if (key == num0[1]) {
              answer = num1[key] + "teen";
            }
          }
        } else if (num0[0] !== 1 && num0[1] == 0) {
          for (let key in num3) {
            if (key == num0[0]) {
              answer = num3[key];
            }
          }
        } else if (num0[0] !== 1 && num0[1] !== 0) {
          for (let key in num3) {
            if (key == num0[0]) {
              answer = num3[key];
            }
          }
          for (const key in num1) {
            if (key == num0[1]) {
              answer = answer + " " + num1[key];
            }
          }
        }
      } else if (num0.length == 3) {
        if (num0[1] == 0 && num0[2] == 0) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
        } else if (num0[1] == 0 && num0[2] !== 0) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
          for (let key in num1) {
            if (key == num0[2]) {
              answer = answer + " " + num1[key];
            }
          }
        } else if (
          (13 >= Number(num0.slice(1).join("")) &&
            Number(num0.slice(1).join("")) >= 10) ||
          Number(num0.slice(1).join("") == 18) ||
          Number(num0.slice(1).join("") == 15)
        ) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
          for (let key in num2) {
            if (key == num0.slice(1).join("")) {
              answer = answer + " " + num2[key];
            }
          }
        } else if (
          19 >= Number(num0.slice(1).join("")) &&
          Number(num0.slice(1).join("")) >= 14
        ) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
          for (let key in num1) {
            if (key == num0[2]) {
              answer = answer + " " + num1[key] + "teen";
            }
          }
        } else if (num0[1] !== 1 && num0[2] == 0) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
          for (let key in num3) {
            if (key == num0[1]) {
              answer = answer + " " + num3[key];
            }
          }
        } else if (num0[1] !== 1 && num0[2] !== 0) {
          for (const key in num1) {
            if (key == num0[0]) {
              answer = `${num1[key]}` + " " + "hundred";
            }
          }
          for (let key in num3) {
            if (key == num0[1]) {
              answer = answer + " " + num3[key];
            }
          }
          for (const key in num1) {
            if (key == num0[2]) {
              answer = answer + " " + num1[key];
            }
          }
        }
      }
      return answer;
};
