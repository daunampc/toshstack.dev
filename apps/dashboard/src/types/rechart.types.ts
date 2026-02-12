import type { TooltipProps } from 'recharts';
import type {
  NameType,
  Payload,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

export type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  payload?: Array<Payload<ValueType, NameType>>;
  label?: string;
  metric?: string;
};
