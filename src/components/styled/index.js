import { Container, Row, Col, ListGroupItem, Button } from 'reactstrap';
import styled, { css } from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Wrapper = styled(Container)`
  max-width: 1170px;
  margin: 20px auto;
`;

const Navigation = styled(Nav)``;

const StyledRow = styled(Row)``;

const Column = styled(Col)``;

const StyledButton = styled(Button)``;

const List = styled(Jumbotron)`
  padding: 0;
  overflow: hidden;
`;

const ListItem = styled(ListGroupItem)`
  padding: 0.95rem 1.25rem;
  cursor: pointer;
  background-color: aliceblue;
  ${({ color }) =>
    color === 'danger' &&
    css`
      text-decoration: line-through;
    `}
`;

const Card = styled(Jumbotron)`
  padding: 2rem 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Image = styled.img`
  margin-right: 2rem;
  height: 155px;
`;

const MenuWrapper = styled.div`
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 25px;
  justify-content: center;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const ContainerPopUp = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PopUp = styled(Jumbotron)`
  width: 70%;
  height: 50%;
  max-width: 400px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 3rem 2rem;
  background: ${(props) => props.theme.colors.finalPopupColor};
`;

export {
  Wrapper,
  List,
  Image,
  Card,
  FlexWrapper,
  StyledRow,
  Column,
  MenuWrapper,
  Navigation,
  ListItem,
  Text,
  StyledButton,
  ContainerPopUp,
  PopUp,
};
