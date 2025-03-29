import Navbar from './Navbar'
import Container from './Container'
import Slider from './Slider'
import BestCategories from './BestCategories'
import LastElectronicPrd from './LastElectronicPrd'
import Footer from './Footer'
import LastHomePrd from './LastHomePrd'
import ToolTip from './HoverEvent/ToolTip'
import LastDiscount from './DiscountHomePage/LastDiscount'

interface ILayoutProps {
    children: React.ReactNode
}
function MyLayout({ children }: ILayoutProps) {

    return (
        <div>
            <Navbar />
            <div className='container-fluid mt-4 rounded-b-[225px]'>
                <div className="grid grid-cols-12 bg-blue-50">
                    <div className="col-start-2 col-span-10 2xl:col-start-3 2xl:col-span-8 ">
                        <Slider />
                    </div>
                    <div className="col-start-2 col-span-10 2xl:col-start-3 2xl:col-span-8 mt-6 ">
                        <BestCategories />
                    </div>

                </div>
                <div className="grid grid-cols-12 bg-blue-50 py-16 rounded-b-[80%]">
                </div>
                <div className="grid grid-cols-12 mt-20 ">
                    <div className="col-start-2 col-span-10 2xl:col-start-3 2xl:col-span-8 mt-6 z-20">
                        <LastElectronicPrd />
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-20 ">
                    <div className='col-span-1 bg-gradient-to-b from-blue-50 to-transparent rounded-tl-full '></div>
                    <div className="col-start-3 col-span-8 mt-6 z-20">
                        <LastHomePrd />
                    </div>
                    <div className='col-start-12 col-span-1 bg-gradient-to-b from-blue-50 to-transparent rounded-tr-full'></div>

                </div>

                <div className="grid grid-cols-12 mt-20 bg-blue-50">
                    <div className='col-span-full bg-white rounded-b-[80%] py-16'></div>
                    <div className="col-start-3 col-span-8 ">
                        <LastDiscount />
                    </div>
                    <div className='col-span-full bg-white rounded-t-[80%] py-16'></div>

                </div>
                <div className="grid grid-cols-12 mt-20 ">
                    <div className="col-start-3 col-span-8 mt-6 z-20">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLayout