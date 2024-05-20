import "../payment-details/payment.css";
import DebitCard from "../../pages/payment-details/debitcard";

const handlechange = () => {
  alert("Please Update the Payment ");
};

export default function () {
  return (
    <div className="VisaPayment_Method">
      <div className="VisaPayment_Deatails">
        <label>
          Payment methods<span>Edit</span>
        </label>
        <DebitCard />
        <button onClick={handlechange}>Update payment method</button>
      </div>
    </div>
  );
}
