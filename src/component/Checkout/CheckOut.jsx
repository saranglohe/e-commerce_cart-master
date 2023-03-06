import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";


const CheckOut = () => {

  const [user, setUser]=useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    address:"",
    address2:"",
    // unitedstates:"",
    // california:"",
    zip:"",
    // sameaddress:"",
    // saveinfo:"",
    // creditcard:"",
    // debitcard:"",
    // PayPal:"",
    NameOnCard:"",
    CreditCardNumber:"",
    Expiration:"",
    CVV:"",

})

let name, value;
const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user, [name]:value});

};

const postData=async (e)=>{
    e.preventDefault();

    const {firstname, lastname, username, email, address,address2,zip,NameOnCard ,CreditCardNumber,Expiration,CVV}=user;

    if(firstname && lastname && username && email && address && address2  && zip  &&NameOnCard &&CreditCardNumber && Expiration &&CVV){

    

const res=  await fetch("https://ecom-682fc-default-rtdb.firebaseio.com/checkout.json",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(
        {
          firstname,
          lastname,
          username,
          email,
          address,
          address2,
          
          zip,
          // sameaddress,
          // saveinfo,
          // creditcard,
          // debitcard,
          // PayPal,
          NameOnCard,
          CreditCardNumber,
          Expiration,
          CVV,
    
        }  
    ),

});

if(res){
    setUser({
      firstname:"",
      lastname:"",
      username:"",
      email:"",
      address:"",
      address2:"",
      // unitedstates:"",
      // india:"",
      // california:"",
      // maharashtra:"",
      zip:"",
      // sameaddress:"",
      // saveinfo:"",
      // creditcard:"",
      // debitcard:"",
      // PayPal:"",
      NameOnCard:"",
      CreditCardNumber:"",
      Expiration:"",
      CVV:"",
    });
    alert("Data stored successfully");
}

}      

   else{
    alert("please fill all data")
   }


};





















    const state =useSelector((state)=>state.handleCart)
    let total =0;
    const itemsList=(item)=>{
        total =total+ Math.floor((item.price)*82);
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.title}</h6>
            </div>
            <span className="text-muted"> Rs {Math.floor(item.price * 82)}</span>
          </li>
        )
    }
  return (
    <>
    <div method="POST">
   <div className="container my-5">
       <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{state.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {state.map(itemsList)}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (Rupees)</span>
            <strong>Rs {total}</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required="" value={user.firstname} onChange={getUserData} name="firstname"/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder=""  required="" value={user.lastname} onChange={getUserData} name="lastname"/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required="" value={user.username} onChange={getUserData} name="username"/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={user.email} onChange={getUserData} name="email"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" value={user.address} onChange={getUserData} name="address"/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={user.address2} onChange={getUserData} name="address2"/>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" required="">
                <option value="" >Choose...</option>
                <option >United States</option>
                <option >India</option>

              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option >California</option>
                <option >Maharashtra</option>

              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required="" value={user.zip} onChange={getUserData} name="zip"/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address" />
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info" />
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" type="radio" className="form-check-input" checked="" required="" value={user.creditcard} onChange={getUserData} name="credit"/>
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit"  type="radio" className="form-check-input" required="" value={user.debitcard} onChange={getUserData} name="debitcard"/>
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal"  type="radio" className="form-check-input" required="" value={user.PayPal} onChange={getUserData} name="PayPal"/>
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required="" value={user.NameOnCard} onChange={getUserData} name="NameOnCard"/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required="" value={user.CreditCardNumber} onChange={getUserData} name="CreditCardNumber"/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" value={user.Expiration} onChange={getUserData} name="Expiration"/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" value={user.CVV} onChange={getUserData} name="CVV"/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4"/>
          <button className="w-100 btn btn-primary btn-lg" id='checkout' type="submit" method="POST" onClick={postData}>Continue to checkout</button>
         
        </form>
      </div>
    </div> 
    </div>
    </div>
    </>
  )
}

export default CheckOut