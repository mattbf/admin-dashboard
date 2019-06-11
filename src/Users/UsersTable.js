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
  Pageview
} from '@material-ui/icons'

function UsersTable() {
    return (
      <MaterialTable
        title="Users"
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Username', field: 'username' },
          { title: 'email', field: 'email' },
          { title: 'Date Created', field: 'dateCreate', type: 'date' },
        ]}
        data={[
          { id: '1', username: 'username', email: 'e@mail.com', dateCreate: new Date() },
          { id: '2', username: 'Name', email: 'email@gmail.com', dateCreate: new Date() },
          { id: '3', username: 'Something', email: 'jim@gmail.com', dateCreate: new Date() },
          { id: '4', username: 'Baran', email: 'something@c.com', dateCreate: new Date() },

        ]}
        actions={[
          rowData => ({
            icon: Pageview,
            tooltip: 'View Details',
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
