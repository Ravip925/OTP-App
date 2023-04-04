import { useState } from "react";
import styled from "styled-components";
import "../App.css";
import OtpInput from "react-otp-input";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  ${mobile({
    overflow: "hidden",
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1024px;
  ${mobile({
    minWidth: "340px",
    padding: "0",
    background: "linear-gradient(114.45deg, #1e1e1e 9.72%, #1e1e1e 98.31%)",
  })}
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 4rem;
  background: linear-gradient(114.45deg, #1e1e1e 9.72%, #1e1e1e 98.31%);

  ${mobile({
    padding: "0rem",
  })}
`;
const Right = styled.div`
  flex: 1.5;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #0a1118;
  ${mobile({
    display: "none",
  })}
`;
const Top = styled.div`
  flex: 0.9;
  height: 100%;
  padding: 1rem 4rem;
  ${mobile({
    flex: "0.4",
    padding: "2rem 1.5rem",
  })}
`;
const Center = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  ${mobile({
    padding: "1rem 1.5rem",
  })}
`;
const Bottom = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  color: #ffffffb8;
  p {
    cursor: pointer;
  }
  ${mobile({
    padding: "0rem 1.5rem",
  })}
`;

const Logo = styled.img`
  width: 160px;
  height: 41px;
  background-size: cover;
  background-position: center;
  ${mobile({
    width: "115px",
    height: "30px",
  })}
`;
const Title = styled.div`
  flex: 0.7;
  width: 100%;
  font-weight: 600;
  font-size: 26px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const OtpWrapper = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;
const ButtonWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// const OtpInput = styled.input`
//   font-size: 1rem;
//   text-align: center;
//   width: 50px;
//   height: 50px;
//   border: none;
//   outline: none;
//   border-radius: 13px;
// `;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 13px;
  background: linear-gradient(94.62deg, #f76f47 2.55%, #bd61ec 98.64%);
`;
const SideImage = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  width: 100%;
  height: 800px;
  background-image: url("https://i.ibb.co/nnR8bRT/image-3.png");
  background-size: cover;
`;

const TopBar = styled.div`
  width: 75%;
  height: 30px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 100px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 0.7rem;
  border-bottom: 2px solid;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;
const DashBoardImage = styled.img`
  width: 75%;
  height: 550px;
  background-size: cover;
  position: absolute;
  right: 0px;
  top: 130px;
`;

const Home = () => {
  const [otp, setOtp] = useState("");

  //function to set input otp value
  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    if (!otp) {
      alert("Please enter otp");
    } else if (otp.length < 4) {
      alert("Please enter four digit otp");
    }
    console.log("Otp Submitted:", otp);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>
            <Logo src="https://i.ibb.co/Dt0gr63/LOGO.png" alt="logo"></Logo>
          </Top>
          <Center>
            <Title>
              <p>Verification</p>
            </Title>
            <OtpWrapper>
              <Items>
                <p style={{ color: "#ffffffb8" }}>SMS OTP</p>
                <p style={{ color: "#656565" }}>Sent on: 77777-77777</p>
              </Items>
              <Items>
                <div style={{display:"grid", placeItems:"center"}}>
                <OtpInput
                  inputStyle="inputStyle"
                  value={otp}
                  onChange={handleChange}
                  numInputs={4}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input {...props} />}
                />
                </div>
              </Items>
            </OtpWrapper>
            <ButtonWrapper>
              <p style={{ color: "#ffffffb8", fontSize: "14px" }}>
                Entered Wrong Details?{" "}
                <span style={{ color: "#BD61EC", cursor: "pointer" }}>
                  Re-enter
                </span>
              </p>
              <Button onClick={handleSubmit}>Verify</Button>
            </ButtonWrapper>
          </Center>
          <Bottom>
            <p>Go back to home</p>
          </Bottom>
        </Left>
        <Right>
          <SideImage>
            <TopBar>
              <div style={{ backgroundColor: "#65C757" }}></div>
              <div style={{ backgroundColor: "#F6C250" }}></div>
              <div style={{ backgroundColor: "#EC6C62" }}></div>
            </TopBar>
            <DashBoardImage
              src="https://i.ibb.co/GHqQpYh/image2.png"
              alt="dashboard-image"
            ></DashBoardImage>
          </SideImage>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
