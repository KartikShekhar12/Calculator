function appendValue(value){
    document.getElementById('display').value += value;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function calculateResult(){
    try{
        const res = eval(document.getElementById('display').value);
        document.getElementById('display').value = res;
    }
    catch{
        document.getElementById('display').value = "ERROR !"
    }
}