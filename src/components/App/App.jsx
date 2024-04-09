import { useState } from "react";
import { useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

const getValues = () => {
  const savedValues = localStorage.getItem("valuesData");
  return savedValues !== null
    ? JSON.parse(savedValues)
    : {
        good: 0,
        neutral: 0,
        bad: 0,
      };
};
export default function App() {
  const [values, setValues] = useState(getValues);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;

  useEffect(() => {
    localStorage.setItem("valuesData", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        addValue={updateFeedback}
        feedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 && <Feedback values={values} total={totalFeedback} />}
      {totalFeedback <= 0 && <Notification />}
    </>
  );
}
