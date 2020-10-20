import React, { FC, useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '@/_utils/index';
import './style/index.less';
import intanceWorker from './worker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { IProps, transfDate, TDHMS, TDHMSProps } from './interface';

const Countdown: FC<IProps> = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    RTL,
    id: countdownId,
    ...restProps
  } = props;
  const prefixCls = getPrefixCls('countdown', customizePrefixCls);
  const classesWrapper = classNames(prefixCls, className, {
    RTL,
  });
  const classesNum = classNames(`${prefixCls}-num`);
  const classesTxt = classNames(`${prefixCls}-txt`);

  const [remainSecond, setRemainSecond] = useState<number>(
    restProps.initialSecond,
  );
  const [status, setStatus] = useState<IProps['status']>(restProps.status);
  useEffect(() => {
    const wkUUID =
      countdownId === undefined
        ? Math.random()
            .toString(32)
            .slice(-6)
        : countdownId;
    // console.log('wkUUID: ', wkUUID);
    if (status === 'start') {
      // 使用 web worker 解决直接使用 setInterval 的触摸滑动时渲染卡顿问题
      intanceWorker.postMessage({
        id: wkUUID,
        second: restProps.initialSecond,
      });
      intanceWorker.addEventListener('message', ev => {
        const { id, second } = ev.data;
        if (id === wkUUID) {
          console.log('wkUUID, id, second: ', wkUUID, id, second);
          setRemainSecond(second);
          second < 0 && setStatus('end');
        }
      });
    }
    return () => {
      intanceWorker.postMessage({ id: wkUUID, second: -1 });
      intanceWorker.terminate();
    };
  }, []);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const dhms = useMemo(() => transfDate(remainSecond), [remainSecond]);

  const renderFormatter = (dhms: TDHMSProps) => {
    const formatArr = restProps.formatter?.split('-');
    return (formatArr || []).map((item, index) => {
      if (new RegExp(/^{{[DHms]{2}}}$/).test(item)) {
        return (
          <span key={index} className={classesNum}>
            {dhms?.[item.replace('{{', '').replace('}}', '') as TDHMS]}
          </span>
        );
      } else {
        return (
          <span key={index} className={classesTxt}>
            {item}
          </span>
        );
      }
    });
  };

  return (
    <div className={classesWrapper}>
      {restProps?.icon || <FontAwesomeIcon icon={faStopwatch} />}
      <span style={{ margin: '0 0.3rem' }} />
      {status === 'start'
        ? restProps.renderCustom?.call(null, dhms) || renderFormatter(dhms)
        : restProps.replaceTxt?.[status!]}
    </div>
  );
};

Countdown.displayName = 'Countdown';
Countdown.defaultProps = {
  initialSecond: 0,
  status: 'start',
  formatter: '{{DD}}-Day-{{HH}}-h-{{mm}}-m-{{ss}}-s',
  replaceTxt: {
    not_start: 'Not start yet',
    end: 'Already end',
    offline: 'Already offline',
  },
};

export default Countdown;
