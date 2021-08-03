import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React,{Component} from 'react';
// import store from '../store';
// export default class extends Component{
//     state={number:store.getState().number}
//   //displaynumber가 바뀌지 않는다 store의 값이 바뀌었다고 해도 render가 다시 호출되지 않기 때문이다
//   //그래서 store의 값이 변경되었다는 것을 통보 받아야 하며 통보 받았을때 state값을 바꿔주면 render가 다시 호출된다.
//     constructor(props){
//         super(props);
//         //밑의 것은 store의 값이 변경되었을때 호출이 된다.
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this))
//     }
//     render(){
//         return <DisplayNumber number={this.state.number}/>
//     }
// }