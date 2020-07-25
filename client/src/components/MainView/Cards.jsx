import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/Description';

import { callGetFolder } from '../../state/folder/folder.controller';

const Card = ({type, item, children}) => {
  return (
    <div key={item.id} className={"card " + type }>
      <div className="cardActions">
        {/* <div className="cardName">{item.name}</div> */}
      </div>
      {children}
      <div className="cardFooter">
        <div className="cardName">{item.name}</div>
      </div>
    </div>
  )

}

export const FolderCard = ({folder}) => {
  let dispatch = useDispatch();
  const handleCardClick = () => {
    dispatch(callGetFolder(folder.id));
  }

  return (
    <Card item={folder} type="folderCard">
      <Link to={"/folders/" + folder.id} onClick={handleCardClick}>
        <div className="icon">
          <FolderIcon style={{fontSize: 'inherit', color: 'inherit'}} />
        </div>
      </Link>
    </Card>
  )
}

export const FileCard = ({file}) => {
  return (
    <Card item={file} type="fileCard">
      <div className="icon">
        <FileIcon style={{fontSize: 'inherit', color: 'inherit'}} />
      </div>
    </Card>
  )
}