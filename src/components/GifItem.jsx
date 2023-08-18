
const GifItem = ({title, url, id}) => {
  console.log(title,url, id)
  return (
  <div className="card">
    
    <p> {title} </p>
    <img src={url} alt={title} />
    

  </div>
    
  )
}

export default GifItem