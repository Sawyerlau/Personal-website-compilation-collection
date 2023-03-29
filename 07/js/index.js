var display = document.querySelector("p")
    var btns = document.querySelectorAll(".button>div");
    var arr = [];
    var result = [];
    var num1;
    var run;
    for(var i=0;i<btns.length;i++){
        // var x = this.index;
        // console.log(btns[i]);
        btns[i].index=i;
        btns[i].onclick = function(){
            var x = this.index
            switch(x){
                // 重置0-3
                case 0: 
                    window.open("index.html","_self","","")
                    break;
                case 1:
                    window.open("index.html","_self","","")
                    break;
                case 2:
                    window.open("index.html","_self","","")
                    break;
                case 3:
                    window.open("index.html","_self","","")
                    break;
                case 4://7
                    arr += btns[x].className
                    break;
                case 5://8
                    arr += btns[x].className
            
                    break;
                case 6://9
                    arr += btns[x].className
                 
                    break;
                case 7://+
                    run=1;
                    num1=arr;
                    arr="";
                    break;
                case 8://4
                    arr += btns[x].className
                
                    break;
                case 9://5
                arr += btns[x].className
           
                    break;
                case 10://6
                arr += btns[x].className
           
                    break;
                case 11://-
                    run=2;
                    num1=arr;
                    arr="";
                    break;
                case 12://1
                arr += btns[x].className
              
                    break;
                case 13://2
                arr += btns[x].className
              
                    break;
                case 14://3
                arr += btns[x].className
              
                    break;
                case 15://*
                run=3;
                num1=arr;
                arr="";
                    break;
                case 16://.
                arr += btns[x].className
          
                    break;
                case 17://0
                arr += btns[x].className
              
                    break;
                case 19://"/"
                run=4;
                num1=arr;
                arr="";
                    break;
                case 18://=
                    switch(run){
                                case 1:
                                result=parseFloat(num1) + parseFloat(arr);
                                    break;
                                case 2:
                                result=parseFloat(num1) - parseFloat(arr);
                                    break;
                                case 3:
                                result=parseFloat(num1) * parseFloat(arr);
                                    break;
                                case 4:
                                    if(arr==0){
                                        alert("除数不能为0");
                                        result=0;
                                    }else{
                                        result=parseFloat(num1)/parseFloat(arr);
                                        break;
                                    }     
                            }
                            break;     
            }

            switch(result.length){
                case 0:
                display.innerHTML=arr;
                break;
                default:
                display.innerHTML=result;
                break;
            }
          
        }
         
    }
