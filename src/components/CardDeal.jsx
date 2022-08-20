import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`} >
        <h2 className={`${styles.heading2} tracking-[0.01em]`}>
          You do the business, <br className='sm:block hidden'/>
          we’ll handle the money.
        </h2>

        <p className={`${styles.paragraph}`}>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card deal" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal;