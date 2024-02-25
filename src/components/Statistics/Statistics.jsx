import React from 'react';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={s.stat}>
      <p className={s.text}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text}>Bad: {bad}</p>
      <p className={s.textsum}>Total: {total}</p>
      <p className={s.textsum}>Positive feedback: {positivePercentage}</p>
    </div>
  );
};
