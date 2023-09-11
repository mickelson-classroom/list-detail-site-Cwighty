import React, { useState, ChangeEvent, FC, useEffect } from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rules?: ((value: string) => string | null)[];
}

export const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  rules = [],
}) => {
  const [validationError, setValidationError] = useState<string | null>(null);
  useEffect(() => {
    const errorMessages = rules
      .map((rule) => rule(value))
      .filter((error) => error !== null);

    if (errorMessages.length > 0) {
      setValidationError(errorMessages[0]);
    } else {
      setValidationError(null);
    }
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);

    const errorMessages = rules
      .map((rule) => rule(newValue))
      .filter((error) => error !== null);

    if (errorMessages.length > 0) {
      setValidationError(errorMessages[0]);
    } else {
      setValidationError(null);
    }
  };

  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className={`form-control ${
          validationError ? "is-invalid" : "is-valid"
        }`}
        value={value}
        onChange={handleInputChange}
      />
      {validationError && (
        <div className="invalid-feedback">{validationError}</div>
      )}
      {!validationError && <div className="valid-feedback">Looks Good!</div>}
    </div>
  );
};
