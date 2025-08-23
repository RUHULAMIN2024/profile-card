import { Modal, Tooltip } from "@wordpress/components";
import { useState } from "@wordpress/element";
import BackendUI from "../Backend/BackendUI";
import FrontendUI from "../Frontend/FrontendUI";

export default function ShowCard({
  isEditor,
  attributes,
  setAttributes = () => {},
}) {
  const { card, openInNewTab } = attributes;
  const {
    image,
    level,
    messageBtn,
    ConnectBtn,
  } = card;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="box1 box">
        <div className="content">
          <div className="image">
            <img src={image} alt="Profile Image" />
          </div>
          <div className="level">
        <p dangerouslySetInnerHTML={{ __html: level }} />
      </div>

          {isEditor ? (
            <BackendUI attributes={attributes} setAttributes={setAttributes} />
          ) : (
            <FrontendUI attributes={attributes} />
          )}
          <div className="button">
            <div>
              <Tooltip text="Click to open Modal">
                <button className="message" onClick={() => setIsOpen(true)}>
                  {messageBtn}
                </button>
              </Tooltip>

              {isOpen && (
                <Modal
                  title="Your Message Modal"
                  onRequestClose={() => setIsOpen(false)}
                >
                  <p>This is your message!</p>
                </Modal>
              )}
            </div>
            <div>
              <a
                href="https://bplugins.com"
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
              >
                <button className="connect">{ConnectBtn}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
