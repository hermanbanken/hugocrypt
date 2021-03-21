import PropTypes from 'prop-types';
import React from 'react';

export default class Control extends React.Component {
	render() {
		console.log("UsersControl", this.props);
		return <div>test</div>;
	}
}
// export default class Control extends React.Component {
// 	static propTypes = {
// 		onChange: PropTypes.func.isRequired,
// 		forID: PropTypes.string,
// 		value: PropTypes.node,
// 		classNameWrapper: PropTypes.string.isRequired,
// 	}

// 	static defaultProps = {
// 		value: '',
// 	}

// 	render() {
// 		const {
// 			forID,
// 			value,
// 			onChange,
// 			classNameWrapper,
// 		} = this.props;
// 		console.log("UsersControl", this.props);

// 		return (
// 			<input
// 				type="text"
// 				id={forID}
// 				className={classNameWrapper}
// 				value={value || ''}
// 				onChange={e => onChange(e.target.value)}
// 			/>
// 		);
// 	}
// }