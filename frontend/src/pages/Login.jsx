import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showmaster, setShowMaster] = useState(false);
  const [userid, setUserid] = useState("");
  const navigate = useNavigate();

  const toggleMaster = () => {
    setShowMaster(!showmaster);
  };

  const handleChange = (e) => {
    setUserid(e.target.value);
  };

  const handleConfirm = () => {
    if (userid === "admin123") {
      navigate("/books/admin/:id");
    } else {
      alert("Incorrect user id");
    }
  };

  return (
    <>
      <div className="w-full mt-80 flex justify-center">
        <button
          onClick={toggleMaster}
          className="bg-blue-600 text-white mx-6 hover:bg-blue-900 px-10 py-2 text-center"
        >
          Master Login
        </button>{" "}
      </div>

      {showmaster && (
        <div className="text-center mt-12">
          <label htmlFor="userid">User id:</label>
          <input
            id="userid"
            value={userid}
            onChange={handleChange}
            className="border ml-2 border-gray-400 py-2 px-2 rounded"
            type="text"
            placeholder="Enter User id"
          />
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white mx-6 hover:bg-blue-900 px-10 py-2 text-center mt-2"
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
