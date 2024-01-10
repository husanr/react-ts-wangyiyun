import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  padding: 20px;

  .anchors {
    margin-top: 20px;

    .item {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        line-height: 21px;
        .name {
          color: #000;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }

        .position {
          color: #666;

          ${(props) => props.theme.mixin.textNowrap}
        }
      }
    }
  }
`
