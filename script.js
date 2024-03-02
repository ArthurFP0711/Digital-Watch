//Watch
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

//StopWatch
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const stopWatch = document.getElementById('stopwatch')
const watch = document.getElementById("watch")
const btnstopwatch = document.getElementById('showstop')

const btnwatch = document.getElementById('watch-btn')




btnstopwatch.addEventListener('click', () => {
    watch.classList.add('hide-watch')
    stopWatch.classList.add('showstopwatch')
    
})

btnwatch.addEventListener('click', () => {
    watch.classList.remove('hide-watch')
    stopWatch.classList.remove('showstopwatch')
})

relogio = setInterval( function time(){
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hr < 10) hr = 0 + hr
    if(min < 10) min = 0 + min
    if(sec < 10) sec = 0 + sec


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})

let mnt = 0
let seg = 0
let hr = '00' 
let cronometro
const startbtn = document.getElementById('startbtn')
let IsOn = false

function start(){
    if(!IsOn){
    IsOn = true
    cronometro = setInterval(()=>{
        seg++
        if(seg==60){
            seg=0
            mnt++
        }
        if(mnt == 60){
            mnt = 0
            hr++
        }
        updatedstopwatch()
    },1000)
}
}

function pause(){
    IsOn = false
    clearInterval(cronometro)
}

function clearTimer(){
    IsOn = false
    clearInterval(cronometro)
    mnt = 0
    seg = 0
    hr = '00' 
    segundo.textContent = '00'
    minuto.textContent = '00'
    hora.textContent = '00'
}

function updatedstopwatch(){
    if(seg < 10){
        segundo.textContent = '0' + seg
    }
    else{
        segundo.textContent = seg
    }
    if(mnt < 10){
        minuto.textContent = '0' + mnt
    }
    else{
        minuto.textContent = mnt
    }
    if(hora < 10){
        hora.textContent = '0' + hr
    }
    else{
        hora.textContent = hr
    }
}