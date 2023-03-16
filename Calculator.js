const userinput = document.getElementById('userinput');

var value = '';

function press(num){
    value += num;
    userinput.value = value; 
}

function equal(){
    userinput.value  = eval(value);
    value = '';
}

function erase(){
    value = '';
    userinput.value = value;
}