import FullSizeContainer from "../FullSizeContainer";
import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop
} from "./index";

import "./index.css";

const SplitPaneView2: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {

  return (
    <FullSizeContainer className="split-pane" >

      <SplitPane className="split-pane-row" >

        <SplitPaneLeft >
          {children[0]}
        </SplitPaneLeft>
        <Divider className="separator-col" />
        <SplitPaneRight >
          <SplitPaneTop >
            {children[1]}
          </SplitPaneTop>
        </SplitPaneRight>
      </SplitPane>

    </FullSizeContainer>
  );
}

export default SplitPaneView2;