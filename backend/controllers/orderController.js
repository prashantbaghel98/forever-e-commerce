import orderModel from '../models/orderModel.js'

// Placing Order By COD 

const placeOrder = async (req, res) => {

    try {
        const { userId, amount, items, address } = req.body;

        const newOrder = orderModel.create({
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now(),
        })

        await orderModel.findByIdAndUpdate(userId, { cartData: {} });
        res.json({ success: true, message: "Order Placed " })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}



// Placing Order using Stripe 

const placeOrderStripe = async (req, res) => {

}

// Placing Order using Razorpay

const placeOrderRazorpay = async (req, res) => {

}

// All Data For Admin Panel 

const allOrders = async (req, res) => {

}


// User Order Data For Frontend

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


// Update Order Status From Admin Panel

const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }