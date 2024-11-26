import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import Slider from '../SwiperSlider/Slider'
import Controller from '../ControllerBlock/Controller';
import { RootState, store } from '../../State/store';
import { globalSlice } from '../../State/GlobalState/globalSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { page } from '../../State/Pages/page';
import CirclePoints from '../Circle/CirclePoints';

export const moveTo = (num: number) => {
    store.dispatch(globalSlice.actions.moveToChosen(num))
    // устанавливаем значение page
    store.dispatch(page.actions.setPage(num))
    console.log("page-", page);
}

export default function MainSection() {
    const globalState = useSelector((state: RootState) => state.globalState)
    const Page = useSelector((state: RootState) => state.page)

    return (
        <>
            <section className='main_section'>
                <div className='history_dates-container'>
                    <div className="gradient_el"></div>
                    <div className='dates'>
                        <span>Исторические даты</span>
                    </div>
                </div>
                <div className='circle_wrapper'>
                    <CirclePoints />
                </div>
                <div className='lineX'></div>
                <div className='lineY'></div>
                <div className="date_container">
                    <p className="date_from">{
                        Page === 1 ? 2015 :
                            Page === 2 ? 2018 :
                                Page === 3 ? 2020 :
                                    Page === 4 ? 2021 :
                                        <></>}</p>
                    <p className="date_to">{
                        Page === 1 ? 2018 :
                            Page === 2 ? 2020 :
                                Page === 3 ? 2021 :
                                    Page === 4 ? 2022 :
                                        <></>}</p>
                </div>
                <Controller />
                <Slider />
            </section>

        </>
    )
}