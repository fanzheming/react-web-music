import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators';
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style'

export default memo(function NewAlbum() {
    // redux hooks
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    const dispatch = useDispatch()

    // other hooks
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch]);

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title="榜单" />
            <div className="tops">
                <TopRanking info={upRanking} />
                <TopRanking info={newRanking} />
                <TopRanking info={originRanking} />
            </div>
        </RankingWrapper>
    )
})
