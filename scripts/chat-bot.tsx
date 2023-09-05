import Script from 'next/script';

const inter = Inter({ subsets: ["latin"]});

export default function RootLayouts({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en">
            <head>
                <Script 
                    src="https://cdn.botpress.cloud/webchat/v0/inject.js"
                    onLoad={()=> {
                        initBotPress();
                    }}
                    />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}