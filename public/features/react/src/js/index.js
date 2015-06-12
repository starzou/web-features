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
        render: function () {
            var titles = this.props.title.map(function (title, index) {
                return (<h1 key={index}>{title}</h1>);
            });

            return (
                <div>
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
            title: ['JUST THE UI', 'VIRTUAL DOM', 'DATA FLOW']
        },
        footer   : {
            title: 'By StarZou'
        }
    };

    React.render(<App {...config}/>, document.body);

})(window, document);