import React, { useEffect } from "react";
import { getQuiz, patchQuiz } from "../../../../modules/apis/QuizAPI";
import styles from "./QuizEdit.module.scss";
import Load from "../../../../components/Load/Load";
import FormContainer from "../../../../components/forms/containers/FormContainer/FormContainer";
import InputText from "../../../../components/forms/inputs/InputText/InputText";
import InputArea from "../../../../components/forms/inputs/InputArea/InputArea";
import ButtonDefaultLogoRigth from "../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth";

const QuizEdit = ({ id, navigation }) => {
  const [quiz, setQuiz] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ description, title });
    patchQuiz(
      sessionStorage.getItem("token"),
      id,
      { description, title },
      (response) => {
        console.log("Quiz updated");

        navigation("/quizz");
      }
    );
  }

  useEffect(() => {
    getQuiz(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setQuiz(data);
        setDescription(data.description);
        setTitle(data.phone);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [id]);

  if (isLoading) return <Load />;

  return (
    <div className={styles.QuizEdit} data-testid="QuizEdit">
      <FormContainer titleForm="Edition Quiz">
        <div className={styles.Quiz__Form}>
          <InputText
            placeholder="Titre"
            type="text"
            value={quiz.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputArea
            placeholder="Description"
            value={quiz.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <ButtonDefaultLogoRigth onClick={onSubmit} title="Envoyer" />
        </div>
      </FormContainer>
    </div>
  );
};

QuizEdit.propTypes = {};

QuizEdit.defaultProps = {};

export default QuizEdit;
