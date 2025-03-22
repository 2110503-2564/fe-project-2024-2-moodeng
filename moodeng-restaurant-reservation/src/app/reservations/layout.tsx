
import Reservationsmenu from "@/components/ReservationsMenu";
import styles from './reservations.module.css';
export default function ReservationLayout({children}:{children:React.ReactNode}) {
  return (
      <div className={styles.sectionlayout}>
        <Reservationsmenu/>
        {children}
      </div>
  );
}
