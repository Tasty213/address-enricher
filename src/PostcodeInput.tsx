import { useState } from "react";
import "./App.css";
import ValidationWarning from "./ValidationWarning";
import ValidatePostcodeResponse from "./postcodesIoTypes";

function PostcodeInput() {
  const [postcode, setPostcode] = useState("SW1P 2PN");
  const [isValid, setIsValid] = useState(true);

  return (
    <div>
      <input
        type="text"
        placeholder={postcode}
        onChange={(e) =>
          validate_postcode(e.target.value, setIsValid, setPostcode)
        }
      ></input>
      <ValidationWarning warning="Postcode isn't valid" is_valid={isValid} />
    </div>
  );
}

function validate_postcode(
  postcode: string,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>,
  setPostcode: React.Dispatch<React.SetStateAction<string>>
) {
  setPostcode(postcode);

  fetch(`https://api.postcodes.io/postcodes/${postcode}/validate`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Failed to call postcode validator API, falling back to local method"
        );
      }
    })
    .then((data: ValidatePostcodeResponse) => setIsValid(data.result))
    .catch((error) => setIsValid(validate_postcode_locally(postcode)));
}

function validate_postcode_locally(postcode: string) {
  return postcode.length > 3;
}

export default PostcodeInput;
