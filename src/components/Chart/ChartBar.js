import React from 'react';
import './Chart.css';

const ChartBar = props => {
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill"></div>
			</div>
			<div className="chart-bar__label">{props.value}</div>
		</div>
	);
};

export default ChartBar;
