/**
 * @class index
 * @description react app index
 * @time 2015-06-09 22:44
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var app = document.querySelector('#app');
    console.log(app);

    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    var App = React.createClass({
        propTypes: {
            header   : React.PropTypes.object.isRequired,
            container: React.PropTypes.object.isRequired,
            footer   : React.PropTypes.object.isRequired
        },

        render: function () {
            return (
                <div id={this.props.app.id}>
                    <Header {...this.props.header}/>
                    <Container {...this.props.container}>
                        <h2>Container Title</h2>

                        <div>Container Content</div>
                    </Container>
                    <Footer {...this.props.footer}/>
                </div>
            );
        }
    });

    var Header = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    });

    var Container = React.createClass({
        getInitialState: function () {
            return {
                word : this.props.word,
                words: []
            };
        },

        handleChange: function (event) {
            this.setState({word: event.target.value});
        },

        handleAddClick: function () {
            if (!this.state.word) {
                return;
            }
            var words = this.state.words.concat([this.state.word]);
            this.setState({words: words, word: ''});
        },

        componentDidMount: function () {
            console.log(this.getDOMNode());
            console.log(this.refs.wordInput.getDOMNode());
        },

        render: function () {
            var titles = this.props.title.map(function (title, index) {
                return (<h1 key={index}>{title}</h1>);
            });

            var wordsElement = (
                <ul>
                    {
                        this.state.words.map(function (word, index) {
                            return (<li key={index}>{word}</li>);
                        })
                    }
                </ul>
            );

            return (
                <div>
                    <div>
                        <input type="text" ref="wordInput" value={this.state.word} onChange={this.handleChange}/>
                        <button onClick={this.handleAddClick}>Add</button>
                    </div>
                    <div>
                        <ReactCSSTransitionGroup transitionName="example">
                            {wordsElement}
                        </ReactCSSTransitionGroup>
                    </div>
                    {titles}
                    {this.props.children}
                </div>
            );
        }
    });

    var Footer = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    });


    var config = {
        app      : {
            id: 'myApp'
        },
        header   : {
            title: 'React 实战'
        },
        container: {
            title: ['JUST THE UI', 'VIRTUAL DOM', 'DATA FLOW'],
            word : 'Hello World!'
        },
        footer   : {
            title: 'By StarZou'
        }
    };

    React.render(<App {...config}/>, document.body);

})(window, document);