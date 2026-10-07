import Loading from "@/ui/Loading";
import { HiArrowNarrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";

function CheckOTPForm({ onSubmit , otp , setOtp , onBack , time , onResendOTP , otpResponse , isLoading}) {
    return (
        <div>
            <form className="space-y-8" onSubmit={onSubmit}>
                <button onClick={onBack} className="flex items-center gap-x-2 text-primary-900 mb-4">
                    <HiArrowNarrowRight className="w-6 h-6" />
                    <span>بازگشت</span>
                </button>

                {otpResponse && (
                    <p className="flex items-center justify-between gap-x-20">
                        مشترک دریافت کننده پیامک : {otpResponse?.message}
                        <button onClick={onBack} className="text-orange-500">ویرایش شماره دریافت کننده ؟</button>
                    </p>
                )}
                <div className="mb-4">
                    {time > 0 ? (<p>{time} ثانیه تا ارسال مجدد کد تایید</p>) : (
                        <button className="btn btn--primary w-full" onClick={onResendOTP}>ارسال مجدد کد تایید</button>
                    )}
                </div>
                <p>کد تایید را وارد نمایید</p>
                
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: "0.5rem"
                    }}
                    containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                />
                <div>
                    {isLoading ? (<Loading />) : (
                        <button className="btn btn--primary w-full">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default CheckOTPForm;