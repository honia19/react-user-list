import styled from 'styled-components';

const DeleteButton = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
DetailInfo.firstName = styled.span`
  width: 35%;
`;
DetailInfo.lastName = styled.span`
  width: 35%;
`;

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 70%;
`;
Wrapper.UserInfo = UserInfo;
UserInfo.DetailInfo = DetailInfo;
UserInfo.DeleteButton = DeleteButton;