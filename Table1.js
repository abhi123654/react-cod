import React from 'react'
import {useTable} from 'react-table'
import {COLUMNS} from './Columns'
import './Table.css'
import DATA1 from './Data1'

export const Table1 = () => {
    const tableInstance = useTable({
        columns: COLUMNS,
        data: DATA1,

    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        
        
            
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroups => (
                          
                          <tr {...headerGroups.getHeaderGroupProps()}>
                              {headerGroups.headers.map((column) => (

                                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>

                              ))}
                              </tr>

                            
                          
                        ))}
                    </thead>
                    <tbody {...getTableProps}>
                        {rows.map(row => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                    </tr>

                            )
                        })}
                    </tbody>
                    <tfoot>
                        {
                            footerGroups.map(footerGroups => (
                                <tr {...footerGroups.getFooterGroupProps()}>
                                    {footerGroups.headers.map(column => (
                                        <td { ...column.getFooterProps}>
                                            {column.render('Footer')}
                                            </td>
                                    ))}
                                    </tr>
                            ))
                        }

                    </tfoot>
                </table>
            
    )
}
