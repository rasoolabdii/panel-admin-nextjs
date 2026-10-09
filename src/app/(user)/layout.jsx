import { Toaster } from "react-hot-toast";
import "../../styles/globals.css";
import vazirFont from "@/utils/localFonts";
import Providers from "../providers/Providers";
import Header from "../Header";

export const metadata = {
    title: "فروشگاه",
    description: "فروشگاه"
}

function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${vazirFont.variable} font-sans`}>
                <Providers>
                    <Toaster />
                    <Header />
                    <div className="container xl:max-w-screen-2xl">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
};
export default RootLayout;