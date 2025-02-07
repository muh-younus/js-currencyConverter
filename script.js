const url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".drop-down select");
const btn = document.querySelector("form button");



for(select of dropdown){

    for(currCode in countryList){

        let newOption = document.createElement("option");
        newOption.innerHTML=currCode;
        newOption.value=currCode;
        select.append(newOption);

        if(select.name === "from" && currCode === "USD"){

            newOption.selected = "selected";
        }

        else if(select.name === "to" && currCode === "PK"){

            currCode.selected = "selected"
        }

        select.append(newOption);
        
        
    }

    select.addEventListener("change",(evt) =>{

        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{

    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
   
    
    
}

const updateExchangeRate = async () => {

    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    
    if(amtVal === "" || amtVal < 1){

       
        amount.value = "1";
        amtVal = 1;

    }


}
btn.addEventListener("click", (evt) => {

    evt.preventDefault();
    updateExchangeRate();
})