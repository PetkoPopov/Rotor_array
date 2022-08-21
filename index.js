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

var table = document.createElement('table')
function makeTable(){

var tr = document.createElement('tr')
for(i=0;i<num*num;i++){

     td = document.createElement('td')
     let row_=Math.floor(i/num)

    for(e=0;e<num;e++){
        createSqr(row_,e)
    }
    tr.appendChild(td)

    if(i%num== (num-1)  ){
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
    
        if(i%num == (num-1)  ){
        console.log("made row")
        // table_rotor.appendChild(tr_rotor)
        table.appendChild(tr_rotor)
        tr_rotor = document.createElement('tr')
    }
    
    }  // end for
    matrix.appendChild(table)  
}//end function
function createSqr(row_ , l){
    if(row_ == l){

        td.innerHTML='<small>'+i+'</small>' 
        td.style.backgroundColor='#14bd1f'
        
       
        
        let sqr = new Sqr(i,'#17ad6c')
        arr_sqr.push(sqr)
    }
}