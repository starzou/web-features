/**
 * @class 1
 * @description
 * @time 2015-04-11 10:40
 * @author StarZou
 **/

var body = document.body,
    headerDiv = document.getElementById('header'),
    contentDiv = document.getElementById('content');

React.render(<h1>hello world!</h1>, headerDiv);

var HobbyBox = React.createClass({
    render: function () {
        return (
            <div>
                <label>爱好：</label>
                <select>
                    <option>value 1</option>
                    <option>value 2</option>
                    <option>value 3</option>
                </select>
            </div>
        );
    }
});

React.render(<HobbyBox />, contentDiv);