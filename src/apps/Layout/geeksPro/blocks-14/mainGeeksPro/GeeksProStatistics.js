import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const NumberCounter = ({ start, end, text }) => {
    const [count, setCount] = useState(start);
    const counterRef = useRef(null);

    const { t } = useTranslation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let timer;
                        const step = (end - start) / 100;
                        const updateCount = () => {
                            setCount((prevCount) => {
                                const nextCount = prevCount + step;
                                if ((step > 0 && nextCount < end) || (step < 0 && nextCount > end)) {
                                    return nextCount;
                                } else {
                                    return end;
                                }
                            });
                        };
                        timer = setInterval(updateCount, 15);
                        return () => {
                            clearInterval(timer);
                        };
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [start, end]);

    return (
        <>
            <h4 className="num_count" ref={counterRef}>
                {Math.round(count)}
            </h4>
            <p>
                {text}
            </p>
        </>
    );
};

export default NumberCounter;

