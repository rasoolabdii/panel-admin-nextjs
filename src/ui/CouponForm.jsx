"use client";

import useProducts from "@/hooks/useProducts";
import Loading from "./Loading";
import RadioInput from "./RadioInput";
import TextField from "./TextField";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


function CouponForm({ onSubmit , handleChange , options , defaultValue = "" ,  formData , isLoading, setType , type , setProductIds , expireDate , setExpireDate }) {

    return (
        <div className="max-w-sm">
            <form onSubmit={onSubmit} className="space-y-4">
                <TextField 
                    label="کد"
                    name="code"
                    value={formData.code || ""}
                    onChange={handleChange} 
                />
                <TextField 
                    label="مقدار"
                    name="amount"
                    value={formData.amount || ""}
                    onChange={handleChange}
                />
                <TextField 
                    label="ظرفیت"
                    name="usageLimit"
                    value={formData.usageLimit || ""}
                    onChange={handleChange}
                />
                <div>
                    <span className="mb-2 block">نوع کد تخفیف :</span>
                    <div className="flex items-center justify-between m-4">
                        <RadioInput
                            name="type"
                            label="درصد"
                            value="percent"
                            onChange={() => setType(e.terget.value)}
                            checked={type === "percent"}
                            id="percent-type"
                        />
                        <RadioInput 
                            name="type"
                            checked={type === "fixedProduct"}   
                            id="fixedProduct-type"
                            label="قیمت ثابت"   
                            value="fixedProduct"
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="products" className="block mb-2">
                        شامل محصولات
                    </label>
                    <Select
                        instanceId="products"
                        isMulti
                        onChange={setProductIds}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                        options={options}
                        defaultValue={defaultValue}
                    />
                </div>
                <div>
                    <span className="text-lg mb-4 block">تاریخ انقضاء : </span>
                    <DatePicker
                        value={expireDate}
                        onChange={(date) => setExpireDate(date)}
                        format="YYYY/MM/DD"
                        calendar={persian}
                        locale={persian_fa}
                        inputClass="textField__input w-full"
                    />
                </div>
                <div>
                    {isLoading ? (<Loading />) : (
                        <button className="btn btn--orange w-full" type="submit">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default CouponForm;