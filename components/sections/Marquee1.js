
const Marquee1 = () => {
    return (
        <>
        <section className="marquee-section">
          <div className="marquee">
            <div className="marquee-group">
              <div className="text" data-text="Brow Lamination">Brow Lamination</div>
              <div className="text" data-text="Eyebrow Design">Eyebrow Design</div>
              <div className="text" data-text="Hidragloss">Hidragloss</div>
              <div className="text" data-text="Full face waxing">Full face waxing</div>
            </div>
      
            <div aria-hidden="true" className="marquee-group">
              <div className="text" data-text="Brow Lamination">Brow Lamination</div>
              <div className="text" data-text="Eyebrow Design">Eyebrow Design</div>
              <div className="text" data-text="Hidragloss">Hidragloss</div>
              <div className="text" data-text="Full face waxing">Full face waxing</div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Marquee1
