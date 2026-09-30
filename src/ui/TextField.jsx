function TextField({ name, label , value , onChange , className="" , dir="rtl" , type="text" }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2">
                {label}
            </label>
            <input 
                name={name}
                id={name}
                value={value}
                type={type}
                dir={dir}
                onChange={onChange}
                className="textField__input"
            />
        </div>
    )
};
export default TextField;