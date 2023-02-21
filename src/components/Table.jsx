import React from "react";

function Table({ headers, tableData }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={`${header}-${index}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={`${data}-${index}`}>
            {headers.map((key) => (
              <td key={`${data[key.toLowerCase()]}-${index}`}>
                {data[key.toLowerCase()]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
