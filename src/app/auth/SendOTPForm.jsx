import Loading from "@/ui/Loading";
import TextField from "@/ui/TextField";

function SendOTPForm({ phoneNumber , onChange , onSubmit , isLoading }) {
    return(
        <div>
            <form className="space-y-10" onSubmit={onSubmit}>
                <TextField 
                    name="phoneNumber"
                    label="شماره موبایل"
                    value={phoneNumber}
                    onChange={onChange}
                />
                <div>
                    {isLoading  ? (<Loading />) : (
                        <button className="btn btn--primary w-full" type="submit">ارسال کد تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default SendOTPForm;