function displaynumbers(start,end){
    let resul=[];
    for (let num=start; num <=end;num++)

    {result.push(num);}
    return result.join(",");
}

function displayoddnumbers(start,end){
    let result=[];
    for(let numberstart; num<=end;num++)
        { if(num %2!==0)
    {resul.push(num);}
    }
    return result.join(",");
}

function displayEvenNumbers(start,end){
    let result=[];
    for(let num=start; num<=end;num++){
        if (num %2===0)
            {result.push(num);}
        return result.join(",");
    }
}

function isprime(num){
    if (num<=1)return false;
    if (num<=3)return true;
    if (num %2===0|| num%3===0)return false;
    let i=5;
    while (i*i<=num)
        {
    if(num%i===0||num%(i+2)===0)return false;
    i+=6;
        }
    return true;
}

function displayprimenumber(start,end){
    let result=[];
    for (let num=start;num<=end;num++)
        {
            if(isprime(num)){
                result.push(num);
            }
        }
        return result.join(",");
}

function displayresult(){
    const start=parselnt(document.getelementbyid('start').value);
    const end=parselnt(document.getelementbyid('end').value);

    document.getelementbyid('numbers').
    textcontent='numberfrom ${start} to ${end}:'
    +displaynumber(start,end);
    document.getelementbyid('odd numbers').
    textcontent='oddnumbersform ${start} to ${end}:'
    +displayoddnumbers(start,end);
    document.getelementbyid('evennumber').
    textcontent='evennumbersfrom${strt}to${end}:'
    +displayEvenNumbers(start,end);
    document.getElementById('primenumbers'). 
    textContent='primeNumbersfor ${start} to ${end}:'
    +primenumbers(start,end);
}



