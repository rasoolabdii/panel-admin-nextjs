import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import Header from "./Header";
import Providers from "./providers/Providers";

export const metadata = {
    title: "فروشگاه",
    description: "فروشگاه"
}

function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${""} font-sans`}>
                <Providers>
                    <Toaster />
                    <Header />
                    <div className="container 2xl:max-w-screen-2xl">
                            {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
};
export default RootLayout;