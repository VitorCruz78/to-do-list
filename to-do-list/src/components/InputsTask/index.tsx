import { useState } from 'react'
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { CheckBoxStyle, ContainerIcons, ContainerSelectedInputs, InputTaskStyle, InputTaskStyleThrough, TrashStyle } from "./styles";

export function InputTask({ value, sendConclusedTasks, sendCancelTasks }: any) {

    const [showConclusedTask, setShowConclusedTask] = useState<boolean>(false)

    function handleConfirmTask() {
        setShowConclusedTask(true)

        sendConclusedTasks((state: string) => [...state, value])
    }

    function handleCancelTask() {
        setShowConclusedTask(false)

        sendCancelTasks((state: string) => [...state, value])
    }

    return (
        <>
            <ContainerSelectedInputs>
                {
                    !showConclusedTask
                        ?
                        <ContainerIcons>
                            <CheckBoxStyle onClick={() => handleConfirmTask()}><Circle size={16} color="#4EA8DE" /></CheckBoxStyle>
                            <TrashStyle><Trash size={16} color='#FFF' /></TrashStyle>
                        </ContainerIcons>
                        :
                        <CheckBoxStyle onClick={() => handleCancelTask()}><CheckCircle size={16} color="#8284FA" /></CheckBoxStyle>
                }
                {
                    !showConclusedTask
                        ?
                        <InputTaskStyle disabled placeholder={value}>
                        </InputTaskStyle>
                        :
                        <InputTaskStyleThrough disabled placeholder={value}>
                        </InputTaskStyleThrough>
                }
            </ContainerSelectedInputs>
        </>
    )
}