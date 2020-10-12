import React, { useState } from 'react';
import { Countdown } from '@jsany/rc';
import { TStatus } from '@jsany/rc/lib/Countdown/interface';
import './index.less';

const statusTypes: TStatus[] = ['start', 'not_start', 'end', 'offline'];

export default () => {
  const [status, setStatus] = useState<TStatus>('start');

  return (
    <div>
      <h3>
        默认:{' '}
        <select
          name="status"
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value as TStatus)}
        >
          {statusTypes.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </h3>
      <Countdown id={0} initialSecond={10} status={status} />
      <h3>给定类名 test-cd</h3>
      <Countdown id={1} initialSecond={8} className="test-cd" />
      <h3>镜像</h3>
      <Countdown id={2} initialSecond={6} RTL={true} />
      <h3>格式化 天/时/分/秒</h3>
      <Countdown
        id={3}
        initialSecond={5}
        formatter="{{DD}}-天-{{HH}}-时-{{mm}}-分-{{ss}}-秒"
      />
      <h3>自定义渲染倒计时的天/时/分/秒</h3>
      <Countdown
        id={4}
        initialSecond={4}
        renderCustom={({ DD, HH, mm, ss }) => `剩余 ${DD} 天 ${HH}:${mm}:${ss}`}
      />
    </div>
  );
};
