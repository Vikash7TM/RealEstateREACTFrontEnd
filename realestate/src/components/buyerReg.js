import React from "react";
import Axios from "axios";

class BuyerReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      city: "",
      pinCode: "",
      regDate: new Date(),
    };
  }
  //  "buyerName": "root3",
  // "buyerEmail": "mangesh5@gmail.com",
  // "buyerPassword": "root",
  // "buyerPhoneNo": "8208668688",
  // "buyerCity": "pune",
  // "buyerPincode": "9890",
  // "buyerRegistDate": "1997-02-22"

  addBuyer() {
    const { name, email, password, phone, city, pinCode, regDate } = this.state;

    Axios.post("http://localhost:8080/realEstate/buyer", {
      buyerName: name,
      buyerEmail: email,
      buyerPassword: password,
      buyerPhoneNo: phone,
      buyerCity: city,
      buyerPincode: pinCode,
      buyerRegistDate: regDate,
    }).then((response) => {
      localStorage.setItem("buyer", JSON.stringify(response.data));
      console.log(response.data);
      console.log("onlogin");
    });
  }

  pushExample() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <>
        <form className="col-lg-6 offset-lg-3 ">
          <div className="form-group">
            <label>Buyer Name</label>
            <input
              type="text"
              className="form-control"
              id="0InputEmail"
              aria-describedby="emailHelp"
              placeholder="FullName"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="name"
              placeholder="Email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label>PhoneNumber</label>
            <input
              type="text"
              className="form-control"
              placeholder="PhoneNo"
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>PinCode</label>
            <input
              type="text"
              className="form-control"
              placeholder="PinCode"
              onChange={(e) => {
                this.setState({ pinCode: e.target.value });
              }}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-md-10">
            <div className="col-md-1">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => this.addBuyer()}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BuyerReg;
