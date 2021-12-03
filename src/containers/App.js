import { NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LogoPic from '../assets/logo.png';
import Home from './Home';
import PublicOpinion from './PublicOpinion';
import Economics from './Economics';
import Environmental from './Environmental';
import RiskFactor from './RiskFactor';

const Wrapper = styled.div`
  margin: auto;
  padding: 100px 40px;
  background: white;
  min-height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: flex-start;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: white;

  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
  }
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Logo = styled.img`
  width: 12em;
`;

const Title = styled.h1`
  display: inline;
  text-align: left;
  font-size: 2em;
`;

const SubTitle = styled.p`
  display: inline;
  margin-top: 0.6em;
  text-align: center;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 2em 0;
`;

const NavButton = styled(NavLink)`
  font-weight: 600;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  margin: 0;
  transition: all 0.2s ease;
  padding: 8px 16px;

  &:hover {
    color: gray;
  }
`;

const SideSection = styled.section`
  top: 0;
  left: 0;
  bottom: 0;
  padding: 2em 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: auto;
`;

const MainSection = styled.section``;

const App = () => {
  return (
    <Wrapper>
      <SideSection>
        <HeaderLink to="/">
          <Header style={{ color: 'black' }}>
            <Logo src={LogoPic} alt="monkey" />
            <Title>
              Nuclear Energy: <br />
              Is It Sustainable?
            </Title>
            <SubTitle>By Daniel Liu</SubTitle>
          </Header>
        </HeaderLink>

        <NavBar>
          <NavButton to="public-opinion">Public Opinion</NavButton>
          <NavButton to="economics">Economics</NavButton>
          <NavButton to="environmental">Environmental</NavButton>
          <NavButton to="risk-factor">Risk Factor</NavButton>
        </NavBar>
      </SideSection>

      <MainSection>
        <Routes>
          <Route path="public-opinion" element={<PublicOpinion />} />
          <Route path="economics" element={<Economics />} />
          <Route path="environmental" element={<Environmental />} />
          <Route path="risk-factor" element={<RiskFactor />} />
          <Route index element={<Home />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};

export default App;
