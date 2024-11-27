
import Footer from "../shared/ui/footer";
import Header from "../shared/ui/header";
import InfoCard from "../shared/ui/info-card";
import styles from "./app.module.scss";

function App() {

  return (
    <div className={styles.page}>
      
< Header />

<InfoCard text={"Заказная разработка программного обеспечения"} />
<Footer />      
</div>

  );
}

export default App;
