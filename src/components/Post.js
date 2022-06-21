import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableView from './TableView';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import _ from 'lodash';

const pageSize = 10;
const Post = () => {
    const [posts, setPost] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPost(res.data);
            setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
        });
    });
    const pageCount = posts ? Math.ceil(posts.length/pageSize) : 0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    const pagination =(pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo -1) * pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPost);
    }
    return ( 
        <div>
            {
              !paginatedPosts ? ("No data Found") : <TableView paginatedPosts={paginatedPosts}/>
            }
            
            {/* <Pagination size="lg" aria-label="Page navigation example" style={{float: "right"}}>
                
                    {
                        pages.map((index,page) => (
                            <PaginationItem key={index}>
                                <PaginationLink className={
                                    page === currentPage ? "page-item-active" : "page-item"
                                }><p className='page-link' onClick={() =>pagination(page)}>{page}</p></PaginationLink>
                            </PaginationItem>
                        ))
                    }
                
            </Pagination> */}
            <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                    {
                        pages.map((index,page) => (
                           <li key={index} className={
                            page === currentPage ? 'page-item-active' : 'page-item'
                           }>
                            <p className='page-link' onClick={() => pagination(page)}>{page}</p>
                           </li>
                        ))
                    } 
                </ul>

            </nav>
        </div>
       
     );
}
 
export default Post;