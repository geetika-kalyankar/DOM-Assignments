// 1 assignment
const removeList = document.querySelectorAll("a")

for(let i = 0; i < removeList.length; i++){
    if(i % 2 !== 0){
        removeList[i].remove()
    }
}

// 2 assignment 
document.querySelector(".main__form-btn").removeAttribute("disabled")
document.querySelector(".main__form-input").removeAttribute("disabled")

