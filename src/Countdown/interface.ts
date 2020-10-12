import { IBaseProps } from '@/_utils/type';
import { ReactNode } from 'react';

export type TReplaceStatus = 'not_start' | 'end' | 'offline';
export type TStatus = TReplaceStatus | 'start';

export type TDHMS = 'DD' | 'HH' | 'mm' | 'ss';

export type TDHMSProps = Record<'DD' | 'HH' | 'mm' | 'ss', number | string>;

export const transfDate = (second: number): TDHMSProps => {
  if (second < 0) {
    return {
      DD: '--',
      HH: '--',
      mm: '--',
      ss: '--',
    };
  }
  const DD = ~~(second / (24 * 60 * 60));
  const HH = ~~((second % (24 * 60 * 60)) / (60 * 60));
  const mm = ~~(((second % (24 * 60 * 60)) % (60 * 60)) / 60);
  const ss = ~~(((second % (24 * 60 * 60)) % (60 * 60)) % 60);
  return {
    DD: DD < 10 ? `0${DD}` : DD,
    HH: HH < 10 ? `0${HH}` : HH,
    mm: mm < 10 ? `0${mm}` : mm,
    ss: ss < 10 ? `0${ss}` : ss,
  };
};

export interface IProps extends IBaseProps {
  /* 倒计时 初始 剩余秒数 */
  initialSecond: number;
  /* 倒计时状态 */
  status?: TStatus;
  replaceTxt?: Record<TReplaceStatus, string>;
  RTL?: boolean;
  icon?: ReactNode;
  formatter?: string;

  id?: string | number;
  renderCustom?: (dhms: TDHMSProps) => void;
}
