import React from 'react';

import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/Description';

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
  return (
    <Card item={folder} type="folderCard">
      <div className="icon">
        <FolderIcon style={{fontSize: 'inherit', color: 'inherit'}} />
      </div>
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