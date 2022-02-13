function Container(props: any) {
  return (
    <div className="container">
      <div className="px-6 md:px-8">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
