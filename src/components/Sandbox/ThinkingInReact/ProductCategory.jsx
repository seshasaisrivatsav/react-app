import React from "react";

const renderCategory = ({category}) => {
    // Eg: Sporting Goods or Electronics
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
};

export default  renderCategory