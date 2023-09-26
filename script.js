const random_fun = ()=>{
   
    var value = "0123456789abcdef";
    var hex = "#"; 
  
    for(let i=0 ; i<6; i++){ 
       
     var random = Math.floor((Math.random()*16));
        
        hex+=value[random];

    }
    
    return hex ;
    
  }

const change_bg = document.getElementById("change_bg");
const stop_btn = document.getElementById("stop_btn");

let bg_interval;
const change_bg_func = function(){
    if(!bg_interval){
    
   bg_interval = setInterval((event) => {
    document.body.style.backgroundColor = random_fun()
    // document.body.style.color = random_fun();
    // console.log(random_fun())
  }, 1000);
}

}
 

const stop_func = () => {
    clearInterval(bg_interval)
}



change_bg.addEventListener('click', change_bg_func);
stop_btn.addEventListener('click',stop_func);