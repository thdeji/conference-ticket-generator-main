function TextInputField({ type, name, placeholder,value,onChange }) {

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="-mt-2 bg-Neutral700/50 border border-Neutral700 rounded-md text-Neutral300 p-2 placeholder:text-Neutral500"
      value={value}
      onChange={onChange}
      required
    />
  );
}
export default TextInputField;
