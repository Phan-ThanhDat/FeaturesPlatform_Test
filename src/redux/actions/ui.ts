import {
  DialogType,
  DrawerPayload,
  TOGGLE_DIALOG,
  TOGGLE_DRAWER,
  ToggleDialogAction,
  ToggleDrawerAction,
} from '../../types'

export function toggleDialog(dialog: DialogType): ToggleDialogAction {
  return {
    type: TOGGLE_DIALOG,
    payload: {
      dialog,
    },
  }
}

export function toggleDrawer(drawer: DrawerPayload): ToggleDrawerAction {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      ...drawer,
    },
  }
}
