import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { PaginationWrapper } from './CommentsSection.styles';



interface Props {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  setPage: (pageIndex: number) => void;
}

const Pagination: FC<Props> = ({
  currentPage,
  totalPage,
  pageSize,
  setPage,
}) => {
  const pageAmount = Math.ceil(totalPage / pageSize);
  const getPageArray = (): number[] => {
    let pageArr: number[] = [];
    for (let i = 1; i <= pageAmount; i++) {
      if (
        i === 1 ||
        i === pageAmount ||
        (i > currentPage - 3 && i < currentPage + 3)
      )
        pageArr.push(i);
      if (i === currentPage - 4) {
        pageArr.push(0);
      }
      if (i === currentPage + 4) {
        pageArr.push(0);
      }
    }
    return pageArr;
  };
  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <div className="page" onClick={() => setPage(currentPage - 1)}>
          PREVIOUS
        </div>
      )}
      {getPageArray().map((pageIndex) =>
        pageIndex !== 0 ? (
          <div
            className={"page" + (pageIndex === currentPage ? " active" : "")}
            key={pageIndex}
            onClick={() => setPage(pageIndex)}
          >
            {pageIndex}
          </div>
        ) : (
          <div className="page" key={Math.random()}>
            ...
          </div>
        )
      )}
      {currentPage < pageAmount && (
        <div className="page" onClick={() => setPage(currentPage + 1)}>
          NEXT
        </div>
      )}
    </PaginationWrapper>
    
  );
};

export default Pagination;