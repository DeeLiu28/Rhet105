import styled from 'styled-components';

const Content = styled.div`
  padding: 0 5em;
  display: flex;
  align-items: center;
  flex-direction: column;

  & img {
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }

  & > img {
    margin-top: 40px;
    width: 60%;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > img {
    width: 30%;
    margin: 40px 20px;
    margin-bottom: 0;
  }

  & p {
    margin: 40px 0;
  }

  & blockquote {
    margin: 30px 0;
  }

  & p,
  & blockquote {
    margin-bottom: 0;
    line-height: 2em;
    width: 100%;
    text-align: justify;
  }

  & p::first-letter,
  & blockquote::first-letter {
    margin-left: 40px;
  }
`;

export default Content;
