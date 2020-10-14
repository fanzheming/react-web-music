import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'
import {HOT_RECOMMEND_LIMIT} from '@/common/contants'
import SongsCover from '@/components/songs-cover'

export default memo(function HotRecommend() {

    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }),shallowEqual)
    const dispatch = useDispatch()

    //other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></ThemeHeaderRCM>
            <div className="recommend-list">
                {
                    hotRecommends.map((item,index) => {
                        return <SongsCover key={item.id} info={item}/>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
