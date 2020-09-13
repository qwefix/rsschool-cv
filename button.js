let button=document.getElementById('animation');
let flag=true;
let uls=document.querySelectorAll('ul')
button.addEventListener('click',function(){
    if(flag==true){
        button.innerHTML='turn on animation';
        flag=false;
        for(ul of uls){
            ul.classList.add('display-on')
        }

    }else if(flag==false){
        button.innerHTML='turn off animation';
        flag=true;
        for(ul of uls){
            ul.classList.remove('display-on')
        }
        
    }
})