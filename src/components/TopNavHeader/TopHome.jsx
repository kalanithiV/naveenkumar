import Logo from "../../images/logoofficial.png";

export default function () {
  return (
    <div className="TopHeader_Title">
      <div className="TopHeader_Details">
        <img src={Logo} />
        <ul>
          <li>Platform.</li>
          <li>Solutions.</li>
          <li>Resources.</li>
          <li>Pricing.</li>
        </ul>
      </div>
      <div className="TopRight_LoginHeader">
        <label>Login</label>
        <button>Get started</button>
      </div>
    </div>
  );
}
