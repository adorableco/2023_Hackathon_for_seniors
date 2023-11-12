import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackButton from 'c:/Users/qldkr/2023_Hackathon_for_seniors/frontend/src/components/BackButton.jsx';

export default function Community_Board(props) {
  const navigate = useNavigate();
  return (
    <BoardContainer>
      <Header>
        <h1>함께 해요 게시판</h1>
      </Header>
      <CategorySection>
        <div>
          <p>카테고리</p>
          <p>바둑</p>
        </div>
        <button onClick={() => {
          navigate("/community/write");
        }}>글쓰기</button>
      </CategorySection>
      <hr />

      <div style={{ overflowY: "scroll", height: "70%", border: "1px solid #ccc", padding: "10px" }}>
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        <BoardItem
          to="/board/badook"
          imgSrc="/img/park.jpg"
          altText="공원사진"
          title="매주 월요일마다 바둑..."
          content="쉼터공원에서 아침 9시에 바둑 같이..."
          writer="이세돌"
        />
        <hr />
        {/* Add more BoardItems as needed */}
        
      </div>
      <BackButton/>
    </BoardContainer>
  );
}

function BoardItem({ to, imgSrc, altText, title, content, writer }) {
  return (
    <BoardItemContainer to={to}>
      <BoardItemImage className="imgSize" src={imgSrc} alt={altText} />
      <BoardItemContent>
        <BoardItemTitle>{title}</BoardItemTitle>
        <BoardItemText>{content}</BoardItemText>
        <BoardItemDetails>작성자: {writer}</BoardItemDetails>
      </BoardItemContent>
    </BoardItemContainer>
  );
}

const Header = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: 5vw;

  h1 {
    margin: 0;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  height: 95vh;
  flex-direction: column;
  margin-top: 20px;
`;

const CategorySection = styled.div`
  display: flex;
  justify-content: space-between;
 align-items: center;

  p {
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
  }

  button {
    padding: 5px 15px;
    border-radius: 30px;
    background-color: #000080;
    color: #ffffff;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
  }
`;

const BoardItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const BoardItemImage = styled.img`
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 10px;
`;

const BoardItemContent = styled.div`
  margin-left: 10px;
  max-width: 70%;
`;

const BoardItemTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const BoardItemText = styled.article`
  font-size: 18px;
`;

const BoardItemDetails = styled.div`
  font-size: 8px;
  text-align: right;
  margin-top: 10px;
`;
