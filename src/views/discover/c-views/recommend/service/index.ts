import apiRequest from '@/service'

export function getBanners() {
  return apiRequest.get({
    url: '/banner'
  })
}
