import "../styles/globals.css";
import Header from "./Header";

export const metadata = {
    title: "فروشگاه",
    description: "فروشگاه"
}

function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${""} font-sans`}>
                <Header />
                <div className="container 2xl:max-w-screen-2xl">
                    {children}
                </div>
            </body>
        </html>
    )
};
export default RootLayout;