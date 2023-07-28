import { ReactComponent as Check } from "../../assets/images/white_check.svg";
import style from "./thanksforcontactingus.module.scss"
export default function ThanksForContactingUs() {
  return (
    <div className={style.thanks_wrapper}>
      <Check />
      <h4 className={style.thanks_title} >Благодорим за обращение</h4>
      <p>Мы свяжемся с вами в ближайшее время</p>
    </div>
  )
}