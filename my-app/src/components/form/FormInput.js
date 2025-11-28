import React from "react";

/**
 * 재사용 가능한 Input 컴포넌트
 * @param {string} label - 라벨 텍스트
 * @param {string} name - input name 속성
 * @param {string} type - input type (text, number, email 등)
 * @param {string} value - input 값
 * @param {function} onChange - 변경 핸들러
 * @param {boolean} required - 필수 여부
 * @param {string} placeholder - placeholder 텍스트
 * @param {string} description - input 아래 설명 텍스트
 */
function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  description = ""
}) {
  return (
    <fieldset className="apply-forminput">
      <legend>
        {label}
        {required && <span> *</span>}
      </legend>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {description && (
        <p className="forminput-description">{description}</p>
      )}
    </fieldset>
  );
}

export default FormInput;