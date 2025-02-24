let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

// (1)map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
const toUpper = names.map((name) => name.toUpperCase());
console.log("map-1번문제", toUpper);

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
const nameFilter = names.map((name) => name.split(" ")[0]);
console.log("map-2번문제", nameFilter);
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
const initFilter = names.map((name) => {
  let temps = name.split(" ");
  temps.map((temp) => temp[0]).join("");
});
console.log("map-3번문제", initFilter);

// (2)filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
const includeA2 = names.filter((name) => {
  if (name.toLowerCase().includes("a")) {
    return name;
  }
});
console.log("filter문제1:", includeA2);
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
// 풀지 못한문제임.
let doubleLetter = names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => letter == splitName[index + 1]);
});
console.log(doubleLetter);

// let series = names.filter(function (name) {
//   let word = name.split(" ");
//   return word.some(function (letter, index) {
//     letter == word[index + 1];
//   });
// });

// console.log("filter 2번문제:", series);

// (3)some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
const length = names.some((name) => {
  let temp2 = name.trim();
  return temp2.length >= 20;
});
console.log("some문제1:", length);
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
const includeP = names.some((name) =>
  name.split(" ")[0].toLowerCase().includes("p")
);
console.log("some문제2:", includeP);

// (4)every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
const length2 = names.every((name) => {
  let temp4 = name.trim();
  return temp4.length >= 20;
});
console.log("every문제1:", length2);
// 모두의 이름에 a 가 포함되어 있는가?
const includeA = names.every((name) => {
  let temp5 = name.toLowerCase();
  return temp5.includes("a");
});
console.log("every문제2:", includeA);
// (5)find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
const length3 = names.find((name) => {
  let temp6 = name.trim();
  return temp6.length >= 20;
});
console.log("find문제1:", length3);
// 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)
const midName = names.find((name) => name.split(" ").length >= 3);
console.log("find문제2:", midName);
// (6)findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
const length4 = names.findIndex((name) => {
  let temp7 = name.trim();
  return temp7.length >= 20;
});
console.log("findIndex문제1:", length4);
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
const midName2 = names.findIndex((name) => name.split(" ").length >= 3);
console.log("findIndex문제2:", midName2);
