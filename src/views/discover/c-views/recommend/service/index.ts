import apiRequest from '@/service'

// 获取轮播图
export function getBanners() {
  return apiRequest.get({
    url: '/banner'
  })
}
// 获取热门推荐
export function getHotRecommend(params: any) {
  return apiRequest.get({
    url: '/personalized',
    params
  })
}
