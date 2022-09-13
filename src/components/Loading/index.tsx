import React from "react";
import { ActivityIndicator, Image } from "react-native";
import { useTheme } from "styled-components";
import logo from '../../assets/logo.png'

import { Container } from "./styles";

export function Loading() {
    const { colors } = useTheme();

    return (
        <Container>
            <Image source={logo}/>
            <ActivityIndicator color={colors["gray-600"]} style={{ marginTop: 8 }}/>
        </Container>
    )
}