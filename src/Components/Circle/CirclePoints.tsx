import { LegacyRef, RefObject, useRef } from 'react';
import { moveTo } from '../../Components/MainSection/MainSection'
import gsap from 'gsap'

export default function CirclePoints() {

    const circleRef = useRef<SVGCircleElement | null>(null); // Ссылка на круг
    const buttonRef1 = useRef<HTMLButtonElement | null>(null); // Ссылка на кнопку
    const buttonRef2 = useRef<HTMLButtonElement | null>(null); // Ссылка на кнопку
    const buttonRef3 = useRef<HTMLButtonElement | null>(null); // Ссылка на кнопку
    const buttonRef4 = useRef<HTMLButtonElement | null>(null); // Ссылка на кнопку
    const rotationTimeline = useRef<gsap.core.Timeline | null>(null); // Таймлайн анимации

    const handleRotate = (num: number, derg: number) => {
        // Создание или продолжение вращения
        moveTo(num)
        if (!rotationTimeline.current) {
            rotationTimeline.current = gsap.timeline({ repeat: 1 }); // Бесконечное вращение
            rotationTimeline.current.to(circleRef.current, {
                rotate: derg, // Поворот на 360 градусов
                transformOrigin: "50% 50%", // Центр вращения
                duration: 1, // Длительность вращения
                ease: "none",
            });
        } else {
            rotationTimeline.current.play(); // Если анимация была приостановлена
        }
    };

    return (
        <>
            <svg className='circle'>
                <g className='rotatingGroup' ref={circleRef}>
                    <circle cx="50%" cy="50%" r="50%" fill="transparent" stroke='rgba(56,119,238,1)' strokeWidth={1} />
                    <foreignObject className='point' x={75} y={73}>
                        <button className='btn1' ref={buttonRef1} onClick={() => handleRotate(1, 90)}>1state</button>
                    </foreignObject>
                    <foreignObject className='point' x={445} y={73}>
                        <button className='btn2' ref={buttonRef2} onClick={() => handleRotate(2, 0)}>2state</button>
                    </foreignObject>
                    <foreignObject className='point' x={65} y={438}>
                        <button className='btn3' ref={buttonRef3} onClick={() => handleRotate(3, 180)}>3state</button>
                    </foreignObject>
                    <foreignObject className='point' x={468} y={425}>
                        <button className='btn4' ref={buttonRef4} onClick={() => handleRotate(4, 270)}>4state</button>
                    </foreignObject>
                </g>
            </svg>
        </>
    )
}
