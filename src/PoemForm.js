import React from 'react';


export class PoemForm extends React.Component{

    state = {
        name: '',
        content: ''
    }

    setName = e => this.setState({ name: e.target.value })

    setContent = e => this.setState({ content: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        let newPoem = this.state
        // What should we do here?
        this.props.addPoem(newPoem)
        this.setState({
            state: this.state
        })
    }

    render(){
        return (
            <div className="ui form">
                <h1>Create Poem</h1>
                <div className="field">
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.setName}/>
                </div>
                <div className="field">
                    <label>Content:</label>
                    <textarea value={this.state.content} onChange={this.setContent}/>
                </div>
                <button className="ui green button" onClick={this.handleSubmit} >Create</button>
            </div>
        )
    }


}