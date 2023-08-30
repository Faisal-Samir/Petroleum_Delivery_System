import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slider1 from '../../../../public/Petroleum.png';
import slider2 from '../../../../public/We will deliver well grade petroleum.png';
import slider3 from '../../../../public/PETROLEUM1.png';

function Home() {
    return (
        <div className='mt-10'>
            <section className='h-96'>
                <Carousel className='w-11/12 mx-auto ' autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false}>
                    <div >
                        <img src={slider1} alt='Slider 2' className='h-96' />
                    </div>
                    <div >
                        <img src={slider2} alt='Slider 1' className='h-96' />
                    </div>
                    <div >
                        <img src={slider3} alt='Slider 1' className='h-96' />
                    </div>
                </Carousel>
            </section>
        </div>
    );
}

export default Home;
