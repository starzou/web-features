/**
 * @class 1
 * @description
 * @time 2015-04-11 10:40
 * @author StarZou
 **/

var TimerMixin = {
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },

    componentDidMount: function () {
        this.intervals = [];
    },

    componentDidUpdate: function () {
        //console.log('Timer : componentDidUpdate', arguments);
    },

    componentWillUnmount: function () {
        this.intervals.map(clearInterval);
    }
};

var Timer = React.createClass({

    mixins: [TimerMixin],

    getInitialState: function () {
        return {
            time: new Date()
        };
    },

    getDefaultProps: function () {
        return {
            startTime: new Date()
        };
    },

    updateTime: function () {
        this.setState({time: new Date()});
    },

    componentDidMount: function () {
        this.setInterval(this.updateTime, 1000);
    },

    render: function () {
        return (
            <div>
                {this.props.children}
                <span>启动时间 : {this.props.startTime.toLocaleString()}</span>
                <br/>
                <span>当前时间 : {this.state.time.toLocaleString()}</span>
            </div>
        );
    }

});

/**
 * CommentBox
 */
var CommentBox = React.createClass({

    // 实现双向绑定
    mixins: [React.addons.LinkedStateMixin],

    componentDidMount: function () {
        console.log('CommentBox : componentDidMount', arguments);
    },

    componentDidUpdate: function () {
        console.log('CommentBox : componentDidUpdate', arguments);
    },

    componentWillMount: function () {
        console.log('CommentBox : componentWillMount', arguments);
    },

    componentWillReceiveProps: function () {
        console.log('CommentBox : componentWillReceiveProps', arguments);
    },

    componentWillUnmount: function () {
        console.log('CommentBox : componentWillUnmount', arguments);
    },

    componentWillUpdate: function () {
        console.log('CommentBox : componentWillUpdate', arguments);
    },

    getInitialState: function () {
        return {
            date  : Date.now(),
            name  : 'CommentBox',
            labels: ['帅气'],
            title : 'Hello, world! I am a CommentBox.',
            fruits: []
        };
    },

    selectFruit: function (event) {
        var selectedOptions = event.target.selectedOptions;

        var fruits, index, length;

        if (selectedOptions.length) {

            fruits = [];
            index = 0;
            length = selectedOptions.length;

            for (; index < length; index++) {
                var value = selectedOptions[index].value;
                value && fruits.push(value);
            }

            this.setState({fruits: fruits});
        }
    },

    render: function () {
        return (
            <div className="comment-box">
                <h1 style={{color: '#9E0E76', fontSize: '26px'}}>{this.state.title}</h1>
                <input type="text" valueLink={this.linkState('title')}/>

                <div>
                    <span>你喜爱的水果 : {this.state.fruits.join(',')}</span>
                    <select multiple={true} value={this.state.fruits} onChange={this.selectFruit}>
                        <option value="">请选择</option>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="cranberry">Cranberry</option>
                    </select>
                </div>

                <CommentInput />

                <CommentList data={this.props.data}/>

                <CommentForm />
            </div>
        );
    }
});

var CommentInput = React.createClass({
    componentDidMount: function () {
        console.log('CommentInput : componentDidMount', arguments);
    },

    componentDidUpdate: function () {
        console.log('CommentInput : componentDidUpdate', arguments);
    },

    componentWillMount: function () {
        console.log('CommentInput : componentWillMount', arguments);
    },

    componentWillReceiveProps: function () {
        console.log('CommentInput : componentWillReceiveProps', arguments);
    },

    componentWillUnmount: function () {
        console.log('CommentInput : componentWillUnmount', arguments);
    },

    componentWillUpdate: function () {
        console.log('CommentInput : componentWillUpdate', arguments);
    },

    getInitialState: function () {
        return {
            labels: ['帅气'],
            text  : ''
        };
    },

    saveData: function (event, reactId) {
        event.preventDefault();

        // description component
        var description = this.refs.description;

        // description DOM Node
        var descriptionNode = description.getDOMNode();

        // value
        var value = descriptionNode.value.trim();

        if (value) {
            var newLabels = this.state.labels.concat([value]);

            this.setState({labels: newLabels, text: ''});

            console.log('value : %s , reactId : %s', value, reactId);
        }
    },

    inputText: function (event) {
        this.setState({text: event.target.value});
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.saveData}>
                    <label>
                        <p>描述 : {this.state.labels.join(' , ')}</p>
                        <input type="text" value={this.state.text} onChange={this.inputText} placeholder="添加描述" ref="description"/>
                        <button type="submit">添加</button>
                    </label>
                </form>
            </div>
        );
    }
});


/**
 * CommentList
 */
var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                <Comment key={index} author={comment.author}>
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

var titleTexts = {
    2: '<'
};

var titles = [
    <h1 key="1">Hello &middot; {titleTexts[2]} world!</h1>,
    <h3 key="2">By React.</h3>
];

/**
 * render
 */
React.render(
    <div>
        {titles}
        <Timer>
            <h3>Timer组件</h3>
        </Timer>
    </div>,
    headerDiv
);

var props = {
    type   : 'CommentBox',
    version: '1.0.0'
};

// 传参数方式
React.render(
    <CommentBox data={data} {...props}/>,
    contentDiv
);
