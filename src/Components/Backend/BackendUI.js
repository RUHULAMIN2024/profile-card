import { RichText } from "@wordpress/block-editor";

export default function BackendUI({attributes, setAttributes}) {
  const { card,  } = attributes;
  const {
    name,
    jobTitle,
    jobDescription,
   
  } = card;

  return (
  
      
      <div className="text">
        <RichText
          tagName="p"
          className="name"
          value={name}
          onChange={(value) =>
            setAttributes({ card: { ...card, name: value } })
          }
        />
        <RichText
          tagName="p"
          className="job_title"
          value={jobTitle}
          onChange={(value) =>
            setAttributes({ card: { ...card, jobTitle: value } })
          }
        />
        <RichText
          tagName="p"
          className="job_description"
          value={jobDescription}
          onChange={(value) =>
            setAttributes({ card: { ...card, jobDescription: value } })
          }
        />
      </div>
    
  );
}
