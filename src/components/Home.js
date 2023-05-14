import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { addblog } from '../redux/actions/listAction';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Home() {
    const blogs = useSelector((state) => state.allBlogs.blogs);
    console.log(blogs);
    const dispatch=useDispatch();
    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://jsonplaceholder.typicode.com/posts/',
            headers: {}
        };

        async function makeRequest() {
            try {
                const response = await axios.request(config);
                dispatch(addblog(response.data))
            }
            catch (error) {
                console.log(error);
            }
        }

        makeRequest();

    }, [])
    function createData(userid,title,id,body) {
        return { userid,title,id,body };
      }
    const rows=[];
    for(let i=0;i<blogs.length;i++)
    {
        rows.push(createData(blogs[i].userId,blogs[i].title,blogs[i].id,blogs[i].body))
    }
    console.log(rows)
    
    const [modalShow, setModalShow] = React.useState(false);
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }


    return (
    <>
    <Grid container spacing={0}>
       <Grid item md={5}>
       </Grid>
       <Grid item md={4}>
       <Button variant="primary" onClick={() => setModalShow(true)}>
        ADD BLOG
      </Button>
       </Grid>
       <Grid item md={3}>
       </Grid>
    <TableContainer component={Paper} sx={{paddingRight:'25px',paddingLeft:'25px'}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc",borderTopLeftRadius:'23px'}}>User ID</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc"}}>Id</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc"}}>Title</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc",borderTopRightRadius:'23px'}}>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row.userid}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    )
}
