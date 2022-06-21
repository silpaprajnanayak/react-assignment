import React from 'react';
import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const TableView = (props) => {
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
                        <td><Button color="success">Edit</Button></td>
                        <td><Button color="danger">Delete</Button></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
        
    );
}
 
export default TableView;