import React, { memo } from 'react'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewaAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'

function HYRecommend(props) {

    return (
        <RecommendWrapper>
            <TopBanner></TopBanner>
            <Content className="wrap-v2">
                <RecommendLeft>
                  <HotRecommend></HotRecommend>
                  <NewaAlbum></NewaAlbum>
                  <RecommendRanking></RecommendRanking>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(HYRecommend);


// function HYRecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//     <div>
//       <h2>HYRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })


// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));