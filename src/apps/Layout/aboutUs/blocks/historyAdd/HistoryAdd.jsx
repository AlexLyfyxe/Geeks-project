import React from "react";
import { motion } from "framer-motion";
import Content from "./contentHistory.json";
import '../historyAdd/historyAddStyle.css'

const TextAnimation = {
    hidden: {
        y: 120,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
            repeat: 0,
        }
    },
};

const HistoryAddBlock = ({ item }) => (
    <div key={item.id}>
        {item.content && (
            <motion.div
                variants={TextAnimation}
                className={item.name}>
                <p>{item.content}</p>
            </motion.div>
        )}
        {item.image && (
            <motion.div
                variants={TextAnimation}
                className={item.name}>
                <img src={item.image} alt="" />
            </motion.div>
        )}
    </div>
);

export const HistoryAdd = () => {

    const filterContent = Content.filter(
        (item) => item.content || item.image
    );

    return (
        <motion.section
            className="history"
            initial="hidden"
            whileInView="visible"
            variants={TextAnimation}
        >
            <div className="container">
                <div className="history__contents">
                    <motion.h2 variants={TextAnimation}>ИСТОРИЯ СОЗДАНИЯ</motion.h2>
                    <div className="content">
                        {Content.map((item) => (
                            <HistoryAddBlock key={item} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default HistoryAdd;
