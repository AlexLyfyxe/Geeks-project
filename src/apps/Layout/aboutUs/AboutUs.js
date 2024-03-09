import React from 'react';
// import 'react-redux'
// import MainAboutUp from '../mainAbout/MainAboutUp';
import HistoryAdd from '../historyAdd/HistoryAdd'
import OurValues from "../ourValues/OurValues";
import WorkBlock from "../work/WorkBlock";
import Qualities from "../Qualities/Qualities";
// import OurTeam from "./blocks/ourTeam/OurTeam";


const AboutUs = () => {
    return (
        <>
            {/* <MainAboutUp/> */}
            <HistoryAdd/>
            <OurValues/>
            <WorkBlock/>
            <Qualities/>
            {/*<OurTeam/>*/}
        </>
    );
};

export default AboutUs;