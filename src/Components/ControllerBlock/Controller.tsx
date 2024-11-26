import { useSelector } from 'react-redux'
import { decrement, increment } from '../../State/Pages/page';
import { RootState, store } from '../../State/store'


export default function Controller() {

    const page = useSelector((state: RootState) => state.page)
    console.log(page);

    const next = () => {
        if (page < 4) {
            store.dispatch(increment())
        }
    }

    const prev = () => {
        if (page > 1) {
            store.dispatch(decrement())
        }
    }

    return (
        <div className='controller_wrapper'>
            <div className='state'>
                <p>0{page}/04</p>
            </div>
            <div className='controller_buttons'>
                <button className='btn_left'
                    onClick={() => prev()}></button>
                <button className='btn_right'
                    onClick={() => next()}></button>
            </div>
        </div>
    )
}
