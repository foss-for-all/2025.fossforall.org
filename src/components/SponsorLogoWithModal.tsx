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
  alt={item.name} 
  style={{
    height: 'auto',
    maxHeight: group.imageHeight, // 최소 크기 이상 유지
    width: 'auto', 
    minHeight: group.imageHeight, // 공식 최소 크기 이하 축소 방지
    margin: '0 auto',
    display: 'block', // 외부 여백 최소화 위해 inline-block 방지
    cursor: 'pointer'
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
