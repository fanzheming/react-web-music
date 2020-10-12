import React, { memo } from 'react'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRCM title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}></ThemeHeaderRCM>
        </HotRecommendWrapper>
    )
})
