import F4ALogo from "@/assets/favicon.svg";
import type { ui } from "@/i18n/ui";
import { useTranslations, useTranslatedPath } from "@/i18n/utils";
import { languages, defaultLang, showDefaultLang } from "@/i18n/ui";

export const WebsiteConfig = (lang: keyof typeof ui) => {
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);

  return {
    metadata: {
      title: "FOSS for All Conference 2025",
      description: "2025년 11월 8일 광운대학교",
      faviconSrc: F4ALogo.src,
    },
    blogFeedUrl: "https://fossforall.org/tags/f4ac25/index.xml",
    pretalx: {
      baseUrl: "https://pretalx.fossforall.org",
      eventSlug: "2025",
      keynoteSpeakers: ["XGEJRN", "LAY7R9"],
      speakersToExpose: [
        "XGEJRN",
        "LAY7R9",
        "LJWUM8",
        "DPAYNK",
        "BCM3F7",
        "7GADBL",
        "VVRG9Y",
        "L9HMWJ",
        "PKGFPR",
        "CXHEB7",
        "EAC3VH",
        "RCJWK7",
        "9PWGP9",
        "ZYXU99",
        "BSD9GZ",
        "RTQMVT",
        "HNECMJ",
      ],
    },
    navigation: {
      logoSrc: F4ALogo.src,

      menu: () => [
        {
          label: t("nav.about"),
          href: translatePath(`/`),
          items: [
            { label: t("nav.about"), href: translatePath(`/about/`) },
            { label: t("nav.coc"), href: translatePath(`/coc/`) },
            {
              label: t("nav.venueSafety"),
              href: translatePath(`/venue-safety/`),
            },
          ],
        },
        {
          label: t("nav.programs"),
          href: "#",
          items: [
            { label: t("nav.sessions"), href: translatePath(`/sessions/`) },
            { label: t("nav.schedules"), href: translatePath(`/schedules/`) },
            { label: t("nav.speakers"), href: translatePath(`/speakers/`) },
            {
              label: t("nav.exhibitions"),
              href: translatePath(`/exhibitions/`),
            },
            {
              label: t("nav.socialEvents"),
              href: translatePath(`/social-events/`),
            },
            { divider: true },
            { label: t("nav.cfp"), href: translatePath(`/cfp/`) },
          ],
        },
        {
          label: t("nav.sponsorsPatrons"),
          href: "#",
          items: [
            {
              label: t("nav.becomeSponsor"),
              href: translatePath(`/become-a-sponsor/`),
            },
            { label: t("nav.sponsors"), href: translatePath(`/sponsors/`) },
            { label: t("nav.patrons"), href: translatePath(`/patrons/`) },
          ],
        },
      ],

      rightMenu: (page: { path: string; i18n: boolean }) => {
        const langPickerItems = (
          Object.keys(languages) as Array<keyof typeof ui>
        ).map((langCode) => {
          const label = languages[langCode];

          const translatedPath =
            !showDefaultLang && langCode === defaultLang
              ? page.path
              : `/${langCode}${page.path}`;

          return {
            label,
            href: translatedPath,
          };
        });

        return [
          {
            label: "fossforall.org",
            href: "https://fossforall.org",
          },
          {
            label: "🎟️",
            href: "https://event-us.kr/fossforall/event/110400",
          },
          {
            label: "🌐",
            items: langPickerItems,
          },
        ];
      },
    },

    footer: () => ({
      copyright: t("footer.copyright"),
      links: [
        {
          label: t("footer.contactEmail"),
          href: "mailto:contact@fossforall.org",
        },
        {
          label: t("footer.privacy"),
          href: "https://fossforall.org/disclosures/privacy/2025.fossforall.org/",
        },
        {
          label: t("footer.sourceCode"),
          href: "https://github.com/foss-for-all/2025.fossforall.org",
        },
        { label: t("footer.learnMore"), href: "https://fossforall.org" },
      ],
    }),
  };
};
