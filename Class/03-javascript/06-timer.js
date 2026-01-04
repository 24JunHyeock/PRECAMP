let isStarted = false;

const cl = ()=>{
    if(isStarted===false){
        //타이머가 작동 중이 아닐때
        isStarted = true
        document.getElementById("ch").disabled = false
        let rand = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
        document.getElementById("num").innerText = rand;
        let time = 5;
        let timer
        timer = setInterval(function(){
            if(time>=0){
                let min = Math.floor(time/60);
                let sec = String(time%60).padStart(2,"0");
                document.getElementById("timer").innerText = `${min}:${sec} `
                time = time-1;
            }else {
                document.getElementById("ch").disabled=true
                isStarted = false
                clearInterval(timer)
            }
        },1000)

    }else {
        //타이머가 작동 중일때
    }
    
}