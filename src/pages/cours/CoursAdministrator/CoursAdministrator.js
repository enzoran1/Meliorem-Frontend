import React from "react";

import styles from "./CoursAdministrator.module.scss";
import { getAllCourse, removeCourse } from "../../../modules/apis/CourseAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";

const CoursAdministrator = (props) => {
  const [courses, setCourses] = React.useState([]);
  const navigate = useNavigate();

  function refreshCourse() {
    getAllCourse(
      sessionStorage.getItem("token"),
      (coursesFetched) => {
        setCourses(coursesFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  React.useEffect(() => {
    refreshCourse();
  }, []);

  return (
    <div className={styles.CoursAdministrator} data-testid="CoursAdministrator">
      <TableAdmin titles={["Intervenant", "Title", "Date"]}>
        {courses.map((course, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/cours/view/${course.id}`);
            }}
            onClickDelete={() => {
              removeCourse(
                sessionStorage.getItem("token"),
                course.id,
                (response) => {
                  refreshCourse();
                  console.log(response);
                }
              );
            }}
            key={index}
            attributes={[course.speakerName, course.title, course.publishDate]}
          />
        ))}
      </TableAdmin>
    </div>
  );
};

CoursAdministrator.propTypes = {};

CoursAdministrator.defaultProps = {};

export default CoursAdministrator;
