import React,{Component} from 'react';

//Subject라는 컴포넌트를 만들겠다라는 의미이며 render는 꼭 있어야한다.
class Subject extends Component{
    render(){
        return (
            <header>
                <h1><a  href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        )
    }
}

export default Subject;