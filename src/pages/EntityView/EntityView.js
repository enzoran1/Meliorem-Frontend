import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import CrudView from "../../components/CrudView/CrudView";
import { getContact } from "../../modules/apis/ContactAPI";
import { getCourse } from "../../modules/apis/CourseAPI";
import { getQuiz } from "../../modules/apis/QuizAPI";
import BadgeFilterSolid from "../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import Load from "../../components/Load/Load";
import { getUser } from "../../modules/apis/UserAPI";
import { getGroup } from "../../modules/apis/GroupAPI";
import { getBadge } from "../../modules/apis/BadgeAPI";

const EntityView = () => {
  const navigation = useNavigate();
  const [data, setData] = React.useState([]);
  let { entity, id } = useParams();

  useEffect(() => {
    if (entity === "contact") {
      getContact(
        id,
        sessionStorage.getItem("token"),
        (contact) => {
          setData([
            { id: "Id", value: contact.id },
            { id: "Téléphone", value: contact.phone },
            { id: "Type de contact", value: contact.typeContactName },
            { id: "Email", value: contact.userInfo.email },
            { id: "Prénom", value: contact.userInfo.firstname },
            { id: "Nom", value: contact.userInfo.name },
          ]);
        },
        (error) => {
          navigation("/");
        }
      );
    } else if (entity === "cours") {
      getCourse(id, sessionStorage.getItem("token"), (course) => {
        setData([
          { id: "id intervenant", value: course.speakerId },
          { id: "nom intervenant", value: course.speakerName },

          { id: "Id cours", value: course.id },
          { id: "Titre", value: course.title },
          { id: "Description", value: course.description },
          { id: "Date de création", value: course.publishDate },
          { id: "Date dernière edition", value: course.lastEditDate },
          { id: "Catégorie", value: course.courseCategoryName },
          {
            id: "en ligne",
            value:
              course.isPublic === true ? (
                <BadgeFilterSolid
                  title="en ligne"
                  style={{ backgroundColor: "green" }}
                />
              ) : (
                <BadgeFilterSolid
                  title="en cours"
                  style={{ backgroundColor: "orange" }}
                />
              ),
          },
        ]);
      });
    } else if (entity === "quiz") {
      getQuiz(id, sessionStorage.getItem("token"), (quiz) => {
        setData([
          { id: "id intervenant", value: quiz.speakerId },
          { id: "nom intervenant", value: quiz.speakerName },

          { id: "Id quiz", value: quiz.id },
          { id: "Titre", value: quiz.title },
          { id: "Description", value: quiz.description },
          { id: "Date de création", value: quiz.publishDate },
          { id: "Date dernière edition", value: quiz.lastEditDate },
        ]);
      });
    } else if (entity === "users") {
      getUser(id, sessionStorage.getItem("token"), (users) => {
        setData([
          { id: "id user", value: users.id },
          { id: "prenom user", value: users.firstname },
          { id: "nom user", value: users.name },
          { id: "Date de création", value: "date de création" },
        ]);
      });
    } else if (entity === "group") {
      getGroup(id, sessionStorage.getItem("token"), (group) => {
        setData([
          { id: "id user", value: group.id },
          { id: "nom", value: group.name },
        ]);
      });
    } else if (entity === "badges") {
      getBadge(id, sessionStorage.getItem("token"), (badges) => {
        setData([
          { id: "id user", value: badges.id },
          { id: "nom", value: badges.name },
          { id: "description", value: badges.description },
        ]);
      });
    } 
    else {
      navigation("/");
    }
  }, [entity, id, navigation]);

  if (data && data.length > 0) {
    return <CrudView data={data} />;
  } else {
    return (
      <div>
        <Load />
      </div>
    );
  }
};

EntityView.propTypes = {};

EntityView.defaultProps = {};

export default EntityView;
