import DivUI from "../ui-components/DivUI";
import TitleUI from '../ui-components/TitleUI';
import ParagraphUI from '../ui-components/ParagraphUI';

const DisplayContent = ({ titleProp, visibleProp, componentDataProp, children }) => {
  
    const visible = visibleProp
  
    console.log("DC | ComponentDataProp: ",componentDataProp)
    return (
      <>
      {/* Card iniziale */}
        <DivUI
          visibleProp={visible}
        >
          <TitleUI textProp={componentDataProp.title}/>
          <ParagraphUI textProp={componentDataProp.paragraph}/>

        </DivUI>
        
        {/* Componente selezionato */}
        {children}
      </>
    );
  };
  
  export default DisplayContent;