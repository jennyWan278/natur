import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
// import {inject} from 'react-natural-store'
import inject from '../src/inject'
import './initStore';


const App = (props: {count: any, name: any}) => {
	const {count: {state, actions, maps}} = props;
	console.log('render');
	const cn = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nn = props.name.actions.changeName(props.name.state);
		console.log(nn);
	}
	const acn = (e: React.ChangeEvent<HTMLInputElement>) => {
		const a = props.name.actions.asyncChangeName(e.target.value)
			.then((ns: any) => {
				console.log(ns);
			})
		// console.log(a);
	};
    return (
        <>
            <button onClick={() => actions.inc(state)}>+</button>
            <span>{state.count}</span>
            <button onClick={() => actions.dec(state)}>-</button>
            <div>count is {maps.isOdd ? 'odd' : 'even'}</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
			{/* <button onClick={() => cn({value: state.})}>no change</button> */}
            changeName:
            <input
                type="text"
                value={props.name.state.name}
                onChange={cn}
            />
            <br/>
            asyncChangeName:
            <input
                type="text"
                value={props.name.state.name}
                onChange={acn}
            />
        </>
    )
}

const IApp = inject('count', 'name')(App);

ReactDOM.render(
    <IApp />,
    document.querySelector('#app')
);
