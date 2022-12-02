import { Button } from "./Button";

interface SideBarProps {
  genres: GenreProps[]
  onSetGender: (id: number) => void;
  selectedGenreId: number
}

interface GenreProps {
  id: number
  name: string
  title: string
}

export function SideBar({ genres, onSetGender, selectedGenreId }: SideBarProps) {

  function handleClickButton(id: number) {
    onSetGender(id)
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => {
          return (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name as any}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id} />
          );
        })}
      </div>

    </nav>
  );
}