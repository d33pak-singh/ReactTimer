var React = require('react');

var Clock = React.createClass({
	getDefaultPrpos: function(){
		totalSeconds: 0
	},
	propTypes: function(){
		totalSeconds: React.propTypes.number
	},
	formatSeconds: function(totalSeconds){
		var seconds = totalSeconds % 60;
		var Minutes = Math.floor(totalSeconds / 60);

		if(seconds < 10){
			seconds = "0" + seconds;
		}

		if(Minutes < 10){
			Minutes = "0" + Minutes;
		}

		return Minutes + ":" + seconds;
	},
	render: function(){
		var {totalSeconds} = this.props;
		return (
				<div className="clock">
					<span className="clock-text">
						{this.formatSeconds(totalSeconds)}
					</span>
				</div>
			);
	}
});

module.exports = Clock;