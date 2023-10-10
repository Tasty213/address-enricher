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

export default ValidationWarning;
