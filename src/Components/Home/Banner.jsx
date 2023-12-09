import img1 from '../../assets/images/970.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'

const Banner = () => {
    return (
        <>
            <div className='mb-12'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className='' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className='w-full' />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
        </>
    );
};

export default Banner;