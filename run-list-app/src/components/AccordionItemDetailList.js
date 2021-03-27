import React from 'react';

const AccordionItemDetailList = (list) => {

    return (
        <div>
            {list.list.map((point, index) => {
                return (
                    <div key={index}>
                        <p>{point.point.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AccordionItemDetailList;