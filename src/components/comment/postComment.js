import React, {Component} from 'react';

export default class PostComment extends Component {
    constructor() {
        super();
        this.handlePostComment = this.handlePostComment.bind(this);
    }

    handlePostComment() {
        this.props.handlePost();
    }

    render() {
        return (
            <div>
                <div>
                    <label>User :
                    </label>
                    <input type="text" size="20" ref={(input) => this.userName = input}/></div>
                <div>
                    <label>Comment :
                    </label>
                    <input type="text" size="50" ref={(input) => this.comment = input}/>
                </div>
                <button onClick={this.handlePostComment}>Submit Comment</button>
            </div>

        )
    }
}
