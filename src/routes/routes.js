var controller = require('../controller/controller')

module.exports = (app) => {
    app.route('/customer')
        .get(controller.getCustomer)

        .post(controller.addCustomer)
    
    app.route('/customer/:customerID')
        .get(controller.getCustomerByID)

        .post(controller.addCustomer)

        .put(controller.updateCustomer)

        .delete(controller.deleteCustomer)
}

// export default routes;