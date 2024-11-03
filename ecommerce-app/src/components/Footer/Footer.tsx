interface FooterProps {
  content: {
    items: (
      | {
          title: string;
          list: { label: string; path: string }[];
          description?: undefined;
        }
      | { title: string; description: string; list?: undefined }
    )[];

    copyright: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <div className="bg-black text-white">
      <div className="flex p-8 justify-around gap-[40px]">
        {content?.items &&
          content?.items?.map((item, index) => {
            return (
              <div className="flex flex-col">
                <p>{item?.title}</p>
                {item?.list &&
                  item?.list?.map((listItem, index) => (
                    <a className="flex flex-col" href={listItem?.path}>
                      {listItem?.label}
                    </a>
                  ))}
              </div>
            );
          })}
      </div>
      <p className="text-sm text-white text-center content-center">
        {content?.copyright}
      </p>
    </div>
  );
};

export default Footer;
