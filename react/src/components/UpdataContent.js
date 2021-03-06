import React,{Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.data.id,
            title: this.props.data.title,
            desc:this.props.data.desc
        }
    }
    inputFromHandler(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                        onSubmit={function(e){
                            e.preventDefault();
                            this.props.onSubmit(
                                this.state.id,
                                e.target.title,
                                e.target.desc);
                        }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.inputFromHandler.bind(this)}
                            ></input></p>
                    <p>
                        <textarea 
                        onChange={this.inputFromHandler.bind(this)}
                        name="desc" 
                        placeholder="description" 
                        value={this.state.desc}></textarea>
                    </p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;