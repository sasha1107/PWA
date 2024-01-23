import { router } from 'router';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const elements = router.routes[0].children;
  return (
    <>
      <nav className="grid h-10 grid-cols-4 divide-x">
        {elements.map((route, index) => {
          return (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'text-slate-300' : '',
                  isActive ? 'text-blue-500' : '',
                  isTransitioning ? 'text-red-500' : '',
                  'flex items-center justify-center'
                ].join(' ')
              }
              unstable_viewTransitions
            >
              {route.name}
            </NavLink>
          );
        })}
      </nav>
      <Skeleton width={100} height={30} />
      <Rate rate={3} />
      <HalfRate />
    </>
  );
};

function Skeleton({ width, height }) {
  return (
    <div
      className="skeleton active"
      style={{
        width,
        height
      }}
    ></div>
  );
}
function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z" />
    </svg>
  );
}
function Rate({ rate }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`${index <= rate ? 'animate-star' : ''}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <Star />
        </div>
      ))}
    </div>
  );
  // return (
  //   <div className="text-red-500">
  //     <Star />
  //   </div>
  // );
}
function HalfRate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <clipPath id="firstStarClip">
        {/* 여기서 width는 svg의 viewBox 기준입니다. width가 14이기 때문에 절반만 채워주고 싶다면 7이 되는 것 입니다. */}
        <rect width="12" height="24" />
      </clipPath>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 17.27l5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54c-.17-.41-.75-.41-.92 0L9.19 8.63l-6.01.51c-.44.04-.62.59-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27z"
        id="firstStar"
      />
      <use
        clipPath="url(#firstStarClip)"
        href="#firstStar"
        fill="#966fd6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default Home;
