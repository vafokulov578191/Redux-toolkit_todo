import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const state = useSelector(state => state.users.users)
  return (
    <Box width='100%' height='50px' bgcolor='gray' marginTop='50px' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
        <span style={{color: 'white', fontSize: '30px'}}>Todos: {state.length}</span>
    </Box>
  )
}

export default Header