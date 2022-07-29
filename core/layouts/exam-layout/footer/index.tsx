import Button from "@mui/material/Button";
import React from "react";
import  styles from '../../../../styles/examination.module.scss';

interface IProps {
    className: string;
}
export class Footer extends React.Component<IProps,{}> {
    constructor(props: IProps) {
        super(props);
    }

    render = () => {
        return <div className={this.props.className + ' flex flex-row items-center'}>
            <div className={styles.maxWidth340}></div>
            <div className={styles.innerFooter + ' flex justify-between'}>
            <Button className="primary-button disabled-bg" variant="contained" disableElevation>{'< Back'}</Button>
            <Button className="primary-button dark-bg" variant="contained" disableElevation>{'Next >'}</Button>
            </div>
        </div>;
    }
}
