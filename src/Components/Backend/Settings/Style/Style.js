import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  BoxControl,
  BorderBoxControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { PanelColorSettings } from "@wordpress/block-editor";
const Style = ({ attributes, setAttributes }) => {
  const {
    cardBg,
    cardWidth,
    cardHeight,
    cardBorder,
    cardPadding,
    containerBorderRadius,
    imageBorder,
    imageBorderRadius,
    levelBg,
    levelPadding,
    nameColor,
    nameSize,
    jobTitleColor,
    jobTitleSize,
    jobDescriptionColor,
    jobDescriptionSize,
    messageBtnBorder,
    messageBtnBg,
    messageBtnBorderRadius,
    connectBtnBorder,
    connectBtnBorderRadius,
    connectBtnBg,
  } = attributes;

  const unints = [
    { value: "px", label: "px" },
    { value: "%", label: "%" },
    { value: "em", label: "em" },
  ];
  return (
    <>
      
      <PanelBody className='bPlPanelBody' title={__("Card Size", "pc-card")} initialOpen={true}>
        <RangeControl
          label={__("Card Width", "pc-card")}
          value={cardWidth}
          onChange={(value) =>
            setAttributes({
              cardWidth: value,
            })
          }
          min={300}
          max={500}
        />
        <RangeControl
          label={__("Card Height", "pc-card")}
          value={cardHeight}
          onChange={(value) =>
            setAttributes({
              cardHeight: value,
            })
          }
          min={400}
          max={700}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__("Padding Settings", "pc-card")} initialOpen={false}>
        <BoxControl
          label={__("Card Padding", "pc-card")}
          values={cardPadding}
          onChange={(value) => setAttributes({ cardPadding: value })}
        />
        <BoxControl
          label={__("Level Padding", "pc-card")}
          values={levelPadding}
          onChange={(value) => setAttributes({ levelPadding: value })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__("Border Setting", "pc-card")} initialOpen={false}>
          <BorderBoxControl
          label={__("Card Border")}
          title={__("Card Border")}
          onChange={(value) => setAttributes({ cardBorder: value })}
          value={cardBorder}
        />
        <BorderBoxControl
          label={__("Image Border")}
          onChange={(value) => setAttributes({ imageBorder: value })}
          value={imageBorder}
        />
        <BorderBoxControl
          label={__("Message Button Border")}
          onChange={(value) => setAttributes({ messageBtnBorder: value })}
          value={messageBtnBorder}
        />
        <BorderBoxControl
          label={__("Connect Button Border")}
          onChange={(value) => setAttributes({ connectBtnBorder: value })}
          value={connectBtnBorder}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__("Radius Setting", "pc-card")} initialOpen={false}>
        <UnitControl
          label={__("Card/Container Border Radius", "pc-card")}
          value={containerBorderRadius}
          onChange={(value) => setAttributes({ containerBorderRadius: value })}
          units={unints}
        />
        <UnitControl
          label={__("Image Border Radius", "pc-card")}
          value={imageBorderRadius}
          onChange={(value) => setAttributes({ imageBorderRadius: value })}
          units={unints}
        />
        <UnitControl
          label={__("MessageBtn Border Radius", "pc-card")}
          value={messageBtnBorderRadius}
          onChange={(value) => setAttributes({ messageBtnBorderRadius: value })}
          units={unints}
        />
        <UnitControl
          label={__("ConnectBtn Border Radius", "pc-card")}
          value={connectBtnBorderRadius}
          onChange={(value) => setAttributes({ connectBtnBorderRadius: value })}
          units={unints}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__("Typography Settings", "pc-card")} initialOpen={false}>
       <UnitControl
          label={__("Name Size", "pc-card")}
          value={nameSize}
          onChange={(value) => setAttributes({ nameSize: value })}
          units={unints}
        />
       <UnitControl
          label={__("Job Title Size", "pc-card")}
          value={jobTitleSize}
          onChange={(value) => setAttributes({ jobTitleSize: value })}
          units={unints}
        />
       <UnitControl
          label={__("Job Title Size", "pc-card")}
          value={jobDescriptionSize}
          onChange={(value) => setAttributes({ jobDescriptionSize: value })}
          units={unints}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__("Color Settings", "pc-block")} initialOpen={false}>
        <PanelColorSettings
          colorSettings={[
            {
              value: cardBg,
              onChange: (color) => setAttributes({ cardBg: color }),
              label: __("Background Color", "pc-block"),
            },
            {
              value: levelBg,
              onChange: (color) => setAttributes({ levelBg: color }),
              label: __("Level Background", "pc-block"),
            },
            {
              value: nameColor,
              onChange: (color) => setAttributes({ nameColor: color }),
              label: __("Name Color", "pc-block"),
            },
            {
              value: jobTitleColor,
              onChange: (color) => setAttributes({ jobTitleColor: color }),
              label: __("Job Title Color", "pc-block"),
            },
            {
              value: jobDescriptionColor,
              onChange: (color) =>
                setAttributes({ jobDescriptionColor: color }),
              label: __("Job Description Color", "pc-block"),
            },
            {
              value: messageBtnBg,
              onChange: (color) => setAttributes({ messageBtnBg: color }),
              label: __("Message Buttron Color", "pc-block"),
            },

            {
              value: connectBtnBg,
              onChange: (color) => setAttributes({ connectBtnBg: color }),
              label: __("Connect Button Color", "pc-block"),
            },
          ]}
          colors={[
            { name: "White", color: "#fff" },
            { name: "Red", color: "#f00" },
            { name: "Green", color: "#0f0" },
            { name: "Blue", color: "#00f" },
            { name: "Black", color: "#000" },
          ]}
        />
      </PanelBody>
      
      
    </>
  );
};

export default Style;
