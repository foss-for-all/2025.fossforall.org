import { useState } from "react";
import type { Speaker } from "@/models/Speaker";
import { ui, defaultLang } from "@/i18n/ui";
import { sliceStringByBytes } from "@/lib/utils";

interface Submission {
  code: string;
  title: string;
  speakers: string[];
  submission_type: number;
  track: number;
  content_locale: string;
}

interface Track {
  id: number;
  name: Record<string, string>;
}

interface Config {
  pretalx: {
    baseUrl: string;
    eventSlug: string;
  };
}

interface SpeakerCardAndModalProps {
  speaker: Speaker;
  sessions: Submission[];
  tracks: Track[];
  config: Config;
  lang: keyof typeof ui;
  gravatarHash: string;
}

export function SpeakerCardAndModal({
  speaker,
  sessions,
  tracks,
  config,
  lang,
  gravatarHash,
}: SpeakerCardAndModalProps) {
  const t = (key: keyof typeof ui[typeof defaultLang]) => {
      return ui[lang]?.[key] || ui[defaultLang][key];
  }
  const [isActive, setIsActive] = useState(false);

  // Get speaker's sessions
  const speakerSessions = sessions.filter((session) =>
    session.speakers.includes(speaker.code)
  );

  // Helper function to get track name
  const getTrackName = (trackId: number) => {
    const track = tracks.find(t => t.id === trackId);
    return track?.name[lang] || track?.name['en'] || t('speakers.unknownTrack');
  };

  function openModal() {
    setIsActive(true);
  }

  function closeModal() {
    setIsActive(false);
  }

  return (
    <div className="column is-one-third">
      <div className="card" onClick={openModal} style={{ cursor: 'pointer', height: '100%' }}>
        <div className="card-image">
          <figure className="image is-square">
            <img
              style={{ objectFit: "cover" }}
src={!speaker.avatar_url ? `https://gravatar.com/avatar/${gravatarHash}?s=200&d=identicon` : speaker.avatar_url}
              alt={speaker.name}
            />
          </figure>
        </div>
        <div className="card-content" style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <p className="title is-4" style={{
            flexShrink: 0,
            marginBottom: '0.5em',
          }}>
            {speaker.organization ? `${speaker.name} - ${speaker.organization}` : speaker.name}
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
            dangerouslySetInnerHTML={{ __html: speaker.biography }}
          />
        </div>
      </div>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title"></p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <figure className="image is-square">
              <img
                style={{ objectFit: "cover" }}
                src={!speaker.avatar_url ? `https://gravatar.com/avatar/${gravatarHash}?s=200&d=identicon` : speaker.avatar_url}
                alt={speaker.name}
              />
            </figure>
            <p className="title is-4 mt-4">
              {speaker.organization ? `${speaker.name} - ${speaker.organization}` : speaker.name}
            </p>
            <div dangerouslySetInnerHTML={{ __html: speaker.biography }}></div>

            {speakerSessions.length > 0 && (
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid #e8e8e8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <i className="fa-solid fa-calendar-days" style={{ color: '#3273dc', fontSize: '1.1em' }}></i>
                  <p className="subtitle is-5" style={{ margin: 0 }}>
                    {t('speakers.presenting')}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {speakerSessions.map((session) => (
                    <a
                      key={session.code}
                      href={`${config.pretalx.baseUrl}/${config.pretalx.eventSlug}/talk/${session.code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        padding: '1em',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#3273dc';
                        e.currentTarget.style.borderColor = '#3273dc';
                        const elements = e.currentTarget.querySelectorAll('p, span');
                        elements.forEach((el) => {
                          if (el.tagName === 'P' || el.tagName === 'SPAN') {
                            el.style.color = 'white';
                          }
                        });
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8f9fa';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                        const title = e.currentTarget.querySelector('p:first-of-type');
                        if (title) title.style.color = '#222';
                        const meta = e.currentTarget.querySelector('p:last-of-type');
                        if (meta) meta.style.color = '#666';
                      }}
                    >
                      <p style={{ margin: '0 0 0.5em 0', fontWeight: '600', fontSize: '0.95em', color: '#222' }}>
                        {session.title}
                      </p>
                      <p style={{ margin: '0', fontSize: '0.85em', color: '#666', display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                        <span style={{ display: 'inline-block' }}>
                          📂 {getTrackName(session.track)}
                        </span>
                        <span style={{ display: 'inline-block', marginLeft: '0.5em' }}>
                          🌐 {session.content_locale.toUpperCase()}
                        </span>
                      </p>
                    </a>
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
