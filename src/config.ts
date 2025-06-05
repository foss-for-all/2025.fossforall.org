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
            const t = useTranslations(locale as keyof typeof ui);
            return [
                {
                    label: t("nav.about"), href: `/${locale}/`, items: [
                        { label: t("nav.about"), href: `/${locale}/about` },
                        { label: t("nav.coc"), href: `/${locale}/coc` },
                        { label: t("nav.venueSafety"), href: `/${locale}/venue-safety` },
                    ],
                },
                {
                    label: t("nav.programs"),
                    href: "#",
                    items: [
                        { label: t("nav.cfp"), href: `/${locale}/cfp` },
                        { divider: true },
                        { label: t("nav.schedules"), href: `/${locale}/schedules` },
                        { label: t("nav.exhibitions"), href: `/${locale}/exhibitions` },
                        { label: t("nav.socialEvents"), href: `/${locale}/social-events` },
                    ],
                },
                {
                    label: t("nav.sponsorsPatrons"),
                    href: "#",
                    items: [
                        { label: t("nav.becomeSponsor"), href: `/${locale}/become-a-sponsor` },
                        { label: t("nav.sponsors"), href: `/${locale}/sponsors` },
                        { label: t("nav.patrons"), href: `/${locale}/patrons` },
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