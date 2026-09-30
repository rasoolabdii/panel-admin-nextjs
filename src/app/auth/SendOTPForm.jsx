import TextField from "@/ui/TextField";

function SendOTPForm({ phoneNumber , onChange }) {
    return(
        <div>
            <form className="space-y-10">
                <TextField 
                    name="phoneNumber"
                    label="شماره موبایل"
                    value={phoneNumber}
                    onChange={onChange}
                />
                <button className="btn btn--primary w-full" type="submit">ارسال کد تایید</button>
            </form>
        </div>
    )
};
export default SendOTPForm;