import React from 'react';
import { FolderCard, FileCard } from './Cards';


export default function FolderContents({folder}) {
  let folders = (folder.folders || []);
  let files = (folder.files || []);

  return (
    <div className="folderContents">
      {/* <div className="label">Folders</div> */}
      <div className="list folderList">
        <div className="listScroll folderList">
          {folders.map((fold) => {
            return <FolderCard folder={fold} parentFolderId={folder.id} />
          })}
        </div>
      </div>
      {/* <div className="label">Files</div> */}
      <div className="list fileList">
        <div className="listScroll fileList">
          {files.map((file) => {
            return <FileCard file={file} parentFolderId={folder.id} />
          })}
        </div>
      </div>
    </div>
  )
}