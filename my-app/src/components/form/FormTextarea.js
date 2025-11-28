import React from "react";

/**
 * 재사용 가능한 Textarea 컴포넌트
 * @param {string} label - 라벨 텍스트
 * @param {string} name - textarea name 속성
 * @param {string} value - textarea 값
 * @param {function} onChange - 변경 핸들러
 * @param {boolean} required - 필수 여부
 * @param {string} placeholder - placeholder 텍스트
 * @param {number} rows - 표시할 줄 수
 */
function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  rows = 5
}) {
  return (
    <fieldset className="apply-forminput">
      {label && (
        <legend>
          {label}
          {required && <span> *</span>}
        </legend>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </fieldset>
  );
}

export default FormTextarea;