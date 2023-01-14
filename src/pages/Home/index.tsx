import { Profile } from './components/Profile'
import { Publications } from './components/Profile/Publications'
import { Container, FormContainer } from './styles'

export function Home() {
  return (
    <Container>
      <Profile />
      <FormContainer>
        <div>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </div>

        <input placeholder="Buscar conteúdo" />
      </FormContainer>
      <Publications />
    </Container>
  )
}
