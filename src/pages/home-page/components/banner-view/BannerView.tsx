function BannerView() {
  return (
    <div className="relative py-32 md:pt-64 md:pb-72">
      <div className="font-semibold text-white text-4xl md:text-7xl text-center">
        WE ENABLE
        <br />
        GREAT MOBILE GAMES
      </div>
      <div className="absolute left-2/4 top-1/3">
        <img
          src={require("../../../../assets/theta.png")}
          alt="theta"
          className="h-2/3 md:h-full"
        />
      </div>
    </div>
  );
}

export default BannerView;
