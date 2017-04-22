import React, {Component} from 'react';

export default class ViewComment extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <label>
                        User :
                    </label>
                </div>
                <div>
                    <label>
                        Comment :
                    </label>
                </div>
                <button>Upvote
                </button>
                <button>DownVote</button >
                <button>Reply</button >
            </div>

        )
    }

}
