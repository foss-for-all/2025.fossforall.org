import F4ALogo from '@/assets/favicon.svg';
import type { ui } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";
import { languages } from '@/i18n/ui';

export const WebsiteConfig = {
    metadata: {
        title: 'FOSS for All Conference 2025',
        description: '2025년 11월 8일 광운대학교',
        faviconSrc: F4ALogo.src,
    },
    navigation: {
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
        },
        rightMenu: (locale: keyof typeof ui, page: { path: string, i18n: boolean }) => {
            const t = useTranslations(locale);
            const langPickerItems = Object.entries(languages).map(([lang, label]) => ({
                label: label, href: page.i18n ? `/${lang}${page.path}` : `${page.path}`
            }));
            return [
                {
                    label: 'fossforall.org',
                    href: "https://fossforall.org",
                },
                {
                    label: '🌐',
                    items: langPickerItems
                }
            ]
        }
    },
    footer: (locale: keyof typeof ui) => {
        const t = useTranslations(locale);
        return {
            copyright: t('footer.copyright'),
            links: [
                { label: t('footer.contactEmail'), href: "mailto:contact@fossforall.org" },
                { label: t('footer.sourceCode'), href: "https://github.com/foss-for-all/2025.fossforall.org" },
                { label: t('footer.learnMore'), href: "https://fossforall.org" },
            ]
        }
    }

}