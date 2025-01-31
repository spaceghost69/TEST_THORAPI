import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./index";

import "./index.css";


const SplitPaneView: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="split-pane">

      <SplitPane className="split-pane-row" >

        <SplitPaneLeft >
          {children[0]}
        </SplitPaneLeft>
        <Divider className="separator-col" />
        <SplitPaneRight >
          <SplitPane className="split-pane-col" >

            <SplitPaneTop >
              {children[1]}
            </SplitPaneTop>

            <Divider className="separator-row" />

            <SplitPaneBottom >
              {children[2]}
            </SplitPaneBottom>

          </SplitPane>



        </SplitPaneRight>
      </SplitPane>

    </div>
  );
}

export default SplitPaneView;