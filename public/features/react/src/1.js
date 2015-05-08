/**
 * @class 1
 * @description
 * @time 2015-04-11 10:40
 * @author StarZou
 **/

var body = document.body,
    headerDiv = document.getElementById('header'),
    contentDiv = document.getElementById('content');

/**
 * CommentBox
 */
var CommentBox = React.createClass({

    componentDidMount: function () {

    },

    componentDidUpdate: function () {

    },

    componentWillMount: function () {

    },

    componentWillReceiveProps: function () {

    },

    componentWillUnmount: function () {

    },

    componentWillUpdate: function () {

    },

    getInitialState: function () {
        return {
            date  : Date.now(),
            name  : 'CommentBox',
            labels: ['帅气']
        };
    },

    saveData: function (event, reactId) {
        // description component
        var description = this.refs.description;

        // description DOM Node
        var descriptionNode = description.getDOMNode();

        // value
        var value = descriptionNode.value.trim();

        if (value) {
            var state = this.state;
            state.labels.push(value);
            this.setState(state);

            descriptionNode.value = '';
            console.log('value : ', value);
        }
    },

    render: function () {
        return (
            <div className="comment-box">
                <h1>Hello, world! I am a CommentBox.</h1>

                <div>
                    <label>
                        <p>描述 : {this.state.labels.join(' , ')}</p>
                        <input type="text" placeholder="添加描述" ref="description"/>
                        <button onClick={this.saveData}>添加</button>
                    </label>
                </div>

                <CommentList data={this.props.data}/>

                <CommentForm />
            </div>
        );
    }
});


/**
 * CommentList
 */
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        );
    }
});


/**
 * CommentForm
 */
var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="comment-form">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});


/**
 * Comment
 */
var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="comment-author">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});

var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];


/**
 * render
 */
React.render(<h1>Hello world!</h1>, headerDiv);

React.render(
    <CommentBox data={data}/>,
    contentDiv
);
