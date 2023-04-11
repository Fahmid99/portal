import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams,
} from "react-router-dom";
import {
  IPivotStyles,
  IStackStyles,
  IStackTokens,
  Pivot,
  PivotItem,
  Stack,
} from "@fluentui/react";
import ViewCase from "./ViewCase";
import cases from "./components/data/cases.json";
import Card from "./components/Card";
import ListView from "./components/ListView";
import NavList from "./components/NavList";

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

  const [currentPage, setCurrentPage] = useState(1);
  
  const CARDS_PER_PAGE = 8;
  const getCardsForPage = (page: number, cardsPerPage: number) => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cases.slice(startIndex, endIndex);
  };
  

  cases.sort((a, b) => {
    const statusOrder: {  [key: string]: number } = { 'open': 1, 'in progress': 2, 'closed': 3 };
    return statusOrder[a.caseStatus] - statusOrder[b.caseStatus];
  });


  return (
    <Router>  
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="header-style">Case List</h1>
                <div className="menu-container">
                  <NavList />
                  <div className="cases-container">
                    <Pivot
                      aria-label="Basic Pivot Example"
                      styles={pivotStyles}
                    >
                      <PivotItem headerText="Card View" className="pivot-css">
                        <div className="pages-container">
                          {Array.from({
                            length: Math.ceil(cases.length / CARDS_PER_PAGE),
                          }).map((item, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentPage(index + 1)}
                              disabled={currentPage === index + 1}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        

                        <Stack
                          enableScopedSelectors
                          horizontal
                          wrap
                          styles={stackStyles}
                          tokens={wrapStackTokens}
                          horizontalAlign="start"
                        >
                          {getCardsForPage(currentPage, CARDS_PER_PAGE).map(
                            (card) => (
                              <Link
                                key={card.caseNumber}
                                to={`/cases/${card.caseNumber}`}
                              >
                                <Card
                                  caseName={card.caseName || " "}
                                  dateCreated={card.dateCreated}
                                  casePerson={card.person}
                                  caseDescription={card.caseDescription}
                                  numberOfAttachments={card.numberOfAttachments}
                                  personImageUrl={card.personImageUrl}
                                  caseNumber={card.caseNumber}
                                  caseStatus={card.caseStatus}
                                />
                              </Link>
                            )
                          )}
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
                </div>
              </>
            }
          />
          <Route
            path="/cases/:id"
            Component={(props: any) => <ViewCase cases={cases} {...props} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
