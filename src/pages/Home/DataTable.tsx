import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  TableCellLayout,
  TableColumnDefinition,
  createTableColumn,
  makeStyles,
} from '@fluentui/react-components';
import { Part } from '../../types/ApiResponseType';

type Item = {
  id: number;
  name: string;
  thickness: number;
  width: number;
  weight: number;
};

interface DataTablePropType {
  parts?: Part[];
  handleSelection: (id: number[]) => void;
}

const useStyles = makeStyles({
  dataGridBody: {
    maxHeight: '400px',
    overflowY: 'auto',
  },
});

export const DataTable = ({ parts = [], handleSelection }: DataTablePropType) => {
  const classes = useStyles();
  // DataGrid Boşken rowların boş olarak renderlanması istenirse
  // bunu kullanabilirsin (10 adet array oluşturup içini empty stringle dolduruyor.)
  // if (!parts.length) {
  //   parts = Array(10);
  //   parts.fill('');
  // }
  const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
      columnId: 'id',
      renderHeaderCell: () => {
        return 'Id';
      },
      renderCell: (item) => {
        return <TableCellLayout>{item.id}</TableCellLayout>;
      },
    }),
    createTableColumn<Item>({
      columnId: 'name',
      compare: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      renderHeaderCell: () => {
        return 'Name';
      },
      renderCell: (item) => {
        return <TableCellLayout>{item.name}</TableCellLayout>;
      },
    }),
    createTableColumn<Item>({
      columnId: 'thickness',
      renderHeaderCell: () => {
        return 'Thickness';
      },

      renderCell: (item) => {
        return <TableCellLayout>{item.thickness}</TableCellLayout>;
      },
    }),
    createTableColumn<Item>({
      columnId: 'width',
      renderHeaderCell: () => {
        return 'Width';
      },
      renderCell: (item) => {
        return <TableCellLayout>{item.width}</TableCellLayout>;
      },
    }),
    createTableColumn<Item>({
      columnId: 'weight',
      renderHeaderCell: () => {
        return 'Weight';
      },
      renderCell: (item) => {
        return <TableCellLayout>{item.weight}</TableCellLayout>;
      },
    }),
  ];
  return (
    <DataGrid
      items={parts}
      columns={columns}
      sortable
      selectionMode="multiselect"
      getRowId={(item) => item.id}
      onSelectionChange={(_, data) => {
        // For getting ids from set function
        const ids = [];
        for (const id of data.selectedItems.values()) {
          ids.push(+id);
        }
        handleSelection(ids);
      }}
      focusMode="composite"
    >
      <DataGridHeader>
        <DataGridRow selectionCell={{ 'aria-label': 'Select all rows' }}>
          {({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<Item> className={classes.dataGridBody}>
        {({ item, rowId }) => (
          <DataGridRow<Item> key={rowId} selectionCell={{ 'aria-label': 'Select row' }}>
            {({ renderCell }) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
