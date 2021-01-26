import Image from 'next/image'
import { useState } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';

import {
  Container,
  SizeContainer,
  ImageContainer,
  NavContainer,
  ContactContainer,
  MenuSection,
} from '../../styles/components/Navbar';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <SizeContainer>
        <ImageContainer>
          <Image src="/rochestown.png" width={210} height={170} alt="Rochestown Pharmacy" />
        </ImageContainer>
        <NavContainer>
          <ContactContainer>
            <div>
              <FaPhoneAlt size={28} />
            </div>
            <span>+353 21 489 3639</span>
          </ContactContainer>
          <MenuSection open={open}>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
              <div className="one" />
              <div className="two" />
              <div className="three" />
            </button>
            <nav>
              <ul>
                <li>
                  <a href="#home">home</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#services">services</a>
                </li>
                <li>
                  <a href="#gallery">gallery</a>
                </li>
                <li>
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </nav>
          </MenuSection>
        </NavContainer>
      </SizeContainer>
    </Container>
  );
};

export default Navbar;
