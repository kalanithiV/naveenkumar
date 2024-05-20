export default function ({ VisaCardDate, ExpraiData, imgae }) {
  return (
    <div className="Payment_Section">
      <p>
        <img src={imgae} />
      </p>
      <div>
        <small>
          Visa: <span>{VisaCardDate}</span>
        </small>
        <small>
          Exp.date:<span>{ExpraiData}</span>
        </small>
      </div>
    </div>
  );
}
