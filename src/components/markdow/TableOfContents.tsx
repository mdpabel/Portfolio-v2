const TableOfContents = ({ tocHtml }: { tocHtml: string }) => {
  return <div className='toc' dangerouslySetInnerHTML={{ __html: tocHtml }} />;
};

export default TableOfContents;
