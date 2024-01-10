import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  padding: 20px;

  .artists {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
        /* object-fit: cover; */
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        border: 1px solid #e9e9e9;
        border-left: none;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }

        .alias {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`
