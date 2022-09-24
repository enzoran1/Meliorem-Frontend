import React from "react";
import styles from "./Users.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllWithPageUser, removeUser } from "../../../modules/apis/UserAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";
import paginations from "../../../modules/Paginations";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";


const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  let query = useQuery();

  function onSearchSubmit(text){
    setSearch(text)
    if (text == "") {
      navigate("/users");
      return;
    }
    navigate({
      pathname: '/users',
      search: '?search='+text,
    })
  }
    

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
      ,search ===""?null:search
    );
  }

  function onChangePage(page) {
    setPage(page);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setSearch(query.get("search"));
    }, 10);
    refreshUsers();
     // eslint-disable-next-line
  }, [page,search]);

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
      <TableAdmin titles={["Nom", "Prénom", "Email", "Rôle","date","En ligne"]} onSearchSubmit={onSearchSubmit}>
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
              formatDate(user.createdAt), 
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
