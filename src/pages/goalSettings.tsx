import { useRef } from 'react';
import { ref, getDatabase, set } from 'firebase/database';
import { useObject } from 'react-firebase-hooks/database';

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import firebaseApp from '../config/firebaseApp';

const database = getDatabase(firebaseApp);

export function GoalSettingsPage(props) {
    const calorieRef = useRef();
    const meditationRef = useRef();
    const [myGoalSnapshots, myGoalLoading] = useObject(ref(database, 'diet-goal/' + props.user.uid));

    if (myGoalLoading) {
        return <p>Loading...</p>
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        set(ref(database, 'diet-goal/' + props.user.uid), {
            calorie: calorieRef.current.value,
            meditation: meditationRef.current.value
        });
    }    

    return (
        <div>
            <h1>Goal setting page</h1>
            <form onSubmit={onSubmitHandler}>
                <Input value={myGoalSnapshots.val() ? myGoalSnapshots.val().calorie : null} forwardedRef={calorieRef} placeholder='Calorie Goal' />
                <Input value={myGoalSnapshots.val() ? myGoalSnapshots.val().meditation : null} forwardedRef={meditationRef} placeholder='Meditation Goal (In Minutes)' />
                <Button type='submit'>Save</Button>
            </form>
        </div>
    )
}