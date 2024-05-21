import React, { useState } from 'react';
import '../css/table.css';

const Table = ({ rows, columns }) => {
    const [tableData, setTableData] = useState(
        Array.from({ length: rows }, () => Array(columns).fill(''))
    );
    const [selectedCell, setSelectedCell] = useState({ row: null, col: null });

    const handleCellChange = (e, rowIndex, colIndex) => {
        const newTableData = tableData.map((row, rIdx) =>
            row.map((cell, cIdx) =>
                rIdx === rowIndex && cIdx === colIndex ? e.target.value : cell
            )
        );
        setTableData(newTableData);
    };

    const handleCellClick = (rowIndex, colIndex) => {
        setSelectedCell({ row: rowIndex, col: colIndex });
    };

    const handleBlur = (rowIndex, colIndex) => {
        const cellValue = tableData[rowIndex][colIndex];
        if (cellValue === '=sum') {
            const sum = tableData
                .slice(0, rowIndex)
                .reduce((acc, row) => {
                    const value = parseFloat(row[colIndex]);
                    return acc + (isNaN(value) ? 0 : value);
                }, 0);
            const newTableData = tableData.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === colIndex ? sum.toString() : cell
                )
            );
            setTableData(newTableData);
        }
    };

    return (
        <div className="table-container">
            <table>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)} className={selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}>
                                    <input
                                        type="text"
                                        value={cell}
                                        onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                                        onBlur={() => handleBlur(rowIndex, colIndex)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
