import { Platform } from 'react-native'

export default function testID(id) {
  id = typeof id !== 'string' ? id + '' : id; // fix android crash, when id is number
  return Platform.OS === 'android' ?
    { accessible: true, accessibilityLabel: id } :
    { testID: id }
}
