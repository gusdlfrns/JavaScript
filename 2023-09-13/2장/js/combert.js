//섭씨온도 = (화씨온도-32)/1.8
//prompt로 화씨온도를 입력을 받아
//섭씨온도로 계산을 받고 출력을 한다.
//출력은 alert() 또는 document.write()중 하나 선택
//화씨 온도 00는 섭씨온도 00도 입니다.


//화씨 온도 입력받기 - 실수형으로 변환하기
let fah = parseFloat(prompt("화씨 온도를 입력하세요"));

//섭씨온도 계산하기
let cel = ((fah-32)/1.8).toFixed(1);

//출력하기
//alert(`${fah}℉는 ${cel}℃입니다.`);
document.write(`${fah}℉는 ${cel}℃입니다.`); 