
import {
  useBlockProps,
} from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import ShowCard from "../Common/ShowCard";

const Edit = ({ attributes, setAttributes, clientId }) => {
  
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

          <ShowCard isEditor={true} attributes={attributes} setAttributes={setAttributes} />
        
      </div>
    </>
  );
};
export default Edit;
