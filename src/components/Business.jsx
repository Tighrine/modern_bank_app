import { features } from '../constants';
import styles from '../styles';
import Button from './Button';

const FeaturesCard = ({ id, icon, title, content, index }) => {
  return (
      <div key={id} className={`flex flex-row p-6 rounded-2xl feature-card ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
          <div className={`h-16 w-16 border-non rounded-full ${styles.flexCenter} bg-dimBlue`}>
              <img src={icon} className="w-[50%] h-[50%] object-contain" />
          </div>
          <div className="flex-1 flex-col ml-3">
              <h1 className="font-poppins text-lg font-semibold leading-[23.4px] mb-1">
                  {title}
              </h1>
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                  {content}
              </p>
          </div>
      </div>
  );
}

const Business = () => {
  return (
    <section className={`flex flex-1 ss:flex-row flex-col justify-between`} >

      <div className='flex flex-col'>
        <h2 className={styles.heading2} >
          You do the business, <br className='sm:block hidden'/>
          we’ll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px]`} >With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>

      <div className='text-white' >
        {features.map(( feature, index) => (
          <FeaturesCard key={feature.id} {...feature} index={index}  />
        ))}
      </div>

    </section>
  )
}

export default Business;