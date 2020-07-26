import React, { useState } from 'react';
import { FolderCard, FileCard } from './Cards';
import MoveDialog from './MoveDialog';


export default function FolderContents({folder}) {
  let folders = (folder.folders || []);
  let files = (folder.files || []);
  let [open, setOpen] = useState(false);

  const showMoveDialog = (value) => {
    setOpen(value);
  }

  return (
    <div className="folderContents">
      {/* <div className="label">Folders</div> */}
      <div className="list folderList">
        <div className="listScroll folderList">
          {folders.map((fold) => {
            return <FolderCard key={fold.id} folder={fold} parentFolderId={folder.id} showMoveDialog={showMoveDialog} />
          })}
        </div>
      </div>
      {/* <div className="label">Files</div> */}
      <div className="list fileList">
        <div className="listScroll fileList">
          {files.map((file) => {
            return <FileCard key={file.id} file={file} parentFolderId={folder.id} showMoveDialog={showMoveDialog} />
          })}
        </div>
      </div>
      <MoveDialog open={open} showMoveDialog={showMoveDialog} />
    </div>
  )
}