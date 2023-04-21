import { NavLink } from 'react-router-dom';

import classes from './appBar.module.scss';

export function AppBar() {
    return (
        <div className={classes.AppBar}>
            <div className={classes.Logo}>
                <img src='/assets/logo.png' alt='Mindful moves' />
            </div>
            <div className={classes.Navigation}>
                <NavLink className={({ isActive }) => `${classes.NavigationLink}${isActive ? ` ${classes.Active}` : ''}`} to='/'>
                    <span className='material-symbols-outlined'>
                        exercise
                    </span>
                    Diet
                </NavLink>
                <NavLink className={({ isActive }) => `${classes.NavigationLink}${isActive ? ` ${classes.Active}` : ''}`} to='/meditation'>
                    <span className="material-symbols-outlined">
                        self_improvement
                    </span>
                    Meditation
                </NavLink>
                <NavLink className={({ isActive }) => `${classes.NavigationLink}${isActive ? ` ${classes.Active}` : ''}`} to='/goal-settings'>
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                    <span>
                        Goal setting
                    </span>
                </NavLink>
            </div>
        </div>
    )
}