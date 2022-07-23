import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addUserAction, getSingleUserAction } from './store/users'
import Card from './Card';

const App = () => {
  const dispatch = useDispatch()
  const { users, loading, singleUser } = useSelector(state => state.users)

  React.useEffect(()=>{
    dispatch(addUserAction())
  }, [])

  const handleSingleButtonClick = (id)=>{
    dispatch(getSingleUserAction(id))
  }

  

  return (
    <div>
      <div>
        <h1 className='text-center mt-[2rem] text-[3rem]'>Users</h1>
        <div className='flex justify-center gap-[2rem] mt-[2rem]'>
          {users.map(user => {
            return <button onClick={()=>handleSingleButtonClick(user.id)} key={user.id} className='rounded-lg px-[2rem] py-[1rem] bg-black text-white'>{user.first_name}</button>
          }
          )}
        </div>
        {singleUser && <Card user={singleUser}/>}
        {loading && !singleUser && <h1 className='flex items-center justify-center text-[30px] h-[20rem]'>Loading...</h1>}
        {!singleUser && !loading && <div className='flex items-center justify-center text-[30px] h-[20rem]'>No user selected</div>}
      </div>
    </div>
  )
}

export default App