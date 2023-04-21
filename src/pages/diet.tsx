import { ref, getDatabase, push, update, remove } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { DietSummary } from '../components/diet/dietSummary';
import { FoodList } from '../components/diet/foodList';

import firebaseApp from '../config/firebaseApp';

const database = getDatabase(firebaseApp);

export function DietPage(props) {
    const [foodListSnapshots, foodListLoading] = useList(ref(database, 'food-items'));
    const [myDietListSnapshots, myDietListLoading] = useList(ref(database, 'my-diet-list/' + props.user.uid));

    const loadedFoodList = [];
    if ((!foodListLoading && foodListSnapshots) && (!myDietListLoading && myDietListSnapshots)) {
        const myDietList = [];
        myDietListSnapshots.map((v) => {
            myDietList.push({
                ...v.val(),
                dbId: v.key
            })
        });
        foodListSnapshots.map((v, index) => {
            loadedFoodList.push({
                id: v.key,
                ...v.val(),
                dbId: myDietList.find(item => item.id === `${index}`) ? myDietList.find((item) => item.id === `${index}`).dbId : null,
                quantity: myDietList.find(item => item.id === `${index}`) ? myDietList.find((item) => item.id === `${index}`).quantity : 0
            })
        });
    } else {
        return <p>Loading...</p>
    }

    function addFoodToListHandler(foodId) {
        push(ref(database, 'my-diet-list/' + props.user.uid), {
            id: `${foodId}`,
            quantity: 1
        });
    }
    function updateCountOnList(foodId, count) {
        if (count < 1) {
            remove(ref(database, `my-diet-list/${props.user.uid}/${foodId}`));
        } else {
            update(ref(database, `my-diet-list/${props.user.uid}/${foodId}`), {
                quantity: count
            })
        }
    }
    return (
        <div>
            <h1>My Diet</h1>
            <DietSummary total={0}/>
            <FoodList
                list={loadedFoodList}
                addToList={addFoodToListHandler}
                updateCount={updateCountOnList}
            />
        </div>
    );
}