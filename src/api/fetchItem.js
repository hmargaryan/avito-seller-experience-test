import hackerNews from './hackerNews'

export default async (id) => {
  return await hackerNews.get(`/item/${id}.json`)
}