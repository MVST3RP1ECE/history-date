import { Swiper, SwiperSlide } from 'swiper/react';
import SliderInfo from '../SliderInfo/SliderInfo'
import { array1, array2, array3, array4 } from '../Facts/Facts';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import { facts } from 'Components/types';
import { useSelector } from 'react-redux';
import { RootState } from 'State/store';

export default function Slider() {
    const Page = useSelector((state: RootState) => state.page)
    return (
        <section className='slider_section'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
                spaceBetween={50}
                slidesPerView={3}
                className='swiper'
            >
                {Page === 1 ?
                    array1.map((iter: facts) => {
                        console.log(Page);

                        return (
                            <SwiperSlide key={iter.id}>
                                <SliderInfo
                                    year={iter.year}
                                    fact={iter.fact} />
                            </SwiperSlide>
                        )
                    }) : <></>
                }
                {Page === 2 ?
                    array2.map((iter: facts) => {
                        console.log(Page);

                        return (
                            <SwiperSlide key={iter.id}>
                                <SliderInfo
                                    year={iter.year}
                                    fact={iter.fact} />
                            </SwiperSlide>
                        )
                    }) : <></>
                }
                {Page === 3 ?
                    array3.map((iter: facts) => {
                        console.log(Page);

                        return (
                            <SwiperSlide key={iter.id}>
                                <SliderInfo
                                    year={iter.year}
                                    fact={iter.fact} />
                            </SwiperSlide>
                        )
                    }) : <></>
                }
                {Page === 4 ?
                    array4.map((iter: facts) => {
                        console.log(Page);
                        return (
                            <SwiperSlide key={iter.id}>
                                <SliderInfo
                                    year={iter.year}
                                    fact={iter.fact} />
                            </SwiperSlide>
                        )
                    }) : <></>
                }
            </Swiper>
        </section>
    )
}
