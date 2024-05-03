import responseTest from "@/static";
import { usePlaylistManagement } from "./hooks";
import Compact from "./PlaylistCard/Compact";
import { IPlaylist } from "@/types";

export default function Playlist() {

  const {List, listStyle} = usePlaylistManagement();

  return (
    <div className={listStyle}>
      <List />
    </div>
  )
}
