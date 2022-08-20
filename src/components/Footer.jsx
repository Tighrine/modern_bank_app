import { logo, copyright } from "../assets";
import styles from "../styles";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col" >
      <div className={`flex sm:flex-row flex-col justify-between mt-[82px]`}>
        <div className="flex flex-col ">
          <img src={logo} alt="hoobank" className="w-[257px] " />
          <p className={`w-[350px] ${styles.paragraph} leading-8 pl-5 mt-10`}  >
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {
          footerLinks.map(footerLink => (
            <div className="flex flex-col" >
              <h1 className="font-poppins font-[500] text-[18px] leading-[27px] text-white " >
                {footerLink.title}
              </h1>
              <ul className="mt-3" >
                {
                  footerLink.links.map(link => (
                    <li className="font-poppins font-normal text-[16px] leading-[27px] text-dimWhite mt-3 " >
                      <a href={link.link}>
                        {link.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>

      <div className="border-t border-[#3F3E45] mt-[40px] "/>

      <div className="flex sm:flex-row flex-col py-4">
        
        <div className="flex flex-row items-center space-x-3 flex-1">
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-dimWhite " >Copyright</p>
          <img src={copyright} alt="copyright" className="w-[16px] h-[16px] object-contain " />
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-dimWhite " >2021 HooBank. All Rights Reserved.</p>
        </div>

        <div className="flex flex-row space-x-3 items-center m-auto xs:mt-3 sm:mt-0">
          {
            socialMedia.map(item => (
              <a href={item.link} key={item.id}>
                <img src={item.icon} alt={item.id} className="w-[21px] h-[21px] object-contain " />
              </a>
            ))
          }
        </div>

      </div>

    </section>
  )
}

export default Footer; 