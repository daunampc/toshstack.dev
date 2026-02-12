import type { IconType } from 'react-icons/lib';

export interface CardStatProps {
  label: string;
  description?: string;
  status?: { type: 'down' | 'up'; count: number };
  icon?: React.ReactNode;
  type: 'analytics' | 'normal';
  color?: string;
  is_analytic: boolean;
  footer?: React.ReactNode;
  count: string;
}
type AutomationValueTeam = {
  active: number;
  waiting: number;
  waiting_children: number;
  prioritized: number;
  completed: number;
  failed: number;
  delay: number;
  paused: number;
};
export interface CardStatAutomationProps {
  label: string;
  description?: string;
  total: number;
  value: AutomationValueTeam;
  date: string;
}

export interface CardStatBlogProps {
  icon: IconType;
  label: string;
  description?: string;
  value: string;
}
export interface CardStatusBlogProps {
  icon: IconType;
  label: string;
  value: string;
  color: 'red' | 'pink' | 'blue' | 'green' | 'yellow' | 'cyan';
  status: boolean;
}
export interface CardStatEmailMKTProps {
  label: string;
  description?: string;
  status?: { type: 'down' | 'up'; count: number };
  icon?: IconType;
  type: 'analytics' | 'normal';
  color?: string;
  is_analytic: boolean;
  footer?: React.ReactNode;
  count: string;
  data_chart?: { day: string; sent: number }[];
}
export interface CardPostBlogProps extends React.ComponentProps<'div'> {
  title: string;
  description?: string;
  image?: string;
}
