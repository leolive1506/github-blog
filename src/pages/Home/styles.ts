import styled from 'styled-components'

export const Container = styled.div`
  max-width: 864px;
  margin: 0 auto;
`
export const FormContainer = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: bold;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;
    color: ${({ theme }) => theme['base-label']};

    ::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
