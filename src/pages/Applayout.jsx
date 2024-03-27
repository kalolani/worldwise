import styles from "./AppLayout.module.css";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
function Applayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default Applayout;
