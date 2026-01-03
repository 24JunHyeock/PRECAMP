let fruits = [
    {number : 1, title: "레드향"},
    {number : 2, title: "샤인머스캣"},
    {number : 3, title: "산청딸기"},
    {number : 4, title: "한라봉"},
    {number : 5, title: "사과"},
    {number : 6, title: "애플망고"},
    {number : 7, title: "딸기"},
    {number : 8, title: "천혜향"},
    {number : 9, title: "과일선물세트"},
    {number : 10, title: "귤"}
    ];
// undefined
for(let i = 0; i< fruits.length;i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM1301:2 1 레드향
// VM1301:2 2 샤인머스캣
// VM1301:2 3 산청딸기
// VM1301:2 4 한라봉
// VM1301:2 5 사과
// VM1301:2 6 애플망고
// VM1301:2 7 딸기
// VM1301:2 8 천혜향
// VM1301:2 9 과일선물세트
// VM1301:2 10 귤
// undefined
for(let i = 0; i< fruits.length;i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM1332:2 1 레드향
// VM1332:2 2 샤인머스캣
// VM1332:2 3 산청딸기
// VM1332:2 4 한라봉
// VM1332:2 5 사과
// VM1332:2 6 애플망고
// VM1332:2 7 딸기
// VM1332:2 8 천혜향
// VM1332:2 9 과일선물세트
// VM1332:2 10 귤
// undefined
Math.floor(Math.random()*1000000)
// 309986
String(Math.floor(Math.random()*1000000))
// '408667'
String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// '038109'
let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
// undefined
result
// '024878'
result
// '024878'