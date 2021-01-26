import { IconBaseProps } from 'react-icons';
import { Container } from '../../styles/components/SocialMediaLinkIcon';

interface SocialProps {
  href: string;
  icon: React.ComponentType<IconBaseProps>;
  size?: number;
}

const SocialMediaLinkIcon = ({ href, icon: Icon, size = 20 }: SocialProps) => {
  return (
    <Container href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </Container>
  );
};

export default SocialMediaLinkIcon;
