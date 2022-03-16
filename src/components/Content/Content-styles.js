import styled from 'styled-components'

export const Container = styled.div`
  max-width: 52.5rem;
  width: 100%;

  margin: 0 2rem;

  header {
    span.category {
      display: block;
      margin-top: 2rem;

      font-size: 2.25rem;
      font-weight: 600;
      color: var(--gray);
    }

    span {
      color: var(--white);
    }
  }

  main {
    width: 100%;
    margin-top: 5.625rem;

    .movies-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 4.75rem;
      list-style: none;
    }
  }
`
