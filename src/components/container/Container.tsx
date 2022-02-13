function Container(props: any) {
  return (
    <div className="flex w-full items-center content-center justify-center">
      <div className="container flex">
        <div className="w-full px-4">{props.children}</div>
      </div>
    </div>
  );
}

export default Container;
