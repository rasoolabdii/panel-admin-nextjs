function CheckBox({ label , name , id , chacked , value , onChange }) {
    return (
        <div className="flex items-center gap-x-2 text-secondary-600"> 
            <input 
                type="checkbox"
                name={name}
                id={id}
                chacked={chacked}
                value={value}
                onChange={onChange}
                className="cursor-pointer form-checkbox rounded-[5px] border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900"
            />
            <label className="cursor-pointer" htmlFor={id}>
                {label}
            </label>
        </div>
    )
};
export default CheckBox;