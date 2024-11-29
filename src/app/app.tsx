import Footer from "../shared/components/footer";
import Header from "../shared/components/header";
import DepartmentsBlock from "../shared/components/departments-block";
import StartBlock from "../shared/components/start-block";
import styles from "./app.module.scss";
import SwiperCardContainer from "../widgets/swiper-widget";
import GalleryWidget from "../widgets/gallery-widget";
import InformationBlock from "../shared/components/information-block";
import NewsBlock from "../shared/components/news-block";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <StartBlock />
      <DepartmentsBlock />
      <SwiperCardContainer />
      <InformationBlock />
      <GalleryWidget />
      <NewsBlock />
      <Footer />
    </div>
  );
}

export default App;
