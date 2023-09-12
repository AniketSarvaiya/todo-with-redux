import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../Services/Redux/Actions/itemActions';
import Data from '../Data.json';


function Home() {
    const [name, setName] = useState(null);
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.itemList);
    const { items, isLoading, error } = itemList;
    const [itemData, setItemData] = useState(Data);
    const [inputerror, setError] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatingId, setUpdatingId] = useState();

    const handleSave = () => {
        if (!name && isUpdating == false) {
            setError("Please Enetr Data")
        }
        else {
            if (isUpdating) {
                console.log(updatingId, "-----+-+-+-");
                console.log(itemData[updatingId-1], "------------");
                itemData[updatingId-1].name = name;
                setItemData(itemData)
                setIsUpdating(false);
                setName("")
            }
            else {
                const newItem = { id: itemData.length, name: name }
                setItemData([...itemData, newItem]);
                setName("")
            }
        }
    }

    const handleDelete = (id) => {
        setItemData(itemData.filter((data) => id != data.id))
    }
    useEffect(() => {
        console.log(name);
        // dispatch(getItems());
        // setItemData(items);
        console.log(itemData)
    }, [inputerror, itemData])
    return (
        <>
            <Container className='home-page mt-5'>
                <Col className='container'>
                    {(inputerror) ? <p className='text-danger'> {inputerror} </p> : null}
                    <Row >
                        <input className='inpupt-name m-3' name='name' value={name} placeholder='Enter your text...' onChange={(e) => {
                            setName(e.target.value)
                            if (!inputerror) setError(null)
                        }} />
                        <Button className='m-3 py-2 fw-bold fs-5' onClick={handleSave}>{isUpdating ? "Update" : "Save"}</Button>
                    </Row>

                    <Col className='data-container justify-content-center h-75 overflow-auto'>
                        <table className='table py-2 mt-5 '>
                            <thead className='bg-dark'>
                                <tr className='bg-dark'>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td className=' fw-bold'>Milk</td>
                                    <td> <Button variant='warning' className='mx-2'>Edit</Button> <Button variant='danger' className='mx-2' >Delete</Button></td>
                                </tr> */}
                                {itemData ? itemData.map((items, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td className=' fw-bold'>{items.name}</td>
                                            <td> <Button variant='warning' className='mx-2' onClick={() => {
                                                setName(items.name);
                                                setIsUpdating(true);
                                                setUpdatingId(items.id)
                                                console.log(items.id);
                                            }}>Edit</Button> <Button variant='danger' className='mx-2' onClick={() => {
                                                // setDeletId(items.id);
                                                handleDelete(items.id)

                                            }}>Delete</Button></td>
                                        </tr>
                                    )
                                }) : <h2>No Data yet..</h2>}
                            </tbody>
                        </table>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default Home