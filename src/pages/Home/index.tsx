import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  CardsContainer,
  ProfileContainer,
  TitleContainer,
  InfoContainer,
  Card,
} from './styles'

export function Home() {
  return (
    <ProfileContainer>
      <div>
        <img src="https://github.com/leolive1506.png" alt="" />
      </div>
      <InfoContainer>
        <TitleContainer>
          <h1>Leonardo Lopes Santana</h1>
          <a
            href="https://github.com/leolive1506"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleContainer>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <CardsContainer>
          <Card>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </Card>
          <Card>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </Card>
          <Card>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </Card>
        </CardsContainer>
      </InfoContainer>
    </ProfileContainer>
  )
}
