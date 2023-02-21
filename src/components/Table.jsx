import React from "react";

function Table({ headers, tableData, onEditClick }) {
  const formatKeyValue = (key) => {
    if (key === "Tokens") {
      return key.slice(0, -1).toLowerCase();
    }
    return key.toLowerCase();
  };

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
              <td key={`${data[formatKeyValue(key)]}-${index}`}>
                {key === "Tokens" && (
                  <button onClick={() => onEditClick(data)}>Edit</button>
                )}
                {data[formatKeyValue(key)]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
