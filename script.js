const url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".drop-down select");

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
}