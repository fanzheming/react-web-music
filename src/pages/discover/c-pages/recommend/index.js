import React, { memo } from 'react'

function HYRecommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners])

  return (
    <div>
      <h2>HYRecommend: {topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));