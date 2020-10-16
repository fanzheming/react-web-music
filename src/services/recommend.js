import request from '@/services/request'

// 顶部横幅
export function getTopBanners() {
  return request({
    url: "/banner"
  })
}
// 热门推荐
export function getHotRecommend(limit){
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}
// 新碟上架
export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit
    }
  })
}

// 榜单
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}