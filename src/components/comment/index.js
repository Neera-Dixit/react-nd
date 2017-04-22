import React, {Component} from 'react';
import PostComment from './postComment';
import ViewComment from './viewComment';

export default class Comment extends Component {
    constructor() {
        super();
    }

    handlePost() {
        console.log("clicked")
    }

    render() {
        return (
            <div>
                <PostComment handlePost={this.handlePost}/>
                <hr/>
                <ViewComment/>
            </div>
        )
    }
}