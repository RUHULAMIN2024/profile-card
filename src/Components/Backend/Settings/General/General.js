import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import { MediaPlaceholder } from "@wordpress/block-editor";

const General = ({ attributes, setAttributes }) => {
  const { card, openInNewTab } = attributes;
  const {
    level,
    name,
    jobTitle,
    jobDescription,
    messageBtn,
    ConnectBtn,
  } = card;

  return (
    <>
      <PanelBody
       className='bPlPanelBody'
        title={__("Update Your Profile Data", "pc-block")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Select Level", "pc-block")}
          value={level}
          options={[
            { label: "BASIC", value: "BASIC" },
            { label: "PRO", value: "PRO" },
            { label: "ENTERPRISE", value: "ENTERPRISE" },
          ]}
          onChange={(value) => {
            setAttributes({ card: { ...card, level: value } });
          }}
        />

        <TextControl
          label={__("Name", "pc-block")}
          value={name}
          onChange={(value) =>
            setAttributes({ card: { ...card, name: value } })
          }
        />
        <TextControl
          label={__("Job Title", "pc-block")}
          value={jobTitle}
          onChange={(value) =>
            setAttributes({ card: { ...card, jobTitle: value } })
          }
        />
        <TextControl
          label={__("Job Description", "pc-block")}
          value={jobDescription}
          onChange={(value) =>
            setAttributes({ card: { ...card, jobDescription: value } })
          }
        />
        <TextControl
          label={__("Message Button Text", "pc-block")}
          value={messageBtn}
          onChange={(value) =>
            setAttributes({ card: { ...card, messageBtn: value } })
          }
        />
        <TextControl
          label={__("Connect Button Text", "pc-block")}
          value={ConnectBtn}
          onChange={(value) =>
            setAttributes({ card: { ...card, ConnectBtn: value } })
          }
        />

        <ToggleControl
          label="Open links in new tab"
          checked={openInNewTab}
          onChange={(value) => setAttributes({ openInNewTab: value })}
        />
      </PanelBody>

      <MediaPlaceholder
        onSelect={(media) => {
          setAttributes({
            card: { ...card, image: media.url },
          });
        }}
        icon="upload"
        accept="image/*"
        allowedTypes={["image"]}
        labels={{
          title: "Profile Image",
          instructions: __("Upload or select an image.", "pc-block"),
        }}
      />
    </>
  );
};

export default General;
