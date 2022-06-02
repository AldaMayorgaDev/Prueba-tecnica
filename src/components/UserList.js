import React, { useEffect } from 'react'
// redux
import { fetchAllUsers } from '../redux/slices/datos';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => {

  const { list: users } = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])




  return (

    

    <div className="container mt-4">
      <div className="row">
        { 
        
          
          users.map((user, index) => (
            <div key={index} className="col-md-3 mb-4">
            <div className="card">
            <img src={user.banner} alt="Banner" />
            <div className="card-body">
              <div className="card-title">{user.title }</div>
              <h5 className="card-body">{`${user.speakers} ${user.company}`}</h5> 
              <p> {user.description}</p>
            </div>
            
            </div>
            </div>  
              
          ))
        }
      </div>
    </div>
  )
}

export default UserList
