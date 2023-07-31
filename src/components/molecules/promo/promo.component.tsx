import {
  Wrapper,
  WhiteText,
  GradientTextFree,
  GradientTextConsult
} from './promo.styles'

export const Promo = () => {
  return (
    <Wrapper>
      <WhiteText>Вместе с
        <GradientTextFree> Бесплатной</GradientTextFree>
        <GradientTextConsult> консультацией </GradientTextConsult>
        мы дарим:</WhiteText>
    </Wrapper>
  )
}
