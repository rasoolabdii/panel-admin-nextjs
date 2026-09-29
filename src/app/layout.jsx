import "../styles/globals.css";

export const metadata = {
    title: "فروشگاه",
    description: "فروشگاه"
}

function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${""}`}>
                {children}
            </body>
        </html>
    )
};
export default RootLayout;