import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageContentContainer = ({ children }: Props) => {
  return (
    <main id="pageContentContainer" className="xl:mt-30">
      {children}
    </main>
  );
};

export default PageContentContainer;
