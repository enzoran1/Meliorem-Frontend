import React from "react";
import ButtonFilterBorder from "../../../components/buttons/ButtonFilterBorder/ButtonFilterBorder";
import ClassementBadges from "../../../components/classement/ClassementBadges/ClassementBadges";
import ClassementUserCard from "../../../components/classement/ClassementUserCard/ClassementUserCard";
import InputSearchComplex from "../../../components/forms/inputs/InputSearchComplex/InputSearchComplex";

import styles from "./ListeUtilisateursAutres.module.scss";
import Badges1 from "../../../images/classement/badge1.png";
import Badges2 from "../../../images/classement/badge2.png";
import Badges3 from "../../../images/classement/badge3.png";
import Badges4 from "../../../images/classement/badge4.png";
import GoldClass from "../../../components/medialles/GoldClass/GoldClass";
import BronzeClass from "../../../components/medialles/BronzeClass/BronzeClass";
import SilverClass from "../../../components/medialles/SilverClass/SilverClass";
import Pagination from "../../../components/pagination/Pagination/Pagination";
import Load from "../../../components/Load/Load";
import paginations from "../../../modules/Paginations";
import { getAllUser, getAllWithPageUser } from "../../../modules/apis/UserAPI";

const ListeUtilisateursAutres = () => {

  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);

  function refreshUsers() {
    setIsLoading(true);
    getAllWithPageUser(
      sessionStorage.getItem("token"),
      8,
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
    getAllUser(
      sessionStorage.getItem("token"),
      (usersFetched) => {
        setUsers(usersFetched);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [page]);

  let pagination = (
    <Pagination
      data={paginations(page, totalPage, 1)}
      onChangePage={onChangePage}
      actualPage={page}
    />
  );

  if (isLoading) return <Load />;

return(
  <div
    className={styles.ListeUtilisateursAutres}
    data-testid="ListeUtilisateursAutres"
  >
    <div className={styles.ListeUtilisateursAutres_Header}>
      <InputSearchComplex />
      <div className={styles.FlexCenter}>
        <div className={styles.Header_Filter}>
          <ButtonFilterBorder
            style={{ borderColor: "#556BDA", cursor: "pointer" }}
            title="croissant"
          />
          <ButtonFilterBorder
            style={{ borderColor: "#556BDA", cursor: "pointer" }}
            title="Decroissant"
          />
          <ButtonFilterBorder
            style={{ borderColor: "orange", cursor: "pointer" }}
            title="Mon scrore"
          />
        </div>
      </div>
    </div>
    <div className={styles.ListeUtilisateursAutres_Body}>
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        medaille={<GoldClass />}
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        medaille={<SilverClass />}
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        medaille={<BronzeClass />}
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
    </div>
    <div className={styles.ListeUtilisateursAutres_Footer}>
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
      <ClassementUserCard
        promotion="Developpeur full stack"
        name="Jean didier"
        imageFooters={[
          <ClassementBadges image={Badges1} />,
          <ClassementBadges image={Badges2} />,
          <ClassementBadges image={Badges3} />,
          <ClassementBadges image={Badges4} />,
        ]}
      />
    </div>
    <div className={styles.ListeUtilisateursAutres_Pagination}>
      {pagination}
    </div>
  </div>
);
}

ListeUtilisateursAutres.propTypes = {};

ListeUtilisateursAutres.defaultProps = {};

export default ListeUtilisateursAutres;
