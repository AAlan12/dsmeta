import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  salaId: number;
}

function handleClick(id:number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response =>{
    console.log("SUCESSO")
  });
}

function NotificationButton({salaId}: Props) {
  return (
    <div className="dsmeta-red-bnt" onClick={()=> handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
