/* eslint-disable react/prop-types */
const FormInput = ({ name, type, label }) => {
  return (
    <div className='flex flex-col gap-y-1'>
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
      <input name={name} id={name} type={type} className='rounded-lg p-3 text-black' />
    </div>
  );
};
export default FormInput;
