//데이터 타입, 연산자 실습
1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1-"1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!false
// true
!true
// false

//조건문 실습1
if(1+1 === 2){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM584:2 정답입니다.
// undefined
if(true){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM597:2 정답입니다.
// undefined
if(!true){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM612:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM619:4 틀렸습니다
// undefined
if(1){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM623:2 정답입니다.
// undefined
if(-1){
    console.log("정답입니다.")
}else {
    console.log("틀렸습니다")
}
// VM628:2 정답입니다.
// undefined
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined

//조건문 실습2
if(profile.age>=20){
    console.log("성인입니다.")
}else if(profile.age<=19 && profile.age>=8){
    console.log("학생입니다.")
}else if(profile.age<=7){
    console.log("어린이입니다.")
}
// VM1454:4 학생입니다.
// undefined
//코드 최적화
if(profile.age>=20){
    console.log("성인입니다.")
}else if(profile.age>=8){
    console.log("학생입니다.")
}else if(profile.age<=7){
    console.log("어린이입니다.")
}
// VM1468:4 학생입니다.
// undefined
//최적화, 에러핸들링
if(profile.age>=20){
    console.log("성인입니다.")
}else if(profile.age>=8){
    console.log("학생입니다.")
}else if(profile.age>0){
    console.log("어린이입니다.")
}else {
    console.log("잘못 입력하셨습니다.")
}
// VM1628:4 학생입니다

