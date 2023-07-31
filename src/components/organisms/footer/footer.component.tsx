import { Link } from 'react-router-dom'

import { ContactsWithAdress } from '../../molecules'
import { footer, rights } from '../../../data/content'

import {
  Wrapper,
  Title,
  Item,
  Section,
  LastSection,
  Items,
  Rights,
  Company,
  Policy,
  Component
} from './footer.styles'

export const Footer = () => {
  const lastSection = footer[footer.length - 1];

  return (
    <Component>
      <Wrapper>
        {footer.slice(0, -1).map((section) => (
          <Section key={section.title}>
            <Title>{section.title}</Title>
            <Items>
              {section.items && section.items.map((item) => (
                <Link to={item.title} key={item.title}>
                  <Item>
                    {item.title}
                  </Item>
                </Link>
              ))}
            </Items>
          </Section>
        ))}
        {lastSection && (
          <LastSection>
            <Title>{lastSection.title}</Title>
            <ContactsWithAdress />
          </LastSection>
        )}
      </Wrapper>
      <Rights>
        <Company>{rights.title}</Company>
        <Link to={rights.policy}>
          <Policy>{rights.policy}</Policy>
        </Link>
      </Rights>
    </Component>
  )
}
