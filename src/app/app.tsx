
import Footer from "../shared/ui/footer";
import Header from "../shared/ui/header";
import DepartmentsWidget from "../widgets/departments-widget";
import StartBlock from "../widgets/start-widget";
import styles from "./app.module.scss";
import SwiperCardContainer from "../widgets/swiper-widget";

function App() {

  return (
    <div className={styles.page}>
      
< Header />
<StartBlock />
<DepartmentsWidget />
<SwiperCardContainer />
<Footer />      
</div>

  );
}

export default App;
