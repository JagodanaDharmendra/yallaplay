function Container(props: any) {
  return (
    <div className="flex w-full content-center justify-center items-center px-4 sm:px-8">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
