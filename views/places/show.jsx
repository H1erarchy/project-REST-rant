const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 classNAme="inactive'">
      no comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++)
    stars += '⭐'
    rating = (
      <h3>
       {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
        <h2 classNAme="rant">{c.rant ? 'Rant! :@' : 'Rave! :*' }</h2>
        <h4>{c.content}</h4>
        <h3>
          <strong>- {c.author}</strong>
        </h3>
        <h4>Rating: {c.stars}</h4>
        {rating}
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div id='infoPicture'>
              <div>
                <img src={data.place.pic} alt={data.place.name} width='600' height='600'/>
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
            <div>
            <h1>{ data.place.name }</h1>
            <h2>rating</h2>
            <p>Not rated</p>
            <h2>Description</h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              serving {data.place.cuisines}
            </h4>
            <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form>  
            </div>   
           </div>
           <hr />
           <h2>Comments</h2>
           {comments}
          </main>
        </Def>
    )
}
module.exports = show