import { useState } from "react";
import "./styles.css";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setlast] = useState("");
  const [address, setaddress] = useState([{}]);

  function setFirstName(e) {
    setFirst(e.target.value);
    console.log(e.target.value);
  }
  function setlastName(e) {
    setlast(e.target.value);
    console.log(e.target.value);
  }

  function setaddressName(e) {
    setaddress(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className="App">
      <label>First Name</label>
      <input type="text" placeholder="fname" onClick={setFirstName} />
      <br />
      <label>Last Name</label>
      <input type="text" placeholder="lname" onClick={setlastName} />
      <br />
      <label style={{ marginRight: "180px" }}>Address:</label>
      <br />
      <br />
      <label>Street</label>
      <input
        type="text"
        placeholder="address Street"
        onClick={setaddressName}
      />
      <br />
      <label>Country</label>
      <input
        type="text"
        placeholder="address Country"
        onClick={setaddressName}
      />
      <br />
      <label>Zip</label>
      <input type="number" placeholder="address Zip" onClick={setaddressName} />
    </div>
  );
}

// Do this Assignment in React JS

// Instructions:
// 1. Use bootstrap for Frontend
// 2. Add sample bearer token in each request
// Bearer xyzabcpqr

// Assignment
// 1. Create a CRUD (Create/READ/Update/DELETE) of user using https://reqres.in
// 2. Make list user using infinite user scroll in table format using ajax.
// 3. Give option for user to manage multiple address (more than 1) from add/edit screen. At least 1 address is mandatory, no limit for maximum.

// Use following mock response for edit user.

// 	{
// 	    "data": {
// 	        "id": 2,
// 	        "fname": "john",
// 	        "lname": doe,
// 	        "addresses": [
// 	        	{
// 	        		"street" : 'abc'
// 	        		"country" : 'india'
// 	        		"zip" : '123'
// 	        	},

// 	        	{
// 	        		"street" : 'xyz'
// 	        		"country" : 'US'
// 	        		"zip" : '10001'
// 	        	}
// 	        ]

// 	    },

// 	}

// 4. Use same fields for add user.
