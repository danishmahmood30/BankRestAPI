var mongoose = require('mongoose')
var model = require('../model/model')
var CustomValidator = require('../util/validators')

const Customer = mongoose.model('Customer',model.CustomerSchema)

module.exports.addCustomer = (req,res)=>{
    let newCustomer = new Customer(req.body)
    if(CustomValidator.checkCustomer(newCustomer)){
        console.log("validated")
        newCustomer.save((err,customer)=>{
            if(err){
                req.send(error)
                throw err
            }
            res.json(customer)
        })
    }else{
        res.send("Error in creating customer")
    }
    
    
}

module.exports.getCustomer = (req,res)=>{
    
    Customer.find({},(error,customer)=>{
        if(error){
            req.send(error)
        }
        res.json(customer)
    })
}

module.exports.getCustomerByID = (req,res)=>{
    
    Customer.findOne({aadhaar:req.params.customerID},(error,customer)=>{
        if(error){
            req.send(error)
        }
        res.json(customer)
    })
}

module.exports.updateCustomer = (req,res)=>{
    
    Customer.findOneAndUpdate({aadhaar:req.params.customerID},req.body, {new:true, useFindAndModify:false},(error,customer)=>{
        if(error){
            req.send(error)
        }
        res.json(customer)
    })
}

module.exports.deleteCustomer = (req,res)=>{
    
    Customer.remove({aadhaar:req.params.customerID},(error)=>{
        if(error){
            req.send(error)
        }
        res.json({message:`successfully deleted ${req.params.customerID}`})
    })
}