import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from './contentSlice';
import data from './data';
import styles from './mission.css';

function MissionAndValues() {
  const dispatch = useDispatch();
  const { items } = data;
  const { education, future, openness, help } = useSelector((state) => state.content);

  useEffect(() => {
    items.forEach((item) => {
      dispatch(setContent(item));
    });
  }, [dispatch, items]);

  return (
    <>
    <h1>Миссия и ценности</h1>
      <div className={styles.div}>
        {items.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.subtitle}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MissionAndValues;