export const steps = [
    {
        count: "1",
        name: "Customer Info",
        Component: () => { return <p>Provide your contact details</p>}
    },
    {
        count: "2",
        name: "Shipping Info",
        Component: () => { return <p>Enter your shipping address</p>}
    },
    {
        count: "3",
        name: "Payment Info",
        Component: () => { return <p>Completed payment for your order</p>}
    },
    {
        count: "4",
        name: "Deliverd",
        Component: () => {return <p>Your order has been delivered</p>}
    }
]