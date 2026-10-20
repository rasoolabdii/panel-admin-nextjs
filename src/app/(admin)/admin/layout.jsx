import { Toaster } from "react-hot-toast";
import "../../../styles/globals.css";
import Providers from "@/app/providers/Providers";
import vazirFont from "@/utils/localFonts";
import AdminSideBar from "./AdminSideBar";

export const metadata = {
    title: "پنل ادمین",
    description: "پنل ادمین"
}

function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Providers>
                    <Toaster />
                    <div className="grid grid-cols-4 bg-white h-screen">
                        <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
                            <AdminSideBar />
                        </div>
                        <div className="col-span-3 overflow-y-auto p-4">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    )
};
export default RootLayout;