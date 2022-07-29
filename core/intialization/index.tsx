import React from "react";
import Permissions from '../components/Permissions';
// All initialization will be done here
interface IState{
    num: number
}
export class Intialization extends React.Component<{},IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            num: 0
        }
    }

    componentDidMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
        let hidden = "hidden";
        const onChange = (event: Event) => {
            if(event){
                // alert('You cant switch between the tabs')
            }
            this.setState({num: this.state.num + 1})
        }

        // Standards:
        if (hidden in document)
            document.addEventListener("visibilitychange", onChange);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onChange);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onChange);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onChange);
        // IE 9 and lower:
        else if ("onfocusin" in document)
            (document as any).onfocusin = (document as any).onfocusout = onChange;
        // All others:
        else
            window.onpageshow = window.onpagehide
                = window.onfocus = window.onblur = onChange;
    }

    render = () => {
        return <></>;
    }
}
