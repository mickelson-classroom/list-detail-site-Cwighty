import React, { useState, ChangeEvent, FC, useEffect } from "react";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  rules?: ((value: number) => string | null)[];
}

export const NumberInput: FC<NumberInputProps> = ({
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
    const newValue = parseFloat(event.target.value);
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
      <label>{label}</label>
      <input
        type="number"
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
