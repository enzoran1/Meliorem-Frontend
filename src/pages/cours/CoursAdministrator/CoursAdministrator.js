import React from "react";

import styles from "./CoursAdministrator.module.scss";
import { getAllCourse } from "../../../modules/apis/CourseAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";

const CoursAdministrator = (props) => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    getAllCourse(
      sessionStorage.getItem("token"),
      (coursesFetched) => {
        setCourses(coursesFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <div className={styles.CoursAdministrator} data-testid="CoursAdministrator">
      <TableAdmin titles={["Intervenant", "Title", "Date"]}>
        {courses.map((course, index) => (
          <TableBody
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
