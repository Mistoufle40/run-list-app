import React, { useState, useEffect } from 'react';

const AccordionItem = (item) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.item.name);
            setDesc(item.item.description);
        }
    }, [item])

    return (
        <div>
            <h1>{name}</h1>
            <h4>{desc}</h4>
        </div>
    )
}

export default AccordionItem;