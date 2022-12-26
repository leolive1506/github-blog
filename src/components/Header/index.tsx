import { ContainerHeader } from './styles'
import coverGithubBlog from '../../assets/github-cover.svg'

export function Header() {
  return (
    <ContainerHeader>
      <img src={coverGithubBlog} alt="" />
    </ContainerHeader>
  )
}
