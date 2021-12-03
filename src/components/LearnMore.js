import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LearnMore = styled(Link)`
  text-align: ${(p) => (p.orientation ? p.orientation : 'right')};
  width: 100%;
  text-decoration: none;
  color: gray;
  margin-top: 40px;

  &::before {
    content: '☢️';
    margin-right: 8px;
  }
`;

export default LearnMore;
