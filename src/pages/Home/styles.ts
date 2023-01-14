import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  background: ${({ theme }) => theme['base-profile']};
  margin-top: calc(0px - (212px - calc(212px / 2)));

  display: flex;
  gap: 2rem;
  padding: 2rem;

  /* Base/Profile */
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }

  p {
    margin-top: 0.5rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;

    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;

    svg {
      width: 11.25px;
      height: 11.25px;
    }
  }
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const Card = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`
