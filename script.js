function checkPhoneNumber() {
let phoneNumberInput = document.getElementsByName("phoneNumber")[0]
let phoneNumber = phoneNumberInput.value 

if(phoneNumber == Number(phoneNumber)) {
    if(phoneNumber[0] == "9") {
        if(phoneNumber[1] == "9") {
            if(phoneNumber[2]== "8") {
                if(phoneNumber.length == 12){
                    phoneNumberInput.classList.add("green")
                } else {
                    phoneNumberInput.classList.add("red")
                }
            } else {
                phoneNumberInput.classList.add("red")
            } 
        } else {
            phoneNumberInput.classList.add("red") 
        } 
    } else {
        phoneNumberInput.classList.add("red")
    }
} else {
    phoneNumberInput.classList.add("red")
}


        

            

            
                    
                 
                 
                
            
        
    

        

        
    























}