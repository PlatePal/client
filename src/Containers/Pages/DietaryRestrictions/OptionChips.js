import React, {useState} from 'react';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useStyles} from './styles.js';

const OptionChips = (props) => {
  const styles = useStyles();
  const [chipArray, setChipData] = useState(props.options);
  
  const handleClick = (index) => {
    let arrayCopy = [...chipArray];  
    arrayCopy[index].selected = !chipArray[index].selected;
    setChipData(arrayCopy)
  };

  return (
    <Grid container>
        {chipArray.map((data, index) => {
            return (
                <Chip item
                index={index}
                label={data.label}
                color={data.selected ? 'primary': 'default'} 
                onClick={() => handleClick(index)}
                className={styles.chip}
                size='small'
                />
            );
        })}
        <AddCircleOutlineIcon className={styles.icon}/>
    </Grid>
  );
}
export default OptionChips;