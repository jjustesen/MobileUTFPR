import React from "react";
import MobText from "../../components/elements/Text";
import MobFlex from "../../components/elements/Flex";
import MobInfoProfile from "../../components/InfoProfile";
import MobBox from "../../components/elements/Box";
import Image from "../../assets/1589250470632.jpg";
import { ImageBackground } from "react-native";
import { useAuth } from "../../providers/auth";
import MobButton from "../../components/Button";

export function Perfil() {
  const { loggout } = useAuth();

  return (
    <MobFlex>
      <MobFlex
        flexDirection="row"
        backgroundColor="yellow.8"
        p={3}
        pt={5}
        pb={5}
      >
        <MobBox
          height={64}
          width={64}
          backgroundColor="red"
          mr={3}
          borderRadius={16}
          overflow="hidden"
        >
          <ImageBackground
            source={Image}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </MobBox>

        <MobFlex>
          <MobText fontWeight="bold" fontSize={3}>
            Johannes Justesen
          </MobText>

          <MobText fontSize={2}>6º Semestre</MobText>
        </MobFlex>
      </MobFlex>

      <MobFlex p={3}>
        <MobInfoProfile label="RA" value="2094401" />
        <MobInfoProfile label="E-mal" value="justesen@utfpr.com.br" />
        <MobInfoProfile
          label="Semestre matriculado"
          value="6º semestre regular"
        />
        <MobInfoProfile label="Turno" value="Noite" />
        <MobButton title="Sair" color="blue" mt={4} onPress={loggout} />
      </MobFlex>
    </MobFlex>
  );
}
