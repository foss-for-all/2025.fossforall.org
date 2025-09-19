import LogoPlaceHolder from "@/assets/sponsors/placeholder.svg";
import CouchbaseLogo from "@/assets/sponsors/couchbase.svg";
import RainlabLogo from "@/assets/sponsors/rainlab.svg";
import OnlyofficeLogo from "@/assets/sponsors/onlyoffice.svg";
import type { ui } from "@/i18n/ui";
import { useTranslatedPath } from "@/i18n/utils";

export const SponsorsList = (lang: keyof typeof ui) => {
  const translatePath = useTranslatedPath(lang);

  return [
    {
      sponsorClassName: "GOLD",
      gridClasses: "has-3-cols-desktop has-2-cols-tablet has-1-cols-mobile",
      imageHeight: "8rem",
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
      imageHeight: "7rem",
      items: [
        {
          name: "ONLYOFFICE",
          descriptionMarkdown: `ONLYOFFICE, an open-source office software project, focuses on advanced and secure office solutions. With over 10 million users worldwide, it is recognized for its innovation in the online office domain. The ONLYOFFICE ecosystem includes collaborative applications such as online editors for text documents, spreadsheets, presentations, forms, and PDFs, along with a room-based collaborative platform.

          As an international company, ONLYOFFICE has employees and contributors across the globe, with offices located in Singapore, Dallas, Riga, London, Shanghai, Belgrade, Yerevan, and Tashkent.`,
          logoSrc: OnlyofficeLogo.src,
          link: "https://www.onlyoffice.com",
        },
      ],
    },
    {
      sponsorClassName: "BRONZE",
      gridClasses: "has-5-cols-desktop has-4-cols-tablet has-3-cols-mobile",
      imageHeight: "14rem",
      items: [
        {
          name: "Rainlab",
          descriptionMarkdown: `<b>저희는 도쿄를 거점으로 하고 있는 엔지니어링 회사입니다.</b>
		  소프트웨어 엔지니어링, 시스템 아키텍쳐 디자인, 애플리케이션 기획 및 개발 등을 하고 있습니다. GNU/Linux와 같은 Unix계열의 운영체제로 서버를 관리/운영 하고 있습니다.`,
          logoSrc: RainlabLogo.src,
          link: "https://rainlab.co.jp/",
        },
      ],
    },
  ];
};
