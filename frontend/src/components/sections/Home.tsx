import LOGO from '../../../public/assets/logo/image-removebg-preview.png'
import DownArrow from '../../../public/assets/icons/downArrow.svg'
import Image from 'next/image';


const Home = ()=>{
    return(
        <div className="sections h-[800px]">
            <div className='flex justify-center items-center h-[700px]'> <Image src={LOGO} width={300} height={200}></Image>  </div>

            <div className='flex justify-center'><Image src={DownArrow} width={40} height={40}></Image> </div>
        </div>
    )
} 
export default Home;