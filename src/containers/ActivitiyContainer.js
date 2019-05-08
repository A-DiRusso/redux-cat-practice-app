import { connect } from 'react-redux';
import ActivityComponent from '../components/ActivityComponent';
import {
    setActivityNap,
    setActivityEat,
    setActivityPlay,
    setActivityDrool,
} from '../actions-reducers';

const mapStateToProps = state => {
    return {
        activity: state.activity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClickEat: () => {
            dispatch(setActivityEat());
        },
        handleClickNap: () => {
            dispatch(setActivityNap());
        },
        handleClickPlay: () => {
            dispatch(setActivityPlay());
        },
        handleClickDrool: () => {
            dispatch(setActivityDrool());
        },
    };
};

const makeSmartComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const ActivitiesComponent = makeSmartComponent(ActivityComponent);
export default ActivitiesComponent;