const num=Array.from(document.getElementsByClassName("btn"));
const content=document.getElementById("content");
const operations=Array.from(document.getElementsByClassName("oper"));
const perform=document.getElementById("perform");
const answer=document.getElementById("ans");
const clear=document.getElementById("clear");
const backspace=document.getElementById("back");
const others=Array.from(document.getElementsByClassName("trigbtn"));
let operand1,operand2;
let operator;



num.forEach(e=>{
    e.addEventListener('click', function append() {
        content.innerText=content.innerText+e.innerText;
    })
})

operations.forEach(e=>{
    e.addEventListener('click',function getnumbers() {
        let textcon=content.innerText;
        operand1=parseFloat(textcon.substring(0,textcon.length-1));
        operator=textcon.charAt(textcon.length-1);
    })
})

others.forEach(e => {
    e.addEventListener('click',function solve() {
        let operand1=parseFloat(content.innerText);
        operator=e.innerText;
       
        switch (operator) {
            case "sin":
                content.innerText=`sin(${operand1})`;
                answer.innerText=Math.sin(Math.PI*operand1/180);
                break;
            case "cos":
                content.innerText=`cos(${operand1})`;
                answer.innerText=Math.cos(Math.PI*operand1/180);
                break;
            case "tan":
                content.innerText=`tan(${operand1})`;
                answer.innerText=Math.tan(Math.PI*operand1/180);
                break;
            case "x^2":
                content.innerText=`${operand1}^2`;
                answer.innerText=Math.pow(operand1,2);
                break;
            case "sin`1":
                content.innerText=`sininv(${operand1})`;
                answer.innerText=180*(Math.asin(operand1))/Math.PI;
                break;
            case "cos`1":
                content.innerText=`cosinv(${operand1})`;
                answer.innerText=180*(Math.asin(operand1))/Math.PI;
                break;
            case "log":
                content.innerText=`log(${operand1})`;
                answer.innerText=Math.log10(operand1);
                break;
            case "ln":
                content.innerText=`ln(${operand1})`;
                answer.innerText=Math.log(operand1);
                break;
            case "sqrt(x)":
                content.innerText=`sqrt(${operand1})`;
                answer.innerText=Math.sqrt(operand1);
                break;
            case "10^x":
                content.innerText=`10^${operand1}`;
                answer.innerText=Math.pow(10,operand1);
                break;
            case "1/x":
                content.innerText=`1/${operand1}`;
                answer.innerText=1/operand1;
                break;
            case "tan`1":
                content.innerText=`taninv(${operand1})`;
                answer.innerText=180*(Math.asin(operand1))/Math.PI;
                break;
            case "e^x":
                content.innerText=`e^${operand1}`;
                answer.innerText=Math.pow(Math.E,operand1);
                break;
            case "|x|":
                content.innerText=`|${operand1}|`;
                answer.innerText=Math.abs(operand1);
                break;
            default:answer.innerText="Syntax Error";
                break;
        }
    })
});


clear.addEventListener('click',function clear() {
    content.innerText='';
    answer.innerText='';
})

backspace.addEventListener('click',function backspace() {
    let text=content.innerText;
    let length=text.length;
    content.innerText=text.substring(0,length-1);
})

perform.addEventListener('click',function getanswer(){
    let textcon=content.innerText;
    let ind=textcon.indexOf(operator);
    operand2=parseFloat(textcon.substring(ind+1));
    switch (operator) {
        case '+':
            answer.innerText=operand1+operand2;     
            break;
        case '-':
            answer.innerText=operand1-operand2;     
            break;
        case '*':
            answer.innerText=operand1*operand2;     
            break;
        case '/':
            answer.innerText=operand1/operand2;     
            break;
        case '^':
            answer.innerText=Math.pow(operand1,operand2);     
            break;
        case '%':
            answer.innerText=(operand1/operand2)*100;     
            break;
    
        default:
            answer.innerText="Syntax Error";
            break;
    }
});