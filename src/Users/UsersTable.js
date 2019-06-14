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
  FullScreen,
  Pageview,
  Close
} from '@material-ui/icons'

function UsersTable(props) {
    return (
      <MaterialTable
        title="Users"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Username', field: 'username' },
          { title: 'email', field: 'email' },
          { title: 'Date Created', field: 'dateCreate', type: 'date' },
        ]}
        data={props.users}
        actions={[
          rowData => ({
            icon: Pageview,
            tooltip: 'View Details',
            onClick: (event, rowData) => props.openCard(rowData.id),
            disabled: rowData.birthYear < 2000
          })
        ]}
        options={{
          actionsColumnIndex: -1
        }}
        icons={{
          Search: Search,
          Close: Clear,
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: NavigateNext,
          PreviousPage: NavigateBefore,
        }}
      />
    )
}

export default UsersTable
