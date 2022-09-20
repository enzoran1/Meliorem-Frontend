import React, { useEffect } from "react";
import styles from "./CoursEdit.module.scss";
import { getCourse, patchCourse } from "../../../../modules/apis/CourseAPI";
import Load from "../../../../components/Load/Load";
import FormContainer from "../../../../components/forms/containers/FormContainer/FormContainer";
import InputArea from "../../../../components/forms/inputs/InputArea/InputArea";
import InputText from "../../../../components/forms/inputs/InputText/InputText";
import ButtonDefaultLogoRigth from "../../../../components/buttons/ButtonDefaultLogoRigth/ButtonDefaultLogoRigth";
import InputSelect from "../../../../components/forms/inputs/InputSelect/InputSelect";

const CoursEdit = ({ id, navigation }) => {
  const [courses, setCourses] = React.useState({});
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isPublic, setIsPublic] = React.useState("");


  const [isLoading, setIsLoading] = React.useState(true);

  function onSubmit() {
    console.log({ description, title,isPublic});
    patchCourse(
      sessionStorage.getItem("token"),
      id,
      { description, title , isPublic},
      (response) => {
        console.log("Courses updated");

        navigation("/cours");
      }
    );
  }

  useEffect(() => {
    getCourse(
      id,
      sessionStorage.getItem("token"),
      (data) => {
        setIsLoading(false);
        setCourses(data);
        setDescription(data.description);
        setTitle(data.phone);
        setIsPublic(data.isPublic);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [id]);

  if (isLoading) return <Load />;

  return (
    <div className={styles.CoursEdit} data-testid="CoursEdit">
      <FormContainer titleForm="Edition Cours">
        <div className={styles.Cours__Form}>
          <InputText
            placeholder="Titre"
            type="text"
            value={courses.title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <InputArea
            placeholder="Description"
            type="text"
            value={courses.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
           <InputSelect
          titleSelect={courses.isPublic ? "en ligne" : "hors ligne"}
          onChange={(e) => {
            setIsPublic(e.target.value);
          }}
          >
            <option value={1} selected={courses.isPublic}>true</option>
            <option value={0} selected={!courses.isPublic}>false</option>
          </InputSelect>

          


          <ButtonDefaultLogoRigth onClick={onSubmit} title="Envoyer" />
        </div>
      </FormContainer>
    </div>
  );
};

CoursEdit.propTypes = {};

CoursEdit.defaultProps = {};

export default CoursEdit;
