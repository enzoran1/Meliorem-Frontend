import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import CrudView from "../../components/CrudView/CrudView";
import { getContact } from "../../modules/apis/ContactAPI";
import { getCourse } from "../../modules/apis/CourseAPI";
import BadgeFilterSolid from "../../components/badges/BadgeFilterSolid/BadgeFilterSolid";

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
    } else {
      navigation("/");
    }
  }, [entity, id, navigation]);

  if (data && data.length > 0) {
    return <CrudView data={data} />;
  } else {
    return <div>Loading...</div>;
  }
};

EntityView.propTypes = {};

EntityView.defaultProps = {};

export default EntityView;
