import { IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import React from "react";
import ListView from "./components/ListView";
import { inherits } from "util";
import documents from "./components/data/documents.json";
import DocumentList from "./components/DocumentList";
import "./App.css"
import ActivityList from "./components/ActivityList";

const wrapStackTokens: IStackTokens = { childrenGap: 30} ;
const headerStackTokens: IStackTokens = { childrenGap: 30 };

const stackStyles: IStackStyles = {
  root: {
    height: "100%",
    overflow: "auto",
  },
};

function ViewCase() {
  return (
    <div >
      <Stack
        enableScopedSelectors
        horizontal
        horizontalAlign="center"
        wrap
        tokens={wrapStackTokens}

        className="view-case"
      >
       {/* Left side column */}
        <Stack
          enableScopedSelectors
          verticalAlign="center"
          wrap
          tokens={wrapStackTokens}
          style={{ height: "100%" }}
        >
          <Stack.Item>
             <div className="view-case-left-col-header-bar" />
            <div className="view-case-left-col-header" >
              <Stack horizontal tokens={wrapStackTokens} >
            <h1>Case Name: hardware error</h1>
            <h1>Case No: 1</h1>
            <h1>Status: progress</h1>
            </Stack>
            <Stack horizontal tokens={wrapStackTokens} >
            <h1>Client Name: John Doe</h1>
           
            </Stack>
            <Stack horizontal tokens={wrapStackTokens} >
            <h1>Client Email: jhondoe@gmail.com</h1>
           
            </Stack>
            </div>
            
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-left-col-body"></div>
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-left-col-footer"><DocumentList documentData={documents}/></div>
          </Stack.Item>
        </Stack>

   {/* Right side column */}
        <Stack
          enableScopedSelectors
          verticalAlign="center"
          wrap
          tokens={headerStackTokens}
          style={{ height: "100%" }}
        >
          <Stack.Item>
            <div className="view-case-right-col-header"></div>
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-right-col-body"> <ActivityList/></div>
          </Stack.Item>
        </Stack>
      </Stack>
    </div>
  );
}

export default ViewCase;
