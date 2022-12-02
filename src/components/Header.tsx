interface HeaderProps {
    selectedGenre: GenreProps
}

interface GenreProps {
    title: string
}

export function Header({ selectedGenre }: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    );
}