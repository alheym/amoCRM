import { Link } from 'react-router-dom'

import { contacts } from '../../../data/content'

import {
  Wrapper,
  Contact,
  Text,
  WrapperContacts,
  Icons,
  TextAdress
} from './contacts.styles'

export const Contacts = () => {
  return (
    <Wrapper>
      <Text to={contacts[1].content} key={contacts[1].name}>{contacts[1].content}</Text>
      {contacts.slice(2).map((contact) => (
        <Link to={contact.name} key={contact.name}>
          <Contact key={contact.name} src={contact.content} alt={contact.name} />
        </Link>
      ))}
    </Wrapper>
  )
}

export const ContactsWithAdress = () => {
  return (
    <WrapperContacts>
      <Text to={contacts[1].content} key={contacts[1].name}>{contacts[1].content}</Text>
      <Icons>
        {contacts.slice(2).map((contact) => (
          <Link to={contact.name} key={contact.name}>
            <Contact key={contact.name} src={contact.content} alt={contact.name} />
          </Link>
        ))}
      </Icons>
      <TextAdress to={contacts[0].content} key={contacts[0].name}>
        {contacts[0].content}
      </TextAdress>
    </WrapperContacts>
  )
}
