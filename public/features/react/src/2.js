/**
 * @class 2
 * @description
 * @time 2015-05-18 13:02
 * @author StarZou
 **/
(function (window, document) {
    'use strict';


    var Header = React.createClass({
        counter    : 0,
        handleClick: function () {
            // 不建议使用
            this.props.title = ++this.counter;
            this.forceUpdate();
        },
        render     : function () {
            return (
                <div onClick={this.handleClick}>
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