type FilmReelBackdropProps = {
  panelTop: string;
  panelBottom: string;
};

export function FilmReelBackdrop({ panelTop, panelBottom }: FilmReelBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="film-reel-vintage film-reel-vintage--top">
        <div className="film-reel-vintage__strip" style={{ backgroundImage: `url(${panelTop})` }} />
      </div>
      <div className="film-reel-vintage film-reel-vintage--bottom">
        <div
          className="film-reel-vintage__strip film-reel-vintage__strip--reverse"
          style={{ backgroundImage: `url(${panelBottom})` }}
        />
      </div>
    </div>
  );
}
