let jsonData = [
    {
        dia: 1,
        valor: 22174.1664
    },
    {
        dia: 2,
        valor: 24537.6698
    },
    {
        dia: 3,
        valor: 26139.6134
    },
    {
        dia: 4,
        valor: 0.0
    },
    {
        dia: 5,
        valor: 0.0
    },
    {
        dia: 6,
        valor: 26742.6612
    },
    {
        dia: 7,
        valor: 0.0
    },
    {
        dia: 8,
        valor: 42889.2258
    },
    {
        dia: 9,
        valor: 46251.174
    },
    {
        dia: 10,
        valor: 11191.4722
    },
    {
        dia: 11,
        valor: 0.0
    },
    {
        dia: 12,
        valor: 0.0
    },
    {
        dia: 13,
        valor: 3847.4823
    },
    {
        dia: 14,
        valor: 373.7838
    },
    {
        dia: 15,
        valor: 2659.7563
    },
    {
        dia: 16,
        valor: 48924.2448
    },
    {
        dia: 17,
        valor: 18419.2614
    },
    {
        dia: 18,
        valor: 0.0
    },
    {
        dia: 19,
        valor: 0.0
    },
    {
        dia: 20,
        valor: 35240.1826
    },
    {
        dia: 21,
        valor: 43829.1667
    },
    {
        dia: 22,
        valor: 18235.6852
    },
    {
        dia: 23,
        valor: 4355.0662
    },
    {
        dia: 24,
        valor: 13327.1025
    },
    {
        dia: 25,
        valor: 0.0
    },
    {
        dia: 26,
        valor: 0.0
    },
    {
        dia: 27,
        valor: 25681.8318
    },
    {
        dia: 28,
        valor: 1718.1221
    },
    {
        dia: 29,
        valor: 13220.495
    },
    {
        dia: 30,
        valor: 8414.61
    }
]

function FirstQuestion(){
    let indice = 13;
    let soma = 0;
    k = 0;

    while( k < indice){
        k += 1;
        soma += k;
    }

    let result = document.getElementById("firstQuestion");
    if(result){
        result.innerText = soma;
        console.log(`Question 1. Resultado: ${soma}`);
    }
}

function SecondQuestion(){
    let fibNumber = document.getElementById("fibNumber").value;
    fibNumber = parseInt(fibNumber);

    let a = 0, b = 1, temp;
    while (b < fibNumber) {
        temp = b;
        b = a + b;
        a = temp;
    }

    let result;
    if (b === fibNumber || fibNumber === 0) {
        result = `${fibNumber} pertence à sequência de Fibonacci.`;
    } else if(fibNumber) {
       result = `${fibNumber} não pertence à sequência de Fibonacci.`;
    }else{
        result = `Insira um valor válido!`;
    }

    console.log(`Question 2. ${result}`);
    document.getElementById("secondQuestion").innerText = result;
}

function ThirdQuestion(){
    let media = 0;
    let days = jsonData.length;

    let lessValue = jsonData[0].valor;
    let biggestValue = jsonData[0].valor;

    let biggestDayCount = 0;

    jsonData.forEach(data => {
        if(data.valor === 0){
            days --;
        }else{
            media += data.valor;
        }
    })

    media = media/days;

    jsonData.forEach(data => {
        if(data.valor !== 0){
            if(data.valor < lessValue){
            lessValue = data.valor;
            }
            else if(data.valor > biggestValue){
                biggestValue = data.valor
            }

            if(data.valor > media){
                biggestDayCount ++;
            }
        }
    })

    let result = `Menor valor: ${lessValue} - Maior valor: ${biggestValue} - Número de dias acima da média: ${biggestDayCount}`
    console.log(result);
    document.getElementById("thirdQuestion").innerText = result;
}

function FourthQuestion(){
    let values = [{uf: "SP", value : 67.836, percent: 0}, {uf: "RJ", value : 36.678, percent: 0}, {uf: "MG", value : 29.229, percent: 0}, {uf: "ES", value : 27.165, percent: 0}, {uf: "Others", value : 19.849, percent: 0}];
    let some = 0;
    let valuesConv = "";

    values.forEach(state => {
        some += state.value;
    })

    values.forEach(state => {
        let percent = (state.value / some) * 100;
        state.percent = percent;
        valuesConv += `<li>Estado: ${state.uf} - Porcentagem: ${state.percent}%</li>`;
    })

    console.log(`Question 4. ${valuesConv}`);
    document.getElementById("fourthQuestion").innerHTML = valuesConv;
}

function FifthQuestion(){
    let text = document.getElementById("textToReverse").value;
    let reversedText = "";
    
    for(var x = text.length - 1; x >= 0; x --){
        reversedText += text[x];
    }

    console.log(`Question 5. The reversed text is: ${reversedText}`);
    document.getElementById("fifthQuestion").innerText = reversedText;
}

FirstQuestion();
ThirdQuestion();
FourthQuestion();