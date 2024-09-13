import React from 'react';
import Description from "../../components/description/Description";
import styles from "./MainPage.module.css"

function MainPage() {
    const info={title: "Title", description: "description"}
    return (
        <div>
            <h2>Main page</h2>
            <Description title={info.title} description={info.description}/>
        </div>
    );
}

export default MainPage;