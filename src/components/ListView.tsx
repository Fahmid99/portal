import * as React from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { Depths, Link, PrimaryButton } from "@fluentui/react";
import cases from "./data/cases.json";

const listStyle = {
  root: {
    marginTop: 20,
    boxShadow: Depths.depth16,
    marginBottom: 30,
  },
};

export interface IDetailsListDocumentsExampleState {
  columns: IColumn[];
  items: IDocument[];
  isModalSelection: boolean;
  isCompactMode: boolean;
  announcedMessage?: string;
}

export interface IDocument {
  caseNumber: number;
  name: string;
  dateCreated: string;
  casePerson: string;
}

export class ListView extends React.Component<
  {},
  IDetailsListDocumentsExampleState
> {
  private _allItems: IDocument[];

  constructor(props: { data: any }) {
    super(props);

    this._allItems = _generateItems();

    const columns: IColumn[] = [
      {
        key: "column1",
        name: "Issue No.",
        fieldName: "caseNumber",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",

        isPadded: true,
      },
      {
        key: "column2",
        name: "Issue Name",
        fieldName: "name",
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",
        onColumnClick: this._onColumnClick,
        data: "string",
        isPadded: true,
      },
      {
        key: "column3",
        name: "Date Created",
        fieldName: "dateCreated",
        minWidth: 120,
        maxWidth: 150,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",

        isPadded: true,
      },
      {
        key: "column4",
        name: "",
        fieldName: "viewMore",
        minWidth: 200,
        maxWidth: 100,
        isResizable: true,
        onColumnClick: this._onColumnClick,
        data: "number",
        onRender: (item: IDocument) => {
          return (
            <Link to={`/cases/1`}>
              <PrimaryButton text="View" onClick={_alertClicked} />{" "}
            </Link>
          );
        },
        isPadded: true,
      },
    ];

    this.state = {
      items: this._allItems,
      columns,
      isModalSelection: false,
      isCompactMode: false,
      announcedMessage: undefined,
    };

    function _alertClicked(): void {
      "window.location.href='https://w3docs.com';"
    }
  }

  public render() {
    const { columns, items } = this.state;

    return (
      <div>
        <DetailsList
          items={items}
          columns={columns}
          selectionMode={SelectionMode.none}
          getKey={this._getKey}
          setKey="none"
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          onItemInvoked={this._onItemInvoked}
          styles={listStyle}
        />
      </div>
    );
  }

  private _getKey(item: any, index?: number): string {
    return item.key;
  }
  private _onItemInvoked(item: any): void {
    alert(`Item invoked: ${item.name}`);
  }

  private _onColumnClick = (
    ev: React.MouseEvent<HTMLElement>,
    column: IColumn
  ): void => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(
      (currCol) => column.key === currCol.key
    )[0];
    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
        this.setState({
          announcedMessage: `${currColumn.name} is sorted ${
            currColumn.isSortedDescending ? "descending" : "ascending"
          }`,
        });
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    const newItems = _copyAndSort(
      items,
      currColumn.fieldName!,
      currColumn.isSortedDescending
    );
    this.setState({
      columns: newColumns,
      items: newItems,
    });
  };
}

function _copyAndSort<T>(
  items: T[],
  columnKey: string,
  isSortedDescending?: boolean
): T[] {
  const key = columnKey as keyof T;
  return items
    .slice(0)
    .sort((a: T, b: T) =>
      (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
    );
}
function _generateItems() {
  const items: {
    caseNumber: number;
    name: string;
    dateCreated: string;
    casePerson: string;
  }[] = [];

  cases.forEach((element) => {
    items.push({
      caseNumber: element.caseNumber,
      name: element.caseName,
      dateCreated: element.dateCreated,
      casePerson: element.person,
    });
  });

  return items;
}

export default ListView;
