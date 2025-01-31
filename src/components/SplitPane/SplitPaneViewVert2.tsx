import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneRight,
  SplitPaneTop
} from "./index";

import "./index.css";


const SplitPaneViewVert2: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {


  return (
    <div className="split-pane" >


          <SplitPane className="split-pane-row" >
            
            
            
            <SplitPaneRight >
            <SplitPane className="split-pane-col" >
              
              <SplitPaneTop >
              {children[1]}
              </SplitPaneTop>

              <Divider className="separator-row" />
              
              <SplitPaneBottom >
              {children[0]}
              </SplitPaneBottom>
            
            </SplitPane>
              
              
                
            </SplitPaneRight>
          </SplitPane>

    </div>
  );
}

export default SplitPaneViewVert2;