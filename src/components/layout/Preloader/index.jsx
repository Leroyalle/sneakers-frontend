import ContentLoader from 'react-content-loader';
export const Preloader = () => (
  <ContentLoader speed={2} width={210} height={260} viewBox="0 0 150 200" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="0" ry="0" width="150" height="91" />
    <rect x="0" y="107" rx="0" ry="0" width="150" height="15" />
    <rect x="0" y="129" rx="0" ry="0" width="93" height="15" />
    <rect x="0" y="164" rx="8" ry="8" width="80" height="24" />
    <rect x="116" y="160" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);
