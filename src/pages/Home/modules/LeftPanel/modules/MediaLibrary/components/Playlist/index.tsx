import { usePlaylistManagement } from "./hooks";

export default function Playlist() {

  const {List, listStyle} = usePlaylistManagement();

  return (
    <div className={listStyle}>
      <List />
    </div>
  )
}
