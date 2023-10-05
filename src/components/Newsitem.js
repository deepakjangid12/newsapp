import React from 'react'

function Newsitem(props) {

  return (
    <div className='my-3'>
      <div className="card" >
        <div style={{ display: "flex", position: "absolute", right: "5px", top: "1px" }}>
          <span className="badge rounded-pill bg-danger" style={{ zIndex: "1", left: "50px" }}>
            {props.source}
          </span>
        </div>
        <img src={props.image ? props.image : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/7/2023_7$largeimg_703261718.JPG"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}<span className="badge bg-black" style={{ backgroundColor: "green", color: "red" }}>New</span></h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">Last updated {new Date(props.date).toGMTString()}</small>
          </p>
          <a href={props.more} target='blank' className="btn btn-dark">read more</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem
