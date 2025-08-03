"use client"

import Script from "next/script"
import {usePathname, useSearchParams} from "next/navigation"
import {useEffect} from "react"
import {pageview} from "@/lib/gtagHelper";

export default function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname) {
            pageview(pathname)
        }
    }, [pathname, searchParams])

    return (
        <>
            <Script strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
            <Script id="google-analytics" strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                        });
                        `,
                    }}
            />
        </>
    )
}