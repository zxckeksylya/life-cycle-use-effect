import React from "react";

type LyfecycleClassComponentState = {
    count:number
}

type LyfecycleClassComponentProps = object

export class LyfecycleClassComponent extends React.Component<LyfecycleClassComponentProps,LyfecycleClassComponentState>{
    constructor(props: LyfecycleClassComponentProps){
        super(props);
        this.state = {count:0}
    }

    shouldComponentUpdate(): boolean {
        return !!(this.state.count % 2)
    }

    componentDidMount(): void {
        console.log('class: componentDidMount')
        fetch('https://todo-redev.herokuapp.com/api/users')
            .then((value)=>value.json())
            .then(value=>console.log(value))
            .catch(()=>console.log('произошла ошибка подключения'))
    }

    componentDidUpdate(): void {
        
        console.log('class: componentDidUpdate')
        console.log(`counter: ${this.state.count}`)
    }

    componentWillUnmount(): void {
        console.log('class: componentWillUnmount')
    }

    incrimentCount = ()=>{
        this.setState({count:this.state.count + 1})
    }

    render(): React.ReactNode {
        const {count } = this.state

        return (<div>
            <div>классовый компонент</div>
            <div>{count}</div>
            <button onClick={this.incrimentCount}>+</button>
        </div>)
    }
}