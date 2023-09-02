import ItemCount from '../ItemCount/ItemCount'


export default function ItemDetail({producto}) {
  
  return (
    
    
   <><div>
      <div className="card mb-3">
        <img  src="{producto.image} "  className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">name</h5>
          <p className="card-text">detalle</p>
          <p className="card-text"><small className="text-muted">consultar tabla de talles</small></p>
        </div>
      </div>


    </div><div>
        <ItemCount />
      </div>
    </>
  )
}

