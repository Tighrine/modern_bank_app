import { quotes } from "../assets";

const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div className='flex flex-col rounded-3xl feedback-card px-10 py-12 
    justify-between items-start max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5' >
      <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px] " />
      
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row justify-between items-start" >
        <img src={img} alt={img} className="w-[48px] h-[48px] mr-3 " />
        <div>
          <h1 className="font-poppins font-normal text-[20px] leading-8 text-white " >{name}</h1>
          <div className="font-poppins font-normal text-[16px] leading-6 text-dimWhite " >{title}</div>
        </div>
      </div>

    </div>
  )
}

export default FeedbackCard;