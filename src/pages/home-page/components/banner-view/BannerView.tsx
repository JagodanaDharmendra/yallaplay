function BannerView() {
  return (
    <div className="relative py-32 md:py-52">
      <div className="font-semibold text-white text-2xl md:text-5xl xl:text-7xl text-center">
        WE ENABLE
        <br />
        GREAT MOBILE GAMES
      </div>
      <div className="absolute left-2/4 top-1/3">
        <img
          src={require("../../../../assets/theta.png")}
          alt="theta"
          className="h-full"
        />
      </div>
    </div>
  );
}

export default BannerView;
