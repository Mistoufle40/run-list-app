import React, { useEffect, useState } from 'react';
import AccordionList from "../components/AccordionList";

const HomePage = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const datas = await fetch(`https://api.ecourse-orientation.com/courses/`,
                {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
                })
                .then((response) => {
                    return(response.json()
                    .then((data) => {return(data)}))});
            return(datas);
        }
        fetchData().then((res) => {setList(res)});
    }, [])

    return (
        <div>
            <AccordionList list={list}/>
        </div>
    )
}

export default HomePage;