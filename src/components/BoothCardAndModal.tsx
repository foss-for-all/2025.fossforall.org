import { useState } from "react";
import type { Booth, BoothSpeaker } from "@/models/Booth";
import { sliceStringByBytes } from "@/lib/utils";

interface Config {
  pretalx: {
    baseUrl: string;
    eventSlug: string;
  };
}

interface GravatarHash {
  code: string;
  hash: string;
}

interface BoothCardAndModalProps {
  booth: Booth;
  config: Config;
  lang: string;
  gravatarHashes: GravatarHash[];
}

export function BoothCardAndModal({
  booth,
  config,
  lang,
  gravatarHashes,
}: BoothCardAndModalProps) {
  const [isActive, setIsActive] = useState(false);

  function openModal() {
    setIsActive(true);
  }

  function closeModal() {
    setIsActive(false);
  }

  const getGravatarHash = (speakerCode: string) => {
    return gravatarHashes.find(g => g.code === speakerCode)?.hash || '';
  };

  return (
    <div className="column is-one-third">
      <div className="card" onClick={openModal} style={{ cursor: 'pointer', height: '100%' }}>
        {booth.logo && (
          <div className="card-image">
            <figure className="image">
              <img
                src={booth.logo}
                alt={booth.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                  padding: '1rem',
                }}
              />
            </figure>
          </div>
        )}
        <div className="card-content" style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <p className="title is-4" style={{
            flexShrink: 0,
            marginBottom: '0.5em',
          }}>
            {booth.title}
          </p>
          <div
            className="content"
            style={{
              flex: 1,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              fontSize: '0.95em',
              lineHeight: '1.4',
            }}
            dangerouslySetInnerHTML={{ __html: booth.abstract }}
          />
        </div>
      </div>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{booth.title}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <div dangerouslySetInnerHTML={{ __html: booth.abstract }}></div>
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: booth.description }}></div>

            {booth.speakerDetails && booth.speakerDetails.length > 0 && (
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid #e8e8e8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <i className="fa-solid fa-people-group" style={{ color: '#3273dc', fontSize: '1.1em' }}></i>
                  <p className="subtitle is-5" style={{ margin: 0 }}>
                    Organizers
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {booth.speakerDetails.map((speaker) => (
                    <div
                      key={speaker.code}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        padding: '1em',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                      }}
                    >
                      <figure style={{ margin: 0, flexShrink: 0 }}>
                        <img
                          src={
                            speaker.avatar_url == ""
                              ? `https://gravatar.com/avatar/${getGravatarHash(speaker.code)}?s=80`
                              : speaker.avatar_url
                          }
                          alt={speaker.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                          }}
                        />
                      </figure>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: '0 0 0.5em 0', fontWeight: '600', fontSize: '0.95em' }}>
                          {speaker.name}
                        </p>
                        {speaker.biography && (
                          <div
                            style={{
                              fontSize: '0.9em',
                              color: '#666',
                              lineHeight: '1.5',
                            }}
                            dangerouslySetInnerHTML={{ __html: speaker.biography }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
