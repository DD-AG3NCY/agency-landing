import {StarsBgImage} from '@gordo-d/d-d-ui-components';

export interface LayoutProps {
  children: any;
}

const AppLayout = ({
  children,
}: LayoutProps) => {
  return (
    <article className="relative h-screen w-screen overflow-hidden bg-neutral-900 ">
      <div
        className="absolute left-0 top-0 z-0 h-[800vh]
      w-screen">
        <StarsBgImage className="h-full w-screen"></StarsBgImage>
      </div>

      <div className="from-primary-black top-0 z-10 w-full bg-gradient-to-b to-neutral-900 pb-60">
        {children}
      </div>
    </article>
  );
};

export default AppLayout;
