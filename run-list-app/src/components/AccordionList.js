import React from 'react';
import AccordionItem from './AccordionItem';
import AccordionItemDetailList from "./AccordionItemDetailList";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Map from "./Map";

const AccordionList = (list) => {

    return (
        <div>
            {list.list.map((item, index) => {
                return (
                    <div key={index}>
                        <Accordion>
                            <AccordionSummary style={{backgroundColor: '#F3F3F3', borderBottomColor: 'red' }}>
                                <AccordionItem item={item}/>
                            </AccordionSummary>
                            <AccordionDetails style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <div>
                                    <AccordionItemDetailList list={item.points} />
                                </div>

                                <div style={{ width: '50%'}}>
                                    <Map list={item.points} center={item.point}/>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
};

export default AccordionList;