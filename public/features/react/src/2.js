/**
 * @class 2
 * @description
 * @time 2015-05-18 13:02
 * @author StarZou
 **/
(function (window, document) {
    'use strict';

    var Header = React.createClass({
        render: function () {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            );
        }
    });

    React.render(
        <Header title="Hello React!"/>,
        headerDiv
    );

})(window, document);