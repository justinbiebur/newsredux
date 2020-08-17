import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchNews, showLoadingCircle } from '../actions'
import NewsHeadline from './newsHeadline'
import { Button, Spinner, Col ,Row} from 'react-bootstrap';
import ImageGrid from './ImageGrid'

function fetchNewPage(currentPage,pages){
    let newPage=currentPage;
   
    newPage=newPage%4;
    
    return pages[newPage]
    
}


let NewsContainer = ({ props,dispatch }) => {
   
    const [state, changeState] = useState({ pages: [{ query: "trump" }, { country: "de", category: "business" }, { country: "us" }, { sources: "bbc-news" }], currentPage: 0 })
    const [title, changeTitle] = useState("Click on an image to show the headline here ");
    const spinner = <Spinner style={{marginTop:"50px"}}animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
    

    useEffect(()=>{
        dispatch(fetchNews(state.pages[0]))
    },[])


    return (

        <React.Fragment>
            <Row style={{ width:"90%",paddingTop:"20px", display: "flex", flexDirection: "row",alignItems:"center"}}>
               <Col md={2} xs={0}>

               </Col>
               <Col xs={12} md={6}>
                    <NewsHeadline headline={title}></NewsHeadline>
               </Col>
                
                <Col style={{display:"flex",justifyContent:"start"}} xs={12} md={4}>
                    <Button id="chngBtn" onClick={()=>{dispatch(fetchNews(fetchNewPage(props.setNews.page,state.pages)))}} variant="outline-danger">Change</Button>
                </Col>
                
            </Row>
            <div style={{ marginTop:"70px",minHeight:"300px", display: "flex", flexDirection: "row", justifyContent: "center" }}>

            {props.setNews.isLoading ?spinner:<ImageGrid data={props.setNews.news} changeTitle={changeTitle}></ImageGrid>}
            </div>
        </React.Fragment>

    )


}
const mapStateToProps = state => ({
    props: state
});
NewsContainer = connect(mapStateToProps)(NewsContainer)

export default NewsContainer