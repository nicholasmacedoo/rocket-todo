import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, InputContainer } from "./styles";

export function Input(props: TextInputProps) {
    const { colors } = useTheme()
    const [isFocused, setIsFocused] = useState(false);

    function onFocus() {
        setIsFocused(true);
    }
    
    function onBlur() {
        setIsFocused(false);
    }

    return (
        <Container isFocused={isFocused}>
            <InputContainer 
                placeholderTextColor={colors["gray-300"]} 
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
        </Container>
    )
}