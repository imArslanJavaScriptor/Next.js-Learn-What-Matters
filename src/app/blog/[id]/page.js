export default async function  SinglePostPage({ params }) {
  const { id } =  await params
  return <div>My Post: {id}</div>
 }