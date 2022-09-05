import React from "react";

import styles from "./CoursAdministrator.module.scss";
import {
  getAllWithPageCourse,
  removeCourse,
} from "../../../modules/apis/CourseAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";
import paginations from "../../../modules/Paginations";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";

const CoursAdministrator = (props) => {
  const [courses, setCourses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshCourse() {
    setIsLoading(true);

    getAllWithPageCourse(
      sessionStorage.getItem("token"),
      5,
      page,
      (coursesFetched) => {
        setIsLoading(false);
        setCourses(coursesFetched.data);
        setTotalPage(coursesFetched.totalPage);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  function onChangePage(page) {
    setPage(page);
  }

  React.useEffect(() => {
    refreshCourse();
    // eslint-disable-next-line
  }, [page]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 2)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;

  return (
    <div className={styles.CoursAdministrator} data-testid="CoursAdministrator">
      <TableAdmin titles={["Intervenant", "Title", "Description", "Date"]}>
        {courses.map((course, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/cours/view/${course.id}`);
            }}
            onClickEdit={() => navigate(`/cours/edit/${course.id}`)}
            onClickDelete={() => {
              removeCourse(
                sessionStorage.getItem("token"),
                course.id,
                (response) => refreshCourse(this),
                (error) => console.error(error)
              );
            }}
            key={index}
            attributes={[
              course.speakerName,
              course.title,
              course.description,
              course.publishDate,
            ]}
          />
        ))}
      </TableAdmin>
      <div className={styles.Pagination_Container}>{pagination}</div>
    </div>
  );
};

CoursAdministrator.propTypes = {};

CoursAdministrator.defaultProps = {};

export default CoursAdministrator;
