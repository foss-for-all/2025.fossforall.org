export const WebsiteConfig = {
    title: 'My Awesome Website',
    description: 'This is a sample website built with Next.js and TypeScript.',
    menu: [
        {
            label: "소개", href: "/", items: [
                { label: "행사 소개", href: "/about" },
                { label: "행동강령", href: "/coc" },
                { label: "행사장 & 안전정보", href: "/venue-safety" },
            ],
        },
        {
            label: "프로그램",
            href: "/docs",
            items: [
                { label: "발표/전시 지원", href: "/cfp" },
                { divider: true },
                { label: "일정표", href: "/schedules" },
                { label: "전시", href: "/exhibitions" },
                { label: "부대행사", href: "/social-events" },
            ],
        },
        {
            label: "후원사/개인후원",
            href: "/docs",
            items: [
                { label: "후원사로 참여하기", href: "/become-a-sponsor" },
                { label: "참여 후원사", href: "/sponsors" },
                { label: "개인후원", href: "/patrons" },
            ],
        },
    ]
}