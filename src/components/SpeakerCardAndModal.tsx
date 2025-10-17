import { useState } from "react";
import type { Speaker } from "@/models/Speaker";
import { sliceStringByBytes } from "@/lib/utils";

interface SpeakerCardAndModalProps {
  speaker: Speaker;
  gravatarHash: string;
}

export function SpeakerCardAndModal({
  speaker,
  gravatarHash,
}: SpeakerCardAndModalProps) {
  const [isActive, setIsActive] = useState(false);

  function openModal() {
    setIsActive(true);
  }

  function closeModal() {
    setIsActive(false);
  }

  return (
    <div className="column is-one-quarter">
      <div className="card" onClick={openModal}>
        <div className="card-image">
          <figure className="image is-square">
            <img
              style={{ objectFit: "cover" }}
              src={
                speaker.avatar_url == ""
                  ? `https://gravatar.com/avatar/${gravatarHash}?s=200`
                  : speaker.avatar_url
              }
              alt={speaker.name}
            />
          </figure>
        </div>
        <div className="card-content" style={{
          display: 'flex',
          flexDirection: 'column',
          height: '12em',
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
              minHeight: '6em',
              maxHeight: '6em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
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
                src={
                  speaker.avatar_url == ""
                    ? `https://gravatar.com/avatar/${gravatarHash}?s=200`
                    : speaker.avatar_url
                }
                alt={speaker.name}
              />
            </figure>
            <p className="title is-4 mt-4">
              {speaker.organization ? `${speaker.name} - ${speaker.organization}` : speaker.name}
            </p>
            <div dangerouslySetInnerHTML={{ __html: speaker.biography }}></div>
          </section>
        </div>
      </div>
    </div>
  );
}
