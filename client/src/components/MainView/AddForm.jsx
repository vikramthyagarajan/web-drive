import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'

export default function AddForm({}) {
  let [type, setType] = useState("folder");
  let [name, setName] = useState("");
  let [file, setFile] = useState()

  const onSubmit = () => {
    console.log('reff', type, name);
  }
  const handleChange = (fun, e) => {
    fun(e.target.value)
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <div className="addForm">
      <div className="formCard">
        <form className="form">
          <TextField variant="outlined" 
            label="Name" className="input" 
            value={name}
            onChange={handleChange.bind(null, setName)}
            autoFocus
            />
          <FormControl>
            <InputLabel htmlFor="grouped-native-select" className="input">Create a new</InputLabel>
            <Select
              id="grouped-native-select"
              value={type}
              onChange={handleChange.bind(null, setType)}
              className="input"
              margin="normal"
              // onChange={handleChange}
            >
              <MenuItem className="input" value="folder">Folder</MenuItem>
              <MenuItem value="file">File</MenuItem>
            </Select>
          </FormControl>
          {
            type === 'file'?
              (
                <Button
                  className="input upload"
                  variant="contained"
                  style={{maxWidth: '200px', overflow: 'hidden'}}
                  disabled={file}
                  component="label"
                >
                  {
                    file?
                      file.name
                      : "Upload File"
                  }
                  <input
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </Button>
              ) : null
          }
          <Button variant="contained" className="submit" onClick={onSubmit}>Submit</Button>
        </form>
      </div>
    </div>
  )
}