import LOGO from '../../../public/assets/logo/Lure.png'
import DownArrow from '../../../public/assets/icons/downArrow.svg'
import Image from 'next/image';


const Home = ()=>{
    return(
        <div className="sections xl:h-[900px] md:h-[700px]">
            <div className='flex justify-center mt-10 items-center xl:h-[700px] h-[500px]'> <Image src={LOGO} alt='...' className='xl:w-[300px] xl:h-[200px] sm:w-[180px] sm:h-[120px] w-[160px] h-[140px]'></Image>  </div>
            <div className='flex justify-center animate-bounce'><Image src={DownArrow} alt='...' className='w-7 h-7'></Image> </div>
        </div>
    )
}
export default Home;