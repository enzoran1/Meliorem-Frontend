import React from "react";
import styles from "./Group.module.scss";
import { getAllGroup, removeGroup } from "../../../modules/apis/GroupAPI";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import TableBody from "../../../components/tables/TableBody/TableBody";
import { useNavigate } from "react-router-dom";

const Group = () => {
  const [groups, setgroups] = React.useState([]);
  const navigate = useNavigate();

  function refreshGroup() {
    getAllGroup(
      sessionStorage.getItem("token"),
      (groupsFetched) => {
        setgroups(groupsFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  React.useEffect(() => {
    refreshGroup();
  }, []);

  return (
    <div className={styles.Group} data-testid="Group">
      <TableAdmin titles={["Nom", "Nombre", "Date"]}>
        {groups.map((groups, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/groups/view/${groups.id}`);
            }}
            onClickDelete={() => {
              removeGroup(
                sessionStorage.getItem("token"),
                groups.id,
                (response) => {
                  refreshGroup();
                  console.log(response);
                }
              );
            }}
            key={index}
            attributes={[groups.name]}
          />
        ))}
      </TableAdmin>
    </div>
  );
};

Group.propTypes = {};

Group.defaultProps = {};

export default Group;
