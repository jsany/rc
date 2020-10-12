import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Countdown from './index';
import { IProps } from './interface';

const classProps: IProps = {
  initialSecond: 120,
  className: 'test-cd',
};

const rtlProps: IProps = {
  initialSecond: 120,
  RTL: true,
};

describe('test Countdown component', () => {
  it('should render className', () => {
    const wrapper = render(<Countdown {...classProps} />);
    expect(wrapper.container).toBeInTheDocument();
    // wrapper.debug()
    expect(
      wrapper.container.getElementsByClassName('jsany-rc-countdown test-cd')[0],
    ).toHaveClass('jsany-rc-countdown test-cd');
  });

  it('should render RTL', () => {
    const wrapper = render(<Countdown {...rtlProps} />);
    expect(wrapper.container).toBeInTheDocument();
    expect(
      wrapper.container.getElementsByClassName('jsany-rc-countdown RTL')[0],
    ).toHaveClass('jsany-rc-countdown RTL');
  });
});
