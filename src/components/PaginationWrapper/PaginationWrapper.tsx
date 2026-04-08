import { Pagination, type PaginationProps } from '../Pagination/Paginatiton';

interface PaginationWrapperProps extends PaginationProps {
  top: boolean;
  bottom: boolean;
  children: React.ReactNode;
}

export const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: PaginationWrapperProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};
