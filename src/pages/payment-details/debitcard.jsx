import PayMethodList from "../../components/PaymentMethode/PayMethodList";
import Card1 from "../../images/Newimages.jpeg";
import Card2 from "../../images/AtmCard.jpeg";

export default function () {
  const AmountDetails = [
    {
      id: 1,
      VisaCardDate: "4291",
      ExpraiData: "12/26",
      imgae: Card1,
    },
    {
      id: 2,
      VisaCardDate: "5532",
      ExpraiData: "09/26",
      imgae: Card2,
    },
  ];

  return (
    <>
      {AmountDetails.map((list, index) => (
        <PayMethodList
          ExpraiData={list.ExpraiData}
          VisaCardDate={list.VisaCardDate}
          key={index}
          imgae={list.imgae}
        />
      ))}
    </>
  );
}
