class Sqr{
    constructor(i,color,row,col){
this.position=i;
this.color=color;
    }
}


let div = document.createElement('div')
div.innerHTML='Hello'
let body = document.getElementsByTagName('body')[0]
body.appendChild(div)
let matrix = document.getElementsByTagName('matrix')[0]
body.appendChild(matrix)
let matrix_size = document.getElementById('matrix_size')
let num = Number(matrix_size.value)
var arr_sqr=[]

function makeTable(){

var tr = document.createElement('tr')
var table = document.createElement('table')
for(i=0;i<num*num;i++){

     td = document.createElement('td')
    if(i>=0 && i<=7){


            td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='rgb(204, 226, 58)'

        let sqr = new Sqr(i,'rgb(204, 226, 58)')
        arr_sqr.push(sqr)
    } else if(i >= 8 && i<=15 ){

            td.innerHTML='<small>'+i+'</small>' 
            td.style.backgroundColor='#86e23a'

        let sqr = new Sqr(i,'#86e23a')
        arr_sqr.push(sqr)
    }else if(i>=16 && i<=23){
            td.innerHTML='<small>'+i+'</small>' 
            td.style.backgroundColor='hwb(187 15% 53%)'

        let sqr = new Sqr(i,'hwb(187 15% 53%)')
        arr_sqr.push(sqr)
    }else if(i>=24 && i <=31){
            td.innerHTML='<small>'+i+'</small>' 
            td.style.backgroundColor='hwb(241 14% 36%)'

        let sqr = new Sqr(i,'hwb(241 14% 36%)')
        arr_sqr.push(sqr)
    }else if(i>=32 && i <=39){

            
        td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='hwb(296 7% 58%)'


        let sqr = new Sqr(i,'hwb(296 7% 58%)')
        arr_sqr.push(sqr)
    }else if(i>=40 && i <=47){

    td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='hwb(346 8% 26%)'
    

        let sqr = new Sqr(i,'hwb(346 8% 26%)')
        arr_sqr.push(sqr)
    }else if(i>=48 && i <=55){


        td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='rgb(189, 68, 20)'
        

    let sqr = new Sqr(i,'rgb(189, 68, 20)')
        arr_sqr.push(sqr)
    }else if(i>=56 && i <=63){

        td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='#14bd1f'
        

        let sqr = new Sqr(i,'#14bd1f')
        arr_sqr.push(sqr)
    }

    tr.appendChild(td)

    if(i%8 == 7  ){
    table.appendChild(tr)
    tr = document.createElement('tr')

}
}
matrix.appendChild(table)
}


function rotor(){


    for(i=0;i<arr_sqr.length;i++){
 let n = arr_sqr[i].position
 let row = Math.floor(n/num)
 let col = n%num
  // 0-0 0*8+num-(1+0)=7
  //0-1  1*8+num-1=15
  //0-2  2*num +num-1=23
  // row= 2 col=4 4*8+num-(1+2)= 32+8-3=37
  //  
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
   setTimeout(()=>{
    button_rotor.style.backgroundColor='red'
   },2000)
}else if(button_rotor.textContent == "ROTOR"){
    
    rotor()
    showTable()
}

})

function showTable(){
    

    let table_rotor =document.createElement('table')
    let tr_rotor = document.createElement('tr')
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
    
        if(i%8 == 7  ){
        console.log("made row")
        table_rotor.appendChild(tr_rotor)
        tr_rotor = document.createElement('tr')
    }
    
    }  // end for
    matrix.appendChild(table_rotor)  
}//end function