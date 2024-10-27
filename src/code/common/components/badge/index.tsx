import { BadgeProps, Badge as RadixBadge } from '@radix-ui/themes';

interface props extends BadgeProps {
  children?: React.ReactNode;
}

function Badge({ children }: props) {
  return <RadixBadge>{children}</RadixBadge>;
}
export default Badge;
