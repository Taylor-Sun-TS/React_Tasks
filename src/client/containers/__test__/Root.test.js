import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import Root from 'Root'

describe('<Root />', () => {
	it('should render sucessfully', () => {
		const tree = '<Root />';

		expect(tree).toMatchSnapshot();
	})
})
