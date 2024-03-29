/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function TimerDiscount() {

    const [timerTarget, setTimerTarget] = useState(new Date('2024-04-30T17:00:00').getTime());
    const [timerNow, setTimerNow] = useState(new Date().getTime());

    useEffect(() => {
        const myInterval = setInterval(() => {
            setTimerNow(new Date().getTime());

            if(timerTarget - timerNow < 1) clearInterval(myInterval);
        }, 1000);

        return () => {
            clearInterval(myInterval);
        }
    }, []);
    
    function timer() {
        const selisihDalamDetik = (timerTarget - timerNow) / 1000;
        const hari = Math.floor(selisihDalamDetik / (3600 * 24));
        const jam = Math.floor((selisihDalamDetik / 3600) % 24);
        const sisaDetikDariJam = Math.floor(selisihDalamDetik % 3600);
        const menit = Math.floor(sisaDetikDariJam / 60);
        const detik = Math.floor(sisaDetikDariJam % 60);

        if(selisihDalamDetik < 1) return `Waktu Habis`;
        else return `${hari}d:${jam}h:${menit}m:${detik}s`;
    }

    return (
        <div className="counter-container">
            <div className="product-container">
                <span className="product">Tesla Roadster</span>
                <span className="discount">Discount 50%</span>
            </div>
            <span className="timer">{timer()}</span>
        </div>
    )
}

export default TimerDiscount;