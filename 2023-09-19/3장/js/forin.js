const student ={
    major : "컴퓨터공학부",
    idNum : 201695065,
    name : '이동윤'
}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`);
}