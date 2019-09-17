import { ReactNode } from 'react';

export interface IOwnProps {
  test: boolean;
  children: ReactNode;
  component?: ReactNode;
}
