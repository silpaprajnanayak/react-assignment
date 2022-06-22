import React, {useState} from 'react';
import axios from 'axios';
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const TableView = (props) => {
    const getData = () => {
        return props.paginatedPosts;
    }
    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            //   .then((result) => {
            //     // result.json().then((res) => {
            //     //     console.log(res)
            //     // })
            //     getData();
               
             // });
    }
    return ( 
        <Table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                props.paginatedPosts.map((post, index) => (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td><Button color="success" >Edit</Button></td>
                        <td><Button color="danger" onClick={() => deleteUser(post.id)}>Delete</Button></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
        
    );
}
 
export default TableView;