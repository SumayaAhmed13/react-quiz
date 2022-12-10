import Checkbox from "../Login/Checkbox";
import clesses from "./Answers.module.css";
export const Answers = () => {
  return (
    <div className={clesses.answers}>
      <Checkbox className={clesses.answer} text="Answers" />
    </div>
  );
};

export default Answers;
