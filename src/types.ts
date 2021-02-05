// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DECREASE_ITEM_TO_CART = 'DECREASE_ITEM_TO_CART'
export const REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART'

export const FETCH_COUNTRY = 'FETCH_COUNTRY'
export const FETCH_COUNTRY_FAIL = 'FETCH_COUNTRY_FAIL'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'

export const RESET_FETCH_COUNTRIES = 'RESET_FETCH_COUNTRIES'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

export type DrawerType = 'left' | 'right' | 'top' | 'bottom'
export type DrawerPayload = {
  anchor: DrawerType
  open: boolean
}
export type ToggleDrawerAction = {
  type: typeof TOGGLE_DRAWER
  payload: DrawerPayload
}
export type DrawerState = {
  [c in DrawerType]: boolean
}
export type FetchStatusState = {
  fetchCountries: boolean | null
}
export type FetchStatusAction =
  | FetchCountryFailAction
  | SagaFetchCountrySuccessAction
  | ResetFetchCountryStatusAction

export type AddItemToCartAction = {
  type: typeof ADD_ITEM_TO_CART
  payload: CountryType
}

export type DecreaseItemToCartAction = {
  type: typeof DECREASE_ITEM_TO_CART
  payload: CountryType
}

export type RemoveItemToCartAction = {
  type: typeof REMOVE_ITEM_TO_CART
  payload: string
}

export type ResetFetchCountryStatusAction = {
  type: typeof RESET_FETCH_COUNTRIES
}

export type FetchCountryAction = {
  type: typeof FETCH_COUNTRY | typeof FETCH_COUNTRY_FAIL
  payload: CountryType[]
}

export type SagaFetchCountryAction = {
  type: typeof FETCH_COUNTRY
  payload: string | undefined
}

export type SagaFetchCountrySuccessAction = {
  type: typeof FETCH_COUNTRY_SUCCESS
  payload: CountryType[]
}

export type FetchCountryFailAction = {
  type: typeof FETCH_COUNTRY_FAIL
}

export type CartActions =
  | AddItemToCartAction
  | RemoveItemToCartAction
  | DecreaseItemToCartAction

export type CountryActions = FetchCountryAction | FetchCountryFailAction

export type SagaCountryActions =
  | FetchCountryFailAction
  | SagaFetchCountrySuccessAction

export type CartState = { countries: { [code: string]: CountryType } }

export type CountryState = { [id: string]: CountryType }

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction | ToggleDrawerAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
  drawer: DrawerState
}

export type AppState = {
  product: ProductState
  ui: UiState
  cart: CartState
  country: CountryState
  fetchStatus: FetchStatusState
  debug: boolean
}

export type CountryType = { orderAmount: number } & {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  region: string
  subregion: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  gini: number
  timezones: string[]
  borders: string[]
  nativeName: string
  numericCode: string
  currencies: {
    code: string
    name: string
    symbol: '$' | any
  }[]
  languages: {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }[]
  translations: { [char: string]: string }
  flag: string
  regionalBlocs: {
    acronym: string
    name: string
    otherAcronyms: []
    otherNames: []
  }[]
  cioc: string
}
export type ErrorType = {
  response: {
    message?: string
    status: number
  }
}

export type ThemeLabel = 'red' | 'blue' | 'green'
export type MainPalette = {
  primary: string
  secondary: string
  disable: string
}
export type SubPalette = {
  primary_contrast: string
  secondary_contrast: string
  disable_contrast: string
}
export type Palette = MainPalette & SubPalette
export type AppTheme = { [c in ThemeLabel]: Palette }

export type ThemeContextType = {
  theme: ThemeLabel
  setTheme: (c: ThemeLabel) => void
}
