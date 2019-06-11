import React from 'react';
import MaterialTable from 'material-table'

import {
  Delete,
  Search,
  Clear,
  FirstPage,
  LastPage,
  NavigateNext,
  NavigateBefore,
} from '@material-ui/icons'

function UsersTable() {
    return (
      <MaterialTable
        title="Users"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          rowData => ({
            icon: Delete,
            tooltip: 'Delete User',
            onClick: (event, rowData) => alert("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        icons={{
          Search: Search,
          Clear: Clear,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: NavigateNext,
          PreviousPage: NavigateBefore,
        }}
      />
    )
}

export default UsersTable
