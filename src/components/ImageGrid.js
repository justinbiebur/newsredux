import React, { useState } from 'react';
import {Container} from'react-bootstrap'
function ImageGrid(data){

   return(
   <Container style={{width:"90%",maxWidth:"900px",display:"flex",flexDirection:"row",flexWrap:"wrap"}} id="imageGrid">{
    data.data.articles.map((element,index)=>{
       return <div key={index} onClick={()=>{data.changeTitle(element.title)}}style={{flex:"1 1 100px",border:"3px solid grey",minWidth:"50px",}}><img style={{objectFit:"cover",width:"100%",height:"100%"}}src={element.urlToImage}></img> </div>
       })
   }
   </Container>
      
   )
}
export default  React.memo(ImageGrid)