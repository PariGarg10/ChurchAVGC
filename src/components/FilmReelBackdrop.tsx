type FilmReelBackdropProps = {
  panelTop: string;
  panelBottom: string;
  mode?: "overlay" | "stacked";
};

export function FilmReelBackdrop({ panelTop, panelBottom, mode = "overlay" }: FilmReelBackdropProps) {
  if (mode === "stacked") {
    return (
      <div className="pointer-events-none" aria-hidden>
        <div className="film-reel-vintage !relative !left-0 !right-0 !top-0 !opacity-50">
          <div className="film-reel-vintage__strip" style={{ backgroundImage: `url(${panelTop})` }} />
        </div>
        <div className="film-reel-vintage !relative !left-0 !right-0 !bottom-0 !opacity-45 mt-5 md:mt-7">
          <div
            className="film-reel-vintage__strip film-reel-vintage__strip--reverse"
            style={{ backgroundImage: `url(${panelBottom})` }}
          />
        </div>
      </div>
    );
  }

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
