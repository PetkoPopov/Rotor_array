var size
var arr=[]
let but = document.getElementById("button_rotor")
but.addEventListener('click',()=>{
arr=[]
    var input= document.getElementById("matrix_size")
    size = Number(input.value)
    for(i=0;i<size*size;i++){
 arr.push(i)
    }
    
})

function rotor_arr(arr_){
if(arr_.length == 0 ){arr_ = arr}

let col
let row

let num = Math.sqrt(arr_.length)
let arr_res=[]
for(e=0;e<arr_.length;e++){
col = e%num
row = Math.floor(e/num)

let new_index = col*num +(num-(row+1))
arr_res[new_index]=arr_[e]
}

arr=[]
arr_res.forEach(k=>{
    arr.push(k)
})
/////////////////////////////////////////////
/////// show arr ///////////////////////////
////////////////////////////////////////////
let res =' '
for(p=0 ; p<arr_res.length ; p++ ){
    res+='|'  
    res+=arr_res[p]
    res+='|'
if(p%num == num-1){
    console.log(res)
res=' '
}
}
////////////////////////////////////////////////
}

