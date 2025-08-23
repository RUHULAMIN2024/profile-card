export default function FrontendUI({attributes}) {
  const { card,   } = attributes;
  const {
    
    name,
    jobTitle,
    jobDescription,
   
  } = card;
  return (
    <div>
      
      <div className="text">
        <p dangerouslySetInnerHTML={{ __html: name }} className="name" />
        <p
          className="job_title"
          dangerouslySetInnerHTML={{ __html: jobTitle }}
        />
        <p
          className="job_description"
          dangerouslySetInnerHTML={{ __html: jobDescription }}
        />
      </div>
    </div>
  );
}
