import React from "react";
import styles from "./Users.module.scss";
import { useNavigate } from "react-router-dom";
import { getAllUser, removeUser } from "../../../modules/apis/UserAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  function refreshUsers() {
    getAllUser(
      sessionStorage.getItem("token"),
      (usersFetched) => {
        setUsers(usersFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  React.useEffect(() => {
    refreshUsers();
  }, []);

  return (
    <div className={styles.Users} data-testid="Users">
      <TableAdmin titles={["Nom", "Prénom", "Email", "Rôle"]}>
        {users.map((user, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/users/view/${user.id}`);
            }}
            onClickDelete={() => {
              removeUser(
                sessionStorage.getItem("token"),
                user.id,
                (response) => {
                  refreshUsers();
                  console.log(response);
                }
              );
            }}
            key={index}
            attributes={[user.name, user.firstname, user.email, user.roles[0]]}
          />
        ))}
      </TableAdmin>
    </div>
  );
};

Users.propTypes = {};

Users.defaultProps = {};

export default Users;
