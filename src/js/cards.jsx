import React from "react";

export const Cards=()=>{
 return(
   <>
    <div className="container col-12 col-lg-3 mx-auto">
        <div className="card mt-4 " style={{width:"16rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJYgpP0rC-rK_QswCJSWSUtwI0R3FJibknnLQYCWO8Lb942r3g7_IRY1XPJKuBX3PG5I&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text  border-bottom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
            
       </div>
            
    </div>     
  </>
)
}