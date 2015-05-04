/**
 * @class 1
 * @description
 * @time 2015-04-11 10:40
 * @author StarZou
 **/

var body = document.body,
    headerDiv = document.getElementById('header'),
    contentDiv = document.getElementById('content');

React.render(<h1>Hello world!</h1>, headerDiv);

//var HobbyBox = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <label>爱好：</label>
//                <select>
//                    <option>value 1</option>
//                    <option>value 2</option>
//                    <option>value 3</option>
//                </select>
//            </div>
//        );
//    }
//});

//React.render(<HobbyBox />, contentDiv);

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

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="comment-form">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

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

React.render(
    <CommentBox data={data}/>,
    contentDiv
);
