import { NavigationButtonStyle } from '../../styles/Dashboard/NavigationButtonLayout';

export default function NavigationButton({ active, children }) {
  return (
    <NavigationButtonStyle active={active}>
      {children}
    </NavigationButtonStyle>
  );
}
