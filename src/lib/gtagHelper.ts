export const pageview = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
        window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
            page_path: url,
        });
    }
};