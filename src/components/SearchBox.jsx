import "./SearchBox.css";

export default function SearchBox({
  enrollment,
  setEnrollment,
  error,
  setError,
}) {
  return (
    <div className="search-wrapper">

      {/* Result Title */}
      <div className="result-title">
        Result - B.E. / B.E. (PTDC) / B.Tech. / B.Design.
      </div>

      {/* Search Table */}
      <table className="search-table">
        <tbody>
          <tr>

            {/* Enrollment Number */}
            <td className="label">
              Enrollment No.
            </td>

            <td className="input-cell">

              <input
                type="text"
                className={`textbox ${error ? "input-error" : ""}`}
                value={enrollment}
                placeholder=""
                maxLength={20}
                onChange={(e) => {

                  // Only allow letters and numbers
                  const value = e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");

                  setEnrollment(value);

                  // Remove error automatically when valid
                  if (value.length >= 12) {
                    setError("");
                  }
                }}
              />

              {/* Required Message */}
              <div className="required-text">
                {error}
              </div>

            </td>

            {/* Semester */}
            <td className="label">
              Semester
            </td>

            <td>

              <select className="semester">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>

            </td>

            {/* Grading */}

            <td>

              <label className="radio-box">

                <input
                  type="radio"
                  name="grade"
                  defaultChecked
                />

                Grading

              </label>

            </td>

            {/* Non-Grading */}

            <td>

              <label className="radio-box">

                <input
                  type="radio"
                  name="grade"
                />

                Non-Grading

              </label>

            </td>

          </tr>
        </tbody>
      </table>

    </div>
  );
}