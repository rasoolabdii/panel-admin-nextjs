import { Toaster } from "react-hot-toast";
import "../../../styles/globals.css";
import Providers from "@/app/providers/Providers";
import vazirFont from "@/utils/localFonts";

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
                    <div className="container xl:max-w-screen-2xl">
                            {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
};
export default RootLayout;