import {
  IPersonaSharedProps,
  IStackItemStyles,
  IStackStyles,
  IStackTokens,
  Persona,
  PersonaPresence,
  PersonaSize,
  Separator,
  Stack,
} from "@fluentui/react";
import React from "react";
import ListView from "./components/ListView";
import { inherits } from "util";
import documents from "./components/data/documents.json";
import DocumentList from "./components/DocumentList";
import "./App.css";
import ActivityList from "./components/ActivityList";
import { TestImages } from "@fluentui/example-data";
import { useParams } from "react-router-dom";
import OpenStatusLogo from "../svg/openStatus.svg";
import ClosedStatusLogo from "../svg/closedStatus.svg";
import InProgressStatusLogoNew from "./svg/inProgressStatusNew.svg";
import OpenStatusLogoNew from "./svg/openStatusNew.svg";
import ClosedStatusLogoNew from "./svg/closedStatusNew.svg";

const wrapStackTokens: IStackTokens = { childrenGap: 30 };
const headerStackTokens: IStackTokens = { childrenGap: 30 };

const examplePersona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: "AR",
  text: "Annie Reid",
  secondaryText: "Designer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm",
  showSecondaryText: true,
};
type Case = {
  caseName: string;
  person: string;
  caseNumber: number;
  dateCreated: string;
  caseDescription: string;
  numberOfAttachments: number;
  personImageUrl: string;
  caseStatus: string;
};

interface ViewCaseProps {
  cases: Case[];
}


export const ViewCase: React.FC<ViewCaseProps> = ({ cases }) => {
  const { id } = useParams<{ id: string }>();
  const caseToShow = cases.find((c) => c.caseNumber.toString() === id);
  const currentStatus =
  caseToShow?.caseStatus === "open"
    ? OpenStatusLogoNew
    : caseToShow?.caseStatus === "in progress"
    ? InProgressStatusLogoNew
    : ClosedStatusLogoNew;
  return (
    <div>
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
            <div className="view-case-left-col-header-bar">
              <h1>{caseToShow?.caseNumber}</h1>
            </div>
            <div className="view-case-left-col-header">
              <Stack>
                <div className="first-row-header">
                  <Stack horizontal tokens={wrapStackTokens}>
                    <Stack.Item>
                      <ul>
                        <h1>
                          <li>Case Name</li>
                        </h1>
                        <h2>
                          <li>{caseToShow?.caseName}</li>
                        </h2>
                      </ul>
                    </Stack.Item>
                    <Stack.Item>
                      <ul>
                        <h1>
                          <li>Date Created</li>
                        </h1>
                        <h2>
                          <li>{caseToShow?.dateCreated}</li>
                        </h2>
                      </ul>
                    </Stack.Item>
                    <Stack.Item>
                      <div className="status-header">
                        <h1>Status:</h1><img src={currentStatus}></img>
                      </div>
                    </Stack.Item>
                  </Stack>
                </div>

                <div className="second-row-header">
                  <Stack.Item>
                    <ul>
                      <h1>
                        <li>Client Contact</li>
                      </h1>

                      <h2>
                        <li>{caseToShow?.person}</li>
                      </h2>
                    </ul>
                  </Stack.Item>
                </div>
              </Stack>
            </div>
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-left-col-header-bar">
              <h1>Case Information</h1>
            </div>
            <div className="view-case-left-col-body"><p>{caseToShow?.caseDescription}</p></div>
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-left-col-header-bar">
              <h1>Documents</h1>
            </div>
            <div className="view-case-left-col-footer">
              <DocumentList documentData={documents} />
            </div>
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
            <div className="view-case-right-col-header-bar">
              <h1>Contributers</h1>
            </div>
            <div className="view-case-right-col-header">
              <div className="view-case-right-col-header-content">
                <Persona
                  {...examplePersona}
                  size={PersonaSize.size40}
                  presence={PersonaPresence.none}
                  imageAlt="Annie Ried, status is unknown"
                />
                <Separator />
                <Persona
                  {...examplePersona}
                  size={PersonaSize.size40}
                  presence={PersonaPresence.none}
                  imageAlt="Annie Ried, status is unknown"
                />
              </div>
            </div>
          </Stack.Item>
          <Stack.Item>
            <div className="view-case-right-col-header-bar">
              <h1>Case Activity</h1>
            </div>
            <div className="view-case-right-col-body">
              <div className="view-case-right-col-body-activity">
                <ActivityList />
              </div>
            </div>
          </Stack.Item>
        </Stack>
      </Stack>
    </div>
  );
};

export default ViewCase;
