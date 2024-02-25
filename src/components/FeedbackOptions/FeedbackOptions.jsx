import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  options = ['good', 'neutral', 'bad'],
  onLeaveFeedback,
}) => {
  return (
    <div className={s.feedback}>
      <h1>Please leave feedback</h1>
      <div className={s.section}>
        {options.map(option => (
          <button
            className={s.btn}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <h2>Statistics</h2>
    </div>
  );
};
