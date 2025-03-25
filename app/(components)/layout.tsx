import Navbar from './Navbar'
import Container from './Container'
import Slider from './Slider'
import BestCategories from './BestCategories'
import LastElectronicPrd from './LastElectronicPrd'
import Footer from './Footer'
import LastHomePrd from './LastHomePrd'

interface ILayoutProps {
    children: React.ReactNode
}
function MyLayout({ children }: ILayoutProps) {

    return (
        <div>
            <Navbar />
            <div className='container-fluid  mt-4 rounded-b-[225px]'>
                <div className="grid grid-cols-12 bg-blue-50 ">
                    <div className="col-start-3 col-span-8 ">
                        <Slider />
                    </div>
                    <div className="col-start-3 col-span-8 mt-6 ">
                        <BestCategories />
                    </div>

                </div>
                <div className="grid grid-cols-12 mt-20 ">
                    <div className="col-start-3 col-span-8 mt-6 z-20">
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