import React from 'react';
import { FaCheck } from "react-icons/fa";

function Bills({data, deleteBill})
{
    return(
        <li className="display">
            <div>
                <strong>{data.names}</strong>
                <div>
                    <FaCheck onClick={() => deleteBill(data._id)} />
                </div>
            </div>
            <p>R${data.values}</p>
            <textarea className="description-output" defaultValue={data.description} disabled/>
        </li>
    )
}

export default Bills