
import Footer from "../shared/ui/footer";
import Header from "../shared/ui/header";
import DepartmentsWidget from "../widgets/departments-widget";
import StartBlock from "../widgets/start-widget";
import styles from "./app.module.scss";

function App() {

  return (
    <div className={styles.page}>
      
< Header />
<StartBlock />
<DepartmentsWidget />
<Footer />      
</div>

  );
}

export default App;
