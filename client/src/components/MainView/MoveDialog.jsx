import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';

import useDebounce from '../../config/debouncer';
import { getSearchData } from '../../state/folder/folder.selectors';
import { callSearchFolder, callMoveFileOrFolder } from '../../state/folder/folder.controller';

export default function MoveDialog(props) {
  let [search, searchFor, onChange, onEnter] = useDebounce();
  let searchData = useSelector(getSearchData());
  let folders = searchData.folders || [];
  let dispatch = useDispatch();

  useEffect(() => {
    // Debounced search is here
    dispatch(callSearchFolder(searchFor));
  }, [searchFor]);

  const { open, showMoveDialog } = props;

  const handleClose = () => {
    showMoveDialog(false);
  };

  const handleListItemClick = (folder) => {
    showMoveDialog(false);
    dispatch(callMoveFileOrFolder(folder.id))
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className="dialogTitle">Move To</DialogTitle>
      <ListSubheader>
        <TextField autoFocus className="moveSearch" label="Search Folders" 
          value={search}
          onKeyDown={onEnter}
          onChange={onChange} 
          />
      </ListSubheader>

      <List>
        {folders.map((folder) => (
          <ListItem button onClick={() => handleListItemClick(folder)} key={folder.id}>
            <ListItemText primary={folder.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
