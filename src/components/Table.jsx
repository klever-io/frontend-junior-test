import React from "react";
import editIcon from "../assets/images/edit-icon.svg";

function Table({ headers, tableData, onEditClick }) {
  const formatNumber = (number) => Number(number).toLocaleString();

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={`${header.key}-${index}`}
              className={header.key === "balance" ? "th-balance" : "th-token"}
            >
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={`${data}-${index}`} className="table-row">
            {headers.map((header) =>
              header.key !== "button" ? (
                <td
                  key={`${data[header.key]}-${index}`}
                  className={header.key === "balance" ? "td-balance" : "td-token"}
                >
                  {header.key === "balance"
                    ? formatNumber(data[header.key])
                    : data[header.key]}
                </td>
              ) : (
                <td
                  key={`${data[header.key]}-${index}`}
                  className="table-button"
                >
                  <button
                    className="edit-button"
                    onClick={() => onEditClick(data)}
                  >
                    <img src={editIcon} alt="Edit Icon" />
                  </button>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
