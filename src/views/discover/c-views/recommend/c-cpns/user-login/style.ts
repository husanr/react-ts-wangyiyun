import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 0 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .desc {
    line-height: 22px;
    padding: 16px 0;
  }

  a {
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    :hover {
      background-position: -110px -195px;
    }
  }
`
