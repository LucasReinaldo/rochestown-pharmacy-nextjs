import { FaFacebook, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

import SocialMediaLinkIcon from '../SocialMediaLinkIcon';

import { Container, SizeContainer, SocialContainer } from '../../styles/components/Header';

const Header = () => {
  return (
    <Container>
      <SizeContainer>
        <SocialContainer>
          <SocialMediaLinkIcon href="https://facebook.com/" icon={FaFacebook} />
          <SocialMediaLinkIcon href="https://twitter.com/" icon={FaTwitter} />
          <SocialMediaLinkIcon href="https://youtube.com/" icon={FaYoutube} />
          <FaSearch size={20} />
        </SocialContainer>
      </SizeContainer>
    </Container>
  );
};

export default Header;
