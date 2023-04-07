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
import {} from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from "@fluentui/react/lib/Icon";
import { Depths } from "@fluentui/theme";

initializeIcons();

const conversationTileClass = mergeStyles({ height: 182 });

const MyIcon = () => <Icon iconName="CompassNW" />;

type CardProps = {
  caseName: string;
  dateCreated: string;
  casePerson: string;
  caseDescription: string;
  numberOfAttachments: number;
  personImageUrl: string;

};

export const Card: React.FC<CardProps> = ({
  caseName = "",
  dateCreated,
  casePerson, 
  caseDescription, 
  numberOfAttachments,
  personImageUrl

}) => {
  const DocumentCardActivityPeople = [
    { name: casePerson, profileImageSrc: personImageUrl},
  ];
  const logoProps: IDocumentCardLogoProps = {
    logoIcon: "Ticket",
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

  return (
    <div>
      <DocumentCard
        aria-label={
          "Document Card with logo, text preview, and status. Conversation about annual report. " +
          "Content preview. 3 attachments. Sent by Annie Lindqvist and 2 others in March 13, 2018."
        }
        styles={cardStyles}
        onClickHref="http://bing.com"
      >
        <DocumentCardLogo {...logoProps} />
        <div className={conversationTileClass}>
          <DocumentCardTitle
            title={caseName}
            shouldTruncate
            styles={cardTitleStyles}
          />
          <DocumentCardTitle
            title={caseDescription}
            shouldTruncate = {true}
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
  );
};

export default Card;
