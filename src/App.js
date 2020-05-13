import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import { PoemList } from './PoemList';

class App extends React.Component {
  
  state = {
    poems: poems
  }

  addPoem = (poem) => {
    console.log("I was clicked", poem)
    this.setState({
      poems: [...this.state.poems, poem]
    })
  }
 
  deletePoem = (selectedPoem) => {
    console.log(selectedPoem)
    this.setState({
      poems: this.state.poems.filter(poem => (poem.name !== selectedPoem.name && poem.content !== selectedPoem.content)) 
    })
  }

  editPoem = (content,selectedPoem) => {
    console.log(selectedPoem)
    console.log(content)

    this.setState({
      poems: this.state.poems.map(poem => {
        if(poem.name === selectedPoem.name) {
          return {name: selectedPoem.name, content: content}
        } 
        else {
          return poem
        }
      })
    })
  }
  
 
  
  render(){
    return (
      <div className="ui container">
        <PoemForm 
        poemList={this.state.poems}
        addPoem={this.addPoem}
        />
        <PoemList 
        poemList={this.state.poems}
        deletePoem={this.deletePoem}
        editPoem={this.editPoem}
        />
      </div>
    );
  }

}

export default App;
