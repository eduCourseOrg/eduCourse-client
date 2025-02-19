

const PaymentForm  = () => {
    return (
        <div>
            <form>
            <h2 className="text-amber-200">Payment Details</h2>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiry Date" />
            </form>
        </div>
    );
};

export default PaymentForm ;