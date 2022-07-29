import React from 'react';
import { Footer } from '../../core/layouts/exam-layout/footer';
import { Header } from '../../core/layouts/exam-layout/header';
import { LeftSidebar } from '../../core/layouts/exam-layout/left-sidebar';
import { Question } from '../../core/layouts/exam-layout/question';
import  styles from '../../styles/examination.module.scss';
class Examination extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    render = () => {
        return <div className="min-h-screen flex flex-col">
            <Header className="h-15-vh"/>
            <div className="flex flex-row h-75-vh">
                <LeftSidebar className={styles.maxWidth340}/>
                <Question/>
            </div>
            <Footer className="h-10-vh"/>
        </div>;
    }
}

export default Examination;
