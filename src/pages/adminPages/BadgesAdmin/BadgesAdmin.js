import React from "react";
import styles from "./BadgesAdmin.module.scss";
import { Link, useNavigate } from "react-router-dom";
import {  getAllWithPageBadge, removeBadge } from "../../../modules/apis/BadgeAPI";
import TableBody from "../../../components/tables/TableBody/TableBody";
import TableAdmin from "../../../components/tables/TableAdmin/TableAdmin";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";
import paginations from "../../../modules/Paginations";
import ButtonFixedRigth from "../../../components/buttons/ButtonFixedRigth/ButtonFixedRigth";

const BadgesAdmin = () => {
  const [badges, setBadges] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const navigate = useNavigate();

  function refreshBadges() {
    setIsLoading(true);
    getAllWithPageBadge(
      sessionStorage.getItem("token"),
      5,
      page,
      (badgesFetched) => {
        setIsLoading(false);
        setBadges(badgesFetched.data);
        setTotalPage(badgesFetched.totalPage);
        
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
    refreshBadges();
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
    <div className={styles.BadgesAdmin} data-testid="BadgesAdmin">
      <TableAdmin titles={[ "Nom", "Description"]}>
        {badges.map((badges, index) => (
          <TableBody
            onClickView={() => {
              navigate(`/badges/view/${badges.id}`);
            }}
            onClickEdit={() => navigate(`/badges/edit/${badges.id}`)}
            onClickDelete={() => {
              removeBadge(
                sessionStorage.getItem("token"),
                badges.id,
                (response) => refreshBadges(this),
                (error) => console.error(error)
                
              );
            }}
            key={index}
            attributes={[ badges.name, badges.description]}
          />
        ))}
      </TableAdmin>
      <div className={styles.Pagination_Container}>{pagination}</div>
      <Link to="/badges/add">
      <ButtonFixedRigth
        bgBtn="#ffffff"
        style={{ backgroundColor: "#4F46E5" }}
      />
      </Link>
    </div>
  );
};

BadgesAdmin.propTypes = {};

BadgesAdmin.defaultProps = {};

export default BadgesAdmin;
