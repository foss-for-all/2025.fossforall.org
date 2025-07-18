import LogoPlaceHolder from "@/assets/sponsors/placeholder.svg";
export const SponsorsList = [
    {
        sponsorClassName: "GOLD",
        gridClasses: "has-3-cols-desktop has-2-cols-tablet has-1-cols-mobile",
        imageHeight: "15rem",
        items: [
            {
                name: "Gold sponsor",
                descriptionMarkdown: `Become a Gold sponsor today!`,
                logoSrc: LogoPlaceHolder.src,
                link: "http://localhost:4321/ko/become-a-sponsor"
            },
        ]
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
                link: "http://localhost:4321/ko/become-a-sponsor"
            }
        ]
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
                link: "http://localhost:4321/ko/become-a-sponsor"
            },
        ]
    }
]
