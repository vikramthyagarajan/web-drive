import React from 'react';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

export default function AddForm({}) {
  return (
    <div className="addForm">
      <div className="formCard">
        <form className="form">
          <TextField variant="outlined" 
            label="Name" className="input" 
            autoFocus
            />
          <FormControl>
            <InputLabel htmlFor="grouped-native-select" className="input">Type</InputLabel>
            <Select
              id="grouped-native-select"
              value="Folder"
              className="input"
              margin="normal"
              // onChange={handleChange}
            >
              <MenuItem className="input" value="folder">Folder</MenuItem>
              <MenuItem value="file">File</MenuItem>
            </Select>
          </FormControl>
            <Button
              className="input upload"
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                style={{ display: "none" }}
              />
            </Button>
          <Button variant="contained" className="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}