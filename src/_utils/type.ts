export type TPickOption<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

export type OmitType<T, U> = Pick<
  T,
  { [K in keyof T]: T[K] extends U ? never : K }[keyof T]
>;

export interface IBaseProps {
  className?: string;
  prefixCls?: string;
}
