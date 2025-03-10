import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  useSignup = (setIsAuthenticated) => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth,setDateOfBirth] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password, phoneNumber, gender, dateOfBirth, membershipStatus}),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed", response);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {name, setName, email, setEmail, password, setPassword, phoneNumber, setPhoneNumber, gender,
        setGender, dateOfBirth, setDateOfBirth, membershipStatus , setMembershipStatus, handleSignup };
};

export default useSignup;
