import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CaptchaBox from "../components/CaptchaBox";
import Footer from "../components/Footer";

export default function Home() {
  const [enrollment, setEnrollment] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <Header />

      <SearchBox
        enrollment={enrollment}
        setEnrollment={setEnrollment}
        error={error}
        setError={setError}
      />

      <CaptchaBox
        enrollment={enrollment}
        setError={setError}
      />

      <Footer />
    </>
  );
}