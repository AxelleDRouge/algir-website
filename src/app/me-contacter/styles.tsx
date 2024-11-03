import styled from "styled-components"
import Button from "../components/common/Button"

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
  margin-bottom: 10px;
`
export const SendButton = styled(Button)`
  position: relative;
  cursor: pointer;
  background-color: ${DEFAULT_COLOR};
  border-radius: 30px;
  margin: auto;
  padding: 15px;
  display: flex;
  width: 200px;
  justify-content: center;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media screen and (min-width: 1440px) {
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
