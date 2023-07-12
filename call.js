function lock() {
    document.getElementById("case3").style.display = "block";
}
function phone() {
    document.getElementById("cass").style.display = "block";
}
function displaytext() {
    document.getElementById("dis").style.backgroundColor = `white`
}
function displaytexty() {
    document.getElementById("dat").style.backgroundColor = "white"
}
function displayi() {
    document.getElementById("for").style.backgroundColor = "white"
}
function four() {
    document.getElementById("four").style.backgroundColor = "white"
}
function five() {
    document.getElementById("five").style.backgroundColor = "white"
}
function six() {
    document.getElementById("six").style.backgroundColor = "white"
    document.getElementById("casy").style.display = "block";
}
let arr = []
let userInp = ""
function display(a) {
    document.getElementById("screen").innerHTML += a
    document.getElementById("bush").style.visibility = "visible"
    userInp += a
    console.log(userInp)
}
function clearone() {
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML.slice(0, -1)
}
function displayy(b){
    document.getElementById("screen").innerHTML += b
    document.getElementById("bush").style.visibility = "visible"
    userInp += b
    console.log(userInp)

}
let mine = document.getElementById("screen").innerHTML
function cup(){
    document.getElementById("hill").style.display = "block"
    let errm = 0
    let dan = setInterval(()=>{
        errm++
    }, 1000)
    setTimeout(()=>{
        clearInterval(dan)
        document.getElementById("main").style.display ="block"
    },5000)
}
let airtime = document.getElementById("airtime")
let network = document.getElementById("network")
let amount = document.getElementById("amount")
let history = document.getElementById("history")
let airtimestore = []
function generate(){
    airtime.innerHTML = Math.floor(Math.random()*10000000000)
    
    let airtimeInfo = {
        network : network.value,
        amount : amount.value,
        pin : airtime.innerHTML,
        used: false,
    }
    airtimestore.push(airtimeInfo)
    console.log(airtimestore)
    let newArr = JSON.stringify(airtimestore)
        localStorage.setItem("airtimeS", newArr)
    history.innerHTML += `<p id = "his">*. Network : ${airtimeInfo.network}<br>
                         Amount : ${airtimeInfo.amount}<br>
                         Pin : ${airtimeInfo.pin}<br>
                         used : ${airtimeInfo.used}<br>
                         Date : 1/7/2023
                         </p>`
}

function call() {
    if (userInp.includes("*")){
        document.getElementById("cavi").style.display = "block"
                let errm = 0
        let dan = setInterval(()=>{
            errm++
        }, 1000)
        setTimeout(()=>{
            clearInterval(dan)
            document.getElementById("cavy").style.display ="block"
        },5000)
            } 
    else{
        document.getElementById("working").style.display = "block"
        document.getElementById("crib").innerHTML = userInp
        let errm = 0
        let dan = setInterval(()=>{
            errm++
        }, 1000)
        setTimeout(()=>{
            clearInterval(dan)
            document.getElementById("working").style.display ="none"
        },5000)
    }
    for (let index = 0; index < airtimestore.length; index++) {
        const element = airtimestore[index];
        console.log(element.pin)
        if (element.network == "MTN" && userInp.startsWith("*555*") && userInp.endsWith("#") 
             && userInp.includes(element.pin)){
            document.getElementById("cavi").style.display = "block"
                    let errm = 0
            let dan = setInterval(()=>{
                errm++
            }, 1000)
            setTimeout(()=>{
                clearInterval(dan)
                document.getElementById("cavi").style.display = "none"
                document.getElementById("cavy").style.display = "none"
                alert(`you have succesfully Recharged ${element.network} of #${element.amount}`)
            },5000) 
                } else if (element.network == "AIRTEL" && userInp.startsWith("*311*") && userInp.endsWith("#") 
                && userInp.includes(element.pin)){
               document.getElementById("cavi").style.display = "block"
                       let errm = 0
               let dan = setInterval(()=>{
                   errm++
               }, 1000)
               setTimeout(()=>{
                   clearInterval(dan)
                   document.getElementById("cavi").style.display = "none"
                   document.getElementById("cavy").style.display = "none"
                   alert(`you have succesfully Recharged ${element.network} of #${element.amount}`)
               },5000) 
                   } else if (element.network == "GLO" && userInp.startsWith("*805*") && userInp.endsWith("#") 
                   && userInp.includes(element.pin)){
                  document.getElementById("cavi").style.display = "block"
                          let errm = 0
                  let dan = setInterval(()=>{
                      errm++
                  }, 1000)
                  setTimeout(()=>{
                      clearInterval(dan)
                      document.getElementById("cavi").style.display = "none"
                      document.getElementById("cavy").style.display = "none"
                      alert(`you have succesfully Recharged ${element.network} of #${element.amount}`)
                  },5000) 
                      }
                       else if (element.network == "9MOBILE" && userInp.startsWith("*222*") && userInp.endsWith("#") 
                      && userInp.includes(element.pin)){
                     document.getElementById("cavi").style.display = "block"
                             let errm = 0
                     let dan = setInterval(()=>{
                         errm++
                     }, 1000)
                     setTimeout(()=>{
                         clearInterval(dan)
                         document.getElementById("cavi").style.display = "none"
                         document.getElementById("cavy").style.display = "none"
                         alert(`you have succesfully Recharged ${element.network} of #${element.amount} <br> your new balance is ${totalanswer}`)
                     },5000) 
                         }
    }
    
        // totalResult.innerHTML = "Total:" + totalanswer
}
function back(){
    document.getElementById("cavy").style.display ="none";
    if(document.getElementById("cavy").style.display = "none"){
        document.getElementById("cavi").style.display = "none"
    }
}

function end(){
    document.getElementById("working").style.display = "none"
}

function backhome(){
    document.getElementById("main").style.display = "none"
    if(document.getElementById("main").style.display = "none"){
        document.getElementById("hill").style.display = "none"
    }
}
function backhm(){
    document.getElementById("cass").style.display = "none"

}
