import {useState} from 'react'
import {msg, Trans} from '@lingui/macro'
import {useLingui} from '@lingui/react'
import {type NativeStackScreenProps} from '@react-navigation/native-stack'

import {type CommonNavigatorParams} from '#/lib/routes/types'
import {type Gate} from '#/lib/statsig/gates'
import {
  resetTenXGateCache,
  useDangerousSetGate,
  useGatesCache,
} from '#/lib/statsig/statsig'
import {useGoLinksEnabled, useSetGoLinksEnabled} from '#/state/preferences'
import * as SettingsList from '#/screens/Settings/components/SettingsList'
import {atoms as a} from '#/alf'
import {Admonition} from '#/components/Admonition'
import * as Toggle from '#/components/forms/Toggle'
import {Atom_Stroke2_Corner0_Rounded as TenXIcon} from '#/components/icons/Atom'
import {PaintRoller_Stroke2_Corner2_Rounded as PaintRollerIcon} from '#/components/icons/PaintRoller'
import * as Layout from '#/components/Layout'

type Props = NativeStackScreenProps<CommonNavigatorParams>

export function TenXSettingsScreen({}: Props) {
  const {_} = useLingui()

  const goLinksEnabled = useGoLinksEnabled()
  const setGoLinksEnabled = useSetGoLinksEnabled()

  const [gates, setGatesView] = useState(Object.fromEntries(useGatesCache()))
  const dangerousSetGate = useDangerousSetGate()
  const setGate = (gate: Gate, value: boolean) => {
    dangerousSetGate(gate, value)
    setGatesView({
      ...gates,
      [gate]: value,
    })
  }

  return (
    <Layout.Screen>
      <Layout.Header.Outer>
        <Layout.Header.BackButton />
        <Layout.Header.Content>
          <Layout.Header.TitleText>
            <Trans>10X</Trans>
          </Layout.Header.TitleText>
        </Layout.Header.Content>
        <Layout.Header.Slot />
      </Layout.Header.Outer>
      <Layout.Content>
        <SettingsList.Container>
          <SettingsList.Group contentContainerStyle={[a.gap_sm]}>
            <SettingsList.ItemIcon icon={TenXIcon} />
            <SettingsList.ItemText>
              <Trans>Redirects</Trans>
            </SettingsList.ItemText>
            <Toggle.Item
              name="use_go_links"
              label={_(msg`Redirect through go.bsky.app`)}
              value={goLinksEnabled ?? false}
              onChange={value => setGoLinksEnabled(value)}
              style={[a.w_full]}>
              <Toggle.LabelText style={[a.flex_1]}>
                <Trans>Redirect through go.bsky.app</Trans>
              </Toggle.LabelText>
              <Toggle.Platform />
            </Toggle.Item>
          </SettingsList.Group>

          <SettingsList.Group contentContainerStyle={[a.gap_sm]}>
            <SettingsList.ItemIcon icon={PaintRollerIcon} />
            <SettingsList.ItemText>
              <Trans>Tweaks</Trans>
            </SettingsList.ItemText>
            <Toggle.Item
              name="under construction"
              label={_(msg`🚧 under construction...`)}
              value={false}
              onChange={() => {}}
              disabled={true}
              style={[a.w_full]}>
              <Toggle.LabelText style={[a.flex_1]}>
                <Trans>🚧 under construction...</Trans>
              </Toggle.LabelText>
              <Toggle.Platform />
            </Toggle.Item>
          </SettingsList.Group>

          <SettingsList.Group contentContainerStyle={[a.gap_sm]}>
            <SettingsList.ItemIcon icon={PaintRollerIcon} />
            <SettingsList.ItemText>
              <Trans>Gates</Trans>
            </SettingsList.ItemText>
            {Object.entries(gates).map(([gate, status]) => (
              <Toggle.Item
                key={gate}
                name={gate}
                label={gate}
                value={status}
                onChange={value => setGate(gate as Gate, value)}
                style={[a.w_full]}>
                <Toggle.LabelText style={[a.flex_1]}>{gate}</Toggle.LabelText>
                <Toggle.Platform />
              </Toggle.Item>
            ))}
            <SettingsList.BadgeButton
              label={_(msg`Reset gates`)}
              onPress={() => {
                resetTenXGateCache()
                setGatesView({})
              }}
            />
          </SettingsList.Group>

          <SettingsList.Item>
            <Admonition type="warning" style={[a.flex_1]}>
              <Trans>Restart the app after changing if anything breaks.</Trans>
            </Admonition>
          </SettingsList.Item>
        </SettingsList.Container>
      </Layout.Content>
    </Layout.Screen>
  )
}
