import axios from "axios";
import notificationIcon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./style.css";

type Props = {
  saleId: number;
}

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(() => {
      console.log("SUCESSO");
    })
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn-container" onClick={ () => handleClick(saleId) }>
      <div className="dsmeta-red-btn">
        <img src={notificationIcon} alt="Notificar" />
      </div>
    </div>
  )
}

export default NotificationButton;