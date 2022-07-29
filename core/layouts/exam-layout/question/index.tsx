import React from "react";
import  styles from '../../../../styles/examination.module.scss';

export class Question extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    render = () => {
        return <div className={styles.questionOuter + ' flex'}>
            <div className={styles.questionInner + ' flex rounded-3xl'}>
                <div className={styles.questionDeepInner + ' rounded-3xl'}>

                </div>

            </div>
        </div>;
    }
}
