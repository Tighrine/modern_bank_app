import styles from "../styles";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`flex sm:flex-row flex-col w-full ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-3xl py-10 px-5`}>
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`} >Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`} >
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA;