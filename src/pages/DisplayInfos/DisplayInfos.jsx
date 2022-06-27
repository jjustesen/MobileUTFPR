import React from "react";
import MobFlex from "../../components/elements/Flex";
import MobInfo from "../../components/Info";
import MobText from "../../components/elements/Text";
import MobAvatar from "../../components/Avatar";
import { MobChip } from "../../components/Chip/Chip";
import MobFileView from "../../components/FileView";
import { useAula } from "../../providers/aula";
import { ScrollView } from "react-native";

export function DisplayInfos({ icon = "notebook-outline" }) {
  const { selectedAula } = useAula();

  return (
    <MobFlex
      p={3}
      height="100%"
      backgroundColor={`${selectedAula.color || "blue"}.10`}
    >
      <ScrollView>
        <MobFlex display="flex" flexDirection="row">
          <MobAvatar icon={icon} mt={2} />
          <MobFlex flex={1} ml={3}>
            <MobText fontSize={2} fontWeight="bold" color="grey.1">
              {selectedAula.title}
            </MobText>
            <MobText fontSize={1} color="grey.1" mt={1} opacity="0.7">
              {selectedAula.description}
            </MobText>
          </MobFlex>
        </MobFlex>

        <MobFlex mt={3} display="flex" flexDirection="row" alignItems="center">
          {!!selectedAula.classType && (
            <MobChip label={selectedAula.classType} ml={2} />
          )}

          {!!selectedAula.meetLink && <MobChip label="Meet" ml={2} />}
        </MobFlex>

        <MobText color="white" fontSize={3} fontWeight="bold" mt={3} mb={3}>
          Infos
        </MobText>

        {!!selectedAula.classType && (
          <MobInfo
            label="Tipo de aula"
            value={selectedAula.classType}
            mb={3}
            fullWidth
          />
        )}
        <MobInfo
          label={`Data da ${selectedAula.type}`}
          value={`${selectedAula.date}`}
          mb={3}
          fullWidth
        />
        <MobInfo
          label={`Horário da ${selectedAula.type}`}
          value={`${selectedAula.startTime} / ${selectedAula.endTime}`}
          mb={3}
          fullWidth
        />
        {!!selectedAula.meetLink && (
          <MobInfo
            label="Link para meet"
            value={selectedAula.meetLink}
            mb={3}
            fullWidth
          />
        )}

        <MobText color="white" fontSize={3} fontWeight="bold" mt={3} mb={3}>
          Arquivos para a {selectedAula.type}
        </MobText>
        <MobFileView />
      </ScrollView>
    </MobFlex>
  );
}
