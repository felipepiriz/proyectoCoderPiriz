import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const TabsMenu = ({current, items}) => {

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate("/products/" + newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',backgroundColor:"#CBCCFF"}}>
        <Tabs value={current} onChange={handleChange} >
            {
                items.map ((item,index) => <Tab key={item.id + index} label = {item.title} value={item.id}/>)
            }
        </Tabs>
      </Box>
    </Box>
  );
}
export default TabsMenu;