import LOGO from '../../../public/assets/logo/image-removebg-preview.png'
import DownArrow from '../../../public/assets/icons/downArrow.svg'
import Image from 'next/image';


const Home = ()=>{
    return(
        <div className="sections h-[800px]">
            <div className='flex justify-center mt-10 items-center h-[600px]'> <Image src={LOGO} alt='...' width={300} height={200}></Image>  </div>

            <div className='flex justify-center animate-bounce'><Image src={DownArrow} alt='...' width={40} height={40}></Image> </div>
        </div>
    )
} 
export default Home;