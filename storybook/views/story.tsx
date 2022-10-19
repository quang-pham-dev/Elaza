import * as React from 'react'
import {ScrollView, View, ViewStyle} from 'react-native'

export interface StoryProps {
  children?: React.ReactNode
}

const ROOT: ViewStyle = {flex: 1}

export const Story = (props: StoryProps) => (
  <View style={ROOT}>
    <ScrollView keyboardShouldPersistTaps="handled">
      {props.children}
    </ScrollView>
  </View>
)