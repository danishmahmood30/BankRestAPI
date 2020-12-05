
class CustomValidator {

    // server side validation
    static checkCustomer(cust) {
        if(cust.name.length>10){
            return true
        }else {
            return false
        }
    }

}

module.exports = CustomValidator