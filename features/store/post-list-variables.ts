import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const initialVariables = {
  page: 1,
  searchString: '',
}

const postListVariablesSlice = createSlice({
  name: 'postListVariables',
  initialState: initialVariables,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.page = 1
      state.searchString = action.payload
    },
  },
})

export const store = configureStore({
  reducer: {
    postListVariables: postListVariablesSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const usePostListVariables = () => {
  return useAppSelector((state) => state.postListVariables)
}

export const usePostListPage = (): [number, (page: number) => void] => {
  const page = useAppSelector((state) => state.postListVariables.page)
  const dispatch = useAppDispatch()
  const setPage = (x: number) =>
    dispatch(postListVariablesSlice.actions.setPage(x))
  return [page, setPage]
}

export const usePostListSearch = (): [string, (value: string) => void] => {
  const searchString = useAppSelector(
    (state) => state.postListVariables.searchString
  )
  const dispatch = useAppDispatch()
  const setSearchString = (x: string) =>
    dispatch(postListVariablesSlice.actions.setSearchString(x))
  return [searchString, setSearchString]
}
