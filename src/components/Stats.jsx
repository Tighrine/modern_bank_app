import styles from "../styles";
import { stats } from "../constants";

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map(({ id, title, value }, idx) => (
        <div key={id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Stats;