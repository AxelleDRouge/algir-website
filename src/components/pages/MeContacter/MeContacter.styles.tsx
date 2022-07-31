import styled from "styled-components"

const DEFAULT_COLOR = "#e9937e"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
`

export const Titre = styled.h2`
  text-align: left;
`

export const Tel = styled.div`
  color: ${DEFAULT_COLOR};
  font-size: 29px;
  text-align: left;
  font-weight: bold;
  margin: 5vh;
`

export const Input = styled.input`
  font-size: 29px;
  border-radius: 5px;
  margin: 5px 0;
  border-color: ${DEFAULT_COLOR};
  color: ${DEFAULT_COLOR};
  border: 1px solid ${DEFAULT_COLOR};
`

export const Textarea = styled.textarea`
  font-size: 29px;
  border-radius: 5px;
  border-color: ${DEFAULT_COLOR};
  color: ${DEFAULT_COLOR};
  border: 1px solid ${DEFAULT_COLOR};
`
