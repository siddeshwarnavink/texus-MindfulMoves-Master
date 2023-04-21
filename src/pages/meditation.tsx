import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export function MeditationPage(props) {
    const [isStart, setIsStart] = useState(false);
    const [time, setTime] = useState(0);
    const minuteRef = useRef();

    if (isStart) {
        return (
            <div>
                <h1>Timer: {time}</h1>
                <Button onClick={() => setIsStart(false)}>Stop</Button>
            </div>
        )
    }
    return (
        <div>
            <h1>Meditation</h1>
            <Input forwardedRef={minuteRef} placeholder='Enter minutes' />
            <Button onClick={() => {
                setIsStart(true);
                setTime(minuteRef.current.value);
            }}>Start</Button>
        </div>
    )
}