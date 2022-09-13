import React from "react";
import styles from "./Group.module.scss";
import { getAllWithPageGroup, removeGroup } from "../../../modules/apis/GroupAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";
import Load from "../../../components/Load/Load";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import paginations from "../../../modules/Paginations";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";

const Group = () => {
  const [groups, setgroups] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshGroup() {
    setIsLoading(true);
    getAllWithPageGroup(
      sessionStorage.getItem("token"),
      5,
      page,
      (groupsFetched) => {
        setIsLoading(false);
        setgroups(groupsFetched.data);
        setTotalPage(groupsFetched.totalPage);
      
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
    refreshGroup();
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
    <div className={styles.Group} data-testid="Group">
      <TableAdmin titles={["Nom", "Nombre d'élèves"]}>
        {groups.map((groups, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/group/view/${groups.id}`);
            }}
            onClickEdit={() => navigate(`/group/edit/${groups.id}`)}
            onClickDelete={() => {
              removeGroup(
                sessionStorage.getItem("token"),
                groups.id,
                (response) =>refreshGroup(this),
                (error) => console.error(error)
                
              );
            }}
            key={index}
            attributes={[groups.name, groups.studentCount]}
          />
        ))}
      </TableAdmin>
      <div className={styles.Pagination_Container}>{pagination}</div>
      <ButtonFixedRigth
        bgBtn="#ffffff"
        style={{ backgroundColor: "#4F46E5" }}
      />
    </div>
  );
};

Group.propTypes = {};

Group.defaultProps = {};

export default Group;
