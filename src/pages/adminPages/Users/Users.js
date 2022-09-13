import React from "react";
import styles from "./Users.module.scss";
import { useNavigate } from "react-router-dom";
import { getAllWithPageUser, removeUser } from "../../../modules/apis/UserAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";
import paginations from "../../../modules/Paginations";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();


    

  function refreshUsers() {
    setIsLoading(true);
    getAllWithPageUser(
      sessionStorage.getItem("token"),
      5,
      page,
      (usersFetched) => {
        setIsLoading(false);
        setUsers(usersFetched.data);
        setTotalPage(usersFetched.totalPage);
       
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
    refreshUsers();
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
    <div className={styles.Users} data-testid="Users">
      <TableAdmin titles={["Nom", "Prénom", "Email", "Rôle","date","En ligne"]}>
        {users.map((user, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/users/view/${user.id}`);
            }}
            onClickEdit={() => navigate(`/users/edit/${user.id}`)}
            onClickDelete={() => {
              removeUser(
                sessionStorage.getItem("token"),
                user.id,
                (response) => refreshUsers(this),
                (error) => console.error(error)
                
                
              );
            }}
            key={index}
            attributes={[user.name, user.firstname, user.email, user.roles[0],
              user.createdAt,
            user.activated ? <BadgeFilterSolid
            style={{ backgroundColor: "green" }}
            title="En ligne"
            /> :
            <BadgeFilterSolid
            style={{ backgroundColor: "red" }}
            title="Hors-ligne"
            />]}
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

Users.propTypes = {};

Users.defaultProps = {};

export default Users;
