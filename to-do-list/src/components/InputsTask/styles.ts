import styled from "styled-components";

export const ContainerSelectedInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

export const CheckBoxStyle = styled.span`
    position: absolute;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 10px;
`

export const InputTaskStyle = styled.input`
    font-family: 'Inter', sans-serif;
    width: 33.5rem;
    background: ${props => props.theme["gray-400"]};    
    border-radius: 8px;
    border: 1px solid transparent; 
    padding: 1.125rem;

    &::placeholder {
        color: ${props => props.theme["gray-100"]};
        font-weight: 500;
        text-align: start;
        font-size: 0.85rem;
        padding: 1rem;
    }

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.purple};
        color: ${props => props.theme["gray-100"]};
    }
`

export const InputTaskStyleThrough = styled(InputTaskStyle)`
    &::placeholder {
        text-decoration: line-through;
        color: ${props => props.theme["gray-300"]};
    }
`