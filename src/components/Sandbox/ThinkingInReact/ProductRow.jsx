import React from "react";

const renderProductRow = ({product}) => {
    const colorApplied = product.stocked ? "black": "red";
    return (
        <tr>
            <td style={{color: colorApplied }}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
export default  renderProductRow;