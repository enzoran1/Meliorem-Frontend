import React from "react";
import styles from "./BadgesAdmin.module.scss";
import { useNavigate } from "react-router-dom";
import { getAllBadge, removeBadge } from "../../../modules/apis/BadgeAPI";
import TableBody from "../../../components/tables/TableBody/TableBody";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";

const BadgesAdmin = () => {
  const [badges, setBadges] = React.useState([]);
  const navigate = useNavigate();

  function refreshBadges() {
    getAllBadge(
      sessionStorage.getItem("token"),
      (badgesFetched) => {
        setBadges(badgesFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  React.useEffect(() => {
    refreshBadges();
  }, []);

  return (
    <div className={styles.BadgesAdmin} data-testid="BadgesAdmin">
      <TableAdmin titles={["id", "Nom", "Description", "Nombre"]}>
        {badges.map((badges, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/badges-admin/view/${badges.id}`);
            }}
            onClickDelete={() => {
              removeBadge(
                sessionStorage.getItem("token"),
                badges.id,
                (response) => {
                  refreshBadges();
                  console.log(response);
                }
              );
            }}
            key={index}
            attributes={[badges.id, badges.name, badges.description]}
          />
        ))}
      </TableAdmin>
    </div>
  );
};

BadgesAdmin.propTypes = {};

BadgesAdmin.defaultProps = {};

export default BadgesAdmin;
