import { ChainTypes, NetworkTypes } from '@shapeshiftoss/types'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReduxState } from 'state/reducer'
import { fetchAsset } from 'state/slices/assetsSlice/assetsSlice'

export const ALLOWED_CHAINS = {
  [ChainTypes.Ethereum]: true,
  [ChainTypes.Bitcoin]: true
}

export const useFetchAsset = ({ chain, tokenId }: { chain: ChainTypes; tokenId?: string }) => {
  const dispatch = useDispatch()
  const asset = useSelector((state: ReduxState) => state.assets[tokenId ?? chain])

  useEffect(() => {
    if (asset) return
    dispatch(fetchAsset(asset.caip19))
  }, [asset, chain, dispatch, tokenId])

  return asset
}
