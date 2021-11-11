import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Home" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nihil
        consectetur iste necessitatibus error magnam voluptas delectus ad!
        Distinctio porro repellendus neque doloribus ab officia ea! Iure quidem
        totam incidunt?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
