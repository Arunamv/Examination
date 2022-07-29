import Button from "@mui/material/Button";
import React from "react";
import  styles from '../../../../styles/examination.module.scss';
interface IProps {
    className: string;
}
export class LeftSidebar extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    render = () => {
        return <div className={this.props.className + ' flex ' + styles.sideBarOuterDiv}>
            <div className={styles.sideBarInnerDiv + ' rounded-3xl flex flex-col justify-start'}>
                <span className="text-lg font-bold">Questions</span>
                <div className="overflow-auto">
                <div className="flex flex-row flex-wrap mt-4">
                    {
                    new Array(35).fill(1).map((_, i) => {
                       return <Button key={i + 1} className={( i !== 0 ? styles.inActiveButton : 'dark-bg') +  ' primary-button dark-bg max-width-q-btn'} variant="contained" disableElevation>{i + 1}</Button>
                    })
                }
                </div>
                </div>
            </div>
        </div>;
    }
}
