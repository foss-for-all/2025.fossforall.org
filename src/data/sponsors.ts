import LogoPlaceHolder from "@/assets/sponsors/placeholder.svg";
import CouchbaseLogo from "@/assets/sponsors/couchbase.svg";
import type { ui } from "@/i18n/ui";
import { useTranslatedPath } from "@/i18n/utils";

export const SponsorsList = (lang: keyof typeof ui) => {
  const translatePath = useTranslatedPath(lang);

  return [
    {
      sponsorClassName: "GOLD",
      gridClasses: "has-3-cols-desktop has-2-cols-tablet has-1-cols-mobile",
      imageHeight: "15rem",
      items: [
        {
          name: "Couchbase",
          descriptionMarkdown: `카우치베이스는 미국에 본사를 두고 있는 NoSQL 데이터 플랫폼으로, 국내에는 약 3년전에 진출 하였습니다. 국내외에서 다양한 레퍼런스를 가지고 있지만, 아직 국내 커뮤니티 혹은 현업들에서 인지도가 높은 플랫폼은 아닙니다. 무료로 사용할 수 있는 커뮤니티 버전을 기반으로 다양한 커뮤니티 그룹, 멤버, 현업 분들과 의사사통 하고자 합니다. `,
          logoSrc: CouchbaseLogo.src,
          link: "https://www.couchbase.com/",
        },
      ],
    },
    {
      sponsorClassName: "SILVER",
      gridClasses: "has-4-cols-desktop has-3-cols-tablet has-2-cols-mobile",
      imageHeight: "13rem",
      items: [
        {
          name: "Silver sponsor",
          descriptionMarkdown: `Become a Silver sponsor today!`,
          logoSrc: LogoPlaceHolder.src,
          link: translatePath(`/become-a-sponsor/`),
        },
      ],
    },
    {
      sponsorClassName: "BRONZE",
      gridClasses: "has-5-cols-desktop has-4-cols-tablet has-3-cols-mobile",
      imageHeight: "9rem",
      items: [
        {
          name: "Bronze sponsor",
          descriptionMarkdown: `Become a Bronze sponsor today!`,
          logoSrc: LogoPlaceHolder.src,
          link: translatePath(`/become-a-sponsor/`),
        },
      ],
    },
  ];
};
