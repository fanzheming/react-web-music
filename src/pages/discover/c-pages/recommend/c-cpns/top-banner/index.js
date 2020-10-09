import React, { memo, useEffect} from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function TopBanner() {

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])
    
    return (
        <BannerWrapper>
            <div className='banner wrap-v2'>
                <BannerLeft></BannerLeft>
                <BannerRight></BannerRight>
            </div>
        </BannerWrapper>
    )
})
