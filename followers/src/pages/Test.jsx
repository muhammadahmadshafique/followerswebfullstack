import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [responseData, setResponseData] = useState(null);
  console.log("🚀 ~ file: Test.jsx:6 ~ Test ~ responseData:", responseData)

  useEffect(() => {
    // Define the URL and JSON payload
    const apiUrl = "https://dripfeedpanel.com/api/v2";
    const requestData = {
      action: "services",
      key: "a0864f8e1f390d732bc2e02cac405baf",
    };

    const test = async () => {
      try {
        const response = await axios.post('http://localhost:3001/auth/api/services');
        setResponseData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    test()
  }, []);

  return (
    <div className="App">
      <h1>Aaaaa:</h1>
      {/* <pre>{JSON.stringify(responseData, null, 2)}</pre> */}
    </div>
  );
}

export default Test;
