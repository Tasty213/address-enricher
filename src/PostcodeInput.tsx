import { useState } from "react";
import "./App.css";

type ValidationWarningProps = { warning: string; is_valid: boolean };

function ValidationWarning({ warning, is_valid }: ValidationWarningProps) {
  if (is_valid) {
    return null;
  } else {
    return (
      <p aria-label="validation warning" id="PostcodeInput.ValidationWarning">
        {warning}
      </p>
    );
  }
}

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
  setIsValid(postcode.length > 3);
}

export default PostcodeInput;
