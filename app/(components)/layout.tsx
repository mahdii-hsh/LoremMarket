import Navbar from './Navbar'
import Container from './Container'
import Slider from './Slider'
import BestCategories from './BestCategories'

interface ILayoutProps {
    children: React.ReactNode
}
function MyLayout({ children }: ILayoutProps) {
    
    return (
        <div>
            <Navbar />
            <div className='container-fluid bg-blue-50 mt-4 rounded-b-[225px]'>
                <div className="grid grid-cols-12 ">
                    <div className="col-start-3 col-span-8 ">
                        <Slider />
                    </div>
                    <div className="col-start-3 col-span-8 mt-6">
                        <BestCategories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLayout