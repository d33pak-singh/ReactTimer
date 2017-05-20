var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
	return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">
							React Timer Page
						</li>
						<li>
							<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
						</li>
						<li className="menu-text">
							<Link to="/countdown" activeClassName="active-link">CountDown</Link>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
				<ul className="menu">
						<li className="menu-text">
							Created by D33
						</li>
					</ul>
				</div>
			</div>
		);
};


module.exports = Navigation;