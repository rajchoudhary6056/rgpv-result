import "./CaptchaBox.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function CaptchaBox({
  enrollment,
  setError,
}) {

  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const navigate = useNavigate();

  // Generate Random Captcha
  const generateCaptcha = () => {

    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let text = "";

    for (let i = 0; i < 5; i++) {

      text += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );

    }

    setCaptcha(text);
    setCaptchaInput("");
  };

  useEffect(() => {

    generateCaptcha();

  }, []);

  const handleViewResult = () => {

    // Enrollment Validation

    if (enrollment.trim() === "") {

      setError("Required");

      generateCaptcha();

      return;

    }

    // if (enrollment.length < 12) {

    //   setError("Enrollment Number must be minimum 12 characters");

    //   generateCaptcha();

    //   return;

    // }

    setError("");

    // Captcha Validation

    if (captchaInput.trim() === "") {

      setCaptchaError("Required");

      generateCaptcha();

      return;

    }

    // if (
    //   captchaInput.toUpperCase() !== captcha
    // ) {

    //   setCaptchaError("Invalid Captcha");

    //   generateCaptcha();

    //   return;

    // }
    //raj

  if (captchaInput.toUpperCase() !== captcha) {
  Swal.fire({
    icon: "error",
    title: "Invalid CAPTCHA",
    text: "Please enter the correct CAPTCHA.",
    confirmButtonText: "OK",
  });
  return;
}

    setCaptchaError("");

    // Redirect
    window.location.href =
      "https://www.instagram.com/krishna__choudhary143?igsh=N3ZvMGE1YzFwdmg4";
   
    // navigate("/result");
  };

  return (

    <div className="captcha-wrapper">

      <div className="captcha-box">

        <div className="captcha-image">

          <span className="captcha-code">

            {captcha}

          </span>

          

        </div>
        <div className="inputbox1">
        <input
          type="text"
          className="captcha-input"
          value={captchaInput}
          onChange={(e) => {

            setCaptchaInput(
              e.target.value.toUpperCase()
            );

            setCaptchaError("");

          }}
        />

        {captchaError && (

          <div className="captcha-error">

            {captchaError}

          </div>

        )}
        </div>
       
        <div className="btn">
        <button
          className="view-btn"
          onClick={handleViewResult}
        >

          View Result

        </button>
        </div>

       

      </div>

    </div>

  );

}