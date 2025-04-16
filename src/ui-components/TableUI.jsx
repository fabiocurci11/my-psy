import React from 'react';
import ButtonUI from '../ui-components/ButtonUI';

const TableUI = ({
    columns = [],
    data = [],
    tableProp = "table-auto",
    tableWidthProp = "w-full",
    tableBorderProp = "border border-[#fff4ed]",
    shadowProp = "shadow-md",
    className = "",
    onButtonClick = () => console.log("Default Click button")
}) => {

    const cssClasses = [
        tableProp,
        tableWidthProp,
        tableBorderProp,
        shadowProp
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={`overflow-hidden rounded-lg ${tableBorderProp}`}>
            <table className={`${cssClasses} ${className}`}>
                <thead>
                    <tr className="text-center bg-[#fff4ed]">
                        {columns.map((col) => (
                            <th key={col} className={`${tableBorderProp} px-4 py-2`}>
                                {col}
                            </th>
                        ))}
                        <th className={`${tableBorderProp} px-4 py-2`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={item.id || index} className="text-center odd:bg-white even:bg-[#fff4ed] ">
                                {columns.map((col) => (
                                    <td key={col} className={`${tableBorderProp} px-4 py-2`}>
                                        {item[col]}
                                    </td>
                                ))}
                                <td className={`${tableBorderProp} px-4 py-2`}>
                                    <ButtonUI
                                        textProp="Info"
                                        paddingProp="p-2 px-6"
                                        shadowProp="shadow-md"
                                        widthProp="w-auto"
                                        fontWeight="font-bold"
                                        onClick={() => onButtonClick(item)} 
                                
                                    />

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="text-center">
                            <td colSpan={columns.length} className="px-4 py-2 text-gray-500 italic">
                                Nessun dato disponibile
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableUI;
