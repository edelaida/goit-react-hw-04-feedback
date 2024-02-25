import React from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Button } from './Button.jsx';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = () => {
    setGood(prev => prev + 1);
    setNeutral(prev => prev + 1);
    setNeutral(prev => prev + 1);
  };
  //   this.setState({ [value]: this.state[value] + 1 });

  const countTotalFeedback = () => {
    return setGood + setNeutral + setBad;
    // return this.state.good + this.state.neutral + this.state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (setGood / (setGood + setNeutral + setBad)) * 100;
    // return (this.state.good / this.countTotalFeedback()) * 100;
  };

  return (
    <div>
      <Button></Button>
      <FeedbackOptions
        options={Object.keys(useState())}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      {countTotalFeedback() === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      )}
    </div>
  );
};

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = value => {
//     this.setState({ [value]: this.state[value] + 1 });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return (this.state.good / this.countTotalFeedback()) * 100;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Button></Button>
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onLeaveFeedback}
//         ></FeedbackOptions>
//         {this.countTotalFeedback() === 0 ? (
//           <p>There is no feedback</p>
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           ></Statistics>
//         )}
//       </div>
//     );
//   }
// }
