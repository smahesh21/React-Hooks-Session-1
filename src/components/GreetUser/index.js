import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  const onChangeName = e => setName(e.target.value)
  return (
    <MainContainer>
      <NameInput
        type="text"
        onChange={onChangeName}
        placeholder="Your name"
        value={name}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
