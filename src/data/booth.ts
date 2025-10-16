import KsugLogo from "@/assets/community/ksug.png";
import DebianLogo from "@/assets/community/debian.png";
import OspnLogo from "@/assets/community/ospn.jpg";
import VideoLanLogo from "@/assets/community/videolan.png";
import UbuntuKorea from "@/assets/community/UbuntuKorea.svg";
export const BoothList = [
  {
    name: "한국 스프링 사용자 모임",
    description:
      "2007년에 설립된 한국 스프링 사용자 모임(KSUG)은 스프링을 사용하거나 관심을 가진 개발자들이 모여 기술과 정보를 나누고 함께 성장하는 커뮤니티입니다. KSUG은 매년 기술 컨퍼런스 'Spring Camp', 가을 세미나, 정기 스터디를 비롯한 다채로운 오프라인 활동을 통해 개발자 생태계에 기여하고 있습니다.",
    type: "community",
    logoSrc: KsugLogo.src,
  },
  {
    name: "Debian",
    description:
      "데비안(Debian)은 전 세계 자원봉사자들이 함께 만드는 자유 소프트웨어 운영체제입니다. 데비안 안에는 웹브라우저, 오피스, 그래픽 툴, 개발 도구, 서버 소프트웨어 등 수천 개의 프로그램이 들어 있어, 설치만으로 바로 사용할 수 있는 완전한 시스템을 제공합니다. 안정성과 보안이 뛰어나며, 개인부터 기업·연구기관까지 다양한 환경에서 널리 쓰이고 있습니다.",
    type: "community",
    logoSrc: DebianLogo.src,
  },
  {
    name: "OSPN OpenSource People Network Japan",
    description: `OpenSource People Network Japan has organized the Open Source Conference—a nationwide gathering of open source enthusiasts—since 2004. The event takes place in Tokyo, Osaka, Kyoto, Hokkaido, Fukuoka, and other local cities across Japan. At the conference, we bring together a wide range of open source contributors and enthusiasts who are deeply rooted in their local communities.
    We will also introduce Japan’s open source culture at the FOSS for All 2025 event.`,
    type: "community",
    logoSrc: OspnLogo.src,
  },
  {
    name: "VideoLAN",
    description: `비디오랜(VideoLAN)은 동영상 및 기타 미디어 포맷을 재생하기 위해 소프트웨어를 개발하는 비영리 단체입니다.
    VideoLAN은 VLC, FFmpeg, x264, dav1d 등의 오픈소스 소프트웨어를 개발합니다. 이 중 VLC는 56억 건 이상의 다운로드 수를 가진 동영상 플레이어입니다. FFmpeg은 멀티미디어를 제어할 때 사용하는 소프트웨어이며, 해당 분야의 표준이라 할 수 있을 정도로 수많은 회사가 사용합니다.`,
    type: "community",
    logoSrc: VideoLanLogo.src,
  },
  {
    name: "우분투한국커뮤니티",
    description: `우분투 한국 커뮤니티는 Ubuntu Community Council에서 인증한 공식 한국 커뮤니티이며, 우분투(Ubuntu)를 사용하는 사람, 개발하는 사람, 우분투 프로젝트에 기여하는 사람, 우분투에 관심이 있는 모두를 위한 커뮤니티 입니다.`,
    logoSrc: UbuntuKorea.src,
    type: "community",
  },
];
