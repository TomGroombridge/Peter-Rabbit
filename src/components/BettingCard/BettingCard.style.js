import styled from "styled-components";

export const CardOutline = styled.div`
  border: 1px solid black;
  width: 300px;
  padding: 10px;
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 30px;
`;

export const BettingCompany = styled.div`
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: 1px solid #3097D1;
  text-align: center;
  margin-bottom: 10px;
`

export const BettingOfferDescription = styled.h3`
  color: #3097D1;
  text-align: left;
`

export const BettingTag = styled.div`
  border: 1px solid #3097D1;
  display: inline-block;
  border-radius: 10px;
  padding: 2px;
  color: #fff;
  background-color: #3097D1;
  float: right;
`

export const BetEndDate = styled.div`
  display: inline-block;
  float: left;
`

export const MaxBet = styled.div`
  display: inline-block;
  float: right;
`

export const BettingPicture = styled.div`
  width: 100%;
  height: 200px;
  background-color: red;
`