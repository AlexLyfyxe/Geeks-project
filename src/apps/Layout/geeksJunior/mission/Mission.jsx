import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setContent } from '../../../../store/contentSlice';
import { data } from './data';
import './mission.css'

function MissionAndValues() {
  const dispatch = useDispatch();
  const { items } = data;

  useEffect(() => {
    items.forEach((item) => {
      dispatch(setContent(item));
    });
  }, [dispatch, items]);

  return (
    <div className="mission-container">
      <h1 className="title">Миссия и ценности</h1>
      <div className="columns">
        {items.map((item) => (
          <div key={item.id} className="column">
            <div className="column-title">{item.title}</div>
            <div className="column-subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionAndValues;