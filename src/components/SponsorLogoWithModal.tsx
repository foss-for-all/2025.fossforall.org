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
                style={{
                    height: group.imageHeight,
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                onClick={openModal}
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
                            src={item.logoSrc}  className="mb-3" style={{maxHeight: "10rem"}}
                        />
                        <div dangerouslySetInnerHTML={{ __html: item.descriptionMarkdown }}></div>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                    </section>
                </div>
            </div>
        </div>
    )
}
