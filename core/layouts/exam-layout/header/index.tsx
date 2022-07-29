import Button from "@mui/material/Button";
import React from "react";
import  styles from '../../../../styles/examination.module.scss';
import Permissions from '../../../components/Permissions'
import TimerIcon from '@mui/icons-material/Timer';
interface IProps {
    className: string;
}
interface IState {
remainigTime: string;
}
export class Header extends React.Component<IProps,IState> {
    private readonly duration = 30; // in minutes
    private finalTime = 0;
    constructor(props: IProps) {
        super(props);
        this.state = {
            remainigTime: this.getFormattedTime(0)
        }
    }
    getFormattedTime = (m: number) => {
        const h = Math.floor(m / 60);
        m = m % 60;
        console.log(m);
        return `${h}h ${m <= 0 ? '00' : m.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })}m`;
    }

    componentDidMount = () => {
        const timerCode = () => {
            const availableTime = Math.ceil((this.finalTime - Date.now()) / minute); // in minutes
            this.setState({remainigTime: this.getFormattedTime(availableTime)});
            if (availableTime <= 0) {
                clearInterval(timer);
                //Show prompt here
            }
        }
        const minute = 60 * 1000;
        this.finalTime = Date.now() + this.duration * minute;
        timerCode();
        const timer = setInterval(() => {
            timerCode();
        }, minute);
    }

    render = () => {
        return <div className={this.props.className + ' ' + styles.headerOuter + ' flex justify-between items-center'} >
            <Permissions />
        <div className={this.props.className + ' flex justify-center items-center'} >
            <Button className="primary-button dark-bg" variant="contained" disableElevation>First module</Button>
            <div className={styles.stepperBar}></div>
            <Button className="primary-button light-bg" variant="contained" disableElevation>Second module</Button>
            <div className={styles.stepperBar}></div>
            <Button className="primary-button light-bg" variant="contained" disableElevation>Third module</Button>
        </div>
            <div className={styles.timer + ' flex flex-row'}>
                <TimerIcon className={'material-icons-outlined ' + styles.matTimerIcon}/>
                {this.state.remainigTime}</div>
            <Button className={'primary-button danger-bg '+ styles.submitButton} variant="contained" disableElevation>Submit</Button>
        </div>;
    }
}
