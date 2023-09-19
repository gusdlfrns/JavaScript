//소수 판단 스크립트
//정수를 입력을 받는다. prompt
//소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수.
//나누어 떨어진다 == 나머지=0이다.

let num = parseInt(prompt("1을 제외한 정수를 입력을 하세요"));

let isPrime;

if(num === 1){
    document.write(`${num}은 소수도, 합성어도 아닙니다.`);
}
else if(num === 2){
    isPrime = true;
}
else{//1과 2가 아닌 나머지 값을 입력하면
    for(let i = 2; i<num; i++){//입력받은 수까지 반보갛면서
        if(num%i===0){
            isPrime = false;
            break;//나머지가 0이면 반복을 멈춘다
        }
        else{
            isPrime = true;
        }
    }
}

if(isPrime){//반복무 종료 후 입력값과 나눈값을 비교하며
    document.write(`${num}은 소수입니다.`);
}else{
    document.write(`${num}은 소수가 아닙니다.`);
}