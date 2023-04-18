import {createContext} from 'react';
import {TimerContextType} from '../../types/store/timer/timer';

const TimerContext = createContext<TimerContextType>({} as TimerContextType);

export default TimerContext;
