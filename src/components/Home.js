import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { addblog,adding  } from '../redux/actions/listAction';
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
import { TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { delblog,search } from '../redux/actions/listAction';


export default function Home() {
    const handleDeleteBlog = (id) => {
        dispatch(delblog(id));
      };
    const blogs = useSelector((state) => state.allBlogs.blogs);
    // console.log(typeof(blogs));
    // console.log(blogs);
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
                //console.log(response.data)
                dispatch(addblog(response.data))//storing value in redux store
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
    //console.log(rows)
    
    const [modalShow, setModalShow] = React.useState(false);
    
    function MyVerticallyCenteredModal(props) {
        const submit=()=>{
            let addb={
                userId:user,
                id: i,
                body: b,
                title:ti,
                 
    
            }
            //console.log(addb);
            dispatch(adding(addb))
            setModalShow(false)
    
        }

        const [user,setUser]=useState();
        const [i,setI]=useState();
        const [ti,setTi]=useState();
        const [b,setB]=useState();
    
        //console.log(props,modalShow);
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
                <Grid container rowSpacing={3}>
                    <Grid item md={6}>
                    <TextField id="outlined-number" label="ID" type="number" value={user} onChange={(e)=>setUser(e.target.value)} InputLabelProps={{  shrink: true,}} />
                    </Grid>
                    <Grid item md={6}>
                    <TextField id="outlined-number" label="UserId" type="number" value={i} onChange={(e)=>setI(e.target.value)} InputLabelProps={{  shrink: true,}} />
                    </Grid>
                    <Grid item md={6}>
                    <TextField id="outlined-basic" label="Title" value={ti} onChange={(e)=>setTi(e.target.value)} variant="outlined" />
                    </Grid>
                    <Grid item md={6}>
                    <TextField id="outlined-basic" label="Body" value={b} onChange={(e)=>setB(e.target.value)}  variant="outlined" />
                    </Grid>

                </Grid>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={props.onHide}>Submit</Button> */}
              <Button onClick={submit}>Submit</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      const [term,setTerm]=useState("")
      const searching=()=>{
        dispatch(search(term));
      }
    return (
    <div data-testid="home-1">
     <hr ></hr>
     <Grid container rowSpacing={0}>
       <Grid item md={5} sx={{paddingLeft:'45px',paddingBottom:'45px'}}>
       <TextField id="outlined-basic" label="Body" value={term} onChange={(e)=>setTerm(e.target.value)}  variant="outlined" />
       <Button className='p-3 ml-3' onClick={searching}>Search</Button>
       </Grid>
       
       <Grid item md={3}>
       </Grid>
       <Grid item md={4}>
       <Button variant="primary" onClick={() => setModalShow(true)}>
        ADD BLOG
      </Button>
       </Grid>
     <TableContainer component={Paper} sx={{paddingRight:'25px',paddingLeft:'25px'}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc",borderTopLeftRadius:'23px'}}>User ID</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc"}}>Id</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc"}}>Title</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc"}}>Body</TableCell>
            <TableCell align="center" sx={{backgroundColor:"#8c7deecc",borderTopRightRadius:'23px'}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row.userId}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.body}</TableCell>
              <TableCell align="left"><DeleteIcon onClick={() => handleDeleteBlog(row.id)}/></TableCell>
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
    </div>
    )
}
