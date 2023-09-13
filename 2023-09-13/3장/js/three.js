let num = parseFloat(prompt("숫자를 입력하세요"))

function CheckElse(){
    if(num%3===0){
        document.write(`${num}은 3의 배수입니다.`);
        //alert(`${num}은 3의 배수입니다.`);
    }
    else{
        document.write(`${num}은 3의 배수가 아닙니다.`);
        //alert(`${num}은 3의 배수가 아닙니다.`);
    }
}

CheckElse();