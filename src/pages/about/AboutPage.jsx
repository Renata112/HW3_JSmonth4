import React from 'react';
import Description from "../../components/description/Description";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
    const info={title: "Title 2", description: "description 2"};
    return (
        <div>
            <h2>About page</h2>
            <Description title={info.title} description={info.description} />
        </div>
    );
};

export default AboutPage;