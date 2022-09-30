
// nth-child[2] là 1 sao
function autoRating(rating,message){
    const fixRating = rating + 1
    const indexOfLabel = document.getElementsByTagName("label")
    for(let i = 0 ; i < indexOfLabel.length; i++){
        const indexofchild = i + 2
        const radioPath = `#demo-form2 > div:nth-child(${indexofchild}) > div:nth-child(${fixRating }) > div > div`
        const button = document.querySelector(radioPath)
        if(button){
            button.classList.add("checked")
        }
    }
    const areaValue = document.querySelectorAll(("#tuluan\\[\\]"))
    for(let i = 0; i < areaValue.length; i++){
            areaValue[i].value = message
    }
}
autoRating(3,'Okayy')

