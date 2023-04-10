import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
  TooltipHost,
  mergeStyleSets,
} from "@fluentui/react";

type DocumentListProps = {
  documentData: any;
};

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px",
  },
  selectionDetails: {
    marginBottom: "20px",
  },
});

function DocumentList(props: DocumentListProps) {
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "File Type",
      className: classNames.fileIconCell,
      iconClassName: classNames.fileIconHeaderIcon,
      ariaLabel: "Column operations for File type, Press to sort on File type",
      iconName: "Page",
      isIconOnly: true,
      fieldName: "name",
      minWidth: 16,
      maxWidth: 16,
      onRender: (item) => (
        <TooltipHost content={`${item.fileType} file`}>
          <img
            src={`https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/item-types/16/${item.docType}.svg`}
            className={classNames.fileIconImg}
            alt={`${item.fileType} file icon`}
          />
        </TooltipHost>
      ),
    },
    {
      key: "column2",
      name: "Name",
      fieldName: "docName",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
     
      isSortedDescending: false,
      sortAscendingAriaLabel: "Sorted A to Z",
      sortDescendingAriaLabel: "Sorted Z to A",
      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Date Modified",
      fieldName: "dateModified",
      minWidth: 100,
      maxWidth: 150,
      isResizable: true,
      data: "number",
      isPadded: true,
    },
    {
      key: "column4",
      name: "Modified By",
      fieldName: "modifiedBy",
      minWidth: 70,
      maxWidth: 110,
      isResizable: true,
      isCollapsible: true,
      data: "string",
      isPadded: true,
    },
    {
      key: "column5",
      name: "File Size",
      fieldName: "fileSize",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: "number",
    },
  ];

  return (
    <div>
      <DetailsList
        items={props.documentData}
        columns={columns}
        checkboxVisibility={2}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        isHeaderVisible={true}
      />
    </div>
  );
}

export default DocumentList;
