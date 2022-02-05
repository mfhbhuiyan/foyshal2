import styled from '@emotion/styled';

export const ProkolpaContainer = styled.div`
  width: 80%;
  height: 200px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProkolpaImage = styled.img`
  width: 50%;
  height: 200px;
  background-image: url(${p => p.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const ProkolpaDescription = styled.div`
  width: 45%;
`