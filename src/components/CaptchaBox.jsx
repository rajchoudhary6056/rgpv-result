import "./CaptchaBox.css";
import { useState, useEffect } from "react";

export default function CaptchaBox({
  enrollment,
  setError,
}) {

  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Generate Random Captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let text = "";

    for (let i = 0; i < 5; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setCaptcha(text);
    setUserCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleViewResult = () => {

    // Enrollment Required
    if (enrollment.trim() === "") {
      setError("Required");
      generateCaptcha();
      return;
    }

    // Enrollment Length
    if (enrollment.length < 12) {
      setError("Enrollment Number must be minimum 12 characters");
      generateCaptcha();
      return;
    }

    setError("");

    // Captcha Required
    if (userCaptcha.trim() === "") {
      setCaptchaError("Required");
      generateCaptcha();
      return;
    }

    // Captcha Wrong
    if (userCaptcha.toUpperCase() !== captcha) {
      setCaptchaError("Invalid Captcha");
      generateCaptcha();
      return;
    }

    setCaptchaError("");

    window.location.href =
      "https://www.instagram.com/krishna__choudhary143?igsh=N3ZvMGE1YzFwdmg4";
  };

  return (
    <div className="captcha-container">

      <table className="captcha-table">

        <tbody>

          <tr>
            <td className="captcha-image">

              <div className="captcha-text">
                {captcha}
              </div>

            </td>
          </tr>

          <tr>
            <td className="captcha-input-row">

              <input
                type="text"
                className="captcha-input"
                value={userCaptcha}
                onChange={(e) => {
                  setUserCaptcha(e.target.value.toUpperCase());
                  setCaptchaError("");
                }}
              />

              <div className="required-text">
                {captchaError}
              </div>

            </td>
          </tr>

          <tr>
            <td className="button-row">

              <button
                className="view-btn"
                onClick={handleViewResult}
              >
                View Result
              </button>

            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}