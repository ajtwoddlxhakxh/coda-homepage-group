import React from "react";

/**
 * 재사용 가능한 Select 컴포넌트
 * @param {string} label - 라벨 텍스트
 * @param {string} name - select name 속성
 * @param {string} value - 선택된 값
 * @param {function} onChange - 변경 핸들러
 * @param {array} options - 옵션 배열 [{ value: "값", label: "표시텍스트" }]
 * @param {boolean} required - 필수 여부
 * @param {string} placeholder - 기본 선택 텍스트
 */
function FormSelect({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  placeholder = "선택하세요"
}) {
  return (
    <div className="apply-field">
      <label htmlFor={name}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;