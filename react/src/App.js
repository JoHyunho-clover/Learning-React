import './App.css';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import Control from './components/Control'
import React,{Component} from 'react';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdataContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:"read",
      selected_content_id:2,
      subject:{title:'WEB', sub: 'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interative'}
      ]
    }
  }
  getReadContent(){
    var i=0;
      while(i<this.state.contents.length){
        var data= this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          return data;
          break;
        }
        i=i+1;
      }
  }
  getContent(){
    var _title, _desc,_article=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc} />;

    }else if(this.state.mode==='read'){
      var _content = this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc} />;

    }else if(this.state.mode==='create'){
      _article=<CreateContent onSubmit={function(_title, _desc){
        this.max_content_id=this.max_content_id+1;
      //  this.state.contents.push(
      //    {id:this.max_content_id, title:_title,desc:_desc})
        var _contents=this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc})
          
        this.setState({
          contents:_contents
        });
        }.bind(this)} />
    
    }else if(this.state.mode==='update'){
      _content=this.getReadContent();
      _article=<UpdateContent data={_content} onSubmit={function(_title, _desc){
        this.max_content_id=this.max_content_id+1;
        var _contents=this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc})
          
        this.setState({
          contents:_contents
        });
        }.bind(this)} />

    }
    return _article;
  }
  render(){
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          />
        <TOC data={this.state.contents}
            onChangePage={function(id){
              this.setState({
                mode:'read',
                selected_content_id:Number(id)})
        }.bind(this)}/>
        <Control onChangePage={function(_mode){
          this.setState({mode:_mode})
        }.bind(this)}/>
        {this.getContent()}
      </div>
    );
  }
}

//delte는 버튼을 누를때 실제로 삭제되는 것을 원해 이때 링크를 쓰면 안된다.
export default App;
