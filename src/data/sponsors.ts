import LogoPlaceHolder from "@/assets/sponsors/placeholder.svg";
import CouchbaseLogo from "@/assets/sponsors/couchbase.svg";
import RainlabLogo from "@/assets/sponsors/rainlab.svg";
import OnlyofficeLogo from "@/assets/sponsors/onlyoffice.svg";
import ExpressVPNLogo from "@/assets/sponsors/expressvpn.svg";
import DeepComputingLogo from "@/assets/sponsors/DeepComputing.svg";
import NipaLogo from "@/assets/sponsors/nipa.svg";
import StadiaMapsLogo from "@/assets/sponsors/stadiamaps.svg";
import OpdcLogo from "@/assets/sponsors/opdc.svg";
import RsefLogo from "@/assets/sponsors/rockylinux.png";
import ModuLabsLogo from "@/assets/sponsors/modulabs.svg";
import TenstorrentLogo from "@/assets/sponsors/tenstorrent.svg";

import type { ui } from "@/i18n/ui";

export const SponsorsList = (lang: keyof typeof ui) => {
  return [
    {
      sponsorClassName: "GOLD",
      gridClasses: "has-2-cols-desktop has-2-cols-tablet has-1-cols-mobile",
      imageHeight: "12rem",
      containerWidth: "30rem",
      containerHeight: "24rem",
      items: [
        {
          name: "Couchbase",
          descriptionMarkdown: `카우치베이스는 미국에 본사를 두고 있는 NoSQL 데이터 플랫폼으로, 국내에는 약 3년전에 진출 하였습니다. 국내외에서 다양한 레퍼런스를 가지고 있지만, 아직 국내 커뮤니티 혹은 현업들에서 인지도가 높은 플랫폼은 아닙니다. 무료로 사용할 수 있는 커뮤니티 버전을 기반으로 다양한 커뮤니티 그룹, 멤버, 현업 분들과 의사사통 하고자 합니다. `,
          logoSrc: CouchbaseLogo.src,
          link: "https://www.couchbase.com/",
        },
        {
          name: "Rocky Linux",
          descriptionMarkdown: `Rocky Linux is a free and open-source community-built Enterprise Linux distribution.`,
          logoSrc: RsefLogo.src,
          link: "https://rockylinux.org",
        },
        {
          name: "Tenstorrent",
          descriptionMarkdown: `Tenstorrent builds high-performance AI computers based on RISC-V architecture and has an open-source software stack. Led by veteran CPU architect Jim Keller, Tenstorrent delivers full-stack AI compute solutions: chips, workstations, systems, software, and IP licensing.`,
          logoSrc: TenstorrentLogo.src,
          link: "https://tenstorrent.com/",
        },
      ],
    },
    {
      sponsorClassName: "SILVER",
      gridClasses: "has-2-cols-desktop has-2-cols-tablet has-1-cols-mobile",
      imageHeight: "10rem",
      containerWidth: "26rem",
      containerHeight: "20rem",
      items: [
        {
          name: "ONLYOFFICE",
          descriptionMarkdown: `ONLYOFFICE, an open-source office software project, focuses on advanced and secure office solutions. With over 10 million users worldwide, it is recognized for its innovation in the online office domain. The ONLYOFFICE ecosystem includes collaborative applications such as online editors for text documents, spreadsheets, presentations, forms, and PDFs, along with a room-based collaborative platform.

          As an international company, ONLYOFFICE has employees and contributors across the globe, with offices located in Singapore, Dallas, Riga, London, Shanghai, Belgrade, Yerevan, and Tashkent.`,
          logoSrc: OnlyofficeLogo.src,
          link: "https://www.onlyoffice.com",
        },
        {
          name: "OPDC",
          descriptionMarkdown: `(사)오픈플랫폼 개발자커뮤니티(Open Platform Developer Community, OPDC)는 오픈플랫폼 및 이와 관련된 서비스의 개발 생산성과 품질을 향상시키고 관련 소프트웨어 개발자의 역량 강화와 상호 교류에 헌신하며, 오픈 소스 소프트웨어 개발과 확산을 위한 활동 지원을 통해 오픈 소스 기술참상에 기여함을 그 설립목적으로 활동을 수행 합니다`,
          logoSrc: OpdcLogo.src,
          link: "https://opdc.kr/",
        },
      ],
    },
    {
      sponsorClassName: "BRONZE",
      gridClasses: "has-4-cols-desktop has-2-cols-tablet has-1-cols-mobile",
      imageHeight: "10rem",
      containerWidth: "16rem",
      containerHeight: "18rem",
      items: [
        {
          name: "Rainlab",
          descriptionMarkdown: `<b>저희는 도쿄를 거점으로 하고 있는 엔지니어링 회사입니다.</b>
		  소프트웨어 엔지니어링, 시스템 아키텍쳐 디자인, 애플리케이션 기획 및 개발 등을 하고 있습니다. GNU/Linux와 같은 Unix계열의 운영체제로 서버를 관리/운영 하고 있습니다.`,
          logoSrc: RainlabLogo.src,
          link: "https://rainlab.co.jp/",
        },
        {
          name: "ExpressVPN",
          descriptionMarkdown: `2009년에 설립된 ExpressVPN은 수백만 명의 사용자에게 자신의 인터넷 경험을 제어할 수 있는 권한을 부여하고 있습니다. 수상 경력에 빛나는 ExpressVPN의 소비자 VPN 서비스는 오픈 소스 VPN 프로토콜인 Lightway를 기반으로 하며 단 몇 번의 클릭만으로 사용자의 개인 정보를 보호합니다. ExpressVPN의 Keys 비밀번호 관리자와 Aircove 공유기는 누구나 쉽게 디지털 개인 정보 보호 및 보안을 이용할 수 있도록 합니다. ExpressVPN의 제품은 PwC, Cure53, KPMG 등을 비롯한 제3자 전문가에 의해 폭넓게 검증되었습니다.

인터넷 자유와 개인 정보 보호를 적극적으로 옹호하는 ExpressVPN은 Internet Defense League, OpenMedia 등을 비롯한 디지털 권리를 보호하기 위해 노력하는 비영리 단체의 재정적 후원자이기도 합니다.

2021년 9월, ExpressVPN은 선도적인 개인 정보 보호 및 보안 브랜드인 Kape Technologies 패밀리에 합류했습니다.`,
          logoSrc: ExpressVPNLogo.src,
          link: "https://www.expressvpn.com/",
        },
        {
          name: "DeepComputing",
          descriptionMarkdown: `Formed in 2022 by a group of dedicated RISC-V pioneers, DeepComputing is headquartered in Hong Kong. We share an enduring passion for advancing the adoption and implementation of RISC-V beyond existing ISA chipsets. Our aim is to create bold new products. With faith in our diverse and dedicated partners, we believe in the promising new future of RISC-V. Together, we will focus on driving the development of the RISC-V ecosystem with products such as laptops, pads, workstations, headphones, smart watches, smart speakers, AR glasses and autonomous driving for toys and real world vehicles.`,
          logoSrc: DeepComputingLogo.src,
          link: "https://deepcomputing.io/",
        },
        {
          name: "Stadia Maps",
          descriptionMarkdown: `Stadia Maps offers location APIs for humans. Thousands of companies of all sizes use Stadia Maps to contextualize their data on a map, solve logistics problems, build fitness experiences, and more. We back our customers up with no-surprise billing, world-class reliability, strong privacy guarantees, and real human support.`,
          logoSrc: StadiaMapsLogo.src,
          link: "https://stadiamaps.com/",
        },
      ],
    },
    {
      sponsorClassName: "MEETING SPACE SPONSOR",
      gridClasses: "has-1-cols-desktop has-1-cols-tablet has-1-cols-mobile",
      imageHeight: "8rem",
      containerWidth: "22rem",
      containerHeight: "17rem",
      items: [
        {
          name: "모두의연구소",
          descriptionMarkdown: `모두의연구소는 AI와 SW 교육을 제공하며, 연구 커뮤니티와 함께 성장할 수 있는 플랫폼입니다. 부트캠프, 국비지원 교육, 기업 맞춤형 교육 등을 통해 실무 중심 학습을 경험하세요.`,
          logoSrc: ModuLabsLogo.src,
          link: "https://modulabs.co.kr/",
        },
      ],
    },
    {
      sponsorClassName: "Public Partner",
      gridClasses: "has-1-cols-desktop has-1-cols-tablet has-1-cols-mobile",
      imageHeight: "15rem",
      containerWidth: "40rem",
      containerHeight: "31rem",
      items: [
        {
          name: "OpenUP (NIPA)",
          descriptionMarkdown: `정보통신산업진흥원(NIPA)의 산하 조직인 OpenUP(오픈소스 소프트웨어 통합지원센터)은, 오픈소스SW를 개발, 공유, 활용하기를 원하는 개발자, 기업, 정부를 지원하고, 수요(기업, 공공기관)와 공급(개발자, 기업)의 선순환 구조를 이루어 오픈소스SW의 활성화 허브 역할을 수행하고 있습니다.`,
          logoSrc: NipaLogo.src,
          link: "https://oss.kr/",
        },
      ],
    },
  ];
};
