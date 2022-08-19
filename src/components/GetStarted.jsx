import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} rounded-full bg-blue-gradient
    w-[140px] h-[140px] p-0.5 cursor-pointer`}>
      <div className={`flex flex-col justify-center items-start bg-primary
      w-[100%] h-[100%] rounded-full pl-[25%]`} >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-lg leading-6">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} className='w-6 h-6 object-contain' />
        </div>
        <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted;