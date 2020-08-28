import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {ADDBOOK} from './Redux/Books/bookActions';

class Books extends Component {

    componentDidMount(){
        this.props.addbook()
    }

    render() {
        
        let booklist=this.props.books.map((book)=>{
            return(
                
            <TableBody>
                <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>    
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.body}</TableCell>
                <TableCell>
                <Avatar>
                <IconButton>
                    <EditIcon />
                </IconButton>
                </Avatar>
                <Avatar>
                <IconButton>    
                    <DeleteIcon/>
                </IconButton>
                </Avatar>
                </TableCell>
                </TableRow>
            </TableBody>
            )
        })
        return (
            <div>
                <h1>Books App</h1>
                <TableContainer>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                        </TableHead>
                        {booklist}
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
        return{
            books:state.books
        }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addbook:()=>{dispatch(ADDBOOK())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books);