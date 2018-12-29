import React from 'react';
import { map } from 'lodash';
import { Path, StyledSvg } from './core';
import mapSvg from './mapSvg';

const InnerPath = ({
	d,
	id,
	onClickPath,
}) => (
	<Path
		onClick={onClickPath(id)}
		id={id}
		d={d}
	/>
);

const InnerSvg = ({
	className,
	onClickPath,
	src,
}) => {
	const { viewBox, paths } = mapSvg(src);
	return (
		<StyledSvg
			className={className}
			viewBox={viewBox}
		>
			{map(paths, (d, id) => (
				<InnerPath
					key={id}
					d={d}
					id={id}
					onClickPath={onClickPath}
				/>
			))}
		</StyledSvg>
	);
};

const Svg = StyledSvg.withComponent(InnerSvg);

Svg.defaultProps = { alt: '' };
Svg.displayName = 'Svg';

export default Svg;
