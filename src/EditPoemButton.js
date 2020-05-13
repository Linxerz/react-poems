import React from 'react';

export class EditPoemButton extends React.Component {

    state = {
        isShowingModal: false,
        content: this.props.poem.content
    }

    setContent = e => this.setState({ content: e.target.value })

    showModal = () => this.setState({ isShowingModal: true })

    hideModal = () => this.setState({ isShowingModal: false })

    handleSubmit = () => {
        this.hideModal()
        // What else should we do onSubmit?
        // console.log(this.state.content)
        this.setState({
            content: this.state.content
        })
        this.props.poem.editPoem(this.state.content,this.props.poem)
    }

    render(){
        const { isShowingModal } = this.state
        return(
            <>
                <button className="ui purple button" onClick={this.showModal}>Edit</button>
                <div 
                    className={`ui modal ${isShowingModal ? 'active' : ''}`} 
                    style={{ position: 'fixed', top: '10%', left: '10%'}}
                >
                    <div className="header">
                        {this.props.poem.name}
                    </div>
                    <div className="ui form content">
                        <div className="field">
                            <label>Content: </label>
                            <textarea value={this.state.content} onChange={this.setContent} />
                        </div>
                    </div>
                    <div className="actions">
                        <button className="ui green button" onClick={this.handleSubmit}>Submit</button>
                        <button className="ui red button" onClick={this.hideModal}>Cancel</button>
                    </div>
                </div>
            </>
        )
    }


}