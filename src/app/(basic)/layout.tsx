const BasicLayout = function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-between items-center desktop:max-w-5xl mx-auto px-7 desktop:px-0 py-5">
          {children}
        </div>
      </div>
    </>
  );
};

export default BasicLayout;
