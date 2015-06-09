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
        render: function () {
            return (
                <div>
                    <Header {...this.props.header}/>
                    <Container {...this.props.container}/>
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
            return (
                <div>
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
        header: {
            title: 'React 实战'
        },
        footer: {
            title: 'By StarZou'
        }
    };

    React.render(<App {...config}/>, document.body);

})(window, document);