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
    render: function () {
        return (
            <div className="comment-box">
                <h1>Hello, world! I am a CommentBox.</h1>
                <CommentList />
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
        return (
            <div className="comment-list">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
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
