import React from "react";
import BadgeFilterSolid from "../../../components/badges/BadgeFilterSolid/BadgeFilterSolid";
import BadgesSucess from "../../../components/badges/BadgesSucess/BadgesSucess";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";
import Load from "../../../components/Load/Load";
import Trophy from "../../../components/medialles/Trophy/Trophy";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Badges1 from "../../../images/classement/badge1.png";
import Badges2 from "../../../images/classement/badge2.png";
import Badges3 from "../../../images/classement/badge3.png";
import Badges4 from "../../../images/classement/badge4.png";
import paginations from "../../../modules/Paginations";

import styles from "./ListeBadgesAutres.module.scss";
import { getAllWithPageBadge } from "../../../modules/apis/BadgeAPI";

const ListeBadgesAutres = () => {

  const [badges, setBadges] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  function refreshBadges() {
    setIsLoading(true);
    getAllWithPageBadge(
      sessionStorage.getItem("token"),
      8,
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
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;


  
  return (
    <div className={styles.ListeBadgesAutres} data-testid="ListeBadgesAutres">
      <div className={styles.ListeBadgesAutre_Search}>
        <div className={styles.Search_Top}>
          <InputSearchComplex />
        </div>
        <div className={styles.Search_Bottom}>
          <BadgeFilterSolid
            style={{ backgroundColor: "orange", cursor: "pointer" }}
            title="Obtenu"
          />
          <BadgeFilterSolid
            style={{ backgroundColor: "violet", cursor: "pointer" }}
            title="En cours"
          />
          <BadgeFilterSolid
            style={{ backgroundColor: "green", cursor: "pointer" }}
            title="A venir"
          />
        </div>
      </div>
      <div className={styles.ListeBadgesAutre_Container}>
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges1}
          trophy={<Trophy />}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges2}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges3}
          trophy={<Trophy />}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges4}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges1}
          trophy={<Trophy />}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges2}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges3}
          trophy={<Trophy />}
        />
        <BadgesSucess
          description="la description du badges sucess frfr rfrg fr rffre frf"
          title="Le titre"
          image={Badges4}
        />
      </div>
      <div className={styles.ListeBadgesAutre_Pagination}>
        {pagination}
      </div>
    </div>
  );
}

ListeBadgesAutres.propTypes = {};

ListeBadgesAutres.defaultProps = {};

export default ListeBadgesAutres;
