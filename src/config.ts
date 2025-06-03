import F4ALogo from '@/assets/favicon.svg';
export const WebsiteConfig = {
    metadata: {
        title: 'FOSS for All Conference 2025',
        description: 'This is a sample website built with Next.js and TypeScript.',
        faviconSrc: F4ALogo.src,
    },
    navigation:
    {
        logoSrc: F4ALogo.src,
        menu: (locale: string) => {
            return [
                {
                    label: "소개", href: `/${locale}/`, items: [
                        { label: "행사 소개", href: `/${locale}/about` },
                        { label: "행동강령", href: `/${locale}/coc` },
                        { label: "행사장 & 안전정보", href: `/${locale}/venue-safety` },
                    ],
                },
                {
                    label: "프로그램",
                    href: "#",
                    items: [
                        { label: "발표/전시 지원", href: `/${locale}/cfp` },
                        { divider: true },
                        { label: "일정표", href: `/${locale}/schedules` },
                        { label: "전시", href: `/${locale}/exhibitions` },
                        { label: "부대행사", href: `/${locale}/social-events` },
                    ],
                },
                {
                    label: "후원사/개인후원",
                    href: "#",
                    items: [
                        { label: "후원사로 참여하기", href: `/${locale}/become-a-sponsor` },
                        { label: "참여 후원사", href: `/${locale}/sponsors` },
                        { label: "개인후원", href: `/${locale}/patrons` },
                    ],
                },
            ]
        }
    },

}