let btn = document.querySelector(".download")
let realprogress = document.querySelector(".real-progress")

btn.addEventListener('click',function(){
    let count = 0 
    let int = setInterval(()=>{
        if(count == 100){
            clearInterval(int)
        }
        realprogress.style.width = `${count}%`
        count++
    },100)
})