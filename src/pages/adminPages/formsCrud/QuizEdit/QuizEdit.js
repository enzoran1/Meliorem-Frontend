import React, { useEffect } from "react";
import { getQuiz, patchQuiz } from "../../../../modules/apis/QuizAPI";
import styles from "./QuizEdit.module.scss";
import Load from "../../../../components/Load/Load";
import FormContainer from "../../../../components/forms/containers/FormContainer/FormContainer";
import InputText from "../../../../components/forms/inputs/InputText/InputText";
import InputArea from "../../../../components/forms/inputs/InputArea/InputArea";
import ButtonDefaultLogoRigth from "../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth";
import InputSelect from "../../../../components/forms/inputs/InputSelect/InputSelect";
import InputsNumber from "../../../../components/forms/inputs/InputsNumber/InputsNumber";
import { getAllSpeaker } from "../../../../modules/apis/SpeakerAPI";

const QuizEdit = ({ id, navigation }) => {
  const [quiz, setQuiz] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const[timeToPerformAll, setTimeToPerformAll] = React.useState("");
  const [publicQuiz, setPublicQuiz] = React.useState("");
  const [speakerId, setSpeakerId] = React.useState(0);
  const [speakers, setSpeakers] = React.useState(null);
  const [theme, setTheme] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(true);


  const SpeakersList = speakers?.map((speaker) => {
    return {
      value: speaker.id,
      label: speaker.userInfo.firstName + " " + speaker.userInfo.name,
    };
  });

  function onSubmit() {
    console.log({ description, title, timeToPerformAll, "public" : publicQuiz,theme });
    patchQuiz(
      sessionStorage.getItem("token"),
      id,
      { description, title, timeToPerformAll,public : publicQuiz,speakerId ,theme},
      (response) => {
        console.log("Quiz updated");

        navigation("/quizz");
      },
      (error) => {
        console.log(error);
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
        setTimeToPerformAll(data.timeToPerformAll);
        setPublicQuiz(data.public);
        setSpeakerId(data.speakerInfo.speakerId);
        setTheme(data.theme);

      },
      (error) => {
        console.log(error);
      }
    );
    getAllSpeaker( sessionStorage.getItem("token"), (data) => {
      setSpeakers(data);
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
          <InputText
            placeholder="Theme"
            type="text"
            value={quiz.theme}
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          />
          <InputArea
            placeholder="Description"
            value={quiz.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <InputSelect
          titleSelect="crée par :"
          onChange={(e) => {
            setSpeakerId(e.target.value);
          }}
          >
            {SpeakersList?.map((speaker,index) => {
              return (
                <option key={index} value={speaker.value} selected={speaker.value === speakerId} >{speaker.label}</option>
              );
            })}
            </InputSelect>

          <InputsNumber
            value={quiz.timeToPerformAll}
            onChange={(e) => {
              setTimeToPerformAll(e.target.value);
            }}
          />
          <InputSelect
          titleSelect={quiz.public ? "en ligne" : "hors ligne"}
          onChange={(e) => {
            setPublicQuiz(e.target.value);
            console.log("public quiz definie a : " + e.target.value);
          }}
          >
            <option value={1} selected={quiz.public}>en ligne</option>
            <option value={0} selected={!quiz.public}>hors ligne</option>
            </InputSelect>

          <ButtonDefaultLogoRigth onClick={onSubmit} title="Envoyer" />
        </div>
      </FormContainer>
    </div>
  );
};

QuizEdit.propTypes = {};

QuizEdit.defaultProps = {};

export default QuizEdit;
