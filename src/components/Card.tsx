import * as React from "react";
import "./Card.css";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardLogo,
  DocumentCardStatus,
  IDocumentCardLogoProps,
  IDocumentCardStyles,
  IDocumentCardTitleStyles,
} from "@fluentui/react/lib/DocumentCard";
import { mergeStyles } from "@fluentui/react/lib/Styling";
import { TestImages } from "@fluentui/example-data";
import { FontWeights } from "@fluentui/theme";
import { Link } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from "@fluentui/react/lib/Icon";
import { Depths } from "@fluentui/theme";
import OpenStatusLogo from "../svg/openStatus.svg";
import ClosedStatusLogo from "../svg/closedStatus.svg";
import InProgressStatusLogo from "../svg/inProgressStatus.svg";
import OpenStatusLogoNew from "../svg/openStatusNew.svg";
import ClosedStatusLogoNew from "../svg/closedStatusNew.svg";
import InProgressStatusLogoNew from "../svg/inProgressStatusNew.svg";

initializeIcons();

const conversationTileClass = mergeStyles({ height: 182 });

const MyIcon = () => <Icon iconName="CompassNW" />;

type CardProps = {
  caseNumber: number;
  caseName: string;
  dateCreated: string;
  casePerson: string;
  caseDescription: string;
  numberOfAttachments: number;
  personImageUrl: string;
  caseStatus: string;
};

export const Card: React.FC<CardProps> = ({
  caseNumber,
  caseName = "",
  dateCreated,
  casePerson,
  caseDescription,
  numberOfAttachments,
  personImageUrl,
  caseStatus,
}) => {
  const DocumentCardActivityPeople = [
    { name: casePerson, profileImageSrc: personImageUrl },
  ];
  const logoProps: IDocumentCardLogoProps = {
    logoIcon: OpenStatusLogo,
  };

  const cardStyles: IDocumentCardStyles = {
    root: {
      display: "inline-block",
      marginRight: 20,
      width: 320,
      borderColor: "#e1dfdd",
      boxShadow: Depths.depth16,
      marginBottom: 20,
    },
  };

  const cardTitleStyles: IDocumentCardTitleStyles = {
    root: { fontWeight: FontWeights.semibold },
  };

  const currentStatus =
    caseStatus === "open"
      ? OpenStatusLogoNew
      : caseStatus === "in progress"
      ? InProgressStatusLogoNew
      : ClosedStatusLogoNew;
  return (
    <Link to={`/cases/${caseNumber}`}>
      <div key={caseNumber}>
        <DocumentCard
          aria-label={
            "Document Card with logo, text preview, and status. Conversation about annual report. " +
            "Content preview. 3 attachments. Sent by Annie Lindqvist and 2 others in March 13, 2018."
          }
          styles={cardStyles}
          onClickHref={`/cases/${caseNumber}`}
        >
          <div className="card-logo-container">
            <img src={currentStatus} />
          </div>

          <div className={conversationTileClass}>
            <DocumentCardTitle
              title={caseName}
              shouldTruncate
              styles={cardTitleStyles}
            />
            <DocumentCardTitle
              title={caseDescription}
              shouldTruncate={true}
              showAsSecondaryTitle
            />
            <DocumentCardStatus statusIcon="attach" status="3 Attachments" />
          </div>
          <DocumentCardActivity
            activity={dateCreated}
            people={DocumentCardActivityPeople}
          />
        </DocumentCard>
      </div>
    </Link>
  );
};

export default Card;
