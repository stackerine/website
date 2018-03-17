import styled from 'styled-components';

export const Section = styled.section`
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 50px;

  @media (min-width: 700px) {
    top: 50%;
    position: relative;
    transform: translateY(-50%);
  }

  p {
    margin: 10%;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin-bottom: 10%;
  }

  i {
    font-size: 2.5em;
    padding: 5px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex: 1 1 33%;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.h3`
  padding: 20px 0;
  text-transform: uppercase;

  strong {
    font-size: 50px;
  }
`;

export const Subscribe = styled.form`
  input {
    height: 36px;
    background: transparent;
    border: 1px solid white;
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    font-size: 22px;
    text-align: center;
    color: white;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
      border-color: #f76363;
    }
  }

  button {
    height: 40px;
    width: 80px;
    border: none;
    background: white;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
    font-size: 22px;
    text-align: center;
    color: #f76363;
    cursor: pointer;
  }
`;
