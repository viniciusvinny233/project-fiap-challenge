import ConfigButtons from "./ConfigButtons";
import MenuItem from "./MenuItem";

const VideoAndAbout = () => {
   return (
      <ConfigButtons>
         <div className="config-button-span left-icons-text ul">
            <MenuItem imgSrc="./images/recordicon.png" title="Vídeo Pitch" link="../pitch" />
            <MenuItem imgSrc="./images/infoicon.png" title="Sobre o Projeto" link="about" />
         </div>
      </ConfigButtons>
   );
};

export default VideoAndAbout;
