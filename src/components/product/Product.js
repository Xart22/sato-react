import React from 'react';
import { Card,Image} from 'semantic-ui-react'



const Product = () =>{
    return(
        <div className="content-product">
        
         <Card>
              <Image src='https://res.cloudinary.com/ruparupa-com/image/upload/f_auto,q_auto/l_ace:c5f05d:8cb580/f_auto,q_auto:eco/v1536224028/Products/121987_1.jpg'/>
              <Card.Header>Whiskas 1.2 gr</Card.Header>
              <div className="data">
              <span className="price ml-2 mb-2">Rp. 50.000</span>
              <span className="soldout">15 Terjual</span>
              </div>
             </Card>

        </div>
    )
}

export default Product