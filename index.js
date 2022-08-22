class Sqr{
    constructor(i,color){
this.position=i;
this.color=color;
    }
}

var colors=[]
let div = document.createElement('div')
div.innerHTML='Hello'
let body = document.getElementsByTagName('body')[0]
body.appendChild(div)


var arr_sqr=[]

var table = document.getElementsByTagName('table')[0]

function makeTable(){
    let matrix_size = document.getElementById('matrix_size')
    let num = Number(matrix_size.value)
var tr = document.createElement('tr')
let is_gen_color= true

let color 
for(i=0;i<num*num;i++){

   if(is_gen_color) {
     color = generateColor()
      is_gen_color=false  }
    
     td = document.createElement('td')
     let row_=Math.floor(i/num)

    for(e=0;e<num;e++){
        createSqr(row_,e,color)
    }
    tr.appendChild(td)

    if(i%num== (num-1)  ){
        is_gen_color=true
    table.appendChild(tr)
    tr = document.createElement('tr')}


}
}


function rotor(){

    let matrix_size = document.getElementById('matrix_size')
    let num = Number(matrix_size.value)
    for(i=0;i<arr_sqr.length;i++){

        let n = arr_sqr[i].position

        let row = Math.floor(n/num)

        let col = n%num  

        let index = col*num+num-(1+row)

        arr_sqr[i].rotor_index=n

        arr_sqr[i].position=index
    
}

    console.log(arr_sqr)    
}


let button_rotor = document.getElementById('button_rotor')
button_rotor.innerText="START"


button_rotor.addEventListener('click',()=>{
    if(button_rotor.textContent == "START")
    {
   button_rotor.innerText="ROTOR"
   makeTable()
}else if(button_rotor.textContent == "ROTOR"){
    
    rotor()
    showTable()
}

})

function showTable(){
   document.getElementsByTagName('table')[0].parentNode.removeChild(table)

   table = document.createElement('table')
   let tr_rotor = document.createElement('tr')
   let matrix_size = document.getElementById('matrix_size')
    let num = Number(matrix_size.value)
    for(i=0;i<arr_sqr.length;i++){
        let td_rotor= document.createElement('td')
        let count = 0
        arr_sqr.forEach(sqr=>{
            
            if(sqr.position == i){
            td_rotor.style.backgroundColor = sqr.color
            td_rotor.innerHTML=count
            }
            count++
        })
        
        tr_rotor.appendChild(td_rotor)
        if(i%num == (num-1)  ){
        table.appendChild(tr_rotor)
        tr_rotor = document.createElement('tr')
    }
    
    }  // end for
    

    body.appendChild(table)
    
}//end function
function createSqr(row_ , l,color){
    if(row_ == l){

        td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor = color
        let sqr = new Sqr(i,color)
        arr_sqr.push(sqr)
    }
}
function generateColor(){
let color='hsl('
let h = 100
let w = 50
let b = 50
color+=String(h)
color+= ','
color+=String(w)
color+='% , '
color+=String(b)
color+='%)'
h_lp = true
w_hl =false
b_hl =false
while(colors.includes(color)){
if(h_lp){h+=50}   
    if(h>=359){
        h=0
        h_lp=false
        w_hl=true
     }
     if(w_hl){
        w+=15
        h_lp=true
        w_hl=false
     }
     if(w>=100){
        b_hl=true
        w=0
        b_hl=true
     }
     if(b_hl){
        b+=10
        b_hl=false
     }
    color='hsl('
    color+=String(h)
    color+= ','
    color+=String(w)
    color+='%, '
    color+=String(b)
    color+='%)'
}
colors.push(color)
return color 
}