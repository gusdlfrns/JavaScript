const array = [1,3,5,7,9,11,13,15,17,19];

//반복문 for로 배열에서 10보다 큰 값 출력하기

for(let i=0; i<array.length;i++){
    if(array[i]>=10){
        document.write(`${array[i]}, `);
    }
}

document.write(`<hr>`);
//반복문 forEach로 배열에서 10보다 큰 값 출력하기

array.forEach(function(array){
    if(array>=10){
        document.write(`${array}, `);
    }  
});
document.write(`<hr>`);

//반복문 for...of로 배열에서 10보다 큰 값 출력하기

for(num of array){
    if(num>=10){
         document.write(`${num}, `);
    }
}