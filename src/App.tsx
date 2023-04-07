import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import ListView from "./components/ListView";
// import Cases from "./components/Cases";
import cases from "./components/data/cases.json";
import documents from "./components/data/documents.json"
import {
  DefaultPalette,
  IPivotStyles,
  IStackStyles,
  IStackTokens,
  Pivot,
  PivotItem,
  Stack,
} from "@fluentui/react";
import NavList from "./components/NavList";
import ViewCase from "./ViewCase";
import DocumentList from "./components/DocumentList";

function App() {
  const wrapStackTokens: IStackTokens = { childrenGap: 30 };
  const [stackWidth, setStackWidth] = React.useState<number>(100);
  const stackStyles: IStackStyles = {
    root: {
      width: `${stackWidth}%`,
      marginTop: "20px",
      padding: "30px",
    },
  };

  const pivotStyles: IPivotStyles = {
    root: {},
    link: undefined,
    linkIsSelected: undefined,
    linkContent: undefined,
    text: undefined,
    count: undefined,
    icon: undefined,
    linkInMenu: undefined,
    overflowMenuButton: undefined,
  };

  return (
    <div className="App">
      {/* <h1 className=" header-style">Case List</h1>
      <div className="menu-container">
      <NavList/>
      <div className="cases-container">
       
        <Pivot aria-label="Basic Pivot Example" styles={pivotStyles}>
          <PivotItem headerText="Card View" className="pivot-css">
            <Stack
              enableScopedSelectors
              horizontal
              wrap
              styles={stackStyles}
              tokens={wrapStackTokens}
              horizontalAlign="start"
            > 
              {cases.map((card) => (
                <Card
                  key={card.caseNumber}
                  caseName={card.caseName || " "}
                  dateCreated={card.dateCreated}
                  casePerson={card.person}
                  caseDescription={card.caseDescription}
                  numberOfAttachments={card.numberOfAttachments}
                  personImageUrl={card.personImageUrl}
                />
              ))}
            </Stack>
          </PivotItem>
          <PivotItem headerText="List View">
            <Stack
              enableScopedSelectors
              horizontal
              wrap
              styles={stackStyles}
              tokens={wrapStackTokens}
              horizontalAlign="start"
            >
              <ListView />
            </Stack>
          </PivotItem>
        </Pivot>
  
      </div>
      </div> */}
      <ViewCase/>    
    </div>
  );
}

export default App;
