import { FC } from 'react';
import styles from './index.module.scss';

type DepartmentCardProps = {
  title: string;
  description: string;
};

const DepartmentCard: FC<DepartmentCardProps> = ({ title, description }) => {
  return (
    <div className={styles.departmentCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DepartmentCard;


{/* < DepartmentCard title={"вэб"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} />  <br />
< DepartmentCard title={"приложения"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} /> <br />
< DepartmentCard title={"blockchain"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} />  <br />
< DepartmentCard title={"игры"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} />  <br />
< DepartmentCard title={"дизайн"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} />  <br />
< DepartmentCard title={"интернет-маркетинг"} description={"Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем."} />  <br /> */}