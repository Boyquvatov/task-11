import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
const Index = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response);
            setUsers(response.data)
        })
    }, [])
    return (
        <div>
            <table className="table table-bordered table-hover table-striped" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.company.name}</td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Index