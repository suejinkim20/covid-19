import styled from 'styled-components'

export const PastLabel = styled.span(({ theme, dense = false, type = '' }) => `
background-color: ${ theme.color.primary.main };
color: #ffffff;
border: 0;
position: absolute;
right: 0px;
margin: 1rem;
padding: 0.3rem 0.7rem;
border-radius: 14px;
font-size: 0.8rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.1rem;
filter: brightness(1.0) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.2));
`)
