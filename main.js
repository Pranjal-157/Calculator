let screen = document.getElementById('screen');
let buttons =Array.from(document.querySelectorAll('button'));

buttons.map(button => {
    button.addEventListener ('click',(e) =>{
        switch(e.target.innerText) {
            case 'C':
                screen.value = '';
                break;
            case 'X':
                screen.value += '*';
                break;
            case '←':
                if(screen.value){
                    screen.value = screen.value.slice(0,-1);
                }
                break;
            case '=':
                try{
                    screen.value = eval(screen.value);
                }
                catch{
                    screen.value = '';
                }
                break;
            case 'π':
                screen.value = screen.value * 3.141592;
                break;
            case '%':
                screen.value = screen.value/100;
                break;
            default:
                screen.value += e.target.innerText;
        }
    });
});