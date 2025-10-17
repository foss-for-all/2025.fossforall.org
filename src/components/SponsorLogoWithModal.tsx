import { useState } from "react";

interface SponsorLogoWithModalProps {
    item: {
        name: string;
        logoSrc: string;
        descriptionMarkdown: string;
        link: string;
    };
    group: { imageHeight: string | number };
}

export function SponsorLogoWithModal({ item, group }: SponsorLogoWithModalProps) {
    const [isActive, setIsActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    function openModal() {
        setIsActive(true);
    }

    function closeModal() {
        setIsActive(false);
    }

    return (
        <div>
<img
  src={item.logoSrc}
  alt={item.name}
  style={{
    height: 'auto',
    maxHeight: group.imageHeight,
    width: 'auto',
    minHeight: group.imageHeight,
    margin: '0 auto',
    display: 'block',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    opacity: isHovered ? 0.8 : 1,
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
  }}
  onClick={openModal}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>
            <div className={`modal ${isActive ? 'is-active' : ''}`}>
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{item.name}</p>
                        <button className="delete" aria-label="close" onClick={closeModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <img
                            src={item.logoSrc}
                            alt={item.name}
                            className="mb-3"
                            style={{maxHeight: "10rem"}}
                        />
                        <div dangerouslySetInnerHTML={{ __html: item.descriptionMarkdown }}></div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                    </section>
                </div>
            </div>
        </div>
    )
}
