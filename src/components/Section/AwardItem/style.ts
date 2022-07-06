import styled from 'styled-components'

import Theme from '@/styles/Theme'

export const Wrapper = styled.div<{ imgUrl: string }>`
  padding: 5px 0px 5px 62px;
  margin-right: 39px;

  height: 54px;

  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: 54px 54px;

  color: ${Theme.grayColor800};
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
`
